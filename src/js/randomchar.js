import { api } from '../helpers/api.js';
import {
  loader,
  renderLoader,
  hideLoader,
} from '../helpers/loader-placeholder.js';

const localCharactersArray = [
  {
    id: 1009603,
    name: 'Smasher (Vril Rokk)',
    description:
      "Smasher is a member of the Imperial Guard, a multi…ct as enforcers of the laws of the Shi'ar Empire.",
    modified: '1969-12-31T19:00:00-0500',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/5/d0/4c003ae66139c',
      extension: 'jpg',
    },
  },
  {
    id: 1011010,
    name: 'Spider-Man (Ultimate)',
    description:
      'Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    modified: '2014-03-05T13:50:46-0500',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/531771b4e8c60',
      extension: 'jpg',
    },
  },
  {
    id: 1009652,
    name: 'Thanos',
    description:
      'The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    modified: '2016-05-05T15:35:19-0400',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd',
      extension: 'jpg',
    },
  },
  {
    id: 1009740,
    name: 'Arnim Zola',
    description:
      "The frail, dwarfish Arnim Zola was born in 1930s S… world's leading biochemist and genetic engineer.",
    modified: '2012-03-20T12:33:28-0400',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/8/b0/4c00393a4cb7c',
      extension: 'jpg',
    },
  },
  {
    id: 1009591,
    name: 'Silver Samurai',
    description:
      'Keniuchio Harada is the mutant son of the former Japanese crimelord Shingen Harada.',
    modified: '2013-07-26T22:23:44-0400',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/5/50/4c003c13058bd',
      extension: 'jpg',
    },
  },
];

localStorage.setItem('local-rc', JSON.stringify(localCharactersArray));

const rcImgList = document.querySelector('.rc-list');
const rcDescrList = document.querySelector('.rc-descr-list');
const btn = document.querySelector('.rc-btn-container');
const rcBox = document.querySelector('.rc-box');

let currentSlide = 0;
let slides = null;
let slidesText = null;
const getRandomOffset = () => {
  return Math.round(Math.random() * 1561);
};

const getRandomFive = async () => {
  renderLoader();
  rcBox.classList.add('display-none');
  let results = [];
  for (let i = 0; i < 5; i += 1) {
    const result = await api.getCharacters({
      limit: 1,
      offset: getRandomOffset(),
    });
    if (
      result[0].thumbnail.path ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    ) {
      const localArray = JSON.parse(localStorage.getItem('local-rc'));
      if (localArray.length > 0) {
        result[0] = localArray[0];
        localArray.shift();
        localStorage.setItem('local-rc', JSON.stringify(localArray));
      } else {
        i -= 1;
        continue;
      }
    } else if (!result[0].description) {
      i -= 1;
      continue;
    } else if (!result[0].thumbnail.path.includes('https')) {
      result[0].thumbnail.path = result[0].thumbnail.path.replace(
        'http',
        'https'
      );
    }
    results.push(result[0]);
  }
  hideLoader();
  rcBox.classList.remove('display-none');
  rcImgList.innerHTML = randomImgMarkup(results);
  rcDescrList.innerHTML = randomDeskrMarkup(results);
  slides = document.querySelectorAll('.rc-list .slide');
  slidesText = document.querySelectorAll('.rc-descr-item');
  slides[0].className = 'slide rc-item showing';
  slidesText[0].className = 'rc-descr-item rc-descr-active';
  let slideInterval = setInterval(nextSlide, 3500);
};

function randomImgMarkup(array) {
  const markup = array
    .map(({ id, thumbnail }) => {
      return `  <li class='rc-item slide' data-id="${id}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${thumbnail.path}.${thumbnail.extension}" />
      <source media="(min-width: 375px)" srcset="${thumbnail.path}.${thumbnail.extension}"/>
      <img class="rc-img" data-id="${id}"
        src='${thumbnail.path}.${thumbnail.extension}'
        alt=''
      /></picture>`;
    })
    .join('');
  return markup;
}

function randomDeskrMarkup(array) {
  const markup = array
    .map(({ name, description, id }) => {
      return `
    <li class='rc-descr-item' data-id="${id}">
      <h3 class='rc-descr-title' data-id="${id}">${name}</h3>
      <p class='rc-descr-text' data-id="${id}">${description}</p>
    </li>`;
    })
    .join('');
  return markup;
}

//getRandomFive();

function nextSlide() {
  // console.log(slides[currentSlide]);
  slides[currentSlide].className = 'slide rc-item';
  slidesText[currentSlide].className = 'rc-descr-item';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide rc-item showing';
  slidesText[currentSlide].className = 'rc-descr-item rc-descr-active';
}

// function getRandomFive1 () {
//   getRandomFive()
// }

getRandomFive();

// btn.addEventListener('click', getRandomFive1);
