const $BeeProvider = Java.loadClass("cy.jdkdigital.productivebees.setup.BeeReloadListener");
const IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
const $Integer = Java.loadClass("java.lang.Integer");
const $String = Java.loadClass("java.lang.String");
const LootTable = Java.loadClass('net.minecraft.world.level.storage.loot.LootTable');
const LootParams = Java.loadClass('net.minecraft.world.level.storage.loot.LootParams');
const LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams');
const FakePlayerFactory = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayerFactory');
const GameProfile = Java.loadClass('com.mojang.authlib.GameProfile');
const Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');
const ModTags = Java.loadClass('cy.jdkdigital.productivebees.init.ModTags');
const ModEntities = Java.loadClass('cy.jdkdigital.productivebees.init.ModEntities');
const Mob = Java.loadClass("net.minecraft.world.entity.Mob");
const EntityType = Java.loadClass('net.minecraft.world.entity.EntityType');
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const LootContextParamSets = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')
const InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')


ServerEvents.recipes(catalyst => {

    const skip = [
        "kamikaz",
        "beebee",
        "villager",
        "butcher",
        "amber",
        "wanna"
    ]

    const time = 1200 //ticks
    const bees = $BeeProvider.INSTANCE.getData();

    bees.forEach((value, key) => {
        let keyword = value.toString().split(":")[1];
        if(!skip.includes(keyword))
        {
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
        }

        if(keyword === "wanna")
        {
            catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
            .progressX(54)
            .progressY(20)
            .width(110)
            .height(60)
            .requireEnergy(20000, 0, 4)
            .requireFluid('1000x productivebees:honey', 25, 40)
            .requireItem(`1x productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:${keyword}"}]`, 0, 25, 0)
            .requireItem(`32x minecraft:honeycomb`, 25, 20)
            .produceItem('1x minecraft:rotten_flesh', 90, 0)
            .requireFunctionEachTick("apiary_recipe_each")
            .requireFunctionOnEnd("apiary_recipe_end_wanna")
        }
    });

    const specialRecipes = [
        {
            beeType: "productivebees:spawn_egg_dye_bee",
            output: "1x minecraft:white_dye",
            onEnd: "apiary_recipe_end_dye"
        },
        {
            beeType: "productivebees:spawn_egg_rancher_bee",
            output: '64x productivebees:comb_milky',
            onEnd: "apiary_recipe_end_rancher"
        },
        {
            beeType: "productivebees:spawn_egg_creeper_bee",
            output: '64x productivebees:comb_powdery',
            onEnd: "apiary_recipe_end_rancher"
        }
    ];

    // Añadir recetas especiales
    specialRecipes.forEach(recipe => {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_apiary", time)
        .progressX(54)
        .progressY(20)
        .width(110)
        .height(60)
        .requireEnergy(20000, 0, 4)
        .requireFluid('1000x productivebees:honey', 25, 40)
        .requireItem(`1x ${recipe.beeType}`, 0, 25, 0)
        .requireItem(`32x minecraft:honeycomb`, 25, 20)
        .requireFunctionEachTick("apiary_recipe_each")
        .produceItem(recipe.output, 90, 0)
        .requireFunctionOnEnd(recipe.onEnd)
        
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

MMREvents.recipeFunction("apiary_recipe_end_dye", event => {
    // Obtener todos los items del output
    let outputItems = event.machine.getItemsStored(IOType.OUTPUT);

    // Buscar y eliminar el white_dye (si existe)
    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if(item && item.id == 'minecraft:white_dye')
        {
            if (item.count >= 1) {
                item.count = item.count - 1;
            }
            break;
        }
    }

    // Producir 32 tintes aleatorios del tag
    const dyeTag = Ingredient.of('#c:dyes');
    const dyes = dyeTag.getStacks().toArray();
    
    if(dyes.length === 0)
    {
        return;
    }
    
    for(let i = 0; i < 8; i++)
    {
        let randomIndex = Math.floor(Math.random() * dyes.length);
        let randomDye = dyes[randomIndex].copy();
        randomDye.count = Math.floor(Math.random() * 8);
        event.machine.addItem(randomDye);
    }
});

MMREvents.recipeFunction("apiary_recipe_end_rancher", event => {
});

MMREvents.recipeFunction("apiary_recipe_end_wanna", event => {
    const controller = event.machine;
    const level = event.getBlock().getLevel();
    const inputItems = controller.getItemsStored(IOType.INPUT);
    const outputItems = controller.getItemsStored(IOType.OUTPUT);

    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if(item && item.id === 'minecraft:rotten_flesh')
        {
            item.count = item.count - 1;
            break;
        }
    }

    let entityData = null;
    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id === 'productivebees:amber')
        {
            let entityDataComponent = item.componentMap.get("minecraft:entity_data");
            if (entityDataComponent) {
                entityData = entityDataComponent.copyTag();
                break;
            }
        }
    }

    if(!entityData)
    {
        return;
    }

    let entityType = EntityType.byString(entityData.getString("id")).orElse(null);
    if(!entityType)
    {
        return;
    }
    
    let entity = entityType.create(level);
    if(!entity)
    {
        return;
    }
    entity.load(entityData);

    if(!(entity instanceof Mob))
    {
        entity.discard();
        return;
    }
    let mob = entity;

    let lootTable = level.getServer().reloadableRegistries().getLootTable(mob.getLootTable());
    if(lootTable === LootTable.EMPTY)
    {
        entity.discard();
        return;
    }

    let fakePlayer = FakePlayerFactory.get(level, new GameProfile(ModEntities.WANNA_BEE_UUID, "wanna_bee"));
    
    let machinePos = event.getBlock().getPos();
    let lootContextBuilder = new LootParams.Builder(level)
        .withParameter(LootContextParams.LAST_DAMAGE_PLAYER, fakePlayer)
        .withParameter(LootContextParams.DAMAGE_SOURCE, level.damageSources().generic())
        .withParameter(LootContextParams.TOOL, new ItemStack(Items.DIAMOND_AXE))
        .withOptionalParameter(LootContextParams.DIRECT_ATTACKING_ENTITY, fakePlayer)
        .withOptionalParameter(LootContextParams.ATTACKING_ENTITY, fakePlayer)
        .withParameter(LootContextParams.THIS_ENTITY, mob)
        .withParameter(LootContextParams.ORIGIN, new Vec3(
            machinePos.getX() + 0.5, 
            machinePos.getY() + 0.5, 
            machinePos.getZ() + 0.5
        ));

    const lootContext = lootContextBuilder.create(LootContextParamSets.ENTITY);
    const loot = lootTable.getRandomItems(lootContext);
    const filteredLoot = loot.stream()
        .filter(itemStack => {
            try {
                return !itemStack.is(ModTags.WANNABEE_LOOT_BLACKLIST);
            } catch (e) {
                return true;
            }
        })
        .toList();

    if(!filteredLoot.isEmpty())
    {
        let random = level.random;
        for(let i = 0; i < 16; i++)
        {
            let randomIndex = random.nextInt(filteredLoot.size());
            let randomItem = filteredLoot.get(randomIndex).copy();
            controller.addItem(randomItem);
        }
    }

    entity.discard();
});
