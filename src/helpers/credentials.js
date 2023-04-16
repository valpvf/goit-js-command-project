const keys = [
  {
    publickey: 'b7033e2ec32dc004fef1d6b078a0e881',
    privatekey: 'e84d5f752e66a362d2f542b2ec296e48a27fb2a0',
  },
    {
      publickey: 'caba337208b47569b1f84f369984c4a2',
      privatekey: 'b496be0246e5deafeb43afa6abcf6a04e1453022',
    },
    {
      publickey: '2d66dc4d241b1e725a65709fbddb3fff',
      privatekey: '7bcdbaf715b35f3ca9f820b168f7904a5457f407',
    },
  {
    publickey: '2948b8e0caf400a2826fafe939e0b4f9',
    privatekey: 'cd4405cc83dbf1a338db18b1461414480be3621f',
  },
  {
    publickey: '2560e533d1fd9d2c9f7b990f540dd6cf',
    privatekey: 'f64a47da2ab918d5638ae1a9c3b00eae09af40e9',
  },
  {
      publickey: '10d9adf698c7e03e826886b469f64fda',
      privatekey: 'bebc14fb8e0de0eb1ddaa7489aa94e51c83d5ba9',
  },
  {
    publickey: '2bfe5cf47c7cf21dd68f8ab2867b6081',
    privatekey: '2adbeb35b1c16579945054958cad4a05b2a2e914',
  },
];

export const key = keys[Math.round(Math.random() * (keys.length - 1))];
