import{n as g,P as E,d as L,l as b,a as c}from"./tui-pagination-04cf9b67.js";/* empty css               */g.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const o={comicsFormEl:document.querySelector(".comics-search-form"),cardContainer:document.querySelector(".comics-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container")},w=o.comicsFormEl.elements.searchComics,f=o.comicsFormEl.elements.selectFormat,S=o.comicsFormEl.elements.selectOrder,y=o.comicsFormEl.elements.selectDate;console.log(f);let i=null,s=null,l=null,n=null,r=null,v=window.getComputedStyle(o.mainContainer).width;console.log(v);switch(v){case"365px":r=5;break;case"100%":r=5;break;case"1440px":r=16;break;default:r=8;break}console.log(r);const T={totalItems:0,itemsPerPage:r,visiblePages:2,page:1},d=new E(o.paginationEl,T),u=L(y,{dateSelected:new Date,formatter:(t,e,a)=>{const p=e.toLocaleDateString();t.value=p},onSelect:(t,e)=>{C(t,e),console.log(e)}});u.calendarContainer.style.setProperty("background-color","var(--background)");u.calendarContainer.style.setProperty("color","var(--text)");u.calendarContainer.style.setProperty("font-family","Poppins");u.calendarContainer.style.setProperty("font-weight","400");w.addEventListener("input",b(P,300));f.addEventListener("change",F);S.addEventListener("change",M);y.addEventListener("change",C);k();async function k(){console.log(r),g.exports.Loading.standard("Loading...");try{const t=await c.getComics({limit:r,offset:0});console.log(t.results[0].creators.items[0].name),g.exports.Loading.remove(),m(t.results),o.paginationEl.classList.remove("is-hidden"),d.reset(t.total),d.on("beforeMove",async e=>{const{page:a}=e;console.log(a);let p=r*(a-1);try{const h=await c.getComics({limit:r,offset:p,titleStartsWith:i,format:s,orderBy:l,startYear:n});o.cardContainer.innerHTML="",g.exports.Loading.remove(),m(h.results)}catch{console.log("Error!!!!!!!!!!!")}})}catch{console.log("Error!!!!!!!!!!!")}}async function P(t){o.paginationEl.classList.add("is-hidden"),i=t.target.value;try{const e=await c.getComics({limit:r,titleStartsWith:i,format:s,orderBy:l,startYear:n});if(e.results.length===0){o.cardContainer.innerHTML='<span class="comics-error"></span>',console.log("NOTHIG TO RENDER");return}d.reset(e.total),o.cardContainer.innerHTML="",m(e.results),o.paginationEl.classList.remove("is-hidden")}catch{console.log("Error!!!!!!!!!!!")}}async function F(t){console.log(t.target),t.preventDefault,s=t.target.value,console.log(s);try{const e=await c.getComics({limit:r,titleStartsWith:i,format:s,orderBy:l,startYear:n});d.reset(e.total),o.cardContainer.innerHTML="",m(e.results),console.log(e.results)}catch{console.log("Error!!!!!!!!!!!")}}async function M(t){t.preventDefault,l=t.target.value;try{const e=await c.getComics({limit:r,titleStartsWith:i,format:s,orderBy:l,startYear:n});d.reset(e.total),o.cardContainer.innerHTML="",m(e.results),console.log(e.results)}catch{console.log("Error!!!!!!!!!!!")}}async function C(t,e){n=e.getFullYear(),console.log(n);try{const a=await c.getComics({limit:r,titleStartsWith:i,format:s,orderBy:l,startYear:n});if(a.results.length===0){o.cardContainer.innerHTML='<span class="comics-error"></span>',console.log("NOTHIG TO RENDER");return}d.reset(a.total),o.cardContainer.innerHTML="",m(a.results),console.log(a.results)}catch{console.log("Error!!!!!!!!!!!")}}function m(t){o.cardContainer.insertAdjacentHTML("beforeend",x(t))}function x(t){return console.log(t),t.map(e=>e.creators.available===0?`
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
