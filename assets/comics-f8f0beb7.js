import{n as d,P as C,l as L,a as i}from"./tui-pagination-f0a6cfe9.js";/* empty css               */d.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const a={comicsFormEl:document.querySelector(".comics-search-form"),cardContainer:document.querySelector(".comics-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container")},E=a.comicsFormEl.elements.searchComics,u=a.comicsFormEl.elements.selectFormat,h=a.comicsFormEl.elements.selectOrder,g=a.comicsFormEl.elements.selectDate;let l=null,s=null,n=null,o=null,r=null,b=window.getComputedStyle(a.mainContainer).width;switch(b){case"365px":r=5;break;case"100%":r=5;break;case"1440px":r=16;break;default:r=8;break}console.log(r);const w={totalItems:0,itemsPerPage:r,visiblePages:2,page:1},c=new C(a.paginationEl,w);let f="";for(let t=1939;t<=2023;t++)f+=`<option>${t}</option>`;g.insertAdjacentHTML("beforeend",f);E.addEventListener("input",L(M,300));u.addEventListener("change",S);h.addEventListener("change",F);g.addEventListener("change",$);T();async function T(){d.exports.Loading.standard("Loading...");try{const t=await i.getComics({limit:r,offset:0});console.log(t.results[0].creators.items[0].name),d.exports.Loading.remove(),m(t.results),a.paginationEl.classList.remove("is-hidden"),c.reset(t.total),c.on("beforeMove",async e=>{const{page:v}=e;let y=r*(v-1);try{const p=await i.getComics({limit:r,offset:y,titleStartsWith:l,format:s,orderBy:n,startYear:o});a.cardContainer.innerHTML="",d.exports.Loading.remove(),m(p.results)}catch{location.replace("../404.html")}})}catch{location.replace("../404.html")}}async function M(t){t.preventDefault,a.paginationEl.classList.add("is-hidden"),console.log(u.value),s=null,n=null,o=null,l=t.target.value;try{const e=await i.getComics({limit:r,titleStartsWith:l,format:s,orderBy:n,startYear:o});if(e.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(e.total),a.cardContainer.innerHTML="",m(e.results),u.value="All",h.value="Title",g.value="All Years",a.paginationEl.classList.remove("is-hidden")}catch{location.replace("../404.html")}}async function S(t){t.preventDefault,t.target.value==="All"?s=null:s=t.target.value;try{const e=await i.getComics({limit:r,titleStartsWith:l,format:s,orderBy:n,startYear:o});c.reset(e.total),a.cardContainer.innerHTML="",m(e.results)}catch{location.replace("../404.html")}}async function F(t){t.preventDefault,n=t.target.value,t.target.value==="Title"?n="title":n="onsaleDate";try{const e=await i.getComics({limit:r,titleStartsWith:l,format:s,orderBy:n,startYear:o});c.reset(e.total),a.cardContainer.innerHTML="",m(e.results)}catch{location.replace("../404.html")}}async function $(t){t.preventDefault,t.target.value==="All Years"?o=null:o=t.target.value;try{const e=await i.getComics({limit:r,titleStartsWith:l,format:s,orderBy:n,startYear:o});if(e.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(e.total),a.cardContainer.innerHTML="",m(e.results)}catch{location.replace("../404.html")}}function m(t){a.cardContainer.insertAdjacentHTML("beforeend",x(t))}function x(t){return console.log(t),t.map(e=>e.creators.available===0?`
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${e.id}" href="#">
        <img
          class="comics-card-image"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${e.title}</p>
          <p class="comics-card-descr-author">-</p>
        </div>
      </a>
    </div>`:`
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${e.id}" href="#">
        <img
          class="comics-card-image"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${e.title}</p>
          <p class="comics-card-descr-author">${e.creators.items[0].name}</p>
        </div>
      </a>
    </div>`).join("")}
