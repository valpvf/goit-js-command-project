import{n as d,P as w,l as g,a as i}from"./tui-pagination-f0a6cfe9.js";/* empty css               */d.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const a={comicsFormEl:document.querySelector(".comics-search-form"),cardContainer:document.querySelector(".comics-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container"),headerInput:document.querySelector(".header-input"),headerForm:document.querySelector(".header-form")};console.log(a.headerInput);const h=a.comicsFormEl.elements.searchComics,f=a.comicsFormEl.elements.selectFormat,v=a.comicsFormEl.elements.selectOrder,u=a.comicsFormEl.elements.selectDate;let l=null,o=null,n=null,s=null,r=null,S=window.getComputedStyle(a.mainContainer).width;switch(S){case"365px":r=5;break;case"100%":r=5;break;case"1440px":r=16;break;default:r=8;break}console.log(r);const T={totalItems:0,itemsPerPage:r,visiblePages:2,page:1},c=new w(a.paginationEl,T);let y="";for(let e=1939;e<=2023;e++)y+=`<option>${e}</option>`;u.insertAdjacentHTML("beforeend",y);a.headerForm.addEventListener("submit",C);a.headerInput.addEventListener("input",g(C,300));h.addEventListener("input",g(L,300));f.addEventListener("change",M);v.addEventListener("change",H);u.addEventListener("change",$);F();async function F(){d.exports.Loading.standard("Loading...");try{const e=await i.getComics({limit:r,offset:0});console.log(e.results[0].creators.items[0].name),d.exports.Loading.remove(),m(e.results),a.paginationEl.classList.remove("is-hidden"),c.reset(e.total),c.on("beforeMove",async t=>{const{page:E}=t;let b=r*(E-1);try{const p=await i.getComics({limit:r,offset:b,titleStartsWith:l,format:o,orderBy:n,startYear:s});a.cardContainer.innerHTML="",d.exports.Loading.remove(),m(p.results)}catch{location.replace("../404.html")}})}catch{location.replace("../404.html")}}function C(e){e.preventDefault,h.value=e.target.value,L(e)}async function L(e){e.preventDefault,a.headerInput.value=e.target.value,a.paginationEl.classList.add("is-hidden"),o=null,n=null,s=null,l=e.target.value;try{const t=await i.getComics({limit:r,titleStartsWith:l,format:o,orderBy:n,startYear:s});if(t.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(t.total),a.cardContainer.innerHTML="",m(t.results),f.value="All",v.value="Title",u.value="All Years",a.paginationEl.classList.remove("is-hidden")}catch{location.replace("../404.html")}}async function M(e){e.preventDefault,e.target.value==="All"?o=null:o=e.target.value;try{const t=await i.getComics({limit:r,titleStartsWith:l,format:o,orderBy:n,startYear:s});c.reset(t.total),a.cardContainer.innerHTML="",m(t.results)}catch{location.replace("../404.html")}}async function H(e){e.preventDefault,n=e.target.value,e.target.value==="Title"?n="title":n="onsaleDate";try{const t=await i.getComics({limit:r,titleStartsWith:l,format:o,orderBy:n,startYear:s});c.reset(t.total),a.cardContainer.innerHTML="",m(t.results)}catch{location.replace("../404.html")}}async function $(e){e.preventDefault,e.target.value==="All Years"?s=null:s=e.target.value;try{const t=await i.getComics({limit:r,titleStartsWith:l,format:o,orderBy:n,startYear:s});if(t.results.length===0){a.cardContainer.innerHTML='<span class="comics-error"></span>';return}c.reset(t.total),a.cardContainer.innerHTML="",m(t.results)}catch{location.replace("../404.html")}}function m(e){a.cardContainer.insertAdjacentHTML("beforeend",x(e))}function x(e){return console.log(e),e.map(t=>t.creators.available===0?`
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${t.id}" href="#">
        <img
          class="comics-card-image"
          src= "${t.thumbnail.path}/portrait_uncanny.${t.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${t.title}</p>
          <p class="comics-card-descr-author">-</p>
        </div>
      </a>
    </div>`:`
    <div class="comics-card">
      <a class="comics-image-wrap" data-id="${t.id}" href="#">
        <img
          class="comics-card-image"
          src= "${t.thumbnail.path}/portrait_uncanny.${t.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="comics-card-descr">
          <p class="comics-card-descr-name">${t.title}</p>
          <p class="comics-card-descr-author">${t.creators.items[0].name}</p>
        </div>
      </a>
    </div>`).join("")}
