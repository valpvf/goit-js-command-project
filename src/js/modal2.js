import { api } from '../helpers/api';

const characterCardEl = document.querySelector('.modal-main-img');
const closeBtnEl = document.querySelector('.modal-close-btn');
const modalTwoClose = document.querySelector('.backdrop');

async function getCharacter(id) {
  const character = await api.getCharactersById({ characterId: id });
  console.log(character);

  const markup = createMarkup(character);
  modalTwoClose.innerHTML = markup;
}

// console.log('hello');

getCharacter(1011071);

function onCloseBtnElClick(add, remove) {
  modalTwoClose.classList.add('.isHidden');
  modalTwoClose.input.classList.remove('.isHidden');
}

closeBtnEl.addEventListener('click', onCloseBtnElClick);

// function renderMarkup(data) {
//   characterCardEl.insertAdjacentHTML('beforeend', markup);
// }

function createMarkup(array) {
  const {
    thumbnail: { path, extension },
    comics: { items },
    name,
    description,
    modified,
  } = array[0];

  // const { resourceURI, name: comicsName } = items;

  const newItems = items.map((elem, indx) => {
    return { resource: elem.resourceURI, comicsName: elem.name };
  });

  const { resource, comicsName } = newItems[0];

  console.log(resource);

  return `
  <div class="backdrop" data-modal="">
    <div class="modal modal-box">
      <div class="modal-hero">
        <button class="modal-close-btn" data-modal-close="">
          <svg class="modal-close-icon" width="20" height="20">
            <use class="icon" href="./img/icons.svg#close-icon"></use>
          </svg>
        </button>
        <img
          class="modal-main-img"
          src="${path}.${extension}"
          alt="star"
          class="star-photo"
        />
        <div class="modal-slide">
          <ul class="modal-slide-list">
            <li>
              <img
                class="modal-slide-img"
                src="./img/modal/crawl.jpg"
                alt="crewl"
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
          </ul>
        </div>
      </div>
      <section class="comics">
        <div class="comics-title-date">
          <h1 class="comics-movie-title">${name}</h1>
          // <p class="comics-date">${modified}</p>
        </div>
        <p class="comics-description">${description}
        </p>
        <h2 class="comics-list-title">List of comics</h2>
        <ul class="comics-list">
          <li class="comics-list-item">
            <img
              class="comics-list-el"
              src="${resource}"
              alt="one"
            />
            <h3 class="comics-list-movie">${comicsName}</h3>
            <p class="comics-movie-hero">Kelly Thompson</p>
          </li>
          <li class="comics-list-item">
            <img
              class="comics-list-el"
              src="${resource}"
              alt="two"
            />
            <h3 class="comics-list-movie">${comicsName}</h3>
            <p class="comics-movie-hero">Kelly Thompson</p>
          </li>
          <li class="comics-list-item">
            <img
              class="comics-list-el"
              src="${resource}"
              alt="three"
            />
            <h3 class="comics-list-movie">${comicsName}</h3>
            <p class="comics-movie-hero">Kelly Thompson</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
       `;
}

// function createMarkup();
// console.log(markup);

// function renderCharacter(characterArr) {
//   return characterArr
//     .map(
//       ({ thumbnail: { path, extension }, name, description, modified } = {}) =>
//         `
//       <div class="backdrop" data-modal="">
//   <div class="modal">
//     <div class="modal-hero">
//       <button class="modal-close-btn" data-modal-close="">
//         <svg class="modal-close-icon" width="20" height="20">
//           <use class="icon" href="./img/icons.svg#close-icon"></use>
//         </svg>
//       </button>
//       <img
//         class="modal-main-img"
//         src="${path}.${extension}"
//         alt="star"
//         class="star-photo"
//       />
//       <div class="modal-slide">
//         <ul class="modal-slide-list">
//           <li>
//             <img
//               class="modal-slide-img"
//               src="./img/modal/crawl.jpg"
//               alt="crewl"
//               width="80"
//               hieght="80"
//             />
//           </li>
//           <li>
//             <img
//               class="modal-slide-img"
//               src="./img/modal/talk.jpg"
//               alt="talk"
//               width="80"
//               hieght="80"
//             />
//           </li>
//           <li>
//             <img
//               class="modal-slide-img"
//               src="./img/modal/on-knee.jpg"
//               alt="on-knee"
//               width="80"
//               hieght="80"
//             />
//           </li>
//         </ul>
//       </div>
//     </div>
//     <section class="comics">
//       <div class="comics-title-date">
//         <h1 class="comics-title">${name}</h1>
//         <p class="comics-date">${modified}</p>
//       </div>
//       <p class="comics-description">${description}
//       </p>
//       <h2 class="comics-list-title">List of comics</h2>
//       <ul class="comics-list">
//         <li class="comics-list-item">
//           <img
//             class="comics-list-el"
//             src="./img/modal/item-one.jpg"
//             alt="one"
//           />
//           <h3 class="comics-list-movie">${name}</h3>
//           <p class="comics-movie-hero">Kelly Thompson</p>
//         </li>
//         <li class="comics-list-item">
//           <img
//             class="comics-list-el"
//             src="./img/modal/item-two.jpg"
//             alt="two"
//           />
//           <h3 class="comics-list-movie">${name}</h3>
//           <p class="comics-movie-hero">Kelly Thompson</p>
//         </li>
//         <li class="comics-list-item">
//           <img
//             class="comics-list-el"
//             src="./img/modal/item-three.jpg"
//             alt="three"
//           />
//           <h3 class="comics-list-movie">${name}</h3>
//           <p class="comics-movie-hero">Kelly Thompson</p>
//         </li>
//       </ul>
//     </section>
//   </div>
// </div>
//     `
//     )
//     .join('');
// }

// function createCharacterCard(markup) {
//   characterCardEl.insertAdjacentHTML('afterbegin', markup);
// }
{
  /* <div class="char-card">
  <a class="char-image-wrap" data-set="hero-id" href="#">
    <img class="char-card-image" src="" alt="" loading="lazy" />
    <div class="char-card-descr">
      <p class="char-card-descr-name">Black Widow</p>
    </div>
  </a>
</div>; */
}

// Звідси ти забираєш data-set="hero-id"
