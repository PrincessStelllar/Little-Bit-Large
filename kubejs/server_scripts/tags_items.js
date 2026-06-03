//priority: 21
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.tags('item', catalyst => {
    catalyst.add('c:armors/diamond', 'minecraft:diamond_helmet')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_chestplate')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_leggings')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_boots')

    //Fluid Pumps
    catalyst.add('c:block/fluidpump', 'mekanism:electric_pump')
    catalyst.add('c:block/fluidpump', 'rangedpumps:pump')
    catalyst.add('c:block/fluidpump', 'energizedpower:fluid_pump')
    catalyst.add('c:block/fluidpump', 'xycraft_machines:hydro_pump')

    //Jetpacks
    catalyst.add('c:creativeflytype/jetpack', 'mekanism:jetpack')
    catalyst.add('c:creativeflytype/jetpack', 'ironjetpacks:jetpack')

    //Exalted Crafter Non-Powered
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter_wooden')
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter')

    //Exalted Crafter Powered
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_wooden_empowered')
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_empowered')

    //Rubber Tag
    catalyst.add('c:rubber', 'industrialforegoing:dryrubber')

    //Plastic tag
    catalyst.add('c:plastics', 'pneumaticcraft:plastic')
    catalyst.add('c:plates/plastic', 'pneumaticcraft:plastic')

    //Eternal Ores
    catalyst.add('c:dusts/plutonium', 'eternalores:plutonium_dust')
    catalyst.add('c:pellets/plutonium', 'eternalores:plutonium_ingot')

    //Oritech 
    catalyst.remove('c:ingots/steel', 'oritech:biosteel_ingot')
    catalyst.add('c:ingots/plutonium', 'oritech:plutonium_pellet')
    catalyst.add('c:pellets/plutonium', 'oritech:plutonium_pellet')
    catalyst.add('c:dusts/plutonium', 'oritech:plutonium_dust')
    catalyst.add('c:nuggets/plutonium', 'oritech:small_plutonium_pellet')
    catalyst.add('c:ingots/uranium', 'oritech:uranium_pellet')
    catalyst.add('c:nuggets/uranium', 'oritech:small_uranium_pellet')

    //Mekanism
    catalyst.add('c:ingots/plutonium', 'mekanism:pellet_plutonium')
    catalyst.add('c:ingots', 'mekanism:pellet_plutonium')

    catalyst.add('c:flours','pneumaticcraft:wheat_flour')
    catalyst.add('c:flours/wheat','pneumaticcraft:wheat_flour')
    catalyst.add('c:flours','enderio:flour')
    catalyst.add('c:flours/wheat','enderio:flour')

    //Fix for Boon of Earth enchant dropping non generated ores
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:fluorite_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:osmium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:uranium_ore')
    catalyst.remove('c:ores_in_ground/stone', 'mekanism:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_lead')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_aluminum')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_silver')
    catalyst.remove('c:ores_in_ground/stone', 'immersiveengineering:ore_uranium')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:lead_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:nickel_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:sulfur_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:silver_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'railcraft:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'xycraft:aluminum_ore_stone')
    catalyst.remove('c:ores_in_ground/stone', 'energizedpower:tin_ore')
    catalyst.remove('c:ores_in_ground/stone', 'create:zinc_ore')
    catalyst.remove('c:ores_in_ground/stone', 'eternalores:plutonium_ore_block')

    let saptag = (saplings) => {
        catalyst.add('minecraft:saplings', saplings)
    }
    saptag('productivetrees:black_ember_sapling')
    saptag('productivetrees:brown_amber_sapling')
    saptag('productivetrees:cave_dweller_sapling')
    saptag('productivetrees:firecracker_sapling')
    saptag('productivetrees:flickering_sun_sapling')
    saptag('productivetrees:foggy_blast_sapling')
    saptag('productivetrees:night_fuchsia_sapling')
    saptag('productivetrees:purple_spiral_sapling')
    saptag('biomesoplenty:red_maple_sapling')
    saptag('productivetrees:rippling_willow_sapling')
    saptag('productivetrees:slimy_delight_sapling')
    saptag('productivetrees:soul_tree_sapling')
    saptag('productivetrees:sparkle_cherry_sapling')
    saptag('productivetrees:thunder_bolt_sapling')
    saptag('productivetrees:time_traveller_sapling')
    saptag('productivetrees:blue_yonder_sapling')
    saptag('productivetrees:water_wonder_sapling')


    function addSeedTags()
    {
        global.recipesSeedToRemove.forEach(seedId => {
            const seedName = seedId.split(':')[1].replace('_seeds', '');
            const name = seedId + "_seeds"
            const essence = seedId + "_essence"
            if(global.dontPlantSeeds.includes(seedName))
            {
                catalyst.add('c:dont_plant', name);
            }

            catalyst.add('mysticalagriculture:seeds', name);
            catalyst.add('mysticalagriculture:essences', essence);
            catalyst.add('ae2:growth_acceleratable', name);
            catalyst.add('catalyst:seeds', name);
        });
    }
    addSeedTags();

    const tags = {
        goo_revive_tier_1:
        [
            'minecraft:sugar',
            'minecraft:rotten_flesh',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_2:
        [
            'minecraft:nether_wart',
            'minecraft:blaze_powder',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_3:
        [
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'eternalores:catalyrium_dust'
        ],
        goo_revive_tier_4:
        [
            'minecraft:sculk',
            'minecraft:sculk_catalyst',
            'eternalores:catalyrium_dust'
        ]
    };
    
    for(let tagName in tags)
    {
        catalyst.add(tagName, tags[tagName]);
    }

    let _clusters = [
        "pastel:topaz_cluster",
        "pastel:citrine_cluster",
        "pastel:onyx_cluster",
        'pastel:moonstone_cluster',
        "pastel:bismuth_cluster",
        "pastel:malachite_cluster",
        "pastel:azurite_cluster",
        "pastel:bloodstone_cluster",
        "pastel:coal_cluster",
        "pastel:copper_cluster",
        "pastel:iron_cluster",
        "pastel:gold_cluster",
        "pastel:lapis_cluster",
        "pastel:redstone_cluster",
        "pastel:diamond_cluster",
        "pastel:emerald_cluster",
        "pastel:prismarine_cluster",
        "pastel:quartz_cluster",
        "pastel:glowstone_cluster",
        "pastel:netherite_scrap_cluster",
        "pastel:echo_cluster",
        "pastel:fluix_cluster",
        "pastel:zinc_cluster",
        "biomesoplenty:rose_quartz_cluster",
        "extendedae:entro_cluster",
        "justdirethings:time_crystal_cluster"
    ];

    _clusters.forEach(cluster => {
        catalyst.add('c:clusters', cluster);
        global.clusters.push(cluster)
    })

    let _buddings = [
        'pastel:budding_topaz',
        'pastel:budding_citrine',
        'pastel:budding_onyx',
        'pastel:budding_moonstone'
    ]

    _buddings.forEach(bud => {
        catalyst.add("c:budding_blocks", bud)
    })

    let _storage = [
        'minecraft:amethyst_block',
        'pastel:topaz_block',
        'pastel:citrine_block',
        'pastel:onyx_block',
        'pastel:moonstone_block'
    ]

    _storage.forEach(st => {
        catalyst.add("geore:geore_blocks", st)
    })

    let buds = catalyst.get("c:clusters").getObjectIds();
    buds.forEach(bud => {
        global.budding_blocks.push(bud)
        catalyst.add("catalyst:clusters", bud)
    })

    buds = catalyst.get('c:budding_blocks').getObjectIds();
    buds.forEach(bud => {
        global.clusters.push(bud)
        catalyst.add('catalyst:budding_blocks', bud)
    })

    buds = catalyst.get("geore:geore_blocks").getObjectIds();
    buds.forEach(bud => {
        global.bud_storage.push(bud)
        catalyst.add("catalyst:budding_storages", bud)
    })

    console.log("[CatJS] Tags for Items has been added");

})