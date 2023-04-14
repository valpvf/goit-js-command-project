import { api } from '../helpers/api';

console.log(
  api.getCharacters({
    nameStartsWith: 'Hulk',
    limit: 3,
  })
);

const characterIn = document.querySelector('#character-input');
const liCharacter = document.querySelector('.character-list');

const characterOut = document.querySelector('#character-output');
console.log(characterIn);
console.log(characterOut);

const addInpunName = () => {
  if (!characterIn.value) {
    characterOut.textContent = '-----';
  } else {
    characterOut.textContent = characterIn.value;
  }
};

nameIn.addEventListener('input', addInpunName);
