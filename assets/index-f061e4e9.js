import{a}from"./api-6da0aff2.js";const l=document.querySelector(".rc-list"),i=()=>Math.round(Math.random()*1561),u=async()=>{let e=[];for(let s=0;s<5;s+=1){const t=await a.getCharacters({limit:1,offset:i()});e.push(t[0])}return m(e)};function m(e){const s=e.map(({id:t,thumbnail:c,name:o,description:n})=>`  <li class='rc-item'>
      <img data-set="${t}"
        src='${c.path}.${c.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 data-set="${t}" class='rc-descr-title'>${o}</h3>
          <p  data-set="${t}"class='rc-descr-text'>${n}</p>
        </li>
      </ul>
    </li>`).join("");l.insertAdjacentHTML(s)}u();let r="";const d=document.querySelector(".header-form");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");const h=async e=>{e.preventDefault();const{target:s}=e;if(console.log(s.elements.searchQuery.value),r=s.elements.searchQuery.value,console.log(r),r.trim()==""){console.log("Please specify your search query.");return}try{const t=await a.getCharacters({nameStartsWith:r});console.log(t)}catch{console.log("Something went wrong. Please try again later.");return}};d.addEventListener("submit",h);const g=document.querySelector(".lastcomics-url-container");async function f(){const e=await a.getComics({limit:3,dateDescriptor:"lastWeek"});p(y(e.results))}f();function y(e){return e.map(({thumbnail:{path:s,extension:t},title:c,creators:o}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${s}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${c}</h3>
    </a></div>
     `).join("")}function p(e){g.insertAdjacentHTML("beforeend",e)}
