import { api } from '../helpers/api';

let query = '';
let lightbox = null;
// let page = 1;
const perPage = 40;


// console.log(
//   api.getCharacters({
//     nameStartsWith: 'Hulk',
//     limit: 3,
//   })
// );
const headerInput = document.querySelector('.header-form');
// const headerInput = document.querySelector('.header-input');
// const liCharacter = document.querySelector('.character-list');
const characterOut = document.querySelector('.header-output');
const headerIcon = document.querySelector('.header-icon');
const headerBtn = document.querySelector('.header-btn');

// console.log(headerInput);
// console.log(liCharacter);
// console.log(characterOut);
// console.log(headerIcon);

const addInput = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  
  console.log(formEl.elements.searchQuery.value);
  query = formEl.elements.searchQuery.value;
 
  console.log(query)
  
  if (query.trim() == '') {
    console.log('Please specify your search query.');
    return;
  }
    try {
    const result = await  api.getCharacters({nameStartsWith: query})
    
    console.log(result);
    
    } catch (err) {
      console.log('Something went wrong. Please try again later.');
    return;
    }
    }

    headerInput.addEventListener('submit', addInput);
