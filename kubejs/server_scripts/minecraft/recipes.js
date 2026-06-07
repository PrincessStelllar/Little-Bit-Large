/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of("minecraft:name_tag", 1), 
        [
            "  S",
            " P ",
            "P  "
        ],{
        S: 'minecraft:string',
        P: 'minecraft:paper',
    }).id("catalyst:minecraft/name_tag_1")

    catalyst.shaped(Item.of("minecraft:name_tag", 3), 
        [
            " IS",
            " P ",
            "P  "
        ],{
        S: 'minecraft:string',
        P: 'minecraft:paper',
        I: '#c:dyes/black'
    }).id("catalyst:minecraft/name_tag_3")

    catalyst.shaped(Item.of('minecraft:heavy_core', 1), 
        [
            "ROR",
            "OSO",
            "ROR"
        ],
        {
            R: 'minecraft:breeze_rod',
            O: 'minecraft:oxidized_copper_bulb',
            S: 'minecraft:heart_of_the_sea'
        }
    ).id("catalyst:minecraft/heavy_core")

    catalyst.shaped(Item.of('minecraft:crying_obsidian', 8), 
        [
            "OOO",
            "ONO",
            "OOO"
        ],
        {
            N: 'farmersdelight:onion',
            O: 'minecraft:obsidian',
        }
    ).id("catalyst:minecraft/crying_obsidian_8")

    catalyst.shaped(Item.of('minecraft:crying_obsidian', 1), 
        [
            "ON ",
        ],
        {
            N: 'farmersdelight:onion',
            O: 'minecraft:obsidian',
        }
    ).id("catalyst:minecraft/crying_obsidian_1")

    catalyst.shapeless(Item.of('minecraft:prismarine_shard', 4), 'minecraft:prismarine').id(`catalyst:minecraft/prismarine_to_shard`);
    catalyst.shapeless(Item.of('minecraft:prismarine_crystals', 4), 'minecraft:sea_lantern').id(`catalyst:minecraft/sea_lantern_to_shards`);

    console.log("[CatJS] Added minecraft recipes")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/