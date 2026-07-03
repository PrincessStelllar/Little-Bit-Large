/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:vampire")
        .color('#FFaa7daa')
        .name(Component.translatable("catalyst.mmr.machine.vampire"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaaadefaaaa","accccacccca","accccacccca","accccacccca","bccccaccccb","baaaacaaaab","bccccaccccb","accccacccca","accccacccca","accccacccca","aaaabbbaaaa"],
                ["ag  hmg  ha","lj   l   jl","  kjj jjk  ","  j     j  ","i j     j i","ag   a   ha","l j     j l","  j     j  ","  kjj jjk  ","ij   i   ji","ag  hag  ha"],
                ["a         a","           ","  o     o  ","           ","           ","n    a    n","           ","           ","  o     o  ","           ","a    n    a"],
                ["o         o","           ","  o     o  ","           ","           ","     a     ","           ","           ","  o     o  ","           ","o         o"],
                ["p         q","           ","  o     o  ","           ","           ","           ","           ","           ","  o     o  ","           ","p         q"],
                ["           ","           ","  o     o  ","           ","    xyz    ","    vrw    ","    stu    ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","     A     ","    BjB    ","     A     ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","           ","    B B    ","           ","           ","  o     o  ","           ","           "],
                ["           ","           ","  o     o  ","           ","           ","    B B    ","           ","           ","  o     o  ","           ","           "],
                ["           ","           ","  aaaaaaa  ","  aCCCCCa  ","  aCCCCCa  ","  accccca  ","  aCCCCCa  ","  aCCCCCa  ","  aaaaaaa  ","           ","           "],
                ["           ","           ","  A     A  ","           ","           ","     A     ","           ","           ","  A     A  ","           ","           "]
            ])
            .keys({
                "a": [
                    "minecraft:polished_blackstone_bricks"
                ],
                "b": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus'
                ],
                "c": [
                    "evilcraft:dark_brick"
                ],
                "d": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus'
                ],
                "e": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus'
                ],
                "f": [
                    'minecraft:polished_blackstone_bricks',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus'
                ],
                "g": [
                    "evilcraft:dark_brick_stairs[facing=east,half=bottom,shape=straight]"
                ],
                "h": [
                    "evilcraft:dark_brick_stairs[facing=west,half=bottom,shape=straight]"
                ],
                "i": [
                    "evilcraft:dark_brick_stairs[facing=south,half=bottom,shape=straight]"
                ],
                "j": [
                    "minecraft:nether_brick_slab[type=bottom]"
                ],
                "k": [
                    "minecraft:nether_bricks"
                ],
                "l": [
                    "evilcraft:dark_brick_stairs[facing=north,half=bottom,shape=straight]"
                ],
                "n": [
                    "chipped:iron_bowl_soul_lantern[hanging=false]"
                ],
                "o": [
                    "evilcraft:undead_fence[east=false,north=false,south=false,west=false]"
                ],
                "p": [
                    "mcwlights:soul_double_street_lamp[facing=south,lit=true,part=base,powered=false]"
                ],
                "q": [
                    "mcwlights:soul_double_street_lamp[facing=north,lit=true,part=base,powered=false]"
                ],
                "r": [
                    'catalystcore:liquid_blood'
                ],
                "s": [
                    "evilcraft:dark_brick_stairs[facing=north,half=top,shape=outer_left]"
                ],
                "t": [
                    "evilcraft:dark_brick_stairs[facing=north,half=top,shape=straight]"
                ],
                "u": [
                    "evilcraft:dark_brick_stairs[facing=east,half=top,shape=outer_left]"
                ],
                "v": [
                    "evilcraft:dark_brick_stairs[facing=west,half=top,shape=straight]"
                ],
                "w": [
                    "evilcraft:dark_brick_stairs[facing=east,half=top,shape=straight]"
                ],
                "x": [
                    "evilcraft:dark_brick_stairs[facing=west,half=top,shape=outer_left]"
                ],
                "y": [
                    "evilcraft:dark_brick_stairs[facing=south,half=top,shape=straight]"
                ],
                "z": [
                    "evilcraft:dark_brick_stairs[facing=south,half=top,shape=outer_left]"
                ],
                "A": [
                    "chipped:wooden_cage_soul_lantern[hanging=false]"
                ],
                "B": [
                    "mcwlights:golden_chain[axis=y]"
                ],
                "C": [
                    "minecraft:nether_brick_slab[type=top]"
                ]
            })
        )
        
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/