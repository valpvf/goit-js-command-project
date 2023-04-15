import { api } from '../helpers/api.js';

const rcList = document.querySelector(".rc-list");

const getRandomOffset = () => {
    return Math.round(Math.random() * 1561);
  };
  
   const getRandomFive = async () => {
    let results = [];
    for (let i = 0; i < 5; i += 1) {
      const result = await api.getCharacters({ limit: 1, offset: getRandomOffset() });
      results.push(result[0])
    } 
    // console.log(results)
    return randomMarkup(results)

  }
  
  function randomMarkup(array) {
      const markup = array.map(({id, thumbnail, name, description}) => {
      return `  <li class='rc-item'>
      <img data-set="${id}"
        src='${thumbnail.path}.${thumbnail.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${id}" class='rc-descr-title'>${name}</h3>
          <p  data-set="${id}"class='rc-descr-text'>${description}</p>
        </li>
      </ul>
    </li>`
  }).join('')
  rcList.insertAdjacentHTML(markup)
  // console.log(markup);;
  }

//   function randomDescrMarkup(array) {
    
//   }
  
  getRandomFive()