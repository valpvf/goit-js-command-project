import{a}from"./api-6da0aff2.js";document.querySelector(".rc-list");const n=()=>Math.round(Math.random()*1561),l=async()=>{let e=[];for(let t=0;t<5;t+=1){const s=await a.getCharacters({limit:1,offset:n()});e.push(s[0])}return i(e)};function i(e){e.map(({id:t,thumbnail:s,name:r,description:o})=>`  <li class='rc-item'>
      <img data-set="${t}"
        src='${s.path}.${s.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${t}" class='rc-descr-title'>${r}</h3>
          <p  data-set="${t}"class='rc-descr-text'>${o}</p>
        </li>
      </ul>
    </li>`).join("")}l();let c="";const u=document.querySelector(".header-form");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");const m=async e=>{e.preventDefault();const{target:t}=e;if(console.log(t.elements.searchQuery.value),c=t.elements.searchQuery.value,console.log(c),c.trim()==""){console.log("Please specify your search query.");return}try{const s=await a.getCharacters({nameStartsWith:c});console.log(s)}catch{console.log("Something went wrong. Please try again later.");return}};u.addEventListener("submit",m);const d=document.querySelector(".lastcomics-url-container");async function h(){const e=await a.getComics({limit:3,dateDescriptor:"lastWeek"});f(g(e.results))}h();function g(e){return e.map(({thumbnail:{path:t,extension:s},title:r,creators:o}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${t}.${s}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${r}</h3>
    </a></div>
     `).join("")}function f(e){d.insertAdjacentHTML("beforeend",e)}
