
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of('productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:cobalt"}]', 1),
    [
        "CCC",
        "CBC",
        "CCC"
    ],{
        C: 'eternalores:cobalt_ingot',
        B: 'minecraft:bee_spawn_egg'
    
    }).id("catalyst:prod_bees/cobalt_bee");

    console.log("[CatJS] Added Productive Bees recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/