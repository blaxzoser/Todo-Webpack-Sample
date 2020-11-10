(()=>{"use strict";var e={681:(e,t,n)=>{n.d(t,{L:()=>k});var o=n(379),r=n.n(o),a=n(850),i={insert:"head",singleton:!1};r()(a.Z,i);a.Z.locals;function c(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var s=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.tarea=t,this.id=Date.now(),this.completado=!1,this.creado=new Date}return l(e,null,[{key:"fromJson",value:function(t){var n=t.id,o=t.tarea,r=t.completado,a=t.creado,i=new e(o);return i.id=n,i.completado=r,i.creado=a,i}}]),l(e,[{key:"imprirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}]),e}();function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,e},f:function e(){try{a||null==n.return||n.return()}finally{if(i)throw e}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function f(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var v=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.loadLocalStorage()}return function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(e,[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,n=u(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(console.log(e,o.id),o.id==e){o.completed=!o.completed,this.saveLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(s.fromJson)}},{key:"totalPendientes",value:function(){return this.todos.filter((function(e){return!e.completed})).length}}]),e}();function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,e},f:function e(){try{a||null==n.return||n.return()}finally{if(i)throw e}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var p=document.querySelector(".todo-list"),y=document.querySelector(".new-todo"),g=document.querySelector(".clear-completed"),b=document.querySelector(".filters"),S=document.querySelectorAll(".filtro"),w=document.querySelector(".todo-count"),C=function(e){var t='\n    <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n        <label>").concat(e.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,p.append(n.firstElementChild),n.firstElementChild},L=function(){w.firstElementChild.innerText=k.totalPendientes()};y.addEventListener("keyup",(function(e){if(13===e.keyCode&&y.value.length){console.log(y.value);var t=new s(y.value);k.nuevoTodo(t),C(t),y.value="",L()}})),p.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");console.log(n),console.log(o),t.includes("input")?(k.marcarCompletado(o),n.classList.toggle("completed")):t.includes("button")&&(k.eliminarTodo(o),p.removeChild(n)),L(),console.log(k)})),g.addEventListener("click",(function(){k.eliminarCompletados();for(var e,t=p.children.length-1;0<=t;t--)e=p.children[t],console.log(e),e.classList.contains("completed")&&p.removeChild(e);L()})),b.addEventListener("click",(function(e){var t=e.target.text;if(t){S.forEach((function(e){e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=m(p.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(t){case"Pendientes":a&&r.classList.add("hidden");break;case"Completados":a||r.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}L()}}));var k=new v;k.todos.forEach((function(e){C(e)})),console.log("todos",k.todos)},850:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:p(f,t),references:1}),o.push(u)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function v(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function p(e,t){var n,o,r;if(t.singleton){var a=h++;n=m||(m=s(t)),o=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=s(t),o=v.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(681)})();