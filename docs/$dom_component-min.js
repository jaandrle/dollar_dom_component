function init(e){"use strict";const t={empty:function(e){let t=e.childNodes.length;for(;t--;)e.removeChild(e.lastChild)},insertAfter:function(e,t){const{parentNode:n,nextSibling:r}=t;r?n.insertBefore(e,r):n.appendChild(e)},replace:function(e,n){t.insertAfter(n,e),e.remove()}},n=function(){let e={add:function(){return e},component:function(){return e},mount:n,update:r,ondestroy:o,share:{mount:n,update:r,destroy:function(){return e=null,null},ondestroy:o,isStatic:function(){return!0}}};return e;function n(e,n="childLast"){switch(n){case"replace":e.remove();break;case"replaceContent":t.empty(e)}return null}function r(){return!0}function o(){return!0}}();t.component=function(e,r,{mapUpdate:o,namespace_group:i}={}){if(!e||"EMPTY"===e||"empty"===e)return n;let s,c;"svg"===e&&(i="SVG"),"SVG"===i?(s=t.assignNS.bind(null,"SVG"),c=document.createElementNS.bind(document,"http://www.w3.org/2000/svg")):(s=t.assign,c=document.createElement.bind(document));let l=null,u=null,a=null,f=null;const d=document.createDocumentFragment();let p,h=[],g=0,b=[];let m={add:v,addText:function(e,t=0){j(t);const n=document.createTextNode(e);let r=h[g]=w().appendChild(n);return g+=1,Object.assign(Object.create(m),{oninit:function(e){return e(r),m}})},component:function({mount:e,update:t,isStatic:n},r=0){j(r),h[g]=e(w()),n()||(l||(l=S()),l.registerComponent(t));return g+=1,m},dynamicComponent:function(e,t,n=0){j(n);const r=w();let o=null,i=null,s=null;function c(e){i=e,s=s?i.mount(s,"replace"):i.mount(r)}return y.onupdate(m,r,e,function(e){o=t.call(r,c,i,e,o)})},setShift:function(e=0){let t;e?b.splice(b.length+1+e):(t=b.pop(),b.push(t,t));return m},mount:k,update:E,ondestroy:N,share:{mount:k,update:E,destroy:O,ondestroy:N,isStatic:function(){return!l}}},y={getReference:function(e,t){return t},on:function(e,t,...n){return n.forEach(([t,n])=>e[t].apply(this,n)),e},oninit:function(e,t,...n){return n.forEach(n=>n.call(e,t)),e},onmount:function(e,t,n){return a||(a=new Map),a.set(t,n),e},onupdate:function(e,t,n,r){return n?(l||(l=S()),s(t,l.register(t,n,r)),e):e}};return v(e,r);function v(e,t,n=0){j(n),t=t||{};const r=c(e);g?h[g]=w().appendChild(r):p=h[0]=d.appendChild(r);let o=h[g];g+=1,s(o,t);const i=Object.create(m);return i.getReference=y.getReference.bind(null,i,o),i.on=y.on.bind(null,i,o),i.oninit=y.oninit.bind(null,i,o),i.onmount=y.onmount.bind(null,i,o),i.onupdate=y.onupdate.bind(null,i,o),i}function k(e,n="childLast"){f&&f.disconnect();const r=!d.firstChild&&p?p:d;let o;switch(n){case"replace":o=e.parentNode,t.replace(e,r);break;case"replaceContent":t.empty(e),e.appendChild(r),o=e;break;case"before":(o=e.parentNode).insertBefore(r,e);break;case"after":t.insertAfter(r,e),o=e.parentNode;break;default:"childFirst"===n&&e.childNodes.length?e.insertBefore(r,e.childNodes[0]):e.appendChild(r),o=e}return(f=new MutationObserver(e=>e.forEach(function(e){if(!e.removedNodes||-1===Array.prototype.indexOf.call(e.removedNodes,p))return!1;O()}))).observe(o,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),a&&(a.forEach(function(t,r){return s(r,t.call(r,e,n))}),a=void 0),p}function O(){return u&&u.forEach(e=>e.call(p)),p&&(p.remove(),h=[]),f&&f.disconnect(),f=void 0,u=void 0,s=void 0,c=void 0,p=void 0,l=void 0,m=void 0,y=void 0,null}function N(e){return u||(u=new Set),u.add(e),m}function j(e){e?(b.splice(b.length+1+e),b[b.length-1]=g):b.push(g)}function w(){return h[b[b.length-2]]||d}function S(){const e={},t=[],n=new Map,r=new Map,i=new Map;let c=0;return{register:function(t,o,s){Object.assign(e,o);const c=u(n,t)+"_"+u(r,s),l=Object.keys(o);for(let e,t=0,n=l.length;t<n;t++)e=l[t],i.has(e)?i.get(e).push(c):i.set(e,[c]);return s.call(t,o)||{}},registerComponent:function(e){-1===t.indexOf(e)&&t.push(e)},update:function(c){const u="function"==typeof o?o(c):c;let a=!1;for(let e=0,n=t.length;e<n;e++)t[e](u)&&!a&&(a=!0);if(!i.size)return a;const f=Object.keys(u).filter(t=>i.has(t)&&e[t]!==u[t]),d=f.length;if(!d)return a;Object.assign(e,u);const p=[];for(let e,t=0;t<d;t++)for(let n,r=0,o=(e=i.get(f[t])).length;r<o;r++)n=e[r],-1===p.indexOf(n)&&p.push(n);for(let e=0,t=p.length;e<t;e++)h(p[e]);return!0;function h(t){const[o,i]=t.split("_").map(Number),c=n.get(o),u=r.get(i).call(c,e)||{};if(null===c.parentNode)return l(o,i,f);s(c,u)}},getData:function(){return e},unregister:l};function l(e,t,o){let s=0;function c(t){return Number(t.split("_")[0])!==e}n.delete(e),i.forEach(function(e,n){if(-1===o.indexOf(n))return e.forEach(function(e){Number(e.split("_")[1])===t&&(s+=1)});1===e.length?i.delete(n):i.set(n,e.filter(c))}),s||r.delete(t)}function u(e,t){let n=-1;return e.forEach(function(e,r){-1===n&&e===t&&(n=r)}),-1!==n?n:(n=c++,e.set(n,t),n)}}function E(e){return!!l&&l.update("function"==typeof e?e(l.getData()):e)}},t.componentListener=function(){const e=["oninit","onmount","onupdate"],t={registerListener:function(e,t,n,r,o={passive:!0}){this.api={getReference:t.getReference,update:t.update,removeEventListener:this.removeEventListener.bind(this)},this.event_name=n,this.event_function=r,console.log(o),e.addEventListener(n,this,o)},removeEventListener:function(){this.api.getReference().removeEventListener(this.event_name,this)},handleEvent:function(e){this.event_function.call(this.api,e)}};return function(n,...r){const o=e.indexOf((/^on/g.test(n)?"":"on")+n);return-1===o?Object.freeze(["oninit",[function(e){Object.create(t).registerListener(e,this,n,...r)}]]):Object.freeze([e[o],r])}}(),t.assign=function(e,...t){const n=Object.assign({},...t),r=Object.keys(n);for(let t,o,i=0,s=r.length;i<s;i++)if(void 0!==(o=n[t=r[i]]))switch(t){case"style":if("string"==typeof o)e.setAttribute("style",o);else for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.style.setProperty(t,o[t]);break;case"style_vars":for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.style.setProperty(t,o[t]);break;case"classList":if(!e[t].toggle)break;for(let t,n,r=0,i=Object.keys(o),s=i.length;r<s;r++)-1===(n=o[t=i[r]])?e.classList.toggle(t):e.classList.toggle(t,Boolean(n));break;case"dataset":for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.dataset[t]=o[t];break;case"href":e.setAttribute(t,o);break;default:e[t]=o}else Reflect.has(e,t)&&Reflect.deleteProperty(e,t);return e},t.assignNS=function(e,t,...n){const r=/^on[a-z]+/,o=Object.assign({},...n),i=Object.keys(o);for(let e,n,s=0,c=i.length;s<c;s++)if(void 0!==(n=o[e=i[s]]))switch(e){case"textContent":t.appendChild(document.createTextNode(n));break;case"style":if("string"==typeof n)t.setAttributeNS(null,"style",n);else for(let e,r=0,o=Object.keys(n),i=o.length;r<i;r++)e=o[r],t.style.setProperty(e,n[e]);break;case"style_vars":for(let e,r=0,o=Object.keys(n),i=o.length;r<i;r++)e=o[r],t.style.setProperty(e,n[e]);break;case"className":t.setAttributeNS(null,"class",n);break;case"classList":if(!t[e].toggle)break;for(let e,r,o=0,i=Object.keys(n),s=i.length;o<s;o++)-1===(r=n[e=i[o]])?t.classList.toggle(e):t.classList.toggle(e,Boolean(r));break;case"xlink:href":t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;default:r.test(e)?t[e]=n:t.setAttributeNS(null,e,n)}else t.hasAttributeNS(null,e)&&t.removeAttributeNS(null,e);return t},e.$dom=t}init(window);