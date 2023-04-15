import{a as r}from"./api-6da0aff2.js";document.querySelector(".rc-list");const n=()=>Math.round(Math.random()*1561),l=async()=>{let e=[];for(let t=0;t<5;t+=1){const c=await r.getCharacters({limit:1,offset:n()});e.push(c[0])}return i(e)};function i(e){e.map(({id:t,thumbnail:c,name:a,description:o})=>`  <li class='rc-item'>
      <img data-set="${t}"
        src='${c.path}.${c.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${t}" class='rc-descr-title'>${a}</h3>
          <p  data-set="${t}"class='rc-descr-text'>${o}</p>
        </li>
      </ul>
    </li>`).join("")}l();let s="";const u=document.querySelector(".header-form");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");const m=async e=>{e.preventDefault();const{target:t}=e;if(console.log(t.elements.searchQuery.value),s=t.elements.searchQuery.value,console.log(s),s.trim()==""){console.log("Please specify your search query.");return}try{const c=await r.getCharacters({nameStartsWith:s});console.log(c)}catch{console.log("Something went wrong. Please try again later.");return}};u.addEventListener("submit",m);const d=document.querySelector(".lastcomics-url-container");async function h(){const e=await r.getComics({limit:3,dateDescriptor:"lastWeek"});y(g(e.results))}h();function g(e){return e.map(({thumbnail:{path:t,extension:c},title:a,creators:o}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${t}.${c}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${a}</h3>
    </a></div>
     `).join("")}function y(e){d.insertAdjacentHTML("beforeend",e)}async function f(e){const t=await r.getCharactersById({characterId:e});return console.log(t),t}console.log("hello");f(1017322);
