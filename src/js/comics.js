import debounce from 'lodash.debounce';
import 'js-datepicker/dist/datepicker.min.css';
import { api } from '../helpers/api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

Loading.init({
  backgroundColor: 'rgba(0,0,0,0.95)',
  svgColor: '#34387F',
  clickToClose: false,
});

const refs = {
  comicsFormEl: document.querySelector('.comics-search-form'),
  cardContainer: document.querySelector('.comics-card-container'),
  paginationEl: document.querySelector('.tui-pagination'),
  mainContainer: document.querySelector('.container'),
  headerInput: document.querySelector('.header-input'),
  headerForm: document.querySelector('.header-form'),
  heroEl: document.querySelector('.comics-hero'),
};

const searchComicsEl = refs.comicsFormEl.elements.searchComics;
const selectFormatEl = refs.comicsFormEl.elements.selectFormat;
const selectOrderEl = refs.comicsFormEl.elements.selectOrder;
const searchDateEl = refs.comicsFormEl.elements.selectDate;

let nameVal = null;
let formatVal = null;
let orderVal = null;
let dateVal = null;
let itemsPerPage = null;

// ШУКАЮ ШИРИНУ КОНТЕЙНЕРА
let windowWidth = window.getComputedStyle(refs.mainContainer).width;

// ВИЗНАЧАЄМО ШИРИНУ ВЬЮПОРТУ
switch (windowWidth) {
  case '365px':
    itemsPerPage = 5;
    break;
  case '100%':
    itemsPerPage = 5;
    break;
  case '1440px':
    itemsPerPage = 16;
    break;

  default:
    itemsPerPage = 8;
    break;
}

console.log(itemsPerPage);
// НАЛАШТОВУЮ ПАГІНАЦІЮ

const paginationOptions = {
  totalItems: 0,
  itemsPerPage: itemsPerPage,
  visiblePages: 2,
  page: 1,
};
const pagination = new Pagination(refs.paginationEl, paginationOptions);

// СТВОРЮЮ І НАЛАШТОВУЮ КАЛЕНДАР

let yearsToSelect = '';
for (let i = 1939; i <= 2023; i++) {
  yearsToSelect += `<option>${i}</option>`;
}
searchDateEl.insertAdjacentHTML('beforeend', yearsToSelect);

// refs.comicsFormEl.addEventListener('submit', onComicsElSubmit);
refs.headerForm.addEventListener('submit', onHeaderNameInput);
refs.headerInput.addEventListener('input', debounce(onHeaderNameInput, 300));
searchComicsEl.addEventListener('input', debounce(onNameInput, 300));
selectFormatEl.addEventListener('change', onFormatChange);
selectOrderEl.addEventListener('change', onOrderChange);
searchDateEl.addEventListener('change', onDateSelect);

//ПЕРШЕ ПОТРАПЛЯННЯ НА СТОРІНКУ

onFirstLoad();
async function onFirstLoad() {
  Loading.standard('Loading...');
  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      offset: 0,
    });
    console.log(res.results[0].creators.items[0].name);
    Loading.remove();
    renderMarkup(res.results);
    refs.paginationEl.classList.remove('is-hidden');

    // НАЛАШТОВУЮ ПАГІНАЦІЮ

    pagination.reset(res.total);

    pagination.on('beforeMove', async evt => {
      const { page } = evt;
      let offset = itemsPerPage * (page - 1);

      try {
        const res = await api.getComics({
          // comics: final,
          limit: itemsPerPage,
          offset: offset,
          titleStartsWith: nameVal,
          format: formatVal,
          orderBy: orderVal,
          startYear: dateVal,
        });
        refs.cardContainer.innerHTML = '';
        Loading.remove();
        renderMarkup(res.results);
      } catch (error) {
        location.replace('../404.html');
      }
    });
  } catch (error) {
    location.replace('../404.html');
  }
}

//СУБМІТ НАЗВ КОМІКСІВ
function onHeaderNameInput(e) {
  e.preventDefault;
  searchComicsEl.value = e.target.value;
  onNameInput(e);
  addSmoothScroll();
}

async function onNameInput(e) {
  e.preventDefault;
  refs.headerInput.value = e.target.value;
  refs.paginationEl.classList.add('is-hidden');

  formatVal = null;
  orderVal = null;
  dateVal = null;
  nameVal = e.target.value;

  // console.log(page);
  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: nameVal,
      format: formatVal,
      orderBy: orderVal,
      startYear: dateVal,
    });

    if (res.results.length === 0) {
      refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
      return;
    }

    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';

    renderMarkup(res.results);
    selectFormatEl.value = 'All';
    selectOrderEl.value = 'Title';
    searchDateEl.value = 'All Years';
    refs.paginationEl.classList.remove('is-hidden');
  } catch (err) {
    location.replace('../404.html');
  }
}

async function onFormatChange(e) {
  e.preventDefault;

  if (e.target.value === 'All') {
    formatVal = null;
  } else {
    formatVal = e.target.value;
  }

  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: nameVal,
      format: formatVal,
      orderBy: orderVal,
      startYear: dateVal,
    });
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res.results);
  } catch (err) {
    location.replace('../404.html');
  }
}

async function onOrderChange(e) {
  e.preventDefault;
  orderVal = e.target.value;

  if (e.target.value === 'Title') {
    orderVal = 'title';
  } else {
    orderVal = 'onsaleDate';
  }

  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: nameVal,
      format: formatVal,
      orderBy: orderVal,
      startYear: dateVal,
    });
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res.results);
  } catch (err) {
    location.replace('../404.html');
  }
}

async function onDateSelect(e) {
  e.preventDefault;

  if (e.target.value === 'All Years') {
    dateVal = null;
  } else {
    dateVal = e.target.value;
  }

  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: nameVal,
      format: formatVal,
      orderBy: orderVal,
      startYear: dateVal,
    });
    if (res.results.length === 0) {
      refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
      return;
    }
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res.results);
  } catch (err) {
    location.replace('../404.html');
  }
}

function renderMarkup(data) {
  refs.cardContainer.insertAdjacentHTML('beforeend', createMarkup(data));
}

function createMarkup(data) {
  console.log(data);
  return data
    .map(card => {
      if (card.creators.available === 0) {
        return `
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${card.id}" href="#">
        <img
          class="comics-card-image"
          src= "${card.thumbnail.path}/portrait_uncanny.${card.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${card.title}</p>
          <p class="comics-card-descr-author">-</p>
        </div>
      </a>
    </div>`;
      } else {
        return `
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${card.id}" href="#">
        <img
          class="comics-card-image"
          src= "${card.thumbnail.path}/portrait_uncanny.${card.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${card.title}</p>
          <p class="comics-card-descr-author">${card.creators.items[0].name}</p>
        </div>
      </a>
    </div>`;
      }
    })
    .join('');
}
function addSmoothScroll() {
  const scrollHeigth = refs.heroEl.getBoundingClientRect().height;
  window.scrollBy({
    top: scrollHeigth,
    behavior: 'smooth',
  });
}
