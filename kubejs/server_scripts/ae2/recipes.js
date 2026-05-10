
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

    console.log("[CatJS] Added AE2 recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/