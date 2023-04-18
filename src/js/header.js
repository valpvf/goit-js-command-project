import { api } from '../helpers/api';
import datepicker from 'js-datepicker';
import debounce from 'lodash.debounce';
import 'js-datepicker/dist/datepicker.min.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';


const refs = {
  paginationEl: document.querySelector('.tui-pagination'),
  mainContainer: document.querySelector('.container'),
  cardContainer: document.querySelector('.char-card-container'),
  paginationEl: document.querySelector('.tui-pagination'),
};

let itemsPerPage = null;
let windowWidth = window.getComputedStyle(refs.mainContainer).width;
console.log(windowWidth);

// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
switch (windowWidth) {
  case '365px':
    itemsPerPage = 5;
    break;
  case '768px':
    itemsPerPage = 6;
    break;
  case '1440px':
    itemsPerPage = 16;
    break;

  default:
    itemsPerPage = 3;
    break;
}

console.log(itemsPerPage);
// НАЛАШТОВУЮ ПАГІНАЦІЮ

const paginationOptions = {
  totalItems: 0,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
};
const pagination = new Pagination(refs.paginationEl, paginationOptions);


let query = '';
let lightbox = null;
// let page = 1;
const perPage = 40;
let result = [];


const headerInput = document.querySelector('.header-form');
const headerColor = document.querySelector('.header');
const headerFindResult =document.querySelector('.header-find');

const characterOut = document.querySelector('.header-output');
const headerIcon = document.querySelector('.header-icon');
const headerBtn = document.querySelector('.header-btn');

const addInput = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  query = formEl.elements.searchQuery.value;
  headerInput.reset();
  refs.paginationEl.classList.remove('is-hidden');
  
  if (query.trim() == '') {
    refs.paginationEl.classList.add('is-hidden');
    console.log('Please specify your search query.');
    return;
  }
    const result = await  api.getAllCharacters({nameStartsWith: query})

if (result.results.length == 0) {
  refs.paginationEl.classList.add('is-hidden');
  headerFindResult.innerHTML = '';
  headerFindResult.innerHTML = '<span class="char-error-main"></span>';
  console.log(
    'Search result is zero. Change your query',
  );
  
  return;
}

  headerFindResult.innerHTML = '';

  createGallery(result.results);

pagination.reset(result.total);

    pagination.on('beforeMove', async evt => {
      const { page } = evt;

      let offset = itemsPerPage * (page - 1);
   
      // try {
      //   const res = await api.getAllCharacters({
      //     // comics: final,
      //     limit: itemsPerPage,
      //     offset: 0,
      //   });

      try {
        const res = await api.getAllCharacters({
          // comics: final,
          limit: itemsPerPage,
          offset: offset,
          nameStartsWith: query,
        });
        // pagination.reset(res.total);
        headerFindResult.innerHTML = '';
        // Loading.remove();
        createGallery(result.results);
        // console.log(res.total);
      } catch (error) {
        console.log('Error!!!!!!!!!!!');
      }
    });
}

refs.paginationEl.classList.add('is-hidden');

headerInput.addEventListener('submit', addInput);

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if (!scrollY == 0) {
    headerColor.classList.add('header-color');
  }
  else {headerColor.classList.remove('header-color');}
} )


function createGallery(data) {
  headerFindResult.insertAdjacentHTML('beforeend', createMarkup(data));
}

function createMarkup(array) {
  
  return array.map(el => { 
      return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${el.id}"
        src='${el.thumbnail.path}.${el.thumbnail.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${el.id}" class='header-find-text'>${el.name}</h3>
          
          </div>
        </div>
      </a>
    `;
  })
  .join('');
  }