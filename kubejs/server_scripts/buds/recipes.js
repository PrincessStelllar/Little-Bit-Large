
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    let clusterMapping = {
        'minecraft:amethyst_cluster': 'minecraft:amethyst_shard',
        'pastel:topaz_cluster': 'pastel:topaz_shard',
        'pastel:citrine_cluster': 'pastel:citrine_shard',
        'pastel:onyx_cluster': 'pastel:onyx_shard',
        'pastel:moonstone_cluster': 'pastel:moonstone_shard',

        'geore:coal_cluster': 'geore:coal_shard',
        'geore:copper_cluster': 'geore:copper_shard',
        'geore:diamond_cluster': 'geore:diamond_shard',
        'geore:emerald_cluster': 'geore:emerald_shard',
        'geore:gold_cluster': 'geore:gold_shard',
        'geore:iron_cluster': 'geore:iron_shard',
        'geore:lapis_cluster': 'geore:lapis_shard',
        'geore:quartz_cluster': 'geore:quartz_shard',
        'geore:redstone_cluster': 'geore:redstone_shard',
        'geore:ancient_debris_cluster': 'geore:ancient_debris_shard',
        'geore:ruby_cluster': 'geore:ruby_shard',
        'geore:sapphire_cluster': 'geore:sapphire_shard',
        'geore:topaz_cluster': 'geore:topaz_shard',
        'geore:zinc_cluster': 'geore:zinc_shard',
        'geore:uraninite_cluster': 'geore:uraninite_shard',
        'geore:black_quartz_cluster': 'geore:black_quartz_shard',
        'geore:monazite_cluster': 'geore:monazite_shard',
        'geore:aluminum_cluster': 'geore:aluminum_shard',
        'geore:lead_cluster': 'geore:lead_shard',
        'geore:nickel_cluster': 'geore:nickel_shard',
        'geore:osmium_cluster': 'geore:osmium_shard',
        'geore:platinum_cluster': 'geore:platinum_shard',
        'geore:silver_cluster': 'geore:silver_shard',
        'geore:tin_cluster': 'geore:tin_shard',
        'geore:tungsten_cluster': 'geore:tungsten_shard',
        'geore:uranium_cluster': 'geore:uranium_shard',

        'pastel:bismuth_cluster': 'pastel:bismuth_crystal',
        'pastel:malachite_cluster': 'pastel:pure_malachite',
        'pastel:azurite_cluster': 'pastel:pure_azurite',
        'pastel:bloodstone_cluster': 'pastel:pure_bloodstone',
        'pastel:coal_cluster': 'pastel:pure_coal',
        'pastel:copper_cluster': 'pastel:pure_copper',
        'pastel:iron_cluster': 'pastel:pure_iron',
        'pastel:gold_cluster': 'pastel:pure_gold',
        'pastel:lapis_cluster': 'pastel:pure_lapis',
        'pastel:redstone_cluster': 'pastel:pure_redstone',
        'pastel:diamond_cluster': 'pastel:pure_diamond',
        'pastel:emerald_cluster': 'pastel:pure_emerald',
        'pastel:prismarine_cluster': 'pastel:pure_prismarine',
        'pastel:quartz_cluster': 'pastel:pure_quartz',
        'pastel:glowstone_cluster': 'pastel:pure_glowstone',
        'pastel:zinc_cluster': 'pastel:pure_zinc',
        'pastel:netherite_scrap_cluster': 'pastel:pure_netherite_scrap',
        'pastel:echo_cluster': 'pastel:pure_echo',
        'pastel:pure_echo': 'minecraft:echo_shard'
    };

    let createRecipesForTag = (tagString, multiplier) => {
        Ingredient.of(tagString).getItemIds().forEach(inputId => {
            let outputId = clusterMapping[inputId];
            
            if(outputId)
            {
                event.shapeless(Item.of(outputId, multiplier), inputId);
            }
        });
    };

    createRecipesForTag('#catalyst:budding_storage', 4);

    console.log("[CatJS] Added some budding storage recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/