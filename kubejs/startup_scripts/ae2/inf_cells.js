StartupEvents.registry('item', event => {

    const fluids = [
        'minecraft:lava',
        'minecraft:milk',
        'industrialforegoing:latex',
        'industrialforegoing:sewage',
        'industrialforegoing:sludge',
        'immersiveengineering:creosote',
        'evilcraft:blood',
        'mob_grinding_utils:fluid_xp'
    ];

    fluids.forEach(id => {
        let name = id.split(':')[1];

        event.create(`infinity_${name}_cell`, 'extendedae:custom_infinity_cell')
        .displayName(Component.translatable(`catalyst.extendedae.${name}`))
        .texture('extendedae:item/infinity_cell')
        .fluidType(id)
        .cellModel('ae2:block/drive/cells/fluid_cell_1k');
    });

});