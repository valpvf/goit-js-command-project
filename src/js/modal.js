import { api } from '../helpers/api';

const closeBtnEl = document.querySelector('.modal-close-icon-modal');
const modalOneClose = document.querySelector('.backdrop-one');
const rmContainer = document.querySelectorAll('.rm-container');
// const modalHeroEl = document.querySelector('.images');
const modalContainerEl = document.querySelector('.modal-comic-container');

// const comicsEl = document.querySelector('.description');
const modalTwo = document.querySelector(
  '.modal-two.modal-box-two.rc-container'
);

const skeletonModal = document.querySelector('.skeleton-one');

function onCloseBtnElClick() {
  modalOneClose.classList.add('display-none');
}
closeBtnEl.addEventListener('click', onCloseBtnElClick);
rmContainer.forEach(el => el.addEventListener('click', onContainerClick));
modalTwo.addEventListener('click', onContainerClick);

async function onContainerClick(event) {
 
  modalTwo.classList.add('display-none');

  // modalTwoClose.classList.remove('is-concealed');
  // skeletonModal.classList.remove('display-none');

  modalOneClose.classList.remove('display-none');

  const id = event.target.dataset.id;
  const comicObject = await api.getComicById({ comicId: id });

  const creatorsIds = comicObject[0].creators.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);
  const characterIds = comicObject[0].characters.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);

  comicObject[0].authors = comicObject[0].creators.items.map(
    ({ name, role }) => {
      return { name, role };
    }
  );

  for (let i = 0; i < creatorsIds.length; i += 1) {
    const id = creatorsIds[i];
    const creator = await api.getCreatorById({ creatorId: id });
    comicObject[0].authors[
      i
    ].pic = `${creator[0].thumbnail.path}.${creator[0].thumbnail.extension}`;
  }

  for (let i = 0; i < characterIds.length; i += 1) {
    const id = characterIds[i];
    const character = await api.getCharactersById({ characterId: id });
    comicObject[0].characters.items[
      i
    ].pic = `${character[0].thumbnail.path}.${character[0].thumbnail.extension}`;
    comicObject[0].characters.items[i].id = id;
  }
  skeletonModal.classList.add('display-none');
  const markup = createMarkup(comicObject[0]);
  modalContainerEl.innerHTML = markup;
}

function authorsMarkup(authors) {
  return authors
    .map(el => {
      return `<div class="aut-container">
      <img class="author-img" src="${el.pic}" alt="${el.name}">
          <div class="aut-desc">
            <p class="author-prof">${el.role}</p>
            <h3 class="author-name">${el.name}</h3>
             </div>
          </div>`;
    })
    .join('');
}

function charactersMarkup(characters) {
  return characters
    .map(el => {
      return `<li class="char-item" data-id="${el.id}">
            <img class="character-img" src="${el.pic}" alt="one" data-id="${el.id}"/>
            <h3 class="character-name" data-id="${el.id}">${el.name}</h3>
          </li>`;
    })
    .join('.');
}

function seriesMarkup(images) {
  return images
    .map(el => {
      return `<li>
            <img class="photo-slide-image" src="${el.path}.${el.extension}" alt="crawl" />
          </li>`;
    })
    .join('.');
}

function createMarkup({
  description,
  thumbnail,
  prices,
  title,
  format,
  modified,
  authors,
  characters,
  images,
  dates,
  pageCount,
}) {
  // Get author name
  const writerObj = authors.filter(el => el.role === 'writer');
  const writer = writerObj.length !== 0 ? writerObj[0].name : '';

  // Get parsed date
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date = !'Invalid Date'
    ? dateString.toLocaleDateString('en-US', options)
    : '';
  const year = new Date(dates[0].date).getFullYear();
  return `
  
  <section class="images">

        <img src="${thumbnail.path}.${
    thumbnail.extension
  }" alt="star" class="star-photo" />

        <ul class="photo-slide">
          ${seriesMarkup(images)}
        </ul>
      </section>

      <section class="description">
        <div class="desc-head">
          <h1 class="title">${title}</h1>
          <div class="head-inf">
            <p class="riska"> <span class="c-author">${writer}</span>|<span class="c-date">${date}</span>
            </p>

          </div>
        </div>
        <p class="text-discription">${description}</p>
        <ul class="desc-list">
          <li class="list-item">
            <P class="list-punkt">FORMAT</P>
            <P class="list-inf">${format}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">YEAR RELEASED</P>
            <P class="list-inf">${year}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">PAGES</P>
            <P class="list-inf">${pageCount}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">PRICE</P>
            <P class="list-inf">$${prices[0].price}</P>
          </li>
        </ul>
        <h2 class="title author">Creators</h2>
        <div class="author-inf">
          ${authorsMarkup(authors)}
        </div>
        <h2 class="title characters">Characters</h2>
        <ul class="characters-list">
          ${charactersMarkup(characters.items)}
        </ul>
      </section>
  `;
}
