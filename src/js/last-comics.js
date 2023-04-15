import { api } from '../helpers/api.js';

// console.log('helloW');
const lastComicsEl = document.querySelector('.lastcomics-url-container');
async function getLastWeekComics() {
    const comics = await api.getComics({
    limit: 3,
    dateDescriptor: 'lastWeek',
    });
    createLastComicsLine(renderLastComics(comics.results))
    // console.log(comics.results)
    //const results = comics.results;
    //return results
}


getLastWeekComics()


function renderLastComics(comicsArr) {
    return comicsArr.map(({ thumbnail: { path, extension }, title, creators } = {}) =>
    `<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${path}.${extension}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${title}</h3>
    </a></div>
     `).join('');
}


function createLastComicsLine(markup) {
    lastComicsEl.insertAdjacentHTML('beforeend', markup);
}
