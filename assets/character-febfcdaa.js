import{n,P as b,d as w,l as H,a as l}from"./tui-pagination-9efba524.js";/* empty css               */import"./modal2-594a9f10.js";n.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const t={charFormEl:document.querySelector(".char-search-form"),cardContainer:document.querySelector(".char-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container")},L=t.charFormEl.elements.searchComics;console.log(L);const S=t.charFormEl.elements.searchName,M=t.charFormEl.elements.select,x=t.charFormEl.elements.searchDate;let E=null,s=null,c=null,d=null,m=null,i=[],o=null,y=1,T=window.getComputedStyle(t.mainContainer).width;console.log(T);switch(T){case"365px":o=5;break;case"100%":o=5;break;case"1440px":o=16;break;default:o=8;break}console.log(o);const k={totalItems:0,itemsPerPage:o,visiblePages:2,page:1},g=new b(t.paginationEl,k),f=w(x,{dateSelected:new Date,formatter:(r,e,a)=>{const u=e.toLocaleDateString();r.value=u},onSelect:(r,e)=>{R(r,e),console.log(e)}});f.calendarContainer.style.setProperty("background-color","var(--background)");f.calendarContainer.style.setProperty("color","var(--text)");f.calendarContainer.style.setProperty("font-family","Poppins");f.calendarContainer.style.setProperty("font-weight","400");t.charFormEl.addEventListener("submit",D);S.addEventListener("input",H(N,300));M.addEventListener("change",O);P();async function P(){console.log(o);try{const r=await l.getAllCharacters({limit:o,offset:0});if(n.exports.Loading.remove(),h(r.results),t.paginationEl.classList.remove("is-hidden"),r.total<o)return;g.reset(r.total),g.on("beforeMove",async e=>{const{page:a}=e;console.log(a);let u=o*(a-1);try{const p=await l.getAllCharacters({limit:o,offset:u,nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d});t.cardContainer.innerHTML="",n.exports.Loading.remove(),h(p.results)}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}})}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function D(r){t.paginationEl.classList.add("is-hidden"),n.exports.Loading.standard("Loading..."),r.preventDefault(),S.value=null,s=null,c=null,d=null,i=[],E=L.value;try{const e=await l.getComics({title:E,limit:100,offset:0});if(e.total===0){n.exports.Loading.remove(),t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}y=Math.ceil(e.total/100),console.log(y);for(let a=1;a<=y;a++){const p=100*(a-1);try{const C=await l.getComics({title:E,limit:100,offset:p});i.length<10&&C.results.map(v=>{if(v.characters.available&&i.length<10)i.push(v.id);else return})}catch{n.exports.Loading.remove(),location.replace("../404.html"),console.log("Error!!!!!!")}}if(i.length>0){m=i.join(", ");try{console.log(i.length);const a=await l.getAllCharacters({nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d,limit:o});console.log(a),a.results.length===0&&(t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER")),t.cardContainer.innerHTML="",g.reset(a.total),h(a.results),t.paginationEl.classList.remove("is-hidden"),n.exports.Loading.remove()}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}}catch{n.exports.Loading.remove(),location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function N(r){t.paginationEl.classList.add("is-hidden"),s=r.target.value;try{const e=await l.getAllCharacters({nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d,limit:o});if(e.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}g.reset(e.total),t.cardContainer.innerHTML="",h(e.results),t.paginationEl.classList.remove("is-hidden")}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function O(r){r.preventDefault,c=r.target.value;try{const e=await l.getAllCharacters({orderBy:c,limit:o,nameStartsWith:s,comics:m,modifiedSince:d});g.reset(e.total),t.cardContainer.innerHTML="",h(e.results),console.log(e.results)}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function R(r,e){d=e;try{const a=await l.getAllCharacters({orderBy:c,nameStartsWith:s,limit:o,comics:m,modifiedSince:d});if(a.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}g.reset(a.total),t.cardContainer.innerHTML="",h(a.results),console.log(a.results)}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}function h(r){t.cardContainer.insertAdjacentHTML("beforeend",A(r))}function A(r){return r.map(e=>`
    <div class="char-card">
      <a class="char-image-wrap" data-id="${e.id}" href="#">
        <img
          class="char-card-image"
          data-id="${e.id}"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="char-card-descr" data-id="${e.id}">
          <p class="char-card-descr-name" data-id="${e.id}">${e.name}</p>
        </div>
      </a>
    </div>`).join("")}
