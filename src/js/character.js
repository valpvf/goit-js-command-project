import datepicker from 'js-datepicker';
import debounce from 'lodash.debounce';
import 'js-datepicker/dist/datepicker.min.css';
import { api } from '../helpers/api';

const refs = {
  charFormEl: document.querySelector('.char-search-form'),
  cardContainer: document.querySelector('.card-container'),
};
// console.dir(refs.charFormEl.elements.select);
const searchComicsEl = refs.charFormEl.elements.searchComics;
console.log(searchComicsEl);
const searchNameEl = refs.charFormEl.elements.searchName;
const selectEl = refs.charFormEl.elements.select;
const searchDateEl = refs.charFormEl.elements.searchDate;

let comicsVal = null;
let nameVal = null;
let orderVal = null;
let final = null;
let comicsId = [];

let numberOfReq = 1;

const picker = datepicker(searchDateEl, {
  onSelect: (instance, date) => {
    console.log(date);
  },
});

refs.charFormEl.addEventListener('submit', onComicsElSubmit);
searchNameEl.addEventListener('input', debounce(onNameInput, 300));
selectEl.addEventListener('change', onSelectChange);

async function onComicsElSubmit(e) {
  e.preventDefault();
  console.log(searchComicsEl.value);
  comicsVal = searchComicsEl.value;

  try {
    const res = await api.getComics({
      title: comicsVal,
      limit: 100,
      offset: 0,
    });

    numberOfReq = Math.ceil(res.total / 100);
    res.results.map(card => {
      comicsId.push(card.id);
      // console.log(comicsId);
    });
    final = encodeURI(comicsId.join(', '));
    // console.log(final);
    /////FIRST REQ=====================перевірка на пророжній вхідний масив
    const characters = await api.getCharacters({
      comics: final,
      limit: 100,
    });
    console.log(characters);

    // for (let i = 2; i <= numberOfReq; i++) {
    //   const limit = 100;
    //   const offset = limit * i;
    //    comicsId = [];
    //   try {
    //     const res = await api.getComics({
    //       title: comicsVal,
    //       limit: limit,
    //       offset: offset,
    //     });

    //     res.results.map(card => {
    //                 comicsId.push(card.id);

    //     });
    //     // console.log(comicsId);
    //     final = encodeURI(comicsId.join(', '));
    //     console.log(comicsId);
    //     /////SECOND REQ
    //     const characters = await api.getCharacters({
    //       comics: final,
    //       limit: 100,
    //     });
    //     console.log(characters);
    //   } catch (error) {
    //     console.log('Error!!!!!!!!!!!');
    //   }
    // }
    //  ЗАПИТ ЗА ГЕРОЯМИ==============

    // RENDER=========================
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}

async function onNameInput(e) {
  nameVal = e.target.value;
  try {
    const res = await api.getCharacters({
      nameStartsWith: nameVal,
      comics: final,
    });
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
      nameStartsWith: nameVal,
      comics: comicsId,
    });
    console.log(res);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
  // console.log(orderVal);
  // console.log(e.target.value);
}
// function renderMarkup(data) {
//   refs.cardContainer.insertAdjacentHTML('beforeend', createMarkup(data));
// }

// function createMarkup(data) {
//   return data.map(card => galleryCardTmplt(card)).join('');
// }

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
