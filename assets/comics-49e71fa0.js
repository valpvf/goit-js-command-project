import{a}from"./api-e0a018cc.js";/* empty css               */import{n as p,P as C,d as v,l as L}from"./tui-pagination-95543c64.js";p.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const o={comicsFormEl:document.querySelector(".comics-search-form"),cardContainer:document.querySelector(".comics-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container")},b=o.comicsFormEl.elements.searchComics,w=o.comicsFormEl.elements.selectFormat,S=o.comicsFormEl.elements.selectFormat,f=o.comicsFormEl.elements.selectDate;let s=null,k=null,g=null,c=null,h=null,n=null,y=window.getComputedStyle(o.mainContainer).width;console.log(y);switch(y){case"365px":n=5;break;case"100%":n=5;break;case"1440px":n=16;break;default:n=8;break}console.log(n);const P={totalItems:0,itemsPerPage:n,visiblePages:5,page:1},i=new C(o.paginationEl,P),m=v(f,{dateSelected:new Date,formatter:(t,e,r)=>{const d=e.toLocaleDateString();t.value=d},onSelect:(t,e)=>{E(t,e),console.log(e)}});m.calendarContainer.style.setProperty("background-color","var(--background)");m.calendarContainer.style.setProperty("color","var(--text)");m.calendarContainer.style.setProperty("font-family","Poppins");m.calendarContainer.style.setProperty("font-weight","400");b.addEventListener("input",L(T,300));w.addEventListener("change",M);S.addEventListener("change",H);f.addEventListener("change",E);F();async function F(){console.log(n);try{const t=await a.getComics({limit:n,offset:0});if(console.log(t.results[0].creators.items[0].name),l(t.results),o.paginationEl.classList.remove("is-hidden"),t.total<=n)return;i.reset(t.total),i.on("beforeMove",async e=>{const{page:r}=e;console.log(r);let d=n*(r-1);try{const u=await a.getComics({limit:n,offset:d,titleStartsWith:s,format:k,orderBy:g,startYear:c});o.cardContainer.innerHTML="",p.exports.Loading.remove(),l(u.results)}catch{console.log("Error!!!!!!!!!!!")}})}catch{console.log("Error!!!!!!!!!!!")}}async function T(t){o.paginationEl.classList.add("is-hidden"),s=t.target.value;try{const e=await a.getAllCharacters({nameStartsWith:s,orderBy:g,comics:h,modifiedSince:c,limit:n});if(e.results.length===0){o.cardContainer.innerHTML='<span class="comics-error"></span>',console.log("NOTHIG TO RENDER");return}i.reset(e.total),o.cardContainer.innerHTML="",l(e.results),o.paginationEl.classList.remove("is-hidden")}catch{console.log("Error!!!!!!!!!!!")}}function M(){}function H(){}async function E(t,e){c=e;try{const r=await a.getAllCharacters({orderBy:g,nameStartsWith:s,limit:n,comics:h,modifiedSince:c});if(r.results.length===0){o.cardContainer.innerHTML='<span class="comics-error"></span>',console.log("NOTHIG TO RENDER");return}i.reset(r.total),o.cardContainer.innerHTML="",l(r.results),console.log(r.results)}catch{console.log("Error!!!!!!!!!!!")}}function l(t){o.cardContainer.insertAdjacentHTML("beforeend",x(t))}function x(t){return console.log(t),t.map(e=>(console.log(e.id),`
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
    </div>`)).join("")}
