MMREvents.machines(catalyst => {
    catalyst.create("mmr:nether_furnace")
        .color('#ff66605f')
        .name('Soul Furnace')
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa", "aba", "aaa"],
                ["cmc", "f d", "ccc"],
                ["ici", "chc", "gcg"],
                [" j ", "jkj", " j "],
                ["ljl", "jnj", "ljl"],
                ["oio", "q p", "ogo"]
            ])
            .keys({
                "a": ["chipped:brick_bordered_red_nether_bricks"],
                "b": ["minecraft:magma_block"],
                "c": ["create:cut_scorchia_bricks"],
                "d": ["modular_machinery_reborn:inputbus_tiny[connect_textures=true]"],
                "f": ["modular_machinery_reborn:outputbus_tiny[connect_textures=true]"],
                "g": ["create:cut_scorchia_brick_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]"],
                "h": ["minecraft:glowstone"],
                "i": ["create:cut_scorchia_brick_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]"],
                "j": ["chipped:red_nether_bricks_bricks"],
                "k": ["minecraft:soul_campfire[facing=west,lit=true,signal_fire=false,waterlogged=false]"],
                "l": ["minecraft:soul_lantern[hanging=true,waterlogged=false]"],
                "n": ["minecraft:iron_trapdoor[facing=west,half=top,open=false,powered=false,waterlogged=false]"],
                "o": ["create:cut_scorchia_brick_slab[type=bottom,waterlogged=false]"],
                "p": ["create:cut_scorchia_brick_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]"],
                "q": ["create:cut_scorchia_brick_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]"]
            })
        )
})