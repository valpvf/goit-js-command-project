import datepicker from 'js-datepicker';
import debounce from 'lodash.debounce';
import 'js-datepicker/dist/datepicker.min.css';
import { api } from '../helpers/api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const refs = {
  charFormEl: document.querySelector('.char-search-form'),
  cardContainer: document.querySelector('.char-card-container'),
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
let dateVal = null;
let final = null;
let comicsId = [];
// let allComicsWithCharacters = [];

let numberOfComicsReq = 1;
let numberOfHeroReq = 1;

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
// searchNameEl.addEventListener('input', debounce(onNameInput, 300));
// selectEl.addEventListener('change', onSelectChange);

async function onComicsElSubmit(e) {
  Loading.standard('Loading...');
  e.preventDefault();
  refs.cardContainer.innerHTML = '';
  searchNameEl.removeEventListener('input', debounce(onNameInput, 300));
  selectEl.removeEventListener('change', onSelectChange);

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
    const allCharacters = [];

    console.log(numberOfComicsReq);
    for (let i = 1; i <= numberOfComicsReq; i++) {
      comicsId = [];
      const limit = 100;
      const offset = limit * (i - 1);
      try {
        const res = await api.getComics({
          title: comicsVal,
          limit: limit,
          offset: offset,
        });

        res.results.map(card => {
          if (card.characters.available) {
            comicsId.push(card.id);
          }
        });

        /////FIRST REQ=перевірка на пророжній вхідний масив
        if (comicsId.length > 0) {
          final = encodeURI(comicsId.join(', '));
          // const allComicsWithCharacters = [];
          try {
            const res = await api.getCharacters({
              comics: final,
              limit: 100,
              offset: 0,
            });
            allCharacters.push(...res);

            // allComicsWithCharacters = res.reduce(
            //   (res, card) => (
            //     res.find(({ id }) => card.id == id) || res.push(card), res
            //   ),
            //   []
            // );
            // res.map((card, i, arr) => {
            //   if ((card[i].id = card[i + 1].id)) {
            //     allComicsWithCharacters.push(card);
            //   }
            //   // allComicsWithCharacters.push(card.id)
            // });
            // console.log(allComicsWithCharacters);
          } catch (error) {
            console.log('Error!!!!!!!!!!!');
          }
        }
      } catch (error) {
        console.log('Error!!!!!!');
      }
    }
    console.log(allCharacters);
    const uniqCharacters = allCharacters.reduce(
      (allCharacters, card) => (
        allCharacters.find(({ id }) => card.id == id) ||
          allCharacters.push(card),
        allCharacters
      ),
      []
    );
    console.log(uniqCharacters);
    Loading.remove();
    renderMarkup(uniqCharacters);

    searchNameEl.addEventListener('input', debounce(onNameInput, 300));
    selectEl.addEventListener('change', onSelectChange);
  } catch (err) {
    console.log('Error!!!!!!!!!!!');
  }
}

async function onNameInput(e) {
  nameVal = e.target.value;
  try {
    const res = await api.getCharacters({
      nameStartsWith: nameVal,
      orderBy: orderVal,
      comics: final,
      modifiedSince: dateVal,
    });
    console.log(res);
    if (res.length === 0) {
      // Loading.remove();
      refs.cardContainer.innerHTML = '<span class="char-error"></span>';
      console.log('NOTHIG TO RENDER');
    }
    refs.cardContainer.innerHTML = '';
    renderMarkup(res);
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
      nameStartsWith: nameVal,
      comics: final,
      modifiedSince: dateVal,
    });
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
      comics: final,
      modifiedSince: dateVal,
    });
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
      <a class="char-image-wrap" dataset="${card.id}" href="#">
        <img
          class="char-card-image"
          src= "${card.thumbnail.path}.${card.thumbnail.extension}"
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
