MMREvents.machines(catalyst => {
    catalyst.create("mmr:advanced_apiary")
    .color("#ffc9780a")
    .name("Advanced Apiary")
    .structure(
        MMRStructureBuilder.create()
        .pattern(
            [
                ["a   a","     ","     ","     ","a   a"],
                ["anmja","nfffn","cfffc","nfffn","ancna"],
                ["kkkkk","klllk","klhlk","klllk","kkkkk"],
                ["hhhhh","hlllh","hlhlh","hlllh","hhhhh"],
                ["kkkkk","klllk","klhlk","klllk","kkkkk"],
                ["ancna","nfffn","cfffc","nfffn","ancna"]
            ]
        )
        .keys(
            {
                "a":["modular_machinery_reborn:casing_reinforced"],
                "f":["modular_machinery_reborn:casing_circuitry"],
                "c":["modular_machinery_reborn:casing_plain"],
                "k":["#minecraft:planks"],
                "l":["minecraft:honey_block"],
                "h":["#c:storage_blocks/honeycombs"],
                "n": [
                    "#modular_machinery_reborn:energyoutputhatch",
                    "#modular_machinery_reborn:energyinputhatch",
                    "#modular_machinery_reborn:fluidoutputhatch",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidinputhatch",
                    "#modular_machinery_reborn:inputbus",
                    'modular_machinery_reborn:biome_reader',
                    'modular_machinery_reborn:weather_sensor',
                    'modular_machinery_reborn:time_counter',
                    'modular_machinery_reborn:height_meter',
                    'modular_machinery_reborn:dimensional_detector',
                    "modular_machinery_reborn:casing_plain"
                ],
                "j":["#modular_machinery_reborn:parallelhatch"]            
            }
        )
    )
})