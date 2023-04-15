import { api } from '../helpers/api.js';

console.log('helloW');

const lastComicsEl = document.querySelector('.lastcomics-url-container');

async function getLastWeekComics() {
    const comics = await api.getComics({
    limit: 3,
    dateDescriptor: 'lastWeek',
    });
    const results = comics.results;
    return results
}
   
getLastWeekComics()
    .then(results => console.log(results))
    .catch(error => console.log(error));

console.log(getLastWeekComics());

//function renderLastComics(comicsArr) {
    //const markup = comicsArr.map(({ thumbnail, title, dates, creators } = {}) =>
    // `<img src="${thumbnail.path}.${thumbnail.extension}" alt="${title}"/>
   // <h3>${title}</h3>`).join('');
    //console.log(markup);
//}

//function createLastComicsLine(markup) {
   //lastComicsEl.insertAdjacentHTML('beforeend', markup) 
//}

//function createComicsGallery() {
    
    //const markup = createLastComicsLine(renderLastComics(comics));
//}

//console.log(renderLastComics());
