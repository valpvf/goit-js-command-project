import{a as d}from"./api-49c1de00.js";let l="";const u=document.querySelector(".header-form"),m=document.querySelector(".header"),o=document.querySelector(".header-find");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");function p(e){const r=e.map(t=>{const{id:s,thumbnail:i,name:h,description:C}=t;return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${s}"
        src='${i.path}.${i.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${s}" class='header-find-text'>${h}</h3>
          
          </div>
        </div>
      </a>
    `}).join("");o.insertAdjacentHTML("beforeend",r)}const f=async e=>{e.preventDefault();const{target:r}=e;if(l=r.elements.searchQuery.value,u.reset(),l.trim()==""){console.log("Please specify your search query.");return}const t=await d.getCharacters({nameStartsWith:l});if(t.lengt==0){console.log("Search result is zero. Change your query"),o.innerHTML="";return}else o.innerHTML="",p(t)};u.addEventListener("submit",f);window.addEventListener("scroll",()=>{!window.scrollY==0?m.classList.add("header-color"):m.classList.remove("header-color")});const g=document.querySelector(".rc-list"),y=document.querySelector(".rc-descr-list");let c=0,a=null,n=null;const $=()=>Math.round(Math.random()*1561),v=async()=>{let e=[];for(let r=0;r<5;r+=1){const t=await d.getCharacters({limit:1,offset:$()});if(t[0].thumbnail.path==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"||!t[0].description){r-=1;continue}else t[0].thumbnail.path.includes("https")||(t[0].thumbnail.path=t[0].thumbnail.path.replace("http","https"));e.push(t[0])}g.innerHTML=L(e),y.innerHTML=S(e),a=document.querySelectorAll(".rc-list .slide"),n=document.querySelectorAll(".rc-descr-item"),a[0].className="slide rc-item showing",n[0].className="rc-descr-item rc-descr-active",console.log(a[0].className),setInterval(q,3500)};function L(e){return e.map(({id:t,thumbnail:s})=>`  <li class='rc-item slide' data-id="${t}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${s.path}.${s.extension}" />
      <source media="(min-width: 375px)" srcset="${s.path}.${s.extension}"/>
      <img class="rc-img" data-set="${t}"
        src='${s.path}.${s.extension}'
        alt=''
      /></picture>`).join("")}function S(e){return e.map(({name:t,description:s,id:i})=>`
    <li class='rc-descr-item' data-id="${i}">
      <h3 class='rc-descr-title'>${t}</h3>
      <p class='rc-descr-text'>${s}</p>
    </li>`).join("")}v();function q(){console.log(a[c]),a[c].className="slide rc-item",n[c].className="rc-descr-item",c=(c+1)%a.length,a[c].className="slide rc-item showing",n[c].className="rc-descr-item rc-descr-active"}const k=document.querySelector(".lastcomics-url-container");async function w(){const e=await d.getComics({limit:3,dateDescriptor:"lastWeek"});M(x(e.results))}w();function x(e){return e.map(({thumbnail:{path:r,extension:t},title:s,creators:i}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${r}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${s}</h3>
    </a></div>
     `).join("")}function M(e){k.insertAdjacentHTML("beforeend",e)}
