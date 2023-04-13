import '../css/character.css';

const charFormEl = document.querySelector('.char-search-form');

log(charFormEl.elements.searchComics);
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
