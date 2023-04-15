import{a as s}from"./api-3012a37e.js";const n=()=>Math.round(Math.random()*1561),u=async()=>{let e=[];for(let t=0;t<5;t+=1){const r=await s.getCharacters({limit:1,offset:n()});e.push(r[0])}return console.log(e),i(e)};function i(e){const t=e.map(({thumbnail:r,name:a,description:l})=>`  <li class='rc-item'>
      <img
        src='${r.path}.${r.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 class='rc-descr-title'>${a}</h3>
          <p class='rc-descr-text'>${l}</p>
        </li>
      </ul>
    </li>`).join("");console.log(t)}u();console.log(s.getCharacters({}));let o="";console.log(s.getCharacters({nameStartsWith:"Hulk",limit:3}));const c=document.querySelector(".header-form"),h=document.querySelector(".header-output"),m=document.querySelector(".header-icon");document.querySelector(".header-btn");console.log(c);console.log(h);console.log(m);const g=async e=>{e.preventDefault();const{target:t}=e;if(console.log(t.elements.searchQuery.value),o=t.elements.searchQuery.value,console.log(o),o.trim()==""){console.log("Please specify your search query.");return}try{const r=await s.getCharacters({nameStartsWith:o});console.log(r)}catch{console.log("Something went wrong. Please try again later.");return}};c.addEventListener("submit",g);
