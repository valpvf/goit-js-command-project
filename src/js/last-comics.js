import { api } from '../helpers/api.js';
import Swiper from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
// console.log('helloW');
const nextBtnEl = document.querySelector('.swiper-button-next');
const prevBtnEl = document.querySelector('.swiper-button-prev');
const sliderEl = document.querySelector('.swiper-wrapper');

async function getLastWeekComics() {
  try {
    const comics = await api.getComics({
      limit: 3,
      dateDescriptor: 'lastWeek',
    });

    const markup = renderLastComics(comics.results);
    createLastComics(markup);
    createSlider();
  } catch (error) {
    location.replace('../404.html');
  }
  //createLastComicsLine(renderLastComics(comics.results));
  //console.log(comics)
  //const results = comics.results;
  //return results
}

getLastWeekComics();

function renderLastComics(comicsArr) {
  return comicsArr
    .map(({ id, thumbnail: { path, extension }, title, creators } = {}) => {
      const writer = creators.items.find(creator => creator.role === 'writer');
      const writerName = writer ? writer.name : '';
      return `
      <div class="comics-container swiper-slide" data-id="${id}">
        <a href="#" class="lastcomics-link-comics" rel="nofollow noreferrer noopener" data-id="${id}">
          <img src="${path}.${extension}" alt="${title}" class="lastcomics-image" data-id="${id}">
          <h3 class="lastcomics-comics-title" data-id="${id}">${title}</h3>
          <p class="creator-names" data-id="${id}">${writerName}</p>
        </a>
      </div>
    `;
    })
    .join('');
}

function createLastComics(markup) {
  sliderEl.innerHTML = '';
  sliderEl.insertAdjacentHTML('beforeend', markup);
}

function createSlider() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1.25,
      },
      768: {
        slidesPerView: 1.5,
      },
      //1200: {
      //  slidesPerView: 2.5,
      //},
      1440: {
        slidesPerView: 3,
        init: false,
      },
    },
  });
  nextBtnEl.addEventListener('click', () => {
    swiper.slideNext();
  });
  prevBtnEl.addEventListener('click', () => {
    swiper.slidePrev();
  });
  sliderBtnStyle();

  return swiper;
}

function sliderBtnStyle() {
  nextBtnEl.addEventListener('mousedown', () => {
    nextBtnEl.classList.add('clicked-right');
  });

  nextBtnEl.addEventListener('mouseup', () => {
    setTimeout(() => {
      nextBtnEl.classList.remove('clicked-right');
    }, 200);
  });
  prevBtnEl.addEventListener('mousedown', () => {
    prevBtnEl.classList.add('clicked-left');
  });

  prevBtnEl.addEventListener('mouseup', () => {
    setTimeout(() => {
      prevBtnEl.classList.remove('clicked-left');
    }, 200);
  });
}
