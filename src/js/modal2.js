import { api } from '../helpers/api';
// import iconsSprite from '../img/icons.svg';

// const characterCardEl = document.querySelector('.backdrop-two');
const closeBtnEl = document.querySelector('.modal-two-close-btn');
const modalTwoClose = document.querySelector('.backdrop-two');
const rcContainer = document.querySelectorAll('.rc-container');
const modalHeroEl = document.querySelector('.spray');
const comicsEl = document.querySelector('.comics');
const skeletonModal = document.querySelector('.skeleton-modal');
const modalOneClose = document.querySelector('.backdrop-one');
const modalOne = document.querySelector(
  '.modal-box.modal-comic-container.rc-container'
);
console.log(modalOneClose);

// const skeletonModal = document.querySelector('.skeleton-two');

function onCloseBtnElClick() {
  modalHeroEl.innerHTML = '';
  comicsEl.innerHTML = '';
  modalTwoClose.classList.add('display-none');
  // modalOneClose.classList.add('display-none');

  modalHeroEl.innerHTML = '';
  comicsEl.innerHTML = '';
}

closeBtnEl.addEventListener('click', onCloseBtnElClick);
rcContainer.forEach(el => el.addEventListener('click', onContainerClick));
modalOne.addEventListener('click', onContainerClick);

async function getCharacter(id) {
  const character = await api.getCharactersById({ characterId: id });
  return character;
}

async function onContainerClick(event) {
  console.log(2, event.target);
  modalTwoClose.classList.remove('display-none');
  modalOneClose.classList.add('display-none');
  skeletonModal.classList.remove('display-none');
  modalHeroEl.classList.add('display-none');
  comicsEl.classList.add('display-none');
  const id = event.target.dataset.id;
  const characterObject = await getCharacter(id);
  const comicsIds = characterObject[0].comics.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);

  const seriesIds = characterObject[0].series.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);

  for (let i = 0; i < 3; i += 1) {
    const comicId = comicsIds[i];
    const seriesId = seriesIds[i];
    characterObject[0][`comic${i}`] = await api.getComicById({ comicId });
    characterObject[0][`series${i}`] = await api.getSeriesById({ seriesId });
  }
  const markups = [
    createMarkupImages(characterObject[0]),
    createMarkupText(characterObject[0]),
  ];
  skeletonModal.classList.add('display-none');
  modalHeroEl.classList.remove('display-none');
  comicsEl.classList.remove('display-none');
  modalHeroEl.innerHTML = markups[0];
  comicsEl.innerHTML = markups[1];
}

function createMarkupImages(character) {
  const {
    id,
    thumbnail,
    name,
    description,
    modified,
    comics,
    series0,
    series1,
    series2,
  } = character;
  const markup = `
      <img
        class="modal-main-img"
        src="${thumbnail.path}.${thumbnail.extension}"
        alt="star"
        class="star-photo"
      />
      <div class="modal-slide">
        <ul class="modal-slide-list">
          <li>
            <img
              class="modal-slide-img"
              src="${series0[0].thumbnail.path}.${series0[0].thumbnail.extension}"
              alt="crawl"
              width="80"
              hieght="80"
              
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="${series1[0].thumbnail.path}.${series1[0].thumbnail.extension}"
              alt="talk"
              width="80"
              hieght="80"
              
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="${series2[0].thumbnail.path}.${series2[0].thumbnail.extension}"
              alt="on-knee"
              width="80"
              hieght="80"
              
            />
          </li>
        </ul>`;
  return markup;
}

// data-id="${series0[0].id}"
// data-id="${series1[0].id}"
// data-id="${series2[0].id}"

function createMarkupText(character) {
  const {
    id,
    thumbnail,
    name,
    description,
    modified,
    comics,
    comic0,
    comic1,
    comic2,
  } = character;

  if (comic0[0].creators.available === 0) {
    comic0[0].creators.items.push({ name: '' });
  }
  if (comic1[0].creators.available === 0) {
    comic1[0].creators.items.push({ name: '' });
  }
  if (comic2[0].creators.available === 0) {
    comic2[0].creators.items.push({ name: '' });
  }

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date = dateString.toLocaleDateString('en-US', options);

  const markup = `
      <div class="comics-title-date">
        <h1 class="comics-movie-title">${name}</h1>
        <p class="comics-date">${date}</p>
      </div>
      <p class="comics-description">${description}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list">
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${comic0[0].thumbnail.path}.${comic0[0].thumbnail.extension}"
            alt="one"
            data-id="${comic0[0].id}"
          />
          <h3 class="comics-list-movie">${comic0[0].title}</h3>
          <p class="comics-movie-hero">${comic0[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${comic1[0].thumbnail.path}.${comic1[0].thumbnail.extension}"
            alt="two"
            data-id="${comic1[0].id}"
          />
          <h3 class="comics-list-movie">${comic1[0].title}</h3>
          <p class="comics-movie-hero">${comic1[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${comic2[0].thumbnail.path}.${comic2[0].thumbnail.extension}"
            alt="three"
            data-id="${comic2[0].id}"
          />
          <h3 class="comics-list-movie">${comic2[0].title}</h3>
          <p class="comics-movie-hero">${comic2[0].creators.items[0].name}</p>
        </li>
      </ul>`;
  return markup;
}
