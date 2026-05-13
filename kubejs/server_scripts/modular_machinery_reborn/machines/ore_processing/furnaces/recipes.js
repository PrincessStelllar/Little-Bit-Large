/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    let processedRecipes = new Set();
    let blacklist = [
        //emptiness list
    ]

    const addFurnaceRequirements = (recipeBuilder) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(30).y(10))
            .width(80)
            .height(40)

        return r;
    };

    const addFurnaceRequirements2 = (recipeBuilder) => {
        let r = recipeBuilder
            .progressData(ProgressData.create().x(54).y(20))
            .width(110)
            .height(60)

        return r;
    };

    catalyst.forEachRecipe({ type: 'minecraft:smelting' }, recipe => {
        let outputItemRaw = recipe.originalRecipeResult;
        
        if (outputItemRaw.isEmpty() || outputItemRaw.id === "minecraft:barrier") return;

        let original_count = outputItemRaw.count;
        let multiplier = 1;

        recipe.originalRecipeIngredients.forEach(ingredient => {
            ingredient.getItemIds().forEach(inputId => {
                try
                {
                    if(blacklist.includes(inputId)) return;
                    if(processedRecipes.has(inputId)) return;

                    processedRecipes.add(inputId);

                    [1, 4, 6, 8, 16, 32, 64, 128, 256, 512, 1024, 2048].forEach(number => {
                        let inputItem = Item.of(inputId, number);
                        if(number > 1)
                        {
                            
                            let outOverworld = outputItemRaw.copy();
                            outOverworld.setCount(original_count * multiplier * number);
                            let recipe;
                            if(number < 16)
                            {
                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);

                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", 350)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_soul_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);

                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", 300)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/primitive_end_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements(recipe);
                            }

                            if(number < 512)
                            {
                                recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", 150)
                                    .requireItem(inputItem, 0, 10) 
                                    .produceItem(outOverworld, 40, 10)
                                    .requireEnergyPerTick(10000)
                                    .priority(number)
                                    .hide()
                                    .id(`catalyst:mmr/multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                                addFurnaceRequirements2(recipe);
                            }

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", 50)
                                .requireItem(inputItem, 0, 10) 
                                .produceItem(outOverworld, 40, 10)
                                .requireEnergyPerTick(10000)
                                .priority(number)
                                .hide()
                                .id(`catalyst:mmr/adv_multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);
                        }
                        else
                        {
                            let outOverworld = outputItemRaw.copy();
                            outOverworld.setCount(original_count * multiplier * number);

                            let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:nether_furnace", 350)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_soul_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:end_furnace", 300)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .id(`catalyst:mmr/primitive_end_furnace/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:multismelter", 150)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .requireEnergyPerTick(10000)
                                .jei()
                                .requireItem(inputItem, 20, 20) 
                                .produceItem(outOverworld, 90, 20)
                                .requireEnergyPerTick(10000)
                                .id(`catalyst:mmr/multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);

                            recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:advanced_multismelter", 50)
                                .requireItem(inputItem, 5, 10) 
                                .produceItem(outOverworld, 60, 10)
                                .requireEnergyPerTick(50000)
                                .jei()
                                .requireItem(inputItem, 20, 20) 
                                .produceItem(outOverworld, 90, 20)
                                .requireEnergyPerTick(50000)
                                .id(`catalyst:mmr/adv_multismelter/${number}/${inputId.replace(":", "-")}_to_${outOverworld.id.replace(":", "-")}`)

                            addFurnaceRequirements2(recipe);
                        }
                    })

                }
                catch(error)
                {
                    console.error(`[CatJS] Error creating recipe for item ${inputId}: ${error}`);
                }
            });
        });
    });

    let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:primitive_furnace", 400)
            .requireItem("minecraft:coal_block", 5, 10) 
            .produceItem("immersiveengineering:coke", 60, 10)
            .id(`catalyst:mmr/primitive_furnace/coke_special_recipe`)
    addFurnaceRequirements(recipe);

    console.log("[CatJS] Added Furnaces recipes from smelting")

});

MMREvents.extraTooltips(event => {
  // Primitive Furnace
  event.create("mmr:primitive_furnace", 'item')
    .add("[Primitive Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")
  event.create("mmr:primitive_furnace", 'gui')
    .add("[Primitive Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")

  // Nether Furnace
  event.create("mmr:nether_furnace", 'item')
    .add("[Soul Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")
  event.create("mmr:nether_furnace", 'gui')
    .add("[Soul Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")

  // End Furnace
  event.create("mmr:end_furnace", 'item')
    .add("[Ender Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")
  event.create("mmr:end_furnace", 'gui')
    .add("[Ender Furnace] This machine has fake parallels, so it can do 1 recipe or 8 at the same time!")

  // Multismelter (16 recetas)
  event.create("mmr:multismelter", 'item')
    .add("[Multismelter] This machine has fake parallels, so it can do 1 recipe or 16 at the same time! Or more!")
  event.create("mmr:multismelter", 'gui')
    .add("[Multismelter] This machine has fake parallels, so it can do 1 recipe or 16 at the same time! Or more!")

  // Advanced Multismelter
  event.create("mmr:advanced_multismelter", 'item')
    .add("[Advanced Multismelter] This machine has fake parallels, so it can do 1 recipe or 16 at the same time! Or more!")
  event.create("mmr:advanced_multismelter", 'gui')
    .add("[Advanced Multismelter] This machine has fake parallels, so it can do 1 recipe or 16 at the same time! Or more!")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/