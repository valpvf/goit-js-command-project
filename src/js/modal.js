import { api } from '../helpers/api';

const closeBtnEl = document.querySelector('.modal-close-btn');
const modalOneClose = document.querySelector('.backdrop-one');
const modalHeroEl = document.querySelector('.images');
const comicsEl = document.querySelector('.description');
const lastcomicssection = document.querySelector('.swiper-wrapper');
function onCloseBtnElClick() {
  modalOneClose.classList.add('is-conceale');
}
closeBtnEl.addEventListener('click', onCloseBtnElClick);
lastcomicssection.addEventListener('click', onContainerClick);

async function getComics(id) {
    const comics1 = await api.getComicById({ comicsId: id });
    return comics1;
}
async function onContainerClick(event) {
  modalOneClose.classList.remove('is-conceale');
  const id = event.target.dataset.id;
  const comicsObject = await getComics(id);
  const charIds = comicsObject[0].characters.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);

  const seriesIds = comicsObject[0].series.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);
        const authorIds = comicsObject[0].creators.items
    .map(el => el.resourceURI)
    .map(el => el.split('/'))
    .map(el => el[el.length - 1]);
  for (let i = 0; i < 3; i += 1) {
    const charId = charIds[i];
    const seriesId = seriesIds[i];
      const authorId = authorIds[i];
    comicsObject[0][`charac${i}`] = await api.getComicById({ charId });
    comicsObject[0][`series${i}`] = await api.getSeriesById({ seriesId });
    comicsObject[0][`authors${i}`] = await api.getSeriesById({ authorId });
  }
  const markups = [createMarkupImages(comicsObject[0]), createMarkupText(comicsObject[0])];

  modalHeroEl.innerHTML = markups[0];
  comicsEl.innerHTML = markups[1];
}

  
  

function createMarkupImages(comics) {
  const { id, thumbnail, name, description, modified, comics, creators, series0, series1, series2  } = comics;
  const markup = `
      <img
        class="modal-main-img"
        src="${thumbnail.path}.${thumbnail.extension}"
        alt="star"
        class="star-photo"
      />
      <ul class="photo-slide">
        <li>
            <img class="photo-slide-image" src="${series0[0].thumbnail.path}.${series0[0].thumbnail.extension}" alt="crawl" data-id="${series0[0].id}" />
        </li>
        <li>
            <img class="photo-slide-image" src="${series1[0].thumbnail.path}.${series1[0].thumbnail.extension}" alt="crawl" data-id="${series1[0].id}" />
        </li>
        <li>
            <img class="photo-slide-image" src="${series2[0].thumbnail.path}.${series2[0].thumbnail.extension}" alt="crawl" data-id="${series2[0].id}" />
        </li>
    </ul>`
    ;
  return markup;

}

function createMarkupText(conicsd) {
  const { id, thumbnail, name, description, modified, comics, creators, format, startYear, pageCount, price, authors0, charac0,charac1,charac2,charac3,charac4,charac5} = conicsd;
  const options = { month: 'long', day: 'numeric', year: 'numeric', };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date = dateString.toLocaleDateString("en-US", options);
  
    const markup = `
      <div class="desc-head">
        <h1 class="title">${name}</h1>
        <div class="head-inf">
            <p class="riska"> <span class="c-author">${authors0[0].items[0].name}</span>|<span class="c-date">${date}</span>
            </p>
       </div>
    </div>
    <p class="text-discription">
      ${description}
    </p>
<ul class="desc-list">
        <li class="list-item">
            <P class="list-punkt">FORMAT</P>
            <P class="list-inf">${format}</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">YEAR RELEASED</P>
            <P class="list-inf">${startYear}</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">PAGES</P>
            <P class="list-inf">${pageCount}</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">PRICE</P>
            <P class="list-inf">${price}</P>
        </li>
    </ul>
    <h2 class="title author">Creator</h2>
    <div class="author-inf">
        <img class="author-img" src="${authors0[0].thumbnail.path}.${authors0[0].thumbnail.extension}" alt="one" data-id="${authors0[0].id}>
        <div class="aut-desc">
            <p class="author-prof">${authors0[0].items[0].role}</p>
            <h3 class="author-name">${authors0[0].items[0].name}</h3>
        </div>
    </div>
    <h2 class="title characters">Characters</h2>
    <ul class="characters-list">
        <li class="char-item">
            <img class="character-img" src="${charac0[0].thumbnail.path}.${charac0[0].thumbnail.extension}" alt="one"data-id="${charac0[0].id} />
            <h3 class="character-name">${charac0[0].items.name}</h3>

        </li>
         <li class="char-item">
            <img class="character-img" src="${charac1[0].thumbnail.path}.${charac1[0].thumbnail.extension}" alt="one"data-id="${charac1[0].id} />
            <h3 class="character-name">${charac1[0].items.name}</h3>

        </li>
         <li class="char-item">
            <img class="character-img" src="${charac2[0].thumbnail.path}.${charac2[0].thumbnail.extension}" alt="one"data-id="${charac2[0].id}/>
            <h3 class="character-name">${charac2[0].items.name}</h3>

        </li>
         <li class="char-item">
            <img class="character-img" src="${charac3[0].thumbnail.path}.${charac3[0].thumbnail.extension}" alt="one"data-id="${charac3[0].id}/>
            <h3 class="character-name">${charac3[0].items.name}</h3>

        </li>
         <li class="char-item">
            <img class="character-img" src="${charac4[0].thumbnail.path}.${charac4[0].thumbnail.extension}" alt="one"data-id="${charac4[0].id}/>
            <h3 class="character-name">${charac4[0].items.name}</h3>

        </li>
         <li class="char-item">
            <img class="character-img" src="${charac5[0].thumbnail.path}.${charac5[0].thumbnail.extension}" alt="one"data-id="${charac5[0].id}/>
            <h3 class="character-name">${charac5[0].items.name}</h3>

        </li>


    </ul>`;
  return markup
}