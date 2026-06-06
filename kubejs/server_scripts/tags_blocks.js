//priority: 20
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//block tags
ServerEvents.tags('block', catalyst => {
    console.log("Before cleanup: " + global.clusters.size())
    global.clusters.clear()
    global.budding_blocks.clear();
    global.bud_storage.clear();

    console.log("After cleanup: " + global.clusters.size())

    let _clusters = [
        "minecraft:amethyst_cluster",
        "geore:coal_cluster",
        "geore:copper_cluster",
        "geore:diamond_cluster",
        "geore:emerald_cluster",
        "geore:gold_cluster",
        "geore:iron_cluster",
        "geore:lapis_cluster",
        "geore:quartz_cluster",
        "geore:redstone_cluster",
        "geore:ancient_debris_cluster",
        "geore:ruby_cluster",
        "geore:sapphire_cluster",
        "geore:topaz_cluster",
        "geore:zinc_cluster",
        "geore:uraninite_cluster",
        "geore:black_quartz_cluster",
        "geore:monazite_cluster",
        "geore:aluminum_cluster",
        "geore:lead_cluster",
        "geore:nickel_cluster",
        "geore:osmium_cluster",
        "geore:platinum_cluster",
        "geore:silver_cluster",
        "geore:tin_cluster",
        "geore:tungsten_cluster",
        "geore:uranium_cluster",
        "eternalores:geore_apatite_cluster",
        "eternalores:geore_ardite_cluster",
        "eternalores:geore_beryllium_cluster",
        "eternalores:geore_catalyrium_cluster",
        "eternalores:geore_cinnabar_cluster",
        "eternalores:geore_cobalt_cluster",
        "eternalores:geore_fluorite_cluster",
        "eternalores:geore_gallium_cluster",
        "eternalores:geore_garnet_cluster",
        "eternalores:geore_iridium_cluster",
        "eternalores:geore_jade_cluster",
        "eternalores:geore_necroticarite_cluster",
        "eternalores:geore_niter_cluster",
        "eternalores:geore_obsidian_cluster",
        "eternalores:geore_onyx_cluster",
        "eternalores:geore_pearl_cluster",
        "eternalores:geore_peridot_cluster",
        "eternalores:geore_pyrolite_cluster",
        "eternalores:geore_sculkite_cluster",
        "eternalores:geore_tanzanite_cluster",
        "eternalores:geore_titanium_cluster",
        "eternalores:geore_ultimatitanium_cluster",
        "eternalores:geore_zircon_cluster",
        "ae2:quartz_cluster",
        "pastel:topaz_cluster",
        "pastel:citrine_cluster",
        "pastel:onyx_cluster",
        "pastel:moonstone_cluster",
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

    let _buddings = [
        "minecraft:budding_amethyst",
        "geore:budding_coal",
        "geore:budding_copper",
        "geore:budding_diamond",
        "geore:budding_emerald",
        "geore:budding_gold",
        "geore:budding_iron",
        "geore:budding_lapis",
        "geore:budding_quartz",
        "geore:budding_redstone",
        "geore:budding_ancient_debris",
        "geore:budding_ruby",
        "geore:budding_sapphire",
        "geore:budding_topaz",
        "geore:budding_zinc",
        "geore:budding_uraninite",
        "geore:budding_black_quartz",
        "geore:budding_monazite",
        "geore:budding_aluminum",
        "geore:budding_lead",
        "geore:budding_nickel",
        "geore:budding_osmium",
        "geore:budding_platinum",
        "geore:budding_silver",
        "geore:budding_tin",
        "geore:budding_tungsten",
        "geore:budding_uranium",
        "eternalores:budding_geore_apatite",
        "eternalores:budding_geore_ardite",
        "eternalores:budding_geore_beryllium",
        "eternalores:budding_geore_catalyrium",
        "eternalores:budding_geore_cinnabar",
        "eternalores:budding_geore_cobalt",
        "eternalores:budding_geore_fluorite",
        "eternalores:budding_geore_gallium",
        "eternalores:budding_geore_garnet",
        "eternalores:budding_geore_iridium",
        "eternalores:budding_geore_jade",
        "eternalores:budding_geore_necroticarite",
        "eternalores:budding_geore_niter",
        "eternalores:budding_geore_obsidian",
        "eternalores:budding_geore_onyx",
        "eternalores:budding_geore_pearl",
        "eternalores:budding_geore_peridot",
        "eternalores:budding_geore_pyrolite",
        "eternalores:budding_geore_sculkite",
        "eternalores:budding_geore_tanzanite",
        "eternalores:budding_geore_titanium",
        "eternalores:budding_geore_ultimatitanium",
        "eternalores:budding_geore_zircon",
        "ae2:flawless_budding_quartz",
        "ae2:flawed_budding_quartz",
        "ae2:chipped_budding_quartz",
        "ae2:damaged_budding_quartz",
        "extendedae:entro_budding_fully",
        "extendedae:entro_budding_mostly",
        "extendedae:entro_budding_half",
        "extendedae:entro_budding_hardly",
        "pastel:budding_topaz",
        "pastel:budding_citrine",
        "pastel:budding_onyx",
        "pastel:budding_moonstone",
        "justdirethings:time_crystal_budding_block"
    ];

    let _storage = [
        "geore:coal_block",
        "geore:copper_block",
        "geore:diamond_block",
        "geore:emerald_block",
        "geore:gold_block",
        "geore:iron_block",
        "geore:lapis_block",
        "geore:quartz_block",
        "geore:redstone_block",
        "geore:ancient_debris_block",
        "geore:ruby_block",
        "geore:sapphire_block",
        "geore:topaz_block",
        "geore:zinc_block",
        "geore:uraninite_block",
        "geore:black_quartz_block",
        "geore:monazite_block",
        "geore:aluminum_block",
        "geore:lead_block",
        "geore:nickel_block",
        "geore:osmium_block",
        "geore:platinum_block",
        "geore:silver_block",
        "geore:tin_block",
        "geore:tungsten_block",
        "geore:uranium_block",
        "eternalores:geore_apatite_block",
        "eternalores:geore_ardite_block",
        "eternalores:geore_beryllium_block",
        "eternalores:geore_catalyrium_block",
        "eternalores:geore_cinnabar_block",
        "eternalores:geore_cobalt_block",
        "eternalores:geore_fluorite_block",
        "eternalores:geore_gallium_block",
        "eternalores:geore_garnet_block",
        "eternalores:geore_iridium_block",
        "eternalores:geore_jade_block",
        "eternalores:geore_necroticarite_block",
        "eternalores:geore_niter_block",
        "eternalores:geore_obsidian_block",
        "eternalores:geore_onyx_block",
        "eternalores:geore_pearl_block",
        "eternalores:geore_peridot_block",
        "eternalores:geore_pyrolite_block",
        "eternalores:geore_sculkite_block",
        "eternalores:geore_tanzanite_block",
        "eternalores:geore_titanium_block",
        "eternalores:geore_ultimatitanium_block",
        "eternalores:geore_zircon_block",
        "minecraft:amethyst_block",
        "pastel:topaz_block",
        "pastel:citrine_block",
        "pastel:onyx_block",
        "pastel:moonstone_block"
    ];

    _clusters.forEach(cluster => {
        global.clusters.add(cluster)
        catalyst.add("c:clusters", cluster)
        catalyst.add("catalyst:clusters", cluster)
    })

    _buddings.forEach(bud => {
        global.budding_blocks.add(bud)
        catalyst.add("c:budding_blocks", bud)
        catalyst.add("c:budding", bud)
        catalyst.remove('create:non_movable', bud)
        catalyst.add('catalyst:budding_blocks', bud)
    })

    _storage.forEach(st => {
        global.bud_storage.add(st)
        catalyst.add("geore:geore_blocks", st)
        catalyst.add("catalyst:budding_storages", st)
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
