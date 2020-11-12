function init(e){"use strict";const t={empty:function(e){let t=e.childNodes.length;for(;t--;)e.removeChild(e.lastChild)},insertAfter:function(e,t){const{parentNode:n,nextSibling:r}=t;r?n.insertBefore(e,r):n.appendChild(e)},replace:function(e,n){t.insertAfter(n,e),e.remove()}},n=Object.freeze({registerToMap:function(e,t,n){let r=-1;for(const[n,o]of e)if(o===t&&(r=n),-1!==r)break;return-1!==r?r:(r=n(),e.set(r,t),r)},indexGenerator:(e=0)=>()=>e++}),r=function(){let e={add:function(){return e},component:function(){return e},mount:n,update:r,ondestroy:o,share:{mount:n,update:r,destroy:function(){return e=null,null},ondestroy:o,isStatic:function(){return!0}}};return e;function n(e,n="childLast"){switch(n){case"replace":e.remove();break;case"replaceContent":t.empty(e)}return null}function r(){return!0}function o(){return!0}}(),o={empty:["","empty"],fragment:["<>","fragment"]};function i(e,t,n){const[r,i]=o[e];return n?r===t:r===t||i===t.toLowerCase()}t.component=function(e,o,{mapUpdate:s,namespace_group:c,safe_el_name_only:l}={}){if(!e||i("empty",e,l))return r;let u,a;"svg"===e&&(c="SVG"),"SVG"===c?(u=t.assignNS.bind(null,"SVG"),a=document.createElementNS.bind(document,"http://www.w3.org/2000/svg")):(u=t.assign,a=document.createElement.bind(document));let f,d=null,p=null,h=null,g=null,b=[],m=0,y=[];let v={add:O,addText:function(e="",t=0){L(t);const n=document.createTextNode(e);let r=b[m]=S().appendChild(n);m+=1;const o=Object.create(v);return o.getReference=k.getReference.bind(null,o,r),o.on=k.on.bind(null,o,r),o.oninit=k.oninit.bind(null,o,r),o.onmount=k.onmount.bind(null,o,r),o.onupdate=k.onupdate.bind(null,o,r),o},component:function({mount:e,update:t,isStatic:n},r=0){L(r),b[m]=e(S()),n()||(d||(d=x()),d.registerComponent(t));return m+=1,v},dynamicComponent:function(e,t,n=0){L(n);const r=S();let o=null,i=null,s=null;function c(e){i=e,s=s?i.mount(s,"replace"):i.mount(r)}return k.onupdate(v,r,e,function(e){o=t.call(r,c,i,e,o)})},setShift:function(e=0){let t;e?y.splice(y.length+1+e):(t=y.pop(),y.push(t,t));return v},mount:N,update:C,ondestroy:w,share:{mount:N,update:C,destroy:j,ondestroy:w,isStatic:function(){return!d}}},k={getReference:function(e,t){return t},on:function(e,t,...n){return n.forEach(([t,n]=[])=>t&&e[t].apply(this,n)),e},oninit:function(e,t,n){return n.call(e,t),e},onmount:function(e,t,n){return h||(h=new Map),h.set(t,n),e},onupdate:function(e,t,n,r){return n?(d||(d=x()),u(t,d.register(t,n,r)),e):e}};return i("fragment",e,l)?(L(0),f=b[0]=document.createDocumentFragment(),m+=1,v):O(e,o);function O(e,t,n=0){L(n),t=t||{};const r=a(e);m?b[m]=S().appendChild(r):f=b[0]=r;let o=b[m];m+=1,u(o,t);const i=Object.create(v);return i.getReference=k.getReference.bind(null,i,o),i.on=k.on.bind(null,i,o),i.oninit=k.oninit.bind(null,i,o),i.onmount=k.onmount.bind(null,i,o),i.onupdate=k.onupdate.bind(null,i,o),i}function N(e,n="childLast"){let r;switch(g&&g.disconnect(),n){case"replace":r=e.parentNode,t.replace(e,f);break;case"replaceContent":t.empty(e),e.appendChild(f),r=e;break;case"before":(r=e.parentNode).insertBefore(f,e);break;case"after":t.insertAfter(f,e),r=e.parentNode;break;default:"childFirst"===n&&e.childNodes.length?e.insertBefore(f,e.childNodes[0]):e.appendChild(f),r=e}return(g=new MutationObserver(e=>e.forEach(function(e){if(!e.removedNodes||-1===Array.prototype.indexOf.call(e.removedNodes,f))return!1;j()}))).observe(r,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),h&&(h.forEach(function(t,r){return u(r,t.call(r,e,n))}),h=void 0),f}function j(){return p&&p.forEach(e=>e.call(f)),f&&(f.remove(),b=[]),g&&g.disconnect(),g=void 0,p=void 0,u=void 0,a=void 0,f=void 0,d&&d.clear&&(d.clear(),d=void 0),v=void 0,k=void 0,null}function w(e){return p||(p=new Set),p.add(e),v}function L(e){e?(y.splice(y.length+1+e),y[y.length-1]=m):y.push(m)}function S(){return b[y[y.length-2]]||f}function x(){const{registerToMap:e,indexGenerator:t}=n;let r,o,i,c,l,a;return f(t(0)),{register:function(t,n,o){Object.assign(r,n);const s=e(i,t,a)+"_"+e(c,o,a),u=Object.keys(n);for(let e,t=0,n=u.length;t<n;t++)e=u[t],l.has(e)?l.get(e).push(s):l.set(e,[s]);return o.call(t,n)||{}},registerComponent:function(e){-1===o.indexOf(e)&&o.push(e)},update:function(e){const t="function"==typeof s?s(e):e;let n=!1;for(let e=0,r=o.length;e<r;e++)o[e](t)&&!n&&(n=!0);if(!l.size)return n;const a=Object.keys(t).filter(e=>l.has(e)&&r[e]!==t[e]),f=a.length;if(!f)return n;Object.assign(r,t);const p=[];for(let e,t=0;t<f;t++)for(let n,r=0,o=(e=l.get(a[t])).length;r<o;r++)n=e[r],-1===p.indexOf(n)&&p.push(n);for(let e=0,t=p.length;e<t;e++)h(p[e]);return!0;function h(e){const[t,n]=e.split("_").map(Number),o=i.get(t),s=c.get(n).call(o,r)||{};if(null===o.parentNode)return d(t,n,a);u(o,s)}},clear:function(){f()},getData:function(){return r},unregister:d};function f(e){r={},o=[],i=new Map,c=new Map,l=new Map,a=e}function d(e,t,n){let r=0;function o(t){return Number(t.split("_")[0])!==e}i.delete(e),l.forEach(function(e,i){if(-1===n.indexOf(i))return e.forEach(function(e){Number(e.split("_")[1])===t&&(r+=1)});1===e.length?l.delete(i):l.set(i,e.filter(o))}),r||c.delete(t)}}function C(e){return!!d&&d.update("function"==typeof e?e(d.getData()):e)}},t.componentListener=function(){const e=["oninit","onmount","onupdate"],t={registerListener:function(e,t,n,r,o={passive:!0}){this.api={getReference:t.getReference,update:t.update,removeEventListener:this.removeEventListener.bind(this)},this.event_name=n,this.event_function=r,e.addEventListener(n,this,o)},removeEventListener:function(){this.api.getReference().removeEventListener(this.event_name,this)},handleEvent:function(e){this.event_function.call(this.api,e)}};return function(n,...r){const o=e.indexOf((/^on/g.test(n)?"":"on")+n);return-1===o?Object.freeze(["oninit",[function(e){Object.create(t).registerListener(e,this,n,...r)}]]):Object.freeze([e[o],r])}}(),t.assign=function(e,...t){const n=Object.assign({},...t),r=Object.keys(n);for(let t,o,i=0,s=r.length;i<s;i++)if(void 0!==(o=n[t=r[i]]))switch(t){case"style":if("string"==typeof o)e.setAttribute("style",o);else for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.style.setProperty(t,o[t]);break;case"style_vars":for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.style.setProperty(t,o[t]);break;case"classList":if(!e[t].toggle)break;for(let t,n,r=0,i=Object.keys(o),s=i.length;r<s;r++)-1===(n=o[t=i[r]])?e.classList.toggle(t):e.classList.toggle(t,Boolean(n));break;case"dataset":for(let t,n=0,r=Object.keys(o),i=r.length;n<i;n++)t=r[n],e.dataset[t]=o[t];break;case"href":e.setAttribute(t,o);break;default:e[t]=o}else Reflect.has(e,t)&&Reflect.deleteProperty(e,t);return e},t.assignNS=function(e,t,...n){const r=/^on[a-z]+/,o=Object.assign({},...n),i=Object.keys(o);for(let e,n,s=0,c=i.length;s<c;s++)if(void 0!==(n=o[e=i[s]]))switch(e){case"textContent":t.appendChild(document.createTextNode(n));break;case"style":if("string"==typeof n)t.setAttributeNS(null,"style",n);else for(let e,r=0,o=Object.keys(n),i=o.length;r<i;r++)e=o[r],t.style.setProperty(e,n[e]);break;case"style_vars":for(let e,r=0,o=Object.keys(n),i=o.length;r<i;r++)e=o[r],t.style.setProperty(e,n[e]);break;case"className":t.setAttributeNS(null,"class",n);break;case"classList":if(!t[e].toggle)break;for(let e,r,o=0,i=Object.keys(n),s=i.length;o<s;o++)-1===(r=n[e=i[o]])?t.classList.toggle(e):t.classList.toggle(e,Boolean(r));break;case"xlink:href":t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;default:r.test(e)?t[e]=n:t.setAttributeNS(null,e,n)}else t.hasAttributeNS(null,e)&&t.removeAttributeNS(null,e);return t},e.$dom=t}init(window);