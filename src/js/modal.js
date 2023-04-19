import { api } from '../helpers/api';


const closeBtnEl = document.querySelector('.modal-close-btn');
const modalTwoClose = document.querySelector('.backdrop-one');
const rcContainer = document.querySelector('.rm-container');
const modalHeroEl = document.querySelector('.images');
const comicsEl = document.querySelector('.description');
function onCloseBtnElClick() {
  modalTwoClose.classList.add('is-concealed');
}

closeBtnEl.addEventListener('click', onCloseBtnElClick);
rcContainer.addEventListener('click', onContainerClick);

async function onContainerClick(event) {
  modalTwoClose.classList.remove('is-concealed');
    const id = event.currentTarget.dataset.id;
  const comicObject = await api.getComicById({comicId:323});

//  const creatorsIds = comicObject[0].creators.items
//  .map(el => el.resourceURI)
//  .map(el => el.split('/'))
//     .map(el => el[el.length - 1]);
      const characterIds = comicObject[0].characters.items
      .map(el => el.resourceURI)
      .map(el => el.split('/'))
      .map(el => el[el.length - 1]);
//      const seriesIds = comicObject[0].series.items
//      .map(el => el.resourceURI)
//      .map(el => el.split('/'))
//      .map(el => el[el.length - 1]);
    for (let i = 0; i < 2; i += 1) {
  const characterId = characterIds[i];
//      const creatorsId = creatorsIds[i];
//          const seriesId = seriesIds[i];

//  comicObject[0][`series${i}`] = await api.getSeriesById({ seriesId });
  comicObject[0][`characters${i}`] = await api.getCharactersById({ characterId });
// comicObject[0][`creators${i}`] = await api.getCreatorsById({ creatorsId });
        }
   const markups = [
      createMarkupImages(comicObject[0]),
    //  createMarkupText(comicObject[0]),
   ];

   modalHeroEl.innerHTML = markups[0];
   comicsEl.innerHTML = markups[1];
}

  
  

function createMarkupImages(comics) {
  const { id, thumbnail, name, description, modified, creators0, images  } = comics;
  const markup = `
      <img
      
        src="${thumbnail.path}.${thumbnail.extension}"
        alt="star"
        class="star-photo"
      />
        <ul class="photo-slide">
          <li>
            <img class="photo-slide-image" src="./img/modal2/image7.png" alt="crawl" />
          </li>
          <li>
            <img class="photo-slide-image" src="./img/modal2/image7.png" alt="talk" />
          </li>
          <li>
            <img class="photo-slide-image" src="./img/modal2/image8.png" alt="on-knee" />
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