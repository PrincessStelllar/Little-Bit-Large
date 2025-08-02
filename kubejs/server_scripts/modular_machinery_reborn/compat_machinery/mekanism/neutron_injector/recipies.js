ServerEvents.recipes(catalyst => {
    function inject(input_chemical, output_chemical, inn, out) {
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:neutron_injector", 40)
            // OPTIONAL CUSTOMIZATION {
            .progressX(54)
            .progressY(20)
            .width(110)
            .height(60)
            // }
            .requireEnergy(10000, 0, 4)
            .produceChemical(`${out}x ${output_chemical}`, 75, 20)
            .requireChemical(`${inn}x ${input_chemical}`, 25, 20)
            
    }

    inject("mekanism:nuclear_waste", "mekanism:polonium", 100000, 10000);
    inject("mekanism:lithium", "mekanismgenerators:tritium", 10000, 10000);
});