const keys = [
    {
        publickey: "b7033e2ec32dc004fef1d6b078a0e881",
        privatekey: "e84d5f752e66a362d2f542b2ec296e48a27fb2a0",
    },
    {
        publickey: "caba337208b47569b1f84f369984c4a2",
        privatekey: "b496be0246e5deafeb43afa6abcf6a04e1453022",
    },
    {
        publickey: "2d66dc4d241b1e725a65709fbddb3fff",
        privatekey: "7bcdbaf715b35f3ca9f820b168f7904a5457f407",
    },
    // {
    //     publickey: '10d9adf698c7e03e826886b469f64fda',
    //     privatekey: 'bebc14fb8e0de0eb1ddaa7489aa94e51c83d5ba9',
    // },
]

export const key = keys[(Math.round(Math.random() * (keys.length - 1)))];