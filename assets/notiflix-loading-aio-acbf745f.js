import{c as S}from"./modal-4c3d7dba.js";var Y="Expected a function",R=0/0,q="[object Symbol]",J=/^\s+|\s+$/g,K=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,W=/^0o[0-7]+$/i,ee=parseInt,te=typeof S=="object"&&S&&S.Object===Object&&S,ie=typeof self=="object"&&self&&self.Object===Object&&self,ne=te||ie||Function("return this")(),ae=Object.prototype,oe=ae.toString,re=Math.max,se=Math.min,F=function(){return ne.Date.now()};function le(a,n,c){var p,w,r,i,f,d,h=0,A=!1,m=!1,x=!0;if(typeof a!="function")throw new TypeError(Y);n=O(n)||0,H(c)&&(A=!!c.leading,m="maxWait"in c,r=m?re(O(c.maxWait)||0,n):r,x="trailing"in c?!!c.trailing:x);function z(s){var g=p,e=w;return p=w=void 0,h=s,i=a.apply(e,g),i}function j(s){return h=s,f=setTimeout(C,n),A?z(s):i}function L(s){var g=s-d,e=s-h,t=n-g;return m?se(t,r-e):t}function I(s){var g=s-d,e=s-h;return d===void 0||g>=n||g<0||m&&e>=r}function C(){var s=F();if(I(s))return B(s);f=setTimeout(C,L(s))}function B(s){return f=void 0,x&&p?z(s):(p=w=void 0,i)}function D(){f!==void 0&&clearTimeout(f),h=0,p=d=w=f=void 0}function X(){return f===void 0?i:B(F())}function u(){var s=F(),g=I(s);if(p=arguments,w=this,d=s,g){if(f===void 0)return j(d);if(m)return f=setTimeout(C,n),z(d)}return f===void 0&&(f=setTimeout(C,n)),i}return u.cancel=D,u.flush=X,u}function H(a){var n=typeof a;return!!a&&(n=="object"||n=="function")}function fe(a){return!!a&&typeof a=="object"}function ce(a){return typeof a=="symbol"||fe(a)&&oe.call(a)==q}function O(a){if(typeof a=="number")return a;if(ce(a))return R;if(H(a)){var n=typeof a.valueOf=="function"?a.valueOf():a;a=H(n)?n+"":n}if(typeof a!="string")return a===0?a:+a;a=a.replace(J,"");var c=Z.test(a);return c||W.test(a)?ee(a.slice(2),c?2:8):K.test(a)?R:+a}var de=le,me={exports:{}};(function(a){(function(n,c){a.exports=c(n)})(typeof S<"u"?S:typeof window<"u"?window:S,function(n){if(typeof n>"u"&&typeof n.document>"u")return!1;var c="Notiflix",p=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,w='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',r={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},i,f={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},d=function(e){return console.error("%c "+c+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+e+p)},h=function(e){return e||(e="head"),n.document[e]===null?(d(`
Notiflix needs to be appended to the "<`+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1):!0},A=function(e,t){if(!h("head"))return!1;if(e()!==null&&!n.document.getElementById(t)){var o=n.document.createElement("style");o.id=t,o.innerHTML=e(),n.document.head.appendChild(o)}},m=function(){var e={},t=!1,o=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(t=arguments[0],o++);for(var k=function(N){for(var v in N)Object.prototype.hasOwnProperty.call(N,v)&&(t&&Object.prototype.toString.call(N[v])==="[object Object]"?e[v]=m(e[v],N[v]):e[v]=N[v])};o<arguments.length;o++)k(arguments[o]);return e},x=function(e){var t=n.document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},z=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return o},j=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return o},L=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return o},I=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return o},C=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return o},B=function(e,t){e||(e="60px"),t||(t="#32c682");var o='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return o},D=function(e,t,o){e||(e="60px"),t||(t="#f8f8f8"),o||(o="#32c682");var k='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+o+'" stroke="'+o+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return k},X=function(){var e='[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';return e||null},u=function(e,t,o,k,N){if(!h("body"))return!1;i||g.Loading.init({});var v=m(!0,i,{});if(typeof t=="object"&&!Array.isArray(t)||typeof o=="object"&&!Array.isArray(o)){var E={};typeof t=="object"?E=t:typeof o=="object"&&(E=o),i=m(!0,i,E)}var y="";if(typeof t=="string"&&t.length>0&&(y=t),k){y.length>i.messageMaxLength?y=x(y).toString().substring(0,i.messageMaxLength)+"...":y=x(y).toString();var P="";y.length>0&&(P='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+y+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var b="";if(e===r.Standard)b=z(i.svgSize,i.svgColor);else if(e===r.Hourglass)b=j(i.svgSize,i.svgColor);else if(e===r.Circle)b=L(i.svgSize,i.svgColor);else if(e===r.Arrows)b=I(i.svgSize,i.svgColor);else if(e===r.Dots)b=C(i.svgSize,i.svgColor);else if(e===r.Pulse)b=B(i.svgSize,i.svgColor);else if(e===r.Custom&&i.customSvgCode!==null&&i.customSvgUrl===null)b=i.customSvgCode||"";else if(e===r.Custom&&i.customSvgUrl!==null&&i.customSvgCode===null)b='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(e===r.Custom&&(i.customSvgUrl===null||i.customSvgCode===null))return d('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;b=D(i.svgSize,"#f8f8f8","#32c682")}var U=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),V=n.innerWidth,G=U>=V?V-40+"px":U+"px",$='<div style="width:'+G+"; height:"+G+';" class="'+i.className+"-icon"+(y.length>0?" nx-with-message":"")+'">'+b+"</div>",l=n.document.createElement("div");if(l.id=f.ID,l.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),l.style.zIndex=i.zindex,l.style.background=i.backgroundColor,l.style.animationDuration=i.cssAnimationDuration+"ms",l.style.fontFamily='"'+i.fontFamily+'", '+w,l.style.display="flex",l.style.flexWrap="wrap",l.style.flexDirection="column",l.style.alignItems="center",l.style.justifyContent="center",i.rtl&&(l.setAttribute("dir","rtl"),l.classList.add("nx-rtl-on")),l.innerHTML=$+P,!n.document.getElementById(l.id)&&(n.document.body.appendChild(l),i.clickToClose)){var _=n.document.getElementById(l.id);_.addEventListener("click",function(){l.classList.add("nx-remove");var M=setTimeout(function(){l.parentNode!==null&&(l.parentNode.removeChild(l),clearTimeout(M))},i.cssAnimationDuration)})}}else if(n.document.getElementById(f.ID))var T=n.document.getElementById(f.ID),Q=setTimeout(function(){T.classList.add("nx-remove");var M=setTimeout(function(){T.parentNode!==null&&(T.parentNode.removeChild(T),clearTimeout(M))},i.cssAnimationDuration);clearTimeout(Q)},N);i=m(!0,i,v)},s=function(e){typeof e!="string"&&(e="");var t=n.document.getElementById(f.ID);if(t)if(e.length>0){e.length>i.messageMaxLength?e=x(e).substring(0,i.messageMaxLength)+"...":e=x(e);var o=t.getElementsByTagName("p")[0];if(o)o.innerHTML=e;else{var k=n.document.createElement("p");k.id=i.messageID,k.className="nx-loading-message nx-loading-message-new",k.style.color=i.messageColor,k.style.fontSize=i.messageFontSize,k.innerHTML=e,t.appendChild(k)}}else d("Where is the new message?")},g={Loading:{init:function(e){i=m(!0,f,e),A(X,"NotiflixLoadingInternalCSS")},merge:function(e){if(i)i=m(!0,i,e);else return d("You have to initialize the Loading module before call Merge function."),!1},standard:function(e,t){u(r.Standard,e,t,!0,0)},hourglass:function(e,t){u(r.Hourglass,e,t,!0,0)},circle:function(e,t){u(r.Circle,e,t,!0,0)},arrows:function(e,t){u(r.Arrows,e,t,!0,0)},dots:function(e,t){u(r.Dots,e,t,!0,0)},pulse:function(e,t){u(r.Pulse,e,t,!0,0)},custom:function(e,t){u(r.Custom,e,t,!0,0)},notiflix:function(e,t){u(r.Notiflix,e,t,!0,0)},remove:function(e){typeof e!="number"&&(e=0),u(null,null,null,!1,e)},change:function(e){s(e)}}};return typeof n.Notiflix=="object"?m(!0,n.Notiflix,{Loading:g.Loading}):{Loading:g.Loading}})})(me);export{de as l,me as n};