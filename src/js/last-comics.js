import { api } from '../helpers/api.js';
import Swiper from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
// console.log('helloW');
const lastComicsEl = document.querySelector('.lastcomics-url-container');
const nextBtnEl = document.querySelector('.swiper-button-next');
const prevBtnEl = document.querySelector('.swiper-button-prev');
const sliderEl = document.querySelector('.swiper-wrapper');


async function getLastWeekComics() {
    const comics = await api.getComics({
        limit: 3,
        dateDescriptor: 'lastWeek',
    });


    const markup = renderLastComics(comics.results);
    createLastComics(markup);
    createSlider();
    //createLastComicsLine(renderLastComics(comics.results));
    console.log(comics.results[0].creators.items[0].name)
    //const results = comics.results;
    //return results
}
getLastWeekComics()

function renderLastComics(comicsArr) {
    return comicsArr.map(({ id, thumbnail: { path, extension }, title, creators } = {}) =>
    `<div class="comics-container swiper-slide" data-id="${id}">
        <a href="#" class="lastcomics-link-comics">
        <img src="${path}.${extension}" alt="${title}" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${title}</h3>
    </a></div>
     `).join('');
}

function createLastComics(markup) {
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
            1200: {
                slidesPerView: 2.5,
            },
            1440:
            {
                slidesPerView: 3,
                init: false,
                }

        }
    });
    nextBtnEl.addEventListener('click', () => {
        swiper.slideNext();
    })
    prevBtnEl.addEventListener('click', () => {
        swiper.slidePrev();
        
    });
    sliderBtnStyle()
    
    return swiper
}

function sliderBtnStyle() {
    nextBtnEl.addEventListener('mousedown', () => {
         nextBtnEl.classList.add('clicked');
     })
    
    nextBtnEl.addEventListener('mouseup', () => {
    setTimeout(() => {
        nextBtnEl.classList.remove('clicked');
    }, 300);
    });
    prevBtnEl.addEventListener('mousedown', () => {
         prevBtnEl.classList.add('clicked');
     })
    
    prevBtnEl.addEventListener('mouseup', () => {
    setTimeout(() => {
        prevBtnEl.classList.remove('clicked');
    }, 300);
    });
}
