RecipeViewerEvents.removeEntries('item', catalyst => {
    catalyst.remove('generatorgalore:iron_to_culinary_upgrade')
    catalyst.remove('generatorgalore:iron_to_enchantment_upgrade')
    catalyst.remove('generatorgalore:iron_to_ender_upgrade')
    catalyst.remove('generatorgalore:iron_to_honey_upgrade')
    catalyst.remove('generatorgalore:iron_to_netherstar_upgrade')
    catalyst.remove('generatorgalore:iron_to_magmatic_upgrade')
    catalyst.remove('generatorgalore:iron_to_potion_upgrade')
    catalyst.remove(['ironjetpacks:electrum','ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:electrum"]','ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:electrum"]','ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:electrum"]'])
    catalyst.remove(['ironjetpacks:platinum','ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:platinum"]','ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:platinum"]','ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:platinum"]'])
    catalyst.remove('mekanism:dimensional_stabilizer')
    catalyst.remove('mekanism:upgrade_anchor')
    catalyst.remove('ae2:spatial_anchor')
    catalyst.remove('reliquary:alkahestry_tome')
    catalyst.remove('energizedpower:time_controller')
    catalyst.remove('energizedpower:weather_controller')
    catalyst.remove('quarryplus:adv_quarry')
    catalyst.remove('quarryplus:remove_bedrock_module')
    catalyst.remove('mysticalagradditions:insanium_nugget')
    catalyst.remove([/geore:allthemodium_.*/, /geore:.*_allthemodium/, /geore:.*_allthemodium_bud/])
    catalyst.remove([/geore:vibranium_.*/, /geore:.*_vibranium/, /geore:.*_vibranium_bud/])
    catalyst.remove([/geore:unobtainium_.*/, /geore:.*_unobtainium/, /geore:.*_unobtainium_bud/])
    catalyst.remove(['georenouveau:allthemodium_geore_golem_charm', 'georenouveau:vibranium_geore_golem_charm', 'georenouveau:unobtainium_geore_golem_charm'])
})

RecipeViewerEvents.addInformation('item', event => {
	event.add('mysticalagriculture:flux_seeds', [
		'Can be created using the same method as Flux Dust'
	]);
})