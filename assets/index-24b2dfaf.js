import{a}from"./api-3012a37e.js";const l=()=>Math.round(Math.random()*1561),i=async()=>{let t=[];for(let e=0;e<5;e+=1){const c=await a.getCharacters({limit:1,offset:l()});t.push(c[0])}return console.log(t),u(t)};function u(t){const e=t.map(({thumbnail:c,name:o,description:n})=>`  <li class='rc-item'>
      <img
        src='${c.path}.${c.extension}'
        alt=''
        class='rc-img'
        width='335'
        height='335'
      />
      <ul class='rc-descr-list'>
        <li class='rc-descr-item'>
          <h3 class='rc-descr-title'>${o}</h3>
          <p class='rc-descr-text'>${n}</p>
        </li>
      </ul>
    </li>`).join("");console.log(e)}i();console.log(a.getCharacters({}));console.log(a.getCharacters({nameStartsWith:"Hulk",limit:3}));const r=document.querySelector("#character-input");document.querySelector(".character-list");const s=document.querySelector("#character-output");console.log(r);console.log(s);const m=()=>{r.value?s.textContent=r.value:s.textContent="-----"};nameIn.addEventListener("input",m);
