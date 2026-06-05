
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of("ae2netanalyser:tick_analyser"),
    [
        " A ",
        "ENE",
        " E "
    ],{
        A: 'ae2:fluix_pearl',
        E: 'minecraft:ender_pearl',
        N: 'ae2netanalyser:network_analyser',
    
    }).id("catalyst:ae2/tick_analyser");

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "megacells:mega_pattern_provider" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { item: "minecraft:crafting_table" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_pattern_provider" }
    }).id('catalyst:extendedae/ex_pattern_provider_cheap');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { tag: "ae2:pattern_provider" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { item: "minecraft:crafting_table" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_pattern_provider" }
    }).id('catalyst:extendedae/ex_pattern_provider_normal');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "megacells:mega_interface" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { tag: "c:glass_blocks" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_interface" }
    }).id('catalyst:extendedae/ex_interface_cheap');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { tag: "ae2:interface" } },
            { amount: 3, ingredient: { item: "ae2:capacity_card" } },
            { amount: 3, ingredient: { tag: "c:glass_blocks" } },
            { ingredient: { item: "extendedae:concurrent_processor" } },
            { amount: 6, ingredient: { tag: "ae2:glass_cable" } }
        ],
        output: { count: 1, id: "extendedae:ex_interface" }
    }).id('catalyst:extendedae/ex_interface_normal');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { amount: 4, ingredient: { item: "extendedae:ex_pattern_provider" } },
            { amount: 2, ingredient: { item: "extendedae:concurrent_processor" } }
        ],
        output: { count: 1, id: "expandedae:exp_pattern_provider" }
    }).id('catalyst:expandedae/exp_pattern_provider_from_extended');

    catalyst.custom({
        type: "extendedae:crystal_assembler",
        input_items: [
            { ingredient: { item: "advanced_ae:adv_pattern_provider" } },
            { amount: 2, ingredient: { item: "extendedae:concurrent_processor" } }
        ],
        output: { count: 1, id: "expandedae:exp_pattern_provider" }
    }).id('catalyst:expandedae/exp_pattern_provider_from_advanced');

    let press = (block, output) => {
        catalyst.shaped(
            Item.of(output, 1), 
            [
                'PBP',
                'BFB', 
                'PBP'
            ],
            {
                P: 'eternalores:plate_cast_steel',
                F: 'eternalores:cast_steel_foil',
                B: block
            }
        ).id(`catalyst:ae2/${output.replace(':', '_')}`);
    };

    press('ae2:quartz_block', 'ae2:calculation_processor_press');
    press('minecraft:diamond_block', 'ae2:engineering_processor_press');
    press('minecraft:gold_block', 'ae2:logic_processor_press');
    press('eternalores:silicon_block', 'ae2:silicon_press');
    
    press('ae2:singularity', 'advanced_ae:quantum_processor_press')
    press('appflux:charged_redstone_block', 'appflux:energy_processor_press')
    press('megacells:sky_steel_ingot', 'megacells:accumulation_processor_press')

    console.log("[CatJS] Added AE2 recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/