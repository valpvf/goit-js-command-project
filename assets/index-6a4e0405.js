import{a as n}from"./api-43db0fbc.js";let s="";const l=document.querySelector(".header-form"),i=document.querySelector(".header"),o=document.querySelector(".header-find");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");function u(e){const t=e.map(r=>{const{id:c,thumbnail:a,name:d,description:q}=r;return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${c}"
        src='${a.path}.${a.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${c}" class='header-find-text'>${d}</h3>
          
          </div>
        </div>
      </a>
    `}).join("");o.insertAdjacentHTML("beforeend",t)}const m=async e=>{e.preventDefault();const{target:t}=e;if(s=t.elements.searchQuery.value,l.reset(),s.trim()==""){console.log("Please specify your search query.");return}const r=await n.getCharacters({nameStartsWith:s});if(r.lengt==0){console.log("Search result is zero. Change your query"),o.innerHTML="";return}else o.innerHTML="",u(r)};l.addEventListener("submit",m);window.addEventListener("scroll",()=>{!window.scrollY==0?i.classList.add("header-color"):i.classList.remove("header-color")});document.querySelector(".rc-list");document.querySelector(".rc-descr-list");const h=document.querySelector(".lastcomics-url-container");async function y(){const e=await n.getComics({limit:3,dateDescriptor:"lastWeek"});g(f(e.results))}y();function f(e){return e.map(({thumbnail:{path:t,extension:r},title:c,creators:a}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${t}.${r}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${c}</h3>
    </a></div>
     `).join("")}function g(e){h.insertAdjacentHTML("beforeend",e)}document.querySelector(".modal-main-img");async function p(e){return await n.getCharactersById({characterId:e})}p(1011071);
