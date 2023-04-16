import{a as l}from"./api-8919ccfc.js";let o="";const u=document.querySelector(".header-form"),m=document.querySelector(".header"),d=document.querySelector(".header-find");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");function p(e){const s=e.map(t=>{const{id:r,thumbnail:i,name:h,description:b}=t;return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${r}"
        src='${i.path}.${i.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${r}" class='header-find-text'>${h}</h3>
          
          </div>
        </div>
      </a>
    `}).join("");d.insertAdjacentHTML("beforeend",s)}const f=async e=>{e.preventDefault();const{target:s}=e;if(o=s.elements.searchQuery.value,u.reset(),o.trim()==""){console.log("Please specify your search query.");return}const t=await l.getCharacters({nameStartsWith:o});if(t.lengt==0){console.log("Search result is zero. Change your query"),d.innerHTML="";return}else d.innerHTML="",p(t)};u.addEventListener("submit",f);window.addEventListener("scroll",()=>{!window.scrollY==0?m.classList.add("header-color"):m.classList.remove("header-color")});const g=document.querySelector(".rc-list"),y=document.querySelector(".rc-descr-list");let c=0,a=null,n=null;const $=()=>Math.round(Math.random()*1561),v=async()=>{let e=[];for(let s=0;s<5;s+=1){const t=await l.getCharacters({limit:1,offset:$()});if(t[0].thumbnail.path==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"||!t[0].description){s-=1;continue}else t[0].thumbnail.path.includes("https")||(t[0].thumbnail.path=t[0].thumbnail.path.replace("http","https"));e.push(t[0])}g.innerHTML=L(e),y.innerHTML=S(e),a=document.querySelectorAll(".rc-list .slide"),n=document.querySelectorAll(".rc-descr-item"),a[0].className="slide rc-item showing",n[0].className="rc-descr-item rc-descr-active",console.log(a[0].className),setInterval(q,3500)};function L(e){return e.map(({id:t,thumbnail:r})=>`  <li class='rc-item slide' data-id="${t}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${r.path}.${r.extension}" />
      <source media="(min-width: 375px)" srcset="${r.path}.${r.extension}"/>
      <img class="rc-img" data-set="${t}"
        src='${r.path}.${r.extension}'
        alt=''
      /></picture>`).join("")}function S(e){return e.map(({name:t,description:r,id:i})=>`
    <li class='rc-descr-item' data-id="${i}">
      <h3 class='rc-descr-title'>${t}</h3>
      <p class='rc-descr-text'>${r}</p>
    </li>`).join("")}v();function q(){console.log(a[c]),a[c].className="slide rc-item",n[c].className="rc-descr-item",c=(c+1)%a.length,a[c].className="slide rc-item showing",n[c].className="rc-descr-item rc-descr-active"}const k=document.querySelector(".lastcomics-url-container");async function w(){const e=await l.getComics({limit:3,dateDescriptor:"lastWeek"});x(C(e.results))}w();function C(e){return e.map(({thumbnail:{path:s,extension:t},title:r,creators:i}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${s}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${r}</h3>
    </a></div>
     `).join("")}function x(e){k.insertAdjacentHTML("beforeend",e)}document.querySelector(".modal-main-img");async function M(e){return await l.getCharactersById({characterId:e})}M(1011071);
