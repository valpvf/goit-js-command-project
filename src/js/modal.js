import { api } from '../helpers/api';
const characterCardEl = document.querySelector('.backdrop-two');
const closeBtnEl = document.querySelector('.modal-close-btn');
const modalTwoClose = document.querySelector('.backdrop-two');
const modalHeroEl = document.querySelector('.images');
const comicsEl = document.querySelector('.description');
const lastcomicssection = document.querySelector('.swiper-wrapper');
function onCloseBtnElClick() {
  modalTwoClose.classList.add('is-concealed');
}
closeBtnEl.addEventListener('click', onCloseBtnElClick);
lastcomicssection.addEventListener('click', onContainerClick);

async function getComics(id) {
    const comics1 = await api.getComicsById({ comicsId: id });
    return comics1;
}
function onContainerClick(event) {
  modalTwoClose.classList.remove('is-concealed');
  const id = event.target.dataset.id;
  const comicsObject = getComics(id)
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


function createMarkupImages(conicsd) {
  const { id, thumbnail, name, description, modified, comics, creators } = conicsd;
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
  const { id, thumbnail, name, description, modified, comics, creators } = conicsd;
  const options = { month: 'long', day: 'numeric', year: 'numeric', };
  const unformattedDate = +Date.parse(modified);
  const dateString = new Date(unformattedDate);
  const date = dateString.toLocaleDateString("en-US", options);
  
    const markup = `
      <div class="desc-head">
        <h1 class="title">${name}</h1>
        <div class="head-inf">
            <p class="riska"> <span class="c-author">${creators}</span>|<span class="c-date">${date}</span>
            </p>
       </div>
    </div>
    <p class="text-discription">
      ${description}
    </p>
<ul class="desc-list">
        <li class="list-item">
            <P class="list-punkt">FORMAT</P>
            <P class="list-inf">Comic</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">YEAR RELEASED</P>
            <P class="list-inf">1967</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">PAGES</P>
            <P class="list-inf">28</P>
        </li>
        <li class="list-item">
            <P class="list-punkt">PRICE</P>
            <P class="list-inf">$3.99</P>
        </li>
    </ul>
    <h2 class="title author">Creator</h2>
    <div class="author-inf">
        <img class="author-img" src="./img/modal2/image21.png" alt="one">
        <div class="aut-desc">
            <p class="author-prof">Writer</p>
            <h3 class="author-name">${creators}</h3>
        </div>
    </div>
    <h2 class="title characters">Characters</h2>
    <ul class="characters-list">
        <li class="char-item">
            <img class="character-img" src="./img/modal2/image19.png" alt="one" />
            <h3 class="character-name">Daredevilic</h3>

        </li>


    </ul>`;
  return markup
}