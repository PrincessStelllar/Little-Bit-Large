let $BeeProvider = Java.loadClass("cy.jdkdigital.productivebees.setup.BeeReloadListener");
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");
let $Integer = Java.loadClass("java.lang.Integer");
let $String = Java.loadClass("java.lang.String");
let LootTable = Java.loadClass('net.minecraft.world.level.storage.loot.LootTable');
let LootParams = Java.loadClass('net.minecraft.world.level.storage.loot.LootParams');
let LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams');
let FakePlayerFactory = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayerFactory');
let GameProfile = Java.loadClass('com.mojang.authlib.GameProfile');
let Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');
let ModTags = Java.loadClass('cy.jdkdigital.productivebees.init.ModTags');
let ModEntities = Java.loadClass('cy.jdkdigital.productivebees.init.ModEntities');
let Mob = Java.loadClass("net.minecraft.world.entity.Mob");
let EntityType = Java.loadClass('net.minecraft.world.entity.EntityType');
let ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
let LootContextParamSets = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')
let InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')


ServerEvents.recipes(catalyst => {

    let skip = [
        "kamikaz",
        "beebee",
        "villager",
        "butcher",
        "amber",
        "wanna"
    ]

    let time = 1200 //ticks
    let bees = $BeeProvider.INSTANCE.getData();

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

    let specialRecipes = [
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
            onEnd: "apiary_recipe_end_creeper"
        },
        /*{
            beeType: "productivebees:spawn_egg_quarry_bee",
            output: '1x minecraft:stone',
            onEnd: "apiary_recipe_end_quarry"
        },*/
        {
            beeType: "minecraft:bee_spawn_egg",
            output: '128x minecraft:honeycomb_block',
            onEnd: "apiary_recipe_end_bee"
        }
    ];

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

    //phil
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:phil"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 1.0,
            "item": {
                "item": "minecraft:white_concrete"
            },
            "max": 4,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //pollen
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:allergy"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 1.0,
            "item": {
                "item": "productivetrees:pollen"
            },
            "max": 6,
            "min": 2
            }
        ],
        "processingTime": 20
    })

    //sponge
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:sponge"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 0.25,
            "item": {
                "item": "minecraft:sponge"
            },
            "max": 1,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //sus gravel and sand
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:sussy"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:suspicious_gravel"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:suspicious_sand"
            },
            "max": 1,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //sugarbag
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:sugarbag"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 1,
            "item": {
                "item": "productivebees:sugarbag_honeycomb"
            },
            "max": 2,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //froglight
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:ribbeet"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:ochre_froglight"
            },
            "max": 2,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:pearlescent_froglight"
            },
            "max": 2,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:verdant_froglight"
            },
            "max": 2,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //water
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:water"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:cod"
            },
            "max": 4,
            "min": 1
            },
            {
            "chance": 0.35,
            "item": {
                "item": "minecraft:pufferfish"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 1,
            "item": {
                "item": "minecraft:kelp"
            },
            "max": 6,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:salmon"
            },
            "max": 4,
            "min": 1
            },
            {
            "chance": 0.75,
            "item": {
                "item": "minecraft:tropical_fish"
            },
            "max": 4,
            "min": 1
            }
        ],
        "processingTime": 20
    })

    //pepto
    catalyst.custom({
        type: "productivebees:centrifuge",
        fluid: {
            amount: 40,
            fluid: "productivebees:honey"
        },
        ingredient: {
            "type": "productivebees:component",
            "components": {
            "productivebees:bee_type": "productivebees:pepto_bismol"
            },
            "items": "productivebees:configurable_comb"
        },
        outputs: [{
            "chance": 1.0,
            "item": {
                "tag": "c:waxes"
            },
            "max": 1,
            "min": 1
            },
            {
            "chance": 1,
            "item": {
                "item": "productivebees:sugarbag_honeycomb"
            },
            "max": 4,
            "min": 2
            }
        ],
        "processingTime": 20
    })
})

MMREvents.recipeFunction("apiary_recipe_each", event => {
    let controler = event.machine;
    let level = event.getBlock().getLevel();
    let isRaining = level.isRaining();
    let timeOfDay = level.getDayTime() % 24000;
    let isDay = timeOfDay >= 0 && timeOfDay < 12000;
    let paused = true;

    let weatherTrait = "none";
    let dayTrait = "diurnal";
    let productivityTrait = "normal";

    let inputItems = controler.getItemsStored(IOType.INPUT);
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
                weatherTrait = "none";
                dayTrait = "diurnal";
                productivityTrait = "normal";
                
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

    if(isRaining)
    {
        paused = !(weatherTrait === "any" || weatherTrait === "rain");
    }
    else
    {
        paused = !(weatherTrait === "any" || weatherTrait === "none");
    }

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
            default:
                event.setBaseSpeed(1.0);
        }
    }

    if(paused)
    {
        event.setBaseSpeed(0.0)
    }

});

MMREvents.recipeFunction("apiary_recipe_end", event => {
    let controller = event.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let combBonus = 0;
    let beeType = null;

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:spawn_egg_configurable_bee')
        {
            if (item.componentMap.has("minecraft:entity_data"))
            {
                let entityData = item.componentMap.get("minecraft:entity_data");
                if(entityData)
                {
                    beeType = entityData.toString().split("[,]")[1];
                    if(beeType && beeType.includes(':'))
                    {
                        beeType = beeType.split(':')[2].split("\"")[0];
                    }
                    break;
                }
            }
        }
    }

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

    if(upgradeCount > 0) combBonus += upgradeCount * 16;
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
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

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 16;
            break;
        }
    }

    if(beeType && combBonus > 0)
    {
        let fullStacks = Math.floor(combBonus / 64);
        let remainder = combBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(`productivebees:configurable_comb[productivebees:bee_type="productivebees:${beeType}"]`, 64);
            event.machine.addItem(stack);
        }
        

        if(remainder > 0)
        {
            let stack = Item.of(`productivebees:configurable_comb[productivebees:bee_type="productivebees:${beeType}"]`, remainder);
            event.machine.addItem(stack);
        }
    }


});

