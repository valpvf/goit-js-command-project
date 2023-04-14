import datepicker from 'js-datepicker';

const refs = {
  charFormEl: document.querySelector('.char-search-form'),
  searchComicsEl: charFormEl.elements.searchComics,
  searchNameEl: charFormEl.elements.searchName,
  selectEl: charFormEl.elements.select,
  searchDateEl: charFormEl.elements.searchDate,
};
console.log(refs.selectEl);
const picker = datepicker(refs.searchDateEl, {
  onSelect: (instance, date) => {
    // Do stuff when a date is selected (or unselected) on the calendar.
    // You have access to the datepicker instance for convenience.
  },
});

refs.searchComicsEl.addEventListener('submit', onComicsEl);

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
