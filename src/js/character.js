import datepicker from 'js-datepicker';
import debounce from 'lodash.debounce';
import 'js-datepicker/dist/datepicker.min.css';
import { api } from '../helpers/api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// console.log(
//   api.getCharacters({
//     comics:
//       '101528, 101527, 101525, 95764, 95763, 92201, 92200, 92199, 92198, 92197',
//   })
// );
Loading.init({
  backgroundColor: 'rgba(0,0,0,0.9)',
  svgColor: '#34387F',
  clickToClose: false,
});

const refs = {
  charFormEl: document.querySelector('.char-search-form'),
  cardContainer: document.querySelector('.char-card-container'),
  paginationEl: document.querySelector('.tui-pagination'),
  mainContainer: document.querySelector('.container'),
};

const searchComicsEl = refs.charFormEl.elements.searchComics;
console.log(searchComicsEl);
const searchNameEl = refs.charFormEl.elements.searchName;
const selectEl = refs.charFormEl.elements.select;
const searchDateEl = refs.charFormEl.elements.searchDate;

let comicsVal = null;
let nameVal = null;
let orderVal = null;
let dateVal = null;
let final = null;
let comicsId = [];
let itemsPerPage = null;
// let page = 1;

let numberOfComicsReq = 1;
let numberOfHeroReq = 1;
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
refs.charFormEl.addEventListener('submit', onComicsElSubmit);
searchNameEl.addEventListener('input', debounce(onNameInput, 300));
selectEl.addEventListener('change', onSelectChange);

//ПЕРШЕ ПОТРАПЛЯННЯ НА СТОРІНКУ

