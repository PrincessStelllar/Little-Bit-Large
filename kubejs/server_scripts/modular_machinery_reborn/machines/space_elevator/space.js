/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:space")
        .color('#FF08C4CF')
        .name(Component.translatable("catalyst.mmr.machine.space"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaabbbcbbbaaa","adabeeceebada","aaabeeceebaaa","bbbieeceeibbb","beeeccccceeeb","beeechchceeeb","ccccccccccccc","beeechchceeeb","beeeccccceeeb","bbbfeeceegbbb","aaabeeceebaaa","adabeeceebada","aaabbbcbbbaaa","             ","             ","             ","             "],
                ["     bmb     ","             ","             ","             ","    hhhhh    ","b   hjhjh   b","b   hhhhh   b","b   hjhjh   b","    hhhhh    ","             ","             ","             ","     bbb     ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    h   h    ","      h      ","     hhh     ","      h      ","    h   h    ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    h   h    ","     hhh     ","     hhh     ","     hhh     ","    h   h    ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","     ccc     ","     ccc     ","     ccc     ","             ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","     ccc     ","     ccc     ","     ccc     ","             ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","      c      ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","      j      ","     jcj     ","      j      ","             ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","     hhh     ","    hhhhh    ","   hhhhhhh   ","   hhhchhh   ","   hhhhhhh   ","    hhhhh    ","     hhh     ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    kkkkk    ","    kkkkk    ","    kkkkk    ","    kkkkk    ","    kkkkk    ","             ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    kkkkk    ","    k   k    ","    k   k    ","    k   k    ","    kkkkk    ","     kkk     ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    kkkkk    ","    k   k    ","    k j k    ","    k   k    ","    kkkkk    ","     kkk     ","             ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","    kkkkk    ","    kkkkk    ","    kkkkk    ","    kkkkk    ","    kkkkk    ","     kkk     ","     kkk     ","             ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","     kkk     ","             ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","     kkk     ","      k      ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","     kkk     ","     kkk     ","      k      ","             "],
                ["             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","             ","      k      ","     kkk     ","      k      "]
            ])
            .keys({
                "a": [
                    "eternalores:pearl_block"
                ],
                "b": [
                    "modular_machinery_reborn:casing_reinforced"
                ],
                "c": [
                    "eternalores:sculkite_block"
                ],
                "d": [
                    "chipped:edged_redstone_lamp"
                ],
                "e": [
                    "eternalores:sanguis_vivus_block"
                ],
                "f": [
                    "chipped:warning_black_concrete"
                ],
                "g": [
                    "chipped:warning_black_concrete"
                ],
                "h": [
                    "eternalores:biosteel_block"
                ],
                "i": [
                    "chipped:warning_black_concrete"
                ],
                "j": [
                    "minecraft:sea_lantern"
                ],
                "k": [
                    "eternalores:cast_steel_block"
                ]
            })
        )
        
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/