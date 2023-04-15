(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ae=[{publickey:"b7033e2ec32dc004fef1d6b078a0e881",privatekey:"e84d5f752e66a362d2f542b2ec296e48a27fb2a0"},{publickey:"caba337208b47569b1f84f369984c4a2",privatekey:"b496be0246e5deafeb43afa6abcf6a04e1453022"},{publickey:"2d66dc4d241b1e725a65709fbddb3fff",privatekey:"7bcdbaf715b35f3ca9f820b168f7904a5457f407"},{publickey:"2948b8e0caf400a2826fafe939e0b4f9",privatekey:"cd4405cc83dbf1a338db18b1461414480be3621f"}],Oe=ae[Math.round(Math.random()*(ae.length-1))];var Re={exports:{}},ge={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(n,r){return n<<r|n>>>32-r},rotr:function(n,r){return n<<32-r|n>>>r},endian:function(n){if(n.constructor==Number)return t.rotl(n,8)&16711935|t.rotl(n,24)&4278255360;for(var r=0;r<n.length;r++)n[r]=t.endian(n[r]);return n},randomBytes:function(n){for(var r=[];n>0;n--)r.push(Math.floor(Math.random()*256));return r},bytesToWords:function(n){for(var r=[],o=0,s=0;o<n.length;o++,s+=8)r[s>>>5]|=n[o]<<24-s%32;return r},wordsToBytes:function(n){for(var r=[],o=0;o<n.length*32;o+=8)r.push(n[o>>>5]>>>24-o%32&255);return r},bytesToHex:function(n){for(var r=[],o=0;o<n.length;o++)r.push((n[o]>>>4).toString(16)),r.push((n[o]&15).toString(16));return r.join("")},hexToBytes:function(n){for(var r=[],o=0;o<n.length;o+=2)r.push(parseInt(n.substr(o,2),16));return r},bytesToBase64:function(n){for(var r=[],o=0;o<n.length;o+=3)for(var s=n[o]<<16|n[o+1]<<8|n[o+2],i=0;i<4;i++)o*8+i*6<=n.length*8?r.push(e.charAt(s>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(n){n=n.replace(/[^A-Z0-9+\/]/ig,"");for(var r=[],o=0,s=0;o<n.length;s=++o%4)s!=0&&r.push((e.indexOf(n.charAt(o-1))&Math.pow(2,-2*s+8)-1)<<s*2|e.indexOf(n.charAt(o))>>>6-s*2);return r}};ge.exports=t})();var G={utf8:{stringToBytes:function(e){return G.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(G.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n)&255);return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}},ce=G;var Ve=function(e){return e!=null&&(Ae(e)||We(e)||!!e._isBuffer)};function Ae(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function We(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Ae(e.slice(0,0))}(function(){var e=ge.exports,t=ce.utf8,n=Ve,r=ce.bin,o=function(s,i){s.constructor==String?i&&i.encoding==="binary"?s=r.stringToBytes(s):s=t.stringToBytes(s):n(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var c=e.bytesToWords(s),m=s.length*8,a=1732584193,u=-271733879,l=-1732584194,d=271733878,p=0;p<c.length;p++)c[p]=(c[p]<<8|c[p]>>>24)&16711935|(c[p]<<24|c[p]>>>8)&4278255360;c[m>>>5]|=128<<m%32,c[(m+64>>>9<<4)+14]=m;for(var h=o._ff,y=o._gg,b=o._hh,w=o._ii,p=0;p<c.length;p+=16){var A=a,N=u,z=l,Je=d;a=h(a,u,l,d,c[p+0],7,-680876936),d=h(d,a,u,l,c[p+1],12,-389564586),l=h(l,d,a,u,c[p+2],17,606105819),u=h(u,l,d,a,c[p+3],22,-1044525330),a=h(a,u,l,d,c[p+4],7,-176418897),d=h(d,a,u,l,c[p+5],12,1200080426),l=h(l,d,a,u,c[p+6],17,-1473231341),u=h(u,l,d,a,c[p+7],22,-45705983),a=h(a,u,l,d,c[p+8],7,1770035416),d=h(d,a,u,l,c[p+9],12,-1958414417),l=h(l,d,a,u,c[p+10],17,-42063),u=h(u,l,d,a,c[p+11],22,-1990404162),a=h(a,u,l,d,c[p+12],7,1804603682),d=h(d,a,u,l,c[p+13],12,-40341101),l=h(l,d,a,u,c[p+14],17,-1502002290),u=h(u,l,d,a,c[p+15],22,1236535329),a=y(a,u,l,d,c[p+1],5,-165796510),d=y(d,a,u,l,c[p+6],9,-1069501632),l=y(l,d,a,u,c[p+11],14,643717713),u=y(u,l,d,a,c[p+0],20,-373897302),a=y(a,u,l,d,c[p+5],5,-701558691),d=y(d,a,u,l,c[p+10],9,38016083),l=y(l,d,a,u,c[p+15],14,-660478335),u=y(u,l,d,a,c[p+4],20,-405537848),a=y(a,u,l,d,c[p+9],5,568446438),d=y(d,a,u,l,c[p+14],9,-1019803690),l=y(l,d,a,u,c[p+3],14,-187363961),u=y(u,l,d,a,c[p+8],20,1163531501),a=y(a,u,l,d,c[p+13],5,-1444681467),d=y(d,a,u,l,c[p+2],9,-51403784),l=y(l,d,a,u,c[p+7],14,1735328473),u=y(u,l,d,a,c[p+12],20,-1926607734),a=b(a,u,l,d,c[p+5],4,-378558),d=b(d,a,u,l,c[p+8],11,-2022574463),l=b(l,d,a,u,c[p+11],16,1839030562),u=b(u,l,d,a,c[p+14],23,-35309556),a=b(a,u,l,d,c[p+1],4,-1530992060),d=b(d,a,u,l,c[p+4],11,1272893353),l=b(l,d,a,u,c[p+7],16,-155497632),u=b(u,l,d,a,c[p+10],23,-1094730640),a=b(a,u,l,d,c[p+13],4,681279174),d=b(d,a,u,l,c[p+0],11,-358537222),l=b(l,d,a,u,c[p+3],16,-722521979),u=b(u,l,d,a,c[p+6],23,76029189),a=b(a,u,l,d,c[p+9],4,-640364487),d=b(d,a,u,l,c[p+12],11,-421815835),l=b(l,d,a,u,c[p+15],16,530742520),u=b(u,l,d,a,c[p+2],23,-995338651),a=w(a,u,l,d,c[p+0],6,-198630844),d=w(d,a,u,l,c[p+7],10,1126891415),l=w(l,d,a,u,c[p+14],15,-1416354905),u=w(u,l,d,a,c[p+5],21,-57434055),a=w(a,u,l,d,c[p+12],6,1700485571),d=w(d,a,u,l,c[p+3],10,-1894986606),l=w(l,d,a,u,c[p+10],15,-1051523),u=w(u,l,d,a,c[p+1],21,-2054922799),a=w(a,u,l,d,c[p+8],6,1873313359),d=w(d,a,u,l,c[p+15],10,-30611744),l=w(l,d,a,u,c[p+6],15,-1560198380),u=w(u,l,d,a,c[p+13],21,1309151649),a=w(a,u,l,d,c[p+4],6,-145523070),d=w(d,a,u,l,c[p+11],10,-1120210379),l=w(l,d,a,u,c[p+2],15,718787259),u=w(u,l,d,a,c[p+9],21,-343485551),a=a+A>>>0,u=u+N>>>0,l=l+z>>>0,d=d+Je>>>0}return e.endian([a,u,l,d])};o._ff=function(s,i,c,m,a,u,l){var d=s+(i&c|~i&m)+(a>>>0)+l;return(d<<u|d>>>32-u)+i},o._gg=function(s,i,c,m,a,u,l){var d=s+(i&m|c&~m)+(a>>>0)+l;return(d<<u|d>>>32-u)+i},o._hh=function(s,i,c,m,a,u,l){var d=s+(i^c^m)+(a>>>0)+l;return(d<<u|d>>>32-u)+i},o._ii=function(s,i,c,m,a,u,l){var d=s+(c^(i|~m))+(a>>>0)+l;return(d<<u|d>>>32-u)+i},o._blocksize=16,o._digestsize=16,Re.exports=function(s,i){if(s==null)throw new Error("Illegal argument "+s);var c=e.wordsToBytes(o(s,i));return i&&i.asBytes?c:i&&i.asString?r.bytesToString(c):e.bytesToHex(c)}})();const Ke=({timeStamp:e,PRIVATE_KEY:t,PUBLIC_KEY:n})=>Re.exports(`${e}${t}${n}`);function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:xe}=Object.prototype,{getPrototypeOf:ee}=Object,te=(e=>t=>{const n=xe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>te(t)===e),M=e=>t=>typeof t===e,{isArray:P}=Array,B=M("undefined");function Ge(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=g("ArrayBuffer");function Xe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const Qe=M("string"),x=M("function"),Fe=M("number"),ne=e=>e!==null&&typeof e=="object",Ye=e=>e===!0||e===!1,U=e=>{if(te(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ze=g("Date"),et=g("File"),tt=g("Blob"),nt=g("FileList"),rt=e=>ne(e)&&x(e.pipe),ot=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||xe.call(e)===t||x(e.toString)&&e.toString()===t)},st=g("URLSearchParams"),it=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Be=e=>!B(e)&&e!==Ce;function X(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,o)=>{const s=e&&Pe(t,o)||o;U(t[s])&&U(r)?t[s]=X(t[s],r):U(r)?t[s]=X({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&_(arguments[r],n);return t}const at=(e,t,n,{allOwnKeys:r}={})=>(_(t,(o,s)=>{n&&x(o)?e[s]=Te(o,n):e[s]=o},{allOwnKeys:r}),e),ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ut=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lt=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yt=g("HTMLFormElement"),Et=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wt=g("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},bt=e=>{_e(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Ot=()=>{},Rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",le="0123456789",Le={DIGIT:le,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+le},gt=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function At(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,o)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return _(r,(i,c)=>{const m=n(i,o+1);!B(m)&&(s[c]=m)}),t[o]=void 0,s}}return r};return n(e,0)},f={isArray:P,isArrayBuffer:Ne,isBuffer:Ge,isFormData:ot,isArrayBufferView:Xe,isString:Qe,isNumber:Fe,isBoolean:Ye,isObject:ne,isPlainObject:U,isUndefined:B,isDate:Ze,isFile:et,isBlob:tt,isRegExp:wt,isFunction:x,isStream:rt,isURLSearchParams:st,isTypedArray:pt,isFileList:nt,forEach:_,merge:X,extend:at,trim:it,stripBOM:ct,inherits:ut,toFlatObject:lt,kindOf:te,kindOfTest:g,endsWith:ft,toArray:dt,forEachEntry:ht,matchAll:mt,isHTMLForm:yt,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:_e,freezeMethods:bt,toObjectSet:St,toCamelCase:Et,noop:Ot,toFiniteNumber:Rt,findKey:Pe,global:Ce,isContextDefined:Be,ALPHABET:Le,generateString:gt,isSpecCompliantForm:At,toJSONObject:Tt};function E(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}f.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=E.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(E,De);Object.defineProperty(Ue,"isAxiosError",{value:!0});E.from=(e,t,n,r,o,s)=>{const i=Object.create(Ue);return f.toFlatObject(e,i,function(m){return m!==Error.prototype},c=>c!=="isAxiosError"),E.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const xt=null;function Q(e){return f.isPlainObject(e)||f.isArray(e)}function ke(e){return f.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(o,s){return o=ke(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Nt(e){return f.isArray(e)&&!e.some(Q)}const Ft=f.toFlatObject(f,{},null,function(t){return/^is[A-Z]/.test(t)});function j(e,t,n){if(!f.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!f.isUndefined(b[y])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(t);if(!f.isFunction(o))throw new TypeError("visitor must be a function");function a(h){if(h===null)return"";if(f.isDate(h))return h.toISOString();if(!m&&f.isBlob(h))throw new E("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(h)||f.isTypedArray(h)?m&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,y,b){let w=h;if(h&&!b&&typeof h=="object"){if(f.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(f.isArray(h)&&Nt(h)||(f.isFileList(h)||f.endsWith(y,"[]"))&&(w=f.toArray(h)))return y=ke(y),w.forEach(function(N,z){!(f.isUndefined(N)||N===null)&&t.append(i===!0?fe([y],z,s):i===null?y:y+"[]",a(N))}),!1}return Q(h)?!0:(t.append(fe(b,y,s),a(h)),!1)}const l=[],d=Object.assign(Ft,{defaultVisitor:u,convertValue:a,isVisitable:Q});function p(h,y){if(!f.isUndefined(h)){if(l.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));l.push(h),f.forEach(h,function(w,A){(!(f.isUndefined(w)||w===null)&&o.call(t,w,f.isString(A)?A.trim():A,y,d))===!0&&p(w,y?y.concat(A):[A])}),l.pop()}}if(!f.isObject(e))throw new TypeError("data must be an object");return p(e),t}function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&j(e,this,t)}const Ie=re.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,de)}:de;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function He(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=f.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){f.forEach(this.handlers,function(r){r!==null&&t(r)})}}const pe=Ct,Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bt=typeof URLSearchParams<"u"?URLSearchParams:re,_t=typeof FormData<"u"?FormData:null,Lt=typeof Blob<"u"?Blob:null,Ut=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Dt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Bt,FormData:_t,Blob:Lt},isStandardBrowserEnv:Ut,isStandardBrowserWebWorkerEnv:Dt,protocols:["http","https","file","blob","url","data"]};function kt(e,t){return j(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&f.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function It(e){return f.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ht(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function je(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),m=s>=n.length;return i=!i&&f.isArray(o)?o.length:i,m?(f.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!f.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&f.isArray(o[i])&&(o[i]=Ht(o[i])),!c)}if(f.isFormData(e)&&f.isFunction(e.entries)){const n={};return f.forEachEntry(e,(r,o)=>{t(It(r),o,n,0)}),n}return null}const Mt={"Content-Type":void 0};function jt(e,t,n){if(f.isString(e))try{return(t||JSON.parse)(e),f.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const v={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=f.isObject(t);if(s&&f.isHTMLForm(t)&&(t=new FormData(t)),f.isFormData(t))return o&&o?JSON.stringify(je(t)):t;if(f.isArrayBuffer(t)||f.isBuffer(t)||f.isStream(t)||f.isFile(t)||f.isBlob(t))return t;if(f.isArrayBufferView(t))return t.buffer;if(f.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kt(t,this.formSerializer).toString();if((c=f.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return j(c?{"files[]":t}:t,m&&new m,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),jt(t)):t}],transformResponse:[function(t){const n=this.transitional||v.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&f.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(t){v.headers[t]={}});f.forEach(["post","put","patch"],function(t){v.headers[t]=f.merge(Mt)});const oe=v,vt=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function D(e){return e===!1||e==null?e:f.isArray(e)?e.map(D):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function J(e,t,n,r,o){if(f.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!f.isString(t)){if(f.isString(r))return t.indexOf(r)!==-1;if(f.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=f.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class q{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,m,a){const u=C(m);if(!u)throw new Error("header name must be a non-empty string");const l=f.findKey(o,u);(!l||o[l]===void 0||a===!0||a===void 0&&o[l]!==!1)&&(o[l||m]=D(c))}const i=(c,m)=>f.forEach(c,(a,u)=>s(a,u,m));return f.isPlainObject(t)||t instanceof this.constructor?i(t,n):f.isString(t)&&(t=t.trim())&&!$t(t)?i(qt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=C(t),t){const r=f.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return zt(o);if(f.isFunction(n))return n.call(this,o,r);if(f.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=f.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||J(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=C(i),i){const c=f.findKey(r,i);c&&(!n||J(r,r[c],c,n))&&(delete r[c],o=!0)}}return f.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||J(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return f.forEach(this,(o,s)=>{const i=f.findKey(r,s);if(i){n[i]=D(o),delete n[s];return}const c=t?Jt(s):String(s).trim();c!==s&&delete n[s],n[c]=D(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return f.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&f.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=C(i);r[c]||(Vt(o,i),r[c]=!0)}return f.isArray(t)?t.forEach(s):s(t),this}}q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.freezeMethods(q.prototype);f.freezeMethods(q);const R=q;function V(e,t){const n=this||oe,r=t||n,o=R.from(r.headers);let s=r.data;return f.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ve(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}f.inherits(L,E,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Kt=O.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const m=[];m.push(n+"="+encodeURIComponent(r)),f.isNumber(o)&&m.push("expires="+new Date(o).toGMTString()),f.isString(s)&&m.push("path="+s),f.isString(i)&&m.push("domain="+i),c===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Gt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!Gt(t)?Xt(e,t):t}const Qt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=f.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Yt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(m){const a=Date.now(),u=r[s];i||(i=a),n[o]=m,r[o]=a;let l=s,d=0;for(;l!==o;)d+=n[l++],l=l%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),a-i<t)return;const p=u&&a-u;return p?Math.round(d*1e3/p):void 0}}function me(e,t){let n=0;const r=Zt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,m=r(c),a=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:m||void 0,estimated:m&&i&&a?(i-s)/m:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const en=typeof XMLHttpRequest<"u",tn=en&&function(e){return new Promise(function(n,r){let o=e.data;const s=R.from(e.headers).normalize(),i=e.responseType;let c;function m(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}f.isFormData(o)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let a=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+h))}const u=qe(e.baseURL,e.url);a.open(e.method.toUpperCase(),He(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function l(){if(!a)return;const p=R.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:p,config:e,request:a};Wt(function(w){n(w),m()},function(w){r(w),m()},y),a=null}if("onloadend"in a?a.onloadend=l:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(l)},a.onabort=function(){a&&(r(new E("Request aborted",E.ECONNABORTED,e,a)),a=null)},a.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Me;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new E(h,y.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,a)),a=null},O.isStandardBrowserEnv){const p=(e.withCredentials||Qt(u))&&e.xsrfCookieName&&Kt.read(e.xsrfCookieName);p&&s.set(e.xsrfHeaderName,p)}o===void 0&&s.setContentType(null),"setRequestHeader"in a&&f.forEach(s.toJSON(),function(h,y){a.setRequestHeader(y,h)}),f.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&i!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=p=>{a&&(r(!p||p.type?new L(null,e,a):p),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const d=Yt(u);if(d&&O.protocols.indexOf(d)===-1){r(new E("Unsupported protocol "+d+":",E.ERR_BAD_REQUEST,e));return}a.send(o||null)})},k={http:xt,xhr:tn};f.forEach(k,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nn={getAdapter:e=>{e=f.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=f.isString(n)?k[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(f.hasOwnProp(k,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!f.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:k};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function ye(e){return W(e),e.headers=R.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nn.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return W(e),r.data=V.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return ve(r)||(W(e),r&&r.response&&(r.response.data=V.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Ee=e=>e instanceof R?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(a,u,l){return f.isPlainObject(a)&&f.isPlainObject(u)?f.merge.call({caseless:l},a,u):f.isPlainObject(u)?f.merge({},u):f.isArray(u)?u.slice():u}function o(a,u,l){if(f.isUndefined(u)){if(!f.isUndefined(a))return r(void 0,a,l)}else return r(a,u,l)}function s(a,u){if(!f.isUndefined(u))return r(void 0,u)}function i(a,u){if(f.isUndefined(u)){if(!f.isUndefined(a))return r(void 0,a)}else return r(void 0,u)}function c(a,u,l){if(l in t)return r(a,u);if(l in e)return r(void 0,a)}const m={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(a,u)=>o(Ee(a),Ee(u),!0)};return f.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const l=m[u]||o,d=l(e[u],t[u],u);f.isUndefined(d)&&l!==c||(n[u]=d)}),n}const ze="1.3.5",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};se.transitional=function(t,n,r){function o(s,i){return"[Axios v"+ze+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new E(o(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function rn(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],m=c===void 0||i(c,s,e);if(m!==!0)throw new E("option "+s+" must be "+m,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+s,E.ERR_BAD_OPTION)}}const Y={assertOptions:rn,validators:se},T=Y.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(f.isFunction(o)?n.paramsSerializer={serialize:o}:Y.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&f.merge(s.common,s[n.method]),i&&f.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),n.headers=R.concat(i,s);const c=[];let m=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(m=m&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const a=[];this.interceptors.response.forEach(function(y){a.push(y.fulfilled,y.rejected)});let u,l=0,d;if(!m){const h=[ye.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,a),d=h.length,u=Promise.resolve(n);l<d;)u=u.then(h[l++],h[l++]);return u}d=c.length;let p=n;for(l=0;l<d;){const h=c[l++],y=c[l++];try{p=h(p)}catch(b){y.call(this,b);break}}try{u=ye.call(this,p)}catch(h){return Promise.reject(h)}for(l=0,d=a.length;l<d;)u=u.then(a[l++],a[l++]);return u}getUri(t){t=F(this.defaults,t);const n=qe(t.baseURL,t.url);return He(n,t.params,t.paramsSerializer)}}f.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});f.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new L(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(o){t=o}),cancel:t}}}const on=ie;function sn(e){return function(n){return e.apply(null,n)}}function an(e){return f.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const cn=Z;function $e(e){const t=new I(e),n=Te(I.prototype.request,t);return f.extend(n,I.prototype,t,{allOwnKeys:!0}),f.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return $e(F(e,o))},n}const S=$e(oe);S.Axios=I;S.CanceledError=L;S.CancelToken=on;S.isCancel=ve;S.VERSION=ze;S.toFormData=j;S.AxiosError=E;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=sn;S.isAxiosError=an;S.mergeConfig=F;S.AxiosHeaders=R;S.formToJSON=e=>je(f.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=cn;S.default=S;const un=S,ln=Oe.privatekey,be=Oe.publickey,fn="https://gateway.marvel.com/v1/public",Se=1,K=un.create({baseURL:fn,params:{apikey:be,hash:Ke({timeStamp:Se,PRIVATE_KEY:ln,PUBLIC_KEY:be}),ts:Se}}),dn={getCharacters:async({nameStartsWith:e="",offset:t=0,limit:n=16,comics:r=0,orderBy:o="",modifiedSince:s=""})=>{try{return(await K.get("/characters",{params:{...e&&{nameStartsWith:e},...t&&{offset:t},...n&&{limit:n},...r&&{comics:r},...o&&{orderBy:o},...s&&{modifiedSince:s}}})).data.data.results}catch(i){console.log(i)}},getCharactersById:async({characterId:e})=>{try{return(await K.get(`/characters/${e}`)).data.data.results}catch(t){console.log(t)}},getComics:async({format:e="",title:t="",startYear:n=0,limit:r=16,offset:o=0,orderBy:s="",dateDescriptor:i=""})=>{try{return(await K.get("/comics",{params:{...e&&{format:e},...t&&{title:t},...o&&{offset:o},...r&&{limit:r},...n&&{startYear:n},...s&&{orderBy:s},...i&&{dateDescriptor:i}}})).data.data}catch(c){console.log(c)}}};export{dn as a};
