!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/thema/",r(r.s=16)}({14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themes={bootstrap:"bootstrap",elife:"elife",galleria:"galleria",nature:"nature",plos:"plos",rpng:"rpng",skeleton:"skeleton",stencila:"stencila",wilmore:"wilmore"}},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(14);t.themes=n.themes;const o=null==="2.4.0"?void 0:"2.4.0".split(".")[0];t.themePath="dist/themes",t.styleEntry="styles.css",t.scriptEntry="index.js",t.isTheme=e=>Object.keys(n.themes).includes(e),t.generateCDNUrl=e=>`https://unpkg.com/@stencila/thema@${o}/${e}`.replace(/\\/g,"/"),t.getTheme=(e,r=!1)=>{const n=e.trim().toLowerCase();if(!t.isTheme(n))return;const o=`${t.themePath}/${n}/${t.styleEntry}`,s=`${t.themePath}/${n}/${t.scriptEntry}`,i=e=>r?e.map(t.generateCDNUrl):e;return{styles:i([o]),scripts:i([s])}}}})}));