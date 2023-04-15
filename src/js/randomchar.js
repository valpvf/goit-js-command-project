import { api } from '../helpers/api.js';
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper ('.swiper-container', 
	{
    speed:1000,
		direction: 'vertical',
    zoom: true,
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
    autoplay: 
    {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,

    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
	}); 
// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   centeredSlides: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.right-slider',
//     prevEl: '.left-slider',
//     },
//   loop: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: true,
//   },

// });
const rcList = document.querySelector('.rc-list');

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
    if (result[0].thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
      i -= 1;
      continue
    }
    results.push(result[0]);
  }
  console.log(results)
   randomMarkup(results);
};

function randomMarkup(array) {
  const markup = array
    .map(({ id, thumbnail, name, description }) => {
      return `  <li class='rc-item swiper-slide'>
      <picture class="rc-img">
      <source media="(min-width: 1440px)" srcset="${thumbnail.path}/portrait_uncanny.${thumbnail.extension}" />
      <source media="(min-width: 375px)" srcset="${thumbnail.path}/standard_fantastic.${thumbnail.extension}"/>
      <img data-set="${id}"
        src='${thumbnail.path}/portrait_uncanny.${thumbnail.extension}'
        alt=''
      /></picture>
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${id}" class='rc-descr-title'>${name}</h3>
          <p  data-set="${id}"class='rc-descr-text'>${description}</p>
        </li>
      </ul>
    </li>`;
    })
    .join('');
  rcList.innerHTML = markup;

}
  // console.log(markup);;


// function renderMarkup(markup) {
//   rcList.insertAdjacentHTML(markup)
// }

//   <div class="swiper">
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//     ...
//   </div>
//   <!-- If we need pagination -->
//   <div class="swiper-pagination"></div>

//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <!-- If we need scrollbar -->
//   <div class="swiper-scrollbar"></div>
// </div>

// '.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   function randomDescrMarkup(array) {

//   }

getRandomFive();
