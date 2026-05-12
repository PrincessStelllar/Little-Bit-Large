MMREvents.machines(catalyst => {
    catalyst.create("mmr:primitive_extruder")
        .color('#ff66605f')
        .name('Primitive Extruder')
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["  g   g  ","  b   b  ","cbbdddbbe","  dfbfd  ","  dbbbd  ","  dfbfd  ","cbbdddbbe","  b   b  ","  a   a  "],
                ["         ","  b   b  "," bb   bb ","         ","    b    ","         "," bb   bb ","  b   b  ","         "],
                ["         ","  h   h  "," hb   bh ","         ","         ","         "," hb   bh ","  h   h  ","         "],
                ["         ","         ","  j   j  ","         ","    j    ","         ","  j   j  ","         ","         "],
                ["         ","         ","  j   j  ","         ","    m    ","         ","  j   j  ","         ","         "],
                ["         ","         ","  j   j  ","    n    ","    l    ","    k    ","  j   j  ","         ","         "],
                ["  s   s  ","  b   b  ","pbbqqqbbr","  b b b  ","  bbbbb  ","  b b b  ","pbbqqqbbr","  b   b  ","  o   o  "]
            ])
            .keys({
            "a": [
                '#minecraft:walls'
            ],
            "b": [
                '#productivebees:flowers/quarry'
            ],
            "c": [
                '#minecraft:walls'
            ],
            "d": [
                '#minecraft:slabs',
                'modular_machinery_reborn:outputbus_tiny'
            ],
            "e": [
                '#minecraft:walls'
            ],
            "f": [
                "minecraft:spruce_log"
            ],
            "g": [
                '#minecraft:walls'
            ],
            "h": [
                "minecraft:lantern"
            ],
            "j": [
                '#minecraft:walls'
            ],
            "k": [
                '#minecraft:walls'
            ],
            "l": [
                '#minecraft:walls'
            ],
            "n": [
                '#minecraft:walls'
            ],
            "o": [
                "mcwlights:chain_wall_lantern"
            ],
            "p": [
                "mcwlights:chain_wall_lantern"
            ],
            "q": [
                '#minecraft:logs'
            ],
            "r": [
                "mcwlights:chain_wall_lantern"
            ],
            "s": [
                "mcwlights:chain_wall_lantern"
            ]
            })
        )
})