MMREvents.recipeFunction("apiary_recipe_end_dye", event => {
    let outputItems = event.machine.getItemsStored(IOType.OUTPUT);

    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if(item && item.id == 'minecraft:white_dye')
        {
            if(item.count >= 1)
            {
                item.count = item.count - 1;
            }
            break;
        }
    }

    let dyes = Ingredient.of('#c:dyes').getStacks().toArray();
    
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
    let controller = event.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let combBonus = 0;
    let upgradeCount = 0;

    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivelib:upgrade_productivity_4')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }

    if(upgradeCount > 0) combBonus += upgradeCount * 16;
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
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

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 16;
            break;
        }
    }

    if(combBonus > 0)
    {
        let fullStacks = Math.floor(combBonus / 64);
        let remainder = combBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(`productivebees:comb_milky`, 64);
            event.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of(`productivebees:comb_milky`, remainder);
            event.machine.addItem(stack);
        }
    }
});

MMREvents.recipeFunction("apiary_recipe_end_creeper", event => {
    let controller = event.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let combBonus = 0;
    let upgradeCount = 0;

    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivelib:upgrade_productivity_4')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }

    if(upgradeCount > 0) combBonus += upgradeCount * 16;
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
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

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 16;
            break;
        }
    }

    if(combBonus > 0)
    {
        let fullStacks = Math.floor(combBonus / 64);
        let remainder = combBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(`productivebees:comb_powdery`, 64);
            event.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of(`productivebees:comb_powdery`, remainder);
            event.machine.addItem(stack);
        }
    }
});

MMREvents.recipeFunction("apiary_recipe_end_bee", event => {
    let controller = event.machine;
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let combBonus = 0;
    let upgradeCount = 0;

    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivelib:upgrade_productivity_4')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }

    if(upgradeCount > 0) combBonus += upgradeCount * 16;
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
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

    if(productivityTrait)
    {
        switch(productivityTrait)
        {
            case "very_high": 
                combBonus += 192;
                break;
            case "high": 
                combBonus += 128;
                break;
            case "medium": 
                combBonus += 64;
                break;
        }
    }

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 64;
            break;
        }
    }

    if(combBonus > 0)
    {
        let fullStacks = Math.floor(combBonus / 64);
        let remainder = combBonus % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of('minecraft:honeycomb_block', 64);
            event.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of('minecraft:honeycomb_block', remainder);
            event.machine.addItem(stack);
        }
    }
});

MMREvents.recipeFunction("apiary_recipe_end_wanna", event => {
    let controller = event.machine;
    let level = event.getBlock().getLevel();
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let outputItems = controller.getItemsStored(IOType.OUTPUT);

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

    let lootContext = lootContextBuilder.create(LootContextParamSets.ENTITY);
    let loot = lootTable.getRandomItems(lootContext);
    let filteredLoot = loot.stream()
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

/*MMREvents.recipeFunction("apiary_recipe_end_quarry", event => {
    let controller = event.machine;
    let level = event.getBlock().getLevel();
    let inputItems = controller.getItemsStored(IOType.INPUT);
    let outputItems = controller.getItemsStored(IOType.OUTPUT);
    let combBonus = 0;
    let upgradeCount = 0;

    for(let i = 0; i < outputItems.size(); i++)
    {
        let item = outputItems.get(i);
        if(item && item.id === 'minecraft:stone')
        {
            item.count = item.count - 1;
            break;
        }
    }

    for(let i = 0; i < inputItems.size() && upgradeCount < 4; i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivelib:upgrade_productivity_4')
        {
            upgradeCount += item.count;
            if(upgradeCount > 4)
            {
                upgradeCount = 4;
                break;
            }
        }
    }

    if(upgradeCount > 0) combBonus += upgradeCount * 16;
    let productivityTrait = null;
    for (let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:honey_treat')
        {
            let geneGroupList = item.componentMap.get("productivebees:gene_group_list");
            if(geneGroupList)
            {
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

    for(let i = 0; i < inputItems.size(); i++)
    {
        let item = inputItems.get(i);
        if(item && item.id == 'productivebees:sugarbag_honeycomb')
        {
            combBonus += 16;
            break;
        }
    }

    let quarry_tag = Ingredient.of('#productivebees:flowers/quarry').getStacks().toList().filter(e => !(e.toString().includes("chipped:") || 
                                                                                                          e.toString().includes("evilcraft:") || 
                                                                                                          e.toString().includes("pneumati") || 
                                                                                                          e.toString().includes("create:")));
    // Repetir 5 veces
    for(let cycle = 0; cycle < (5+(combBonus%8)); cycle++)
    {
        let randomItem = quarry_tag[Math.floor(Math.random() * quarry_tag.length)].getId();
        
        let randomAmount = Math.floor(Math.random() * 25) + 24;
        
        let fullStacks = Math.floor(randomAmount / 64);
        let remainder = randomAmount % 64;

        for(let i = 0; i < fullStacks; i++)
        {
            let stack = Item.of(randomItem, 64);
            event.machine.addItem(stack);
        }
        
        if(remainder > 0)
        {
            let stack = Item.of(randomItem, remainder);
            event.machine.addItem(stack);
        }
    }
})*/
