/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:abyssal_pump", 300)
        // OPTIONAL CUSTOMIZATION {
        .progressX(30)
        .progressY(20)
        .width(110)
        .height(60)
        // }

        .requireEnergy(30000, 0, 4)
        .produceFluid('10000x mekanism:heavy_water', 75, 20)
        //.requireFluid('1000000x minecraft:water', 25, 20);

})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/