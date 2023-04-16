import { api } from '../helpers/api.js';
const rcImgList = document.querySelector('.rc-list');
const rcDescrList = document.querySelector('.rc-descr-list');

let currentSlide = 0;
let slides = null;
let slidesText = null;
const getRandomOffset = () => {
  return Math.round(Math.random() * 1561);
};

const getRandomFive = async () => {
  let results = [];
  for (let i = 0; i < 5; i += 1) {
    const result = await api.getCharacters({
      limit: 1,
      offset: getRandomOffset(),
    });
    if (
      result[0].thumbnail.path ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' || !result[0].description
    ) {
      i -= 1;
      continue;
    } else if (!result[0].thumbnail.path.includes('https')){
      let res = result[0].thumbnail.path.replace('http', 'https')
    }
    results.push(res);
  }
  rcImgList.innerHTML = randomImgMarkup(results);
  rcDescrList.innerHTML = randomDeskrMarkup(results);
  slides = document.querySelectorAll('.rc-list .slide');
  slidesText = document.querySelectorAll('.rc-descr-item');
  slides[0].className = 'slide rc-item showing';
  slidesText[0].className = 'rc-descr-item rc-descr-active';
  console.log(slides[0].className);
  let slideInterval = setInterval(nextSlide, 3500);
};

function randomImgMarkup(array) {
  const markup = array
    .map(({ id, thumbnail }) => {
      return `  <li class='rc-item slide' data-id="${id}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${thumbnail.path}.${thumbnail.extension}" />
      <source media="(min-width: 375px)" srcset="${thumbnail.path}.${thumbnail.extension}"/>
      <img class="rc-img" data-set="${id}"
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
      <h3 class='rc-descr-title'>${name}</h3>
      <p class='rc-descr-text'>${description}</p>
    </li>`;
    })
    .join('');
  return markup;
}

getRandomFive();

function nextSlide() {
  console.log(slides[currentSlide]);
  slides[currentSlide].className = 'slide rc-item';
  slidesText[currentSlide].className = 'rc-descr-item';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide rc-item showing';
  slidesText[currentSlide].className = 'rc-descr-item rc-descr-active';
}
