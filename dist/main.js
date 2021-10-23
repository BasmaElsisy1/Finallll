var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:g(f,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(e,t){var n,o,r;if(t.singleton){var a=h++;n=m||(m=l(t)),o=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'body{background-color:#d6a212;font-family:Georgia, \'Times New Roman\', Times, serif}#hee{display:flex;flex-direction:column;text-align:center;margin-top:100px}#result{background-color:black;color:white;text-align:center}h1{font-family:Georgia, \'Times New Roman\', Times, serif;font-size:40px;color:black}form{margin-top:100px;display:grid;grid-template-rows:60px 60px 40px;grid-template-areas:"hd" \r "hd" \r "ha " \r "ha "\r "he "\r "he ";grid-gap:15px}#country{grid-area:"hd"}#date{grid-area:"ha"}#submit{grid-area:"he";background-color:black;color:burlywood;width:200px;position:relative;left:150px}.title{font-size:20px;text-decoration:underline}@media (min-width: 600px) and (max-width: 800px){h1{font-size:60px}form{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:70px 50px;grid-template-areas:"hd  ha" \r "he  he";grid-gap:10px;position:relative}#country{font-size:15px}#date{font-size:15px}#submit{font-size:20px;width:200px;left:200px}}@media (min-width: 800px){h1{font-size:80px}form{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:70px 50px}#submit{font-size:25px;width:300px;left:510px}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"generateData",(function(){return r}));console.log("basma");let o="";new Date;function r(e){e.preventDefault();const t=document.getElementById("userInput").value;let n=(new Date).getDate();console.log(n);const r=document.getElementById("date").value;let a=new Date(r).getDate();console.log(a),a-n<=7?(o="http://api.weatherbit.io/v2.0/current?",console.log("hi")):(o=" http://api.weatherbit.io/v2.0/forecast/daily?",console.log("bye"));const i=async(e="",t={})=>{console.log("Data is:",t);const n=await fetch(e,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}};let c=(async(e,t,n)=>{const o=await fetch(`${e}username=${t}&q=${n}`);try{return await o.json()}catch(e){console.log("error",e)}})("http://api.geonames.org/searchJSON?","basma",t).then((function(e){console.log(e),i("/addGeoData",{lat:e.geonames[0].lat,lon:e.geonames[0].lng,country:e.geonames[0].countryName}).then(s())}));(async(e,t,n,o)=>{const r=await fetch(`${e}lat=${n}&lon=${o}&key=${t}`);try{return await r.json()}catch(e){console.log("error",e)}})(o,"f7d2dacb497b41a1a665f0526225a067",c.lat,c.lon).then((function(e){console.log(e),i("/addWeatherData",{temp:e.data[0].temp,description:e.data[0].weather.description}).then(s)}));(async(e,t,n)=>{const o=await fetch(`${e}key=${t}&q=${n}&image_type=photo`);try{return await o.webformatURL()}catch(e){console.log("error",e)}})("https://pixabay.com/api/?","23384321-47f035c16963a374fceb542d7",t).then((function(e){console.log(e),i("/addPixabayData",{picture:e.hits[0].webformatURL}).then(s())}));const s=async()=>{const e=await fetch("/all");try{const t=await e.json();document.getElementById("country").innerHTML="Country: "+t.country,document.getElementById("temp").innerHTML="Temperature: "+t.temp,document.getElementById("description").innerHTML="description: "+t.description,document.getElementById("image").src=t.picture,document.getElementById("image").alt=t.country}catch(e){console.log("error",e)}}}document.getElementById("submit").addEventListener("click",r);n(0)}]);