import { api } from '../helpers/api';

const characterCardEl = document.querySelector('.backdrop-two');
const closeBtnEl = document.querySelector('.modal-close-btn');
const modalTwoClose = document.querySelector('.backdrop-two');
const rcContainer = document.querySelector('.rc-container');
const modalHeroEl = document.querySelector('.spray');
const comicsEl = document.querySelector('.comics');


function onCloseBtnElClick() {
  modalTwoClose.classList.add('is-concealed');
}

closeBtnEl.addEventListener('click', onCloseBtnElClick);
rcContainer.addEventListener('click', onContainerClick);

async function getCharacter(id) {
  const character = await api.getCharactersById({ characterId: id });
  return character;

// async function getCharacter(id) {
//  const character = await api.getCharactersById({ characterId: id });
//  console.log(character);

//  const markup = createMarkup(character);
//  modalTwoClose.innerHTML = markup;

}

function onContainerClick(event) {
  modalTwoClose.classList.remove('is-concealed');
  const id = event.target.dataset.id;
  const characterObject = getCharacter(id)
    .then(res => {
      const comicsIds = res[0].comics.items
        .map(el => el.resourceURI)
        .map(el => el.split('/'))
        .map(el => el[el.length - 1]);
      console.log(comicsIds);

      const seriesIds = res[0].series.items
        .map(el => el.resourceURI)
        .map(el => el.split('/'))
        .map(el => el[el.length - 1]);


      const markups = [createMarkupImages(res[0]), createMarkupText(res[0])];
      return markups;
    })
    .then(markup => {
      modalHeroEl.innerHTML = markup[0];
      comicsEl.innerHTML = markup[1];
    });
}

function createMarkupImages(character) {
  const { id, thumbnail, name, description, modified, comics } = character;
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
              src="./img/modal/crawl.jpg"
              alt="crawl"
              width="80"
              hieght="80"
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="./img/modal/talk.jpg"
              alt="talk"
              width="80"
              hieght="80"
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="./img/modal/on-knee.jpg"
              alt="on-knee"
              width="80"
              hieght="80"
            />
          </li>
        </ul>`;
  return markup;

}

function createMarkupText(character) {
  const { id, thumbnail, name, description, modified, comics } = character;
  const options = { month: 'long', day: 'numeric', year: 'numeric', };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date = dateString.toLocaleDateString("en-US", options);
  
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
            src="./img/modal/item-one.jpg"
            alt="one"
          />
          <h3 class="comics-list-movie">Black Widow (2020)</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="./img/modal/item-two.jpg"
            alt="two"
          />
          <h3 class="comics-list-movie">Black Widow (2020)</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="./img/modal/item-three.jpg"
            alt="three"
          />
          <h3 class="comics-list-movie">Black Widow (2020)</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
      </ul>`;
  return markup
}