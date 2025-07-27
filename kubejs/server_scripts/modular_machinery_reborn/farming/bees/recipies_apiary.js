const $BeeProvider = Java.loadClass("cy.jdkdigital.productivebees.setup.BeeReloadListener");
const IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
const MachineControler = Java.loadClass("es.degrassi.mmreborn.common.integration.kubejs.function.MachineControllerJS")
const $Integer = Java.loadClass("java.lang.Integer")
const $String = Java.loadClass("java.lang.String")

ServerEvents.recipes(catalyst => {
    const time = 1200 //ticks
    const bees = $BeeProvider.INSTANCE.getData();
    bees.forEach((value, key) => {
        let keyword = value.toString().split(":")[1];
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
        .progressX(54)
        .progressY(20)
        .width(110)
        .height(60)
        .requireEnergy(20000, 0, 4)
        .requireFluid('1000x productivebees:honey', 25, 40)
        .requireItem(`1x productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:${keyword}"}]`, 0, 25, 0)
        .requireItem(`32x minecraft:honeycomb`, 25, 20)
        .produceItem(`64x productivebees:configurable_comb[productivebees:bee_type="productivebees:${keyword}"]`, 90, 0)
        .requireFunctionEachTick("apiary_recipe_each")
        .requireFunctionOnEnd("apiary_recipe_end")
    });
})

MMREvents.recipeFunction("apiary_recipe_each", event => {
    let controler = event.machine;
    let level = event.getBlock().getLevel();
    let isRaining = level.isRaining();
    let timeOfDay = level.getDayTime() % 24000;
    let isDay = timeOfDay >= 0 && timeOfDay < 12000;
    let paused = true;

    // Traits POR DEFECTO (se usarán si no hay treat válido)
    let weatherTrait = "none";
    let dayTrait = "diurnal";
    let productivityTrait = "normal";

    // Buscar honey_treat con NBT específico
    let inputItems = controler.getItemsStored(IOType.INPUT);
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
                // Reiniciar traits a valores por defecto para este treat
                weatherTrait = "none";
                dayTrait = "diurnal";
                productivityTrait = "normal";
                
                for(let j = 0; j < geneGroupList.size(); j++)
                {
                    let geneGroup = geneGroupList.get(j);
                    let attribute = geneGroup.attribute();
                    let value = geneGroup.value();
                    let purity = geneGroup.purity();
                    
                    // Solo procesar genes con pureza 100
                    if(purity.equals($Integer.valueOf("100")))
                    {
                        let traitValue = value.includes(".") 
                            ? value.toString().split("[.]")[1] 
                            : value;
                            
                        switch(attribute)
                        {
                            case "weather_tolerance":
                                weatherTrait = traitValue;
                            break;
                            case "behavior":
                                dayTrait = traitValue;
                            break;
                            case "productivity":
                                productivityTrait = traitValue;
                            break;
                        }
                    }
                }
            }
        }
    }

    // Lógica de clima (siempre se aplica, con traits actuales)
    if(isRaining)
    {
        paused = !(weatherTrait === "any" || weatherTrait === "rain");
    }
    else
    {
        paused = !(weatherTrait === "any" || weatherTrait === "none");
    }

    // Lógica de ciclo diurno (solo si no está pausado por clima)
    if(!paused)
    {
        if(isDay)
        {
            paused = !(dayTrait === "diurnal" || dayTrait === "metaturnal");
        }
        else
        {
            paused = !(dayTrait === "nocturnal" || dayTrait === "metaturnal");
        }
    }

    // Ajustar velocidad si no está pausada
    if(!paused)
    {
        switch(productivityTrait)
        {
            case "medium":
                event.setBaseSpeed(2.0);
                break;
            case "high":
                event.setBaseSpeed(3.0);
                break;
            case "very_high":
                event.setBaseSpeed(4.0);
                break;
            default: // "normal"
                event.setBaseSpeed(1.0);
        }
    }

    if(paused)
    {
        event.setBaseSpeed(0.0) //not really 0, just very slow
    }
});

MMREvents.recipeFunction("apiary_recipe_end", event => {
    let controller = event.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let combBonus = 0; // Acumulador de bonificaciones
    let beeType = null;

    // Buscar el tipo de abeja del spawn egg
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:spawn_egg_configurable_bee')
        {
            // Acceder al componente minecraft:entity_data
            if (item.componentMap.has("minecraft:entity_data"))
            {
                let entityData = item.componentMap.get("minecraft:entity_data");
                if(entityData)
                {
                    // Obtener el tipo de abeja (ej: "slimy")
                    beeType = entityData.toString().split("[,]")[1];
                    // Eliminar namespace si está presente
                    if(beeType && beeType.includes(':'))
                    {
                        beeType = beeType.split(':')[2].split("\"")[0];
                    }
                    break;
                }
            }
        }
    }

    // 1. Contar upgrades de productividad (hasta 4)
    let upgradeCount = 0;
    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if (item && item.id == 'productivelib:upgrade_productivity_4')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }

    if(upgradeCount > 0) combBonus += upgradeCount * 16; // +16 por cada upgrade
    console.log(combBonus)
    // 2. Buscar honey_treat con NBT para extraer 'productivity'
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
                // Reiniciar traits para cada treat
                productivityTrait = null;
                
                for(let j = 0; j < geneGroupList.size(); j++)
                {
                    let geneGroup = geneGroupList.get(j);
                    let attribute = geneGroup.attribute();
                    let value = geneGroup.value();
                    let purity = geneGroup.purity();
                    
                    if(purity.equals($Integer.valueOf("100")))
                    {
                        let traitValue = value.includes(".") 
                            ? value.toString().split("[.]")[1] 
                            : value;
                            
                        if (attribute == "productivity")
                        {
                            productivityTrait = traitValue;
                        }
                    }
                }
            }
        }
    }

    // Aplicar bonificación por trait de productividad
    if(productivityTrait)
    {
        switch(productivityTrait)
        {
            case "very_high": 
                combBonus += 128;
                break;
            case "high": 
                combBonus += 64;
                break;
            case "medium": 
                combBonus += 32;
                break;
        }
    }

    // 3. Verificar sugarbag con stack no múltiplo de 8 (prioridad)
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 16;
            break;
        }
    }

    //Añadir los extra combs
    if (beeType && combBonus > 0)
    {
        // Calcular cuántos stacks completos de 64 necesitamos
        const fullStacks = Math.floor(combBonus / 64);
        const remainder = combBonus % 64;

        // Añadir stacks completos de 64
        for(let i = 0; i < fullStacks; i++)
        {
            const stack = Item.of(`productivebees:configurable_comb[productivebees:bee_type="productivebees:${beeType}"]`, 64);
            event.machine.addItem(stack);
        }
        
        // Añadir el resto si hay
        if(remainder > 0)
        {
            const stack = Item.of(`productivebees:configurable_comb[productivebees:bee_type="productivebees:${beeType}"]`, remainder);
            event.machine.addItem(stack);
        }
    }
});