//priority: 20
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//block tags
ServerEvents.tags('block', catalyst => {
    
    let _clusters = [
    ];

    _clusters.forEach(cluster => {
        catalyst.add('c:clusters', cluster);
        global.clusters.push(cluster)
    })

    global.clusters.forEach(cluster => {
        catalyst.add("c:clusters", cluster)
        catalyst.add("catalyst:clusters", cluster)
    })

    let _buddings = [
        'justdirethings:time_crystal_budding_block'
    ]

    _buddings.forEach(bud => {
        catalyst.add("c:budding_blocks", bud)
        global.budding_blocks.push(bud)
    })

    global.budding_blocks.forEach(bud => {
        catalyst.add("c:budding_blocks", bud)
        catalyst.add("c:budding", bud)
        catalyst.remove('create:non_movable', bud)
        catalyst.add('catalyst:budding_blocks', bud)
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
        global.bud_storage.push(st)
    })

    global.bud_storage.forEach(st => {
        catalyst.add("catalyst:budding_storage", st)
    })

    catalyst.removeAll('c:relocation_not_supported')
    catalyst.removeAll('productivebees:untickable')

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

    global.recipesSeedToRemove.forEach(seedId => {
        const seedName = seedId.split(':')[1].replace('_seeds', '');
        const name = seedId + "_crop"
        if(global.dontPlantSeeds.includes(seedName))
        {
            catalyst.add('c:dont_plant', name);
        }
            
        catalyst.add('mysticalagriculture:crops', name);
        catalyst.add('minecraft:crops', name);
        catalyst.add('ae2:growth_acceleratable', name);
        //catalyst.add('minecraft:sword_efficient', name);
    });

    console.log("[CatJS] Tags for blocks has been added");
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
