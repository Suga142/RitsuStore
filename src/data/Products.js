import {COLORS} from "../constants/Colors"

export const PRODUCTS = [
    {
        id: 1,
        category: 1,
        name: "Funko Pop Tomioka Giyuu",
        description: "Tomioka Giyuu figure from Demon Slayer",
        price: 13000,
        img: require("../assets/img/tomioka.jpg"),
        color: COLORS.actionColor,
    },
    {
        id: 2,
        category: 2,
        name: "Xayah x Rakan Keychain",
        description: "Xayah and Rakan keychain from League of Legends",
        price: 3000,
        img: require("../assets/img/rakan.jpg"),
        color: COLORS.tertiary,
    },
    {
        id: 3,
        category: 3,
        name: "Tartaglia Plushie",
        description: "Tartaglia Plushie from Genshin Impact",
        price: 8000,
        img: require("../assets/img/tartaglia.jpg"),
        color: COLORS.disableColor,
    },
    {
        id: 4,
        category: 4,
        name: "Mondstad Keychains Pack",
        description: "Keychain Mondstad characters pack from Genshin Impact",
        price: 9000,
        img: require("../assets/img/mondstad.jpg"),
        color: COLORS.primary,
    },
    {
        id: 5,
        category: 3,
        name: "Zhongli Plushie",
        description: "Zhongli Plushie from Genshin Impact",
        price: 8000,
        img: require("../assets/img/zhongli.jpg"),
        color: COLORS.disableColor,
    },
]