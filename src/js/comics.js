import datepicker from 'js-datepicker';
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
};

const searchComicsEl = refs.comicsFormEl.elements.searchComics;
const selectFormatEl = refs.comicsFormEl.elements.selectFormat;
const selectOrderEl = refs.comicsFormEl.elements.selectFormat;
const searchDateEl = refs.comicsFormEl.elements.selectDate;

let nameVal = null;
let formatVal = null;
let orderVal = null;
let dateVal = null;
let final = null;
let comicsId = [];
let itemsPerPage = null;

let numberOfComicsReq = 1;
// ШУКАЮ ШИРИНУ КОНТЕЙНЕРА
let windowWidth = window.getComputedStyle(refs.mainContainer).width;
console.log(windowWidth);

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
  visiblePages: 5,
  page: 1,
};
const pagination = new Pagination(refs.paginationEl, paginationOptions);

// СТВОРЮЮ І НАЛАШТОВУЮ КАЛЕНДАР

const picker = datepicker(searchDateEl, {
  dateSelected: new Date(),
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
  onSelect: (instance, date) => {
    onDateSelect(instance, date);
    console.log(date);
  },
});
picker.calendarContainer.style.setProperty(
  'background-color',
  'var(--background)'
);
picker.calendarContainer.style.setProperty('color', 'var(--text)');
picker.calendarContainer.style.setProperty('font-family', 'Poppins');
picker.calendarContainer.style.setProperty('font-weight', '400');

// refs.comicsFormEl.addEventListener('submit', onComicsElSubmit);
searchComicsEl.addEventListener('input', debounce(onNameInput, 300));
selectFormatEl.addEventListener('change', onFormatChange);
selectOrderEl.addEventListener('change', onOrderChange);
searchDateEl.addEventListener('change', onDateSelect);

//ПЕРШЕ ПОТРАПЛЯННЯ НА СТОРІНКУ

onFirstLoad();
async function onFirstLoad() {
  console.log(itemsPerPage);

  try {
    const res = await api.getComics({
      limit: itemsPerPage,
      offset: 0,
    });
    console.log(res.results[0].creators.items[0].name);
    // Loading.remove();
    renderMarkup(res.results);
    refs.paginationEl.classList.remove('is-hidden');
    // console.log(res.total);

    // НАЛАШТОВУЮ ПАГІНАЦІЮ

    if (res.total <= itemsPerPage) {
      return;
    }

    pagination.reset(res.total);

    pagination.on('beforeMove', async evt => {
      const { page } = evt;
      console.log(page);
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
        // pagination.reset(res.total);
        refs.cardContainer.innerHTML = '';
        Loading.remove();
        renderMarkup(res.results);
        // console.log(res.total);
      } catch (error) {
        console.log('Error!!!!!!!!!!!');
      }
    });
  } catch (error) {
    console.log('Error!!!!!!!!!!!');
  }
}

//СУБМІТ НАЗВ КОМІКСІВ

async function onNameInput(e) {
  refs.paginationEl.classList.add('is-hidden');
  nameVal = e.target.value;
  // console.log(page);
  try {
    const res = await api.getAllCharacters({
      nameStartsWith: nameVal,
      orderBy: orderVal,
      comics: final,
      modifiedSince: dateVal,
      limit: itemsPerPage,
    });

    if (res.results.length === 0) {
      refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
      console.log('NOTHIG TO RENDER');
      return;
    }

    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';

    renderMarkup(res.results);
    refs.paginationEl.classList.remove('is-hidden');
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}

async function onSelectChange(e) {
  e.preventDefault;
  orderVal = e.target.value;
  try {
    const res = await api.getAllCharacters({
      orderBy: orderVal,
      // limit: 100,
      limit: itemsPerPage,
      nameStartsWith: nameVal,
      comics: final,
      modifiedSince: dateVal,
    });
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res.results);
    console.log(res.results);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}
function onFormatChange() {}
function onOrderChange() {}
async function onDateSelect(instance, date) {
  dateVal = date;
  try {
    const res = await api.getAllCharacters({
      orderBy: orderVal,

      nameStartsWith: nameVal,
      limit: itemsPerPage,
      comics: final,
      modifiedSince: dateVal,
    });
    if (res.results.length === 0) {
      // Loading.remove();
      refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
      console.log('NOTHIG TO RENDER');
      return;
    }
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res.results);
    console.log(res.results);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}
function renderMarkup(data) {
  refs.cardContainer.insertAdjacentHTML('beforeend', createMarkup(data));
}

function createMarkup(data) {
  console.log(data);
  return data
    .map(card => {
      console.log(card.id);
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
    })
    .join('');
}

// async function onComicsElSubmit(e) {
//   refs.paginationEl.classList.add('is-hidden');
//   Loading.standard('Loading...');
//   e.preventDefault();
//   searchNameEl.value = null;
//   nameVal = null;
//   orderVal = null;
//   dateVal = null;
//   comicsId = [];
//   // refs.cardContainer.innerHTML = '';
//   comicsVal = searchComicsEl.value;

//   try {
//     const res = await api.getComics({
//       title: comicsVal,
//       limit: 100,
//       offset: 0,
//     });

//     if (res.total === 0) {
//       Loading.remove();
//       refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
//       console.log('NOTHIG TO RENDER');
//       return;
//     }
//     numberOfComicsReq = Math.ceil(res.total / 100);

//     console.log(numberOfComicsReq);
//     for (let i = 1; i <= numberOfComicsReq; i++) {
//       const limit = 100;
//       const offset = limit * (i - 1);
//       try {
//         const res = await api.getComics({
//           title: comicsVal,
//           limit: limit,
//           offset: offset,
//         });

//         if (comicsId.length < 10) {
//           res.results.map(card => {
//             if (card.characters.available && comicsId.length < 10) {
//               comicsId.push(card.id);
//             } else {
//               return;
//             }
//           });
//         }
//       } catch (error) {
//         Loading.remove();
//         console.log('Error!!!!!!');
//       }
//     }

//     /////FIRST REQ=перевірка на пророжній вхідний масив
//     if (comicsId.length > 0) {
//       final = comicsId.join(', ');
//       try {
//         console.log(comicsId.length);
//         const res = await api.getAllCharacters({
//           nameStartsWith: nameVal,
//           orderBy: orderVal,
//           comics: final,
//           modifiedSince: dateVal,
//           limit: itemsPerPage,
//         });
//         console.log(res);
//         if (res.results.length === 0) {
//           // Loading.remove();
//           refs.cardContainer.innerHTML = '<span class="comics-error"></span>';
//           console.log('NOTHIG TO RENDER');
//         }
//         // if (res.results.length > itemsPerPage) {
//         //   pagination.reset(res.total);
//         // }
//         refs.cardContainer.innerHTML = '';
//         pagination.reset(res.total);
//         renderMarkup(res.results);
//         refs.paginationEl.classList.remove('is-hidden');
//         Loading.remove();
//       } catch (err) {
//         console.log('Error!!!!!!!!!!!');
//       }
//     }
//   } catch (err) {
//     Loading.remove();
//     console.log('Error!!!!!!!!!!!');
//   }
// }
