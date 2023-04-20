import{P as b,a as s}from"./modal-5a9a77d4.js";/* empty css               */import{n as m,l as g}from"./notiflix-loading-aio-ad15ac32.js";m.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.5)",svgColor:"#34387F",clickToClose:!1});const a={comicsFormEl:document.querySelector(".comics-search-form"),cardContainer:document.querySelector(".comics-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container"),headerInput:document.querySelector(".header-input"),headerForm:document.querySelector(".header-form"),heroEl:document.querySelector(".comics-hero")},h=a.comicsFormEl.elements.searchComics,f=a.comicsFormEl.elements.selectFormat,v=a.comicsFormEl.elements.selectOrder,u=a.comicsFormEl.elements.selectDate;let l=null,n=null,i=null,o=null,r=null,w=window.getComputedStyle(a.mainContainer).width;switch(w){case"365px":r=5;break;case"100%":r=5;break;case"1440px":r=16;break;default:r=8;break}console.log(r);const S={totalItems:0,itemsPerPage:r,visiblePages:2,page:1},c=new b(a.paginationEl,S);let y="";for(let t=1939;t<=2023;t++)y+=`<option>${t}</option>`;u.insertAdjacentHTML("beforeend",y);a.headerForm.addEventListener("submit",C);a.headerInput.addEventListener("input",g(C,300));h.addEventListener("input",g(L,300));f.addEventListener("change",F);v.addEventListener("change",M);u.addEventListener("change",H);T();async function T(){m.exports.Loading.standard("Loading...");try{const t=await s.getComics({limit:r,offset:0});console.log(t.results[0].creators.items[0].name),m.exports.Loading.remove(),d(t.results),a.paginationEl.classList.remove("is-hidden"),c.reset(t.total),c.on("beforeMove",async e=>{const{page:E}=e;let $=r*(E-1);try{const p=await s.getComics({limit:r,offset:$,titleStartsWith:l,format:n,orderBy:i,startYear:o});a.cardContainer.innerHTML="",m.exports.Loading.remove(),d(p.results)}catch{location.replace("../404.html")}})}catch{location.replace("../404.html")}}function C(t){t.preventDefault,h.value=t.target.value,L(t),D()}async function L(t){t.preventDefault,a.headerInput.value=t.target.value,a.paginationEl.classList.add("is-hidden"),n=null,i=null,o=null,l=t.target.value;try{const e=await s.getComics({limit:r,titleStartsWith:l,format:n,orderBy:i,startYear:o});if(e.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(e.total),a.cardContainer.innerHTML="",d(e.results),f.value="All",v.value="Title",u.value="All Years",a.paginationEl.classList.remove("is-hidden")}catch{location.replace("../404.html")}}async function F(t){t.preventDefault,t.target.value==="All"?n=null:n=t.target.value;try{const e=await s.getComics({limit:r,titleStartsWith:l,format:n,orderBy:i,startYear:o});c.reset(e.total),a.cardContainer.innerHTML="",d(e.results)}catch{location.replace("../404.html")}}async function M(t){t.preventDefault,i=t.target.value,t.target.value==="Title"?i="title":i="onsaleDate";try{const e=await s.getComics({limit:r,titleStartsWith:l,format:n,orderBy:i,startYear:o});c.reset(e.total),a.cardContainer.innerHTML="",d(e.results)}catch{location.replace("../404.html")}}async function H(t){t.preventDefault,t.target.value==="All Years"?o=null:o=t.target.value;try{const e=await s.getComics({limit:r,titleStartsWith:l,format:n,orderBy:i,startYear:o});if(e.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(e.total),a.cardContainer.innerHTML="",d(e.results)}catch{location.replace("../404.html")}}function d(t){a.cardContainer.insertAdjacentHTML("beforeend",x(t))}function x(t){return console.log(t),t.map(e=>e.creators.available===0?`
    <div class="comics-card" data-id="${e.id}">
      <a class="comics-image-wrap" data-id="${e.id}" href="#">
        <img
          class="comics-card-image"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
          data-id="${e.id}"
        />
        <div class="comics-card-descr" data-id="${e.id}">
          <p data-id="${e.id}" class="comics-card-descr-name">${e.title}</p>
          <p data-id="${e.id}" class="comics-card-descr-author">-</p>
        </div>
      </a>
    </div>`:`
    <div class="comics-card" data-id="${e.id}">
      <a class="comics-image-wrap" data-id="${e.id}" href="#">
        <img
          class="comics-card-image"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
          data-id="${e.id}"
        />
        <div class="comics-card-descr" data-id="${e.id}">
          <p data-id="${e.id}" class="comics-card-descr-name">${e.title}</p>
          <p data-id="${e.id}" class="comics-card-descr-author">${e.creators.items[0].name}</p>
        </div>
      </a>
    </div>`).join("")}function D(){const t=a.heroEl.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}