onFirstLoad();
async function onFirstLoad() {
  console.log(itemsPerPage);

  try {
    const res = await api.getAllCharacters({
      // comics: final,
      limit: itemsPerPage,
      offset: 0,
    });

    Loading.remove();
    renderMarkup(res.results);
    console.log(res.total);

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
        const res = await api.getAllCharacters({
          // comics: final,
          limit: itemsPerPage,
          offset: offset,
          nameStartsWith: nameVal,
          orderBy: orderVal,
          comics: final,
          modifiedSince: dateVal,
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

async function onComicsElSubmit(e) {
  Loading.standard('Loading...');
  e.preventDefault();
  searchNameEl.value = null;
  nameVal = null;
  orderVal = null;
  dateVal = null;
  comicsId = [];
  refs.cardContainer.innerHTML = '';
  comicsVal = searchComicsEl.value;

  try {
    const res = await api.getComics({
      title: comicsVal,
      limit: 100,
      offset: 0,
    });

    if (res.total === 0) {
      Loading.remove();
      refs.cardContainer.innerHTML = '<span class="char-error"></span>';
      console.log('NOTHIG TO RENDER');
    }
    numberOfComicsReq = Math.ceil(res.total / 100);
    // const allCharacters = [];

    console.log(numberOfComicsReq);
    for (let i = 1; i <= numberOfComicsReq; i++) {
      // comicsId = [];
      const limit = 100;
      const offset = limit * (i - 1);
      try {
        const res = await api.getComics({
          title: comicsVal,
          limit: limit,
          offset: offset,
        });

        if (comicsId.length < 10) {
          res.results.map(card => {
            if (card.characters.available && comicsId.length < 10) {
              comicsId.push(card.id);

              console.log('1: ', card.id, '2: ', comicsId);
            } else {
              return;
            }
          });
        }
      } catch (error) {
        Loading.remove();
        console.log('Error!!!!!!');
      }
    }

    /////FIRST REQ=перевірка на пророжній вхідний масив
    if (comicsId.length > 0) {
      final = comicsId.join(', ');
      try {
        console.log(comicsId.length);
        const res = await api.getAllCharacters({
          nameStartsWith: nameVal,
          orderBy: orderVal,
          comics: final,
          modifiedSince: dateVal,
          limit: itemsPerPage,
        });
        console.log(res);
        if (res.results.length === 0) {
          // Loading.remove();
          refs.cardContainer.innerHTML = '<span class="char-error"></span>';
          console.log('NOTHIG TO RENDER');
        }
        if (res.results.length > itemsPerPage) {
          pagination.reset(res.total);
        }
        // refs.cardContainer.innerHTML = '';
        renderMarkup(res.results);
        Loading.remove();

        // pagination.on('beforeMove', async evt => {
        //   const { page } = evt;
        //   console.log(page);
        //   let offset = itemsPerPage * (page - 1);
        //   try {
        //     const res = await api.getAllCharacters({
        //       // comics: final,
        //       limit: itemsPerPage,
        //       offset: offset,
        //     });
        //     pagination.reset(res.total);
        //     refs.cardContainer.innerHTML = '';
        //     Loading.remove();
        //     renderMarkup(res.results);
        //     // console.log(res.total);
        //   } catch (error) {
        //     console.log('Error!!!!!!!!!!!');
        //   }
        // });
      } catch (err) {
        console.log('Error!!!!!!!!!!!');
      }
    }
  } catch (err) {
    Loading.remove();
    console.log('Error!!!!!!!!!!!');
  }
}

// //СУБМІТ НАЗВ КОМІКСІВ

// async function onComicsElSubmit(e) {
//   Loading.standard('Loading...');
//   // Loading.custom('Loading...');
//   e.preventDefault();
//   refs.cardContainer.innerHTML = '';
//   // searchNameEl.removeEventListener('input', debounce(onNameInput, 300));
//   // selectEl.removeEventListener('change', onSelectChange);

//   comicsVal = searchComicsEl.value;

//   try {
//     const res = await api.getComics({
//       title: comicsVal,
//       limit: 100,
//       offset: 0,
//     });

//     if (res.total === 0) {
//       Loading.remove();
//       refs.cardContainer.innerHTML = '<span class="char-error"></span>';
//       console.log('NOTHIG TO RENDER');
//     }
//     numberOfComicsReq = Math.ceil(res.total / 100);
//     const allCharacters = [];

//     console.log(numberOfComicsReq);
//     for (let i = 1; i <= numberOfComicsReq; i++) {
//       comicsId = [];
//       const limit = 100;
//       const offset = limit * (i - 1);
//       try {
//         const res = await api.getComics({
//           title: comicsVal,
//           limit: limit,
//           offset: offset,
//         });

//         res.results.map(card => {
//           if (card.characters.available) {
//             comicsId.push(card.id);
//           }
//         });

//         /////FIRST REQ=перевірка на пророжній вхідний масив
//         if (comicsId.length > 0) {
//           final = encodeURI(comicsId.join(', '));

//           try {
//             const res = await api.getCharacters({
//               comics: final,
//               limit: 100,
//               offset: 0,
//             });
//             allCharacters.push(...res);
//           } catch (error) {
//             console.log('Error!!!!!!!!!!!');
//           }
//         }
//       } catch (error) {
//         Loading.remove();
//         console.log('Error!!!!!!');
//       }
//     }
//     console.log(allCharacters);
//     const uniqCharacters = allCharacters.reduce(
//       (allCharacters, card) => (
//         allCharacters.find(({ id }) => card.id == id) ||
//           allCharacters.push(card),
//         allCharacters
//       ),
//       []
//     );
//     console.log(uniqCharacters);
//     Loading.remove();
//     renderMarkup(uniqCharacters);

//     searchNameEl.addEventListener('input', debounce(onNameInput, 300));
//     selectEl.addEventListener('change', onSelectChange);
//   } catch (err) {
//     Loading.remove();
//     console.log('Error!!!!!!!!!!!');
//   }
// }

async function onNameInput(e) {
  nameVal = e.target.value;
  // console.log(page);
  try {
    const res = await api.getCharacters({
      nameStartsWith: nameVal,
      orderBy: orderVal,
      comics: final,
      modifiedSince: dateVal,
      limit: itemsPerPage,
    });

    if (res.length === 0) {
      // Loading.remove();
      refs.cardContainer.innerHTML = '<span class="char-error"></span>';
      console.log('NOTHIG TO RENDER');
    }
    // page = 1;
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';

    renderMarkup(res);
    // pagination.reset(res.total);
    // refs.cardContainer.innerHTML = '';
    // renderMarkup(res);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}

async function onSelectChange(e) {
  e.preventDefault;
  orderVal = e.target.value;
  try {
    const res = await api.getCharacters({
      orderBy: orderVal,
      // limit: 100,
      limit: itemsPerPage,
      nameStartsWith: nameVal,
      comics: final,
      modifiedSince: dateVal,
    });
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res);
    console.log(res);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
  // console.log(orderVal);
  // console.log(e.target.value);
}

async function onDateSelect(instance, date) {
  // e.preventDefault;
  // orderVal = e.target.value;
  dateVal = date;
  try {
    const res = await api.getCharacters({
      orderBy: orderVal,
      // limit: 100,
      nameStartsWith: nameVal,
      limit: itemsPerPage,
      comics: final,
      modifiedSince: dateVal,
    });
    pagination.reset(res.total);
    refs.cardContainer.innerHTML = '';
    renderMarkup(res);
    console.log(res);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
  // console.log(orderVal);
  // console.log(e.target.value);
}
function renderMarkup(data) {
  refs.cardContainer.insertAdjacentHTML('beforeend', createMarkup(data));
}

function createMarkup(data) {
  return data
    .map(card => {
      return `
    <div class="char-card">
      <a class="char-image-wrap" data-id="${card.id}" href="#">
        <img
          class="char-card-image"
          src= "${card.thumbnail.path}/portrait_uncanny.${card.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="char-card-descr">
          <p class="char-card-descr-name">${card.name}</p>
        </div>
      </a>
    </div>`;
    })
    .join('');
}

// final = encodeURI(comicsId.join(', '));

// for (let i = 0; i < comicsId.length; i += 100) {
//   // console.log(i);
//   let heroReqArr = [];
//   let j = i + 100;

//   heroReqArr = comicsId.slice(i, j);
//   final = encodeURI(heroReqArr.join(', '));
//   console.log(final);
//   const limit = 100;
//   let offset = 0;
//   try {
//     const res = await api.getCharacters({
//       comics: final,
//       limit: limit,
//       offset: offset,
//     });
//     offset += i;
//     console.log(res);
//   } catch (error) {
//     console.log('Error!!!!!!!!!!!');
//   }
// }
//  ЗАПИТ ЗА ГЕРОЯМИ==============
// const characters = await api.getCharacters({
//   comics: final,
//   limit: 100,
// });

// RENDER=========================

// console.log(encodeURIComponent('hjgfdhg/721613'));

// addEventListener(`change`, e => {
//   const $select = e.target;

//   if (!$select.classList.contains(`auto-send-select`)) return;

//   const body = new FormData();
//   body.set($select.name, $select.value);
//   e.target.disabled = true;

//   fetch($select.dataset.action, {
//     method: `post`,
//     body: body,
//   })
//     .catch(err => {
//       console.error(err);
//     })
//     .finally(() => {
//       $select.disabled = false;
//     });
// });
