import{a as o}from"./api-e87358eb.js";const n=()=>Math.round(Math.random()*1561),i=async()=>{let e=[];for(let t=0;t<5;t+=1){const s=await o.getCharacters({limit:1,offset:n()});e.push(s[0])}return console.log(e),u(e)};function u(e){const t=e.map(({thumbnail:s,name:r,description:a})=>`  <li class='rc-item'>
      <img
        src='${s.path}.${s.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 class='rc-descr-title'>${r}</h3>
          <p class='rc-descr-text'>${a}</p>
        </li>
      </ul>
    </li>`).join("");console.log(t)}i();console.log(o.getCharacters({}));let c="";console.log(o.getCharacters({nameStartsWith:"Hulk",limit:3}));const l=document.querySelector(".header-form"),m=document.querySelector(".header-output"),d=document.querySelector(".header-icon");document.querySelector(".header-btn");console.log(l);console.log(m);console.log(d);const g=async e=>{e.preventDefault();const{target:t}=e;if(console.log(t.elements.searchQuery.value),c=t.elements.searchQuery.value,console.log(c),c.trim()==""){console.log("Please specify your search query.");return}try{const s=await o.getCharacters({nameStartsWith:c});console.log(s)}catch{console.log("Something went wrong. Please try again later.");return}};l.addEventListener("submit",g);console.log("helloW");const h=document.querySelector(".lastcomics-url-container");async function f(){const e=await o.getComics({limit:3,dateDescriptor:"lastWeek"});y(p(e.results)),console.log(e.results)}f();function p(e){return e.map(({thumbnail:{path:t,extension:s},title:r,creators:a}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${t}.${s}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${r}</h3>
    </a></div>
     `).join("")}function y(e){h.insertAdjacentHTML("beforeend",e)}
