import { api } from '../helpers/api';

let query = '';
let lightbox = null;
// let page = 1;
const perPage = 40;
let result = [];

// console.log(
//   api.getCharacters({
//     nameStartsWith: 'Hulk',
//     limit: 3,
//   })
// );
const headerInput = document.querySelector('.header-form');
const headerColor = document.querySelector('.header');
const headerFindResult =document.querySelector('.header-find');

// const headerInput = document.querySelector('.header-input');
// const liCharacter = document.querySelector('.character-list');
const characterOut = document.querySelector('.header-output');
const headerIcon = document.querySelector('.header-icon');
const headerBtn = document.querySelector('.header-btn');

// console.log(headerInput);
// console.log(liCharacter);
// console.log(characterOut);
// console.log(headerIcon);
// console.log(headerFindResult);


function createGallery(array) {
  const markup = array.map(el => {
    const { id, thumbnail, name, description
    } = el;
    return `
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${id}"
        src='${thumbnail.path}.${thumbnail.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${id}" class='header-find-text'>${name}</h3>
          
          </div>
        </div>
      </a>
    `;
  })
  .join('');
  //  <p  data-set="${id}"class='rc-descr-text'>${description}</p>
  headerFindResult.insertAdjacentHTML('beforeend', markup);}
{/* <div data-set="${id}" class="header-find-text">${name}</div> */}
    


const addInput = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  
  // console.log(formEl.elements.searchQuery.value);
  query = formEl.elements.searchQuery.value;
 
  // console.log(query);

  headerInput.reset();
  
  if (query.trim() == '') {
    console.log('Please specify your search query.');
    return;
  }
    // try {
    const result = await  api.getCharacters({nameStartsWith: query})
    // console.log(result);

if (result.lengt == 0) {
  console.log(
    'Search result is zero. Change your query',
  );
  headerFindResult.innerHTML = '';
  return;
}
else {
  headerFindResult.innerHTML = '';
  createGallery(result);

}
    // } catch (err) {
    //   console.log('Something went wrong. Please try again later.');
    // return;
    // }
    }

    headerInput.addEventListener('submit', addInput);


window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if (!scrollY == 0) {
    headerColor.classList.add('header-color');
  }
  else {headerColor.classList.remove('header-color');}
} )


