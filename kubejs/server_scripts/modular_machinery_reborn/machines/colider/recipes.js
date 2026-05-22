/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    
    /*
    {
        time: 200, //ticks
        energy: 8, //energyPerTick de entrada
        outputs: [ //items de salida, si lenght es 0, se ignora para el procesamiento de la receta
            {id: "<id>", count: 1, chance: 1.0} //id, count de 1 a max int, chance de 0 a 1
        ],
        inputs: [ //items de entrada, si lenght es 0, se ignora para el procesamiento de la receta
            {id: "<id>", count: 1, chance: 1.0} //id, count de 1 a max int, chance de 0 a 1
        ],
        fluid_input: [ //fluid de entrada, si lenght es 0, se ignora para el procesamiento de la receta
            {id: "<id>", count: 1, chance: 1.0} //id, count de 1 a max int, chance de 0 a 1
        ],
        fluid_output: [ //fluid de salida, si lenght es 0, se ignora para el procesamiento de la receta
            {id: "<id>", count: 1, chance: 1.0} //id, count de 1 a max int, chance de 0 a 1
        ],
        energy_out: 8 //energyPerTick de salida, si es 0, se ignora para el procesamiento de la receta
    }
    */
    let recipes = [
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyinputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyinputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyinputhatch_ultimate", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyoutputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyoutputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:energyoutputhatch_ultimate", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:inputbus_big", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:inputbus_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:inputbus_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:outputbus_big", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:outputbus_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:outputbus_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidinputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidinputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidinputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidoutputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidoutputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:fluidoutputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicalinputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceinputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceinputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceinputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceoutputhatch_huge", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn_ars:sourceoutputhatch_vacuum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cell_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cell_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cell_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_cell_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_cell_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_cell_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cable_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cable_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_cable_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_gate_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_gate_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:ender_gate_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energizing_rod_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energizing_rod_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energizing_rod_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:furnator_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:furnator_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:furnator_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:magmator_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:magmator_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:magmator_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:thermo_generator_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:thermo_generator_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:thermo_generator_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:solar_panel_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:solar_panel_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:solar_panel_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:reactor_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:reactor_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:reactor_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:player_transmitter_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:player_transmitter_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:player_transmitter_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_hopper_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_hopper_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_hopper_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_discharger_niotic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_discharger_spirited", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "powah:energy_discharger_nitro", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:solar_panel_6", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:solar_panel_5", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:solar_panel_4", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:crystal_matrix", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:energized_crystal_matrix", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:energized_copper_ingot", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:energized_gold_ingot", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "energizedpower:reinforced_advanced_solar_cell", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:cell_component_4k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:cell_component_16k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:cell_component_64k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:cell_component_256k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:cell_component_1m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:cell_component_4m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:cell_component_16m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:cell_component_64m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:cell_component_256m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "advanced_ae:quantum_storage_component", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_4k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_16k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_64k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_256k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_1m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_4m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_16m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_64m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appflux:core_256m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:4k_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:16k_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:64k_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:64b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:256b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:1024b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage:4096b_fluid_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage_mekanism_integration:256b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage_mekanism_integration:1024b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "refinedstorage_mekanism_integration:8192b_chemical_storage_part", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_256k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_1024k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_4096k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_16384k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_16384b_fluid", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_65536b_fluid", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_262144b_fluid", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "extrastorage:storagepart_1048576b_fluid", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_hardened", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_redstone", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_signalum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_resonant", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_advanced", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_panel_ultimate", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_hardened", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_redstone", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_signalum", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_resonant", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_advanced", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "solargeneration:solar_core_ultimate", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_max", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_ultimate", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_advanced", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:stone", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_medium", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:parallel_hatch_basic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:stone_stairs", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_4", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_8", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_16", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_32", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_64", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_128", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_256", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_512", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_1k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_2k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_4k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_8k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_16k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_32k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_64k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_128k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_256k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_512k", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "expandedae:exp_crafting_accelerator_1m", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "megacells:mega_energy_cell", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appliedpneumatics:mega_air_cell_shell", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "appliedpneumatics:air_cell_shell", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "modular_machinery_reborn:modularium", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "advanced_ae:quantum_storage_128", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:charged_certus_quartz_crystal", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:matter_ball", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "ae2:singularity", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_omega_tier", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_5", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_4", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_3", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_2", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_1_plus", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedstorage:stack_upgrade_tier_1", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "justdirethings:time_crystal", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "oritech:overcharged_crystal", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "oritech:enderic_compound", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:echo_shard", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:netherite_scrap", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:diamond", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:elytra", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "eternalores:platinum_dust", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:heavy_core", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "eternalores:plutonium_dust", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:nether_star", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "oritech:banana", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:enori_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:restonia_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:palis_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:diamatine_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:void_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:emeradic_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_enori_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_restonia_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_palis_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_diamatine_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_void_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:empowered_emeradic_crystal_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:crystallized_canola_seed", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:soul_sand", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:ethetic_green_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "actuallyadditions:ethetic_white_block", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:leather", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:potion_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:obsidian_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:netherstar_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:netherite_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:magmatic_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:iron_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:honey_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:halitosis_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:gold_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:ender_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:enchantment_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:emerald_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:diamond_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:culinary_generator_64x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "generatorgalore:copper_generator_8x", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:leafy_mantle{\"relics:data\":{abilities:{abilities:{camouflage:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{absorption:{initialQuality:1},cooldown:{initialQuality:7},heal:{initialQuality:8}}},revival:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:7},heal:{initialQuality:2},paralysis:{initialQuality:10},radius:{initialQuality:10}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:springy_boot{\"relics:data\":{abilities:{abilities:{bounce:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:5},damage_modifier:{initialQuality:8},power:{},radius:{initialQuality:8},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:kinetic_belt{\"relics:data\":{abilities:{abilities:{gliding:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:1},efficiency:{initialQuality:3},resistance:{initialQuality:5}}},slots:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:9}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:reflective_necklace{\"relics:data\":{abilities:{abilities:{reflection:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{bounces:{initialQuality:3},chance:{initialQuality:9},damage:{initialQuality:4},lifetime:{initialQuality:6},piercings:{initialQuality:4},stun:{initialQuality:7}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:jellyfish_necklace{\"relics:data\":{abilities:{abilities:{regeneration:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{max_health:{},regeneration:{}}},shock:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{bounces:{initialQuality:6},cooldown:{},damage:{initialQuality:9},damage_modifier:{initialQuality:8},distance:{initialQuality:1},duration:{initialQuality:7},knockback:{initialQuality:10},paralysis:{initialQuality:9},radius:{initialQuality:1},rings:{initialQuality:9}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:midnight_mantle{\"relics:data\":{abilities:{abilities:{constellation:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{constellation_radius:{initialQuality:7},explosion_damage:{initialQuality:3},explosion_radius:{initialQuality:7},star_chance:{initialQuality:10},star_lifetime:{initialQuality:6},stun_duration:{initialQuality:7},tremor_duration:{initialQuality:6}}},invisibility:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{brightness:{initialQuality:10},cooldown:{initialQuality:8},damage:{}}},phase:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{attack_damage:{initialQuality:4},attack_speed:{initialQuality:9},duration:{initialQuality:1},health_regeneration:{initialQuality:10},max_health:{initialQuality:4},modifier:{}}},starfall:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{bounce_chance:{initialQuality:10},chance:{initialQuality:7},damage:{initialQuality:10},radius:{initialQuality:3},stun:{initialQuality:2}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:roller_skate{\"relics:data\":{abilities:{abilities:{skating:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage:{initialQuality:8},ignite:{initialQuality:5},resistance:{initialQuality:1},speed:{initialQuality:7},step_height:{initialQuality:3}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:chorus_staff{\"relics:chorus_staff/charge\":4,\"relics:data\":{abilities:{abilities:{blink:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{cooldown:{initialQuality:2},distance:{initialQuality:6},max_charge:{initialQuality:5}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:clot_of_time{\"relics:data\":{abilities:{abilities:{rewind:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{time:{initialQuality:1}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:piglin_mask{\"relics:data\":{abilities:{abilities:{barter:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{items_count:{initialQuality:3},trades:{initialQuality:8}}},looting:{lock:{breaks:0},points:0,research:{links:{},researched:0b},stats:{attack_damage:{initialQuality:7},attack_speed:{initialQuality:7},chance:{initialQuality:1},duration:{},health:{initialQuality:7}}},neutrality:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:chef_hat{\"relics:data\":{abilities:{abilities:{satiety:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{chance:{initialQuality:4},healing:{initialQuality:8}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:rider_flute{\"relics:data\":{abilities:{abilities:{stable:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{heal:{initialQuality:2},max_slots:{initialQuality:3},resistance:{initialQuality:2}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:ring_of_the_seven_deadly_sins{\"relics:data\":{abilities:{abilities:{envy:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{incoming_damage_multiplier:{initialQuality:10},outgoing_damage_multiplier:{initialQuality:5}}},gluttony:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:2}}},greed:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{chance:{initialQuality:6},looting:{initialQuality:9},luck:{initialQuality:2}}},lust:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:5},time:{initialQuality:5}}},pride:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{multiplier:{initialQuality:5}}},sloth:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{speed:{initialQuality:9},time:{initialQuality:7}}},wrath:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{early_multiplier:{initialQuality:2},late_multiplier:{initialQuality:9},window:{initialQuality:5}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:sphere_of_self_sacrifice{\"relics:data\":{abilities:{abilities:{sacrifice:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{resistance:{initialQuality:7},stacks:{}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:hunting_belt{\"relics:data\":{abilities:{abilities:{pack:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{damage_modifier:{initialQuality:3},pet_radius:{initialQuality:10},resistance_per_pet:{initialQuality:6},revival_cost:{initialQuality:6}}},slots:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{amount:{initialQuality:10}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "relics:experience_disperser{\"relics:data\":{abilities:{abilities:{dispersion:{lock:{breaks:5},points:0,research:{links:{},researched:0b},stats:{distribution_ratio:{initialQuality:9},player_xp_ratio:{initialQuality:8},same_item_bonus:{initialQuality:3}}}},synergies:{}},leveling:{},statistic:{}}}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:component_electronic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:component_electronic_adv", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:circuit_board", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:component_iron", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:component_steel", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:electron_tube", count: 3, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "immersiveengineering:light_bulb", count: 3, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "pneumaticcraft:printed_circuit_board", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mekanism:alloy_atomic", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagradditions:supremium_paxel", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:huge_energy_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:large_energy_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:medium_energy_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:huge_fluid_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:large_fluid_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:medium_fluid_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:huge_item_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:large_item_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "curvy_pipes:medium_item_pipe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_sword", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_scythe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_sickle", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_pickaxe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_shovel", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_axe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_hoe", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_watering_can", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_bow", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_crossbow", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_shears", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:supremium_fishing_rod", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:tilling_aoe_iv_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:attack_aoe_iii_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:mining_aoe_iv_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:absorption_v_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:luck_iii_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:health_boost_v_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:strength_iii_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:haste_iii_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "mysticalagriculture:flight_augment", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:netherite_upgrade_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedbackpacks:stack_upgrade_omega_tier", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedbackpacks:stack_upgrade_tier_4", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedbackpacks:stack_upgrade_tier_3", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "sophisticatedbackpacks:stack_upgrade_tier_2", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "industrialforegoing:machine_frame_supreme", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "industrialforegoing:machine_frame_advanced", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "industrialforegoing:machine_frame_simple", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:sentry_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:vex_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:wild_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:coast_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:dune_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:wayfinder_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:raiser_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:shaper_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:host_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:ward_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:silence_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:tide_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:snout_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:rib_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:eye_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:spire_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:flow_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:bolt_armor_trim_smithing_template", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:heart_of_the_sea", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:heavy_core", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:turtle_scute", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:armadillo_scute", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:rabbit_hide", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:breeze_rod", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        },
        {
            time: 200,
            energy: 8,
            outputs: [{ id: "minecraft:ominous_bottle{\"minecraft:ominous_bottle_amplifier\":4}", count: 1, chance: 1.0 }],
            inputs: [],
            fluid_input: [],
            fluid_output: [],
            energy_out: 0
        }
    ];

    let machine_id = "mmr:colider";

    let input_slots = [
        { x: 19, y: 19 }, { x: 37, y: 19 }, { x: 55, y: 19 },
        { x: 19, y: 37 }, { x: 37, y: 37 }, { x: 55, y: 37 },
        { x: 19, y: 55 }, { x: 37, y: 55 }, { x: 55, y: 55 }
    ];

    let output_slots = [
        { x: 75, y: 12 }, { x: 93, y: 12 }, { x: 111, y: 12 },
        { x: 75, y: 30 }, { x: 93, y: 30 }, { x: 111, y: 30 },
        { x: 75, y: 48 }, { x: 93, y: 48 }, { x: 111, y: 48 }
    ];

    let energy_in = { x: 0, y: 12 };
    let energy_out = { x: 0, y: 30 };
    let progressArrow = { x: 45, y: 30 };

    let i = 0;
    recipes.forEach(rs => {
        return;
        for(let j = 1; j < 5; j++)
        {
            i++;

            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe(machine_id, rs.time)
                .width(140)
                .height(80)
                .progressData(ProgressData.create().x(progressArrow.x).y(progressArrow.y))
                .requireFunctionOnStart("starting")
                .requireFunctionOnEnd("ending");
            
            let total_inputs = 0;
            if(rs.inputs && rs.inputs.length > 0)
            {
                rs.inputs.forEach(input => {
                    total_inputs++;
                    recipe.requireItem(Item.of(input.id, input.count*j), input.chance)
                })
            }

            if(total_inputs > 9) throw Error("Can't have more than 9 item inputs! " + rs)

            if(rs.fluid_input && rs.fluid_input.length > 0)
            {
                rs.fluid_input.forEach(input => {
                    total_inputs++;
                    recipe.requireFluid(Fluid.of(input.id, input.count*j), input.chance)
                })
            }

            if(total_inputs > 9) throw Error("Can't have more than 9 inputs in total! " + rs)

            if(rs.energy && rs.energy > 0)
            {
                recipe.requireEnergyPerTick(rs.energy*j);
            }

            //outputs
            let total_outputs = 0;
            if(rs.outputs && rs.outputs.length > 0)
            {
                rs.outputs.forEach(input => {
                    total_outputs++;
                    recipe.produceItem(Item.of(input.id, input.count*j), input.chance)
                })
            }

            if(total_outputs > 9) throw Error("Can't have more than 9 item outputs! " + rs)

            if(rs.fluid_output && rs.fluid_output.length > 0)
            {
                rs.fluid_output.forEach(input => {
                    total_outputs++;
                    recipe.produceFluid(Fluid.of(input.id, input.count*j), input.chance)
                })
            }

            if(total_outputs > 9) throw Error("Can't have more than 9 outputs in total! " + rs)

            if(rs.energy_out && rs.energy_out > 0)
            {
                recipe.produceEnergyPerTick(totalEnergy*j);
            }

            if(j !== 1)
            {
                recipe.hide();
            }
            else
            {
                recipe.jei();
            }
            
            let inputIdx = 0;
            
            if(rs.inputs && rs.inputs.length > 0)
            {
                rs.inputs.forEach(input => {
                    if(!Item.exists(input)) return;
                    let slot = input_slots[inputIdx];
                    recipe.requireItem(Item.of(input.id, input.count * j), input.chance, slot.x, slot.y);
                    inputIdx++;
                });
            }

            if(rs.fluid_input && rs.fluid_input.length > 0)
            {
                rs.fluid_input.forEach(fluid => {
                    if(!Fluid.exists(fluid)) return;
                    let slot = input_slots[inputIdx];
                    recipe.requireFluid(Fluid.of(fluid.id, fluid.count * j), fluid.chance, slot.x, slot.y);
                    inputIdx++;
                });
            }

            for(let slot_index = inputIdx; slot_index < 9; slot_index++)
            {
                recipe.emptyItem(input_slots[slot_index].x, input_slots[slot_index].y);
            }
            
            if(rs.energy && rs.energy > 0)
            {
                recipe.requireEnergyPerTick(rs.energy * j, energy_in.x, energy_in.y);
            }
            
            if(rs.energy_out && rs.energy_out > 0)
            {
                recipe.produceEnergyPerTick(rs.energy_out * j, energy_out.x, energy_out.y);
            }
            
            let output_index = 0;
            
            if(rs.outputs && rs.outputs.length > 0)
            {
                rs.outputs.forEach(out => {
                    let slot = output_slots[output_index];
                    recipe.produceItem(Item.of(out.id, out.count * j), out.chance, slot.x, slot.y);
                    output_index++;
                });
            }

            if(rs.fluid_output && rs.fluid_output.length > 0)
            {
                rs.fluid_output.forEach(out => {
                    let slot = output_slots[output_index];
                    recipe.produceFluid(Fluid.of(out.id, out.count * j), out.chance, slot.x, slot.y);
                    output_index++;
                });
            }

            for(let slot_index = output_index; slot_index < 9; slot_index++)
            {
                recipe.emptyItem(output_slots[slot_index].x, output_slots[slot_index].y);
            }

            let recipe_name = (rs.outputs && rs.outputs.length > 0) ? rs.outputs[0].id : `recipe_${i}`;
            
            recipe.id(`catalyst:mmr/colider/${i}/parallel_${j}/${recipe_name.replace(':', '_')}`);
        }
    });

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:colider", 200)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireItem("minecraft:stone", 20, 20)
        .produceItem("minecraft:cobblestone", 90, 20)
        .requireFunctionOnStart("starting")
        .requireFunctionOnEnd("ending")
        .id("catalyst:mmr/colider/gravity_conversion")

    console.log("[CatJS] Finished Colider recipes");
});

MMREvents.extraTooltips(event => {
    event.create("mmr:colider", 'item')
    .add(Component.translatable("catalyst.mmr.tooltip.colider.item"))

    event.create("mmr:colider", 'gui')
    .add(Component.translatable("catalyst.mmr.tooltip.colider.gui"))
})

MMREvents.recipeFunction("starting", catalyst => {
    let level = catalyst.getTile().getLevel();
    let controllerPos = catalyst.getTile().getBlockPos();
    let targetPos = controllerPos.above(4); 
    level.setBlock(targetPos, Block.getBlock('catalystcore:gravity_anomaly').defaultBlockState(), 3);
});

MMREvents.recipeFunction("ending", catalyst => {
    let level = catalyst.getTile().getLevel();
    let controllerPos = catalyst.getTile().getBlockPos();
    let targetPos = controllerPos.above(4); 

    let state = level.getBlockState(targetPos);
    let blockId = state.getBlock().id;

    if(blockId === 'catalystcore:gravity_anomaly')
    {
        level.setBlock(targetPos, Block.getBlock('minecraft:air').defaultBlockState(), 3);
    }
    else
    {
        catalyst.error("No black hole");
    }
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/