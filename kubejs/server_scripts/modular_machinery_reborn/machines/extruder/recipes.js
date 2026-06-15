/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    //materials to process
    let foils = [
        "copper_foil",
        "iron_foil",
        "gold_foil",
        "netherite_foil",
        "aluminum_foil",
        "ardite_foil",
        "black_steel_foil",
        "brass_foil",
        "britannia_silver_foil",
        "bronze_foil",
        "cast_iron_foil",
        "cast_steel_foil",
        "catalyrium_foil",
        "cobalt_foil",
        "constantan_foil",
        "electrum_foil",
        "enderium_foil",
        "gallium_foil",
        "invar_foil",
        "iridium_foil",
        "lead_foil",
        "lumium_foil",
        "nethersteel_foil",
        "nickel_foil",
        "osmium_foil",
        "pewter_foil",
        "pig_iron_foil",
        "platinum_foil",
        "plutonium_foil",
        "rose_gold_foil",
        "shadowsteel_foil",
        "signalum_foil",
        "silicon_foil",
        "silver_foil",
        "steel_foil",
        "tin_foil",
        "titanium_foil",
        "tungsten_foil",
        "ultimatitanium_foil",
        "uraninite_foil",
        "uranium_foil",
        "wrought_iron_foil",
        "zinc_foil",
        "biosteel_foil",
        "stellarium_foil",
        "etherium_foil",
        "sculkite_foil",
        "redstone_foil",
        "aurorium_foil",
        "universium_foil",
        "eternity_foil",
        "cosmic_matter_foil",
        "beryllium_foil",
        "chromium_foil",
        "magnesium_foil"
    ];

    let gears = [
        "gear_ultimatitanium",
        "gear_iron",
        "gear_copper",
        "gear_tin",
        "gear_lead",
        "gear_enderium",
        "gear_gold",
        "gear_bronze",
        "gear_steel",
        "gear_osmium",
        "gear_diamond",
        "gear_aluminum",
        "gear_necroticarite",
        "gear_catalyrium",
        "gear_voiderite",
        "gear_quantiquarite",
        "gear_tachyarite",
        "gear_ardite",
        "gear_tungsten",
        "gear_stellarium",
        "gear_etherium",
        "gear_aurorium",
        "gear_universium",
        "gear_eternity",
        "gear_cosmic_matter",
        "gear_beryllium",
        "gear_chromium",
        "gear_monazite",
        "gear_lapis",
        "gear_magnesium"
    ];

    let plates = [
        "plate_aluminum",
        "plate_ardite",
        "plate_blue_steel",
        "plate_brass",
        "plate_bronze",
        "plate_cobalt",
        "plate_constantan",
        "plate_copper",
        "plate_diamond",
        "plate_electrum",
        "plate_enderium",
        "plate_gallium",
        "plate_gold",
        "plate_graphite",
        "plate_invar",
        "plate_iridium",
        "plate_iron",
        "plate_lead",
        "plate_lumium",
        "plate_netherite",
        "plate_nickel",
        "plate_osmium",
        "plate_platinum",
        "plate_plutonium",
        "plate_rose_gold",
        "plate_sapphire",
        "plate_signalum",
        "plate_silver",
        "plate_steel",
        "plate_tin",
        "plate_titanium",
        "plate_ultimatitanium",
        "plate_uranium",
        "plate_zinc",
        "plate_cast_iron",
        "plate_cast_steel",
        "plate_wrought_iron",
        "plate_nethersteel",
        "plate_shadowsteel",
        "plate_pig_iron",
        "plate_necroticarite",
        "plate_catalyrium",
        "plate_voiderite",
        "plate_quantiquarite",
        "plate_tachyarite",
        "plate_tungsten",
        "plate_uraninite",
        "plate_ruby",
        "plate_emerald",
        "plate_silicon",
        "plate_britannia_silver",
        "plate_zircon",
        "plate_peridot",
        "plate_pearl",
        "plate_black_steel",
        "plate_quartz",
        "plate_amethyst",
        "plate_pewter",
        "plate_pyrolite",
        "plate_biosteel",
        "plate_tanzanite",
        "plate_onyx",
        "plate_cinnabar",
        "plate_amber",
        "plate_garnet",
        "plate_obsidian",
        "plate_jade",
        "plate_wood",
        "plate_stellarium",
        "plate_etherium",
        "plate_temictetl",
        "plate_sanguis_vivus",
        "plate_sculkite",
        "plate_redstone",
        "plate_aurorium",
        "plate_universium",
        "plate_eternity",
        "plate_cosmic_matter",
        "plate_beryllium",
        "plate_chromium",
        "plate_monazite",
        "plate_lapis",
        "plate_magnesium",
        "plate_eternal_dark",
        "plate_eternal_light"
    ];

    let rods = [
        "rod_aluminum",
        "rod_ardite",
        "rod_blue_steel",
        "rod_brass",
        "rod_bronze",
        "rod_cobalt",
        "rod_constantan",
        "rod_copper",
        "rod_diamond",
        "rod_electrum",
        "rod_enderium",
        "rod_gallium",
        "rod_gold",
        "rod_graphite",
        "rod_invar",
        "rod_iridium",
        "rod_iron",
        "rod_lead",
        "rod_lumium",
        "rod_netherite",
        "rod_nickel",
        "rod_osmium",
        "rod_platinum",
        "rod_plutonium",
        "rod_rose_gold",
        "rod_sapphire",
        "rod_signalum",
        "rod_silver",
        "rod_steel",
        "rod_tin",
        "rod_titanium",
        "rod_ultimatitanium",
        "rod_uranium",
        "rod_zinc",
        "rod_cast_iron",
        "rod_cast_steel",
        "rod_wrought_iron",
        "rod_nethersteel",
        "rod_shadowsteel",
        "rod_pig_iron",
        "rod_necroticarite",
        "rod_catalyrium",
        "rod_voiderite",
        "rod_quantiquarite",
        "rod_tachyarite",
        "rod_tungsten",
        "rod_biosteel",
        "rod_stellarium",
        "rod_etherium",
        "rod_temictetl",
        'rod_sanguis_vivus',
        "rod_sculkite",
        "rod_redstone",
        "rod_black_steel",
        "rod_britannia_silver",
        "rod_eternal_light",
        "rod_eternal_dark",
        "rod_pewter",
        "rod_silicon",
        "rod_uraninite",
        "rod_aurorium",
        "rod_universium",
        "rod_eternity",
        "rod_cosmic_matter",
        "rod_beryllium",
        "rod_chromium",
        "rod_monazite",
        "rod_lapis",
        "rod_magnesium"
    ];

    //Extra results
    let dusts = [
        "sawdust",
        "aluminum_dust",
        "ardite_dust",
        "amber_dust",
        "apatite_dust",
        "blue_steel_dust",
        "brass_dust",
        "britannia_silver_dust",
        "bronze_dust",
        "cinnabar_dust",
        "coal_dust",
        "cobalt_dust",
        "constantan_dust",
        "copper_dust",
        "diamond_dust",
        "electrum_dust",
        "emerald_dust",
        "ender_dust",
        "enderium_dust",
        "endstone_dust",
        "fluorite_dust",
        "gallium_dust",
        "gold_dust",
        "graphite_dust",
        "invar_dust",
        "iridium_dust",
        "iron_dust",
        "lapis_dust",
        "lead_dust",
        "lumium_dust",
        "netherite_dust",
        "netherrack_dust",
        "nickel_dust",
        "niter_dust",
        "obsidian_dust",
        "onyx_dust",
        "osmium_dust",
        "pewter_dust",
        "peridot_dust",
        "platinum_dust",
        "plutonium_dust",
        "quartz_dust",
        "rose_gold_dust",
        "ruby_dust",
        "sapphire_dust",
        "silver_dust",
        "signalum_dust",
        "steel_dust",
        "sulfur_dust",
        "tin_dust",
        "titanium_dust",
        "ultima_dust",
        "uranium_dust",
        "zinc_dust",
        "cast_iron_dust",
        "uraninite_dust",
        "cast_steel_dust",
        "wrought_iron_dust",
        "nethersteel_dust",
        "shadowsteel_dust",
        "pig_iron_dust",
        "necroticarite_dust",
        "sculk_dust",
        "amethyst_dust",
        "nether_star_dust",
        "catalyrium_dust",
        "voiderite_dust",
        "quantiquarite_dust",
        "tachyarite_dust",
        "tungsten_dust",
        "silicon_dust",
        "prismarine_dust",
        "soul_sand_dust",
        "charcoal_dust",
        "coke_coal_dust",
        "lignite_coal_dust",
        "bituminous_coal_dust",
        "peat_coal_dust",
        "anthracite_coal_dust",
        "black_steel_dust",
        "zircon_dust",
        "pearl_dust",
        "pyrolite_dust",
        "biosteel_dust",
        "garnet_dust",
        "black_quartz_dust",
        "jade_dust",
        "spectral_sky_bluerite_dust",
        "tanzanite_dust",
        "dust",
        "salt",
        "eternal_light_dust",
        "eternal_dark_dust",
        "stellarium_dust",
        "etherium_dust",
        "temictetl_dust",
        'sanguis_vivus_dust',
        "sculkite_dust",
        "nautilus_dust",
        "flint_dust",
        "gravel_dust",
        "clay_dust",
        "brick_dust",
        "nether_brick_dust",
        "dripstone_dust",
        "purpur_dust",
        "deepslate_dust",
        "stone_dust",
        "nether_wart_dust",
        "warped_nether_wart_dust",
        "tuff_dust",
        "granite_dust",
        "blackstone_dust",
        "basalt_dust",
        "shulker_dust",
        "diorite_dust",
        "aurorium_dust",
        "universium_dust",
        "eternity_dust",
        "cosmic_matter_dust",
        "beryllium_dust",
        "magnesium_dust",
        "chromium_dust",
        "monazite_dust",
        "phosphorus_dust",
        "calcium_dust",
        "sand_dust",
        "red_sand_dust"
    ];

    let smallDusts = [
        "aluminum_small_dust",
        "ardite_small_dust",
        "catalyrium_small_dust",
        "cobalt_small_dust",
        "copper_small_dust",
        "gallium_small_dust",
        "gold_small_dust",
        "iridium_small_dust",
        "iron_small_dust",
        "lead_small_dust",
        "nickel_small_dust",
        "osmium_small_dust",
        "platinum_small_dust",
        "plutonium_small_dust",
        "silver_small_dust",
        "tin_small_dust",
        "tungsten_small_dust",
        "uraninite_small_dust",
        "uranium_small_dust",
        "wrought_iron_small_dust",
        "zinc_small_dust",
        "silicon_small_dust",
        "zircon_small_dust",
        "sulfur_small_dust",
        'sanguis_vivus_small_dust',
        "nautilus_small_dust",
        "flint_small_dust",
        "gravel_small_dust",
        "clay_small_dust",
        "brick_small_dust",
        "nether_brick_small_dust",
        "dripstone_small_dust",
        "purpur_small_dust",
        "deepslate_small_dust",
        "stone_small_dust",
        "nether_wart_small_dust",
        "warped_nether_wart_small_dust",
        "tuff_small_dust",
        "granite_small_dust",
        "blackstone_small_dust",
        "basalt_small_dust",
        "shulker_small_dust",
        "diorite_small_dust",
        "voiderite_small_dust",
        "aurorium_small_dust",
        "universium_small_dust",
        "eternity_small_dust",
        "cosmic_matter_small_dust",
        "stellarium_small_dust",
        "coal_small_dust",
        "beryllium_small_dust",
        "emerald_small_dust",
        "magnesium_small_dust",
        "chromium_small_dust",
        "monazite_small_dust",
        "phosphorus_small_dust",
        "calcium_small_dust",
        "graphite_small_dust",
        "lapis_small_dust",
        "sand_small_dust",
        "red_sand_small_dust",
        "cinnabar_small_dust",
        "diamond_small_dust",
        "ultimatitanium_small_dust",
        "titanium_small_dust",
        "sculkite_small_dust",
        "netherite_small_dust"
    ];

    //Input
    let gems = [
        "gem_onyx",
        "gem_peridot",
        "gem_ruby",
        "gem_sapphire",
        "fluorite",
        "gem_apatite",
        "gem_cinnabar",
        "gem_amber",
        "gem_niter",
        "gem_tachyarite",
        "gem_voiderite",
        "gem_quantiquarite",
        "gem_necroticarite",
        "gem_obsidian",
        "gem_zircon",
        "gem_pyrolite",
        "gem_garnet",
        "gem_tanzanite",
        "gem_pearl",
        "gem_spectral_sky_bluerite",
        "gem_jade",
        "gem_temictetl",
        "gem_sanguis",
        "gem_monazite"
    ];

    let ingots = [
        "aluminum_ingot",
        "ardite_ingot",
        "blue_steel_ingot",
        "brass_ingot",
        "britannia_silver_ingot",
        "bronze_ingot",
        "cobalt_ingot",
        "constantan_ingot",
        "electrum_ingot",
        "enderium_ingot",
        "eternal_dark_ingot",
        "eternal_light_ingot",
        "gallium_ingot",
        "graphite_ingot",
        "invar_ingot",
        "iridium_ingot",
        "lead_ingot",
        "lumium_ingot",
        "nickel_ingot",
        "osmium_ingot",
        "pewter_ingot",
        "platinum_ingot",
        "plutonium_ingot",
        "redstone_ingot",
        "rose_gold_ingot",
        "signalum_ingot",
        "silver_ingot",
        "steel_ingot",
        "tin_ingot",
        "titanium_ingot",
        "tungsten_ingot",
        "ultimatitanium_ingot",
        "uranium_ingot",
        "zinc_ingot",
        "cast_iron_ingot",
        "uraninite_ingot",
        "cast_steel_ingot",
        "wrought_iron_ingot",
        "nethersteel_ingot",
        "shadowsteel_ingot",
        "pig_iron_ingot",
        "missing_ingot",
        "catalyrium_ingot",
        "silicon_ingot",
        "black_steel_ingot",
        "biosteel_ingot",
        "stellarium_ingot",
        "etherium_ingot",
        "sculkite_ingot",
        "aurorium_ingot",
        "universium_ingot",
        "eternity_ingot",
        "cosmic_matter_ingot",
        "beryllium_ingot",
        "chromium_ingot",
        "magnesium_ingot"
    ];

    let energized_plates = [
        { input: 'energizedpower:advanced_alloy_ingot', output: 'energizedpower:advanced_alloy_plate' },
        { input: 'energizedpower:energized_copper_ingot', output: 'energizedpower:energized_copper_plate' },
        { input: 'energizedpower:energized_gold_ingot', output: 'energizedpower:energized_gold_plate' }
    ];

    let standard_wires = [
        { material: 'iron', output: 'createaddition:iron_wire' },
        { material: 'electrum', output: 'immersiveengineering:wire_electrum' },
        { material: 'steel', output: 'immersiveengineering:wire_steel' },
        { material: 'aluminum', output: 'immersiveengineering:wire_aluminum' },
        { material: 'lead', output: 'immersiveengineering:wire_lead' },
        { material: 'copper', output: 'immersiveengineering:wire_copper' },
        { material: 'tin', output: 'energizedpower:tin_wire' },
        { material: 'gold', output: 'energizedpower:gold_wire' }
    ];

    let energized_wires = [
        { input: 'energizedpower:energized_copper_ingot', output: 'energizedpower:energized_copper_wire' },
        { input: 'energizedpower:energized_gold_ingot', output: 'energizedpower:energized_gold_wire' }
    ];

    let mod_id = "eternalores:";
    let machine_id = "mmr:extruder";
    let recipe_counter = 0;

    let input_slots = [
        { x: 25, y: 12 }, { x: 25, y: 34 }
    ]

    let output_slots = [
        { x: 85, y: 12 }, { x: 85, y: 34 }
    ];

    let energyIn = { x: 0, y: 4 };
    let progressArrow = { x: 55, y: 23 };

    let time = 75;
    let energy = 50;

    let baseRecipe = () => {
        return catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
            .width(120)
            .height(60)
            .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
            .requireEnergyPerTick(energy, energyIn.x, energyIn.y);
    }

    let getItem = (material, amount) =>
    {
        if(material.includes(':')) return Item.of(material, amount)

        let id = mod_id + "gem_" + material
        if(Item.exists(id)) return Item.of(id, amount)
        id = mod_id + material + "_ingot"
        if(Item.exists(id)) return Item.of(id, amount)
        if(material === "sanguis") return Item.of('eternalores:gem_sanguis_vivus', amount)
        
        //mc guessing
        id = "minecraft:" + material + "_ingot"
        if(Item.exists(id)) return Item.of(id, amount)
        
        if(material === "lapis") return Item.of('minecraft:lapis_lazuli', amount)
        if(material === "diamond") return Item.of('minecraft:diamond', amount)
        if(material === "emerald") return Item.of('minecraft:emerald', amount)
        if(material === "quartz") return Item.of('minecraft:quartz', amount)
        if(material === "amethyst") return Item.of('minecraft:amethyst_shard', amount)
        if(material === "wood") return Item.of('minecraft:oak_planks', amount)
        
        return undefined
    }

    let getDust = (material) => {
        if(material.includes(':')) return undefined

        let id = mod_id + material + "_small_dust"
        if(Item.exists(id)) return { item: Item.of(id, 3), is_small: true }
        id = mod_id + material + "_dust"
        if(Item.exists(id)) return { item: Item.of(id, 1), is_small: false }

        if(material === "redstone") return { item: Item.of("minecraft:redstone", 1), is_small: false }
        if(material === "wood") return { item: Item.of('eternalores:sawdust', 1), is_small: false }
        return undefined
    }

    let createRecipe = (material, amount_input, output, amount, mold, parallel) => {
        let item = getItem(material, amount_input)
        if(item === undefined)
        {
            console.warn(`Incorrect recipe inputs for item ${material} for extruder!`)
            return;
        }

        let recipe = baseRecipe();

        recipe.requireItem(item, input_slots[0].x, input_slots[0].y);
        recipe.requireItem(Item.of(mold, 1), 0, input_slots[1].x, input_slots[1].y);
        let output_id = output.includes(':') ? output : mod_id + output
        recipe.produceItem(Item.of(output_id, amount), output_slots[0].x,  output_slots[0].y)

        let dust = getDust(material)
        if(dust !== undefined)
        {
            if(dust.is_small)
            {
                recipe.produceItem(dust.item, output_slots[1].x,  output_slots[1].y)
            }
            else
            {
                recipe.produceItem(dust.item, 0.3, output_slots[1].x,  output_slots[1].y)
            }
        }
        else
        {
            if(!material.includes(':'))
            {
                console.warn(`Incorrect dust for item ${material} for extruder!`)
            }
        }

        if(parallel > 1)
        {
            recipe.hide()
        }

        recipe.id(`catalyst:mmr/extruder/${recipe_counter}/${output.replace(':', '_')}_${amount}`);
        recipe_counter++;
    }

    gears.forEach(gear => {
        let material = gear.replace("gear_", "");
        for(let i = 1; i < 17; i++)
        {
            createRecipe(material, 4*i, gear, 1*i, 'eternalores:mold_gear', i);
        }
    })

    foils.forEach(foil => {
        let material = foil.replace("_foil", "");
        for(let i = 1; i < 17; i++)
        {
            createRecipe(material, 2*i, foil, 2*i, 'eternalores:mold_foil', i);
        }
    })

    plates.forEach(plate => {
        let material = plate.replace("plate_", "");
        for(let i = 1; i < 17; i++)
        {
            createRecipe(material, 1*i, plate, 1*i, 'eternalores:mold_plate', i);
        }
    })

    rods.forEach(rod => {
        let material = rod.replace("rod_", "");
        for(let i = 1; i < 17; i++)
        {
            createRecipe(material, 1*i, rod, 2*i, 'eternalores:mold_rod', i);
        }
    })

    energized_plates.forEach(pair => {
        for(let i = 1; i < 17; i++)
        {
            createRecipe(pair.input, 1*i, pair.output, 1*i, 'eternalores:mold_plate', i);
        }
    });

    standard_wires.forEach(wire => {
        for(let i = 1; i < 17; i++)
        {
            createRecipe(wire.material, 1*i, wire.output, 3*i, 'immersiveengineering:mold_wire', i);
        }
    });

    energized_wires.forEach(wire => {
        for(let i = 1; i < 17; i++)
        {
            createRecipe(wire.input, 1*i, wire.output, 3*i, 'immersiveengineering:mold_wire', i);
        }
    });

    console.log(`[CatJS] Finished extruder recipes`);
})

MMREvents.extraTooltips(event => {
    event.create("mmr:extruder", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.extruder.item"))

    event.create("mmr:extruder", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.extruder.gui"))
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/