!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(self,(function(){return(()=>{"use strict";var e={7907:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTheme=t.generateCDNUrl=t.isTheme=t.scriptEntry=t.styleEntry=t.themePath=t.themes=void 0;const s=r(1536);Object.defineProperty(t,"themes",{enumerable:!0,get:function(){return s.themes}});const n=null==="2.20.11"?void 0:"2.20.11".split(".")[0];t.themePath="dist/themes",t.styleEntry="styles.css",t.scriptEntry="index.js",t.isTheme=e=>Object.keys(s.themes).includes(e),t.generateCDNUrl=e=>`https://unpkg.com/@stencila/thema@${null!=n?n:"latest"}/${e}`.replace(/\\/g,"/"),t.getTheme=(e,r=!1)=>{const s=e.trim().toLowerCase();if(!t.isTheme(s))return;const n=`${t.themePath}/${s}/${t.styleEntry}`,o=`${t.themePath}/${s}/${t.scriptEntry}`,l=e=>r?e.map(t.generateCDNUrl):e;return{styles:l([n]),scripts:l([o])}}},1536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.themes=void 0,t.themes={bootstrap:"bootstrap",elife:"elife",f1000:"f1000",galleria:"galleria",giga:"giga",latex:"latex",nature:"nature",plos:"plos",rpng:"rpng",skeleton:"skeleton",stencila:"stencila",tufte:"tufte",wilmore:"wilmore"}}},t={};return function r(s){if(t[s])return t[s].exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}(7907)})()}));