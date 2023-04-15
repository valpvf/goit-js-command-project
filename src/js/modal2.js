import { api } from '../helpers/api';

async function getCharacter(id) {
  const character = await api.getCharactersById({ characterId: id });
  console.log(character);
  return character;
}

// console.log('hello');

// getCharacter(1017322);

export const createModal = obj => {
  return `
      <div class="backdrop" data-modal="">
  <div class="modal">
    <div class="modal-hero">
      <button class="modal-close-btn" data-modal-close="">
        <svg class="modal-close-icon" width="20" height="20">
          <use class="icon" href="./img/icons.svg#close-icon"></use>
        </svg>
      </button>
      <img
        class="modal-main-img"
        src="./img/modal/star.jpg"
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
        <h1 class="comics-title">${name}</h1>
        <p class="comics-date">July 9, 2021</p>
      </div>
      <p class="comics-description">${description}
      </p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list">
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="./img/modal/item-one.jpg"
            alt="one"
          />
          <h3 class="comics-list-movie">${name}</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="./img/modal/item-two.jpg"
            alt="two"
          />
          <h3 class="comics-list-movie">${name}</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="./img/modal/item-three.jpg"
            alt="three"
          />
          <h3 class="comics-list-movie">${name}</h3>
          <p class="comics-movie-hero">Kelly Thompson</p>
        </li>
      </ul>
    </section>
  </div>
</div>
    `;
};

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
