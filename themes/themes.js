!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);t.ready=function(e){s?setTimeout(e,1):(a.push(e),"complete"!==document.readyState?setTimeout(o,1):i||(document.addEventListener("DOMContentLoaded",o),i=!0))};let a=[],i=!1,s=!1;function o(){s||(s=!0,a.forEach(e=>e()),a=[])}function l(...e){const[t,n]=1===e.length?[document,e[0]]:e.slice(0,2);return Array.from(t.querySelectorAll(r.semanticToAttributeSelectors(n)))}function u(e="div",...t){var n,r,a,i,s;if(/^\s*</.test(e)){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}const o=null!=(r=null===(n=/^[a-z0-9]+/i.exec(e))||void 0===n?void 0:n[0])?r:"div",l=null!=(a=e.match(/#([a-z]+[a-z0-9-]*)/gi))?a:[],u=null!=(i=e.match(/\.([a-z]+[a-z0-9-]*)/gi))?i:[],c=null!=(s=e.match(/\[([a-z][a-z-]+)(=['|"]?([^\]]*)['|"]?)?\]/gi))?s:[],d=document.createElement(o);return 1===l.length?d.id=l[0].slice(1):l.length>1&&console.warn("Got more than one id; ignoring all but first"),u.length>0&&d.setAttribute("class",u.map(e=>e.slice(1)).join(" ")),c.forEach(e=>{let[t,n]=e.slice(1,-1).split("=");void 0!==n&&(n=n.replace(/^['"](.*)['"]$/,"$1")),d.setAttribute(t,null!=n?n:"")}),t.forEach(e=>d.appendChild(e instanceof Element?e:document.createTextNode(`${e}`))),d}t.select=l,t.create=u,t.before=function(e,t){const n=e.parentNode;null!==n&&n.insertBefore(t,e)},t.after=function(e,...t){const n=e.parentNode;null!==n&&t.reverse().forEach(t=>n.insertBefore(t,e.nextSibling))},t.replace=function(e,t){"string"==typeof e&&(e=l(e)[0]),"string"==typeof t&&(t=u(t));const n=e.parentNode;null!==n&&n.replaceChild(t,e)},t.wrap=function(...e){var t,n;const r=null!=(t=e.pop())?t:"div",a=e.pop();if(void 0===a)throw new Error("Required argument `target` is missing");const i=null!=(n=e.pop())?n:"body";l(document,i).forEach(e=>{const t=l(e,a);let n;if(r instanceof Element)n=r.cloneNode();else if("string"==typeof r)n=u(r);else{if("function"!=typeof r)throw new Error(`Unhandled wrapper type: ${typeof r}`);n=r(Array.from(t))}if(t.length>0){const e=t[0].parentNode;null!==e&&e.insertBefore(n,t[0])}t.forEach(e=>n.appendChild(e))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.semanticToAttributeSelectors=function(e){return e.replace(/:--(\w+)/g,(e,t)=>`[${/^[A-Z]/.test(t)?"itemtype":"itemprop"}~='http://schema.org/${t}']`)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);r.ready(()=>r.select('span > meta[itemprop="datePublished"]').forEach(e=>{const t=e.getAttribute("content");r.replace(e.parentElement,r.create(`time[datetime=${t}][itemscope][itemtype="http://schema.org/Date"][itemprop=datePublished]`,t))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3);const r=n(0);r.ready(()=>r.select(":--references :--givenName").forEach(e=>{var t,n;e.innerHTML=null!=(n=null===(t=e.textContent)||void 0===t?void 0:t[0])?n:""}))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(6));n(8),n(9),n(10);const i=n(0);i.ready(()=>{i.select('pre[itemtype="http://schema.stenci.la/CodeBlock"] > code[itemtype="http://schema.stenci.la/CodeFragment"]').forEach(e=>{e.removeAttribute("itemscope"),e.removeAttribute("itemtype")}),i.select('pre[itemtype="http://schema.stenci.la/CodeBlock"] > code, code[itemtype="http://schema.stenci.la/CodeFragment"]').forEach(e=>{e.className.includes("language-")||e.classList.add("language-text")}),a.default.plugins.filterHighlightAll.reject.add(e=>{var t;const{element:n}=e;return"http://schema.stenci.la/CodeFragment"!==n.getAttribute("itemtype")&&"http://schema.stenci.la/CodeBlock"!==(null===(t=n.parentElement)||void 0===t?void 0:t.getAttribute("itemtype"))})})},function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i,s=r.util.type(t);switch(n=n||{},s){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var o in a={},n[i]=a,t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var u=a[e];return a[e]=s,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,a,i){i=i||{};var s=r.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],u=r.util.type(l);"Object"!==u||i[s(l)]?"Array"!==u||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,s=0;i=a.elements[s++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var s=r.util.getLanguage(n),o=r.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:n,language:s,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),i&&i.call(u.element)}if(r.hooks.run("before-sanity-check",u),!u.code)return r.hooks.run("complete",u),void(i&&i.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,s,o,l){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var c=n[u];c=Array.isArray(c)?c:[c];for(var d=0;d<c.length;++d){if(l&&l==u+","+d)return;var p=c[d],g=p.inside,f=!!p.lookbehind,m=!!p.greedy,h=0,b=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var v=i,w=s;v<t.length;w+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof a)){if(m&&v!=t.length-1){if(p.lastIndex=w,!(j=p.exec(e)))break;for(var F=j.index+(f&&j[1]?j[1].length:0),A=j.index+j[0].length,_=v,x=w,P=t.length;_<P&&(x<A||!t[_].type&&!t[_-1].greedy);++_)F>=(x+=t[_].length)&&(++v,w=x);if(t[v]instanceof a)continue;S=_-v,k=e.slice(w,x),j.index-=w}else{p.lastIndex=0;var j=p.exec(k),S=1}if(j){f&&(h=j[1]?j[1].length:0);A=(F=j.index+h)+(j=j[0].slice(h)).length;var E=k.slice(0,F),$=k.slice(A),O=[v,S];E&&(++v,w+=E.length,O.push(E));var M=new a(u,g?r.tokenize(j,g):j,b,j,m);if(O.push(M),$&&O.push($),Array.prototype.splice.apply(t,O),1!=S&&r.matchGrammar(e,t,n,v,w,!0,u+","+d),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var i in a)t[i]=a[i];delete t.rest}return r.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a}if(e.Prism=r,a.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return a.stringify(e,t)})).join("");var n={type:e.type,content:a.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}r.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,s=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),s&&e.close()}),!1),r):r;var i=r.util.currentScript();if(i&&(r.filename=i.src,i.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){function s(){r.manual||r.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&i&&i.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,a=e.getAttribute("data-src"),i=e,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(r=(e.className.match(s)||[,""])[1]),!r){var o=(a.match(/\.(\w+)$/)||[,""])[1];r=t[o]||o}var l=document.createElement("code");l.className="language-"+r,e.textContent="",l.textContent="Loading…",e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",a,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n(7))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){!function(){if("undefined"==typeof self||self.Prism){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e,t=Prism.util.currentScript(),n=[],r=Prism.plugins.filterHighlightAll={add:function(e){n.push((function(t){return e({element:t,language:Prism.util.getLanguage(t)})}))},addSelector:function(e){n.push((function(t){return t.matches(e)}))},reject:{add:function(e){n.push((function(t){return!e({element:t,language:Prism.util.getLanguage(t)})}))},addSelector:function(e){n.push((function(t){return!t.matches(e)}))}},filterKnown:!!t&&t.hasAttribute("data-filter-known")};if(r.add((function(e){return!r.filterKnown||"object"==typeof Prism.languages[e.language]})),t)(e=t.getAttribute("data-filter-selector"))&&r.addSelector(e),(e=t.getAttribute("data-reject-selector"))&&r.reject.addSelector(e);Prism.hooks.add("before-all-elements-highlight",(function(e){e.elements=e.elements.filter(a)}))}function a(e){for(var t=0,r=n.length;t<r;t++)if(!n[t](e))return!1;return!0}}()},function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},function(e,t){Prism.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:TRUE|FALSE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:NaN|Inf)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);r.ready(()=>{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);r.ready(()=>{const e=':--Article > [data-itemprop="description"]';r.wrap(e,"h2","div.panel-heading"),r.wrap(e,"p","div.panel-body")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(4),n(5),n(2),n(11),n(12)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},,function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0}),t.themes={bootstrap:Promise.resolve().then(()=>r(n(13))),elife:Promise.resolve().then(()=>r(n(14))),nature:Promise.resolve().then(()=>r(n(15))),plos:Promise.resolve().then(()=>r(n(16))),rpng:Promise.resolve().then(()=>r(n(17))),skeleton:Promise.resolve().then(()=>r(n(18))),stencila:Promise.resolve().then(()=>r(n(19)))}}]);