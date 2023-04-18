import{n as o,P as H,l as S,a as i}from"./tui-pagination-f0a6cfe9.js";/* empty css               */import{d as M}from"./modal2-cc84db9a.js";o.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const t={charFormEl:document.querySelector(".char-search-form"),cardContainer:document.querySelector(".char-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container"),headerInput:document.querySelector(".header-input"),headerForm:document.querySelector(".header-form")},x=t.charFormEl.elements.searchComics,C=t.charFormEl.elements.searchName,k=t.charFormEl.elements.select,P=t.charFormEl.elements.searchDate;let v=null,s=null,c=null,d=null,m=null,l=[],n=null,y=1,b=window.getComputedStyle(t.mainContainer).width;console.log(b);switch(b){case"365px":n=5;break;case"100%":n=5;break;case"1440px":n=16;break;default:n=8;break}console.log(n);const D={totalItems:0,itemsPerPage:n,visiblePages:2,page:1},u=new H(t.paginationEl,D),f=M(P,{dateSelected:new Date,formatter:(a,e,r)=>{const p=e.toLocaleDateString();a.value=p},onSelect:(a,e)=>{A(a,e)}});f.calendarContainer.style.setProperty("background-color","var(--background)");f.calendarContainer.style.setProperty("color","var(--text)");f.calendarContainer.style.setProperty("font-family","Poppins");f.calendarContainer.style.setProperty("font-weight","400");t.headerForm.addEventListener("submit",w);t.headerInput.addEventListener("input",S(w,300));t.charFormEl.addEventListener("submit",F);C.addEventListener("input",S(T,300));k.addEventListener("change",N);I();async function I(){try{const a=await i.getAllCharacters({limit:n,offset:0});if(o.exports.Loading.remove(),h(a.results),t.paginationEl.classList.remove("is-hidden"),a.total<n)return;u.reset(a.total),u.on("beforeMove",async e=>{const{page:r}=e;console.log(r);let p=n*(r-1);try{const g=await i.getAllCharacters({offset:p,nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d});t.cardContainer.innerHTML="",o.exports.Loading.remove(),h(g.results)}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}})}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function F(a){t.paginationEl.classList.add("is-hidden"),o.exports.Loading.standard("Loading..."),a.preventDefault(),t.headerInput.value="",C.value=null,s=null,c=null,d=null,l=[],v=x.value;try{const e=await i.getComics({title:v,limit:100,offset:0});if(e.total===0){o.exports.Loading.remove(),t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}y=Math.ceil(e.total/100),console.log(y);for(let r=1;r<=y;r++){const g=100*(r-1);try{const E=await i.getComics({title:v,limit:100,offset:g});l.length<10&&E.results.map(L=>{if(L.characters.available&&l.length<10)l.push(L.id);else return})}catch{o.exports.Loading.remove(),location.replace("../404.html"),console.log("Error!!!!!!")}}if(l.length>0){m=l.join(", ");try{console.log(l.length);const r=await i.getAllCharacters({nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d,limit:n});r.results.length===0&&(t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER")),t.cardContainer.innerHTML="",u.reset(r.total),h(r.results),t.paginationEl.classList.remove("is-hidden"),o.exports.Loading.remove()}catch{location.replace("../404.html")}}}catch{o.exports.Loading.remove(),location.replace("../404.html")}}function w(a){a.preventDefault,C.value=a.target.value,T(a)}async function T(a){t.paginationEl.classList.add("is-hidden"),s=a.target.value,t.headerInput.value=a.target.value;try{const e=await i.getAllCharacters({nameStartsWith:s,orderBy:c,comics:m,modifiedSince:d,limit:n});if(e.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}u.reset(e.total),t.cardContainer.innerHTML="",h(e.results),t.paginationEl.classList.remove("is-hidden")}catch{location.replace("../404.html")}}async function N(a){a.preventDefault,c=a.target.value.toLowerCase();try{const e=await i.getAllCharacters({orderBy:c,limit:n,nameStartsWith:s,comics:m,modifiedSince:d});u.reset(e.total),t.cardContainer.innerHTML="",h(e.results),console.log(e.results)}catch{location.replace("../404.html"),console.log("Error!!!!!!!!!!!")}}async function A(a,e){d=e;try{const r=await i.getAllCharacters({orderBy:c,nameStartsWith:s,limit:n,comics:m,modifiedSince:d});if(r.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>';return}u.reset(r.total),t.cardContainer.innerHTML="",h(r.results)}catch{location.replace("../404.html")}}function h(a){t.cardContainer.insertAdjacentHTML("beforeend",O(a))}function O(a){return a.map(e=>`
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
