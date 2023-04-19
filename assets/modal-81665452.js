import{a as l}from"./tui-pagination-278a18fc.js";const k=document.querySelector(".modal-close-icon-modal"),u=document.querySelector(".backdrop-one"),p=document.querySelector(".rm-container");document.querySelector(".images");const v=document.querySelector(".modal-comic-container");document.querySelector(".description");function y(){u.classList.add("display-none")}console.log(p);k.addEventListener("click",y);p.addEventListener("click",C);async function C(c){u.classList.remove("display-none");const s=c.target.dataset.id,a=await l.getComicById({comicId:s}),r=a[0].creators.items.map(t=>t.resourceURI).map(t=>t.split("/")).map(t=>t[t.length-1]),n=a[0].characters.items.map(t=>t.resourceURI).map(t=>t.split("/")).map(t=>t[t.length-1]);a[0].authors=a[0].creators.items.map(({name:t,role:e})=>({name:t,role:e}));for(let t=0;t<r.length;t+=1){const e=r[t],i=await l.getCreatorById({creatorId:e});a[0].authors[t].pic=`${i[0].thumbnail.path}.${i[0].thumbnail.extension}`}for(let t=0;t<n.length;t+=1){const e=n[t],i=await l.getCharactersById({characterId:e});a[0].characters.items[t].pic=`${i[0].thumbnail.path}.${i[0].thumbnail.extension}`,a[0].characters.items[t].id=e}const o=S(a[0]);v.innerHTML=o}function E(c){return c.map(s=>`<div class="aut-container">
      <img class="author-img" src="${s.pic}" alt="${s.name}">
          <div class="aut-desc">
            <p class="author-prof">${s.role}</p>
            <h3 class="author-name">${s.name}</h3>
             </div>
          </div>`).join("")}function I(c){return c.map(s=>`<li class="char-item" data-id="${s.id}">
            <img class="character-img" src="${s.pic}" alt="one" data-id="${s.id}"/>
            <h3 class="character-name" data-id="${s.id}">${s.name}</h3>
          </li>`).join(".")}function w(c){return c.map(s=>`<li>
            <img class="photo-slide-image" src="${s.path}.${s.extension}" alt="crawl" />
          </li>`).join(".")}function S({description:c,thumbnail:s,prices:a,title:r,format:n,modified:o,authors:t,characters:e,images:i,dates:h,pageCount:$}){const d=t.filter(P=>P.role==="writer"),g=d.length!==0?d[0].name:"",m="",f=new Date(h[0].date).getFullYear();return console.log(m),`
  <section class="images">

        <img src="${s.path}.${s.extension}" alt="star" class="star-photo" />

        <ul class="photo-slide">
          ${w(i)}
        </ul>
      </section>

      <section class="description">
        <div class="desc-head">
          <h1 class="title">${r}</h1>
          <div class="head-inf">
            <p class="riska"> <span class="c-author">${g}</span>|<span class="c-date">${m}</span>
            </p>

          </div>
        </div>
        <p class="text-discription">${c}</p>
        <ul class="desc-list">
          <li class="list-item">
            <P class="list-punkt">FORMAT</P>
            <P class="list-inf">${n}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">YEAR RELEASED</P>
            <P class="list-inf">${f}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">PAGES</P>
            <P class="list-inf">${$}</P>
          </li>
          <li class="list-item">
            <P class="list-punkt">PRICE</P>
            <P class="list-inf">$${a[0].price}</P>
          </li>
        </ul>
        <h2 class="title author">Creators</h2>
        <div class="author-inf">
          ${E(t)}
        </div>
        <h2 class="title characters">Characters</h2>
        <ul class="characters-list">
          ${I(e.items)}
        </ul>
      </section>
  `}
