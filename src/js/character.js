// import datepicker from 'js-datepicker';

const refs = {
  charFormEl: document.querySelector('.char-search-form'),
};
console.dir(refs.charFormEl.elements.select);
const searchComicsEl = refs.charFormEl.elements.searchComics;
const searchNameEl = refs.charFormEl.elements.searchName;
const selectEl = refs.charFormEl.elements.select;
const searchDateEl = refs.charFormEl.elements.searchDate;

// const picker = datepicker(refs.searchDateEl, {
//   onSelect: (instance, date) => {

//   },
// });
selectEl.addEventListener('change', onSelectChange);
searchComicsEl.addEventListener('submit', onComicsEl);

function onSelectChange(e) {
  e.preventDefault;
  console.log(e.target.value);
}
function onComicsEl() {}

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
