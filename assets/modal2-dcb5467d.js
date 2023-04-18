import{a as r}from"./tui-pagination-04cf9b67.js";document.querySelector(".backdrop-two");const $=document.querySelector(".modal-close-btn"),h=document.querySelector(".backdrop-two"),g=document.querySelector(".rc-container"),b=document.querySelector(".spray"),k=document.querySelector(".comics");function y(){h.classList.add("is-concealed")}$.addEventListener("click",y);g.addEventListener("click",f);async function w(e){return await r.getCharactersById({characterId:e})}async function f(e){h.classList.remove("is-concealed");const l=e.target.dataset.id;console.log(e.target),console.log(e.currentTarget);const c=await w(l),n=c[0].comics.items.map(t=>t.resourceURI).map(t=>t.split("/")).map(t=>t[t.length-1]),m=c[0].series.items.map(t=>t.resourceURI).map(t=>t.split("/")).map(t=>t[t.length-1]);for(let t=0;t<3;t+=1){const i=n[t],s=m[t];c[0][`comic${t}`]=await r.getComicById({comicId:i}),c[0][`series${t}`]=await r.getSeriesById({seriesId:s})}const o=[v(c[0]),I(c[0])];b.innerHTML=o[0],k.innerHTML=o[1]}function v(e){const{id:l,thumbnail:c,name:n,description:m,modified:o,comics:t,series0:i,series1:s,series2:a}=e;return`
      <img
        class="modal-main-img"
        src="${c.path}.${c.extension}"
        alt="star"
        class="star-photo"
      />
      <div class="modal-slide">
        <ul class="modal-slide-list">
          <li>
            <img
              class="modal-slide-img"
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}"
              alt="crawl"
              width="80"
              hieght="80"
              data-id="${i[0].id}"
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}"
              alt="talk"
              width="80"
              hieght="80"
              data-id="${s[0].id}"
            />
          </li>
          <li>
            <img
              class="modal-slide-img"
              src="${a[0].thumbnail.path}.${a[0].thumbnail.extension}"
              alt="on-knee"
              width="80"
              hieght="80"
              data-id="${a[0].id}"
            />
          </li>
        </ul>`}function I(e){const{id:l,thumbnail:c,name:n,description:m,modified:o,comics:t,comic0:i,comic1:s,comic2:a}=e,d={month:"long",day:"numeric",year:"numeric"},u=+Date.parse(o),p=new Date(u).toLocaleDateString("en-US",d);return`
      <div class="comics-title-date">
        <h1 class="comics-movie-title">${n}</h1>
        <p class="comics-date">${p}</p>
      </div>
      <p class="comics-description">${m}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list">
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}"
            alt="one"
            data-id="${i[0].id}"
          />
          <h3 class="comics-list-movie">${i[0].title}</h3>
          <p class="comics-movie-hero">${i[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}"
            alt="two"
            data-id="${s[0].id}"
          />
          <h3 class="comics-list-movie">${s[0].title}</h3>
          <p class="comics-movie-hero">${s[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="comics-list-el"
            src="${a[0].thumbnail.path}.${a[0].thumbnail.extension}"
            alt="three"
            data-id="${a[0].id}"
          />
          <h3 class="comics-list-movie">${a[0].title}</h3>
          <p class="comics-movie-hero">${a[0].creators.items[0].name}</p>
        </li>
      </ul>`}
