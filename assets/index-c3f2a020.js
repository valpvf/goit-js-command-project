import{a as d}from"./api-9deb7250.js";let h="";const L=document.querySelector(".header-form"),q=document.querySelector(".header"),p=document.querySelector(".header-find");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");function w(e){const r=e.map(t=>{const{id:s,thumbnail:a,name:x,description:Q}=t;return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${s}"
        src='${a.path}.${a.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${s}" class='header-find-text'>${x}</h3>
          
          </div>
        </div>
      </a>
    `}).join("");p.insertAdjacentHTML("beforeend",r)}const $=async e=>{e.preventDefault();const{target:r}=e;if(h=r.elements.searchQuery.value,L.reset(),h.trim()==""){console.log("Please specify your search query.");return}const t=await d.getCharacters({nameStartsWith:h});if(t.lengt==0){console.log("Search result is zero. Change your query"),p.innerHTML="";return}else p.innerHTML="",w(t)};L.addEventListener("submit",$);window.addEventListener("scroll",()=>{!window.scrollY==0?q.classList.add("header-color"):q.classList.remove("header-color")});const B=document.querySelector(".rc-list"),H=document.querySelector(".rc-descr-list"),M=document.querySelector(".rc-btn-container");let n=0,c=null,l=null;const E=()=>Math.round(Math.random()*1561),T=async()=>{let e=[];for(let r=0;r<5;r+=1){const t=await d.getCharacters({limit:1,offset:E()});if(t[0].thumbnail.path==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"||!t[0].description){r-=1;continue}else t[0].thumbnail.path.includes("https")||(t[0].thumbnail.path=t[0].thumbnail.path.replace("http","https"));e.push(t[0])}B.innerHTML=I(e),H.innerHTML=F(e),c=document.querySelectorAll(".rc-list .slide"),l=document.querySelectorAll(".rc-descr-item"),c[0].className="slide rc-item showing",l[0].className="rc-descr-item rc-descr-active",console.log(c[0].className),setInterval(N,3500)};function I(e){return e.map(({id:t,thumbnail:s})=>`  <li class='rc-item slide' data-id="${t}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${s.path}.${s.extension}" />
      <source media="(min-width: 375px)" srcset="${s.path}.${s.extension}"/>
      <img class="rc-img" data-set="${t}"
        src='${s.path}.${s.extension}'
        alt=''
      /></picture>`).join("")}function F(e){return e.map(({name:t,description:s,id:a})=>`
    <li class='rc-descr-item' data-id="${a}">
      <h3 class='rc-descr-title'>${t}</h3>
      <p class='rc-descr-text'>${s}</p>
    </li>`).join("")}function N(){console.log(c[n]),c[n].className="slide rc-item",l[n].className="rc-descr-item",n=(n+1)%c.length,c[n].className="slide rc-item showing",l[n].className="rc-descr-item rc-descr-active"}function j(){T()}M.addEventListener("click",j);const A=document.querySelector(".lastcomics-url-container");async function W(){const e=await d.getComics({limit:3,dateDescriptor:"lastWeek"});P(D(e.results))}W();function D(e){return e.map(({thumbnail:{path:r,extension:t},title:s,creators:a}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${r}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${s}</h3>
    </a></div>
     `).join("")}function P(e){A.insertAdjacentHTML("beforeend",e)}document.querySelector(".modal-main-img");const R=document.querySelector(".modal-close-btn"),v=document.querySelector(".backdrop");function _(e,r){v.classList.add(".isHidden"),v.input.classList.remove(".isHidden")}R.addEventListener("click",_);async function z(e){return await d.getCharactersById({characterId:e})}z(1011071);const u=document.querySelector(".first-slider-btn"),m=document.querySelector(".middle-slider-btn"),y=document.querySelector(".last-slider-btn"),g=document.querySelector(".blackpanther-slider-img"),k=document.querySelector(".spiderman-slider-img"),f=document.querySelector(".hulk-slider-img"),b=document.querySelector(".blackpanther-card-img"),o=document.querySelector(".spiderman-card-img"),i=document.querySelector(".hulk-card-img"),C=document.querySelector(".characters-desc"),S=document.querySelector(".hero-btn-characters");u.addEventListener("click",Y);function Y(){u.style.backgroundColor="#34387F",m.style.backgroundColor="#171717",y.style.backgroundColor="#171717",g.style.display="block",k.style.display="none",f.style.display="none",b.style.display="block",o.style.display="none",i.style.display="none",C.innerHTML=`T’Challa is the king of the secretive and highly advanced African nation 
  of Wakanda - as well as the powerful warrior known as the Black Panther.`,S.style.backgroundColor="#34387F"}m.addEventListener("click",G);function G(){u.style.backgroundColor="#171717",y.style.backgroundColor="#171717",m.style.backgroundColor="#600404",k.style.display="block",g.style.display="none",f.style.display="none",o.style.display="block",b.style.display="none",i.style.display="none",o.style.boxShadow="-5px 80px 60px 10px #600404",C.innerHTML=`With amazing spider-like abilities, teenage science whiz Peter Parker
            fights crime and dreams of becoming an Avenger as Spider-Man.`,S.style.backgroundColor="#600404"}y.addEventListener("click",O);function O(){y.style.backgroundColor="#5B7F3C",u.style.backgroundColor="#171717",m.style.backgroundColor="#171717",g.style.display="none",k.style.display="none",f.style.display="block",i.style.display="block",b.style.display="none",o.style.display="none",i.style.boxShadow="-5px 20px 60px 10px #5B7F3C",C.innerHTML=`Exposed to heavy doses of gamma radiation, scientist Bruce Banner 
    transforms into the mean, green rage machine called the Hulk.`,S.style.backgroundColor="#5B7F3C"}
