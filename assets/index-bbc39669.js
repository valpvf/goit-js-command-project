import{a as c}from"./api-6da0aff2.js";const i=document.querySelector(".rc-list"),u=()=>Math.round(Math.random()*1561),m=async()=>{let e=[];for(let s=0;s<5;s+=1){const t=await c.getCharacters({limit:1,offset:u()});e.push(t[0])}return d(e)};function d(e){const s=e.map(({id:t,thumbnail:o,name:a,description:n})=>`  <li class='rc-item'>
      <img data-set="${t}"
        src='${o.path}.${o.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${t}" class='rc-descr-title'>${a}</h3>
          <p  data-set="${t}"class='rc-descr-text'>${n}</p>
        </li>
      </ul>
    </li>`).join("");i.insertAdjacentHTML(s)}m();console.log(c.getCharacters({}));let r="";console.log(c.getCharacters({nameStartsWith:"Hulk",limit:3}));const l=document.querySelector(".header-form"),h=document.querySelector(".header-output"),g=document.querySelector(".header-icon");document.querySelector(".header-btn");console.log(l);console.log(h);console.log(g);const f=async e=>{e.preventDefault();const{target:s}=e;if(console.log(s.elements.searchQuery.value),r=s.elements.searchQuery.value,console.log(r),r.trim()==""){console.log("Please specify your search query.");return}try{const t=await c.getCharacters({nameStartsWith:r});console.log(t)}catch{console.log("Something went wrong. Please try again later.");return}};l.addEventListener("submit",f);console.log("helloW");const y=document.querySelector(".lastcomics-url-container");async function p(){const e=await c.getComics({limit:3,dateDescriptor:"lastWeek"});C($(e.results)),console.log(e.results)}p();function $(e){return e.map(({thumbnail:{path:s,extension:t},title:o,creators:a}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${s}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${o}</h3>
    </a></div>
     `).join("")}function C(e){y.insertAdjacentHTML("beforeend",e)}
