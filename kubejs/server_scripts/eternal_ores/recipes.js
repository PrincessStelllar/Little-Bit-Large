/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('eternalores:catalyrium_dust', 4), // arg 1: output
        [
            'CAC',
            'BDB', // arg 2: the shape (array of strings)
            'CAC'
        ],
        {
            A: 'minecraft:sculk_catalyst',
            B: 'minecraft:dragon_breath',  //arg 3: the mapping object
            C: 'minecraft:blaze_powder',
            D: 'minecraft:redstone'
        }
    ).id('catalyst:eternalores/catalyrium_dust')

    catalyst.shaped(Item.of('eternalores:shadow_blend', 3),
        [
            'KKK',
            'CEO',
            'SS '
        ],
        {
            S: 'eternalores:shadowsteel_dust',
            O: 'eternalores:onyx_dust',
            E: 'eternalores:endergetic_blend',
            C: 'eternalores:cobalt_dust',
            K: 'eternalores:sculk_dust'
        }
    ).id('catalyst:eternalores/shadow_blend')

    Ingredient.of('#c:pebbles').getItemIds().forEach(id => {
        catalyst.shaped(Item.of(id.replace("eternalores", "minecraft").replace("_pebble", ""), 1),
            [
                'KK',
                'KK',
            ],
            {
                K: id
            }
        ).id(`catalyst:eternalores/pebbles/${id.replace(":", "_")}`)
    });

    console.log("[CatJS] Added EternalOres recipes")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/