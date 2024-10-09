const mod = {
    primaryName: "ω<sup>2</sup>",
    secondaryName: " Layers (more stuff edition)",
    version: " pre-1.0.6789",
    engineVer: "1.0.1", //DO NOT MODIFY
    debugMode: true,
    Infinities: [new Decimal(2).pow(1024), new Decimal("1.8e30008"), new Decimal("1.8e300000008"), new Decimal("ee38"), new Decimal("ee308")],
    themes: [
        ["Dark", "css/themes/dark.css"],
        ["Dark Alt (by Jeehan2561)", "css/themes/darkalt.css"],
        ["Modern", "css/themes/modern.css"],
        ["Light", "css/themes/light.css"],
        ["Light Alt (by Fita)", "css/themes/lightalt.css"],
        ["Neon", "css/themes/neon.css"],
        ["Godot Blue", "css/themes/darkblue.css"],
        ["Halloween", "css/themes/spooky.css"],
        ["eXPerience", "css/themes/experience.css"]
    ],
    layerNames: [
        ["Greek",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
            "ψϝϛͱϻϙͳϸ",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup>: 4</sup>","<span class='flipped-v'>Ω</span><sup>5<sub>4</sup></sup>"]
        ]],
        ["Combo",
        [
            "αβγδεζηθικλμνξοπρστυφχψωabcdefghijklmnopqrstuvwxyzΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "ψϝϛͱϻϙͳϸðþȝƿəŋſÐÞȜǷƏŊ",
            ["<span class='flipped-v'>Z</span>", "<span class='flipped-v'>Ω</span>","<span class='flipped-v'>No</span>","<span class='flipped-v'>Wαγ!</span>","<span class='flipped-v'>P</span>"]
        ]],
        ["Test",
        [
            ["O", "m", "e", "g", "a", "?!", "<|{Ωη}♇♇♇♇♆(ϸϸϸϙ(ΩΣ))[♇♇(ϸϸϸϸϛ(Υ))]|>:♂(ͳ(Ωθ))[♀(ϸ(ΩΩΩρ))]", "<span class='flipped-v'>𐌒</span>"],
            ["T", "e", "s", "t", "i", "n", "g", "-1/12", "ϙ", "𐌒"],
            ["‽", "⸘", "<span class='flipped-v'>Ψ</span>", "<span class='flipped-v'>Υ</span>", "NOT FINISHED BTW DID YOU KNOW THAT?"]
        ]],
        ["Latin",
        [
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "ðþȝƿəŋſÐÞȜǷƏŊ",
            "æœĳǉﬆ"
        ]],
        ["Alphabet",
        [
            "abcdefghijklmnopqrstuvwxyz",
            "123456789",
            "ABCDE"
        ]],
        ["Symbols",
        [
            '!"£$%^&*;:@',
            "<,[{}].>",
            "+-×÷‽"
        ]],
        ["Binary",
        [
            '01',
            "01",
            ["10", "11", "100", "101", "110"]
        ]],
        ["Random",
        [
            Utils.createRandomWord(10, new Random(Date.now()).nextInt()),
            Utils.createRandomWord(10, new Random(Math.floor(Date.now()/2)).nextInt()),
            [Utils.createRandomWord(2, new Random(Math.floor(Date.now()/3)).nextInt()),Utils.createRandomWord(3, new Random(Math.floor(Date.now()/4)).nextInt()),Utils.createRandomWord(4, new Random(Math.floor(Date.now()/5)).nextInt()),Utils.createRandomWord(5, new Random(Math.floor(Date.now()/6)).nextInt())]
        ]]
    ],
    layerNamePlaceholder: "𐌒",
    fonts: [
        ["Monospace Typewriter", "css/fonts/typespace.css"],
        ["Source Code Pro", "css/fonts/scp.css"],
        ["Comic Sans", "css/fonts/comic.css"],
        ["Arial", "css/fonts/arial.css"],
        ["Roboto", "css/fonts/roboto.css"],
        ["Ubuntu", "css/fonts/ubuntu.css"],
        ["Comfortaa", "css/fonts/comfortaa.css"],
        ["Minecraft", "css/fonts/minecraft.css"],
        ["Minecraft: Omega Layers Compatible", "css/fonts/minecraft-omega-layers-compatible.css"],
    ],
    saves: [
        ["Save 1", ""],
        ["Save 2", "2"],
        ["Save 3", "3"],
        ["Save 4", "4"],
    ],
    debugClasses: []
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName
