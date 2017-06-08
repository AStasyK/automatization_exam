/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*! JsRender v0.9.84 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return re(t)&&(t=n(e?e._d?e:n(s,e):s,t),t._d=1),t}function i(e,t){for(var n in t.props)Me.test(n)&&(e[n]=r(e.constructor.prototype[n],t.props[n]))}function o(e){return e}function s(){return""}function a(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t,n){return e?ie(e)?u.apply(te,e):(ue.delimiters=[e,t,me=n?n.charAt(0):me],fe=e.charAt(0),ge=e.charAt(1),ve=t.charAt(0),he=t.charAt(1),e="\\"+fe+"(\\"+me+")?\\"+ge,t="\\"+ve+"\\"+he,Y="(?:(\\w+(?=[\\/\\s\\"+ve+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ve+"]|\\"+ve+"(?!\\"+he+"))*?)",le.rTag="(?:"+Y+")",Y=new RegExp("(?:"+e+Y+"(\\/)?|\\"+fe+"(\\"+me+")?\\"+ge+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),le.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),ce):ue.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,s=this,a=!t||"root"===t;if(e){if(o=t&&s.type===t&&s,!o)if(n=s.views,s._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(a)for(;s.parent;)o=s,s=s.parent;else for(;s&&!o;)o=s.type===t?s:void 0,s=s.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t,n){var r,i,o=this,s=o.ctx;if(s&&(s=s[t]),void 0===s&&(s=ae[t]),s&&s._cp){if(n)return i=s[1]?le._ceo(s[1].deps):["_jsvCp"],i.unshift(s[0]),i._cp=s._cp,i;s=te.getCtx(s)}return s&&re(s)&&!s._wrp&&(r=function(){return s.apply(this&&this!==e?this:o,arguments)},r._wrp=o,l(r,s)),r||s}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||oe(e))}function h(e,t,n,r){var o,s,a="number"==typeof n&&t.tmpl.bnds[n-1],d=t.linkCtx;return void 0===r&&a&&a._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:a&&(n=a(t.data,t,le)),a=a._bd&&a,s=n.args[0],(e||a)&&(o=d&&d.tag,o||(o=l(new le._tg,{_:{inline:!d,bnd:a,unlinked:!0},tagName:":",cvt:e,flow:!0,tagCtx:n}),d&&(d.tag=o,o.linkCtx=d),n.ctx=H(n.ctx,(d?d.view:t).ctx)),o._er=r&&s,i(o,n),n.view=t,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,s=o.cvtArgs("true"!==e&&e)[0]),s=a&&t._.onRender?t._.onRender(s,t,o):s,void 0!=s?s:""}function m(e,t){var n,r,i,o=this,s=o.tagCtx,a=s.args,d=o.bindTo;if(e=e||o.convert,""+e===e&&(e=s.view.getRsc("converters",e)||O("Unknown converter: '"+e+"'")),a.length||o.argDefault===!1||s.index?e&&!t&&(a=a.slice()):a=[s.view.data],d){for(i=[],n=d.length;n--;)r=d[n],i.unshift(w(s,r));t&&(a=i)}if(e)if(d=d||[0],e=e.apply(o,i||a),n=d.length,n<2&&(e=[e]),t)a=e;else for(;n--;)r=d[n],+r===r&&(a[r]=e?e[n]:void 0);return a}function w(e,t){return e=e[+t===t?"args":"props"],e&&e[t]}function x(){return this.cvtArgs(void 0,!0)}function _(e,t){for(var n,r,i=this;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||te[e][t]}function b(e,t,n){var r=this;r.ctx[t]=le._cp(w(r,e),w(r.params,e),r.view,n)}function y(e,n,r,o,s,a){n=n||ee;var d,l,u,p,c,f,g,v,h,m,w,x,_,y,k,j,C,T,A,R,V,$,M,N=0,E="",F=n.linkCtx||0,I=n.ctx,U=r||n.tmpl,q="number"==typeof o&&n.tmpl.bnds[o-1];for("tag"===e._is?(d=e,e=d.tagName,o=d.tagCtxs,u=d.template):(l=n.getRsc("tags",e)||O("Unknown tag: {{"+e+"}} "),u=l.template),void 0===a&&q&&q._lr&&(a=""),void 0!==a?(E+=a,o=a=[{props:{},args:[]}]):q&&(o=q(n.data,n,le)),g=o.length;N<g;N++)m=o[N],(!F||!F.tag||N&&!F.tag._.inline||d._er)&&((y=U.tmpls&&m.tmpl)&&(y=m.content=U.tmpls[y-1]),m.index=N,m.tmpl=y,m.render=S,m.ctxPrm=b,m.view=n,m.ctx=H(m.ctx,I)),(r=m.props.tmpl)&&(m.tmpl=n.getTmpl(r)),d||(d=new l._ctr,k=!!d.init,d.parent=f=I&&I.tag,d.tagCtxs=o,V=d.dataMap,F&&(d._.inline=!1,F.tag=d,d.linkCtx=F),(d._.bnd=q||F.fn)?d._.arrVws={}:d.dataBoundOnly&&O("{^{"+e+"}} tag must be data-bound")),_=d.bindTo||[0],o=d.tagCtxs,V=d.dataMap,m.tag=d,V&&o&&(m.map=o[N].map),d.flow||(w=m.ctx=m.ctx||{},p=d.parents=w.parentTags=I&&H(w.parentTags,I.parentTags)||{},f&&(p[f.tagName]=f),p[d.tagName]=w.tag=d);if(!(d._er=a)){for(i(d,o[0]),d.rendering={},N=0;N<g;N++){if(m=d.tagCtx=o[N],A=m.props,T=d.cvtArgs(),d.linkedCtxParam)for(v=_.length;v--;)(x=d.linkedCtxParam[v])&&(M=_[v],m.ctxPrm(M,x,{tag:d,ind:v}));(j=A.dataMap||V)&&(T.length||A.dataMap)&&(C=m.map,C&&C.src===T[0]&&!s||(C&&C.src&&C.unmap(),C=m.map=j.map(T[0],A,void 0,!d._.bnd)),T=[C.tgt]),d.ctx=m.ctx,N||(k&&(R=d.template,d.init(m,F,d.ctx),k=void 0),F&&(F.attr=d.attr=F.attr||d.attr),c=d.attr,d._.noVws=c&&c!==Pe),h=void 0,d.render&&(h=d.render.apply(d,T),n.linked&&h&&d.linkedElem&&!Ne.test(h)&&(h=P(t.templates(h),T[0],void 0,void 0,n,void 0,void 0,d))),T.length||(T=[n]),void 0===h&&($=T[0],d.contentCtx&&($=d.contentCtx===!0?n:d.contentCtx($)),h=m.render($,!0)||(s?void 0:"")),E=E?E+(h||""):h}d.rendering=void 0}return d.tagCtx=o[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d._.inline&&(E="text"===c?se.html(E):""),q&&n._.onRender?n._.onRender(E,n,d):E}function k(e,t,n,r,i,o,s,a){var d,l,u,p=this,f="array"===t;p.content=a,p.views=f?[]:{},p.parent=n,p.type=t||"top",p.data=r,p.tmpl=i,u=p._={key:0,useKey:f?0:1,id:""+Fe++,onRender:s,bnds:{}},p.linked=!!s,n?(d=n.views,l=n._,l.useKey?(d[u.key="_"+l.useKey++]=p,p.index=qe,p.getIndex=c):d.length===(u.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e}function j(e){var t,n,r;for(t in Le)n=t+"s",e[n]&&(r=e[n],e[n]={},te[n](r,e))}function C(e,t,n){function i(){var t=this;t._={inline:!0,unlinked:!0},t.tagName=e}function o(e){var n;(n=t[e])&&(t[e]=n=ie(n)?n:[n],(c||1)!==n.length&&O(e+" length not same as bindTo "))}var s,a,d,u,p,c,f=t.bindTo,g=new le._tg;if(re(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),void 0!==f)for(f=t.bindTo=ie(f)?f:[f],u=c=f.length;u--;)p=f[u],isNaN(parseInt(p))||(p=parseInt(p)),f[u]=p;if(o("linkedElement"),o("linkedCtxParam"),a=t.baseTag){t.flow=!!t.flow,t.baseTag=a=""+a===a?n&&n.tags[a]||de[a]:a,g=l(g,a);for(d in t)g[d]=r(a[d],t[d])}else g=l(g,t);return void 0!==(s=g.template)&&(g.template=""+s===s?oe[s]||oe(s):s),(i.prototype=g).constructor=g._ctr=i,n&&(g._parentTmpl=n),g}function T(e){return this.base.apply(this,e)}function A(e,n,r,i){function o(n){var o,a;if(""+n===n||n.nodeType>0&&(s=n)){if(!s)if(/^\.\/[^\\:*?"<>]*$/.test(n))(a=oe[e=e||n])?n=a:s=document.getElementById(n);else if(t.fn&&!le.rTmpl.test(n))try{s=t(n,document)[0]}catch(d){}s&&(i?n=s.innerHTML:(o=s.getAttribute(Oe),o&&(o!==Ue?(n=oe[o],delete oe[o]):t.fn&&(n=t.data(s)[Ue])),o&&n||(e=e||(t.fn?Ue:n),n=A(e,s.innerHTML,r,i)),n.tmplName=e=e||o,e!==Ue&&(oe[e]=n),s.setAttribute(Oe,e),t.fn&&t.data(s,Ue,n))),s=void 0}else n.fn||(n=void 0);return n}var s,a,d=n=n||"";if(0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.fn||n.fn?d.fn&&(a=d):(n=M(d,i),q(d.replace(Ce,"\\$&"),n)),a||(a=l(function(){return a.render.apply(a,arguments)},n),j(a)),a}function R(e,n){return t.isFunction(e)?e.call(n):e}function V(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}function $(e,n){function r(e){u.apply(this,e)}function i(){return new r(arguments)}function o(e,t){for(var n,r,i,o,s=0;s<w;s++)i=c[s],n=void 0,i+""!==i&&(n=i,i=n.getter),void 0===(o=e[i])&&n&&void 0!==(r=n.defaultVal)&&(o=R(r,e)),t(o,n&&p[n.type],i)}function s(t){t=t+""===t?JSON.parse(t):t;var n,r,i=0,s=t,l=[];if(ie(t)){for(t=t||[],n=t.length;i<n;i++)l.push(this.map(t[i]));return l._is=e,l.unmap=d,l.merge=a,l}if(t){o(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),s=this.apply(this,l);for(r in t)r===ne||_[r]||(s[r]=t[r])}return s}function a(e){e=e+""===e?JSON.parse(e):e;var t,n,r,s,a,d,l,u,p,c=0,f=this;if(ie(f)){for(l={},p=[],n=e.length,r=f.length;c<n;c++){for(u=e[c],d=!1,t=0;t<r&&!d;t++)l[t]||(a=f[t],g&&(l[t]=d=g+""===g?u[g]&&(_[g]?a[g]():a[g])===u[g]:g(a,u)));d?(a.merge(u),p.push(a)):p.push(i.map(u))}return void(x?x(f).refresh(p,!0):f.splice.apply(f,[0,f.length].concat(p)))}o(e,function(e,t,n){t?f[n]().merge(e):f[n](e)});for(s in e)s===ne||_[s]||(f[s]=e[s])}function d(){var e,n,r,i,o=0,s=this;if(ie(s))return V(s);for(e={};o<w;o++)n=c[o],r=void 0,n+""!==n&&(r=n,n=r.getter),i=s[n](),e[n]=r&&i&&p[r.type]?ie(i)?V(i):i.unmap():i;for(n in s)"_is"===n||_[n]||n===ne||"_"===n.charAt(0)&&_[n.slice(1)]||t.isFunction(s[n])||(e[n]=s[n]);return e}var l,u,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:a},f),h="",m="",w=c?c.length:0,x=t.observable,_={};for(r.prototype=v,l=0;l<w;l++)!function(e){e=e.getter||e,_[e]=l+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[l]);return u=new Function(h,m.slice(0,-1)),u.prototype=v,v.constructor=u,i.map=s,i.getters=c,i.extend=f,i.id=g,i}function M(e,n){var r,i=pe._wm||{},o=l({tmpls:[],links:{},bnds:[],_is:"template",render:S},n);return o.markup=e,n.htmlTag||(r=Re.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function N(e,t){function n(i,o,s){var a,d,l,u=le.onStore[e];if(i&&typeof i===Ie&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||te}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(s=o,o=i,i=void 0),l=s?"viewModel"===e?s:s[r]=s[r]||{}:n,a=t.compile,null===o?i&&delete l[i]:(a&&(o=a.call(l,i,o,s,0),o._is=e),i&&(l[i]=o)),u&&u(i,o,s,a),o}var r=e+"s";te[r]=n}function E(e){ce[e]=function(t){return arguments.length?(ue[e]=t,ce):ue[e]}}function F(e){function t(t,n){this.tgt=e.getTgt(t,n)}return re(e)&&(e={getTgt:e}),e.baseMap&&(e=l(l({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function S(e,t,n,r,i,o){var s,a,d,l,u,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Ie&&(t=void 0),(d=this.tag)?(u=this,g=g||u.view,l=g.getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,xe=xe||p,g||((t=t||{}).root=e),!xe||pe.useViews||l.useViews||g&&g!==ee)v=P(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=qe):(g=ee,g.data=e,g.ctx=t),ie(e)&&!n)for(s=0,a=e.length;s<a;s++)g.index=s,g.data=e[s],v+=l.fn(e[s],g,le);else g.data=e,v+=l.fn(e,g,le);g.data=c,g.index=f}p&&(xe=void 0)}return v}function P(e,t,n,r,i,o,s,a){function d(e){_=l({},n),_[x]=e}var u,p,c,f,g,v,h,m,w,x,_,b,y="";if(a&&(w=a.tagName,b=a.tagCtx,n=n?H(n,a.ctx):a.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==b.content?e===a.template?(h=b.tmpl,n._wrp=b.content):h=b.content||i.content:h=i.content,b.props.link===!1&&(n=n||{},n.link=!1),(x=b.props.itemVar)&&("~"!==x.charAt(0)&&U("Use itemVar='~myItem'"),x=x.slice(1))),i&&(s=s||i._.onRender,n=H(n,i.ctx)),o===!0&&(v=!0,o=0),s&&(n&&n.link===!1||a&&a._.noVws)&&(s=void 0),m=s,s===!0&&(m=void 0,s=i._.onRender),n=e.helpers?H(e.helpers,n):n,_=n,ie(t)&&!r)for(c=v?i:void 0!==o&&i||new k(n,"array",i,t,e,o,s,h),i&&i._.useKey&&(c._.bnd=!a||a._.bnd&&a),x&&(c.it=x),x=c.it,u=0,p=t.length;u<p;u++)x&&d(t[u]),f=new k(_,"item",c,t[u],e,(o||0)+u,s,c.content),g=e.fn(t[u],f,le),y+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new k(_,w||"data",i,t,e,o,s,h),a&&!a.flow&&(c.tag=a,a.view=c),y+=e.fn(t,c,le);return m?m(y,c):y}function I(e,t,n){var r=void 0!==n?re(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";return ue.onError&&void 0!==(n=ue.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?se.html(r):r}function O(e){throw new le.Err(e)}function U(e){O("Syntax error\n"+e)}function q(e,t,n,r,i){function o(t){t-=v,t&&m.push(e.substr(v,t).replace(ke,"\\n"))}function s(t,n){t&&(t+="}}",U((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function a(a,d,l,c,g,x,_,b,y,k,j,C){(_&&d||y&&!l||b&&":"===b.slice(-1)||k)&&U(a),x&&(g=":",c=Pe),y=y||n&&!i;var T,A=(d||n)&&[[]],R="",V="",$="",M="",N="",E="",F="",S="",P=!y&&!g;l=l||(b=b||"#data",g),o(C),v=C+a.length,_?f&&m.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(je,"$1")+";\n"]):l?("else"===l&&(Ae.test(b)&&U('for "{{else if expr}}" use "{{else expr}}"'),A=w[8]&&[[]],w[9]=e.substring(w[9],C),w=h.pop(),m=w[2],P=!0),b&&L(b.replace(ke," "),A,t).replace(Te,function(e,t,n,r,i,o,s,a){return r="'"+i+"':",s?(V+=o+",",M+="'"+a+"',"):n?($+=r+"j._cp("+o+',"'+a+'",view),',E+=r+"'"+a+"',"):t?F+=o:("trigger"===i&&(S+=o),"lateRender"===i&&(T=1),R+=r+o+",",N+=r+"'"+a+"',",p=p||Me.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[l,c||!!r||p||"",P&&[],K(M||(":"===l?"'#data',":""),N,E),K(V||(":"===l?"data,":""),R,$),F,S,T,A||0],m.push(u),P&&(h.push(w),w=u,w[9]=v)):j&&(s(j!==w[0]&&"else"!==w[0]&&j,w[0]),w[9]=e.substring(w[9],C),w=h.pop()),s(!w&&j),m=w[2]}var d,l,u,p,c,f=ue.allowCode||t&&t.allowCode||ce.allowCode===!0,g=[],v=0,h=[],m=g,w=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+ve),e=fe+e+he),s(h[0]&&h[0][2].pop()[0]),e.replace(Y,a),o(e.length),(v=g[g.length-1])&&s(""+v!==v&&+v[9]===v[9]&&v[0]),n){for(l=Q(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][8]);J(l,c)}else l=Q(g,t);return l}function J(e,t){var n,r,i=0,o=t.length;for(e.deps=[],e.paths=[];i<o;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function K(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function B(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function L(e,t,n){function r(r,m,w,x,_,b,y,k,j,C,T,A,R,V,$,M,N,E,F,S){function P(e,n,r,s,a,d,p,c){var f="."===r;if(r&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&U(e),f||(e=(s?'view.hlp("'+s+'")':a?"view":"data")+(c?(d?"."+d:s?"":a?"":"."+r)+(p||""):(c=s?"":a?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),l)){if(J="linkTo"===i?o=t._jsvto=t._jsvto||[]:u.bd,K=f&&J[J.length-1]){if(K._jsv){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[g]=F+(f?1:0)}return e}x&&!k&&(_=x+_),b=b||"",w=w||m||A,_=_||j,C=C||N||"";var I,O,J,K,B,L=")";if("["===C&&(C="[j._sq(",L=")]"),!y||d||a){if(l&&M&&!d&&!a&&(!i||s||o)&&(I=h[g-1],S.length-1>F-(I||0))){if(I=S.slice(I,F+r.length),O!==!0)if(J=o||p[g-1].bd,K=J[J.length-1],K&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;B=K.sb={path:K.sb,bnd:K.bnd}}else J.push(B={path:J.pop()});M=ge+":"+I+" onerror=''"+ve,O=f[M],O||(f[M]=!0,f[M]=O=q(M,n,!0)),O!==!0&&B&&(B._jsv=O,B.prm=u.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return d?(d=!R,d?r:A+'"'):a?(a=!V,a?r:A+'"'):(w?(h[g]=F++,u=p[++g]={bd:[]},w):"")+(E?g?"":(c=S.slice(c,F),(i?(i=s=o=!1,"\b"):"\b,")+c+(c=F+r.length,l&&t.push(u.bd=[]),"\b")):k?(g&&U(e),l&&t.pop(),i=_,s=x,c=F+r.length,l&&(l=u.bd=t[i]=[],l.skp=!x),_+":"):_?_.split("^").join(".").replace(be,P)+(C?(u=p[++g]={bd:[]},v[g]=L,C):b):b?b:$?($=v[g]||$,v[g]=!1,u=p[--g],$+(C?(u=p[++g],v[g]=L,C):"")):T?(v[g]||U(e),","):m?"":(d=R,a=V,'"'))}U(e)}var i,o,s,a,d,l=t&&t[0],u={bd:l},p={0:u},c=0,f=(n?n.links:l&&(l.links=l.links||{}))||ee.tmpl.links,g=0,v={},h={},m=(e+(n?" ":"")).replace(ye,r);return!g&&m||U(e)}function Q(e,t,n){var r,i,o,s,a,d,l,u,p,c,f,g,v,h,m,w,x,_,b,y,k,j,C,T,A,R,V,$,N,E,F,S=0,P=pe.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,I="",O={},q=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(ke," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(O.allowCode=!0),t.debug&&(O.debug=!0),f=t.bnds,x=t.tmpls),r=0;r<q;r++)if(i=e[r],""+i===i)I+='\n+"'+i+'"';else if(o=i[0],"*"===o)I+=";\n"+i[1]+"\nret=ret";else{if(s=i[1],k=!n&&i[2],a=B(i[3],"params")+"},"+B(v=i[4]),$=i[5],E=i[6],F=i[7],j=i[9]&&i[9].replace(je,"$1"),(A="else"===o)?g&&g.push(i[8]):f&&(g=i[8])&&(g=[g],S=f.push(1)),P=P||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?s&&(o=s===Pe?">":s+o):(k&&(b=M(j,O),b.tmplName=_+"/"+o,b.useViews=b.useViews||P,Q(k,b),P=b.useViews,x.push(b)),A||(y=o,P=P||o&&(!de[o]||!de[o].flow),T=I,I=""),C=e[r+1],C=C&&"else"===C[0]),N=$?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||E||s&&s!==Pe||F)){if(V=new Function("data,view,j,u","// "+_+" "+ ++S+" "+o+"\nreturn {"+a+"};"),V._er=$,V._tag=o,V._bd=!!g,V._lr=F,n)return V;J(V,g),w='c("'+s+'",view,',c=!0,h=w+S+",",m=")"}if(I+=R?(n?($?"try{\n":"")+"return ":N)+(c?(c=void 0,P=p=!0,w+(V?(f[S-1]=V,S):"{"+a+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(u=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+a+"},"),y&&!C){if(I="["+I.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(I=new Function("data,view,j,u"," // "+_+" "+S+" "+y+"\nreturn "+I+";"),I._er=$,I._tag=y,g&&J(f[S-1]=I,g),I._lr=F,n)return I;h=w+S+",undefined,",m=")"}I=T+N+w+(I.deps&&S||I)+")",g=0,y=0}$&&(P=!0,I+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+$+")"+m+";}"+(n?"":"ret=ret"))}I="// "+_+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(O.debug?"debugger;":"")+I+(n?"\n":";\nreturn ret;"),ue.debugMode!==!1&&(I="try {\n"+I+"\n}catch(e){\nreturn j._err(e, view);\n}");try{I=new Function("data,view,j,u",I)}catch(K){U("Compiled template code:\n\n"+I+'\n: "'+(K.message||K)+'"')}return t&&(t.fn=I,t.useViews=!!P),I}function H(e,t){return e&&e!==t?t?l(l({},t),e):e:t&&l({},t)}function D(e){return Se[e]||(Se[e]="&#"+e.charCodeAt(0)+";")}function Z(e){var t,n,r=[];if(typeof e===Ie)for(t in e)n=e[t],t!==ne&&e.hasOwnProperty(t)&&!re(n)&&r.push({key:t,prop:n});return r}function z(e,n,r){var i=this.jquery&&(this[0]||O("Unknown template")),o=i.getAttribute(Oe);return S.call(o?t.data(i)[Ue]:oe(i),e,n,r)}function G(e){return void 0!=e?$e.test(e)&&(""+e).replace(Ee,D)||e:""}var W=t===!1;t=t&&t.fn?t:e.jQuery;var X,Y,ee,te,ne,re,ie,oe,se,ae,de,le,ue,pe,ce,fe,ge,ve,he,me,we,xe,_e="v0.9.84",be=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ye=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,ke=/[ \t]*(\r\n|\n|\r)/g,je=/\\(['"])/g,Ce=/['"\\]/g,Te=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Ae=/^if\s/,Re=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Me=/^on[A-Z]|^convert(Back)?$/,Ne=/^\#\d+_`[\s\S]*\/\d+_`$/,Ee=Ve,Fe=0,Se={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Pe="html",Ie="object",Oe="data-jsv-tmpl",Ue="jsvTmpl",qe="For #index in nested block use #getIndex().",Je={},Ke=e.jsrender,Be=Ke&&t&&!t.render,Le={template:{compile:A},tag:{compile:C},viewModel:{compile:$},helper:{},converter:{}};if(te={jsviews:_e,sub:{View:k,Err:d,tmplFn:q,parse:L,extend:l,extendCtx:H,syntaxErr:U,onStore:{template:function(e,t){null===t?delete Je[e]:Je[e]=t}},addSetting:E,settings:{allowCode:!1},advSet:s,_ths:i,_gm:r,_tg:function(){},_cnvt:h,_tag:y,_er:O,_err:I,_html:G,_cp:o,_sq:function(e){return"constructor"===e&&U(""),e}},settings:{delimiters:u,advanced:function(e){return e?(l(pe,e),le.advSet(),ce):pe}},getCtx:o,map:F},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",k.prototype={get:p,getIndex:f,getRsc:_,getTmpl:v,hlp:g,_is:"view"},le=te.sub,ce=te.settings,!(Ke||t&&t.render)){for(X in Le)N(X,Le[X]);se=te.converters,ae=te.helpers,de=te.tags,le._tg.prototype={baseApply:T,cvtArgs:m,bndArgs:x},ee=le.topView=new k,t?(t.fn.render=z,ne=t.expando,t.observable&&(l(le,t.views.sub),te.map=t.views.map)):(t={},W&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},le._jq=function(e){e!==t&&(l(e,t),t=e,t.fn.render=z,delete t.jsrender,ne=t.expando)},t.jsrender=_e),ue=le.settings,ue.allowCode=!1,re=t.isFunction,t.render=Je,t.views=te,t.templates=oe=te.templates;for(we in ue)E(we);(ce.debugMode=function(e){return void 0===e?ue.debugMode:(ue.debugMode=e,ue.onError=e+""===e?new Function("","return '"+e+"';"):re(e)?e:void 0,ce)})(!1),pe=ue.advanced={useViews:!1,_jsv:!1},de({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,t.selected=n.index,n.render(n.view,!0));return r},flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",s=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),s+=ie(t)?t.length:1),(r.rendering.done=s)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:F(Z),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ae.dbg=se.dbg=a}),se({html:G,attr:G,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return ue=le.settings,ie=(t||Ke).isArray,ce.delimiters("{{","}}","^"),Be&&Ke.views.sub._jq(t),t||Ke},window);
//# sourceMappingURL=jsrender.min.js.map
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/**
 * smartcrop.js
 * A javascript library implementing content aware image cropping
 *
 * Copyright (C) 2016 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {
'use strict';

var smartcrop = {};
// Promise implementation to use
smartcrop.Promise = typeof Promise !== 'undefined' ? Promise : function() {
  throw new Error('No native promises and smartcrop.Promise not set.');
};

smartcrop.DEFAULTS = {
  width: 0,
  height: 0,
  aspect: 0,
  cropWidth: 0,
  cropHeight: 0,
  detailWeight: 0.2,
  skinColor: [0.78, 0.57, 0.44],
  skinBias: 0.01,
  skinBrightnessMin: 0.2,
  skinBrightnessMax: 1.0,
  skinThreshold: 0.8,
  skinWeight: 1.8,
  saturationBrightnessMin: 0.05,
  saturationBrightnessMax: 0.9,
  saturationThreshold: 0.4,
  saturationBias: 0.2,
  saturationWeight: 0.3,
  // Step * minscale rounded down to the next power of two should be good
  scoreDownSample: 8,
  step: 8,
  scaleStep: 0.1,
  minScale: 1.0,
  maxScale: 1.0,
  edgeRadius: 0.4,
  edgeWeight: -20.0,
  outsideImportance: -0.5,
  boostWeight: 100.0,
  ruleOfThirds: true,
  prescale: true,
  imageOperations: null,
  canvasFactory: defaultCanvasFactory,
  // Factory: defaultFactories,
  debug: false,
};



smartcrop.crop = function(inputImage, options_, callback) {
  var options = extend({}, smartcrop.DEFAULTS, options_);

  if (options.aspect) {
    options.width = options.aspect;
    options.height = 1;
  }

  if (options.imageOperations === null) {
    options.imageOperations = canvasImageOperations(options.canvasFactory);
  }

  var iop = options.imageOperations;

  var scale = 1;
  var prescale = 1;

  return iop.open(inputImage, options.input).then(function(image) {

    if (options.width && options.height) {
      scale = min(image.width / options.width, image.height / options.height);
      options.cropWidth = ~~(options.width * scale);
      options.cropHeight = ~~(options.height * scale);
      // Img = 100x100, width = 95x95, scale = 100/95, 1/scale > min
      // don't set minscale smaller than 1/scale
      // -> don't pick crops that need upscaling
      options.minScale = min(options.maxScale, max(1 / scale, options.minScale));

      if (options.prescale !== false) {
        prescale = 1 / scale / options.minScale;
        if (prescale < 1) {
          image = iop.resample(image, image.width * prescale, image.height * prescale);
          options.cropWidth = ~~(options.cropWidth * prescale);
          options.cropHeight = ~~(options.cropHeight * prescale);
          if (options.boost) {
            options.boost = options.boost.map(function(boost) {
              return {
                x: ~~(boost.x * prescale),
                y: ~~(boost.y * prescale),
                width: ~~(boost.width * prescale),
                height: ~~(boost.height * prescale),
                weight: boost.weight
              };
            });
          }
        }
        else {
          prescale = 1;
        }
      }
    }
    return image;
  })
  .then(function(image) {
    return iop.getData(image).then(function(data) {
      var result = analyse(options, data);

      var crops = result.crops || [result.topCrop];
      for (var i = 0, iLen = crops.length; i < iLen; i++) {
        var crop = crops[i];
        crop.x = ~~(crop.x / prescale);
        crop.y = ~~(crop.y / prescale);
        crop.width = ~~(crop.width / prescale);
        crop.height = ~~(crop.height / prescale);
      }
      if (callback) callback(result);
      return result;
    });
  });
};


// Check if all the dependencies are there
// todo:
smartcrop.isAvailable = function(options) {
  if (!smartcrop.Promise) return false;

  var canvasFactory = options ? options.canvasFactory : defaultCanvasFactory;

  if (canvasFactory === defaultCanvasFactory) {
    var c = document.createElement('canvas');
    if (!c.getContext('2d')) {
      return false;
    }
  }

  return true;
};

function edgeDetect(i, o) {
  var id = i.data;
  var od = o.data;
  var w = i.width;
  var h = i.height;

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var p = (y * w + x) * 4;
      var lightness;

      if (x === 0 || x >= w - 1 || y === 0 || y >= h - 1) {
        lightness = sample(id, p);
      }
      else {
        lightness = sample(id, p) * 4 -
            sample(id, p - w * 4) -
            sample(id, p - 4) -
            sample(id, p + 4) -
            sample(id, p + w * 4);
      }

      od[p + 1] = lightness;
    }
  }
}

function skinDetect(options, i, o) {
  var id = i.data;
  var od = o.data;
  var w = i.width;
  var h = i.height;

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var p = (y * w + x) * 4;
      var lightness = cie(id[p], id[p + 1], id[p + 2]) / 255;
      var skin = skinColor(options, id[p], id[p + 1], id[p + 2]);
      var isSkinColor = skin > options.skinThreshold;
      var isSkinBrightness = lightness >= options.skinBrightnessMin && lightness <= options.skinBrightnessMax;
      if (isSkinColor && isSkinBrightness) {
        od[p] = (skin - options.skinThreshold) * (255 / (1 - options.skinThreshold));
      }
      else {
        od[p] = 0;
      }
    }
  }
}

function saturationDetect(options, i, o) {
  var id = i.data;
  var od = o.data;
  var w = i.width;
  var h = i.height;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var p = (y * w + x) * 4;

      var lightness = cie(id[p], id[p + 1], id[p + 2]) / 255;
      var sat = saturation(id[p], id[p + 1], id[p + 2]);

      var acceptableSaturation = sat > options.saturationThreshold;
      var acceptableLightness = lightness >= options.saturationBrightnessMin &&
          lightness <= options.saturationBrightnessMax;
      if (acceptableLightness && acceptableLightness) {
        od[p + 2] = (sat - options.saturationThreshold) * (255 / (1 - options.saturationThreshold));
      }
      else {
        od[p + 2] = 0;
      }
    }
  }
}

function applyBoosts(options, output) {
  if (!options.boost) return;
  var od = output.data;
  for (var i = 0; i < output.width; i += 4) {
    od[i + 3] = 0;
  }
  for (i = 0; i < options.boost.length; i++) {
    applyBoost(options.boost[i], options, output);
  }
}

function applyBoost(boost, options, output) {
  var od = output.data;
  var w = output.width;
  var x0 = ~~boost.x;
  var x1 = ~~(boost.x + boost.width);
  var y0 = ~~boost.y;
  var y1 = ~~(boost.y + boost.height);
  var weight = boost.weight * 255;
  for (var y = y0; y < y1; y++) {
    for (var x = x0; x < x1; x++) {
      var i = (y * w + x) * 4;
      od[i + 3] += weight;
    }
  }
}

function generateCrops(options, width, height) {
  var results = [];
  var minDimension = min(width, height);
  var cropWidth = options.cropWidth || minDimension;
  var cropHeight = options.cropHeight || minDimension;
  for (var scale = options.maxScale; scale >= options.minScale; scale -= options.scaleStep) {
    for (var y = 0; y + cropHeight * scale <= height; y += options.step) {
      for (var x = 0; x + cropWidth * scale <= width; x += options.step) {
        results.push({
          x: x,
          y: y,
          width: cropWidth * scale,
          height: cropHeight * scale,
        });
      }
    }
  }
  return results;
}

function score(options, output, crop) {
  var result = {
    detail: 0,
    saturation: 0,
    skin: 0,
    boost: 0,
    total: 0,
  };

  var od = output.data;
  var downSample = options.scoreDownSample;
  var invDownSample = 1 / downSample;
  var outputHeightDownSample = output.height * downSample;
  var outputWidthDownSample = output.width * downSample;
  var outputWidth = output.width;

  for (var y = 0; y < outputHeightDownSample; y += downSample) {
    for (var x = 0; x < outputWidthDownSample; x += downSample) {
      var p = (~~(y * invDownSample) * outputWidth + ~~(x * invDownSample)) * 4;
      var i = importance(options, crop, x, y);
      var detail = od[p + 1] / 255;

      result.skin += od[p] / 255 * (detail + options.skinBias) * i;
      result.detail += detail * i;
      result.saturation += od[p + 2] / 255 * (detail + options.saturationBias) * i;
      result.boost += od[p + 3] / 255 * i;
    }
  }

  result.total = (result.detail * options.detailWeight +
                  result.skin * options.skinWeight +
                  result.saturation * options.saturationWeight +
                  result.boost * options.boostWeight) / (crop.width * crop.height);
  return result;
}

function importance(options, crop, x, y) {
  if (crop.x > x || x >= crop.x + crop.width || crop.y > y || y >= crop.y + crop.height) {
    return options.outsideImportance;
  }
  x = (x - crop.x) / crop.width;
  y = (y - crop.y) / crop.height;
  var px = abs(0.5 - x) * 2;
  var py = abs(0.5 - y) * 2;
  // Distance from edge
  var dx = Math.max(px - 1.0 + options.edgeRadius, 0);
  var dy = Math.max(py - 1.0 + options.edgeRadius, 0);
  var d = (dx * dx + dy * dy) * options.edgeWeight;
  var s = 1.41 - sqrt(px * px + py * py);
  if (options.ruleOfThirds) {
    s += (Math.max(0, s + d + 0.5) * 1.2) * (thirds(px) + thirds(py));
  }
  return s + d;
}
smartcrop.importance = importance;

function skinColor(options, r, g, b) {
  var mag = sqrt(r * r + g * g + b * b);
  var rd = (r / mag - options.skinColor[0]);
  var gd = (g / mag - options.skinColor[1]);
  var bd = (b / mag - options.skinColor[2]);
  var d = sqrt(rd * rd + gd * gd + bd * bd);
  return 1 - d;
}

function analyse(options, input) {
  var result = {};
  var output = new ImgData(input.width, input.height);

  edgeDetect(input, output);
  skinDetect(options, input, output);
  saturationDetect(options, input, output);
  applyBoosts(options, output);

  var scoreOutput = downSample(output, options.scoreDownSample);

  var topScore = -Infinity;
  var topCrop = null;
  var crops = generateCrops(options, input.width, input.height);

  for (var i = 0, iLen = crops.length; i < iLen; i++) {
    var crop = crops[i];
    crop.score = score(options, scoreOutput, crop);
    if (crop.score.total > topScore) {
      topCrop = crop;
      topScore = crop.score.total;
    }

  }

  result.topCrop = topCrop;

  if (options.debug && topCrop) {
    result.crops = crops;
    result.debugOutput = output;
    result.debugOptions = options;
    // Create a copy which will not be adjusted by the post scaling of smartcrop.crop
    result.debugTopCrop = extend({}, result.topCrop);
  }
  return result;
}

function ImgData(width, height, data) {
  this.width = width;
  this.height = height;
  if (data) {
    this.data = new Uint8ClampedArray(data);
  }
  else {
    this.data = new Uint8ClampedArray(width * height * 4);
  }
}
smartcrop.ImgData = ImgData;

function downSample(input, factor) {
  var idata = input.data;
  var iwidth = input.width;
  var width = Math.floor(input.width / factor);
  var height = Math.floor(input.height / factor);
  var output = new ImgData(width, height);
  var data = output.data;
  var ifactor2 = 1 / (factor * factor);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var i = (y * width + x) * 4;

      var r = 0;
      var g = 0;
      var b = 0;
      var a = 0;

      var mr = 0;
      var mg = 0;
      var mb = 0;

      for (var v = 0; v < factor; v++) {
        for (var u = 0; u < factor; u++) {
          var j = ((y * factor + v) * iwidth + (x * factor + u)) * 4;
          r += idata[j];
          g += idata[j + 1];
          b += idata[j + 2];
          a += idata[j + 3];
          mr = Math.max(mr, idata[j]);
          mg = Math.max(mg, idata[j + 1]);
          mb = Math.max(mb, idata[j + 2]);
        }
      }
      // this is some funky magic to preserve detail a bit more for
      // skin (r) and detail (g). Saturation (b) does not get this boost.
      data[i] = r * ifactor2 * 0.5 + mr * 0.5;
      data[i + 1] = g * ifactor2 * 0.7 + mg * 0.3;
      data[i + 2] = b * ifactor2;
      data[i + 3] = a * ifactor2;
    }
  }
  return output;
}
smartcrop._downSample = downSample;

function defaultCanvasFactory(w, h) {
  var c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function canvasImageOperations(canvasFactory) {
  return {
    // Takes imageInput as argument
    // returns an object which has at least
    // {width: n, height: n}
    open: function(image) {
      // Work around images scaled in css by drawing them onto a canvas
      var w = image.naturalWidth || image.width;
      var h = image.naturalHeight || image.height;
      var c = canvasFactory(w, h);
      var ctx = c.getContext('2d');
      if (image.naturalWidth && (image.naturalWidth != image.width || image.naturalHeight != image.height)) {
        c.width = image.naturalWidth;
        c.height = image.naturalHeight;
      }
      else {
        c.width = image.width;
        c.height = image.height;
      }
      ctx.drawImage(image, 0, 0);
      return smartcrop.Promise.resolve(c);
    },
    // Takes an image (as returned by open), and changes it's size by resampling
    resample: function(image, width, height) {
      return Promise.resolve(image).then(function(image) {
        var c = canvasFactory(~~width, ~~height);
        var ctx = c.getContext('2d');

        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, c.width, c.height);
        return smartcrop.Promise.resolve(c);
      });
    },
    getData: function(image) {
      return Promise.resolve(image).then(function(c) {
        var ctx = c.getContext('2d');
        var id = ctx.getImageData(0, 0, c.width, c.height);
        return new ImgData(c.width, c.height, id.data);
      });
    },
  };
}
smartcrop._canvasImageOperations = canvasImageOperations;

// Aliases and helpers
var min = Math.min;
var max = Math.max;
var abs = Math.abs;
var ceil = Math.ceil;
var sqrt = Math.sqrt;

function extend(o) {
  for (var i = 1, iLen = arguments.length; i < iLen; i++) {
    var arg = arguments[i];
    if (arg) {
      for (var name in arg) {
        o[name] = arg[name];
      }
    }
  }
  return o;
}

// Gets value in the range of [0, 1] where 0 is the center of the pictures
// returns weight of rule of thirds [0, 1]
function thirds(x) {
  x = ((x - (1 / 3) + 1.0) % 2.0 * 0.5 - 0.5) * 16;
  return Math.max(1.0 - x * x, 0.0);
}

function cie(r, g, b) {
  return 0.5126 * b + 0.7152 * g + 0.0722 * r;
}
function sample(id, p) {
  return cie(id[p], id[p + 1], id[p + 2]);
}
function saturation(r, g, b) {
  var maximum = max(r / 255, g / 255, b / 255);
  var minumum = min(r / 255, g / 255, b / 255);

  if (maximum === minumum) {
    return 0;
  }

  var l = (maximum + minumum) / 2;
  var d = maximum - minumum;

  return l > 0.5 ? d / (2 - maximum - minumum) : d / (maximum + minumum);
}

// Amd
if (typeof define !== 'undefined' && define.amd) define(function() {return smartcrop;});
// Common js
if (typeof exports !== 'undefined') exports.smartcrop = smartcrop;
// Browser
else if (typeof navigator !== 'undefined') window.SmartCrop = window.smartcrop = smartcrop;
// Nodejs
if (typeof module !== 'undefined') {
  module.exports = smartcrop;
}
})();
/*! ----------------------------------------------------------------------------
 *  A jQuery plugin to detect faces on images, videos and canvases.
 *  v2.0.2 released 2015-02-18 12:57
 *  http://facedetection.jaysalvat.com
 *  Copyright (c) 2010-2015, Jay Salvat
 *  http://jaysalvat.com/
 *  ----------------------------------------------------------------------------
 *  ccv.js and cascade.js
 *  Copyright (c) 2010-2015, Liu Liu
 *  http://liuliu.me/
 *  ----------------------------------------------------------------------------
 */
!function($) {
    function get_named_arguments(params, names) {
        if (params.length > 1) {
            for (var new_params = {}, i = 0; i < names.length; i++) new_params[names[i]] = params[i];
            return new_params;
        }
        return 1 == params.length ? params[0] : {};
    }
    var cascade = {
        count: 16,
        width: 24,
        height: 24,
        stage_classifier: [ {
            count: 4,
            threshold: -4.57753,
            feature: [ {
                size: 4,
                px: [ 3, 5, 8, 11 ],
                py: [ 2, 2, 6, 3 ],
                pz: [ 2, 1, 1, 0 ],
                nx: [ 8, 4, 0, 0 ],
                ny: [ 4, 4, 0, 0 ],
                nz: [ 1, 1, -1, -1 ]
            }, {
                size: 3,
                px: [ 3, 6, 7 ],
                py: [ 7, 13, 0 ],
                pz: [ 1, 0, -1 ],
                nx: [ 2, 3, 4 ],
                ny: [ 5, 4, 4 ],
                nz: [ 2, 1, 1 ]
            }, {
                size: 5,
                px: [ 5, 3, 10, 13, 11 ],
                py: [ 1, 0, 3, 2, 2 ],
                pz: [ 1, 2, 0, 0, 0 ],
                nx: [ 0, 11, 0, 11, 11 ],
                ny: [ 0, 2, 3, 1, 1 ],
                nz: [ 1, 1, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 6, 12, 12, 9, 12 ],
                py: [ 4, 13, 12, 7, 11 ],
                pz: [ 1, 0, 0, 1, 0 ],
                nx: [ 8, 0, 8, 2, 11 ],
                ny: [ 4, 0, 8, 5, 1 ],
                nz: [ 1, -1, -1, -1, -1 ]
            } ],
            alpha: [ -2.879683, 2.879683, -1.569341, 1.569341, -1.286131, 1.286131, -1.157626, 1.157626 ]
        }, {
            count: 4,
            threshold: -4.339908,
            feature: [ {
                size: 5,
                px: [ 13, 12, 3, 11, 17 ],
                py: [ 3, 3, 1, 4, 13 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 4, 3, 8, 15, 15 ],
                ny: [ 4, 5, 4, 8, 8 ],
                nz: [ 1, 2, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 6, 7, 6, 3, 3 ],
                py: [ 13, 13, 4, 2, 7 ],
                pz: [ 0, 0, 1, 2, 1 ],
                nx: [ 4, 8, 3, 0, 15 ],
                ny: [ 4, 4, 4, 3, 8 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 2, 2, 11 ],
                py: [ 3, 2, 5 ],
                pz: [ 2, 2, 0 ],
                nx: [ 3, 8, 3 ],
                ny: [ 4, 4, 4 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 15, 13, 9, 11, 7 ],
                py: [ 2, 1, 2, 1, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 23, 11, 23, 22, 23 ],
                ny: [ 1, 0, 2, 0, 0 ],
                nz: [ 0, 1, 0, 0, 0 ]
            } ],
            alpha: [ -2.466029, 2.466029, -1.83951, 1.83951, -1.060559, 1.060559, -1.094927, 1.094927 ]
        }, {
            count: 7,
            threshold: -5.052474,
            feature: [ {
                size: 5,
                px: [ 17, 13, 3, 11, 10 ],
                py: [ 13, 2, 1, 4, 3 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 4, 8, 8, 3, 7 ],
                ny: [ 2, 8, 4, 5, 4 ],
                nz: [ 2, 0, 1, 2, 1 ]
            }, {
                size: 5,
                px: [ 6, 7, 3, 6, 6 ],
                py: [ 4, 12, 2, 13, 14 ],
                pz: [ 1, 0, 2, 0, 0 ],
                nx: [ 8, 3, 4, 4, 3 ],
                ny: [ 4, 4, 2, 0, 2 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 7, 4, 5, 3, 3 ],
                py: [ 2, 1, 3, 1, 1 ],
                pz: [ 0, 1, 0, 1, -1 ],
                nx: [ 1, 0, 1, 1, 0 ],
                ny: [ 1, 3, 2, 0, 4 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 3, 2 ],
                py: [ 11, 13, 10, 7, 2 ],
                pz: [ 0, 0, 0, 1, 2 ],
                nx: [ 4, 1, 8, 2, 0 ],
                ny: [ 4, 1, 12, 0, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 9, 13, 1 ],
                py: [ 7, 19, 4 ],
                pz: [ 1, -1, -1 ],
                nx: [ 4, 7, 4 ],
                ny: [ 5, 8, 2 ],
                nz: [ 2, 1, 2 ]
            }, {
                size: 5,
                px: [ 12, 8, 16, 4, 4 ],
                py: [ 12, 1, 2, 0, 0 ],
                pz: [ 0, 1, 0, 2, -1 ],
                nx: [ 11, 22, 11, 23, 23 ],
                ny: [ 2, 0, 1, 1, 5 ],
                nz: [ 1, 0, 1, 0, 0 ]
            }, {
                size: 3,
                px: [ 11, 17, 17 ],
                py: [ 6, 11, 12 ],
                pz: [ 0, 0, 0 ],
                nx: [ 15, 1, 11 ],
                ny: [ 9, 1, 1 ],
                nz: [ 0, -1, -1 ]
            } ],
            alpha: [ -2.15689, 2.15689, -1.718246, 1.718246, -.9651329, .9651329, -.994809, .994809, -.8802466, .8802466, -.8486741, .8486741, -.8141777, .8141777 ]
        }, {
            count: 13,
            threshold: -5.7744,
            feature: [ {
                size: 5,
                px: [ 6, 10, 3, 12, 14 ],
                py: [ 5, 3, 1, 2, 2 ],
                pz: [ 1, 0, 2, 0, 0 ],
                nx: [ 3, 4, 14, 8, 4 ],
                ny: [ 5, 4, 8, 4, 2 ],
                nz: [ 2, 1, 0, 1, 2 ]
            }, {
                size: 5,
                px: [ 10, 6, 11, 5, 12 ],
                py: [ 4, 13, 4, 2, 4 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 1, 4, 8, 1, 1 ],
                ny: [ 2, 4, 4, 4, 3 ],
                nz: [ 0, 1, 1, 0, 0 ]
            }, {
                size: 3,
                px: [ 18, 6, 12 ],
                py: [ 12, 4, 8 ],
                pz: [ 0, 1, 0 ],
                nx: [ 7, 4, 8 ],
                ny: [ 4, 2, 4 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 7, 5, 6, 3, 17 ],
                py: [ 13, 12, 3, 8, 13 ],
                pz: [ 0, 0, 1, 1, 0 ],
                nx: [ 3, 3, 0, 1, 8 ],
                ny: [ 4, 5, 5, 10, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 16, 7, 16, 7, 7 ],
                py: [ 1, 1, 2, 0, 0 ],
                pz: [ 0, 1, 0, 1, -1 ],
                nx: [ 23, 23, 23, 11, 5 ],
                ny: [ 2, 14, 1, 2, 1 ],
                nz: [ 0, 0, 0, 1, 2 ]
            }, {
                size: 3,
                px: [ 9, 18, 16 ],
                py: [ 7, 14, 2 ],
                pz: [ 1, 0, -1 ],
                nx: [ 8, 4, 9 ],
                ny: [ 10, 2, 4 ],
                nz: [ 1, 2, 1 ]
            }, {
                size: 4,
                px: [ 3, 16, 1, 22 ],
                py: [ 7, 4, 5, 11 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 3, 9, 4, 2 ],
                ny: [ 4, 9, 7, 5 ],
                nz: [ 1, 0, 1, 2 ]
            }, {
                size: 5,
                px: [ 4, 7, 8, 8, 9 ],
                py: [ 0, 2, 2, 1, 1 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 0, 0, 1, 0, 0 ],
                ny: [ 15, 16, 19, 0, 14 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 4, 4, 7, 8, 12 ],
                py: [ 2, 5, 6, 7, 10 ],
                pz: [ 2, 2, 1, 1, 0 ],
                nx: [ 8, 5, 10, 0, 0 ],
                ny: [ 4, 2, 5, 3, 14 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 0 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 3, 14 ],
                ny: [ 4, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 17, 8, 18, 4, 4 ],
                py: [ 3, 1, 3, 0, 0 ],
                pz: [ 0, 1, 0, 2, -1 ],
                nx: [ 21, 22, 5, 11, 22 ],
                ny: [ 0, 1, 0, 1, 2 ],
                nz: [ 0, 0, 2, 1, 0 ]
            }, {
                size: 4,
                px: [ 7, 8, 2, 11 ],
                py: [ 13, 12, 2, 7 ],
                pz: [ 0, 0, 2, 0 ],
                nx: [ 4, 0, 23, 3 ],
                ny: [ 4, 1, 1, 11 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 4, 18, 8, 9, 15 ],
                py: [ 4, 16, 7, 7, 23 ],
                pz: [ 2, 0, 1, 1, 0 ],
                nx: [ 0, 1, 1, 1, 1 ],
                ny: [ 10, 21, 23, 22, 22 ],
                nz: [ 1, 0, 0, 0, -1 ]
            } ],
            alpha: [ -1.956565, 1.956565, -1.262438, 1.262438, -1.056941, 1.056941, -.9712509, .9712509, -.8261028, .8261028, -.8456506, .8456506, -.6652113, .6652113, -.6026287, .6026287, -.6915425, .6915425, -.5539286, .5539286, -.5515072, .5515072, -.6685884, .6685884, -.465607, .465607 ]
        }, {
            count: 20,
            threshold: -5.606853,
            feature: [ {
                size: 5,
                px: [ 17, 11, 6, 14, 9 ],
                py: [ 13, 4, 4, 3, 3 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 14, 4, 8, 7, 8 ],
                ny: [ 8, 4, 4, 4, 8 ],
                nz: [ 0, 1, 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 3, 9, 10, 11, 11 ],
                py: [ 7, 2, 2, 3, 3 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 3, 8, 4, 2, 5 ],
                ny: [ 4, 4, 10, 2, 8 ],
                nz: [ 1, 1, 1, 2, 1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 5, 12 ],
                py: [ 12, 9, 10, 12, 11 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 2, 1, 3, 0, 0 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 9, 18, 9, 9, 12 ],
                py: [ 7, 14, 19, 5, 11 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 23, 4, 23, 23, 8 ],
                ny: [ 13, 5, 14, 16, 4 ],
                nz: [ 0, 2, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 6, 1 ],
                py: [ 13, 11, 12, 6, 5 ],
                pz: [ 0, 0, 0, -1, -1 ],
                nx: [ 4, 6, 8, 4, 9 ],
                ny: [ 2, 8, 4, 4, 4 ],
                nz: [ 2, 1, 1, 1, 1 ]
            }, {
                size: 4,
                px: [ 12, 11, 11, 6 ],
                py: [ 5, 5, 6, 13 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 8, 3, 2, 8 ],
                ny: [ 4, 4, 17, 2 ],
                nz: [ 1, 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 3, 14, 12, 15, 13 ],
                py: [ 0, 2, 2, 2, 2 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 22, 23, 22, 23, 7 ],
                ny: [ 0, 3, 1, 2, 4 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 16, 15, 18, 19, 9 ],
                py: [ 12, 11, 12, 12, 9 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 2, 22, 23, 21 ],
                ny: [ 4, 1, 1, 2, 20 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 4, 7, 7 ],
                py: [ 0, 2, 2 ],
                pz: [ 1, 0, -1 ],
                nx: [ 1, 2, 2 ],
                ny: [ 2, 0, 2 ],
                nz: [ 1, 0, 0 ]
            }, {
                size: 3,
                px: [ 4, 11, 11 ],
                py: [ 6, 9, 8 ],
                pz: [ 1, 0, 0 ],
                nx: [ 9, 2, 8 ],
                ny: [ 9, 4, 5 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 4,
                px: [ 2, 7, 6, 6 ],
                py: [ 4, 23, 21, 22 ],
                pz: [ 2, 0, 0, 0 ],
                nx: [ 9, 3, 8, 17 ],
                ny: [ 21, 2, 5, 1 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 8 ],
                py: [ 4, 12 ],
                pz: [ 2, 0 ],
                nx: [ 3, 0 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 4, 5, 1, 8, 4 ],
                py: [ 15, 12, 3, 23, 12 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 23, 10, 22, 21, 11 ],
                nz: [ 0, 1, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 21, 5 ],
                py: [ 13, 4 ],
                pz: [ 0, 2 ],
                nx: [ 23, 4 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 17 ],
                py: [ 2, 3 ],
                pz: [ 0, 0 ],
                nx: [ 19, 20 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 1, 8, 17, 4 ],
                py: [ 14, 2, 13, 6, 12 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 8, 13, 15, 15, 7 ],
                ny: [ 10, 9, 15, 14, 8 ],
                nz: [ 1, 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 8, 5 ],
                py: [ 7, 4 ],
                pz: [ 1, -1 ],
                nx: [ 4, 13 ],
                ny: [ 2, 21 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 4, 2 ],
                ny: [ 7, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 4, 14, 3, 11 ],
                py: [ 3, 23, 2, 5 ],
                pz: [ 2, 0, 2, 0 ],
                nx: [ 7, 8, 2, 16 ],
                ny: [ 8, 0, 1, 15 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 8 ],
                py: [ 0, 0 ],
                pz: [ 0, 0 ],
                nx: [ 2, 2 ],
                ny: [ 3, 5 ],
                nz: [ 2, 2 ]
            } ],
            alpha: [ -1.95797, 1.95797, -1.225984, 1.225984, -.8310246, .8310246, -.8315741, .8315741, -.7973616, .7973616, -.7661959, .7661959, -.6042118, .6042118, -.6506833, .6506833, -.4808219, .4808219, -.6079504, .6079504, -.5163994, .5163994, -.5268142, .5268142, -.4935685, .4935685, -.4427544, .4427544, -.4053949, .4053949, -.4701274, .4701274, -.4387648, .4387648, -.4305499, .4305499, -.4042607, .4042607, -.4372088, .4372088 ]
        }, {
            count: 22,
            threshold: -5.679317,
            feature: [ {
                size: 5,
                px: [ 11, 3, 17, 14, 13 ],
                py: [ 4, 0, 13, 2, 3 ],
                pz: [ 0, 2, 0, 0, 0 ],
                nx: [ 7, 4, 14, 23, 11 ],
                ny: [ 8, 4, 8, 4, 0 ],
                nz: [ 1, 1, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 7, 12, 6, 12, 12 ],
                py: [ 12, 8, 3, 10, 9 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 4, 9, 8, 15, 15 ],
                ny: [ 4, 8, 4, 8, 8 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 3,
                px: [ 4, 2, 10 ],
                py: [ 1, 4, 1 ],
                pz: [ 1, 2, 0 ],
                nx: [ 2, 3, 8 ],
                ny: [ 5, 4, 4 ],
                nz: [ 2, 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 17, 6, 6, 16 ],
                py: [ 2, 12, 4, 14, 12 ],
                pz: [ 2, 0, 1, 0, 0 ],
                nx: [ 8, 3, 7, 5, 15 ],
                ny: [ 4, 4, 4, 4, 8 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 5, 6, 7, 4, 8 ],
                py: [ 3, 3, 3, 1, 3 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 0, 0, 0, 0, 1 ],
                ny: [ 5, 4, 3, 2, 0 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 18, 9, 0 ],
                py: [ 14, 7, 0 ],
                pz: [ 0, 1, -1 ],
                nx: [ 8, 14, 8 ],
                ny: [ 10, 9, 4 ],
                nz: [ 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 18, 13 ],
                pz: [ 0, 0 ],
                nx: [ 10, 3 ],
                ny: [ 16, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 11, 6 ],
                py: [ 10, 12, 11, 13, 6 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 5, 21, 22, 22, 22 ],
                ny: [ 4, 22, 17, 19, 18 ],
                nz: [ 2, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 8, 9, 15, 4 ],
                py: [ 7, 7, 23, 4 ],
                pz: [ 1, 1, 0, 2 ],
                nx: [ 8, 5, 0, 3 ],
                ny: [ 4, 18, 4, 9 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 11, 10, 12, 11, 11 ],
                py: [ 4, 4, 4, 5, 5 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 6, 8, 2, 8 ],
                ny: [ 4, 9, 9, 2, 4 ],
                nz: [ 1, 1, 0, 2, 1 ]
            }, {
                size: 5,
                px: [ 2, 2, 3, 3, 4 ],
                py: [ 10, 9, 14, 13, 15 ],
                pz: [ 1, 1, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 5, 9, 10, 19, 18 ],
                nz: [ 2, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 13, 12 ],
                pz: [ 0, 0 ],
                nx: [ 9, 2 ],
                ny: [ 15, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 4, 3, 3, 4 ],
                py: [ 5, 11, 6, 9, 12 ],
                pz: [ 1, 0, 1, 0, 0 ],
                nx: [ 6, 2, 11, 11, 0 ],
                ny: [ 9, 1, 5, 20, 18 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 18, 9, 17, 19, 16 ],
                py: [ 2, 0, 2, 2, 1 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 22, 23, 11, 23, 23 ],
                ny: [ 0, 2, 0, 1, 1 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 5, 5, 6, 7, 6 ],
                py: [ 17, 16, 15, 23, 22 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 6, 2, 5, 23 ],
                ny: [ 8, 1, 2, 3, 1 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 11, 10, 6 ],
                py: [ 14, 13, 18, 4, 22 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 3, 2, 4, 1, 2 ],
                ny: [ 19, 4, 23, 13, 16 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 11, 16, 11, 17 ],
                py: [ 7, 11, 8, 12 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 7, 14, 10, 4 ],
                ny: [ 4, 7, 10, 4 ],
                nz: [ 1, 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 4, 2 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 9 ],
                py: [ 0, 1 ],
                pz: [ 1, 0 ],
                nx: [ 4, 5 ],
                ny: [ 1, 0 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 14, 16 ],
                py: [ 3, 3 ],
                pz: [ 0, 0 ],
                nx: [ 9, 14 ],
                ny: [ 4, 21 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 1 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 8, 9 ],
                ny: [ 7, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 8, 3 ],
                pz: [ 0, 2 ],
                nx: [ 20, 0 ],
                ny: [ 3, 3 ],
                nz: [ 0, -1 ]
            } ],
            alpha: [ -1.581077, 1.581077, -1.389689, 1.389689, -.8733094, .8733094, -.8525177, .8525177, -.7416304, .7416304, -.6609002, .6609002, -.7119043, .7119043, -.6204438, .6204438, -.6638519, .6638519, -.5518876, .5518876, -.4898991, .4898991, -.5508243, .5508243, -.4635525, .4635525, -.5163159, .5163159, -.4495338, .4495338, -.4515036, .4515036, -.5130473, .5130473, -.4694233, .4694233, -.4022514, .4022514, -.405569, .405569, -.4151817, .4151817, -.3352302, .3352302 ]
        }, {
            count: 32,
            threshold: -5.363782,
            feature: [ {
                size: 5,
                px: [ 12, 9, 6, 8, 14 ],
                py: [ 4, 2, 13, 3, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 15, 0, 9, 5 ],
                ny: [ 2, 7, 3, 8, 8 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 13, 16, 3, 6, 11 ],
                py: [ 3, 13, 1, 4, 3 ],
                pz: [ 0, 0, 2, 1, 0 ],
                nx: [ 7, 4, 8, 14, 14 ],
                ny: [ 4, 4, 4, 8, 8 ],
                nz: [ 1, 1, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 10, 19, 18, 19, 19 ],
                py: [ 6, 13, 13, 12, 12 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 23, 5, 23, 23, 11 ],
                ny: [ 12, 2, 13, 14, 8 ],
                nz: [ 0, 2, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 6 ],
                py: [ 11, 13, 12, 10, 6 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 6, 8, 3, 9, 9 ],
                ny: [ 8, 4, 4, 4, 4 ],
                nz: [ 1, 1, 1, 1, -1 ]
            }, {
                size: 5,
                px: [ 5, 3, 5, 8, 11 ],
                py: [ 12, 8, 3, 11, 8 ],
                pz: [ 0, 1, 1, 0, 0 ],
                nx: [ 4, 0, 1, 1, 9 ],
                ny: [ 4, 3, 4, 3, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 13, 3, 12, 14, 12 ],
                py: [ 1, 0, 1, 2, 3 ],
                pz: [ 0, 2, 0, 0, 0 ],
                nx: [ 7, 9, 8, 4, 4 ],
                ny: [ 5, 4, 10, 2, 2 ],
                nz: [ 1, 1, 1, 2, -1 ]
            }, {
                size: 5,
                px: [ 18, 16, 12, 15, 8 ],
                py: [ 12, 23, 7, 11, 8 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 6, 10, 12, 4 ],
                ny: [ 4, 4, 10, 6, 3 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 4, 4, 5, 2, 2 ],
                py: [ 13, 14, 14, 7, 7 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 0, 0, 0, 0, 1 ],
                ny: [ 15, 4, 14, 13, 17 ],
                nz: [ 0, 2, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 7, 7 ],
                pz: [ 1, -1 ],
                nx: [ 4, 7 ],
                ny: [ 5, 8 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 3, 4, 6, 5, 4 ],
                py: [ 2, 2, 14, 6, 9 ],
                pz: [ 1, 1, 0, 1, 1 ],
                nx: [ 23, 23, 23, 23, 11 ],
                ny: [ 0, 3, 2, 1, 0 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 3,
                px: [ 10, 2, 3 ],
                py: [ 23, 4, 7 ],
                pz: [ 0, 2, 1 ],
                nx: [ 10, 21, 23 ],
                ny: [ 21, 9, 2 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 20, 21, 21, 10, 12 ],
                py: [ 13, 12, 8, 8, 12 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 8, 16, 3, 3, 11 ],
                ny: [ 4, 8, 4, 3, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 21 ],
                py: [ 4, 12 ],
                pz: [ 2, -1 ],
                nx: [ 2, 3 ],
                ny: [ 5, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 8, 5, 6, 8, 7 ],
                py: [ 0, 2, 1, 1, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 2, 2, 2, 2 ],
                ny: [ 0, 0, 1, 2, 2 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 11, 2, 2, 11, 10 ],
                py: [ 10, 12, 8, 11, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 5, 2, 4, 2 ],
                ny: [ 4, 1, 4, 2, 2 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 15, 16, 8, 17 ],
                py: [ 2, 1, 0, 2 ],
                pz: [ 0, 0, 1, 0 ],
                nx: [ 19, 20, 0, 8 ],
                ny: [ 1, 2, 11, 10 ],
                nz: [ 0, 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 17, 16 ],
                py: [ 12, 12 ],
                pz: [ 0, 0 ],
                nx: [ 8, 9 ],
                ny: [ 5, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 11, 11, 0, 0 ],
                py: [ 12, 13, 0, 0 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 10, 10, 9, 10 ],
                ny: [ 10, 12, 13, 11 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 11, 10, 8 ],
                py: [ 5, 2, 6 ],
                pz: [ 0, -1, -1 ],
                nx: [ 8, 12, 4 ],
                ny: [ 4, 17, 4 ],
                nz: [ 1, 0, 1 ]
            }, {
                size: 5,
                px: [ 10, 21, 10, 20, 20 ],
                py: [ 11, 13, 7, 13, 14 ],
                pz: [ 1, 0, 1, 0, 0 ],
                nx: [ 23, 23, 11, 23, 17 ],
                ny: [ 23, 22, 11, 21, 21 ],
                nz: [ 0, 0, 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 3, 9 ],
                pz: [ 2, 1 ],
                nx: [ 9, 23 ],
                ny: [ 4, 22 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 3, 2, 2, 5 ],
                py: [ 11, 5, 4, 20 ],
                pz: [ 1, 2, 2, 0 ],
                nx: [ 4, 23, 11, 23 ],
                ny: [ 10, 22, 11, 21 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 5 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 8, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 5 ],
                py: [ 4, 9 ],
                pz: [ 2, 1 ],
                nx: [ 10, 10 ],
                ny: [ 16, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 0 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 7, 3, 12, 13, 6 ],
                py: [ 11, 5, 23, 23, 7 ],
                pz: [ 1, 2, 0, 0, 1 ],
                nx: [ 1, 0, 0, 0, 0 ],
                ny: [ 23, 20, 19, 21, 21 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 10, 9, 6, 13, 13 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 8, 8, 4, 4, 9 ],
                ny: [ 4, 11, 5, 4, 5 ],
                nz: [ 1, 1, 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 18 ],
                py: [ 8, 15 ],
                pz: [ 1, 0 ],
                nx: [ 15, 4 ],
                ny: [ 15, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 13 ],
                py: [ 6, 17 ],
                pz: [ 1, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 19, 10, 20, 18, 18 ],
                py: [ 2, 0, 2, 2, 2 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 22, 23, 22, 11, 23 ],
                ny: [ 1, 3, 0, 1, 2 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 4, 2, 2, 2, 6 ],
                py: [ 7, 2, 5, 4, 14 ],
                pz: [ 1, 2, 2, 2, 0 ],
                nx: [ 16, 7, 9, 15, 23 ],
                ny: [ 8, 0, 3, 11, 2 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 10, 9, 9, 5 ],
                py: [ 2, 0, 0, 1, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 3, 2, 3, 2, 2 ],
                ny: [ 11, 3, 9, 5, 5 ],
                nz: [ 1, 2, 1, 2, -1 ]
            } ],
            alpha: [ -1.490426, 1.490426, -1.21428, 1.21428, -.8124863, .8124863, -.7307594, .7307594, -.7377259, .7377259, -.5982859, .5982859, -.6451736, .6451736, -.6117417, .6117417, -.5438949, .5438949, -.4563701, .4563701, -.4975362, .4975362, -.4707373, .4707373, -.5013868, .5013868, -.5139018, .5139018, -.4728007, .4728007, -.4839748, .4839748, -.4852528, .4852528, -.5768956, .5768956, -.3635091, .3635091, -.419009, .419009, -.3854715, .3854715, -.3409591, .3409591, -.3440222, .3440222, -.3375895, .3375895, -.3367032, .3367032, -.3708106, .3708106, -.3260956, .3260956, -.3657681, .3657681, -.35188, .35188, -.3845758, .3845758, -.2832236, .2832236, -.2865156, .2865156 ]
        }, {
            count: 45,
            threshold: -5.479836,
            feature: [ {
                size: 5,
                px: [ 15, 6, 17, 6, 9 ],
                py: [ 2, 13, 13, 4, 3 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 3, 9, 4, 8, 14 ],
                ny: [ 5, 8, 4, 4, 8 ],
                nz: [ 2, 0, 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 9, 8, 11, 6, 7 ],
                py: [ 1, 2, 3, 14, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 0, 4, 0, 0 ],
                ny: [ 4, 2, 4, 1, 0 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 2, 2, 11, 11, 11 ],
                py: [ 2, 4, 10, 8, 6 ],
                pz: [ 2, 2, 0, 0, 0 ],
                nx: [ 8, 4, 3, 23, 23 ],
                ny: [ 4, 4, 4, 16, 18 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 18, 16, 17, 15, 9 ],
                py: [ 2, 2, 2, 2, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 22, 22, 21, 23, 23 ],
                ny: [ 1, 2, 0, 5, 4 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 15, 3, 17, 18, 6 ],
                py: [ 11, 2, 11, 11, 4 ],
                pz: [ 0, 2, 0, 0, 1 ],
                nx: [ 3, 8, 1, 4, 23 ],
                ny: [ 4, 4, 3, 9, 4 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 4, 0 ],
                pz: [ 2, -1 ],
                nx: [ 7, 4 ],
                ny: [ 8, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 12, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 10, 15 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 2, 2, 7, 1 ],
                py: [ 7, 7, 3, 4 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 0, 2, 1, 2 ],
                ny: [ 6, 20, 14, 16 ],
                nz: [ 1, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 14, 12, 12, 13, 9 ],
                py: [ 23, 5, 6, 5, 7 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 18, 2, 8, 14 ],
                ny: [ 4, 9, 0, 12, 7 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 3, 10, 13, 11, 9 ],
                py: [ 0, 3, 2, 3, 2 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 3, 11, 22, 22, 22 ],
                ny: [ 2, 6, 15, 2, 0 ],
                nz: [ 2, 1, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 8, 7, 5, 8, 5 ],
                py: [ 23, 12, 12, 12, 13 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 18, 3, 1, 22 ],
                ny: [ 4, 4, 4, 2, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 22, 22, 22, 21, 22 ],
                py: [ 9, 11, 10, 14, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 23, 23, 11, 1, 22 ],
                ny: [ 23, 23, 11, 2, 0 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 18, 7 ],
                pz: [ 0, 1 ],
                nx: [ 10, 8 ],
                ny: [ 16, 19 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 10, 12, 11, 6, 6 ],
                py: [ 4, 4, 4, 2, 2 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 3, 8, 7, 8, 4 ],
                ny: [ 5, 4, 4, 10, 4 ],
                nz: [ 2, 1, 1, 0, 1 ]
            }, {
                size: 4,
                px: [ 12, 12, 4, 15 ],
                py: [ 13, 12, 0, 11 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 13, 14, 13, 14 ],
                ny: [ 9, 12, 10, 13 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 3, 3 ],
                pz: [ 2, -1 ],
                nx: [ 9, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 9, 7, 0 ],
                py: [ 7, 5, 5 ],
                pz: [ 1, -1, -1 ],
                nx: [ 4, 15, 9 ],
                ny: [ 5, 14, 9 ],
                nz: [ 2, 0, 1 ]
            }, {
                size: 5,
                px: [ 15, 20, 7, 10, 16 ],
                py: [ 17, 12, 6, 4, 23 ],
                pz: [ 0, 0, 1, 1, 0 ],
                nx: [ 1, 2, 2, 1, 1 ],
                ny: [ 3, 0, 1, 2, 2 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 1, 1, 11, 2 ],
                py: [ 16, 4, 5, 12, 14 ],
                pz: [ 0, 1, 1, 0, 0 ],
                nx: [ 4, 6, 3, 19, 1 ],
                ny: [ 4, 2, 5, 19, 2 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 15, 14, 14 ],
                py: [ 1, 1, 0 ],
                pz: [ 0, 0, 0 ],
                nx: [ 4, 8, 4 ],
                ny: [ 3, 4, 2 ],
                nz: [ 2, 1, 2 ]
            }, {
                size: 5,
                px: [ 2, 3, 1, 2, 7 ],
                py: [ 8, 12, 4, 9, 13 ],
                pz: [ 1, 0, 2, 1, 0 ],
                nx: [ 1, 1, 0, 0, 0 ],
                ny: [ 21, 20, 18, 17, 9 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 17, 15, 17, 16, 16 ],
                py: [ 12, 12, 22, 23, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 3, 16, 1, 0 ],
                ny: [ 8, 6, 8, 3, 9 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 17, 18, 18, 18 ],
                py: [ 6, 12, 12, 13, 13 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 23, 23, 20, 11, 11 ],
                ny: [ 12, 13, 23, 7, 8 ],
                nz: [ 0, 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 4, 4 ],
                ny: [ 10, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 4, 22, 19, 12 ],
                py: [ 5, 8, 14, 9 ],
                pz: [ 2, 0, 0, 0 ],
                nx: [ 8, 4, 4, 2 ],
                ny: [ 4, 4, 1, 2 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 21 ],
                py: [ 7, 14 ],
                pz: [ 1, -1 ],
                nx: [ 4, 2 ],
                ny: [ 7, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 7, 4, 17 ],
                py: [ 3, 1, 6 ],
                pz: [ 0, 1, -1 ],
                nx: [ 3, 4, 5 ],
                ny: [ 0, 2, 1 ],
                nz: [ 1, 0, 0 ]
            }, {
                size: 4,
                px: [ 15, 7, 14, 0 ],
                py: [ 3, 1, 3, 7 ],
                pz: [ 0, 1, 0, -1 ],
                nx: [ 8, 18, 17, 18 ],
                ny: [ 0, 1, 1, 2 ],
                nz: [ 1, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 6 ],
                py: [ 10, 11, 12, 13, 6 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 8, 15, 15, 4, 8 ],
                ny: [ 10, 10, 9, 2, 4 ],
                nz: [ 0, 0, 0, 2, 1 ]
            }, {
                size: 2,
                px: [ 17, 12 ],
                py: [ 13, 11 ],
                pz: [ 0, -1 ],
                nx: [ 9, 8 ],
                ny: [ 4, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 10, 9, 12, 11, 4 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 9, 8, 9, 9 ],
                ny: [ 10, 4, 4, 5, 5 ],
                nz: [ 1, 1, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 7, 0, 1 ],
                py: [ 1, 9, 8 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 3, 3 ],
                ny: [ 7, 15, 16 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 15, 23 ],
                pz: [ 0, 0 ],
                nx: [ 9, 18 ],
                ny: [ 21, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 17, 4, 19, 18, 8 ],
                py: [ 12, 3, 12, 17, 6 ],
                pz: [ 0, 2, 0, 0, 1 ],
                nx: [ 23, 23, 11, 22, 16 ],
                ny: [ 0, 1, 0, 21, -1 ],
                nz: [ 0, 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 13, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 21, 20, 10, 10, 21 ],
                py: [ 13, 14, 10, 7, 11 ],
                pz: [ 0, 0, 1, 1, 0 ],
                nx: [ 4, 4, 4, 5, 5 ],
                ny: [ 18, 17, 19, 20, 20 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 11, 13 ],
                pz: [ 1, 0 ],
                nx: [ 12, 4 ],
                ny: [ 17, 17 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 13, 1 ],
                pz: [ 0, -1 ],
                nx: [ 1, 2 ],
                ny: [ 1, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 15, 7 ],
                py: [ 17, 7 ],
                pz: [ 0, 1 ],
                nx: [ 14, 4 ],
                ny: [ 15, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 11 ],
                py: [ 3, 8 ],
                pz: [ 2, 0 ],
                nx: [ 13, 13 ],
                ny: [ 9, 8 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 9, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 3,
                px: [ 12, 6, 9 ],
                py: [ 9, 10, 11 ],
                pz: [ 0, -1, -1 ],
                nx: [ 2, 1, 5 ],
                ny: [ 2, 1, 6 ],
                nz: [ 2, 2, 1 ]
            }, {
                size: 4,
                px: [ 4, 5, 5, 1 ],
                py: [ 11, 11, 11, 3 ],
                pz: [ 1, 0, 1, 2 ],
                nx: [ 0, 0, 5, 4 ],
                ny: [ 23, 22, 0, 0 ],
                nz: [ 0, 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 15, 7, 17, 15, 16 ],
                py: [ 1, 0, 2, 2, 0 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 7, 4, 7, 4, 8 ],
                ny: [ 5, 2, 4, 3, 4 ],
                nz: [ 1, 2, 1, 2, -1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 11, 23 ],
                pz: [ 1, 0 ],
                nx: [ 12, 4 ],
                ny: [ 21, 2 ],
                nz: [ 0, -1 ]
            } ],
            alpha: [ -1.5358, 1.5358, -.8580514, .8580514, -.862521, .862521, -.71775, .71775, -.6832222, .6832222, -.5736298, .5736298, -.5028217, .5028217, -.5091788, .5091788, -.579194, .579194, -.4924942, .4924942, -.5489055, .5489055, -.452819, .452819, -.4748324, .4748324, -.4150403, .4150403, -.4820464, .4820464, -.4840212, .4840212, -.3941872, .3941872, -.3663507, .3663507, -.3814835, .3814835, -.3936426, .3936426, -.304997, .304997, -.3604256, .3604256, -.3974041, .3974041, -.4203486, .4203486, -.3174435, .3174435, -.3426336, .3426336, -.449215, .449215, -.3538784, .3538784, -.3679703, .3679703, -.3985452, .3985452, -.2884028, .2884028, -.2797264, .2797264, -.2664214, .2664214, -.2484857, .2484857, -.2581492, .2581492, -.2943778, .2943778, -.2315507, .2315507, -.2979337, .2979337, -.2976173, .2976173, -.2847965, .2847965, -.2814763, .2814763, -.2489068, .2489068, -.2632427, .2632427, -.3308292, .3308292, -.279017, .279017 ]
        }, {
            count: 61,
            threshold: -5.239104,
            feature: [ {
                size: 5,
                px: [ 8, 8, 11, 15, 6 ],
                py: [ 3, 6, 5, 3, 4 ],
                pz: [ 0, 1, 0, 0, 1 ],
                nx: [ 3, 9, 14, 8, 4 ],
                ny: [ 4, 8, 8, 7, 2 ],
                nz: [ 1, 0, 0, 0, 2 ]
            }, {
                size: 5,
                px: [ 11, 12, 10, 6, 9 ],
                py: [ 3, 3, 2, 13, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 0, 5, 2, 2 ],
                ny: [ 13, 1, 8, 5, 2 ],
                nz: [ 0, 1, 1, 2, 2 ]
            }, {
                size: 5,
                px: [ 11, 5, 11, 11, 4 ],
                py: [ 9, 13, 10, 11, 6 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 4, 15, 9, 3, 3 ],
                ny: [ 5, 8, 9, 4, 4 ],
                nz: [ 1, 0, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 15, 16, 8, 17, 17 ],
                py: [ 1, 2, 0, 2, 2 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 23, 23, 23, 23, 23 ],
                ny: [ 4, 0, 2, 3, 1 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 9, 18, 17, 18 ],
                py: [ 7, 13, 13, 14 ],
                pz: [ 1, 0, 0, 0 ],
                nx: [ 9, 7, 4, 8 ],
                ny: [ 4, 10, 2, 4 ],
                nz: [ 1, 1, 2, 1 ]
            }, {
                size: 5,
                px: [ 12, 11, 12, 12, 6 ],
                py: [ 6, 5, 14, 5, 3 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 13, 8, 14, 7, 7 ],
                ny: [ 16, 4, 7, 4, 4 ],
                nz: [ 0, 1, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 6, 3, 7, 12 ],
                py: [ 7, 12, 7, 11, 8 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 16, 4, 4, 4, 7 ],
                ny: [ 8, 4, 4, 4, 4 ],
                nz: [ 0, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 4, 5, 3, 3 ],
                py: [ 2, 3, 2, 0, 0 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 1, 0, 1, 0, 0 ],
                ny: [ 0, 3, 1, 1, 2 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 15, 9 ],
                py: [ 11, 6 ],
                pz: [ 0, 1 ],
                nx: [ 14, 5 ],
                ny: [ 9, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 10, 19, 19, 10, 20 ],
                py: [ 7, 20, 14, 6, 12 ],
                pz: [ 1, 0, 0, 1, 0 ],
                nx: [ 23, 22, 11, 23, 23 ],
                ny: [ 21, 23, 9, 20, 20 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 1, 1, 5, 1, 1 ],
                py: [ 8, 6, 6, 9, 4 ],
                pz: [ 0, 1, 1, 0, 2 ],
                nx: [ 3, 3, 3, 2, 5 ],
                ny: [ 4, 4, 2, 5, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 13, 12, 3, 11, 11 ],
                py: [ 2, 2, 0, 1, 2 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 3, 6, 8, 4, 3 ],
                ny: [ 2, 9, 4, 4, 5 ],
                nz: [ 2, 1, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 12, 6 ],
                py: [ 11, 12, 9 ],
                pz: [ 0, 0, -1 ],
                nx: [ 2, 1, 9 ],
                ny: [ 6, 1, 14 ],
                nz: [ 0, 2, 0 ]
            }, {
                size: 5,
                px: [ 6, 3, 17, 16, 16 ],
                py: [ 4, 2, 14, 23, 13 ],
                pz: [ 1, 2, 0, 0, 0 ],
                nx: [ 8, 10, 21, 5, 1 ],
                ny: [ 4, 10, 11, 0, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 5, 6, 1, 3, 3 ],
                py: [ 15, 14, 4, 7, 7 ],
                pz: [ 0, 0, 2, 1, -1 ],
                nx: [ 1, 0, 0, 1, 1 ],
                ny: [ 5, 8, 7, 18, 17 ],
                nz: [ 2, 1, 1, 0, 0 ]
            }, {
                size: 4,
                px: [ 6, 12, 5, 3 ],
                py: [ 6, 12, 2, 7 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 14, 13, 13, 7 ],
                ny: [ 12, 10, 9, 8 ],
                nz: [ 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 15 ],
                pz: [ 1, 0 ],
                nx: [ 3, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 11, 10, 12, 2 ],
                py: [ 18, 18, 18, 3 ],
                pz: [ 0, 0, 0, 2 ],
                nx: [ 11, 17, 4, 16 ],
                ny: [ 16, 4, 4, 21 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 8, 8, 5, 2 ],
                py: [ 4, 4, 4, 2, 3 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 2, 2, 4, 4, 2 ],
                ny: [ 1, 2, 10, 5, 4 ],
                nz: [ 2, 2, 1, 1, 2 ]
            }, {
                size: 4,
                px: [ 8, 18, 14, 18 ],
                py: [ 7, 16, 23, 15 ],
                pz: [ 1, 0, 0, 0 ],
                nx: [ 14, 3, 1, 0 ],
                ny: [ 21, 1, 9, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 3 ],
                py: [ 9, 5 ],
                pz: [ 0, 2 ],
                nx: [ 8, 1 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 1, 1 ],
                pz: [ 1, -1 ],
                nx: [ 19, 20 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 10, 10, 10 ],
                py: [ 6, 6, 8 ],
                pz: [ 1, -1, -1 ],
                nx: [ 22, 21, 22 ],
                ny: [ 13, 18, 12 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 4, 1 ],
                pz: [ 2, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 21, 21, 21, 21, 21 ],
                py: [ 19, 17, 18, 15, 16 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 11, 21, 6, 1, 21 ],
                ny: [ 17, 1, 10, 0, 2 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 7, 3, 4, 4, 4 ],
                py: [ 23, 13, 14, 16, 13 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 21, 22, 22, 22, 22 ],
                ny: [ 23, 21, 20, 19, 19 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 6, 6 ],
                pz: [ 0, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 23, 23, 11, 23, 23 ],
                py: [ 8, 12, 6, 11, 10 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 4, 4, 3, 8, 8 ],
                ny: [ 3, 8, 4, 4, 4 ],
                nz: [ 1, 1, 1, 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 9, 4, 7, 10 ],
                py: [ 2, 1, 0, 2, 1 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 5, 5, 6, 4, 4 ],
                ny: [ 1, 0, 0, 2, 1 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 2 ],
                py: [ 13, 6 ],
                pz: [ 0, -1 ],
                nx: [ 15, 9 ],
                ny: [ 15, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 4, 9 ],
                pz: [ 2, 1 ],
                nx: [ 3, 13 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 3, 6, 2 ],
                py: [ 10, 22, 4 ],
                pz: [ 1, 0, 2 ],
                nx: [ 4, 2, 1 ],
                ny: [ 10, 4, 3 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 9, 7 ],
                pz: [ 0, 1 ],
                nx: [ 0, 0 ],
                ny: [ 23, 22 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 7 ],
                py: [ 0, 1 ],
                pz: [ 0, 0 ],
                nx: [ 4, 4 ],
                ny: [ 8, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 7, 4, 4, 6, 3 ],
                py: [ 8, 4, 5, 5, 3 ],
                pz: [ 1, 2, 2, 1, 2 ],
                nx: [ 1, 0, 2, 0, 0 ],
                ny: [ 1, 0, 0, 2, 4 ],
                nz: [ 0, 2, 0, 1, -1 ]
            }, {
                size: 3,
                px: [ 10, 4, 4 ],
                py: [ 6, 1, 5 ],
                pz: [ 1, -1, -1 ],
                nx: [ 5, 23, 22 ],
                ny: [ 4, 13, 7 ],
                nz: [ 2, 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 6, 5 ],
                pz: [ 1, 1 ],
                nx: [ 6, 0 ],
                ny: [ 9, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 0, 1, 1, 0, 0 ],
                py: [ 5, 18, 19, 16, 6 ],
                pz: [ 2, 0, 0, 0, 1 ],
                nx: [ 5, 9, 4, 8, 8 ],
                ny: [ 8, 7, 3, 7, 7 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 12 ],
                py: [ 23, 23 ],
                pz: [ 0, 0 ],
                nx: [ 7, 6 ],
                ny: [ 8, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 14, 19 ],
                py: [ 12, 8 ],
                pz: [ 0, 0 ],
                nx: [ 18, 5 ],
                ny: [ 8, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 8, 6, 4, 4 ],
                py: [ 3, 23, 14, 6, 9 ],
                pz: [ 2, 0, 0, 1, 1 ],
                nx: [ 0, 0, 0, 0, 1 ],
                ny: [ 21, 20, 5, 19, 23 ],
                nz: [ 0, 0, 2, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 22 ],
                py: [ 4, 14 ],
                pz: [ 0, -1 ],
                nx: [ 3, 8 ],
                ny: [ 1, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 1, 1, 0, 1, 1 ],
                py: [ 6, 8, 3, 12, 7 ],
                pz: [ 1, 1, 2, 0, 1 ],
                nx: [ 21, 21, 19, 10, 10 ],
                ny: [ 14, 16, 23, 9, 9 ],
                nz: [ 0, 0, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 23, 2 ],
                pz: [ 0, 2 ],
                nx: [ 10, 3 ],
                ny: [ 21, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 9, 9 ],
                ny: [ 11, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 23, 11, 23, 23, 23 ],
                py: [ 18, 10, 19, 20, 16 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 3, 3, 2, 3, 2 ],
                ny: [ 15, 16, 10, 17, 9 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 14 ],
                py: [ 7, 18 ],
                pz: [ 1, 0 ],
                nx: [ 7, 10 ],
                ny: [ 8, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 6, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 17, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 2, 3, 3 ],
                py: [ 11, 17, 19 ],
                pz: [ 1, 0, 0 ],
                nx: [ 7, 7, 4 ],
                ny: [ 8, 8, 5 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 6, 5 ],
                pz: [ 1, -1 ],
                nx: [ 2, 9 ],
                ny: [ 4, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 8, 8, 9, 2, 2 ],
                py: [ 18, 13, 12, 3, 3 ],
                pz: [ 0, 0, 0, 2, -1 ],
                nx: [ 23, 11, 23, 11, 11 ],
                ny: [ 13, 6, 14, 7, 8 ],
                nz: [ 0, 1, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 11 ],
                py: [ 6, 13 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 10 ],
                py: [ 0, 6 ],
                pz: [ 1, 1 ],
                nx: [ 9, 4 ],
                ny: [ 6, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 3, 10, 9 ],
                py: [ 8, 6, 0 ],
                pz: [ 1, -1, -1 ],
                nx: [ 2, 2, 2 ],
                ny: [ 15, 16, 9 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 3,
                px: [ 14, 15, 0 ],
                py: [ 2, 2, 5 ],
                pz: [ 0, 0, -1 ],
                nx: [ 17, 17, 18 ],
                ny: [ 0, 1, 2 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 10, 9 ],
                ny: [ 12, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 7, 8 ],
                pz: [ 1, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 19, 18, 10, 5, 20 ],
                pz: [ 0, 0, 1, 2, 0 ],
                nx: [ 4, 8, 2, 4, 4 ],
                ny: [ 4, 15, 5, 10, 10 ],
                nz: [ 1, 0, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 13, 18 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 23, 22, 22, 11, 22 ],
                py: [ 16, 13, 7, 6, 14 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 13, 7, 15, 14, 14 ],
                ny: [ 6, 3, 7, 6, 6 ],
                nz: [ 0, 1, 0, 0, -1 ]
            } ],
            alpha: [ -1.428861, 1.428861, -.8591837, .8591837, -.7734305, .7734305, -.653446, .653446, -.6262547, .6262547, -.5231782, .5231782, -.4984303, .4984303, -.4913187, .4913187, -.4852198, .4852198, -.4906681, .4906681, -.4126248, .4126248, -.4590814, .4590814, -.4653825, .4653825, -.41796, .41796, -.4357392, .4357392, -.4087982, .4087982, -.4594812, .4594812, -.4858794, .4858794, -.371358, .371358, -.3894534, .3894534, -.3127168, .3127168, -.4012654, .4012654, -.3370552, .3370552, -.3534712, .3534712, -.384345, .384345, -.2688805, .2688805, -.3500203, .3500203, -.282712, .282712, -.3742119, .3742119, -.3219074, .3219074, -.2544953, .2544953, -.3355513, .3355513, -.267267, .267267, -.2932047, .2932047, -.2404618, .2404618, -.2354372, .2354372, -.2657955, .2657955, -.2293701, .2293701, -.2708918, .2708918, -.2340181, .2340181, -.2464815, .2464815, -.2944239, .2944239, -.240796, .240796, -.3029642, .3029642, -.2684602, .2684602, -.2495078, .2495078, -.2539708, .2539708, -.2989293, .2989293, -.2391309, .2391309, -.2531372, .2531372, -.250039, .250039, -.2295077, .2295077, -.2526125, .2526125, -.2337182, .2337182, -.1984756, .1984756, -.3089996, .3089996, -.2589053, .2589053, -.296249, .296249, -.245866, .245866, -.2515206, .2515206, -.2637299, .2637299 ]
        }, {
            count: 80,
            threshold: -5.185898,
            feature: [ {
                size: 5,
                px: [ 12, 17, 13, 10, 15 ],
                py: [ 9, 13, 3, 3, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 14, 6, 9, 4 ],
                ny: [ 10, 9, 8, 8, 2 ],
                nz: [ 1, 0, 1, 0, 2 ]
            }, {
                size: 5,
                px: [ 3, 11, 8, 10, 9 ],
                py: [ 7, 4, 3, 3, 3 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 2, 1, 5, 0, 0 ],
                ny: [ 2, 15, 8, 4, 13 ],
                nz: [ 2, 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 4, 17 ],
                py: [ 7, 9, 8, 6, 11 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 8, 8, 8, 3, 0 ],
                ny: [ 4, 8, 8, 8, 13 ],
                nz: [ 1, 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 14, 15, 7, 16, 16 ],
                py: [ 3, 3, 1, 3, 3 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 23, 22, 23, 22, 22 ],
                ny: [ 6, 2, 14, 3, 4 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 6, 4, 7, 15 ],
                py: [ 4, 2, 6, 17 ],
                pz: [ 1, 2, 1, 0 ],
                nx: [ 3, 8, 3, 14 ],
                ny: [ 4, 4, 10, 22 ],
                nz: [ 1, 1, -1, -1 ]
            }, {
                size: 3,
                px: [ 3, 5, 22 ],
                py: [ 7, 7, 5 ],
                pz: [ 1, -1, -1 ],
                nx: [ 2, 2, 4 ],
                ny: [ 5, 2, 7 ],
                nz: [ 2, 2, 1 ]
            }, {
                size: 5,
                px: [ 7, 6, 5, 6, 3 ],
                py: [ 0, 1, 2, 2, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 0, 1, 1, 0, 1 ],
                ny: [ 0, 2, 1, 2, 0 ],
                nz: [ 2, 0, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 11, 5 ],
                py: [ 11, 10, 13, 12, 6 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 15, 14, 5, 2, 8 ],
                ny: [ 9, 8, 10, 2, 10 ],
                nz: [ 0, 0, 1, 2, 0 ]
            }, {
                size: 5,
                px: [ 8, 5, 6, 8, 7 ],
                py: [ 12, 12, 12, 23, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 17, 5, 2, 8 ],
                ny: [ 4, 0, 10, 2, 10 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 10, 10, 19, 20 ],
                py: [ 8, 10, 9, 15, 13 ],
                pz: [ 1, 1, 1, 0, 0 ],
                nx: [ 23, 11, 5, 23, 23 ],
                ny: [ 20, 10, 5, 19, 19 ],
                nz: [ 0, 1, 2, 0, -1 ]
            }, {
                size: 5,
                px: [ 9, 13, 3, 10, 12 ],
                py: [ 2, 0, 0, 1, 1 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 3, 3, 6, 7, 7 ],
                ny: [ 5, 2, 11, 4, 4 ],
                nz: [ 2, 2, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 15, 7 ],
                py: [ 17, 6 ],
                pz: [ 0, 1 ],
                nx: [ 14, 0 ],
                ny: [ 16, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 17, 15, 18, 12, 19 ],
                py: [ 22, 12, 13, 7, 15 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 15, 6, 1, 7 ],
                ny: [ 4, 8, 22, 5, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 9, 18, 19, 8 ],
                py: [ 2, 1, 3, 3, 1 ],
                pz: [ 1, 1, 0, 0, 1 ],
                nx: [ 23, 23, 23, 11, 11 ],
                ny: [ 0, 1, 2, 0, 1 ],
                nz: [ 0, 0, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 23, 0, 1, 8 ],
                py: [ 14, 5, 0, 17, 1 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 8, 14, 15, 18, 14 ],
                ny: [ 10, 11, 14, 19, 10 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 6 ],
                py: [ 6, 13 ],
                pz: [ 1, 0 ],
                nx: [ 4, 12 ],
                ny: [ 10, 14 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 5, 23, 11, 23, 13 ],
                py: [ 3, 10, 4, 11, 12 ],
                pz: [ 2, 0, 1, 0, 0 ],
                nx: [ 7, 4, 9, 8, 8 ],
                ny: [ 4, 2, 4, 4, 4 ],
                nz: [ 1, 2, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 9, 5, 11 ],
                py: [ 4, 2, 4 ],
                pz: [ 0, 1, -1 ],
                nx: [ 5, 2, 4 ],
                ny: [ 0, 1, 2 ],
                nz: [ 0, 2, 0 ]
            }, {
                size: 5,
                px: [ 5, 2, 2, 5, 8 ],
                py: [ 12, 4, 4, 6, 13 ],
                pz: [ 0, 2, 1, 1, 0 ],
                nx: [ 3, 9, 4, 4, 8 ],
                ny: [ 4, 0, 2, 2, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 9, 5, 22 ],
                py: [ 7, 4, 20 ],
                pz: [ 1, -1, -1 ],
                nx: [ 8, 19, 4 ],
                ny: [ 4, 18, 5 ],
                nz: [ 1, 0, 2 ]
            }, {
                size: 5,
                px: [ 2, 3, 3, 3, 3 ],
                py: [ 10, 16, 15, 14, 13 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 0, 0, 0, 1, 0 ],
                ny: [ 10, 20, 5, 23, 21 ],
                nz: [ 1, 0, 2, 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 11 ],
                py: [ 4, 18 ],
                pz: [ 0, 0 ],
                nx: [ 11, 23 ],
                ny: [ 17, 13 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 8 ],
                py: [ 16, 7 ],
                pz: [ 0, 1 ],
                nx: [ 8, 3 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 13, 5, 14, 12, 3 ],
                py: [ 4, 7, 4, 5, 3 ],
                pz: [ 0, 1, 0, 0, 1 ],
                nx: [ 21, 20, 21, 21, 21 ],
                ny: [ 2, 0, 4, 3, 3 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 4,
                px: [ 20, 20, 20, 10 ],
                py: [ 21, 19, 20, 8 ],
                pz: [ 0, 0, 0, 1 ],
                nx: [ 8, 11, 0, 2 ],
                ny: [ 10, 8, 1, 3 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 6, 7, 12, 8 ],
                py: [ 12, 12, 8, 11 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 9, 5, 5, 18 ],
                ny: [ 9, 2, 0, 20 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 11, 5, 9 ],
                py: [ 0, 0, 0 ],
                pz: [ 0, 1, 0 ],
                nx: [ 2, 6, 3 ],
                ny: [ 3, 7, 4 ],
                nz: [ 2, 0, 1 ]
            }, {
                size: 5,
                px: [ 18, 18, 9, 17, 17 ],
                py: [ 15, 14, 7, 14, 14 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 21, 21, 21, 22, 20 ],
                ny: [ 15, 21, 17, 14, 23 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 12, 12, 7, 4 ],
                py: [ 4, 11, 12, 6, 5 ],
                pz: [ 1, 0, 0, 1, 2 ],
                nx: [ 16, 11, 9, 6, 20 ],
                ny: [ 8, 4, 11, 10, 23 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 12, 11, 10, 11, 11 ],
                py: [ 23, 4, 4, 5, 23 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 11, 11, 7, 3, 20 ],
                ny: [ 21, 21, 11, 1, 23 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 1 ],
                py: [ 12, 3 ],
                pz: [ 0, -1 ],
                nx: [ 10, 10 ],
                ny: [ 3, 2 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 9, 4, 15, 9, 9 ],
                py: [ 8, 4, 23, 7, 7 ],
                pz: [ 1, 2, 0, 1, -1 ],
                nx: [ 5, 3, 3, 3, 2 ],
                ny: [ 23, 19, 17, 18, 15 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 0 ],
                py: [ 16, 3 ],
                pz: [ 0, 2 ],
                nx: [ 9, 4 ],
                ny: [ 15, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 3, 7 ],
                pz: [ 2, 1 ],
                nx: [ 3, 8 ],
                ny: [ 4, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 9, 4, 3 ],
                py: [ 18, 0, 14 ],
                pz: [ 0, -1, -1 ],
                nx: [ 3, 5, 2 ],
                ny: [ 5, 8, 5 ],
                nz: [ 2, 1, 2 ]
            }, {
                size: 3,
                px: [ 1, 1, 10 ],
                py: [ 2, 1, 7 ],
                pz: [ 1, -1, -1 ],
                nx: [ 0, 0, 0 ],
                ny: [ 3, 5, 1 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 4,
                px: [ 11, 11, 5, 2 ],
                py: [ 12, 13, 7, 3 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 5, 10, 10, 9 ],
                ny: [ 6, 9, 10, 13 ],
                nz: [ 1, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 9, 1 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 1, 1, 0 ],
                py: [ 4, 10, 12, 13, 5 ],
                pz: [ 1, 0, 0, 0, 1 ],
                nx: [ 4, 4, 8, 7, 7 ],
                ny: [ 3, 2, 10, 4, 4 ],
                nz: [ 2, 2, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 3, 4, 3 ],
                py: [ 1, 1, 2 ],
                pz: [ 1, -1, -1 ],
                nx: [ 4, 5, 3 ],
                ny: [ 1, 0, 2 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 6, 4 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 6, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 12, 13, 15, 16, 7 ],
                py: [ 1, 1, 2, 2, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 4, 4, 4, 3, 7 ],
                ny: [ 2, 2, 4, 2, 4 ],
                nz: [ 2, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 3, 2, 11, 5 ],
                py: [ 23, 7, 4, 10, 6 ],
                pz: [ 0, 1, 2, 0, 1 ],
                nx: [ 21, 20, 11, 21, 21 ],
                ny: [ 21, 23, 8, 20, 20 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 4,
                px: [ 12, 6, 13, 12 ],
                py: [ 7, 3, 5, 6 ],
                pz: [ 0, 1, 0, 0 ],
                nx: [ 3, 0, 5, 10 ],
                ny: [ 4, 6, 5, 1 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 4, 0 ],
                pz: [ 0, -1 ],
                nx: [ 12, 11 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 2, 3, 22, 5 ],
                py: [ 6, 1, 18, 5 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 0, 0, 0, 3 ],
                ny: [ 14, 3, 12, 18 ],
                nz: [ 0, 2, 0, 0 ]
            }, {
                size: 3,
                px: [ 10, 20, 21 ],
                py: [ 10, 18, 15 ],
                pz: [ 1, 0, 0 ],
                nx: [ 15, 1, 2 ],
                ny: [ 7, 0, 8 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 4, 7, 13, 4, 6 ],
                pz: [ 1, 1, 0, 2, 1 ],
                nx: [ 5, 9, 8, 4, 4 ],
                ny: [ 3, 7, 7, 3, 3 ],
                nz: [ 1, 0, 0, 1, -1 ]
            }, {
                size: 3,
                px: [ 13, 12, 14 ],
                py: [ 2, 2, 2 ],
                pz: [ 0, 0, 0 ],
                nx: [ 4, 4, 4 ],
                ny: [ 2, 2, 5 ],
                nz: [ 2, -1, -1 ]
            }, {
                size: 5,
                px: [ 5, 4, 6, 2, 12 ],
                py: [ 7, 9, 7, 4, 10 ],
                pz: [ 0, 1, 0, 2, 0 ],
                nx: [ 6, 1, 2, 5, 2 ],
                ny: [ 9, 2, 4, 13, 4 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 12, 5 ],
                pz: [ 0, -1 ],
                nx: [ 1, 0 ],
                ny: [ 7, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 8, 8, 1, 16, 6 ],
                py: [ 6, 6, 4, 8, 11 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 13, 5, 4, 4, 13 ],
                ny: [ 12, 1, 2, 5, 11 ],
                nz: [ 0, 2, 2, 2, 0 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 4, 14 ],
                pz: [ 1, 0 ],
                nx: [ 9, 5 ],
                ny: [ 7, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 6 ],
                py: [ 4, 14 ],
                pz: [ 2, 0 ],
                nx: [ 9, 2 ],
                ny: [ 15, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 10, 19, 20, 10, 9 ],
                py: [ 1, 2, 3, 0, 0 ],
                pz: [ 1, 0, 0, 1, -1 ],
                nx: [ 11, 23, 23, 11, 23 ],
                ny: [ 0, 3, 1, 1, 2 ],
                nz: [ 1, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 2, 9 ],
                py: [ 3, 12 ],
                pz: [ 2, 0 ],
                nx: [ 2, 6 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 4, 10, 11, 9, 9 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 16, 2, 17, 8, 4 ],
                ny: [ 10, 2, 9, 4, 4 ],
                nz: [ 0, 2, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 0 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 4, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 21, 21 ],
                py: [ 9, 10 ],
                pz: [ 0, 0 ],
                nx: [ 11, 8 ],
                ny: [ 18, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 14, 7 ],
                py: [ 23, 9 ],
                pz: [ 0, 1 ],
                nx: [ 7, 13 ],
                ny: [ 10, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 6, 2 ],
                py: [ 11, 13, 12, 6, 4 ],
                pz: [ 0, 0, 0, -1, -1 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 14, 13, 6, 12, 11 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 6, 11 ],
                pz: [ 1, -1 ],
                nx: [ 15, 15 ],
                ny: [ 11, 10 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 4, 6, 7, 2 ],
                py: [ 8, 4, 23, 7 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 4, 20, 19, 17 ],
                ny: [ 0, 3, 1, 1 ],
                nz: [ 2, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 6, 0 ],
                pz: [ 1, -1 ],
                nx: [ 7, 4 ],
                ny: [ 8, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 15, 15 ],
                ny: [ 15, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 6, 2, 5, 2, 4 ],
                py: [ 23, 7, 21, 8, 16 ],
                pz: [ 0, 1, 0, 1, 0 ],
                nx: [ 18, 2, 10, 0, 11 ],
                ny: [ 9, 3, 23, 5, 3 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 9, 8, 10, 4 ],
                py: [ 0, 2, 2, 1, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 4, 3, 2, 2, 5 ],
                ny: [ 7, 3, 4, 2, 17 ],
                nz: [ 0, 1, 2, 2, 0 ]
            }, {
                size: 2,
                px: [ 10, 7 ],
                py: [ 5, 6 ],
                pz: [ 1, -1 ],
                nx: [ 11, 11 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 11, 11, 5, 6, 11 ],
                py: [ 8, 10, 5, 5, 9 ],
                pz: [ 0, 0, 1, 1, 0 ],
                nx: [ 13, 16, 11, 14, 4 ],
                ny: [ 9, 13, 11, 20, 23 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 14 ],
                py: [ 14, 22 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 11 ],
                py: [ 4, 5 ],
                pz: [ 2, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 7 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 0, 0 ],
                pz: [ 0, 1 ],
                nx: [ 0, 4 ],
                ny: [ 0, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 4, 9 ],
                py: [ 5, 5, 2, 9, 23 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 11, 12, 10, 9, 5 ],
                ny: [ 2, 2, 2, 2, 1 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 3,
                px: [ 16, 14, 15 ],
                py: [ 1, 1, 0 ],
                pz: [ 0, 0, 0 ],
                nx: [ 4, 7, 4 ],
                ny: [ 2, 4, 4 ],
                nz: [ 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 0 ],
                py: [ 14, 5 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 17 ],
                nz: [ 2, 0 ]
            }, {
                size: 5,
                px: [ 18, 7, 16, 19, 4 ],
                py: [ 13, 6, 23, 13, 3 ],
                pz: [ 0, 1, 0, 0, 2 ],
                nx: [ 5, 2, 3, 4, 4 ],
                ny: [ 1, 1, 4, 1, 3 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 7, 6 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 4, 4 ],
                ny: [ 3, 3 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 19, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 12 ],
                ny: [ 10, 17 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 12, 6, 2, 4, 11 ],
                py: [ 14, 4, 2, 1, 5 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 3, 4, 3, 4, 3 ],
                ny: [ 13, 17, 14, 16, 15 ],
                nz: [ 0, 0, 0, 0, 0 ]
            } ],
            alpha: [ -1.368326, 1.368326, -.7706897, .7706897, -.8378147, .8378147, -.6120624, .6120624, -.5139189, .5139189, -.475913, .475913, -.5161374, .5161374, -.5407743, .5407743, -.4216105, .4216105, -.4418693, .4418693, -.4435335, .4435335, -.4052076, .4052076, -.429305, .429305, -.3431154, .3431154, -.4231203, .4231203, -.39171, .39171, -.362345, .362345, -.320267, .320267, -.3331602, .3331602, -.3552034, .3552034, -.3784556, .3784556, -.3295428, .3295428, -.3587038, .3587038, -.2861332, .2861332, -.3403258, .3403258, -.3989002, .3989002, -.2631159, .2631159, -.3272156, .3272156, -.2816567, .2816567, -.3125926, .3125926, -.3146982, .3146982, -.2521825, .2521825, -.2434554, .2434554, -.3435378, .3435378, -.3161172, .3161172, -.2805027, .2805027, -.3303579, .3303579, -.2725089, .2725089, -.2575051, .2575051, -.3210646, .3210646, -.2986997, .2986997, -.2408925, .2408925, -.2456291, .2456291, -.283655, .283655, -.246986, .246986, -.29159, .29159, -.2513559, .2513559, -.2433728, .2433728, -.2377905, .2377905, -.2089327, .2089327, -.1978434, .1978434, -.3017699, .3017699, -.2339661, .2339661, -.193256, .193256, -.2278285, .2278285, -.24382, .24382, -.2216769, .2216769, -.1941995, .1941995, -.2129081, .2129081, -.2270319, .2270319, -.2393942, .2393942, -.2132518, .2132518, -.1867741, .1867741, -.2394237, .2394237, -.2005917, .2005917, -.2445217, .2445217, -.2229078, .2229078, -.2342967, .2342967, -.2481784, .2481784, -.2735603, .2735603, -.2187604, .2187604, -.1677239, .1677239, -.2248867, .2248867, -.2505358, .2505358, -.1867706, .1867706, -.1904305, .1904305, -.1939881, .1939881, -.2249474, .2249474, -.1762483, .1762483, -.2299974, .2299974 ]
        }, {
            count: 115,
            threshold: -5.15192,
            feature: [ {
                size: 5,
                px: [ 7, 14, 7, 10, 6 ],
                py: [ 3, 3, 12, 4, 4 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 14, 3, 14, 9, 3 ],
                ny: [ 7, 4, 8, 8, 5 ],
                nz: [ 0, 1, 0, 0, 2 ]
            }, {
                size: 5,
                px: [ 13, 18, 16, 17, 15 ],
                py: [ 1, 13, 1, 2, 0 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 23, 23, 8, 11, 22 ],
                ny: [ 3, 4, 4, 8, 0 ],
                nz: [ 0, 0, 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 16, 6, 6, 7, 12 ],
                py: [ 12, 13, 4, 12, 5 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 0, 0, 8, 4, 0 ],
                ny: [ 0, 2, 4, 4, 2 ],
                nz: [ 0, 0, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 13, 7 ],
                py: [ 13, 18, 6 ],
                pz: [ 0, 0, 1 ],
                nx: [ 13, 5, 6 ],
                ny: [ 16, 3, 8 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 12, 9, 13, 11 ],
                py: [ 3, 3, 3, 3, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 4, 15, 4, 4 ],
                ny: [ 2, 5, 10, 4, 4 ],
                nz: [ 2, 1, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 3, 12 ],
                py: [ 7, 9, 8, 3, 10 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 4, 8, 15, 9, 9 ],
                ny: [ 4, 4, 8, 8, 8 ],
                nz: [ 1, 1, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 6, 3, 4, 4, 2 ],
                py: [ 22, 12, 13, 14, 7 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 2, 0, 1, 1, 1 ],
                ny: [ 23, 5, 22, 21, 21 ],
                nz: [ 0, 2, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 8, 8 ],
                pz: [ 1, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 11, 0 ],
                py: [ 10, 12, 11, 13, 2 ],
                pz: [ 0, 0, 0, -1, -1 ],
                nx: [ 8, 13, 13, 13, 13 ],
                ny: [ 10, 8, 9, 11, 10 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 16, 16, 15, 17, 18 ],
                py: [ 12, 23, 11, 12, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 8, 9, 3, 13 ],
                ny: [ 4, 4, 12, 3, 10 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 17, 16, 6, 5 ],
                py: [ 14, 13, 4, 5 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 8, 15, 4, 7 ],
                ny: [ 10, 14, 4, 8 ],
                nz: [ 1, 0, 2, 1 ]
            }, {
                size: 5,
                px: [ 20, 10, 20, 21, 19 ],
                py: [ 14, 7, 13, 12, 22 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 22, 23, 11, 23, 23 ],
                ny: [ 23, 22, 11, 21, 20 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 4,
                px: [ 12, 13, 1, 18 ],
                py: [ 14, 23, 3, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 2, 10, 5, 9 ],
                ny: [ 2, 9, 8, 14 ],
                nz: [ 2, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 10, 4, 7, 9, 8 ],
                py: [ 1, 0, 2, 0, 1 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 2, 3, 5, 3, 3 ],
                ny: [ 2, 4, 8, 3, 3 ],
                nz: [ 2, 1, 1, 1, -1 ]
            }, {
                size: 4,
                px: [ 11, 2, 2, 11 ],
                py: [ 6, 4, 5, 7 ],
                pz: [ 0, 2, 2, 0 ],
                nx: [ 3, 0, 5, 3 ],
                ny: [ 4, 9, 8, 3 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 12, 10, 9, 12, 12 ],
                py: [ 11, 2, 1, 10, 10 ],
                pz: [ 0, 1, 1, 0, -1 ],
                nx: [ 22, 11, 5, 22, 23 ],
                ny: [ 1, 1, 0, 0, 3 ],
                nz: [ 0, 1, 2, 0, 0 ]
            }, {
                size: 4,
                px: [ 5, 10, 7, 11 ],
                py: [ 14, 3, 0, 4 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 4, 4, 4, 4 ],
                ny: [ 17, 18, 15, 16 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 2, 2, 3, 2, 2 ],
                py: [ 16, 12, 20, 15, 17 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 12, 8, 4, 15, 15 ],
                ny: [ 17, 4, 4, 8, 8 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 1, 6, 12 ],
                py: [ 11, 10, 3, 6, 10 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 0, 0, 1, 0, 2 ],
                ny: [ 4, 0, 2, 1, 0 ],
                nz: [ 0, 2, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 21, 20, 21, 21, 14 ],
                py: [ 9, 16, 11, 8, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 17, 6, 15, 0, 2 ],
                ny: [ 8, 23, 13, 2, 0 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 6, 9, 9, 5 ],
                py: [ 14, 18, 23, 14 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 9, 5, 5, 12 ],
                ny: [ 21, 5, 3, 1 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 4, 3 ],
                ny: [ 4, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 7, 8, 11, 4, 10 ],
                py: [ 3, 3, 2, 1, 2 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 19, 20, 19, 20, 20 ],
                ny: [ 0, 3, 1, 2, 2 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 1 ],
                py: [ 7, 4 ],
                pz: [ 1, -1 ],
                nx: [ 4, 7 ],
                ny: [ 5, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 11, 10, 1, 5, 1 ],
                py: [ 10, 12, 6, 6, 5 ],
                pz: [ 0, 0, 1, 1, 1 ],
                nx: [ 16, 3, 2, 4, 4 ],
                ny: [ 10, 4, 2, 4, 4 ],
                nz: [ 0, 1, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 15, 0 ],
                py: [ 17, 0 ],
                pz: [ 0, -1 ],
                nx: [ 7, 4 ],
                ny: [ 8, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 8, 10, 9, 9, 9 ],
                py: [ 2, 2, 2, 1, 1 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 2, 3, 3, 2 ],
                ny: [ 0, 3, 2, 1, 4 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 11, 15, 17, 16 ],
                py: [ 8, 10, 11, 11 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 14, 1, 1, 2 ],
                ny: [ 9, 5, 7, 0 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 3, 5, 9 ],
                py: [ 8, 6, 12 ],
                pz: [ 0, 1, 0 ],
                nx: [ 3, 4, 18 ],
                ny: [ 4, 2, 22 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 1, 7, 3, 3 ],
                py: [ 13, 4, 13, 7, 7 ],
                pz: [ 0, 2, 0, 1, -1 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 16, 15, 8, 13, 14 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 16 ],
                py: [ 13, 10 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 5, 23, 11, 23, 23 ],
                py: [ 5, 12, 4, 16, 15 ],
                pz: [ 2, 0, 1, 0, 0 ],
                nx: [ 3, 2, 4, 5, 5 ],
                ny: [ 4, 2, 4, 11, 11 ],
                nz: [ 1, 2, 1, 1, -1 ]
            }, {
                size: 4,
                px: [ 10, 10, 3, 23 ],
                py: [ 7, 7, 3, 16 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 5, 23, 11, 22 ],
                ny: [ 4, 13, 7, 16 ],
                nz: [ 2, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 15, 14, 13, 15, 16 ],
                py: [ 1, 0, 0, 0, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 9, 8, 8, 8 ],
                ny: [ 2, 4, 9, 4, 4 ],
                nz: [ 2, 1, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 15 ],
                ny: [ 1, 8 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 6, 9 ],
                pz: [ 1, 0 ],
                nx: [ 10, 10 ],
                ny: [ 10, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 1, 0, 0, 0, 0 ],
                py: [ 5, 4, 11, 9, 12 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 9, 8, 2, 4, 7 ],
                ny: [ 7, 7, 2, 4, 7 ],
                nz: [ 0, 0, 2, 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 9, 8 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 4, 1 ],
                pz: [ 2, -1 ],
                nx: [ 8, 6 ],
                ny: [ 7, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 8, 5, 7, 6, 11 ],
                py: [ 12, 5, 13, 13, 22 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 23, 23, 23, 22, 22 ],
                ny: [ 20, 19, 21, 23, 23 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 17 ],
                py: [ 6, 9 ],
                pz: [ 1, -1 ],
                nx: [ 3, 3 ],
                ny: [ 10, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 14, 11 ],
                py: [ 23, 5 ],
                pz: [ 0, 0 ],
                nx: [ 7, 3 ],
                ny: [ 10, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 8, 8 ],
                pz: [ 1, 1 ],
                nx: [ 9, 4 ],
                ny: [ 15, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 2, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 23, 11 ],
                py: [ 21, 10 ],
                pz: [ 0, 1 ],
                nx: [ 2, 3 ],
                ny: [ 11, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 11, 11, 11, 3 ],
                py: [ 13, 12, 11, 4 ],
                pz: [ 0, 0, 0, -1 ],
                nx: [ 14, 13, 13, 6 ],
                ny: [ 13, 11, 10, 5 ],
                nz: [ 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 9, 19 ],
                ny: [ 4, 14 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 10, 5, 7 ],
                py: [ 5, 0, 6 ],
                pz: [ 1, -1, -1 ],
                nx: [ 10, 21, 5 ],
                ny: [ 0, 5, 3 ],
                nz: [ 1, 0, 2 ]
            }, {
                size: 2,
                px: [ 16, 13 ],
                py: [ 3, 15 ],
                pz: [ 0, -1 ],
                nx: [ 17, 7 ],
                ny: [ 23, 8 ],
                nz: [ 0, 1 ]
            }, {
                size: 3,
                px: [ 4, 2, 2 ],
                py: [ 15, 7, 19 ],
                pz: [ 0, 1, -1 ],
                nx: [ 2, 8, 4 ],
                ny: [ 5, 14, 9 ],
                nz: [ 2, 0, 1 ]
            }, {
                size: 3,
                px: [ 8, 3, 6 ],
                py: [ 10, 2, 4 ],
                pz: [ 0, 2, 1 ],
                nx: [ 3, 8, 4 ],
                ny: [ 4, 14, 9 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 14, 3 ],
                py: [ 18, 3 ],
                pz: [ 0, -1 ],
                nx: [ 12, 14 ],
                ny: [ 17, 9 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 7, 1, 10 ],
                py: [ 14, 10, 10 ],
                pz: [ 0, -1, -1 ],
                nx: [ 9, 6, 2 ],
                ny: [ 13, 18, 2 ],
                nz: [ 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 13, 11 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 7, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 21, 17 ],
                pz: [ 0, 0 ],
                nx: [ 9, 3 ],
                ny: [ 5, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 4, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 2, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 1, 5 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 1, 0 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 18, 1 ],
                py: [ 13, 5 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 1 ],
                py: [ 4, 3, 2, 12, 15 ],
                pz: [ 1, 1, 2, 0, 0 ],
                nx: [ 5, 9, 4, 8, 8 ],
                ny: [ 3, 6, 3, 6, 6 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 5 ],
                py: [ 0, 2 ],
                pz: [ 1, -1 ],
                nx: [ 2, 1 ],
                ny: [ 0, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 7, 15, 4, 20 ],
                py: [ 8, 23, 4, 8 ],
                pz: [ 1, 0, 2, 0 ],
                nx: [ 6, 0, 3, 4 ],
                ny: [ 9, 2, 13, 6 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 11, 11, 10, 20 ],
                py: [ 10, 9, 11, 8 ],
                pz: [ 0, 0, 0, -1 ],
                nx: [ 21, 20, 21, 21 ],
                ny: [ 18, 23, 19, 17 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 8 ],
                py: [ 7, 5 ],
                pz: [ 1, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 5, 11 ],
                py: [ 3, 4 ],
                pz: [ 2, 1 ],
                nx: [ 8, 7 ],
                ny: [ 5, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 1, 3 ],
                pz: [ 1, -1 ],
                nx: [ 3, 6 ],
                ny: [ 0, 0 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 19, 9 ],
                py: [ 16, 8 ],
                pz: [ 0, 1 ],
                nx: [ 14, 6 ],
                ny: [ 15, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 13, 5 ],
                pz: [ 0, -1 ],
                nx: [ 5, 5 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 5,
                px: [ 16, 14, 4, 15, 12 ],
                py: [ 1, 1, 1, 2, 1 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 6, 4, 3, 2, 10 ],
                ny: [ 22, 8, 2, 1, 7 ],
                nz: [ 0, 1, 1, 2, 0 ]
            }, {
                size: 5,
                px: [ 6, 8, 6, 5, 5 ],
                py: [ 1, 0, 0, 1, 0 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 4, 4, 4, 8 ],
                ny: [ 4, 3, 2, 5, 10 ],
                nz: [ 2, 2, 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 8 ],
                py: [ 17, 0 ],
                pz: [ 0, -1 ],
                nx: [ 2, 5 ],
                ny: [ 5, 8 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 0 ],
                py: [ 7, 3 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 21 ],
                py: [ 11, 20 ],
                pz: [ 1, 0 ],
                nx: [ 11, 4 ],
                ny: [ 17, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 5, 10, 4, 17, 10 ],
                py: [ 3, 6, 3, 11, 5 ],
                pz: [ 1, 0, 1, 0, 0 ],
                nx: [ 21, 20, 9, 19, 10 ],
                ny: [ 4, 3, 0, 2, 1 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 23, 23 ],
                py: [ 10, 10 ],
                pz: [ 0, -1 ],
                nx: [ 23, 23 ],
                ny: [ 21, 22 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 20, 19, 20, 20 ],
                py: [ 0, 3, 1, 2, 2 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 11, 23, 11, 23, 5 ],
                ny: [ 1, 2, 0, 1, 0 ],
                nz: [ 1, 0, 1, 0, 2 ]
            }, {
                size: 3,
                px: [ 6, 8, 7 ],
                py: [ 4, 10, 11 ],
                pz: [ 1, 0, 0 ],
                nx: [ 8, 3, 4 ],
                ny: [ 9, 4, 4 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 4,
                px: [ 13, 13, 10, 4 ],
                py: [ 14, 23, 1, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 15, 14, 8, 8 ],
                ny: [ 13, 12, 8, 9 ],
                nz: [ 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 9 ],
                py: [ 5, 8 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 7, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 5,
                px: [ 4, 8, 4, 7, 7 ],
                py: [ 2, 3, 3, 11, 11 ],
                pz: [ 2, 1, 2, 1, -1 ],
                nx: [ 0, 0, 1, 0, 0 ],
                ny: [ 4, 6, 15, 3, 2 ],
                nz: [ 1, 1, 0, 2, 2 ]
            }, {
                size: 2,
                px: [ 6, 1 ],
                py: [ 12, 1 ],
                pz: [ 0, -1 ],
                nx: [ 1, 10 ],
                ny: [ 2, 11 ],
                nz: [ 2, 0 ]
            }, {
                size: 5,
                px: [ 0, 0, 2, 3, 7 ],
                py: [ 0, 1, 4, 3, 11 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 9, 11, 9, 6, 12 ],
                ny: [ 2, 1, 1, 0, 2 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 11 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 1, 1, 1, 1, 1 ],
                py: [ 15, 10, 19, 16, 18 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 4, 5, 3, 5, 6 ],
                ny: [ 4, 19, 9, 18, 19 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 20 ],
                py: [ 11, 12, 13, 13, 18 ],
                pz: [ 0, 0, 0, -1, -1 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 4, 2, 7, 6, 12 ],
                nz: [ 1, 2, 1, 1, 0 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 9, 11 ],
                pz: [ 0, 0 ],
                nx: [ 10, 4 ],
                ny: [ 5, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 9, 6 ],
                pz: [ 0, 1 ],
                nx: [ 13, 13 ],
                ny: [ 10, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 5, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 3 ],
                ny: [ 5, 5 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 19, 9 ],
                py: [ 10, 6 ],
                pz: [ 0, 1 ],
                nx: [ 4, 1 ],
                ny: [ 2, 2 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 14, 4 ],
                py: [ 19, 12 ],
                pz: [ 0, -1 ],
                nx: [ 14, 8 ],
                ny: [ 17, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 4, 2, 13, 2 ],
                py: [ 12, 6, 9, 3 ],
                pz: [ 0, 1, -1, -1 ],
                nx: [ 1, 0, 1, 0 ],
                ny: [ 16, 14, 11, 15 ],
                nz: [ 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 4, 4 ],
                ny: [ 4, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 9, 11, 12, 6, 10 ],
                py: [ 2, 1, 2, 1, 2 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 4, 6, 4, 6, 2 ],
                ny: [ 4, 0, 9, 1, 8 ],
                nz: [ 0, 0, 1, 0, 1 ]
            }, {
                size: 5,
                px: [ 4, 4, 7, 2, 2 ],
                py: [ 19, 20, 23, 8, 9 ],
                pz: [ 0, 0, 0, 1, 1 ],
                nx: [ 7, 0, 5, 6, 2 ],
                ny: [ 10, 5, 4, 1, 8 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 18, 18, 17, 18, 18 ],
                py: [ 15, 16, 14, 20, 17 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 15, 2, 2, 5, 2 ],
                ny: [ 8, 0, 2, 9, 4 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 13, 13, 13, 18 ],
                py: [ 11, 12, 12, 20 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 1, 3, 10, 10 ],
                ny: [ 1, 6, 12, 11 ],
                nz: [ 2, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 0, 1 ],
                pz: [ 1, 1 ],
                nx: [ 19, 4 ],
                ny: [ 2, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 4, 2 ],
                pz: [ 1, 2 ],
                nx: [ 8, 4 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 23, 11, 22, 13, 13 ],
                py: [ 8, 3, 3, 12, 12 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 15, 7, 14, 13, 8 ],
                ny: [ 7, 3, 6, 6, 3 ],
                nz: [ 0, 1, 0, 0, 1 ]
            }, {
                size: 3,
                px: [ 9, 11, 19 ],
                py: [ 7, 3, 0 ],
                pz: [ 1, -1, -1 ],
                nx: [ 23, 23, 11 ],
                ny: [ 16, 12, 7 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 15, 8 ],
                py: [ 23, 7 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 5, 4 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 4, 10 ],
                py: [ 6, 13 ],
                pz: [ 1, -1 ],
                nx: [ 2, 3 ],
                ny: [ 4, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 11, 2 ],
                pz: [ 1, 2 ],
                nx: [ 9, 2 ],
                ny: [ 5, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 22, 22 ],
                py: [ 22, 21 ],
                pz: [ 0, 0 ],
                nx: [ 3, 0 ],
                ny: [ 5, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 20, 10 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 20, 10 ],
                ny: [ 23, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 10, 3, 3, 4 ],
                py: [ 5, 3, 4, 9 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 14, 4, 3, 11 ],
                ny: [ 2, 1, 1, 3 ],
                nz: [ 0, 2, 2, 0 ]
            }, {
                size: 3,
                px: [ 15, 15, 3 ],
                py: [ 1, 1, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 7, 4, 4 ],
                ny: [ 8, 2, 3 ],
                nz: [ 1, 2, 2 ]
            }, {
                size: 3,
                px: [ 0, 0, 0 ],
                py: [ 3, 4, 6 ],
                pz: [ 2, 2, 1 ],
                nx: [ 0, 21, 4 ],
                ny: [ 23, 14, 3 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 4, 4, 5, 3, 4 ],
                py: [ 9, 11, 8, 4, 8 ],
                pz: [ 1, 1, 1, 2, 1 ],
                nx: [ 21, 21, 10, 19, 19 ],
                ny: [ 3, 4, 1, 0, 0 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 4,
                px: [ 21, 20, 20, 21 ],
                py: [ 18, 21, 20, 17 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 8, 1, 4, 2 ],
                ny: [ 10, 0, 2, 4 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 14 ],
                pz: [ 1, 0 ],
                nx: [ 3, 5 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 0, 23 ],
                py: [ 20, 2, 13 ],
                pz: [ 0, -1, -1 ],
                nx: [ 12, 2, 9 ],
                ny: [ 19, 2, 7 ],
                nz: [ 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 0, 6 ],
                py: [ 22, 11 ],
                pz: [ 0, -1 ],
                nx: [ 20, 18 ],
                ny: [ 12, 23 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 15, 15, 16, 8 ],
                py: [ 2, 1, 2, 2, 1 ],
                pz: [ 1, 0, 0, 0, 1 ],
                nx: [ 1, 1, 1, 1, 1 ],
                ny: [ 16, 10, 17, 18, 18 ],
                nz: [ 0, 1, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 10, 5, 3, 5, 8 ],
                py: [ 14, 2, 1, 4, 1 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 23, 23, 23, 23, 23 ],
                ny: [ 18, 15, 16, 14, 17 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 2, 2, 2, 3, 2 ],
                py: [ 16, 17, 15, 20, 11 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 22, 2, 1, 23 ],
                ny: [ 20, 11, 5, 0, 17 ],
                nz: [ 0, -1, -1, -1, -1 ]
            } ],
            alpha: [ -1.299972, 1.299972, -.7630804, .7630804, -.5530378, .5530378, -.5444703, .5444703, -.5207701, .5207701, -.5035143, .5035143, -.4514416, .4514416, -.4897723, .4897723, -.5006264, .5006264, -.4626049, .4626049, -.4375402, .4375402, -.3742565, .3742565, -.3873996, .3873996, -.3715484, .3715484, -.356248, .356248, -.3216189, .3216189, -.3983409, .3983409, -.3191891, .3191891, -.3242173, .3242173, -.352804, .352804, -.3562318, .3562318, -.3592398, .3592398, -.2557584, .2557584, -.2747951, .2747951, -.2747554, .2747554, -.2980481, .2980481, -.288767, .288767, -.3895318, .3895318, -.2786896, .2786896, -.2763841, .2763841, -.2704816, .2704816, -.2075489, .2075489, -.3104773, .3104773, -.2580337, .2580337, -.2448334, .2448334, -.3054279, .3054279, -.2335804, .2335804, -.2972322, .2972322, -.2270521, .2270521, -.2134621, .2134621, -.2261655, .2261655, -.2091024, .2091024, -.2478928, .2478928, -.2468972, .2468972, -.1919746, .1919746, -.2756623, .2756623, -.2629717, .2629717, -.2198653, .2198653, -.2174434, .2174434, -.2193626, .2193626, -.1956262, .1956262, -.1720459, .1720459, -.1781067, .1781067, -.1773484, .1773484, -.1793871, .1793871, -.1973396, .1973396, -.2397262, .2397262, -.2164685, .2164685, -.2214348, .2214348, -.2265941, .2265941, -.2075436, .2075436, -.224407, .224407, -.2291992, .2291992, -.2223506, .2223506, -.1639398, .1639398, -.1732374, .1732374, -.1808631, .1808631, -.1860962, .1860962, -.1781604, .1781604, -.2108322, .2108322, -.238639, .238639, -.1942083, .1942083, -.1949161, .1949161, -.1953729, .1953729, -.2317591, .2317591, -.2335136, .2335136, -.2282835, .2282835, -.2148716, .2148716, -.1588127, .1588127, -.1566765, .1566765, -.1644839, .1644839, -.2386947, .2386947, -.1704126, .1704126, -.2213945, .2213945, -.1740398, .1740398, -.2451678, .2451678, -.2120524, .2120524, -.1886646, .1886646, -.2824447, .2824447, -.1900364, .1900364, -.2179183, .2179183, -.2257696, .2257696, -.2023404, .2023404, -.1886901, .1886901, -.1850663, .1850663, -.2035414, .2035414, -.1930174, .1930174, -.1898282, .1898282, -.166664, .166664, -.1646143, .1646143, -.1543475, .1543475, -.1366289, .1366289, -.1636837, .1636837, -.2547716, .2547716, -.1281869, .1281869, -.1509159, .1509159, -.1447827, .1447827, -.1626126, .1626126, -.2387014, .2387014, -.257116, .257116, -.1719175, .1719175, -.1646742, .1646742, -.1717041, .1717041, -.2039217, .2039217, -.1796907, .1796907 ]
        }, {
            count: 153,
            threshold: -4.971032,
            feature: [ {
                size: 5,
                px: [ 14, 13, 18, 10, 16 ],
                py: [ 2, 2, 13, 3, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 21, 7, 14, 23, 23 ],
                ny: [ 16, 7, 8, 3, 13 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 15, 14 ],
                py: [ 9, 10, 11, 3, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 9, 9, 8, 14, 3 ],
                ny: [ 9, 8, 5, 9, 5 ],
                nz: [ 0, 0, 1, 0, 2 ]
            }, {
                size: 5,
                px: [ 5, 11, 7, 6, 8 ],
                py: [ 12, 8, 12, 12, 11 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 4, 3, 9, 9 ],
                ny: [ 4, 4, 4, 9, 9 ],
                nz: [ 1, 1, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 9, 8, 4, 10, 6 ],
                py: [ 2, 2, 1, 3, 13 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 1, 1, 5, 1, 1 ],
                ny: [ 2, 3, 8, 4, 16 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 3, 16, 6, 17, 15 ],
                py: [ 2, 17, 4, 12, 12 ],
                pz: [ 2, 0, 1, 0, 0 ],
                nx: [ 4, 8, 15, 1, 1 ],
                ny: [ 4, 4, 8, 16, 16 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 18, 15, 8, 17 ],
                py: [ 12, 23, 6, 12 ],
                pz: [ 0, 0, 1, 0 ],
                nx: [ 15, 4, 10, 5 ],
                ny: [ 21, 8, 14, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 18, 17, 9, 19, 19 ],
                py: [ 3, 1, 0, 3, 3 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 22, 11, 23, 23, 23 ],
                ny: [ 0, 1, 2, 3, 4 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 9, 5, 5, 10 ],
                py: [ 18, 15, 14, 18 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 10, 11, 2, 0 ],
                ny: [ 16, 7, 12, 7 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 12 ],
                py: [ 4, 6 ],
                pz: [ 2, 0 ],
                nx: [ 3, 12 ],
                ny: [ 4, 19 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 4, 5, 2, 2 ],
                py: [ 3, 3, 3, 1, 1 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 0, 0, 1, 0, 0 ],
                ny: [ 3, 4, 0, 1, 2 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 8, 10 ],
                py: [ 13, 12, 12, 1, 18 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 13, 8, 7, 14, 9 ],
                ny: [ 10, 10, 7, 13, 4 ],
                nz: [ 0, 1, 1, 0, 1 ]
            }, {
                size: 5,
                px: [ 15, 4, 12, 14, 12 ],
                py: [ 12, 3, 9, 10, 8 ],
                pz: [ 0, 2, 0, 0, 0 ],
                nx: [ 14, 7, 11, 2, 9 ],
                ny: [ 8, 4, 7, 5, 4 ],
                nz: [ 0, 1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 3, 9, 7 ],
                py: [ 7, 23, 15 ],
                pz: [ 1, -1, -1 ],
                nx: [ 4, 4, 2 ],
                ny: [ 9, 7, 5 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 3,
                px: [ 5, 17, 5 ],
                py: [ 3, 23, 4 ],
                pz: [ 2, 0, 2 ],
                nx: [ 23, 2, 4 ],
                ny: [ 23, 16, 4 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 4, 9, 9, 10, 8 ],
                py: [ 1, 0, 1, 0, 2 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 2, 5, 4, 2, 2 ],
                ny: [ 2, 19, 11, 4, 1 ],
                nz: [ 2, 0, 1, 2, 2 ]
            }, {
                size: 5,
                px: [ 8, 3, 8, 4, 7 ],
                py: [ 23, 9, 13, 8, 16 ],
                pz: [ 0, 1, 0, 1, 0 ],
                nx: [ 8, 2, 5, 3, 2 ],
                ny: [ 8, 15, 1, 1, 1 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 14, 5 ],
                pz: [ 0, -1 ],
                nx: [ 1, 9 ],
                ny: [ 3, 13 ],
                nz: [ 2, 0 ]
            }, {
                size: 5,
                px: [ 5, 8, 1, 8, 6 ],
                py: [ 12, 12, 3, 23, 12 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 1, 1, 2, 1, 1 ],
                ny: [ 22, 21, 23, 20, 20 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 14, 21, 19, 21, 20 ],
                py: [ 13, 8, 20, 10, 7 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 16, 0, 14, 23, 1 ],
                ny: [ 8, 1, 23, 10, 20 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 15, 16, 13, 14, 14 ],
                py: [ 3, 3, 3, 3, 3 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 18, 19, 18, 9, 17 ],
                ny: [ 2, 2, 1, 1, 0 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 17, 9 ],
                py: [ 14, 4 ],
                pz: [ 0, -1 ],
                nx: [ 9, 18 ],
                ny: [ 4, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 21, 20 ],
                py: [ 17, 21 ],
                pz: [ 0, 0 ],
                nx: [ 12, 3 ],
                ny: [ 17, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 4, 1 ],
                ny: [ 10, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 7, 8, 4, 9, 9 ],
                py: [ 2, 2, 0, 2, 2 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 5, 5, 4, 6, 3 ],
                ny: [ 0, 1, 2, 0, 0 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 2, 5 ],
                py: [ 3, 5 ],
                pz: [ 2, -1 ],
                nx: [ 3, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 0, 1, 3, 4, 4 ],
                pz: [ 2, 2, 1, 1, -1 ],
                nx: [ 20, 20, 19, 20, 19 ],
                ny: [ 21, 20, 23, 19, 22 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 18 ],
                py: [ 8, 16 ],
                pz: [ 1, 0 ],
                nx: [ 14, 6 ],
                ny: [ 15, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 3, 4, 7 ],
                py: [ 3, 3, 9 ],
                pz: [ 2, 2, 1 ],
                nx: [ 8, 9, 7 ],
                ny: [ 4, 11, 4 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 14, 4, 7, 7 ],
                py: [ 4, 23, 3, 6, 6 ],
                pz: [ 1, 0, 2, 1, -1 ],
                nx: [ 2, 0, 2, 1, 3 ],
                ny: [ 20, 4, 21, 10, 23 ],
                nz: [ 0, 2, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 2, 4, 8, 9, 10 ],
                py: [ 3, 8, 13, 23, 23 ],
                pz: [ 2, 1, 0, 0, 0 ],
                nx: [ 10, 4, 0, 3, 3 ],
                ny: [ 21, 3, 0, 3, 23 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 11, 10, 11 ],
                py: [ 6, 5, 5 ],
                pz: [ 0, 0, 0 ],
                nx: [ 14, 6, 1 ],
                ny: [ 7, 9, 5 ],
                nz: [ 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 11, 6 ],
                py: [ 11, 12, 10, 13, 6 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 9, 13, 13, 13, 4 ],
                ny: [ 4, 9, 10, 11, 2 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 11 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 1, 2 ],
                py: [ 4, 11 ],
                pz: [ 2, 0 ],
                nx: [ 8, 8 ],
                ny: [ 15, 15 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 13, 12, 12 ],
                py: [ 10, 11, 13, 12, 12 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 0, 0, 0, 1, 0 ],
                ny: [ 13, 2, 12, 5, 14 ],
                nz: [ 0, 2, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 1, 1 ],
                py: [ 4, 3, 11, 15, 13 ],
                pz: [ 1, 2, 0, 0, 0 ],
                nx: [ 2, 3, 3, 1, 0 ],
                ny: [ 2, 4, 4, 5, 14 ],
                nz: [ 2, 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 11 ],
                py: [ 12, 10 ],
                pz: [ 0, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 18, 8, 9, 9, 9 ],
                py: [ 15, 7, 8, 10, 7 ],
                pz: [ 0, 1, 1, 1, 1 ],
                nx: [ 22, 23, 21, 22, 11 ],
                ny: [ 20, 16, 23, 19, 9 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 14, 12, 13, 14, 15 ],
                py: [ 1, 0, 0, 0, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 9, 4, 7, 7 ],
                ny: [ 2, 3, 1, 8, 8 ],
                nz: [ 2, 1, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 9 ],
                py: [ 14, 19 ],
                pz: [ 0, -1 ],
                nx: [ 6, 10 ],
                ny: [ 0, 2 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 13, 12 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 3, 3 ],
                ny: [ 1, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 3,
                px: [ 14, 5, 5 ],
                py: [ 18, 3, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 8, 7, 8 ],
                ny: [ 4, 8, 10 ],
                nz: [ 1, 1, 1 ]
            }, {
                size: 2,
                px: [ 8, 18 ],
                py: [ 6, 11 ],
                pz: [ 1, 0 ],
                nx: [ 9, 1 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 11 ],
                py: [ 9, 7 ],
                pz: [ 0, 0 ],
                nx: [ 7, 7 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 23, 11, 23, 11, 23 ],
                py: [ 13, 4, 12, 7, 10 ],
                pz: [ 0, 1, 0, 1, 0 ],
                nx: [ 7, 4, 8, 15, 15 ],
                ny: [ 9, 2, 4, 8, 8 ],
                nz: [ 0, 2, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 1, 0 ],
                pz: [ 0, 1 ],
                nx: [ 4, 1 ],
                ny: [ 1, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 7, 6 ],
                pz: [ 0, 1 ],
                nx: [ 6, 4 ],
                ny: [ 9, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 5, 6, 5, 5 ],
                py: [ 8, 6, 11, 6 ],
                pz: [ 1, 1, 1, 0 ],
                nx: [ 23, 0, 4, 5 ],
                ny: [ 0, 2, 2, 1 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 18, 4 ],
                py: [ 13, 3 ],
                pz: [ 0, -1 ],
                nx: [ 15, 4 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 4, 0 ],
                py: [ 8, 0 ],
                pz: [ 1, -1 ],
                nx: [ 9, 2 ],
                ny: [ 15, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 15, 15, 16, 14, 14 ],
                py: [ 0, 1, 1, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 4, 8, 8, 15 ],
                ny: [ 4, 5, 4, 11, 23 ],
                nz: [ 2, 2, 1, 1, 0 ]
            }, {
                size: 4,
                px: [ 12, 11, 3, 14 ],
                py: [ 14, 22, 1, 0 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 8, 15, 7, 16 ],
                ny: [ 2, 3, 1, 3 ],
                nz: [ 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 12 ],
                py: [ 6, 17 ],
                pz: [ 1, -1 ],
                nx: [ 2, 1 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 13, 12, 12, 7, 7 ],
                py: [ 5, 6, 5, 14, 14 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 10, 3, 10, 1, 10 ],
                ny: [ 13, 8, 11, 3, 10 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 15, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 16, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 1, 4, 2, 1, 2 ],
                py: [ 4, 0, 1, 1, 0 ],
                pz: [ 1, 1, 1, 2, 1 ],
                nx: [ 4, 9, 1, 5, 1 ],
                ny: [ 3, 4, 4, 5, 5 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 3, 1 ],
                pz: [ 0, 2 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 0 ],
                py: [ 21, 0 ],
                pz: [ 0, -1 ],
                nx: [ 6, 8 ],
                ny: [ 8, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 7, 11 ],
                py: [ 4, 18 ],
                pz: [ 0, -1 ],
                nx: [ 5, 7 ],
                ny: [ 0, 2 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 9, 7 ],
                py: [ 0, 3 ],
                pz: [ 1, -1 ],
                nx: [ 20, 10 ],
                ny: [ 0, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 10, 4, 1, 5 ],
                py: [ 0, 6, 8, 4 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 6, 15, 4, 14 ],
                ny: [ 3, 5, 1, 5 ],
                nz: [ 1, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 9, 2 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 3, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 6 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 0 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 0, 7 ],
                ny: [ 7, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 7, 3 ],
                pz: [ 1, -1 ],
                nx: [ 15, 4 ],
                ny: [ 14, 4 ],
                nz: [ 0, 2 ]
            }, {
                size: 4,
                px: [ 3, 1, 2, 2 ],
                py: [ 20, 7, 18, 17 ],
                pz: [ 0, 1, 0, 0 ],
                nx: [ 9, 5, 5, 4 ],
                ny: [ 5, 4, 18, 4 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 3, 1 ],
                pz: [ 2, -1 ],
                nx: [ 23, 23 ],
                ny: [ 14, 13 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 4 ],
                py: [ 6, 1 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 22, 22, 11, 11, 11 ],
                py: [ 12, 13, 4, 6, 6 ],
                pz: [ 0, 0, 1, 1, -1 ],
                nx: [ 4, 4, 4, 4, 3 ],
                ny: [ 16, 15, 18, 14, 11 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 10 ],
                py: [ 0, 1 ],
                pz: [ 1, 0 ],
                nx: [ 2, 2 ],
                ny: [ 2, 2 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 15, 6 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 15, 4 ],
                ny: [ 2, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 11, 2 ],
                py: [ 10, 20 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 19 ],
                py: [ 3, 8 ],
                pz: [ 2, 0 ],
                nx: [ 8, 21 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 4, 6, 7, 6, 2 ],
                py: [ 6, 15, 13, 14, 3 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 21, 22, 19, 21, 10 ],
                ny: [ 6, 12, 0, 3, 2 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 8, 12, 15, 14, 13 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 4, 3, 1, 3, 4 ],
                ny: [ 19, 16, 3, 15, 4 ],
                nz: [ 0, 0, 2, 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 2, 3 ],
                pz: [ 2, 2 ],
                nx: [ 8, 4 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 0, 0, 0, 5 ],
                py: [ 10, 9, 11, 21 ],
                pz: [ 1, 1, -1, -1 ],
                nx: [ 12, 4, 3, 11 ],
                ny: [ 3, 1, 1, 3 ],
                nz: [ 0, 2, 2, 0 ]
            }, {
                size: 2,
                px: [ 3, 1 ],
                py: [ 0, 0 ],
                pz: [ 1, 2 ],
                nx: [ 1, 4 ],
                ny: [ 2, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 2, 5, 1, 0, 1 ],
                py: [ 14, 23, 7, 5, 9 ],
                pz: [ 0, 0, 1, 1, 1 ],
                nx: [ 0, 0, 7, 9, 11 ],
                ny: [ 23, 22, 4, 9, 3 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 8, 8 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 9 ],
                py: [ 11, 3 ],
                pz: [ 1, -1 ],
                nx: [ 3, 2 ],
                ny: [ 14, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 2, 4, 5, 4 ],
                py: [ 8, 20, 22, 16 ],
                pz: [ 1, 0, 0, 0 ],
                nx: [ 8, 2, 11, 3 ],
                ny: [ 7, 4, 15, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 1, 2, 3 ],
                py: [ 2, 1, 0 ],
                pz: [ 0, 0, 0 ],
                nx: [ 0, 0, 15 ],
                ny: [ 1, 0, 11 ],
                nz: [ 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 22 ],
                py: [ 6, 7 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 13, 0, 5 ],
                py: [ 19, 10, 2 ],
                pz: [ 0, -1, -1 ],
                nx: [ 3, 4, 6 ],
                ny: [ 5, 5, 9 ],
                nz: [ 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 15 ],
                py: [ 8, 22 ],
                pz: [ 1, 0 ],
                nx: [ 7, 4 ],
                ny: [ 10, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 7, 6 ],
                pz: [ 1, 1 ],
                nx: [ 10, 1 ],
                ny: [ 9, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 11 ],
                py: [ 4, 3 ],
                pz: [ 0, -1 ],
                nx: [ 5, 9 ],
                ny: [ 0, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 14, 13, 14, 12, 15 ],
                py: [ 1, 2, 2, 2, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 8, 4, 7, 4 ],
                ny: [ 2, 4, 3, 4, 4 ],
                nz: [ 2, 1, 2, 1, -1 ]
            }, {
                size: 3,
                px: [ 13, 8, 2 ],
                py: [ 14, 5, 8 ],
                pz: [ 0, -1, -1 ],
                nx: [ 6, 8, 9 ],
                ny: [ 3, 2, 2 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 3, 6, 8 ],
                py: [ 7, 4, 12 ],
                pz: [ 1, 1, 0 ],
                nx: [ 3, 8, 9 ],
                ny: [ 5, 2, 2 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 16, 3 ],
                pz: [ 0, 2 ],
                nx: [ 13, 7 ],
                ny: [ 15, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 0 ],
                py: [ 7, 9 ],
                pz: [ 1, -1 ],
                nx: [ 2, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 3, 6, 8, 7, 7 ],
                py: [ 0, 1, 0, 0, 0 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 7, 9, 4, 3, 4 ],
                ny: [ 9, 7, 4, 2, 2 ],
                nz: [ 1, 1, 1, 2, 2 ]
            }, {
                size: 3,
                px: [ 3, 4, 16 ],
                py: [ 4, 4, 6 ],
                pz: [ 1, 2, 0 ],
                nx: [ 2, 2, 2 ],
                ny: [ 0, 0, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 5, 5 ],
                ny: [ 2, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 7, 20 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 21 ],
                py: [ 10, 18 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 10, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 13 ],
                py: [ 6, 23 ],
                pz: [ 1, -1 ],
                nx: [ 10, 10 ],
                ny: [ 11, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 10, 9, 5, 10, 10 ],
                py: [ 9, 13, 6, 10, 10 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 21, 21, 21, 10, 21 ],
                ny: [ 18, 20, 19, 11, 17 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 7, 6 ],
                pz: [ 1, 1 ],
                nx: [ 8, 1 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 14, 7 ],
                pz: [ 0, -1 ],
                nx: [ 13, 13 ],
                ny: [ 13, 11 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 4, 5 ],
                pz: [ 2, 2 ],
                nx: [ 12, 5 ],
                ny: [ 16, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 1, 3, 20 ],
                py: [ 3, 9, 2 ],
                pz: [ 2, -1, -1 ],
                nx: [ 0, 0, 0 ],
                ny: [ 7, 4, 13 ],
                nz: [ 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 4, 2 ],
                pz: [ 1, 2 ],
                nx: [ 1, 0 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 8, 9, 11 ],
                py: [ 2, 1, 2 ],
                pz: [ 0, 0, 0 ],
                nx: [ 2, 2, 0 ],
                ny: [ 2, 2, 13 ],
                nz: [ 2, -1, -1 ]
            }, {
                size: 2,
                px: [ 1, 10 ],
                py: [ 23, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 1, 1 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 13, 6, 3, 4 ],
                py: [ 8, 6, 4, 2 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 1, 1, 1, 4 ],
                ny: [ 9, 7, 8, 20 ],
                nz: [ 1, 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 11, 4, 4, 10, 3 ],
                py: [ 9, 16, 13, 12, 7 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 11, 3, 17, 4 ],
                ny: [ 8, 11, 9, 0, 4 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 6, 8 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 7, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 13 ],
                ny: [ 5, 9 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 8, 2 ],
                pz: [ 1, -1 ],
                nx: [ 16, 4 ],
                ny: [ 14, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 16, 15 ],
                pz: [ 0, 0 ],
                nx: [ 1, 20 ],
                ny: [ 23, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 2, 3 ],
                ny: [ 5, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 19, 8 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 10, 10 ],
                ny: [ 1, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 21, 21 ],
                py: [ 18, 16 ],
                pz: [ 0, 0 ],
                nx: [ 10, 3 ],
                ny: [ 17, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 23, 4 ],
                pz: [ 0, 2 ],
                nx: [ 5, 11 ],
                ny: [ 3, 7 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 3, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 1, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 5, 9, 8, 9 ],
                py: [ 8, 12, 13, 18 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 6, 5, 2, 5 ],
                ny: [ 8, 4, 7, 11 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 0, 0 ],
                pz: [ 0, 2 ],
                nx: [ 5, 5 ],
                ny: [ 3, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 12, 13 ],
                pz: [ 0, 0 ],
                nx: [ 9, 1 ],
                ny: [ 14, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 8, 16, 9, 4, 15 ],
                py: [ 11, 13, 8, 4, 12 ],
                pz: [ 1, 0, 1, 2, 0 ],
                nx: [ 3, 3, 3, 3, 4 ],
                ny: [ 4, 2, 1, 3, 0 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 7, 6 ],
                pz: [ 1, -1 ],
                nx: [ 19, 8 ],
                ny: [ 17, 11 ],
                nz: [ 0, 1 ]
            }, {
                size: 5,
                px: [ 14, 15, 12, 13, 13 ],
                py: [ 2, 2, 2, 2, 2 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 20, 9, 19, 20, 4 ],
                ny: [ 14, 2, 5, 15, 1 ],
                nz: [ 0, 1, 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 18, 8 ],
                py: [ 20, 7 ],
                pz: [ 0, 1 ],
                nx: [ 4, 9 ],
                ny: [ 2, 2 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 11, 5 ],
                pz: [ 1, 2 ],
                nx: [ 13, 19 ],
                ny: [ 20, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 12, 11, 3 ],
                py: [ 20, 20, 5 ],
                pz: [ 0, 0, -1 ],
                nx: [ 11, 12, 6 ],
                ny: [ 21, 21, 10 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 14 ],
                pz: [ 1, 0 ],
                nx: [ 3, 13 ],
                ny: [ 4, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 9 ],
                pz: [ 2, 1 ],
                nx: [ 2, 11 ],
                ny: [ 8, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 5, 5 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 6, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 23 ],
                py: [ 5, 9 ],
                pz: [ 1, 0 ],
                nx: [ 8, 2 ],
                ny: [ 11, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 23 ],
                py: [ 12, 9 ],
                pz: [ 0, -1 ],
                nx: [ 11, 22 ],
                ny: [ 10, 21 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 12, 12 ],
                py: [ 7, 7 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 7, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 8 ],
                py: [ 18, 1 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 8, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 16, 17 ],
                py: [ 11, 11 ],
                pz: [ 0, 0 ],
                nx: [ 15, 2 ],
                ny: [ 9, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 3, 0 ],
                pz: [ 2, -1 ],
                nx: [ 9, 10 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 13, 13 ],
                py: [ 20, 21 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 20, 20, 4, 18, 19 ],
                py: [ 17, 16, 5, 22, 20 ],
                pz: [ 0, 0, 2, 0, 0 ],
                nx: [ 8, 11, 5, 6, 2 ],
                ny: [ 10, 15, 11, 10, 1 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 6, 5, 6 ],
                py: [ 8, 10, 10 ],
                pz: [ 1, 1, 1 ],
                nx: [ 11, 8, 22 ],
                ny: [ 19, 2, 15 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 3,
                px: [ 5, 2, 13 ],
                py: [ 7, 10, 10 ],
                pz: [ 1, -1, -1 ],
                nx: [ 11, 11, 23 ],
                ny: [ 8, 9, 14 ],
                nz: [ 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 3, 6, 1, 5, 10 ],
                py: [ 7, 14, 1, 9, 2 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 11, 0, 1, 5, 1 ],
                ny: [ 14, 12, 18, 5, 19 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 3,
                px: [ 21, 21, 10 ],
                py: [ 16, 17, 10 ],
                pz: [ 0, 0, 1 ],
                nx: [ 5, 5, 1 ],
                ny: [ 9, 9, 18 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 21 ],
                py: [ 6, 17 ],
                pz: [ 1, -1 ],
                nx: [ 20, 10 ],
                ny: [ 7, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 10, 11 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 6, 13 ],
                ny: [ 2, 4 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 4, 4, 7, 9 ],
                py: [ 3, 4, 10, 3 ],
                pz: [ 2, 2, 1, 1 ],
                nx: [ 21, 2, 15, 5 ],
                ny: [ 0, 0, 0, 2 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 11, 11, 11 ],
                py: [ 7, 6, 9 ],
                pz: [ 1, 1, 1 ],
                nx: [ 23, 4, 9 ],
                ny: [ 23, 5, 6 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 14, 15 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 11, 23, 11, 23, 23 ],
                py: [ 11, 22, 10, 21, 20 ],
                pz: [ 1, 0, 1, 0, 0 ],
                nx: [ 10, 9, 19, 10, 10 ],
                ny: [ 10, 11, 20, 9, 9 ],
                nz: [ 1, 1, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 23 ],
                py: [ 13, 22 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 1 ],
                py: [ 19, 0 ],
                pz: [ 0, -1 ],
                nx: [ 11, 12 ],
                ny: [ 22, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 8 ],
                py: [ 4, 3 ],
                pz: [ 1, -1 ],
                nx: [ 5, 23 ],
                ny: [ 2, 7 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 6, 20 ],
                pz: [ 1, -1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 6 ],
                nz: [ 1, 1 ]
            } ],
            alpha: [ -1.135386, 1.135386, -.90908, .90908, -.591378, .591378, -.5556534, .5556534, -.508415, .508415, -.4464489, .4464489, -.4463241, .4463241, -.4985226, .4985226, -.4424638, .4424638, -.4300093, .4300093, -.4231341, .4231341, -.4087428, .4087428, -.337448, .337448, -.3230151, .3230151, -.3084427, .3084427, -.3235494, .3235494, -.2589281, .2589281, -.2970292, .2970292, -.2957065, .2957065, -.3997619, .3997619, -.3535901, .3535901, -.2725396, .2725396, -.2649725, .2649725, -.3103888, .3103888, -.3117775, .3117775, -.258962, .258962, -.2689202, .2689202, -.2127024, .2127024, -.2436322, .2436322, -.3120574, .3120574, -.278601, .278601, -.2649072, .2649072, -.2766509, .2766509, -.2367237, .2367237, -.2658049, .2658049, -.2103463, .2103463, -.1911522, .1911522, -.2535425, .2535425, -.2434696, .2434696, -.2180788, .2180788, -.2496873, .2496873, -.2700969, .2700969, -.2565479, .2565479, -.2737741, .2737741, -.1675507, .1675507, -.2551417, .2551417, -.2067648, .2067648, -.1636834, .1636834, -.2129306, .2129306, -.1656758, .1656758, -.1919369, .1919369, -.2031763, .2031763, -.2062327, .2062327, -.257795, .257795, -.2951823, .2951823, -.202316, .202316, -.2022234, .2022234, -.2132906, .2132906, -.1653278, .1653278, -.1648474, .1648474, -.1593352, .1593352, -.173565, .173565, -.1688778, .1688778, -.1519705, .1519705, -.1812202, .1812202, -.1967481, .1967481, -.1852954, .1852954, -.231778, .231778, -.2036251, .2036251, -.1609324, .1609324, -.2160205, .2160205, -.202619, .202619, -.1854761, .1854761, -.1832038, .1832038, -.2001141, .2001141, -.1418333, .1418333, -.1704773, .1704773, -.1586261, .1586261, -.1587582, .1587582, -.1899489, .1899489, -.147716, .147716, -.2260467, .2260467, -.2393598, .2393598, -.1582373, .1582373, -.1702498, .1702498, -.1737398, .1737398, -.1462529, .1462529, -.1396517, .1396517, -.1629625, .1629625, -.1446933, .1446933, -.1811657, .1811657, -.1336427, .1336427, -.1924813, .1924813, -.145752, .145752, -.1600259, .1600259, -.1297, .1297, -.2076199, .2076199, -.151006, .151006, -.1914568, .1914568, -.2138162, .2138162, -.1856916, .1856916, -.1843047, .1843047, -.1526846, .1526846, -.132832, .132832, -.1751311, .1751311, -.1643908, .1643908, -.1482706, .1482706, -.1622298, .1622298, -.1884979, .1884979, -.1633604, .1633604, -.1554166, .1554166, -.1405332, .1405332, -.1772398, .1772398, -.1410008, .1410008, -.1362301, .1362301, -.1709087, .1709087, -.1584613, .1584613, -.1188814, .1188814, -.1423888, .1423888, -.1345565, .1345565, -.1835986, .1835986, -.1445329, .1445329, -.1385826, .1385826, -.1558917, .1558917, -.1476053, .1476053, -.1370722, .1370722, -.2362666, .2362666, -.2907774, .2907774, -.165636, .165636, -.1644407, .1644407, -.1443394, .1443394, -.1438823, .1438823, -.1476964, .1476964, -.1956593, .1956593, -.2417519, .2417519, -.1659315, .1659315, -.1466254, .1466254, -.2034909, .2034909, -.2128771, .2128771, -.1665429, .1665429, -.1387131, .1387131, -.1298823, .1298823, -.1329495, .1329495, -.1769587, .1769587, -.136653, .136653, -.1254359, .1254359, -.1673022, .1673022, -.1602519, .1602519, -.1897245, .1897245, -.1893579, .1893579, -.157935, .157935, -.1472589, .1472589, -.1614193, .1614193 ]
        }, {
            count: 203,
            threshold: -4.769677,
            feature: [ {
                size: 5,
                px: [ 12, 5, 14, 9, 7 ],
                py: [ 9, 13, 3, 1, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 1, 0, 5, 14, 9 ],
                ny: [ 5, 3, 8, 8, 9 ],
                nz: [ 2, 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 14, 13, 11, 17, 12 ],
                py: [ 2, 2, 4, 13, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 22, 8, 23, 22 ],
                ny: [ 8, 15, 11, 12, 3 ],
                nz: [ 1, 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 11, 11, 11, 16 ],
                py: [ 4, 8, 7, 9, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 8, 14, 9, 9 ],
                ny: [ 4, 4, 8, 8, 8 ],
                nz: [ 1, 1, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 6, 12, 12, 8, 3 ],
                py: [ 11, 7, 8, 10, 2 ],
                pz: [ 0, 0, 0, 0, 2 ],
                nx: [ 8, 4, 4, 4, 0 ],
                ny: [ 4, 4, 4, 11, 0 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 19, 17, 18, 9, 9 ],
                py: [ 3, 2, 3, 1, 1 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 21, 21, 10, 22, 22 ],
                ny: [ 1, 2, 0, 4, 3 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 4, 6 ],
                pz: [ 2, 1 ],
                nx: [ 8, 7 ],
                ny: [ 4, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 14, 17, 17, 13, 12 ],
                py: [ 18, 15, 16, 18, 18 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 13, 19, 5, 20, 6 ],
                ny: [ 16, 4, 1, 19, 0 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 7, 4, 5, 5 ],
                py: [ 15, 23, 6, 12, 16 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 3, 14, 14, 6, 6 ],
                ny: [ 4, 11, 11, 9, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 16, 9, 6, 3, 11 ],
                py: [ 2, 2, 5, 3, 2 ],
                pz: [ 0, 0, 1, 2, 0 ],
                nx: [ 3, 4, 2, 5, 5 ],
                ny: [ 4, 11, 2, 8, 8 ],
                nz: [ 1, 1, 2, 1, -1 ]
            }, {
                size: 5,
                px: [ 6, 1, 5, 3, 3 ],
                py: [ 14, 4, 15, 7, 7 ],
                pz: [ 0, 2, 0, 1, -1 ],
                nx: [ 0, 0, 1, 1, 1 ],
                ny: [ 7, 8, 18, 17, 5 ],
                nz: [ 1, 1, 0, 0, 2 ]
            }, {
                size: 5,
                px: [ 12, 12, 9, 5, 3 ],
                py: [ 14, 14, 0, 3, 7 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 7, 7, 14, 8, 13 ],
                ny: [ 7, 8, 13, 10, 10 ],
                nz: [ 1, 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 7, 9 ],
                pz: [ 1, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 10, 21, 17 ],
                py: [ 7, 11, 23 ],
                pz: [ 1, 0, 0 ],
                nx: [ 21, 9, 3 ],
                ny: [ 23, 5, 5 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 8, 11, 9, 10, 11 ],
                py: [ 2, 0, 1, 1, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 5, 6, 4, 3 ],
                ny: [ 8, 4, 18, 7, 4 ],
                nz: [ 1, 1, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 20, 22, 3, 19, 10 ],
                py: [ 20, 9, 4, 22, 3 ],
                pz: [ 0, 0, 2, 0, 1 ],
                nx: [ 8, 20, 8, 3, 2 ],
                ny: [ 4, 3, 6, 4, 3 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 9, 2 ],
                ny: [ 15, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 13 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 20, 21 ],
                ny: [ 1, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 1, 2, 7, 6, 8 ],
                py: [ 0, 2, 3, 3, 3 ],
                pz: [ 2, 1, 0, 0, 0 ],
                nx: [ 1, 2, 1, 1, 1 ],
                ny: [ 0, 0, 4, 3, 3 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 10 ],
                py: [ 9, 11 ],
                pz: [ 0, 0 ],
                nx: [ 6, 3 ],
                ny: [ 9, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 6 ],
                py: [ 10, 11, 13, 12, 6 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 10, 2, 1, 10, 10 ],
                ny: [ 10, 4, 2, 11, 9 ],
                nz: [ 0, 1, 2, 0, 0 ]
            }, {
                size: 5,
                px: [ 16, 18, 11, 17, 15 ],
                py: [ 11, 12, 8, 12, 11 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 14, 0, 19, 0, 10 ],
                ny: [ 9, 3, 14, 8, 9 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 5, 9, 5, 8 ],
                py: [ 21, 18, 20, 23 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 8, 4, 3, 1 ],
                ny: [ 20, 3, 4, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 3, 2 ],
                pz: [ 2, 2 ],
                nx: [ 3, 12 ],
                ny: [ 4, 23 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 1, 1, 1, 1 ],
                py: [ 2, 16, 14, 13, 12 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 8, 4, 9, 4, 7 ],
                ny: [ 9, 3, 4, 2, 9 ],
                nz: [ 1, 2, 1, 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 9 ],
                py: [ 3, 7 ],
                pz: [ 2, -1 ],
                nx: [ 4, 9 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 15, 16, 17, 15, 8 ],
                py: [ 3, 3, 3, 18, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 1, 2, 2, 1, 3 ],
                ny: [ 5, 3, 2, 6, 0 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 17 ],
                py: [ 4, 14 ],
                pz: [ 2, 0 ],
                nx: [ 15, 7 ],
                ny: [ 15, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 14, 12, 3 ],
                py: [ 3, 13, 3 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 17, 4 ],
                ny: [ 3, 19, 4 ],
                nz: [ 2, 0, 2 ]
            }, {
                size: 4,
                px: [ 4, 5, 12, 2 ],
                py: [ 9, 6, 19, 4 ],
                pz: [ 1, 1, 0, 2 ],
                nx: [ 12, 17, 4, 4 ],
                ny: [ 18, 19, 4, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 19, 20, 20, 19 ],
                py: [ 7, 14, 13, 14, 13 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 11, 23, 23, 23, 23 ],
                ny: [ 9, 15, 13, 16, 14 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 0, 0, 0, 2 ],
                py: [ 5, 6, 5, 14 ],
                pz: [ 1, 1, 2, 0 ],
                nx: [ 0, 3, 3, 17 ],
                ny: [ 23, 5, 5, 9 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 15, 4 ],
                py: [ 23, 5 ],
                pz: [ 0, 2 ],
                nx: [ 9, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 6, 5, 10, 12 ],
                py: [ 3, 3, 23, 23 ],
                pz: [ 1, 1, 0, 0 ],
                nx: [ 11, 1, 1, 4 ],
                ny: [ 21, 3, 5, 5 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 9, 4 ],
                pz: [ 1, 2 ],
                nx: [ 4, 9 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 23, 23, 23, 23, 23 ],
                py: [ 14, 9, 13, 11, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 6, 13, 7, 8, 8 ],
                ny: [ 9, 6, 3, 3, 3 ],
                nz: [ 1, 0, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 4, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 8 ],
                ny: [ 1, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 3, 12 ],
                py: [ 4, 18 ],
                pz: [ 2, 0 ],
                nx: [ 12, 0 ],
                ny: [ 16, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 2 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 16, 4 ],
                ny: [ 1, 0 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 5, 3 ],
                ny: [ 19, 9 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 20, 19, 20, 21 ],
                py: [ 2, 0, 1, 3 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 11, 5, 23, 11 ],
                ny: [ 0, 0, 1, 1 ],
                nz: [ 1, 2, 0, 1 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 7, 5 ],
                pz: [ 0, 0 ],
                nx: [ 8, 5 ],
                ny: [ 3, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 22, 21, 22, 22, 22 ],
                py: [ 20, 22, 18, 19, 16 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 2, 3, 3, 15, 15 ],
                ny: [ 4, 5, 4, 7, 7 ],
                nz: [ 1, 2, 1, 0, -1 ]
            }, {
                size: 3,
                px: [ 15, 14, 14 ],
                py: [ 1, 1, 1 ],
                pz: [ 0, 0, -1 ],
                nx: [ 17, 18, 16 ],
                ny: [ 1, 2, 1 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 17, 16, 16, 15 ],
                py: [ 2, 1, 0, 0 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 7, 4, 2, 11 ],
                ny: [ 11, 2, 1, 4 ],
                nz: [ 1, 2, -1, -1 ]
            }, {
                size: 4,
                px: [ 18, 0, 0, 0 ],
                py: [ 14, 6, 5, 4 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 19, 19, 19, 19 ],
                ny: [ 16, 19, 17, 18 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 11, 5, 5, 0 ],
                py: [ 14, 1, 4, 4 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 11, 8, 2, 15 ],
                ny: [ 17, 14, 1, 9 ],
                nz: [ 0, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 19, 21 ],
                pz: [ 0, 0 ],
                nx: [ 10, 2 ],
                ny: [ 15, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 4 ],
                py: [ 4, 6 ],
                pz: [ 1, 1 ],
                nx: [ 3, 3 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 1, 13 ],
                pz: [ 2, 0 ],
                nx: [ 7, 2 ],
                ny: [ 1, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 15, 10, 4, 7 ],
                py: [ 23, 3, 1, 7 ],
                pz: [ 0, 1, 2, 1 ],
                nx: [ 0, 4, 1, 1 ],
                ny: [ 0, 2, 0, -1900147915 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 12, 11 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 2, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 1, 0 ],
                py: [ 9, 4, 3, 2, 6 ],
                pz: [ 0, 1, 2, 1, 1 ],
                nx: [ 9, 4, 2, 16, 16 ],
                ny: [ 7, 4, 2, 8, 8 ],
                nz: [ 0, 1, 2, 0, -1 ]
            }, {
                size: 5,
                px: [ 18, 4, 9, 4, 4 ],
                py: [ 12, 5, 6, 3, 4 ],
                pz: [ 0, 2, 1, 2, -1 ],
                nx: [ 4, 3, 3, 2, 3 ],
                ny: [ 23, 19, 21, 16, 18 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 14, 13 ],
                pz: [ 0, 0 ],
                nx: [ 3, 10 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 4, 4, 2, 2 ],
                py: [ 8, 11, 7, 4, 4 ],
                pz: [ 1, 1, 1, 2, -1 ],
                nx: [ 20, 18, 19, 20, 19 ],
                ny: [ 4, 0, 2, 3, 1 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 17, 12, 14, 8, 16 ],
                py: [ 2, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 3, 15, 3, 2, 2 ],
                ny: [ 2, 9, 7, 2, 2 ],
                nz: [ 2, 0, 1, 2, -1 ]
            }, {
                size: 5,
                px: [ 11, 10, 11, 11, 11 ],
                py: [ 10, 12, 11, 12, 12 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 13, 13, 20, 10, 13 ],
                ny: [ 9, 11, 8, 4, 10 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 8, 13 ],
                ny: [ 4, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 7 ],
                py: [ 20, 3 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 10, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 13, 10, 17 ],
                py: [ 9, 3, 5 ],
                pz: [ 0, -1, -1 ],
                nx: [ 1, 3, 1 ],
                ny: [ 5, 16, 6 ],
                nz: [ 2, 0, 1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 5 ],
                pz: [ 2, -1 ],
                nx: [ 8, 3 ],
                ny: [ 14, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 11, 9, 12, 10 ],
                py: [ 2, 2, 2, 2 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 4, 4, 4, 10 ],
                ny: [ 5, 5, 0, 16 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 7, 9, 12 ],
                py: [ 2, 2, 2 ],
                pz: [ 1, -1, -1 ],
                nx: [ 4, 7, 2 ],
                ny: [ 3, 1, 0 ],
                nz: [ 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 12 ],
                pz: [ 2, 0 ],
                nx: [ 7, 4 ],
                ny: [ 6, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 12, 12, 6, 3 ],
                py: [ 12, 11, 21, 7 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 1, 0, 0, 0 ],
                ny: [ 13, 3, 6, 5 ],
                nz: [ 0, 2, 1, 1 ]
            }, {
                size: 3,
                px: [ 3, 1, 3 ],
                py: [ 21, 8, 18 ],
                pz: [ 0, 1, 0 ],
                nx: [ 11, 20, 0 ],
                ny: [ 17, 17, 6 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 8 ],
                py: [ 3, 12 ],
                pz: [ 2, 0 ],
                nx: [ 2, 20 ],
                ny: [ 4, 17 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 2, 3, 4, 3, 2 ],
                py: [ 10, 14, 14, 15, 13 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 0, 0, 1, 0, 0 ],
                ny: [ 21, 20, 23, 19, 19 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 15 ],
                py: [ 7, 4 ],
                pz: [ 1, -1 ],
                nx: [ 3, 8 ],
                ny: [ 4, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 19, 14, 12, 15, 4 ],
                py: [ 8, 12, 10, 16, 2 ],
                pz: [ 0, 0, 0, 0, 2 ],
                nx: [ 8, 0, 12, 4, 0 ],
                ny: [ 4, 1, 12, 2, 19 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 18, 9 ],
                py: [ 15, 3 ],
                pz: [ 0, -1 ],
                nx: [ 8, 15 ],
                ny: [ 9, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 4, 2, 3, 4, 9 ],
                py: [ 9, 4, 3, 8, 23 ],
                pz: [ 1, 2, 1, 1, 0 ],
                nx: [ 11, 23, 23, 11, 11 ],
                ny: [ 0, 2, 3, 1, 1 ],
                nz: [ 1, 0, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 7 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 3, 4 ],
                ny: [ 10, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 11, 9, 8, 5 ],
                py: [ 12, 15, 13, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 3, 12, 14, 13 ],
                ny: [ 0, 3, 3, 3 ],
                nz: [ 2, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 6, 5 ],
                pz: [ 0, 0 ],
                nx: [ 8, 11 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 21, 20, 21, 21, 21 ],
                py: [ 18, 21, 17, 19, 19 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 2, 5, 4, 4, 5 ],
                ny: [ 5, 12, 11, 10, 10 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 1, 1, 1, 1, 1 ],
                py: [ 10, 11, 7, 9, 8 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 11, 23, 23, 23, 23 ],
                ny: [ 10, 20, 21, 19, 19 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 7, 8, 7, 3, 1 ],
                py: [ 14, 13, 13, 2, 2 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 1, 10, 2, 2, 10 ],
                ny: [ 2, 13, 4, 16, 12 ],
                nz: [ 2, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 18 ],
                py: [ 12, 12 ],
                pz: [ 0, 0 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 0 ],
                py: [ 5, 20 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 0, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 22, 22, 22, 11, 23 ],
                py: [ 16, 15, 14, 6, 13 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 16, 15, 7, 9, 9 ],
                ny: [ 15, 8, 4, 10, 10 ],
                nz: [ 0, 0, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 3, 1 ],
                pz: [ 0, 2 ],
                nx: [ 8, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 4, 1 ],
                pz: [ 1, -1 ],
                nx: [ 6, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 4, 2, 6 ],
                py: [ 6, 3, 4 ],
                pz: [ 1, 2, 1 ],
                nx: [ 10, 0, 4 ],
                ny: [ 9, 4, 3 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 4,
                px: [ 2, 8, 4, 10 ],
                py: [ 4, 23, 7, 23 ],
                pz: [ 2, 0, 1, 0 ],
                nx: [ 9, 4, 11, 9 ],
                ny: [ 21, 5, 16, 0 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 13, 0 ],
                pz: [ 0, -1 ],
                nx: [ 8, 2 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 1, 4 ],
                pz: [ 1, -1 ],
                nx: [ 3, 5 ],
                ny: [ 0, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 0, 0 ],
                pz: [ 0, 2 ],
                nx: [ 2, 10 ],
                ny: [ 1, 6 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 10, 2 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 21, 5 ],
                ny: [ 15, 4 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 10, 9 ],
                pz: [ 0, 0 ],
                nx: [ 0, 3 ],
                ny: [ 13, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 9 ],
                py: [ 13, 0 ],
                pz: [ 0, -1 ],
                nx: [ 3, 3 ],
                ny: [ 4, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 14, 13, 13, 14, 14 ],
                py: [ 12, 10, 11, 13, 13 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 9, 8, 4, 5, 7 ],
                ny: [ 4, 4, 2, 2, 4 ],
                nz: [ 0, 0, 1, 1, 0 ]
            }, {
                size: 3,
                px: [ 2, 4, 1 ],
                py: [ 2, 0, 0 ],
                pz: [ 0, 0, 1 ],
                nx: [ 0, 7, 4 ],
                ny: [ 0, 3, 2 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 5, 0 ],
                pz: [ 0, -1 ],
                nx: [ 8, 6 ],
                ny: [ 4, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 0, 0, 0 ],
                py: [ 20, 2, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 12, 3, 10 ],
                ny: [ 3, 1, 3 ],
                nz: [ 0, 2, 0 ]
            }, {
                size: 5,
                px: [ 5, 11, 10, 13, 13 ],
                py: [ 0, 0, 0, 2, 2 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 4, 5, 5, 4, 5 ],
                ny: [ 14, 0, 2, 6, 1 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 11 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, -1715597992 ],
                py: [ 19, 9 ],
                pz: [ 0, -1 ],
                nx: [ 7, 14 ],
                ny: [ 10, 17 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 9, 0 ],
                pz: [ 0, -1 ],
                nx: [ 1, 12 ],
                ny: [ 2, 10 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 17, 9 ],
                py: [ 13, 17 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 0, 7 ],
                py: [ 1, 9 ],
                pz: [ 1, -1 ],
                nx: [ 18, 4 ],
                ny: [ 14, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 14, 7 ],
                py: [ 23, 9 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 7 ],
                py: [ 17, 9 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 0, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 20, 1 ],
                pz: [ 0, -1 ],
                nx: [ 5, 3 ],
                ny: [ 21, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 0, 0, 1 ],
                py: [ 3, 6, 15 ],
                pz: [ 2, 1, 0 ],
                nx: [ 10, 8, 3 ],
                ny: [ 6, 4, 2 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 18, 8 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 8, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 2, 2 ],
                pz: [ 1, 1 ],
                nx: [ 8, 9 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 11, 5 ],
                pz: [ 1, 2 ],
                nx: [ 13, 3 ],
                ny: [ 19, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 6 ],
                py: [ 1, 11 ],
                pz: [ 2, -1 ],
                nx: [ 3, 2 ],
                ny: [ 1, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 9, 4 ],
                py: [ 10, 5 ],
                pz: [ 1, 2 ],
                nx: [ 8, 4 ],
                ny: [ 10, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 12 ],
                py: [ 11, 20 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 6, 10 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 7, 12 ],
                py: [ 2, 20 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 0, 15 ],
                py: [ 5, 21 ],
                pz: [ 1, -1 ],
                nx: [ 10, 9 ],
                ny: [ 3, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 15, 9 ],
                py: [ 1, 0 ],
                pz: [ 0, 1 ],
                nx: [ 19, 3 ],
                ny: [ 0, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 21, 5 ],
                py: [ 13, 5 ],
                pz: [ 0, 2 ],
                nx: [ 23, 6 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 8 ],
                py: [ 3, 1 ],
                pz: [ 2, -1 ],
                nx: [ 9, 9 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 7, 7 ],
                pz: [ 1, -1 ],
                nx: [ 5, 3 ],
                ny: [ 23, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 3 ],
                py: [ 6, 4 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 14, 0, 17 ],
                py: [ 20, 3, 21 ],
                pz: [ 0, -1, -1 ],
                nx: [ 11, 11, 11 ],
                ny: [ 7, 9, 10 ],
                nz: [ 1, 1, 1 ]
            }, {
                size: 5,
                px: [ 11, 11, 23, 23, 12 ],
                py: [ 10, 11, 21, 20, 12 ],
                pz: [ 1, 1, 0, 0, 0 ],
                nx: [ 8, 3, 6, 7, 7 ],
                ny: [ 4, 5, 11, 11, 11 ],
                nz: [ 1, 2, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 11, 10 ],
                pz: [ 0, 0 ],
                nx: [ 9, 3 ],
                ny: [ 2, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 14 ],
                py: [ 19, 19 ],
                pz: [ 0, 0 ],
                nx: [ 12, 13 ],
                ny: [ 18, 17 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 13, 14, 12, 15, 14 ],
                py: [ 0, 0, 1, 1, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 8, 4, 7, 7 ],
                ny: [ 3, 4, 2, 5, 5 ],
                nz: [ 2, 1, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 5 ],
                py: [ 10, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 2, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 18, 10 ],
                py: [ 6, 10 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 8, 18, 8, 4, 16 ],
                py: [ 6, 12, 9, 4, 13 ],
                pz: [ 1, 0, 1, 2, 0 ],
                nx: [ 3, 4, 3, 5, 5 ],
                ny: [ 0, 2, 3, 1, 1 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 8, 0 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 4, 5 ],
                pz: [ 2, -1 ],
                nx: [ 4, 2 ],
                ny: [ 14, 7 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 3, 4, 4, 3 ],
                py: [ 11, 12, 12, 2 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 1, 2, 1, 2 ],
                ny: [ 11, 14, 12, 16 ],
                nz: [ 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 0 ],
                py: [ 11, 0 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 21, 11 ],
                pz: [ 0, 1 ],
                nx: [ 3, 2 ],
                ny: [ 10, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 10, 3, 13 ],
                py: [ 2, 0, 2 ],
                pz: [ 0, 2, 0 ],
                nx: [ 7, 16, 1 ],
                ny: [ 10, 4, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 2, 5 ],
                pz: [ 1, 0 ],
                nx: [ 6, 18 ],
                ny: [ 1, 19 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 16 ],
                py: [ 0, 16 ],
                pz: [ 1, -1 ],
                nx: [ 11, 2 ],
                ny: [ 5, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 13, 1 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 22, 21 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 18, 18 ],
                pz: [ 0, 0 ],
                nx: [ 5, 8 ],
                ny: [ 9, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 20, 18 ],
                pz: [ 0, 0 ],
                nx: [ 8, 3 ],
                ny: [ 5, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, 2 ],
                py: [ 17, 1 ],
                pz: [ 0, -1 ],
                nx: [ 14, 13 ],
                ny: [ 15, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 2, 3 ],
                pz: [ 2, 2 ],
                nx: [ 8, 3 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 18, 18, 8, 7 ],
                py: [ 6, 11, 11, 7, 9 ],
                pz: [ 1, 0, -1, -1, -1 ],
                nx: [ 5, 13, 5, 11, 5 ],
                ny: [ 3, 11, 0, 8, 2 ],
                nz: [ 2, 0, 2, 1, 2 ]
            }, {
                size: 5,
                px: [ 12, 0, 5, 4, 7 ],
                py: [ 15, 0, 4, 0, 9 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 8, 7, 4, 16, 6 ],
                ny: [ 17, 12, 9, 10, 12 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 7 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 9, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 4,
                px: [ 8, 0, 22, 4 ],
                py: [ 4, 4, 23, 0 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 2, 4, 2, 5 ],
                ny: [ 0, 1, 2, 9 ],
                nz: [ 2, 1, 2, 1 ]
            }, {
                size: 5,
                px: [ 9, 9, 10, 10, 8 ],
                py: [ 0, 1, 1, 2, 0 ],
                pz: [ 1, 1, 1, 1, 1 ],
                nx: [ 4, 16, 16, 16, 6 ],
                ny: [ 2, 11, 11, 11, 12 ],
                nz: [ 2, 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 6, 5 ],
                pz: [ 1, 1 ],
                nx: [ 0, 4 ],
                ny: [ 3, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 10, 3, 4 ],
                py: [ 5, 9, 8 ],
                pz: [ 1, -1, -1 ],
                nx: [ 11, 23, 23 ],
                ny: [ 7, 12, 11 ],
                nz: [ 1, 0, 0 ]
            }, {
                size: 3,
                px: [ 13, 12, 7 ],
                py: [ 19, 19, 10 ],
                pz: [ 0, 0, 1 ],
                nx: [ 13, 5, 19 ],
                ny: [ 20, 15, 22 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 12 ],
                py: [ 12, 13 ],
                pz: [ 0, 0 ],
                nx: [ 9, 10 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 12 ],
                py: [ 1, 13 ],
                pz: [ 2, -1 ],
                nx: [ 2, 7 ],
                ny: [ 2, 13 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 8, 9 ],
                pz: [ 1, 1 ],
                nx: [ 19, 7 ],
                ny: [ 23, 13 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 8, 7, 23, 15 ],
                py: [ 11, 12, 4, 21 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 2, 5, 1, 10 ],
                ny: [ 6, 6, 2, 13 ],
                nz: [ 0, 1, 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 9 ],
                py: [ 3, 3 ],
                pz: [ 0, 0 ],
                nx: [ 2, 3 ],
                ny: [ 2, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 3, 4 ],
                pz: [ 2, -1 ],
                nx: [ 3, 6 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 7, 11 ],
                py: [ 20, 16 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 20 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 9, 7 ],
                py: [ 7, 5 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 11, 3 ],
                pz: [ 1, 2 ],
                nx: [ 5, 5 ],
                ny: [ 3, 5 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 11, 3 ],
                py: [ 11, 5 ],
                pz: [ 1, -1 ],
                nx: [ 4, 1 ],
                ny: [ 12, 3 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 9, 11 ],
                py: [ 6, 4 ],
                pz: [ 1, -1 ],
                nx: [ 10, 20 ],
                ny: [ 9, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 2, 2, 2, 2, 1 ],
                py: [ 15, 13, 16, 14, 7 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 15, 8, 9, 8, 4 ],
                ny: [ 11, 6, 5, 5, 4 ],
                nz: [ 0, 1, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 2 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 7, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 5, 11 ],
                py: [ 1, 3 ],
                pz: [ 2, 1 ],
                nx: [ 10, 10 ],
                ny: [ 3, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 11 ],
                py: [ 13, 18 ],
                pz: [ 0, -1 ],
                nx: [ 6, 9 ],
                ny: [ 9, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 5, 1, 2, 5, 6 ],
                py: [ 14, 4, 9, 15, 23 ],
                pz: [ 0, 2, 1, 0, 0 ],
                nx: [ 4, 9, 18, 16, 17 ],
                ny: [ 0, 1, 1, 0, 0 ],
                nz: [ 2, 1, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 16, 17 ],
                py: [ 0, 0 ],
                pz: [ 0, 0 ],
                nx: [ 23, 23 ],
                ny: [ 5, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 8 ],
                py: [ 20, 6 ],
                pz: [ 0, -1 ],
                nx: [ 5, 6 ],
                ny: [ 12, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 15 ],
                py: [ 15, 0 ],
                pz: [ 0, -1 ],
                nx: [ 6, 3 ],
                ny: [ 16, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 18, 20 ],
                py: [ 7, 8 ],
                pz: [ 0, 0 ],
                nx: [ 18, 11 ],
                ny: [ 9, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 4 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 3, 15 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 2 ],
                pz: [ 1, 2 ],
                nx: [ 5, 5 ],
                ny: [ 2, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 20 ],
                py: [ 1, 20 ],
                pz: [ 1, -1 ],
                nx: [ 15, 17 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 16, 4 ],
                pz: [ 0, 2 ],
                nx: [ 4, 0 ],
                ny: [ 10, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 8 ],
                py: [ 5, 0 ],
                pz: [ 1, -1 ],
                nx: [ 1, 1 ],
                ny: [ 10, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 22, 0 ],
                py: [ 3, 0 ],
                pz: [ 0, -1 ],
                nx: [ 23, 11 ],
                ny: [ 4, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 3,
                px: [ 19, 10, 20 ],
                py: [ 21, 8, 18 ],
                pz: [ 0, 1, 0 ],
                nx: [ 3, 6, 20 ],
                ny: [ 5, 11, 14 ],
                nz: [ 2, -1, -1 ]
            }, {
                size: 4,
                px: [ 2, 1, 6, 5 ],
                py: [ 7, 4, 23, 22 ],
                pz: [ 1, 2, 0, 0 ],
                nx: [ 9, 19, 20, 4 ],
                ny: [ 8, 11, 9, 2 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 11 ],
                pz: [ 2, 1 ],
                nx: [ 12, 10 ],
                ny: [ 21, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 6, 0, 2, 2 ],
                py: [ 6, 1, 4, 1 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 0, 0, 0, 0 ],
                ny: [ 5, 8, 9, 4 ],
                nz: [ 1, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 3, 13, 6, 11, 9 ],
                py: [ 0, 3, 1, 1, 2 ],
                pz: [ 2, 0, 1, 0, 0 ],
                nx: [ 7, 20, 16, 4, 7 ],
                ny: [ 7, 2, 19, 2, 6 ],
                nz: [ 1, 0, 0, 2, 1 ]
            }, {
                size: 4,
                px: [ 7, 5, 2, 6 ],
                py: [ 7, 7, 4, 11 ],
                pz: [ 0, 0, 2, 1 ],
                nx: [ 7, 1, 21, 0 ],
                ny: [ 8, 4, 11, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 3, 2 ],
                pz: [ 2, 2 ],
                nx: [ 8, 9 ],
                ny: [ 3, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 13 ],
                py: [ 3, 5 ],
                pz: [ 1, 0 ],
                nx: [ 4, 3 ],
                ny: [ 2, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 3, 12, 13, 11 ],
                py: [ 0, 1, 1, 1 ],
                pz: [ 2, 0, 0, 0 ],
                nx: [ 8, 9, 13, 0 ],
                ny: [ 4, 1, 16, 3 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 4, 14 ],
                pz: [ 0, -1 ],
                nx: [ 5, 10 ],
                ny: [ 1, 2 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 11, 12 ],
                py: [ 21, 21 ],
                pz: [ 0, 0 ],
                nx: [ 10, 11 ],
                ny: [ 19, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 12 ],
                py: [ 6, 21 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 11, 7 ],
                py: [ 19, 0 ],
                pz: [ 0, -1 ],
                nx: [ 6, 5 ],
                ny: [ 9, 11 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 10, 10 ],
                py: [ 10, 12, 11, 13, 13 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 7, 13, 6, 12, 7 ],
                ny: [ 10, 6, 3, 6, 11 ],
                nz: [ 0, 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 11 ],
                py: [ 6, 12 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 16, 15, 16, 15, 17 ],
                py: [ 1, 0, 0, 1, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 13, 7, 6, 12, 12 ],
                ny: [ 5, 4, 3, 6, 6 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 1, 3 ],
                pz: [ 2, 1 ],
                nx: [ 1, 5 ],
                ny: [ 1, 3 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 13, 6 ],
                pz: [ 0, 1 ],
                nx: [ 4, 9 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 3 ],
                py: [ 4, 3 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 3, 6 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 1 ],
                pz: [ 0, 1 ],
                nx: [ 5, 5 ],
                ny: [ 7, 21 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 19, 17 ],
                ny: [ 1, 0 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 8, 11, 5, 0 ],
                py: [ 6, 1, 1, 22 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 0, 10, 10, 1 ],
                ny: [ 6, 12, 13, 4 ],
                nz: [ 1, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 8, 17 ],
                py: [ 6, 13 ],
                pz: [ 1, 0 ],
                nx: [ 14, 17 ],
                ny: [ 9, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 8 ],
                py: [ 0, 4 ],
                pz: [ 2, -1 ],
                nx: [ 9, 8 ],
                ny: [ 1, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 14 ],
                py: [ 13, 9 ],
                pz: [ 0, -1 ],
                nx: [ 23, 23 ],
                ny: [ 21, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 9 ],
                py: [ 9, 3 ],
                pz: [ 0, -1 ],
                nx: [ 6, 3 ],
                ny: [ 2, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 5, 9 ],
                py: [ 3, 3 ],
                pz: [ 2, -1 ],
                nx: [ 17, 9 ],
                ny: [ 12, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 7 ],
                py: [ 18, 16 ],
                pz: [ 0, -1 ],
                nx: [ 5, 2 ],
                ny: [ 9, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 0, 1 ],
                pz: [ 1, -1 ],
                nx: [ 4, 5 ],
                ny: [ 1, 0 ],
                nz: [ 0, 0 ]
            } ],
            alpha: [ -1.149973, 1.149973, -.6844773, .6844773, -.6635048, .6635048, -.4888349, .4888349, -.4267976, .4267976, -.42581, .42581, -.4815853, .4815853, -.4091859, .4091859, -.3137414, .3137414, -.333986, .333986, -.3891196, .3891196, -.4167691, .4167691, -.3186609, .3186609, -.2957171, .2957171, -.3210062, .3210062, -.2725684, .2725684, -.2452176, .2452176, -.2812662, .2812662, -.3029622, .3029622, -.3293745, .3293745, -.3441536, .3441536, -.2946918, .2946918, -.2890545, .2890545, -.1949205, .1949205, -.2176102, .2176102, -.259519, .259519, -.2690931, .2690931, -.2130294, .2130294, -.2316308, .2316308, -.2798562, .2798562, -.2146988, .2146988, -.2332089, .2332089, -.2470614, .2470614, -.22043, .22043, -.2272045, .2272045, -.2583686, .2583686, -.2072299, .2072299, -.1834971, .1834971, -.2332656, .2332656, -.3271297, .3271297, -.2401937, .2401937, -.2006316, .2006316, -.2401947, .2401947, -.2475346, .2475346, -.2579532, .2579532, -.2466235, .2466235, -.1787582, .1787582, -.2036892, .2036892, -.1665028, .1665028, -.157651, .157651, -.2036997, .2036997, -.2040734, .2040734, -.1792532, .1792532, -.2174767, .2174767, -.1876948, .1876948, -.1883137, .1883137, -.1923872, .1923872, -.2620218, .2620218, -.1659873, .1659873, -.1475948, .1475948, -.1731607, .1731607, -.2059256, .2059256, -.1586309, .1586309, -.1607668, .1607668, -.1975101, .1975101, -.2130745, .2130745, -.1898872, .1898872, -.2052598, .2052598, -.1599397, .1599397, -.1770134, .1770134, -.1888249, .1888249, -.1515406, .1515406, -.1907771, .1907771, -.1698406, .1698406, -.2079535, .2079535, -.1966967, .1966967, -.1631391, .1631391, -.2158666, .2158666, -.2891774, .2891774, -.1581556, .1581556, -.1475359, .1475359, -.1806169, .1806169, -.1782238, .1782238, -.166044, .166044, -.1576919, .1576919, -.1741775, .1741775, -.1427265, .1427265, -.169588, .169588, -.1486712, .1486712, -.1533565, .1533565, -.1601464, .1601464, -.1978414, .1978414, -.1746566, .1746566, -.1794736, .1794736, -.1896567, .1896567, -.1666197, .1666197, -.1969351, .1969351, -.2321735, .2321735, -.1592485, .1592485, -.1671464, .1671464, -.1688885, .1688885, -.1868042, .1868042, -.1301138, .1301138, -.1330094, .1330094, -.1268423, .1268423, -.1820868, .1820868, -.188102, .188102, -.1580814, .1580814, -.1302653, .1302653, -.1787262, .1787262, -.1658453, .1658453, -.1240772, .1240772, -.1315621, .1315621, -.1756341, .1756341, -.1429438, .1429438, -.1351775, .1351775, -.2035692, .2035692, -.126767, .126767, -.128847, .128847, -.1393648, .1393648, -.1755962, .1755962, -.1308445, .1308445, -.1703894, .1703894, -.1461334, .1461334, -.1368683, .1368683, -.1244085, .1244085, -.1718163, .1718163, -.1415624, .1415624, -.1752024, .1752024, -.1666463, .1666463, -.1407325, .1407325, -.1258317, .1258317, -.1416511, .1416511, -.1420816, .1420816, -.1562547, .1562547, -.1542952, .1542952, -.1158829, .1158829, -.1392875, .1392875, -.1610095, .1610095, -.154644, .154644, -.1416235, .1416235, -.2028817, .2028817, -.1106779, .1106779, -.0923166, .0923166, -.116446, .116446, -.1701578, .1701578, -.1277995, .1277995, -.1946177, .1946177, -.1394509, .1394509, -.1370145, .1370145, -.1446031, .1446031, -.1665215, .1665215, -.1435822, .1435822, -.1559354, .1559354, -.159186, .159186, -.1193338, .1193338, -.1236954, .1236954, -.1209139, .1209139, -.1267385, .1267385, -.1232397, .1232397, -.1299632, .1299632, -.130202, .130202, -.1202975, .1202975, -.1525378, .1525378, -.1123073, .1123073, -.1605678, .1605678, -.1406867, .1406867, -.1354273, .1354273, -.1393192, .1393192, -.1278263, .1278263, -.1172073, .1172073, -.1153493, .1153493, -.1356318, .1356318, -.1316614, .1316614, -.1374489, .1374489, -.1018254, .1018254, -.1473336, .1473336, -.1289687, .1289687, -.1299183, .1299183, -.1178391, .1178391, -.1619059, .1619059, -.1842569, .1842569, -.1829095, .1829095, -.1939918, .1939918, -.1395362, .1395362, -.1774673, .1774673, -.1688216, .1688216, -.1671747, .1671747, -.1850178, .1850178, -.1106695, .1106695, -.1258323, .1258323, -.1246819, .1246819, -.09892193, .09892193, -.1399638, .1399638, -.1228375, .1228375, -.1756236, .1756236, -.1360307, .1360307, -.1266574, .1266574, -.1372135, .1372135, -.1175947, .1175947, -.1330075, .1330075, -.1396152, .1396152, -.2088443, .2088443 ]
        }, {
            count: 301,
            threshold: -4.887516,
            feature: [ {
                size: 5,
                px: [ 8, 11, 8, 14, 10 ],
                py: [ 6, 9, 3, 3, 4 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 8, 7, 19, 7, 13 ],
                ny: [ 11, 8, 8, 5, 8 ],
                nz: [ 1, 1, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 14, 3, 13, 12, 12 ],
                py: [ 4, 6, 4, 4, 8 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 2, 5, 2, 10, 10 ],
                ny: [ 2, 8, 5, 8, 8 ],
                nz: [ 2, 1, 2, 0, -1 ]
            }, {
                size: 5,
                px: [ 6, 5, 3, 7, 7 ],
                py: [ 2, 3, 1, 2, 2 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 2, 2, 1, 2, 1 ],
                ny: [ 3, 1, 2, 2, 2 ],
                nz: [ 0, 0, 2, 0, 1 ]
            }, {
                size: 5,
                px: [ 3, 3, 6, 12, 8 ],
                py: [ 4, 2, 4, 10, 17 ],
                pz: [ 2, 2, 1, 0, 0 ],
                nx: [ 4, 8, 8, 2, 1 ],
                ny: [ 4, 4, 4, 2, 2 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 18, 19, 17, 9, 16 ],
                py: [ 1, 2, 2, 0, 2 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 23, 23, 22, 22, 22 ],
                ny: [ 4, 3, 1, 0, 2 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 15, 4, 14 ],
                py: [ 23, 4, 18 ],
                pz: [ 0, 2, 0 ],
                nx: [ 7, 0, 5 ],
                ny: [ 10, 4, 9 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 11, 11, 16, 11, 17 ],
                py: [ 8, 6, 11, 7, 11 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 4, 14, 14, 1 ],
                ny: [ 4, 4, 8, 8, 5 ],
                nz: [ 1, 1, 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 12 ],
                py: [ 13, 10, 11, 12, 12 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 4, 1, 2, 9 ],
                ny: [ 8, 10, 2, 4, 15 ],
                nz: [ 0, 1, 2, 1, 0 ]
            }, {
                size: 2,
                px: [ 19, 0 ],
                py: [ 14, 17 ],
                pz: [ 0, -1 ],
                nx: [ 20, 19 ],
                ny: [ 15, 22 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 3, 3, 1, 3, 5 ],
                py: [ 13, 15, 6, 14, 22 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 0, 0, 1, 0, 0 ],
                ny: [ 11, 21, 23, 5, 5 ],
                nz: [ 1, 0, 0, 2, -1 ]
            }, {
                size: 5,
                px: [ 4, 2, 10, 4, 3 ],
                py: [ 19, 4, 13, 16, 13 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 3, 20, 7, 4, 0 ],
                ny: [ 4, 19, 5, 1, 5 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 15, 3 ],
                ny: [ 15, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 4,
                px: [ 17, 17, 12, 11 ],
                py: [ 14, 15, 18, 18 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 11, 4, 1, 0 ],
                ny: [ 17, 20, 8, 5 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 2, 1, 2, 11 ],
                py: [ 14, 4, 1, 1, 18 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 5, 5, 3, 5, 2 ],
                ny: [ 18, 17, 7, 9, 2 ],
                nz: [ 0, 0, 1, 1, 2 ]
            }, {
                size: 5,
                px: [ 20, 19, 20, 15, 20 ],
                py: [ 17, 20, 12, 12, 8 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 17, 0, 5, 2, 2 ],
                ny: [ 8, 4, 9, 2, 2 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 8 ],
                py: [ 7, 11 ],
                pz: [ 1, -1 ],
                nx: [ 7, 8 ],
                ny: [ 7, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 15, 16, 14, 8, 8 ],
                py: [ 2, 2, 2, 0, 0 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 20, 11, 21, 18, 19 ],
                ny: [ 3, 6, 5, 1, 2 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 17, 18, 9, 8 ],
                py: [ 23, 21, 7, 8 ],
                pz: [ 0, 0, 1, 1 ],
                nx: [ 8, 17, 10, 18 ],
                ny: [ 4, 12, 2, 1 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 2, 2, 9, 4, 8 ],
                py: [ 7, 3, 12, 12, 23 ],
                pz: [ 1, 1, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 3, 1, 2, 4, 4 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 3,
                px: [ 7, 8, 5 ],
                py: [ 22, 23, 9 ],
                pz: [ 0, 0, 1 ],
                nx: [ 9, 4, 2 ],
                ny: [ 21, 4, 0 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 7, 7 ],
                pz: [ 1, -1 ],
                nx: [ 3, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 15, 11, 10, 3, 17 ],
                py: [ 0, 1, 2, 3, 1 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 5, 8, 4, 3, 3 ],
                ny: [ 9, 4, 7, 10, 10 ],
                nz: [ 1, 1, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 22, 11, 22 ],
                py: [ 12, 5, 14 ],
                pz: [ 0, 1, 0 ],
                nx: [ 23, 23, 3 ],
                ny: [ 22, 23, 8 ],
                nz: [ 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 11 ],
                py: [ 7, 5 ],
                pz: [ 1, -1 ],
                nx: [ 8, 2 ],
                ny: [ 14, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 4,
                px: [ 17, 16, 2, 4 ],
                py: [ 14, 13, 5, 0 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 8, 9, 15, 8 ],
                ny: [ 8, 9, 14, 7 ],
                nz: [ 1, 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 16 ],
                py: [ 6, 13 ],
                pz: [ 1, -1 ],
                nx: [ 2, 1 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 1, 0, 1, 2, 1 ],
                py: [ 15, 2, 16, 19, 12 ],
                pz: [ 0, 2, 0, 0, 0 ],
                nx: [ 8, 7, 4, 9, 9 ],
                ny: [ 5, 11, 4, 5, 5 ],
                nz: [ 1, 1, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 7 ],
                py: [ 11, 12 ],
                pz: [ 0, 0 ],
                nx: [ 9, 1 ],
                ny: [ 10, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 13 ],
                py: [ 17, 10 ],
                pz: [ 0, -1 ],
                nx: [ 7, 4 ],
                ny: [ 8, 4 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 11, 10, 7, 8, 9 ],
                py: [ 0, 0, 1, 1, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 5, 4, 5, 6 ],
                ny: [ 1, 0, 2, 1, 0 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 4, 3 ],
                pz: [ 2, 2 ],
                nx: [ 3, 21 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 10, 11, 5, 2, 11 ],
                py: [ 12, 10, 6, 11, 11 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 4, 15, 16, 7, 7 ],
                ny: [ 5, 10, 11, 10, 10 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 13, 14, 1, 11, 11 ],
                py: [ 2, 2, 3, 2, 2 ],
                pz: [ 0, 0, 2, 0, -1 ],
                nx: [ 3, 0, 0, 1, 0 ],
                ny: [ 23, 15, 14, 9, 8 ],
                nz: [ 0, 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 17, 2 ],
                py: [ 13, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 4, 1 ],
                pz: [ 0, -1 ],
                nx: [ 11, 3 ],
                ny: [ 3, 0 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 3, 3 ],
                pz: [ 2, -1 ],
                nx: [ 11, 23 ],
                ny: [ 8, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 22, 22, 22 ],
                py: [ 16, 18, 9 ],
                pz: [ 0, 0, 0 ],
                nx: [ 13, 2, 0 ],
                ny: [ 17, 3, 5 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 13, 10, 13, 14, 11 ],
                py: [ 2, 2, 1, 2, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 3, 3, 8, 6, 6 ],
                ny: [ 2, 5, 4, 11, 11 ],
                nz: [ 2, 2, 1, 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 1, 1 ],
                py: [ 14, 0, 1 ],
                pz: [ 0, -1, -1 ],
                nx: [ 8, 15, 7 ],
                ny: [ 1, 2, 0 ],
                nz: [ 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 20, 23 ],
                pz: [ 0, 0 ],
                nx: [ 3, 3 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 7, 2 ],
                pz: [ 1, -1 ],
                nx: [ 4, 3 ],
                ny: [ 23, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 3, 3, 6 ],
                py: [ 5, 2, 4 ],
                pz: [ 2, 2, 1 ],
                nx: [ 3, 1, 2 ],
                ny: [ 5, 17, 0 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 14, 8 ],
                py: [ 17, 6 ],
                pz: [ 0, 1 ],
                nx: [ 13, 10 ],
                ny: [ 16, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 15, 7, 14, 13, 14 ],
                py: [ 1, 0, 0, 0, 1 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 4, 4, 4, 8, 8 ],
                ny: [ 5, 3, 2, 10, 10 ],
                nz: [ 2, 2, 2, 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 9, 4, 5, 4 ],
                py: [ 13, 12, 9, 5, 7 ],
                pz: [ 0, 0, 1, 1, 1 ],
                nx: [ 22, 21, 22, 22, 22 ],
                ny: [ 4, 0, 3, 2, 2 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 17 ],
                py: [ 16, 13 ],
                pz: [ 0, 0 ],
                nx: [ 14, 21 ],
                ny: [ 8, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 10 ],
                py: [ 4, 9 ],
                pz: [ 0, -1 ],
                nx: [ 16, 10 ],
                ny: [ 3, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 5,
                px: [ 1, 1, 0, 1, 0 ],
                py: [ 17, 16, 7, 15, 8 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 4, 3, 8, 9, 7 ],
                ny: [ 3, 3, 6, 6, 6 ],
                nz: [ 1, 1, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 2, 3 ],
                pz: [ 2, 2 ],
                nx: [ 8, 3 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 2 ],
                py: [ 17, 4 ],
                pz: [ 0, 2 ],
                nx: [ 10, 12 ],
                ny: [ 15, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 14, 12 ],
                pz: [ 0, 0 ],
                nx: [ 9, 10 ],
                ny: [ 13, 11 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 5, 5 ],
                pz: [ 0, 0 ],
                nx: [ 3, 4 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 7, 10, 8, 11, 11 ],
                py: [ 13, 2, 12, 2, 2 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 10, 1, 1, 10, 1 ],
                ny: [ 12, 5, 3, 13, 1 ],
                nz: [ 0, 1, 1, 0, 2 ]
            }, {
                size: 2,
                px: [ 6, 10 ],
                py: [ 4, 2 ],
                pz: [ 1, -1 ],
                nx: [ 4, 6 ],
                ny: [ 4, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 20, 20 ],
                py: [ 21, 22 ],
                pz: [ 0, 0 ],
                nx: [ 15, 8 ],
                ny: [ 5, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 3, 3 ],
                pz: [ 2, 2 ],
                nx: [ 9, 17 ],
                ny: [ 4, 15 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 2, 2, 4 ],
                py: [ 3, 3, 7 ],
                pz: [ 2, -1, -1 ],
                nx: [ 7, 4, 4 ],
                ny: [ 6, 5, 4 ],
                nz: [ 1, 2, 2 ]
            }, {
                size: 5,
                px: [ 8, 9, 16, 17, 17 ],
                py: [ 1, 2, 1, 1, 1 ],
                pz: [ 1, 1, 0, 0, -1 ],
                nx: [ 2, 2, 4, 2, 4 ],
                ny: [ 16, 14, 22, 15, 21 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 18, 0 ],
                pz: [ 0, -1 ],
                nx: [ 2, 5 ],
                ny: [ 5, 8 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 7, 8 ],
                py: [ 11, 11 ],
                pz: [ 0, 0 ],
                nx: [ 15, 5 ],
                ny: [ 8, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 3 ],
                py: [ 4, 3 ],
                pz: [ 2, -1 ],
                nx: [ 1, 6 ],
                ny: [ 4, 14 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 7, 11 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 7, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 10, 22 ],
                pz: [ 1, 0 ],
                nx: [ 4, 3 ],
                ny: [ 10, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 19 ],
                py: [ 4, 21 ],
                pz: [ 2, -1 ],
                nx: [ 11, 11 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 4, 20 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 11, 23, 23, 23, 23 ],
                py: [ 7, 13, 19, 20, 21 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 4, 3, 2, 8, 8 ],
                ny: [ 11, 5, 5, 23, 23 ],
                nz: [ 1, 1, 2, 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 0, 2 ],
                pz: [ 0, 0 ],
                nx: [ 0, 6 ],
                ny: [ 0, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 12, 1 ],
                pz: [ 0, -1 ],
                nx: [ 23, 23 ],
                ny: [ 13, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 23, 11, 23, 11, 11 ],
                py: [ 13, 7, 12, 5, 6 ],
                pz: [ 0, 1, 0, 1, 1 ],
                nx: [ 6, 3, 8, 7, 7 ],
                ny: [ 12, 4, 4, 11, 11 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 20, 5 ],
                py: [ 15, 5 ],
                pz: [ 0, -1 ],
                nx: [ 10, 10 ],
                ny: [ 11, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 19, 8 ],
                pz: [ 0, 1 ],
                nx: [ 11, 19 ],
                ny: [ 18, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 14, 6 ],
                py: [ 3, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 15 ],
                ny: [ 1, 0 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 14, 5, 13, 12 ],
                py: [ 23, 3, 23, 23 ],
                pz: [ 0, 1, 0, 0 ],
                nx: [ 12, 0, 1, 4 ],
                ny: [ 21, 3, 2, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 19, 5 ],
                py: [ 12, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 7 ],
                ny: [ 3, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 0, 8 ],
                py: [ 5, 3 ],
                pz: [ 2, -1 ],
                nx: [ 5, 22 ],
                ny: [ 3, 11 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 2, 6 ],
                py: [ 3, 12 ],
                pz: [ 2, 0 ],
                nx: [ 3, 5 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 0, 6 ],
                pz: [ 2, -1 ],
                nx: [ 14, 6 ],
                ny: [ 4, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 16, 11 ],
                py: [ 1, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 4 ],
                py: [ 4, 3 ],
                pz: [ 1, 1 ],
                nx: [ 5, 8 ],
                ny: [ 0, 10 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 16, 1 ],
                py: [ 22, 1 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 4, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 12, 2 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 5, 5 ],
                ny: [ 1, 0 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 4, 3 ],
                pz: [ 1, 1 ],
                nx: [ 7, 5 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 22, 3 ],
                pz: [ 0, 2 ],
                nx: [ 4, 9 ],
                ny: [ 10, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 8, 10 ],
                pz: [ 1, -1 ],
                nx: [ 5, 3 ],
                ny: [ 23, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 21, 9 ],
                pz: [ 0, -1 ],
                nx: [ 11, 23 ],
                ny: [ 6, 10 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 18, 8 ],
                ny: [ 18, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 19, 0 ],
                pz: [ 0, -1 ],
                nx: [ 6, 5 ],
                ny: [ 9, 11 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 2, 10, 9, 7, 8 ],
                py: [ 0, 1, 0, 1, 0 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 3, 4, 6, 8, 8 ],
                ny: [ 2, 4, 9, 4, 4 ],
                nz: [ 2, 1, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 9, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 4 ],
                py: [ 23, 3 ],
                pz: [ 0, -1 ],
                nx: [ 12, 9 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 10, 3 ],
                pz: [ 1, 2 ],
                nx: [ 0, 2 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 14 ],
                py: [ 18, 0 ],
                pz: [ 0, -1 ],
                nx: [ 12, 8 ],
                ny: [ 16, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 10, 18, 7, 5 ],
                py: [ 14, 8, 0, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 8, 6, 8, 5 ],
                ny: [ 11, 12, 5, 5 ],
                nz: [ 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 2, 2 ],
                pz: [ 1, 1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 10 ],
                py: [ 20, 20 ],
                pz: [ 0, 0 ],
                nx: [ 11, 10 ],
                ny: [ 19, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 10 ],
                py: [ 16, 20 ],
                pz: [ 0, -1 ],
                nx: [ 8, 7 ],
                ny: [ 4, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 2, 1, 3 ],
                py: [ 20, 4, 21 ],
                pz: [ 0, 2, 0 ],
                nx: [ 3, 4, 0 ],
                ny: [ 10, 1, 0 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 5,
                px: [ 6, 7, 3, 6, 6 ],
                py: [ 15, 14, 7, 16, 19 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 18, 19, 16, 17, 17 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 6, 12 ],
                pz: [ 1, 0 ],
                nx: [ 8, 15 ],
                ny: [ 4, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 1, 3, 2, 0, 4 ],
                pz: [ 2, 2, 2, 2, 1 ],
                nx: [ 13, 8, 14, 4, 7 ],
                ny: [ 23, 6, 23, 3, 9 ],
                nz: [ 0, 1, 0, 2, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 3, 5 ],
                pz: [ 2, 1 ],
                nx: [ 10, 8 ],
                ny: [ 11, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 8, 5 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 15, 18, 9, 16, 4 ],
                py: [ 12, 13, 6, 23, 3 ],
                pz: [ 0, 0, 1, 0, 2 ],
                nx: [ 6, 3, 6, 2, 7 ],
                ny: [ 2, 3, 0, 1, 0 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 18 ],
                py: [ 12, 13 ],
                pz: [ 0, -1 ],
                nx: [ 2, 8 ],
                ny: [ 3, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 3, 3 ],
                ny: [ 5, 0 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 9, 19 ],
                py: [ 7, 8 ],
                pz: [ 1, 0 ],
                nx: [ 8, 3 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 0 ],
                py: [ 6, 0 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 7, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 17, 18 ],
                ny: [ 0, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 13, 4, 4, 1 ],
                py: [ 14, 7, 3, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 3, 16, 3, 7 ],
                ny: [ 1, 15, 5, 13 ],
                nz: [ 2, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 4, 9 ],
                py: [ 6, 11 ],
                pz: [ 1, 0 ],
                nx: [ 3, 23 ],
                ny: [ 4, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 9, 17, 4, 16, 16 ],
                py: [ 2, 3, 1, 3, 3 ],
                pz: [ 1, 0, 2, 0, -1 ],
                nx: [ 2, 3, 3, 2, 3 ],
                ny: [ 1, 7, 2, 3, 3 ],
                nz: [ 2, 1, 1, 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 22, 9 ],
                pz: [ 0, 1 ],
                nx: [ 10, 3 ],
                ny: [ 21, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 6, 3 ],
                pz: [ 0, -1 ],
                nx: [ 8, 5 ],
                ny: [ 4, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 8, 3 ],
                pz: [ 0, -1 ],
                nx: [ 14, 5 ],
                ny: [ 14, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 7, 8 ],
                py: [ 3, 2 ],
                pz: [ 0, -1 ],
                nx: [ 8, 2 ],
                ny: [ 18, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 19, 11 ],
                pz: [ 0, 1 ],
                nx: [ 9, 4 ],
                ny: [ 5, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 7, 15, 13, 14, 4 ],
                py: [ 6, 12, 9, 11, 4 ],
                pz: [ 1, 0, 0, 0, 2 ],
                nx: [ 7, 3, 8, 4, 5 ],
                ny: [ 0, 3, 0, 2, 1 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 10, 13, 7, 8, 9 ],
                py: [ 0, 1, 1, 0, 1 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 4, 4, 4, 8 ],
                ny: [ 8, 3, 4, 2, 4 ],
                nz: [ 1, 2, 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 6, 1 ],
                py: [ 6, 0 ],
                pz: [ 1, -1 ],
                nx: [ 11, 7 ],
                ny: [ 3, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 13, 0 ],
                py: [ 13, 2 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 13, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 17 ],
                py: [ 6, 13 ],
                pz: [ 1, 0 ],
                nx: [ 8, 1 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 11, 3, 6, 17 ],
                py: [ 4, 4, 1, 2, 14 ],
                pz: [ 0, 0, 2, 1, 0 ],
                nx: [ 6, 23, 23, 6, 23 ],
                ny: [ 5, 7, 6, 6, 14 ],
                nz: [ 1, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 22 ],
                py: [ 4, 17 ],
                pz: [ 2, -1 ],
                nx: [ 4, 8 ],
                ny: [ 5, 7 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 15, 14 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 4, 7 ],
                ny: [ 2, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 15, 17 ],
                py: [ 12, 7 ],
                pz: [ 0, -1 ],
                nx: [ 14, 10 ],
                ny: [ 11, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 10, 2, 9, 15 ],
                py: [ 5, 11, 1, 13 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 11, 3, 3, 13 ],
                ny: [ 1, 1, 0, 1 ],
                nz: [ 0, 2, 2, 0 ]
            }, {
                size: 2,
                px: [ 7, 21 ],
                py: [ 15, 22 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 8, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 21, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 5 ],
                ny: [ 11, 21 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 17, 7 ],
                py: [ 2, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 5, 11 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 10, 4 ],
                pz: [ 0, -1 ],
                nx: [ 13, 12 ],
                ny: [ 3, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 2, 2 ],
                pz: [ 1, 1 ],
                nx: [ 7, 1 ],
                ny: [ 8, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 1, 0, 0 ],
                py: [ 12, 4, 14, 0, 2 ],
                pz: [ 0, 1, 0, 2, 2 ],
                nx: [ 9, 5, 8, 4, 4 ],
                ny: [ 6, 3, 6, 3, 3 ],
                nz: [ 0, 1, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 0, 0, 3, 2 ],
                py: [ 6, 5, 0, 8, 2 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 23, 7, 22, 11, 4 ],
                ny: [ 12, 6, 14, 4, 3 ],
                nz: [ 0, 1, 0, 1, 2 ]
            }, {
                size: 4,
                px: [ 12, 12, 4, 8 ],
                py: [ 12, 11, 3, 10 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 0, 0, 0, 0 ],
                ny: [ 2, 1, 0, 3 ],
                nz: [ 1, 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 7, 6 ],
                pz: [ 1, -1 ],
                nx: [ 16, 4 ],
                ny: [ 12, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 2, 1, 3, 3, 3 ],
                py: [ 14, 8, 20, 21, 21 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 20, 10, 21, 21, 21 ],
                ny: [ 23, 11, 21, 23, 20 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 13 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 7, 21 ],
                ny: [ 8, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 3 ],
                py: [ 17, 4 ],
                pz: [ 0, 2 ],
                nx: [ 11, 10 ],
                ny: [ 15, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 11, 0, 19, 2 ],
                py: [ 15, 2, 23, 10 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 6, 8, 16, 2 ],
                ny: [ 13, 11, 10, 2 ],
                nz: [ 0, 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 14, 7 ],
                pz: [ 0, 1 ],
                nx: [ 3, 1 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 12, 17, 5, 10 ],
                py: [ 19, 15, 14, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 4, 12, 6, 12 ],
                ny: [ 4, 18, 9, 22 ],
                nz: [ 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 13, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 6, 5, 4, 5, 3 ],
                py: [ 2, 1, 2, 2, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 7, 4, 9, 18, 18 ],
                ny: [ 4, 4, 7, 14, 14 ],
                nz: [ 1, 1, 1, 0, -1 ]
            }, {
                size: 4,
                px: [ 8, 3, 20, 1 ],
                py: [ 6, 3, 18, 0 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 13, 11, 5, 22 ],
                ny: [ 12, 6, 2, 17 ],
                nz: [ 0, 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 8, 5 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 21, 7 ],
                py: [ 14, 7 ],
                pz: [ 0, 1 ],
                nx: [ 16, 11 ],
                ny: [ 14, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 3, 1 ],
                pz: [ 0, -1 ],
                nx: [ 9, 5 ],
                ny: [ 0, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 10 ],
                py: [ 5, 8 ],
                pz: [ 2, 1 ],
                nx: [ 5, 14 ],
                ny: [ 9, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 23, 4 ],
                pz: [ 0, 2 ],
                nx: [ 2, 2 ],
                ny: [ 5, 5 ],
                nz: [ 2, -1 ]
            }, {
                size: 5,
                px: [ 10, 9, 11, 10, 10 ],
                py: [ 2, 2, 1, 1, 1 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 2, 3, 2, 4, 5 ],
                ny: [ 4, 10, 2, 4, 3 ],
                nz: [ 2, 1, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 17, 5 ],
                py: [ 15, 1 ],
                pz: [ 0, -1 ],
                nx: [ 20, 19 ],
                ny: [ 14, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 20, 18 ],
                pz: [ 0, 0 ],
                nx: [ 2, 1 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 18, 3 ],
                pz: [ 0, 2 ],
                nx: [ 11, 3 ],
                ny: [ 16, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 8 ],
                py: [ 6, 10 ],
                pz: [ 1, 0 ],
                nx: [ 9, 0 ],
                ny: [ 9, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 20, 10 ],
                py: [ 21, 7 ],
                pz: [ 0, 1 ],
                nx: [ 7, 2 ],
                ny: [ 3, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 4, 7 ],
                pz: [ 1, -1 ],
                nx: [ 23, 5 ],
                ny: [ 9, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 2, 4, 5, 3, 4 ],
                py: [ 0, 1, 1, 2, 2 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 1, 0, 1, 1, 1 ],
                ny: [ 2, 1, 0, 1, 1 ],
                nz: [ 0, 1, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 8, 3 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 15 ],
                py: [ 7, 19 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 11, 5 ],
                pz: [ 1, 2 ],
                nx: [ 7, 8 ],
                ny: [ 9, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 23, 11 ],
                py: [ 9, 6 ],
                pz: [ 0, 1 ],
                nx: [ 22, 22 ],
                ny: [ 23, 23 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 23, 23 ],
                py: [ 21, 20 ],
                pz: [ 0, 0 ],
                nx: [ 2, 2 ],
                ny: [ 5, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 4 ],
                py: [ 12, 2 ],
                pz: [ 0, -1 ],
                nx: [ 9, 8 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 14 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 7, 18 ],
                ny: [ 1, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 20, 22 ],
                py: [ 1, 2 ],
                pz: [ 0, 0 ],
                nx: [ 23, 23 ],
                ny: [ 1, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 9, 10 ],
                pz: [ 1, 1 ],
                nx: [ 8, 0 ],
                ny: [ 15, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 11, 11, 6 ],
                py: [ 10, 11, 11 ],
                pz: [ 0, 0, -1 ],
                nx: [ 23, 23, 23 ],
                ny: [ 19, 21, 20 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 23, 23, 23, 6, 6 ],
                py: [ 21, 22, 22, 3, 6 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 8, 8, 8, 17, 4 ],
                ny: [ 7, 10, 8, 16, 5 ],
                nz: [ 1, 1, 1, 0, 2 ]
            }, {
                size: 2,
                px: [ 10, 23 ],
                py: [ 1, 22 ],
                pz: [ 0, -1 ],
                nx: [ 7, 2 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 7, 14 ],
                py: [ 3, 10 ],
                pz: [ 1, -1 ],
                nx: [ 5, 3 ],
                ny: [ 2, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 13, 7 ],
                pz: [ 0, 1 ],
                nx: [ 4, 10 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 15, 6 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 18, 17 ],
                pz: [ 0, -1 ],
                nx: [ 7, 6 ],
                ny: [ 10, 7 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 11 ],
                py: [ 3, 8 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 17, 4 ],
                py: [ 5, 7 ],
                pz: [ 0, 1 ],
                nx: [ 17, 10 ],
                ny: [ 4, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 16, 8, 16, 15, 15 ],
                py: [ 0, 0, 1, 0, 1 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 7, 4, 7, 4, 4 ],
                ny: [ 7, 5, 8, 1, 1 ],
                nz: [ 1, 2, 1, 2, -1 ]
            }, {
                size: 2,
                px: [ 13, 11 ],
                py: [ 5, 6 ],
                pz: [ 0, -1 ],
                nx: [ 4, 5 ],
                ny: [ 2, 2 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 16 ],
                py: [ 8, 10 ],
                pz: [ 0, 0 ],
                nx: [ 7, 2 ],
                ny: [ 3, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 8 ],
                py: [ 4, 11 ],
                pz: [ 1, 0 ],
                nx: [ 10, 1 ],
                ny: [ 9, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 1 ],
                py: [ 4, 2 ],
                pz: [ 2, -1 ],
                nx: [ 23, 23 ],
                ny: [ 15, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 8, 2, 4, 9 ],
                py: [ 1, 1, 0, 1, 2 ],
                pz: [ 0, 0, 2, 1, 0 ],
                nx: [ 8, 3, 8, 4, 4 ],
                ny: [ 6, 2, 4, 2, 2 ],
                nz: [ 1, 2, 1, 2, -1 ]
            }, {
                size: 2,
                px: [ 13, 6 ],
                py: [ 10, 5 ],
                pz: [ 0, -1 ],
                nx: [ 13, 7 ],
                ny: [ 6, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 10, 5 ],
                pz: [ 1, 2 ],
                nx: [ 10, 8 ],
                ny: [ 10, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 9, 14 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 5, 2, 15 ],
                py: [ 3, 1, 22 ],
                pz: [ 1, -1, -1 ],
                nx: [ 15, 9, 4 ],
                ny: [ 0, 1, 0 ],
                nz: [ 0, 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 19 ],
                py: [ 9, 21 ],
                pz: [ 1, 0 ],
                nx: [ 2, 17 ],
                ny: [ 5, 14 ],
                nz: [ 2, -1 ]
            }, {
                size: 3,
                px: [ 16, 2, 1 ],
                py: [ 2, 10, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 4, 9 ],
                ny: [ 3, 2, 6 ],
                nz: [ 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 2 ],
                py: [ 6, 10 ],
                pz: [ 1, -1 ],
                nx: [ 21, 22 ],
                ny: [ 16, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 16 ],
                py: [ 4, 23 ],
                pz: [ 0, -1 ],
                nx: [ 7, 3 ],
                ny: [ 3, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 13, 14 ],
                pz: [ 0, 0 ],
                nx: [ 1, 2 ],
                ny: [ 18, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 18, 5 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 13 ],
                ny: [ 2, 11 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 18, 17 ],
                py: [ 3, 3 ],
                pz: [ 0, 0 ],
                nx: [ 19, 19 ],
                ny: [ 1, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 0, 5 ],
                pz: [ 1, -1 ],
                nx: [ 12, 3 ],
                ny: [ 5, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 18, 4 ],
                ny: [ 4, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 13, 13, 2, 10, 15 ],
                py: [ 11, 12, 13, 17, 23 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 12, 13, 4, 3, 8 ],
                ny: [ 4, 4, 1, 0, 3 ],
                nz: [ 0, 0, 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 2, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 7, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 5, 1 ],
                pz: [ 0, -1 ],
                nx: [ 18, 4 ],
                ny: [ 12, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 19, 4 ],
                py: [ 11, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 7 ],
                ny: [ 2, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 2 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 4, 0 ],
                py: [ 7, 7 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 0, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 9 ],
                py: [ 0, 2 ],
                pz: [ 2, 1 ],
                nx: [ 6, 4 ],
                ny: [ 3, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 9, 4 ],
                pz: [ 1, 2 ],
                nx: [ 13, 5 ],
                ny: [ 18, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 5, 23, 23 ],
                py: [ 2, 8, 7 ],
                pz: [ 2, 0, 0 ],
                nx: [ 10, 12, 1 ],
                ny: [ 4, 1, 0 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 13, 0 ],
                py: [ 3, 3 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 10, 5 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 4, 11 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 11, 2 ],
                py: [ 14, 11 ],
                pz: [ 0, -1 ],
                nx: [ 10, 11 ],
                ny: [ 4, 13 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 21, 23 ],
                pz: [ 0, 0 ],
                nx: [ 7, 0 ],
                ny: [ 21, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 8, 5 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 8, 8 ],
                pz: [ 0, 0 ],
                nx: [ 6, 14 ],
                ny: [ 9, 15 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 6 ],
                py: [ 4, 8 ],
                pz: [ 0, -1 ],
                nx: [ 16, 8 ],
                ny: [ 0, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 3, 6, 0, 9 ],
                py: [ 0, 8, 5, 23 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 12, 2, 6, 10 ],
                ny: [ 5, 0, 3, 5 ],
                nz: [ 0, 2, 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 3, 9 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 5 ],
                py: [ 8, 23 ],
                pz: [ 1, 0 ],
                nx: [ 8, 9 ],
                ny: [ 15, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 18 ],
                py: [ 8, 0 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 9, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 4, 21 ],
                pz: [ 2, 0 ],
                nx: [ 13, 11 ],
                ny: [ 8, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 8, 8 ],
                pz: [ 0, 0 ],
                nx: [ 6, 1 ],
                ny: [ 8, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 20, 7 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 10, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 8, 7 ],
                pz: [ 1, -1 ],
                nx: [ 1, 2 ],
                ny: [ 4, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 5, 10 ],
                py: [ 5, 13 ],
                pz: [ 1, -1 ],
                nx: [ 3, 6 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 6, 3 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 4, 4 ],
                pz: [ 1, -1 ],
                nx: [ 5, 11 ],
                ny: [ 2, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 11, 23, 11, 23, 11 ],
                py: [ 4, 9, 5, 10, 6 ],
                pz: [ 1, 0, 1, 0, 1 ],
                nx: [ 7, 14, 13, 7, 3 ],
                ny: [ 9, 5, 6, 4, 4 ],
                nz: [ 0, 0, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 5 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 9, 20 ],
                ny: [ 1, 4 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 19, 20 ],
                py: [ 0, 3 ],
                pz: [ 0, 0 ],
                nx: [ 4, 6 ],
                ny: [ 11, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 13, 5, 20, 5 ],
                py: [ 14, 3, 23, 4 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 8, 15, 7, 16 ],
                ny: [ 8, 14, 6, 15 ],
                nz: [ 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 20 ],
                py: [ 5, 17 ],
                pz: [ 0, -1 ],
                nx: [ 7, 3 ],
                ny: [ 10, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 3,
                px: [ 1, 12, 7 ],
                py: [ 3, 7, 10 ],
                pz: [ 2, 0, 0 ],
                nx: [ 2, 2, 3 ],
                ny: [ 3, 2, 2 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 3,
                px: [ 10, 5, 7 ],
                py: [ 7, 10, 10 ],
                pz: [ 1, -1, -1 ],
                nx: [ 10, 10, 18 ],
                ny: [ 10, 9, 23 ],
                nz: [ 1, 1, 0 ]
            }, {
                size: 3,
                px: [ 14, 14, 4 ],
                py: [ 3, 3, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 4, 8 ],
                ny: [ 3, 2, 6 ],
                nz: [ 2, 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 12 ],
                py: [ 4, 17 ],
                pz: [ 2, 0 ],
                nx: [ 13, 1 ],
                ny: [ 15, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 20 ],
                py: [ 9, 22 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 2, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 2 ],
                py: [ 3, 6 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 15, 10, 1 ],
                py: [ 12, 2, 3 ],
                pz: [ 0, -1, -1 ],
                nx: [ 7, 5, 10 ],
                ny: [ 2, 1, 1 ],
                nz: [ 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 9, 11, 10, 12, 12 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 8, 4, 16, 5, 10 ],
                ny: [ 4, 4, 10, 3, 6 ],
                nz: [ 1, 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 0, 10 ],
                py: [ 3, 5 ],
                pz: [ 2, -1 ],
                nx: [ 3, 6 ],
                ny: [ 0, 1 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 7, 8, 7, 2, 12 ],
                py: [ 14, 13, 13, 16, 0 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 10, 1, 10, 1, 1 ],
                ny: [ 13, 2, 12, 4, 9 ],
                nz: [ 0, 2, 0, 1, 0 ]
            }, {
                size: 3,
                px: [ 6, 14, 13 ],
                py: [ 1, 2, 1 ],
                pz: [ 1, 0, 0 ],
                nx: [ 8, 21, 10 ],
                ny: [ 4, 23, 12 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 19, 19 ],
                py: [ 22, 21 ],
                pz: [ 0, 0 ],
                nx: [ 20, 1 ],
                ny: [ 22, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 12 ],
                py: [ 19, 22 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 0, 1 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 11, 9, 21, 4 ],
                py: [ 13, 3, 19, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 9, 9, 9, 5 ],
                ny: [ 13, 14, 12, 6 ],
                nz: [ 0, 0, 0, 1 ]
            }, {
                size: 4,
                px: [ 11, 12, 13, 14 ],
                py: [ 22, 22, 22, 22 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 13, 2, 4, 5 ],
                ny: [ 20, 0, 0, 6 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 1 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 0, 1 ],
                pz: [ 2, 2 ],
                nx: [ 9, 4 ],
                ny: [ 6, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 0 ],
                py: [ 10, 1 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 3, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 3, 1 ],
                pz: [ 1, 2 ],
                nx: [ 12, 18 ],
                ny: [ 17, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 2, 3, 4 ],
                py: [ 4, 3, 9 ],
                pz: [ 2, 2, 1 ],
                nx: [ 0, 3, 17 ],
                ny: [ 0, 1, 18 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 5, 1 ],
                ny: [ 11, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 17 ],
                py: [ 20, 6 ],
                pz: [ 0, -1 ],
                nx: [ 5, 2 ],
                ny: [ 9, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 11 ],
                py: [ 18, 2 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 9, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 16, 15 ],
                py: [ 2, 2 ],
                pz: [ 0, 0 ],
                nx: [ 17, 12 ],
                ny: [ 2, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 18, 4 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 7, 5 ],
                ny: [ 23, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 23, 23 ],
                pz: [ 0, 0 ],
                nx: [ 7, 11 ],
                ny: [ 10, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 10 ],
                py: [ 3, 18 ],
                pz: [ 2, -1 ],
                nx: [ 9, 9 ],
                ny: [ 5, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 5, 10 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 4, 23 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 8, 1 ],
                pz: [ 1, -1 ],
                nx: [ 15, 12 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 3, 10 ],
                pz: [ 2, 1 ],
                nx: [ 10, 1 ],
                ny: [ 20, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 10, 11 ],
                pz: [ 0, 0 ],
                nx: [ 22, 3 ],
                ny: [ 5, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 8, 17, 17, 9, 18 ],
                py: [ 0, 1, 0, 1, 0 ],
                pz: [ 1, 0, 0, 1, 0 ],
                nx: [ 11, 8, 9, 4, 4 ],
                ny: [ 23, 4, 6, 2, 2 ],
                nz: [ 0, 1, 0, 2, -1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 4, 4 ],
                pz: [ 1, -1 ],
                nx: [ 13, 4 ],
                ny: [ 9, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 9, 4, 8, 7, 7 ],
                py: [ 3, 1, 3, 3, 3 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 4, 2, 5, 3, 2 ],
                ny: [ 1, 15, 1, 4, 13 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 7 ],
                py: [ 13, 7 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 1, 2 ],
                py: [ 1, 12 ],
                pz: [ 2, 0 ],
                nx: [ 9, 21 ],
                ny: [ 5, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 0 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 19, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 16, 1 ],
                py: [ 5, 9 ],
                pz: [ 0, -1 ],
                nx: [ 16, 15 ],
                ny: [ 3, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 6 ],
                py: [ 17, 15 ],
                pz: [ 0, 0 ],
                nx: [ 11, 0 ],
                ny: [ 16, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 12, 11, 0, 3 ],
                py: [ 16, 8, 7, 1 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 10, 5, 10, 5 ],
                ny: [ 11, 9, 10, 8 ],
                nz: [ 0, 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 4, 14 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 17 ],
                py: [ 6, 13 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 15, 11 ],
                py: [ 3, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 15 ],
                ny: [ 1, 2 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 10, 11 ],
                py: [ 18, 4 ],
                pz: [ 0, -1 ],
                nx: [ 5, 5 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 7, 4 ],
                pz: [ 1, 2 ],
                nx: [ 4, 3 ],
                ny: [ 5, 7 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 12, 4 ],
                py: [ 15, 4 ],
                pz: [ 0, -1 ],
                nx: [ 11, 8 ],
                ny: [ 14, 19 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 18, 13 ],
                py: [ 13, 20 ],
                pz: [ 0, 0 ],
                nx: [ 13, 4 ],
                ny: [ 18, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 4 ],
                py: [ 6, 3 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 21, 5, 11, 5, 10 ],
                py: [ 1, 1, 3, 0, 0 ],
                pz: [ 0, 2, 1, 2, 1 ],
                nx: [ 7, 14, 15, 4, 8 ],
                ny: [ 3, 6, 11, 3, 4 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 15, 10 ],
                pz: [ 0, -1 ],
                nx: [ 21, 22 ],
                ny: [ 14, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 18, 0 ],
                py: [ 20, 0 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 12, 6, 13, 11, 7 ],
                py: [ 1, 1, 1, 2, 1 ],
                pz: [ 0, 1, 0, 0, 1 ],
                nx: [ 7, 6, 8, 5, 5 ],
                ny: [ 4, 15, 4, 16, 16 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 3,
                px: [ 22, 21, 21 ],
                py: [ 14, 15, 17 ],
                pz: [ 0, 0, 0 ],
                nx: [ 5, 9, 4 ],
                ny: [ 0, 5, 0 ],
                nz: [ 2, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 2 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 23, 11 ],
                ny: [ 16, 8 ],
                nz: [ 0, 1 ]
            }, {
                size: 4,
                px: [ 21, 21, 0, 18 ],
                py: [ 14, 15, 5, 4 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 8, 8, 9, 4 ],
                ny: [ 7, 8, 10, 5 ],
                nz: [ 1, 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 15, 5 ],
                py: [ 18, 1 ],
                pz: [ 0, -1 ],
                nx: [ 23, 23 ],
                ny: [ 16, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 15, 14 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 4, 4 ],
                ny: [ 2, 3 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 2, 6 ],
                py: [ 6, 5 ],
                pz: [ 1, -1 ],
                nx: [ 14, 11 ],
                ny: [ 1, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 17 ],
                py: [ 2, 8 ],
                pz: [ 2, 0 ],
                nx: [ 8, 3 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 8 ],
                py: [ 13, 10 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 8, 3 ],
                pz: [ 0, 1 ],
                nx: [ 1, 11 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 8 ],
                py: [ 5, 0 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 3, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 3 ],
                pz: [ 1, 2 ],
                nx: [ 1, 18 ],
                ny: [ 5, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 6, 6 ],
                pz: [ 0, 1 ],
                nx: [ 7, 12 ],
                ny: [ 5, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 1 ],
                py: [ 0, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 9, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 10, 11 ],
                pz: [ 0, 0 ],
                nx: [ 0, 5 ],
                ny: [ 5, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 1 ],
                py: [ 23, 4 ],
                pz: [ 0, 2 ],
                nx: [ 0, 0 ],
                ny: [ 13, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 6, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 4, 5 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 6, 5 ],
                pz: [ 1, 1 ],
                nx: [ 3, 9 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 9, 13 ],
                pz: [ 0, -1 ],
                nx: [ 4, 10 ],
                ny: [ 3, 7 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 13, 9, 6, 10, 10 ],
                py: [ 2, 2, 1, 2, 2 ],
                pz: [ 0, 0, 1, 0, -1 ],
                nx: [ 7, 5, 6, 5, 6 ],
                ny: [ 0, 2, 2, 1, 1 ],
                nz: [ 0, 0, 0, 0, 0 ]
            } ],
            alpha: [ -1.119615, 1.119615, -.8169953, .8169953, -.5291213, .5291213, -.4904488, .4904488, -.4930982, .4930982, -.4106179, .4106179, -.4246842, .4246842, -.3802383, .3802383, -.3364358, .3364358, -.3214186, .3214186, -.3210798, .3210798, -.2993167, .2993167, -.3426336, .3426336, -.3199184, .3199184, -.3061071, .3061071, -.2758972, .2758972, -.307559, .307559, -.3009565, .3009565, -.2015739, .2015739, -.2603266, .2603266, -.2772993, .2772993, -.2184913, .2184913, -.2306681, .2306681, -.1983223, .1983223, -.219476, .219476, -.2528421, .2528421, -.2436416, .2436416, -.3032886, .3032886, -.2556071, .2556071, -.256217, .256217, -.1930298, .1930298, -.2735898, .2735898, -.1814703, .1814703, -.2054824, .2054824, -.1986146, .1986146, -.1769226, .1769226, -.1775257, .1775257, -.2167927, .2167927, -.1823633, .1823633, -.158428, .158428, -.1778321, .1778321, -.1826777, .1826777, -.1979903, .1979903, -.1898326, .1898326, -.1835506, .1835506, -.196786, .196786, -.1871528, .1871528, -.1772414, .1772414, -.1985514, .1985514, -.2144078, .2144078, -.2742303, .2742303, -.224055, .224055, -.2132534, .2132534, -.1552127, .1552127, -.1568276, .1568276, -.1630086, .1630086, -.1458232, .1458232, -.1559541, .1559541, -.1720131, .1720131, -.1708434, .1708434, -.1624431, .1624431, -.1814161, .1814161, -.1552639, .1552639, -.1242354, .1242354, -.1552139, .1552139, -.1694359, .1694359, -.1801481, .1801481, -.1387182, .1387182, -.1409679, .1409679, -.1486724, .1486724, -.1779553, .1779553, -.1524595, .1524595, -.1788086, .1788086, -.1671479, .1671479, -.1376197, .1376197, -.1511808, .1511808, -.1524632, .1524632, -.1198986, .1198986, -.1382641, .1382641, -.1148901, .1148901, -.1131803, .1131803, -.1273508, .1273508, -.1405125, .1405125, -.1322132, .1322132, -.1386966, .1386966, -.1275621, .1275621, -.1180573, .1180573, -.1238803, .1238803, -.1428389, .1428389, -.1694437, .1694437, -.1290855, .1290855, -.152026, .152026, -.1398282, .1398282, -.1890736, .1890736, -.2280428, .2280428, -.1325099, .1325099, -.1342873, .1342873, -.1463841, .1463841, -.1983567, .1983567, -.1585711, .1585711, -.1260154, .1260154, -.1426774, .1426774, -.1554278, .1554278, -.1361201, .1361201, -.1181856, .1181856, -.1255941, .1255941, -.1113275, .1113275, -.1506576, .1506576, -.1202859, .1202859, -.2159751, .2159751, -.144315, .144315, -.1379194, .1379194, -.1805758, .1805758, -.1465612, .1465612, -.1328856, .1328856, -.1532173, .1532173, -.1590635, .1590635, -.1462229, .1462229, -.1350012, .1350012, -.1195634, .1195634, -.1173221, .1173221, -.1192867, .1192867, -.1595013, .1595013, -.1209751, .1209751, -.157129, .157129, -.1527274, .1527274, -.1373708, .1373708, -.1318313, .1318313, -.1273391, .1273391, -.1271365, .1271365, -.1528693, .1528693, -.1590476, .1590476, -.1581911, .1581911, -.1183023, .1183023, -.1559822, .1559822, -.1214999, .1214999, -.1283378, .1283378, -.1542583, .1542583, -.1336377, .1336377, -.1800416, .1800416, -.1710931, .1710931, -.1621737, .1621737, -.1239002, .1239002, -.1432928, .1432928, -.1392447, .1392447, -.1383938, .1383938, -.1357633, .1357633, -.1175842, .1175842, -.1085318, .1085318, -.1148885, .1148885, -.1320396, .1320396, -.1351204, .1351204, -.1581518, .1581518, -.1459574, .1459574, -.1180068, .1180068, -.1464196, .1464196, -.1179543, .1179543, -.1004204, .1004204, -.129466, .129466, -.1534244, .1534244, -.137897, .137897, -.1226545, .1226545, -.1281182, .1281182, -.1201471, .1201471, -.1448701, .1448701, -.129098, .129098, -.1388764, .1388764, -.09605773, .09605773, -.1411021, .1411021, -.1295693, .1295693, -.1371739, .1371739, -.1167579, .1167579, -.1400486, .1400486, -.1214224, .1214224, -.1287835, .1287835, -.1197646, .1197646, -.1192358, .1192358, -.1218651, .1218651, -.1564816, .1564816, -.1172391, .1172391, -.1342268, .1342268, -.1492471, .1492471, -.1157299, .1157299, -.1046703, .1046703, -.1255571, .1255571, -.1100135, .1100135, -.1501592, .1501592, -.1155712, .1155712, -.1145563, .1145563, -.1013425, .1013425, -.1145783, .1145783, -.1328031, .1328031, -.1077413, .1077413, -.1064996, .1064996, -.119117, .119117, -.1213217, .1213217, -.1260969, .1260969, -.1156494, .1156494, -.1268126, .1268126, -.1070999, .1070999, -.1112365, .1112365, -.1243916, .1243916, -.1283152, .1283152, -.1166925, .1166925, -.08997633, .08997633, -.158384, .158384, -.1211178, .1211178, -.109083, .109083, -.1030818, .1030818, -.14406, .14406, -.1458713, .1458713, -.1559082, .1559082, -.1058868, .1058868, -.101013, .101013, -.1642301, .1642301, -.123685, .123685, -.1467589, .1467589, -.1109359, .1109359, -.1673655, .1673655, -.1239984, .1239984, -.1039509, .1039509, -.1089378, .1089378, -.1545085, .1545085, -.1200862, .1200862, -.1105608, .1105608, -.1235262, .1235262, -.08496153, .08496153, -.1181372, .1181372, -.1139467, .1139467, -.1189317, .1189317, -.1266519, .1266519, -.09470736, .09470736, -.1336735, .1336735, -.08726601, .08726601, -.1304782, .1304782, -.1186529, .1186529, -.1355944, .1355944, -.09568801, .09568801, -.1282618, .1282618, -.1625632, .1625632, -.1167652, .1167652, -.1001301, .1001301, -.1292419, .1292419, -.1904213, .1904213, -.1511542, .1511542, -.09814394, .09814394, -.1171564, .1171564, -.09806486, .09806486, -.09217615, .09217615, -.08505645, .08505645, -.1573637, .1573637, -.1419174, .1419174, -.1298601, .1298601, -.1120613, .1120613, -.1158363, .1158363, -.1090957, .1090957, -.1204516, .1204516, -.1139852, .1139852, -.09642479, .09642479, -.1410872, .1410872, -.1142779, .1142779, -.1043991, .1043991, -.09736463, .09736463, -.1451046, .1451046, -.1205668, .1205668, -.09881445, .09881445, -.1612822, .1612822, -.1175681, .1175681, -.1522528, .1522528, -.161752, .161752, -.1582938, .1582938, -.1208202, .1208202, -.1016003, .1016003, -.1232059, .1232059, -.09583025, .09583025, -.101399, .101399, -.1178752, .1178752, -.1215972, .1215972, -.1294932, .1294932, -.115827, .115827, -.1008645, .1008645, -.0969919, .0969919, -.1022144, .1022144, -.09878768, .09878768, -.1339052, .1339052, -.09279961, .09279961, -.1047606, .1047606, -.1141163, .1141163, -.12676, .12676, -.1252763, .1252763, -.09775003, .09775003, -.09169116, .09169116, -.1006496, .1006496, -.09493293, .09493293, -.1213694, .1213694, -.1109243, .1109243, -.1115973, .1115973, -.07979327, .07979327, -.09220953, .09220953, -.1028913, .1028913, -.125351, .125351 ]
        }, {
            count: 391,
            threshold: -4.665692,
            feature: [ {
                size: 5,
                px: [ 14, 9, 11, 17, 12 ],
                py: [ 2, 3, 9, 13, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 21, 8, 7, 20, 13 ],
                ny: [ 16, 10, 7, 7, 9 ],
                nz: [ 0, 1, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 10, 6, 11, 13 ],
                py: [ 9, 3, 13, 3, 4 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 10, 4, 5, 10, 2 ],
                ny: [ 9, 10, 8, 8, 2 ],
                nz: [ 0, 1, 1, 0, 2 ]
            }, {
                size: 5,
                px: [ 6, 9, 7, 8, 8 ],
                py: [ 3, 3, 3, 3, 3 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 0, 0, 0, 4, 9 ],
                ny: [ 4, 2, 3, 10, 8 ],
                nz: [ 0, 0, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 6, 2, 16, 6, 8 ],
                py: [ 16, 2, 11, 4, 11 ],
                pz: [ 0, 2, 0, 1, 0 ],
                nx: [ 3, 8, 4, 1, 1 ],
                ny: [ 4, 4, 4, 5, 13 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 16, 13, 9 ],
                py: [ 23, 18, 10 ],
                pz: [ 0, 0, 1 ],
                nx: [ 14, 15, 8 ],
                ny: [ 21, 22, 3 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 16, 19, 17, 17 ],
                py: [ 1, 2, 3, 2, 2 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 23, 23, 23, 23, 23 ],
                ny: [ 6, 2, 1, 3, 5 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 12, 12 ],
                py: [ 10, 11, 12, 13, 13 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 8, 14, 4, 6 ],
                ny: [ 2, 4, 7, 4, 8 ],
                nz: [ 2, 1, 0, 1, 1 ]
            }, {
                size: 5,
                px: [ 1, 2, 3, 6, 4 ],
                py: [ 6, 10, 12, 23, 13 ],
                pz: [ 1, 1, 0, 0, 0 ],
                nx: [ 2, 0, 0, 1, 1 ],
                ny: [ 23, 5, 10, 21, 21 ],
                nz: [ 0, 2, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 16, 12, 4, 12 ],
                py: [ 6, 17, 7, 2, 8 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 8, 8, 12, 0, 6 ],
                ny: [ 4, 4, 16, 0, 8 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 18, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 10, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 9, 9, 2, 0, 12 ],
                py: [ 6, 6, 21, 4, 8 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 8, 4, 9, 7, 7 ],
                ny: [ 10, 2, 4, 5, 8 ],
                nz: [ 1, 2, 1, 1, 1 ]
            }, {
                size: 5,
                px: [ 10, 10, 10, 18, 19 ],
                py: [ 10, 8, 7, 14, 14 ],
                pz: [ 1, 1, 1, 0, 0 ],
                nx: [ 21, 23, 22, 22, 11 ],
                ny: [ 23, 19, 21, 22, 10 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 3, 15, 4, 19 ],
                py: [ 14, 0, 5, 5, 14 ],
                pz: [ 0, -1, -1, -1, -1 ],
                nx: [ 12, 17, 15, 3, 8 ],
                ny: [ 18, 18, 14, 2, 10 ],
                nz: [ 0, 0, 0, 2, 0 ]
            }, {
                size: 5,
                px: [ 8, 11, 3, 11, 4 ],
                py: [ 23, 7, 9, 8, 8 ],
                pz: [ 0, 0, 1, 0, 1 ],
                nx: [ 8, 0, 10, 0, 8 ],
                ny: [ 8, 2, 8, 4, 10 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 10, 11, 12, 8, 4 ],
                py: [ 3, 0, 0, 1, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 2, 3, 4, 3, 3 ],
                ny: [ 14, 5, 0, 1, 2 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 11 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 5, 2 ],
                ny: [ 9, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 7, 1, 0, 10, 1 ],
                py: [ 0, 0, 2, 12, 6 ],
                pz: [ 0, 2, 2, 0, 1 ],
                nx: [ 4, 6, 2, 8, 8 ],
                ny: [ 4, 11, 2, 4, 4 ],
                nz: [ 1, 1, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 4, 15 ],
                py: [ 4, 12 ],
                pz: [ 2, 0 ],
                nx: [ 4, 6 ],
                ny: [ 5, 11 ],
                nz: [ 2, -1 ]
            }, {
                size: 5,
                px: [ 9, 4, 16, 14, 14 ],
                py: [ 8, 4, 23, 18, 18 ],
                pz: [ 1, 2, 0, 0, -1 ],
                nx: [ 0, 2, 1, 1, 0 ],
                ny: [ 2, 0, 3, 2, 3 ],
                nz: [ 1, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 17, 7, 7, 18, 19 ],
                py: [ 7, 11, 8, 7, 7 ],
                pz: [ 0, 1, 1, 0, 0 ],
                nx: [ 17, 5, 8, 2, 0 ],
                ny: [ 8, 0, 7, 5, 3 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 5, 14 ],
                py: [ 12, 3 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 5, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 10, 8, 16, 11, 11 ],
                py: [ 5, 6, 12, 4, 4 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 14, 13, 5, 9, 5 ],
                ny: [ 13, 10, 1, 4, 2 ],
                nz: [ 0, 0, 2, 1, 2 ]
            }, {
                size: 5,
                px: [ 15, 14, 16, 8, 8 ],
                py: [ 2, 2, 2, 0, 0 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 9, 18, 19, 18, 17 ],
                ny: [ 0, 0, 2, 1, 0 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 15 ],
                py: [ 12, 11 ],
                pz: [ 0, 0 ],
                nx: [ 14, 4 ],
                ny: [ 9, 15 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 5, 11, 11 ],
                py: [ 3, 4, 5 ],
                pz: [ 2, 1, 1 ],
                nx: [ 14, 3, 18 ],
                ny: [ 6, 5, 0 ],
                nz: [ 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 16, 14, 17, 15, 9 ],
                py: [ 2, 2, 2, 2, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 21, 20, 11, 21, 21 ],
                ny: [ 2, 0, 7, 3, 3 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 1, 1, 1, 5 ],
                py: [ 12, 9, 7, 3, 6 ],
                pz: [ 0, 0, 1, 1, 1 ],
                nx: [ 4, 8, 3, 4, 17 ],
                ny: [ 4, 4, 0, 8, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 9, 2 ],
                ny: [ 4, 17 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 5 ],
                py: [ 16, 9 ],
                pz: [ 0, 1 ],
                nx: [ 10, 17 ],
                ny: [ 16, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 11, 5, 9, 15 ],
                py: [ 14, 9, 11, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 10, 1, 9, 4 ],
                ny: [ 9, 2, 13, 7 ],
                nz: [ 0, 2, 0, 1 ]
            }, {
                size: 5,
                px: [ 2, 5, 10, 7, 10 ],
                py: [ 7, 12, 2, 13, 3 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 5, 2, 3, 3, 2 ],
                ny: [ 23, 15, 17, 16, 14 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 7 ],
                py: [ 8, 10 ],
                pz: [ 0, -1 ],
                nx: [ 7, 14 ],
                ny: [ 5, 8 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 16 ],
                py: [ 7, 23 ],
                pz: [ 1, 0 ],
                nx: [ 4, 4 ],
                ny: [ 2, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 5,
                px: [ 16, 14, 18, 4, 17 ],
                py: [ 0, 0, 4, 0, 1 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 8, 8, 16, 9, 9 ],
                ny: [ 5, 4, 11, 7, 7 ],
                nz: [ 1, 1, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 12, 13, 7, 8, 4 ],
                py: [ 9, 12, 6, 11, 5 ],
                pz: [ 0, 0, 1, 1, 2 ],
                nx: [ 23, 23, 16, 9, 9 ],
                ny: [ 0, 1, 11, 7, 7 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 6, 7, 2 ],
                py: [ 21, 23, 4 ],
                pz: [ 0, 0, 2 ],
                nx: [ 4, 1, 16 ],
                ny: [ 10, 5, 11 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 3, 1 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 1, 2, 1, 0, 1 ],
                py: [ 7, 13, 12, 4, 13 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 18, 9, 9, 19, 19 ],
                ny: [ 23, 5, 11, 19, 19 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 3,
                px: [ 4, 10, 12 ],
                py: [ 6, 2, 5 ],
                pz: [ 1, -1, -1 ],
                nx: [ 10, 0, 0 ],
                ny: [ 12, 1, 3 ],
                nz: [ 0, 2, 2 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 0 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 19, 17, 10, 14, 18 ],
                py: [ 2, 1, 7, 0, 1 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 3, 3, 3, 7, 5 ],
                ny: [ 9, 10, 7, 23, 18 ],
                nz: [ 1, 1, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 14, 4 ],
                ny: [ 15, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 15 ],
                py: [ 1, 3 ],
                pz: [ 1, 0 ],
                nx: [ 16, 19 ],
                ny: [ 1, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 11, 11, 1, 2, 11 ],
                py: [ 11, 12, 1, 13, 12 ],
                pz: [ 0, 0, -1, -1, -1 ],
                nx: [ 12, 17, 8, 16, 8 ],
                ny: [ 7, 12, 11, 16, 6 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 5,
                px: [ 13, 11, 10, 12, 5 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 8, 4, 3, 4, 4 ],
                ny: [ 4, 5, 2, 4, 4 ],
                nz: [ 1, 1, 2, 1, -1 ]
            }, {
                size: 5,
                px: [ 6, 1, 3, 2, 3 ],
                py: [ 13, 3, 3, 4, 10 ],
                pz: [ 0, 2, 1, 1, 1 ],
                nx: [ 0, 1, 0, 0, 0 ],
                ny: [ 2, 0, 5, 4, 4 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 1 ],
                py: [ 4, 3 ],
                pz: [ 0, -1 ],
                nx: [ 16, 15 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 3, 0 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, 15 ],
                py: [ 18, 14 ],
                pz: [ 0, -1 ],
                nx: [ 4, 14 ],
                ny: [ 4, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 6 ],
                py: [ 3, 4 ],
                pz: [ 2, 1 ],
                nx: [ 9, 5 ],
                ny: [ 14, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 6 ],
                py: [ 1, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 0, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 0 ],
                py: [ 4, 2 ],
                pz: [ 0, -1 ],
                nx: [ 5, 3 ],
                ny: [ 1, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 1, 1, 1, 0, 0 ],
                py: [ 16, 15, 17, 6, 9 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 9, 5, 4, 9, 8 ],
                ny: [ 7, 3, 3, 6, 7 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 1 ],
                py: [ 8, 15 ],
                pz: [ 1, -1 ],
                nx: [ 9, 8 ],
                ny: [ 9, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 20, 19 ],
                py: [ 19, 22 ],
                pz: [ 0, 0 ],
                nx: [ 7, 0 ],
                ny: [ 3, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 4, 2, 5, 5 ],
                py: [ 12, 6, 3, 5, 5 ],
                pz: [ 0, 1, 2, 1, -1 ],
                nx: [ 22, 21, 20, 21, 22 ],
                ny: [ 17, 20, 22, 19, 16 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 2, 6 ],
                pz: [ 1, 0 ],
                nx: [ 8, 3 ],
                ny: [ 3, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 9, 4 ],
                pz: [ 1, 1 ],
                nx: [ 12, 4 ],
                ny: [ 17, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 0, 1, 0 ],
                py: [ 5, 13, 3 ],
                pz: [ 2, 0, 2 ],
                nx: [ 0, 4, 11 ],
                ny: [ 23, 5, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 6, 3 ],
                pz: [ 0, 1 ],
                nx: [ 4, 4 ],
                ny: [ 3, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 7, 3 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 4, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 12, 13, 12, 12, 12 ],
                py: [ 12, 13, 11, 10, 10 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 10, 8, 8, 16, 15 ],
                ny: [ 7, 4, 10, 11, 10 ],
                nz: [ 0, 1, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 4, 2 ],
                ny: [ 5, 5 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 9, 17 ],
                py: [ 17, 7 ],
                pz: [ 0, -1 ],
                nx: [ 5, 2 ],
                ny: [ 9, 4 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 3, 5 ],
                pz: [ 2, 2 ],
                nx: [ 12, 8 ],
                ny: [ 16, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 2, 0 ],
                pz: [ 1, 1 ],
                nx: [ 0, 4 ],
                ny: [ 0, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 5, 0 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 0, 6, 4, 22 ],
                py: [ 23, 2, 4, 12 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 7, 6, 8, 5 ],
                ny: [ 1, 1, 2, 1 ],
                nz: [ 1, 1, 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 10 ],
                py: [ 0, 9 ],
                pz: [ 1, -1 ],
                nx: [ 2, 4 ],
                ny: [ 3, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 11, 8 ],
                py: [ 15, 13 ],
                pz: [ 0, -1 ],
                nx: [ 23, 11 ],
                ny: [ 13, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 18, 4 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 18, 20 ],
                ny: [ 4, 7 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 21, 20, 20, 10, 20 ],
                py: [ 17, 22, 19, 10, 21 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 5, 5, 3, 14, 7 ],
                ny: [ 9, 9, 0, 8, 4 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 3, 7, 13, 7, 3 ],
                py: [ 6, 12, 3, 0, 3 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 1, 5, 0, 0, 2 ],
                ny: [ 16, 6, 13, 5, 4 ],
                nz: [ 0, 1, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 9, 5 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 14, 9, 13 ],
                py: [ 19, 22, 8 ],
                pz: [ 0, -1, -1 ],
                nx: [ 13, 4, 4 ],
                ny: [ 17, 2, 5 ],
                nz: [ 0, 2, 2 ]
            }, {
                size: 2,
                px: [ 16, 4 ],
                py: [ 9, 3 ],
                pz: [ 0, 2 ],
                nx: [ 7, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 10, 2, 4, 2 ],
                py: [ 23, 4, 8, 3 ],
                pz: [ 0, 2, 1, 2 ],
                nx: [ 14, 0, 4, 11 ],
                ny: [ 19, 3, 5, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 9, 10, 8, 7, 11 ],
                py: [ 2, 2, 2, 2, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 6, 5, 3, 4, 4 ],
                ny: [ 0, 1, 0, 2, 2 ],
                nz: [ 0, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 4 ],
                py: [ 13, 6 ],
                pz: [ 0, -1 ],
                nx: [ 15, 4 ],
                ny: [ 8, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 0, 8 ],
                py: [ 1, 2 ],
                pz: [ 2, -1 ],
                nx: [ 5, 4 ],
                ny: [ 2, 2 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 16, 13, 14, 15, 15 ],
                py: [ 1, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 9, 4, 18, 8 ],
                ny: [ 5, 9, 4, 18, 11 ],
                nz: [ 2, 1, 2, 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 2, 6 ],
                pz: [ 2, 1 ],
                nx: [ 22, 9 ],
                ny: [ 23, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 19, 19 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 21, 22 ],
                ny: [ 2, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 5 ],
                py: [ 8, 6 ],
                pz: [ 0, 1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 18, 14 ],
                py: [ 13, 17 ],
                pz: [ 0, 0 ],
                nx: [ 14, 4 ],
                ny: [ 16, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 6, 3 ],
                pz: [ 1, -1 ],
                nx: [ 1, 0 ],
                ny: [ 2, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 23, 21 ],
                py: [ 21, 14 ],
                pz: [ 0, -1 ],
                nx: [ 7, 5 ],
                ny: [ 0, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 15, 10 ],
                py: [ 23, 7 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 18 ],
                py: [ 3, 8 ],
                pz: [ 2, 0 ],
                nx: [ 8, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 7 ],
                py: [ 2, 11 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 2, 3, 5, 6, 1 ],
                py: [ 7, 14, 2, 2, 4 ],
                pz: [ 1, 0, 0, 0, 2 ],
                nx: [ 8, 4, 4, 7, 7 ],
                ny: [ 7, 5, 4, 9, 9 ],
                nz: [ 1, 2, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 6, 3 ],
                pz: [ 1, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 7, 20, 4, 10, 10 ],
                py: [ 9, 16, 4, 10, 8 ],
                pz: [ 1, 0, 2, 1, 1 ],
                nx: [ 4, 2, 3, 5, 3 ],
                ny: [ 11, 5, 6, 12, 5 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 11 ],
                py: [ 4, 18 ],
                pz: [ 1, -1 ],
                nx: [ 8, 6 ],
                ny: [ 4, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 8 ],
                py: [ 5, 23 ],
                pz: [ 2, 0 ],
                nx: [ 9, 4 ],
                ny: [ 0, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 1, 2, 2, 2 ],
                py: [ 12, 6, 12, 11, 11 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 13, 12, 11, 14, 7 ],
                nz: [ 0, 0, 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 14 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 11, 23, 23, 22, 22 ],
                py: [ 8, 12, 6, 13, 14 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 13, 8, 7, 6, 6 ],
                ny: [ 6, 3, 3, 9, 9 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 4,
                px: [ 9, 23, 23, 22 ],
                py: [ 7, 12, 6, 13 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 11, 23, 23, 23 ],
                ny: [ 6, 13, 17, 10 ],
                nz: [ 1, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 19, 5, 9, 16, 10 ],
                pz: [ 0, 2, 1, 0, 1 ],
                nx: [ 5, 2, 1, 2, 2 ],
                ny: [ 18, 10, 5, 9, 9 ],
                nz: [ 0, 1, 2, 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 23, 14 ],
                ny: [ 23, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 1 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 10 ],
                py: [ 4, 8 ],
                pz: [ 0, -1 ],
                nx: [ 8, 8 ],
                ny: [ 2, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 7, 10, 11 ],
                py: [ 1, 6, 13 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 4, 2 ],
                ny: [ 3, 8, 2 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 8, 2 ],
                pz: [ 1, 2 ],
                nx: [ 10, 5 ],
                ny: [ 10, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 16 ],
                py: [ 20, 21 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 3, 10 ],
                py: [ 7, 8 ],
                pz: [ 1, -1 ],
                nx: [ 7, 4 ],
                ny: [ 20, 7 ],
                nz: [ 0, 1 ]
            }, {
                size: 5,
                px: [ 11, 11, 11, 11, 11 ],
                py: [ 10, 12, 13, 11, 11 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 11, 12, 16, 3, 8 ],
                ny: [ 6, 6, 10, 1, 8 ],
                nz: [ 0, 0, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 4, 2 ],
                pz: [ 0, 1 ],
                nx: [ 7, 7 ],
                ny: [ 8, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 23, 23, 23, 23, 23 ],
                py: [ 22, 20, 21, 19, 19 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 6, 3, 4, 3 ],
                ny: [ 19, 23, 15, 20, 16 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 8, 4, 14 ],
                py: [ 12, 3, 8 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 2, 10 ],
                ny: [ 10, 3, 13 ],
                nz: [ 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 11, 18 ],
                py: [ 13, 23 ],
                pz: [ 0, -1 ],
                nx: [ 5, 5 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 3,
                px: [ 11, 2, 10 ],
                py: [ 17, 4, 17 ],
                pz: [ 0, 2, 0 ],
                nx: [ 11, 0, 22 ],
                ny: [ 15, 2, 4 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 3,
                px: [ 11, 3, 0 ],
                py: [ 15, 4, 8 ],
                pz: [ 0, -1, -1 ],
                nx: [ 14, 11, 4 ],
                ny: [ 9, 17, 7 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 17, 16 ],
                py: [ 2, 1 ],
                pz: [ 0, 0 ],
                nx: [ 9, 11 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 21, 23 ],
                pz: [ 0, 0 ],
                nx: [ 4, 0 ],
                ny: [ 3, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 18, 2 ],
                py: [ 20, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 9 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 1 ],
                py: [ 19, 3 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 9, 21 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 19, 19 ],
                py: [ 21, 22 ],
                pz: [ 0, 0 ],
                nx: [ 19, 0 ],
                ny: [ 23, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 11, 2, 3, 2 ],
                py: [ 6, 6, 9, 4 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 4, 9, 19, 19 ],
                ny: [ 5, 10, 17, 18 ],
                nz: [ 2, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 4, 8 ],
                pz: [ 2, 1 ],
                nx: [ 4, 9 ],
                ny: [ 10, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 23, 22 ],
                py: [ 8, 12 ],
                pz: [ 0, -1 ],
                nx: [ 7, 4 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 12, 1 ],
                py: [ 5, 2 ],
                pz: [ 0, -1 ],
                nx: [ 9, 11 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 2, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 9 ],
                py: [ 13, 7 ],
                pz: [ 0, 1 ],
                nx: [ 9, 5 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 0, 0, 9, 13 ],
                py: [ 3, 3, 7, 3 ],
                pz: [ 2, -1, -1, -1 ],
                nx: [ 2, 4, 4, 11 ],
                ny: [ 1, 2, 8, 5 ],
                nz: [ 2, 1, 1, 0 ]
            }, {
                size: 5,
                px: [ 3, 6, 5, 6, 6 ],
                py: [ 0, 0, 2, 1, 1 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 2, 2, 2, 1, 1 ],
                ny: [ 21, 19, 20, 16, 17 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 22, 10 ],
                pz: [ 0, -1 ],
                nx: [ 7, 4 ],
                ny: [ 10, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 7, 3 ],
                pz: [ 1, 2 ],
                nx: [ 8, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 17, 8, 15, 7, 15 ],
                py: [ 13, 6, 16, 5, 12 ],
                pz: [ 0, 1, 0, 1, 0 ],
                nx: [ 5, 4, 6, 3, 4 ],
                ny: [ 1, 2, 1, 0, 3 ],
                nz: [ 0, 0, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 9, 11, 12, 10 ],
                py: [ 0, 1, 2, 2, 0 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 16, 7, 4, 4 ],
                ny: [ 9, 23, 9, 3, 2 ],
                nz: [ 1, 0, 1, 2, -1 ]
            }, {
                size: 2,
                px: [ 4, 11 ],
                py: [ 1, 4 ],
                pz: [ 2, -1 ],
                nx: [ 8, 7 ],
                ny: [ 4, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 7, 4, 5, 8 ],
                py: [ 13, 2, 1, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 9, 4, 9, 9 ],
                ny: [ 9, 5, 10, 11 ],
                nz: [ 0, 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 11 ],
                py: [ 10, 11 ],
                pz: [ 0, -1 ],
                nx: [ 2, 6 ],
                ny: [ 2, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 21, 3 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 22, 22 ],
                ny: [ 20, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 1, 2 ],
                pz: [ 0, 0 ],
                nx: [ 5, 10 ],
                ny: [ 1, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 21, 3 ],
                py: [ 18, 1 ],
                pz: [ 0, -1 ],
                nx: [ 16, 15 ],
                ny: [ 4, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 7 ],
                py: [ 4, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 13, 11 ],
                py: [ 23, 17 ],
                pz: [ 0, 0 ],
                nx: [ 11, 21 ],
                ny: [ 16, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 1, 2 ],
                py: [ 0, 6 ],
                pz: [ 1, -1 ],
                nx: [ 16, 16 ],
                ny: [ 9, 11 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 20, 20 ],
                pz: [ 0, 0 ],
                nx: [ 11, 3 ],
                ny: [ 21, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 19, 20, 9 ],
                py: [ 21, 18, 11 ],
                pz: [ 0, 0, 1 ],
                nx: [ 17, 4, 11 ],
                ny: [ 19, 2, 0 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 5, 2 ],
                pz: [ 0, 1 ],
                nx: [ 7, 9 ],
                ny: [ 7, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 8, 4, 4, 8, 4 ],
                py: [ 4, 4, 5, 10, 3 ],
                pz: [ 1, 1, 2, 0, 2 ],
                nx: [ 11, 22, 11, 23, 23 ],
                ny: [ 0, 0, 1, 3, 3 ],
                nz: [ 1, 0, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 14 ],
                py: [ 10, 23 ],
                pz: [ 1, 0 ],
                nx: [ 7, 2 ],
                ny: [ 10, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 14 ],
                py: [ 6, 23 ],
                pz: [ 1, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 11, 2 ],
                py: [ 19, 3 ],
                pz: [ 0, -1 ],
                nx: [ 10, 12 ],
                ny: [ 18, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 3 ],
                py: [ 4, 1 ],
                pz: [ 0, 2 ],
                nx: [ 6, 6 ],
                ny: [ 11, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 18, 10, 20, 19, 19 ],
                pz: [ 0, 1, 0, 0, -1 ],
                nx: [ 11, 10, 14, 12, 13 ],
                ny: [ 2, 2, 2, 2, 2 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 12, 2, 9 ],
                py: [ 14, 5, 10 ],
                pz: [ 0, -1, -1 ],
                nx: [ 11, 10, 5 ],
                ny: [ 10, 13, 5 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 3, 7 ],
                pz: [ 2, 1 ],
                nx: [ 3, 10 ],
                ny: [ 4, 13 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 21, 7 ],
                pz: [ 0, -1 ],
                nx: [ 10, 21 ],
                ny: [ 7, 15 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 21, 10 ],
                py: [ 16, 8 ],
                pz: [ 0, 1 ],
                nx: [ 8, 2 ],
                ny: [ 10, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 6, 7 ],
                pz: [ 1, -1 ],
                nx: [ 12, 11 ],
                ny: [ 11, 7 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 11 ],
                py: [ 4, 20 ],
                pz: [ 2, 0 ],
                nx: [ 11, 10 ],
                ny: [ 19, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 5 ],
                py: [ 13, 3 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 7, 1 ],
                py: [ 23, 3 ],
                pz: [ 0, 2 ],
                nx: [ 14, 6 ],
                ny: [ 12, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 11, 7 ],
                ny: [ 3, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 6 ],
                py: [ 2, 17 ],
                pz: [ 0, -1 ],
                nx: [ 4, 6 ],
                ny: [ 4, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 14, 19 ],
                py: [ 5, 6 ],
                pz: [ 0, -1 ],
                nx: [ 9, 3 ],
                ny: [ 9, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 5,
                px: [ 12, 13, 13, 13, 12 ],
                py: [ 9, 11, 12, 13, 10 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 2, 4, 4, 4, 4 ],
                ny: [ 7, 18, 17, 14, 14 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 6, 6 ],
                pz: [ 1, -1 ],
                nx: [ 20, 18 ],
                ny: [ 18, 23 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 4, 14 ],
                pz: [ 1, -1 ],
                nx: [ 9, 4 ],
                ny: [ 2, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 9 ],
                py: [ 4, 18 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 15, 0 ],
                py: [ 18, 4 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 5, 4 ],
                nz: [ 2, 2 ]
            }, {
                size: 4,
                px: [ 7, 3, 6, 6 ],
                py: [ 8, 4, 6, 5 ],
                pz: [ 1, 2, 1, 1 ],
                nx: [ 10, 4, 13, 0 ],
                ny: [ 10, 4, 9, 22 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 8 ],
                py: [ 18, 11 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 8, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 4,
                px: [ 17, 2, 10, 2 ],
                py: [ 14, 1, 10, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 8, 8, 17, 8 ],
                ny: [ 4, 5, 12, 6 ],
                nz: [ 1, 1, 0, 1 ]
            }, {
                size: 5,
                px: [ 9, 11, 9, 4, 10 ],
                py: [ 1, 1, 0, 0, 1 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 8, 4, 7, 15, 15 ],
                ny: [ 7, 2, 4, 17, 17 ],
                nz: [ 1, 2, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 11, 8 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 11, 3 ],
                py: [ 13, 8 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 5, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 6, 2 ],
                py: [ 8, 3 ],
                pz: [ 0, 2 ],
                nx: [ 3, 1 ],
                ny: [ 5, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 10, 5, 7, 8, 6 ],
                py: [ 9, 7, 7, 7, 7 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 7, 3, 0, 2, 15 ],
                ny: [ 8, 0, 1, 18, 17 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 17, 8 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 11, 8, 10, 12 ],
                py: [ 0, 2, 10, 2, 3 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 3, 2, 10, 2, 2 ],
                ny: [ 6, 4, 11, 3, 3 ],
                nz: [ 0, 1, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 8, 19 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 1, 1 ],
                pz: [ 2, -1 ],
                nx: [ 7, 17 ],
                ny: [ 1, 2 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 16, 15, 14, 13, 7 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 6, 4, 8, 3, 11 ],
                ny: [ 3, 4, 4, 1, 6 ],
                nz: [ 1, 1, 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 8, 5 ],
                pz: [ 0, -1 ],
                nx: [ 13, 4 ],
                ny: [ 10, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 4, 9 ],
                py: [ 0, 2 ],
                pz: [ 2, 1 ],
                nx: [ 4, 11 ],
                ny: [ 0, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 15 ],
                py: [ 2, 2 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 17 ],
                py: [ 9, 22 ],
                pz: [ 1, 0 ],
                nx: [ 8, 20 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 14, 22 ],
                pz: [ 0, -1 ],
                nx: [ 3, 11 ],
                ny: [ 3, 3 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 1, 0 ],
                pz: [ 1, 2 ],
                nx: [ 5, 8 ],
                ny: [ 3, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 4, 8 ],
                pz: [ 2, 1 ],
                nx: [ 9, 5 ],
                ny: [ 15, 19 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 1, 1 ],
                pz: [ 0, 1 ],
                nx: [ 10, 10 ],
                ny: [ 6, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 6 ],
                py: [ 10, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 13, 7, 3 ],
                py: [ 5, 2, 6 ],
                pz: [ 0, 1, -1 ],
                nx: [ 17, 16, 17 ],
                ny: [ 1, 1, 2 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 3, 3 ],
                pz: [ 0, 0 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 0, 8 ],
                pz: [ 2, -1 ],
                nx: [ 3, 4 ],
                ny: [ 0, 0 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 9, 2, 4, 1, 2 ],
                py: [ 13, 3, 9, 2, 5 ],
                pz: [ 0, 2, 1, 2, 2 ],
                nx: [ 9, 5, 10, 4, 10 ],
                ny: [ 5, 1, 3, 0, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 5, 9 ],
                pz: [ 1, 0 ],
                nx: [ 0, 2 ],
                ny: [ 23, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 22, 11 ],
                py: [ 21, 8 ],
                pz: [ 0, 1 ],
                nx: [ 10, 0 ],
                ny: [ 17, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 1 ],
                py: [ 22, 9 ],
                pz: [ 0, 1 ],
                nx: [ 22, 5 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 5, 6 ],
                ny: [ 10, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 7, 3, 17, 7 ],
                py: [ 8, 2, 10, 11 ],
                pz: [ 0, 2, 0, 1 ],
                nx: [ 6, 10, 5, 23 ],
                ny: [ 9, 21, 1, 23 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 7, 2 ],
                pz: [ 1, 2 ],
                nx: [ 8, 9 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 14, 6 ],
                pz: [ 0, 1 ],
                nx: [ 8, 8 ],
                ny: [ 13, 13 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 11, 6, 8 ],
                py: [ 20, 3, 20 ],
                pz: [ 0, -1, -1 ],
                nx: [ 5, 3, 12 ],
                ny: [ 9, 5, 18 ],
                nz: [ 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 3, 9 ],
                py: [ 1, 3 ],
                pz: [ 1, 0 ],
                nx: [ 2, 8 ],
                ny: [ 5, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 9 ],
                py: [ 21, 3 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 5, 5 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 2, 9 ],
                py: [ 7, 11 ],
                pz: [ 1, -1 ],
                nx: [ 2, 2 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 4,
                px: [ 3, 4, 3, 1 ],
                py: [ 14, 21, 19, 6 ],
                pz: [ 0, 0, 0, 1 ],
                nx: [ 10, 16, 4, 5 ],
                ny: [ 8, 1, 7, 6 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 10, 4, 3, 1 ],
                py: [ 5, 21, 19, 6 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 21, 10, 5, 11 ],
                ny: [ 4, 2, 3, 4 ],
                nz: [ 0, 1, 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 17 ],
                py: [ 3, 8 ],
                pz: [ 2, 0 ],
                nx: [ 17, 2 ],
                ny: [ 9, 22 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 12 ],
                py: [ 14, 20 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 12 ],
                py: [ 9, 20 ],
                pz: [ 0, -1 ],
                nx: [ 11, 23 ],
                ny: [ 8, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 11 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 8, 15 ],
                ny: [ 7, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 15 ],
                py: [ 13, 8 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 6, 7 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 15 ],
                py: [ 14, 8 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 12, 13 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 0, 1 ],
                pz: [ 2, 2 ],
                nx: [ 15, 4 ],
                ny: [ 5, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 17 ],
                py: [ 2, 2 ],
                pz: [ 0, 0 ],
                nx: [ 20, 8 ],
                ny: [ 3, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 6, 3, 2 ],
                py: [ 10, 6, 1 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 3, 2 ],
                ny: [ 3, 4, 2 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 4, 6 ],
                pz: [ 0, -1 ],
                nx: [ 6, 13 ],
                ny: [ 0, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 8, 2 ],
                ny: [ 7, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 1 ],
                py: [ 12, 4 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 5, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 15 ],
                py: [ 15, 14 ],
                pz: [ 0, -1 ],
                nx: [ 3, 11 ],
                ny: [ 4, 13 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 13, 9, 11, 14, 12 ],
                py: [ 0, 2, 0, 0, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 5, 4, 4, 3, 4 ],
                ny: [ 4, 4, 18, 7, 17 ],
                nz: [ 1, 1, 0, 1, 0 ]
            }, {
                size: 3,
                px: [ 13, 12, 11 ],
                py: [ 22, 22, 22 ],
                pz: [ 0, 0, 0 ],
                nx: [ 11, 12, 13 ],
                ny: [ 20, 20, 20 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 13 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 7, 6 ],
                ny: [ 8, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 23, 4 ],
                pz: [ 0, -1 ],
                nx: [ 5, 9 ],
                ny: [ 1, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 14, 14 ],
                py: [ 19, 19 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 10, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 23, 23 ],
                py: [ 11, 9 ],
                pz: [ 0, 0 ],
                nx: [ 23, 23 ],
                ny: [ 0, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 23, 3 ],
                py: [ 23, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 1 ],
                ny: [ 23, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 1 ],
                py: [ 7, 4 ],
                pz: [ 1, -1 ],
                nx: [ 19, 10 ],
                ny: [ 20, 9 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 16, 1 ],
                py: [ 9, 4 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 3, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 13, 13 ],
                pz: [ 0, 0 ],
                nx: [ 4, 5 ],
                ny: [ 4, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 19, 20, 20, 10, 10 ],
                py: [ 0, 0, 2, 0, 1 ],
                pz: [ 0, 0, 0, 1, 1 ],
                nx: [ 7, 7, 15, 4, 4 ],
                ny: [ 4, 13, 7, 4, 4 ],
                nz: [ 1, 0, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 23 ],
                py: [ 6, 5 ],
                pz: [ 0, -1 ],
                nx: [ 18, 18 ],
                ny: [ 17, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 9, 2 ],
                pz: [ 1, 2 ],
                nx: [ 14, 18 ],
                ny: [ 9, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 13 ],
                py: [ 16, 5 ],
                pz: [ 0, -1 ],
                nx: [ 5, 4 ],
                ny: [ 7, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 8, 10 ],
                pz: [ 1, 1 ],
                nx: [ 4, 1 ],
                ny: [ 5, 3 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 12, 11 ],
                py: [ 13, 4 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 14, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 20, 17 ],
                pz: [ 0, 0 ],
                nx: [ 12, 12 ],
                ny: [ 22, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 6, 7 ],
                pz: [ 1, -1 ],
                nx: [ 21, 21 ],
                ny: [ 13, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 10 ],
                py: [ 4, 23 ],
                pz: [ 2, 0 ],
                nx: [ 10, 2 ],
                ny: [ 21, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 3, 6 ],
                pz: [ 1, 0 ],
                nx: [ 11, 0 ],
                ny: [ 17, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 21, 9 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 18, 22 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 5 ],
                py: [ 18, 9 ],
                pz: [ 0, -1 ],
                nx: [ 6, 7 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 21, 4 ],
                py: [ 16, 3 ],
                pz: [ 0, -1 ],
                nx: [ 23, 23 ],
                ny: [ 16, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 0 ],
                py: [ 7, 4 ],
                pz: [ 1, -1 ],
                nx: [ 3, 8 ],
                ny: [ 7, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 15, 16 ],
                py: [ 11, 12 ],
                pz: [ 0, 0 ],
                nx: [ 8, 5 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 7, 5 ],
                pz: [ 0, 0 ],
                nx: [ 17, 17 ],
                ny: [ 11, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 8, 13, 12, 3, 3 ],
                py: [ 6, 23, 23, 3, 3 ],
                pz: [ 1, 0, 0, 2, -1 ],
                nx: [ 0, 1, 0, 0, 0 ],
                ny: [ 2, 13, 4, 5, 6 ],
                nz: [ 2, 0, 1, 1, 1 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 7, 8 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 1, 0 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 2, 12 ],
                py: [ 1, 7 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 12, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 1 ],
                py: [ 7, 4 ],
                pz: [ 1, 2 ],
                nx: [ 8, 0 ],
                ny: [ 15, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 14, 8 ],
                pz: [ 0, -1 ],
                nx: [ 2, 4 ],
                ny: [ 1, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 3, 1 ],
                pz: [ 2, -1 ],
                nx: [ 9, 9 ],
                ny: [ 5, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 2, 3 ],
                pz: [ 1, -1 ],
                nx: [ 11, 12 ],
                ny: [ 23, 23 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 22, 22 ],
                ny: [ 19, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 10, 2, 9 ],
                py: [ 20, 9, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 1, 10, 11 ],
                ny: [ 2, 11, 9 ],
                nz: [ 2, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 9, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 6 ],
                py: [ 7, 16 ],
                pz: [ 0, -1 ],
                nx: [ 17, 17 ],
                ny: [ 9, 6 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 8, 1, 9 ],
                py: [ 6, 3, 4 ],
                pz: [ 1, -1, -1 ],
                nx: [ 2, 9, 2 ],
                ny: [ 5, 13, 3 ],
                nz: [ 2, 0, 2 ]
            }, {
                size: 4,
                px: [ 10, 10, 9, 2 ],
                py: [ 12, 11, 2, 10 ],
                pz: [ 0, 0, -1, -1 ],
                nx: [ 6, 11, 3, 13 ],
                ny: [ 2, 4, 1, 4 ],
                nz: [ 1, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 4, 8 ],
                pz: [ 2, 1 ],
                nx: [ 4, 4 ],
                ny: [ 15, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 0 ],
                py: [ 4, 8 ],
                pz: [ 1, -1 ],
                nx: [ 13, 13 ],
                ny: [ 9, 10 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 8, 17 ],
                ny: [ 4, 12 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 15, 16 ],
                py: [ 11, 6 ],
                pz: [ 0, 0 ],
                nx: [ 16, 17 ],
                ny: [ 5, 12 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 11 ],
                py: [ 9, 7 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 9, 20 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 16, 11, 20 ],
                py: [ 4, 7, 23 ],
                pz: [ 0, -1, -1 ],
                nx: [ 8, 9, 4 ],
                ny: [ 4, 6, 4 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 18, 17 ],
                pz: [ 0, 0 ],
                nx: [ 9, 6 ],
                ny: [ 7, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 4, 4, 19 ],
                py: [ 3, 2, 9 ],
                pz: [ 2, 2, 0 ],
                nx: [ 2, 14, 11 ],
                ny: [ 5, 3, 9 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 19 ],
                py: [ 13, 9 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 13, 7 ],
                py: [ 19, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 5 ],
                ny: [ 6, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 9, 4, 4, 2 ],
                py: [ 13, 9, 8, 4 ],
                pz: [ 0, 1, 1, 2 ],
                nx: [ 13, 0, 0, 14 ],
                ny: [ 18, 11, 6, 1 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 15 ],
                py: [ 8, 10 ],
                pz: [ 0, 0 ],
                nx: [ 14, 11 ],
                ny: [ 9, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 8, 5 ],
                pz: [ 1, 2 ],
                nx: [ 4, 4 ],
                ny: [ 10, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 4, 6, 16, 14 ],
                py: [ 1, 1, 1, 7 ],
                pz: [ 2, 1, 0, 0 ],
                nx: [ 10, 1, 1, 2 ],
                ny: [ 8, 5, 10, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 4,
                px: [ 2, 3, 1, 2 ],
                py: [ 3, 1, 0, 2 ],
                pz: [ 0, 0, 1, 0 ],
                nx: [ 0, 0, 0, 0 ],
                ny: [ 1, 1, 2, 0 ],
                nz: [ 0, 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 6, 7 ],
                pz: [ 1, 1 ],
                nx: [ 8, 0 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 3, 0 ],
                pz: [ 0, 1 ],
                nx: [ 2, 2 ],
                ny: [ 1, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 6 ],
                py: [ 19, 18 ],
                pz: [ 0, 0 ],
                nx: [ 2, 10 ],
                ny: [ 5, 8 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 8, 5 ],
                py: [ 21, 11 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 11, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 9 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 8, 7 ],
                ny: [ 10, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 4, 18, 19, 16, 19 ],
                py: [ 3, 12, 12, 23, 13 ],
                pz: [ 2, 0, 0, 0, 0 ],
                nx: [ 2, 8, 3, 2, 2 ],
                ny: [ 4, 23, 10, 5, 5 ],
                nz: [ 2, 0, 1, 2, -1 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 6, 11 ],
                pz: [ 1, 0 ],
                nx: [ 8, 3 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 12 ],
                py: [ 4, 13 ],
                pz: [ 2, 0 ],
                nx: [ 10, 5 ],
                ny: [ 15, 21 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 9 ],
                py: [ 4, 23 ],
                pz: [ 2, 0 ],
                nx: [ 19, 4 ],
                ny: [ 9, 3 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 8, 15 ],
                pz: [ 1, 0 ],
                nx: [ 6, 1 ],
                ny: [ 18, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 0 ],
                py: [ 20, 3 ],
                pz: [ 0, -1 ],
                nx: [ 2, 10 ],
                ny: [ 5, 17 ],
                nz: [ 2, 0 ]
            }, {
                size: 3,
                px: [ 10, 6, 3 ],
                py: [ 2, 7, 3 ],
                pz: [ 0, -1, -1 ],
                nx: [ 5, 4, 2 ],
                ny: [ 9, 7, 2 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 14, 6 ],
                py: [ 12, 7 ],
                pz: [ 0, -1 ],
                nx: [ 2, 10 ],
                ny: [ 0, 1 ],
                nz: [ 2, 0 ]
            }, {
                size: 3,
                px: [ 10, 5, 1 ],
                py: [ 15, 5, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 9, 4, 18 ],
                ny: [ 2, 0, 4 ],
                nz: [ 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 17, 2 ],
                py: [ 12, 6 ],
                pz: [ 0, -1 ],
                nx: [ 8, 16 ],
                ny: [ 4, 11 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 7, 13, 4 ],
                py: [ 0, 0, 1 ],
                pz: [ 1, 0, -1 ],
                nx: [ 18, 4, 4 ],
                ny: [ 13, 2, 3 ],
                nz: [ 0, 2, 2 ]
            }, {
                size: 2,
                px: [ 1, 11 ],
                py: [ 10, 6 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 15, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 9, 12, 8 ],
                py: [ 8, 17, 11 ],
                pz: [ 1, 0, 1 ],
                nx: [ 12, 0, 20 ],
                ny: [ 16, 9, 13 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 5, 8 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 16, 3 ],
                py: [ 9, 8 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 11, 5 ],
                pz: [ 1, 2 ],
                nx: [ 11, 5 ],
                ny: [ 21, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 13 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 4, 4 ],
                ny: [ 5, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, 4 ],
                py: [ 4, 3 ],
                pz: [ 0, -1 ],
                nx: [ 12, 10 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 9, 7 ],
                ny: [ 9, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 5, 6, 6 ],
                py: [ 4, 4, 4 ],
                pz: [ 1, -1, -1 ],
                nx: [ 13, 8, 7 ],
                ny: [ 8, 3, 4 ],
                nz: [ 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 2, 11 ],
                pz: [ 1, 1 ],
                nx: [ 10, 11 ],
                ny: [ 22, 22 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 16, 9 ],
                py: [ 13, 7 ],
                pz: [ 0, 1 ],
                nx: [ 8, 14 ],
                ny: [ 4, 12 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 5 ],
                py: [ 13, 3 ],
                pz: [ 0, 2 ],
                nx: [ 16, 22 ],
                ny: [ 13, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 4, 4, 3, 4 ],
                py: [ 4, 3, 4, 5 ],
                pz: [ 2, 2, 2, 2 ],
                nx: [ 21, 5, 17, 7 ],
                ny: [ 0, 2, 5, 23 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 16 ],
                py: [ 0, 1 ],
                pz: [ 2, 0 ],
                nx: [ 15, 1 ],
                ny: [ 23, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 6 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 15, 6 ],
                ny: [ 2, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 13, 14, 5 ],
                py: [ 9, 15, 2 ],
                pz: [ 0, -1, -1 ],
                nx: [ 11, 1, 11 ],
                ny: [ 10, 3, 11 ],
                nz: [ 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 1 ],
                py: [ 6, 2 ],
                pz: [ 1, -1 ],
                nx: [ 1, 1 ],
                ny: [ 2, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 1, 0 ],
                pz: [ 1, 2 ],
                nx: [ 10, 4 ],
                ny: [ 2, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 8, 9 ],
                pz: [ 1, 1 ],
                nx: [ 23, 4 ],
                ny: [ 23, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 10, 2 ],
                pz: [ 0, -1 ],
                nx: [ 18, 10 ],
                ny: [ 0, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 20, 4 ],
                py: [ 7, 3 ],
                pz: [ 0, 2 ],
                nx: [ 8, 4 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 5, 4 ],
                pz: [ 1, -1 ],
                nx: [ 11, 11 ],
                ny: [ 5, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 14, 15, 16 ],
                py: [ 0, 0, 1 ],
                pz: [ 0, 0, 0 ],
                nx: [ 8, 5, 15 ],
                ny: [ 7, 2, 10 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 1, 1 ],
                pz: [ 2, -1 ],
                nx: [ 17, 18 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 8 ],
                py: [ 15, 7 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 5, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 0 ],
                py: [ 6, 17 ],
                pz: [ 1, -1 ],
                nx: [ 3, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 14, 8 ],
                py: [ 17, 9 ],
                pz: [ 0, -1 ],
                nx: [ 7, 6 ],
                ny: [ 8, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 15, 6 ],
                ny: [ 14, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 12 ],
                py: [ 8, 19 ],
                pz: [ 1, 0 ],
                nx: [ 13, 10 ],
                ny: [ 17, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 12 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 6, 11 ],
                ny: [ 3, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 2, 1, 6, 1 ],
                py: [ 10, 3, 23, 8 ],
                pz: [ 1, 2, 0, 1 ],
                nx: [ 17, 10, 23, 0 ],
                ny: [ 9, 2, 20, 3 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 2, 8 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 4, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 3, 16 ],
                py: [ 1, 6 ],
                pz: [ 2, 0 ],
                nx: [ 8, 4 ],
                ny: [ 2, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 3, 0 ],
                pz: [ 2, -1 ],
                nx: [ 9, 5 ],
                ny: [ 2, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 16 ],
                py: [ 5, 23 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 6, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 0, 0, 0, 0 ],
                py: [ 3, 2, 12, 5 ],
                pz: [ 2, 2, 0, 1 ],
                nx: [ 2, 3, 2, 13 ],
                ny: [ 5, 5, 2, 19 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 10, 11 ],
                pz: [ 0, 0 ],
                nx: [ 5, 5 ],
                ny: [ 1, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 0, 4 ],
                pz: [ 2, -1 ],
                nx: [ 2, 2 ],
                ny: [ 10, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 4,
                px: [ 16, 2, 8, 4 ],
                py: [ 14, 0, 11, 5 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 18, 14, 7, 7 ],
                ny: [ 13, 14, 8, 6 ],
                nz: [ 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 2, 2 ],
                pz: [ 0, 0 ],
                nx: [ 5, 14 ],
                ny: [ 4, 14 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 5 ],
                py: [ 11, 20 ],
                pz: [ 1, 0 ],
                nx: [ 11, 4 ],
                ny: [ 0, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 3, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 10, 4, 3 ],
                py: [ 5, 5, 3 ],
                pz: [ 0, -1, -1 ],
                nx: [ 11, 3, 10 ],
                ny: [ 2, 0, 2 ],
                nz: [ 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 15, 15 ],
                py: [ 1, 1 ],
                pz: [ 0, -1 ],
                nx: [ 7, 4 ],
                ny: [ 5, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 9, 5, 2, 6 ],
                py: [ 22, 8, 4, 19 ],
                pz: [ 0, 1, 2, 0 ],
                nx: [ 9, 5, 0, 3 ],
                ny: [ 20, 5, 22, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 1, 4, 10 ],
                py: [ 3, 9, 12 ],
                pz: [ 2, 1, 0 ],
                nx: [ 0, 10, 0 ],
                ny: [ 0, 5, 0 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 1, 6 ],
                py: [ 0, 7 ],
                pz: [ 0, -1 ],
                nx: [ 20, 19 ],
                ny: [ 14, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 14, 15 ],
                pz: [ 0, -1 ],
                nx: [ 2, 1 ],
                ny: [ 5, 7 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 7 ],
                py: [ 9, 11 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 17, 9 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 15, 10 ],
                ny: [ 9, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 0, 1 ],
                pz: [ 2, 2 ],
                nx: [ 9, 7 ],
                ny: [ 6, 17 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 3, 3, 15 ],
                py: [ 3, 4, 6 ],
                pz: [ 2, 1, 0 ],
                nx: [ 0, 2, 22 ],
                ny: [ 5, 8, 9 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 4,
                px: [ 15, 15, 15, 1 ],
                py: [ 12, 6, 6, 1 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 4, 7, 13, 4 ],
                ny: [ 4, 7, 12, 2 ],
                nz: [ 2, 1, 0, 2 ]
            }, {
                size: 2,
                px: [ 3, 15 ],
                py: [ 12, 6 ],
                pz: [ 0, -1 ],
                nx: [ 9, 1 ],
                ny: [ 14, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 12, 12 ],
                py: [ 11, 12 ],
                pz: [ 0, 0 ],
                nx: [ 9, 5 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 23, 6, 7 ],
                py: [ 23, 3, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 19, 16, 17 ],
                ny: [ 17, 14, 15 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 2, 7 ],
                pz: [ 1, -1 ],
                nx: [ 11, 23 ],
                ny: [ 10, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 0, 0, 0 ],
                py: [ 4, 9, 2 ],
                pz: [ 1, 0, 2 ],
                nx: [ 2, 0, 0 ],
                ny: [ 9, 2, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 0 ],
                py: [ 11, 9 ],
                pz: [ 0, -1 ],
                nx: [ 1, 0 ],
                ny: [ 18, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 10, 6 ],
                pz: [ 0, 1 ],
                nx: [ 10, 6 ],
                ny: [ 10, 18 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 12 ],
                py: [ 13, 13 ],
                pz: [ 0, -1 ],
                nx: [ 5, 11 ],
                ny: [ 1, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 19 ],
                py: [ 5, 22 ],
                pz: [ 1, -1 ],
                nx: [ 4, 12 ],
                ny: [ 1, 5 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 8, 6 ],
                py: [ 0, 0 ],
                pz: [ 0, 0 ],
                nx: [ 3, 12 ],
                ny: [ 0, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 6 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 12, 12 ],
                ny: [ 10, 11 ],
                nz: [ 0, 0 ]
            }, {
                size: 4,
                px: [ 3, 1, 3, 2 ],
                py: [ 20, 9, 21, 19 ],
                pz: [ 0, 1, 0, 0 ],
                nx: [ 20, 20, 5, 12 ],
                ny: [ 10, 15, 2, 10 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 1 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 5, 11, 11 ],
                py: [ 1, 3, 4 ],
                pz: [ 2, 1, 1 ],
                nx: [ 3, 3, 7 ],
                ny: [ 5, 5, 0 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 3,
                px: [ 8, 6, 7 ],
                py: [ 10, 5, 6 ],
                pz: [ 1, 1, 1 ],
                nx: [ 23, 3, 7 ],
                ny: [ 0, 5, 0 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 2, 14 ],
                pz: [ 1, -1 ],
                nx: [ 7, 3 ],
                ny: [ 12, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 13, 3 ],
                ny: [ 12, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 18 ],
                py: [ 11, 4 ],
                pz: [ 0, -1 ],
                nx: [ 23, 11 ],
                ny: [ 19, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 12, 3 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 11, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 0, 11 ],
                pz: [ 1, -1 ],
                nx: [ 3, 3 ],
                ny: [ 19, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 11, 11 ],
                pz: [ 1, -1 ],
                nx: [ 13, 15 ],
                ny: [ 6, 5 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 9, 9 ],
                pz: [ 0, -1 ],
                nx: [ 5, 11 ],
                ny: [ 1, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 6, 4, 8, 3 ],
                py: [ 6, 2, 4, 3 ],
                pz: [ 0, 2, 1, 2 ],
                nx: [ 7, 0, 15, 8 ],
                ny: [ 8, 8, 16, 7 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 22, 20 ],
                pz: [ 0, 0 ],
                nx: [ 2, 8 ],
                ny: [ 5, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 11, 0 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 3, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 12, 7 ],
                pz: [ 0, 1 ],
                nx: [ 3, 1 ],
                ny: [ 23, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 11, 5 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 10, 10 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 5, 4 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 2, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 3, 5 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 23, 22 ],
                pz: [ 0, 0 ],
                nx: [ 9, 0 ],
                ny: [ 7, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 16, 15 ],
                pz: [ 0, 0 ],
                nx: [ 0, 14 ],
                ny: [ 23, 12 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 8 ],
                py: [ 22, 0 ],
                pz: [ 0, -1 ],
                nx: [ 5, 3 ],
                ny: [ 0, 1 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 13, 13 ],
                py: [ 7, 7 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 17, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 20, 20 ],
                py: [ 15, 16 ],
                pz: [ 0, 0 ],
                nx: [ 7, 3 ],
                ny: [ 9, 17 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 10, 12, 11, 13, 11 ],
                py: [ 2, 2, 1, 2, 2 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 10, 18, 21, 21, 19 ],
                ny: [ 3, 1, 13, 11, 2 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 16, 3 ],
                py: [ 6, 1 ],
                pz: [ 0, 2 ],
                nx: [ 15, 18 ],
                ny: [ 8, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 19, 3 ],
                py: [ 8, 1 ],
                pz: [ 0, -1 ],
                nx: [ 9, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 15, 18 ],
                pz: [ 0, -1 ],
                nx: [ 3, 3 ],
                ny: [ 0, 1 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 2, 3 ],
                pz: [ 2, 2 ],
                nx: [ 7, 3 ],
                ny: [ 11, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 17, 9 ],
                pz: [ 0, -1 ],
                nx: [ 11, 10 ],
                ny: [ 15, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 10 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 3, 4 ],
                pz: [ 0, -1 ],
                nx: [ 9, 10 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 23, 11 ],
                py: [ 13, 10 ],
                pz: [ 0, 1 ],
                nx: [ 14, 7 ],
                ny: [ 5, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 5, 4 ],
                pz: [ 2, 2 ],
                nx: [ 9, 8 ],
                ny: [ 3, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 4, 15 ],
                py: [ 5, 4, 7 ],
                pz: [ 0, -1, -1 ],
                nx: [ 3, 4, 2 ],
                ny: [ 7, 11, 5 ],
                nz: [ 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 15, 4 ],
                pz: [ 0, -1 ],
                nx: [ 5, 9 ],
                ny: [ 7, 15 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 7 ],
                py: [ 0, 1 ],
                pz: [ 1, -1 ],
                nx: [ 11, 11 ],
                ny: [ 8, 7 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 1, 1, 1, 1, 1 ],
                py: [ 11, 12, 10, 9, 9 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 5, 8, 16, 11 ],
                ny: [ 4, 3, 8, 8, 6 ],
                nz: [ 1, 1, 0, 0, 0 ]
            } ],
            alpha: [ -1.059083, 1.059083, -.7846122, .7846122, -.445116, .445116, -.4483277, .4483277, -.3905999, .3905999, -.378925, .378925, -.387461, .387461, -.3110541, .3110541, -.3565056, .3565056, -.3812617, .3812617, -.3325142, .3325142, -.2787282, .2787282, -.3238869, .3238869, -.2993499, .2993499, -.2807737, .2807737, -.2855285, .2855285, -.227755, .227755, -.2031261, .2031261, -.2071574, .2071574, -.2534142, .2534142, -.2266871, .2266871, -.2229078, .2229078, -.2716325, .2716325, -.3046938, .3046938, -.2271601, .2271601, -.1987651, .1987651, -.1953664, .1953664, -.2178737, .2178737, -.2285148, .2285148, -.1891073, .1891073, -.2926469, .2926469, -.2094783, .2094783, -.1478037, .1478037, -.1707579, .1707579, -.146439, .146439, -.2462321, .2462321, -.2319978, .2319978, -.1781651, .1781651, -.1471349, .1471349, -.1953006, .1953006, -.2145108, .2145108, -.1567881, .1567881, -.2024617, .2024617, -.1883198, .1883198, -.1996976, .1996976, -.129233, .129233, -.2142242, .2142242, -.2473748, .2473748, -.1880902, .1880902, -.1874572, .1874572, -.1495984, .1495984, -.1608525, .1608525, -.1698402, .1698402, -.1898871, .1898871, -.1350238, .1350238, -.1727032, .1727032, -.1593352, .1593352, -.1476968, .1476968, -.1428431, .1428431, -.1766261, .1766261, -.1453226, .1453226, -.1929885, .1929885, -.1337582, .1337582, -.1629078, .1629078, -.09973085, .09973085, -.117276, .117276, -.1399242, .1399242, -.1613189, .1613189, -.1145695, .1145695, -.1191093, .1191093, -.12259, .12259, -.1641114, .1641114, -.1419878, .1419878, -.2183465, .2183465, -.1566968, .1566968, -.1288216, .1288216, -.1422831, .1422831, -.2000107, .2000107, -.1817265, .1817265, -.1793796, .1793796, -.1428926, .1428926, -.1182032, .1182032, -.1150421, .1150421, -.1336584, .1336584, -.1656178, .1656178, -.1386549, .1386549, -.1387461, .1387461, -.1313023, .1313023, -.1360391, .1360391, -.1305505, .1305505, -.1323399, .1323399, -.1502891, .1502891, -.1488859, .1488859, -.1126628, .1126628, -.1233623, .1233623, -.1702106, .1702106, -.1629639, .1629639, -.1337706, .1337706, -.1290384, .1290384, -.1165519, .1165519, -.1412778, .1412778, -.1470204, .1470204, -.221378, .221378, -.1472619, .1472619, -.1357071, .1357071, -.1416513, .1416513, -.1050208, .1050208, -.1480033, .1480033, -.1899871, .1899871, -.1466249, .1466249, -.1076952, .1076952, -.1035096, .1035096, -.156697, .156697, -.1364115, .1364115, -.1512889, .1512889, -.1252851, .1252851, -.12063, .12063, -.1059134, .1059134, -.1140398, .1140398, -.1359912, .1359912, -.1231201, .1231201, -.1231867, .1231867, -.09789923, .09789923, -.1590213, .1590213, -.1002206, .1002206, -.1518339, .1518339, -.1055203, .1055203, -.1012579, .1012579, -.1094956, .1094956, -.1429592, .1429592, -.1108838, .1108838, -.1116475, .1116475, -.1735371, .1735371, -.1067758, .1067758, -.1290406, .1290406, -.1156822, .1156822, -.09668217, .09668217, -.1170053, .1170053, -.1252092, .1252092, -.1135158, .1135158, -.1105896, .1105896, -.1038175, .1038175, -.1210459, .1210459, -.1078878, .1078878, -.1050808, .1050808, -.1428227, .1428227, -.16646, .16646, -.1013508, .1013508, -.120693, .120693, -.1088972, .1088972, -.1381026, .1381026, -.1109115, .1109115, -.07921549, .07921549, -.1057832, .1057832, -.09385827, .09385827, -.1486035, .1486035, -.1247401, .1247401, -.09451327, .09451327, -.1272805, .1272805, -.09616206, .09616206, -.09051084, .09051084, -.1138458, .1138458, -.1047581, .1047581, -.1382394, .1382394, -.1122203, .1122203, -.1052936, .1052936, -.1239318, .1239318, -.1241439, .1241439, -.1259012, .1259012, -.1211701, .1211701, -.1344131, .1344131, -.1127778, .1127778, -.1609745, .1609745, -.1901382, .1901382, -.1618962, .1618962, -.1230398, .1230398, -.1319311, .1319311, -.143141, .143141, -.1143306, .1143306, -.09390938, .09390938, -.1154161, .1154161, -.1141205, .1141205, -.1098048, .1098048, -.08870072, .08870072, -.1122444, .1122444, -.1114147, .1114147, -.118571, .118571, -.1107775, .1107775, -.1259167, .1259167, -.1105176, .1105176, -.1020691, .1020691, -.09607863, .09607863, -.095737, .095737, -.1054349, .1054349, -.1137856, .1137856, -.1192043, .1192043, -.1113264, .1113264, -.1093137, .1093137, -.1010919, .1010919, -.09625901, .09625901, -.09338459, .09338459, -.1142944, .1142944, -.1038877, .1038877, -.09772862, .09772862, -.1375298, .1375298, -.1394776, .1394776, -.09454765, .09454765, -.1203246, .1203246, -.08684943, .08684943, -.1135622, .1135622, -.1058181, .1058181, -.1082152, .1082152, -.1411355, .1411355, -.09978846, .09978846, -.1057874, .1057874, -.1415366, .1415366, -.09981014, .09981014, -.09261151, .09261151, -.1737173, .1737173, -.1580335, .1580335, -.09594668, .09594668, -.09336013, .09336013, -.1102373, .1102373, -.08546557, .08546557, -.09945057, .09945057, -.1146358, .1146358, -.1324734, .1324734, -.1422296, .1422296, -.0993799, .0993799, -.08381049, .08381049, -.1270714, .1270714, -.1091738, .1091738, -.1314881, .1314881, -.1085159, .1085159, -.09247554, .09247554, -.08121645, .08121645, -.1059589, .1059589, -.08307793, .08307793, -.1033103, .1033103, -.1056706, .1056706, -.1032803, .1032803, -.126684, .126684, -.09341601, .09341601, -.0768357, .0768357, -.103053, .103053, -.1051872, .1051872, -.09114946, .09114946, -.1329341, .1329341, -.0927083, .0927083, -.114175, .114175, -.09889318, .09889318, -.08856485, .08856485, -.105421, .105421, -.1092704, .1092704, -.08729085, .08729085, -.1141057, .1141057, -.1530774, .1530774, -.0812972, .0812972, -.1143335, .1143335, -.1175777, .1175777, -.1371729, .1371729, -.1394356, .1394356, -.1016308, .1016308, -.1125547, .1125547, -.096726, .096726, -.1036631, .1036631, -.08702514, .08702514, -.1264807, .1264807, -.1465688, .1465688, -.08781464, .08781464, -.08552605, .08552605, -.1145072, .1145072, -.1378489, .1378489, -.1013312, .1013312, -.1020083, .1020083, -.1015816, .1015816, -.08407101, .08407101, -.08296485, .08296485, -.08033655, .08033655, -.09003615, .09003615, -.07504954, .07504954, -.1224941, .1224941, -.09347814, .09347814, -.09555575, .09555575, -.09810025, .09810025, -.1237068, .1237068, -.1283586, .1283586, -.1082763, .1082763, -.1018145, .1018145, -.1175161, .1175161, -.1252279, .1252279, -.1370559, .1370559, -.09941339, .09941339, -.08506938, .08506938, -.1260902, .1260902, -.1014152, .1014152, -.09728694, .09728694, -.0937491, .0937491, -.09587429, .09587429, -.09516036, .09516036, -.07375173, .07375173, -.09332487, .09332487, -.09020733, .09020733, -.1133381, .1133381, -.154218, .154218, -.09692168, .09692168, -.07960904, .07960904, -.08947089, .08947089, -.07830286, .07830286, -.0990005, .0990005, -.1041293, .1041293, -.09572501, .09572501, -.08230575, .08230575, -.09194901, .09194901, -.1076971, .1076971, -.1027782, .1027782, -.1028538, .1028538, -.1013992, .1013992, -.09087585, .09087585, -.1100706, .1100706, -.1094934, .1094934, -.1107879, .1107879, -.1026915, .1026915, -.1017572, .1017572, -.07984776, .07984776, -.09015413, .09015413, -.129987, .129987, -.09164982, .09164982, -.1062788, .1062788, -.1160203, .1160203, -.08858603, .08858603, -.09762964, .09762964, -.1070694, .1070694, -.09549046, .09549046, -.1533034, .1533034, -.08663316, .08663316, -.09303018, .09303018, -.09853582, .09853582, -.09733371, .09733371, -.1048555, .1048555, -.09056041, .09056041, -.07552283, .07552283, -.08780631, .08780631, -.1123953, .1123953, -.1452948, .1452948, -.1156423, .1156423, -.08701142, .08701142, -.09713334, .09713334, -.09970888, .09970888, -.08614129, .08614129, -.07459861, .07459861, -.09253517, .09253517, -.09570092, .09570092, -.09485535, .09485535, -.1148365, .1148365, -.1063193, .1063193, -.09986686, .09986686, -.07523412, .07523412, -.1005881, .1005881, -.08249716, .08249716, -.1055866, .1055866, -.134305, .134305, -.1371056, .1371056, -.09604689, .09604689, -.1224268, .1224268, -.09211478, .09211478, -.1108371, .1108371, -.1100547, .1100547, -.0893897, .0893897, -.08655951, .08655951, -.07085816, .07085816, -.08101028, .08101028, -.08338046, .08338046, -.08309588, .08309588, -.09090584, .09090584, -.08124564, .08124564, -.09367843, .09367843, -.1011747, .1011747, -.09885045, .09885045, -.08944266, .08944266, -.08453859, .08453859, -.08308847, .08308847, -.136728, .136728, -.1295144, .1295144, -.1063965, .1063965, -.07752328, .07752328, -.09681524, .09681524, -.07862345, .07862345, -.08767746, .08767746, -.09198041, .09198041, -.09686489, .09686489 ]
        }, {
            count: 564,
            threshold: -4.517456,
            feature: [ {
                size: 5,
                px: [ 15, 9, 8, 12, 11 ],
                py: [ 3, 6, 3, 0, 8 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 6, 14, 9, 22, 23 ],
                ny: [ 8, 7, 8, 17, 3 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 12, 13, 11, 14, 12 ],
                py: [ 9, 4, 4, 4, 5 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 6, 10, 4, 15 ],
                ny: [ 3, 8, 7, 10, 9 ],
                nz: [ 1, 1, 0, 1, 0 ]
            }, {
                size: 5,
                px: [ 7, 5, 6, 8, 8 ],
                py: [ 2, 13, 2, 1, 1 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 3, 0, 4, 1, 0 ],
                ny: [ 4, 3, 10, 3, 13 ],
                nz: [ 1, 1, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 11, 2, 2, 11, 16 ],
                py: [ 9, 4, 2, 7, 11 ],
                pz: [ 0, 2, 2, 0, 0 ],
                nx: [ 8, 4, 1, 14, 0 ],
                ny: [ 4, 4, 16, 5, 13 ],
                nz: [ 1, 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 14, 14 ],
                py: [ 18, 18 ],
                pz: [ 0, -1 ],
                nx: [ 8, 13 ],
                ny: [ 10, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 15, 17, 16, 8, 18 ],
                py: [ 1, 2, 1, 0, 2 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 21, 22, 22, 22, 22 ],
                ny: [ 1, 5, 3, 4, 2 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 4 ],
                py: [ 23, 3 ],
                pz: [ 0, 2 ],
                nx: [ 7, 3 ],
                ny: [ 10, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 6, 4, 3, 11 ],
                py: [ 10, 11, 8, 3, 8 ],
                pz: [ 1, 0, 1, 1, 0 ],
                nx: [ 3, 5, 6, 3, 0 ],
                ny: [ 4, 9, 9, 9, 0 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 3,
                px: [ 11, 11, 2 ],
                py: [ 11, 13, 16 ],
                pz: [ 0, 0, -1 ],
                nx: [ 10, 10, 9 ],
                ny: [ 10, 11, 14 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 4, 5 ],
                ny: [ 11, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 10, 11, 13, 3, 12 ],
                py: [ 3, 4, 3, 0, 1 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 14, 18, 20, 19, 15 ],
                ny: [ 13, 1, 15, 2, 18 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 20, 14, 10, 12, 12 ],
                py: [ 12, 12, 4, 10, 11 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 9, 2, 9, 9, 9 ],
                ny: [ 4, 12, 5, 9, 14 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 3, 3, 3, 4, 2 ],
                py: [ 15, 16, 14, 21, 12 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 20, 10, 5, 21, 21 ],
                nz: [ 0, 1, 2, 0, -1 ]
            }, {
                size: 2,
                px: [ 18, 8 ],
                py: [ 16, 7 ],
                pz: [ 0, 1 ],
                nx: [ 14, 0 ],
                ny: [ 8, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 12, 4, 16, 1 ],
                py: [ 14, 3, 8, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 14, 10, 20, 13 ],
                ny: [ 13, 5, 16, 9 ],
                nz: [ 0, 1, 0, 0 ]
            }, {
                size: 5,
                px: [ 3, 8, 2, 3, 3 ],
                py: [ 7, 2, 1, 2, 4 ],
                pz: [ 1, -1, -1, -1, -1 ],
                nx: [ 1, 9, 2, 1, 1 ],
                ny: [ 3, 14, 9, 7, 2 ],
                nz: [ 1, 0, 1, 1, 1 ]
            }, {
                size: 5,
                px: [ 4, 1, 3, 2, 3 ],
                py: [ 2, 1, 2, 4, 3 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 3, 1, 2, 0, 0 ],
                nz: [ 0, 1, 0, 2, -1 ]
            }, {
                size: 4,
                px: [ 4, 8, 7, 9 ],
                py: [ 6, 11, 11, 10 ],
                pz: [ 1, 0, 0, 0 ],
                nx: [ 3, 10, 2, 20 ],
                ny: [ 4, 4, 4, 8 ],
                nz: [ 1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 1, 8 ],
                py: [ 3, 11 ],
                pz: [ 2, -1 ],
                nx: [ 8, 2 ],
                ny: [ 15, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 17, 0 ],
                py: [ 13, 10 ],
                pz: [ 0, -1 ],
                nx: [ 14, 14 ],
                ny: [ 11, 10 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 22, 22, 22, 5, 22 ],
                py: [ 16, 18, 17, 2, 15 ],
                pz: [ 0, 0, 0, 2, 0 ],
                nx: [ 8, 4, 15, 6, 6 ],
                ny: [ 4, 2, 7, 11, 11 ],
                nz: [ 1, 2, 0, 1, -1 ]
            }, {
                size: 5,
                px: [ 16, 9, 8, 17, 15 ],
                py: [ 12, 6, 6, 22, 12 ],
                pz: [ 0, 1, 1, 0, 0 ],
                nx: [ 11, 23, 23, 23, 22 ],
                ny: [ 11, 23, 22, 21, 23 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 5,
                px: [ 5, 2, 4, 4, 9 ],
                py: [ 22, 3, 15, 20, 18 ],
                pz: [ 0, 2, 0, 0, 0 ],
                nx: [ 9, 4, 23, 7, 22 ],
                ny: [ 8, 4, 22, 19, 23 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 5,
                px: [ 8, 6, 9, 7, 3 ],
                py: [ 3, 3, 3, 3, 1 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 5, 5, 4, 4, 4 ],
                ny: [ 0, 1, 1, 2, 0 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 3, 3 ],
                pz: [ 2, 2 ],
                nx: [ 3, 6 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 1, 1, 0, 1, 0 ],
                py: [ 17, 15, 6, 16, 10 ],
                pz: [ 0, 0, 1, 0, 0 ],
                nx: [ 4, 4, 7, 4, 8 ],
                ny: [ 2, 5, 9, 4, 4 ],
                nz: [ 2, 2, 1, 2, -1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 13, 13 ],
                py: [ 10, 9, 11, 13, 13 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 4, 3, 3, 5, 3 ],
                ny: [ 21, 18, 17, 23, 16 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 4,
                px: [ 5, 6, 5, 9 ],
                py: [ 13, 7, 9, 23 ],
                pz: [ 0, 0, 1, 0 ],
                nx: [ 6, 15, 7, 5 ],
                ny: [ 9, 20, 7, 23 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 4, 2 ],
                pz: [ 1, 2 ],
                nx: [ 8, 23 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 7 ],
                py: [ 18, 0 ],
                pz: [ 0, 0 ],
                nx: [ 5, 7 ],
                ny: [ 8, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 6 ],
                py: [ 11, 16 ],
                pz: [ 1, 0 ],
                nx: [ 10, 9 ],
                ny: [ 16, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 11, 11, 11, 11 ],
                py: [ 11, 10, 12, 13 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 13, 13, 13, 9 ],
                ny: [ 11, 9, 10, 4 ],
                nz: [ 0, 0, 0, 1 ]
            }, {
                size: 4,
                px: [ 12, 6, 7, 6 ],
                py: [ 7, 11, 8, 4 ],
                pz: [ 0, 1, 1, 1 ],
                nx: [ 10, 0, 19, 7 ],
                ny: [ 21, 3, 12, 11 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 9, 1 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 19, 19 ],
                py: [ 21, 20 ],
                pz: [ 0, 0 ],
                nx: [ 7, 7 ],
                ny: [ 3, 13 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 12, 9, 13, 11, 5 ],
                py: [ 0, 2, 2, 0, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 6, 4, 5, 5, 5 ],
                ny: [ 1, 3, 5, 2, 6 ],
                nz: [ 0, 0, 1, 0, 1 ]
            }, {
                size: 5,
                px: [ 4, 3, 2, 5, 7 ],
                py: [ 11, 3, 3, 7, 17 ],
                pz: [ 1, 2, 2, 0, 0 ],
                nx: [ 23, 5, 11, 5, 5 ],
                ny: [ 0, 4, 10, 2, 6 ],
                nz: [ 0, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 20, 17 ],
                py: [ 12, 3 ],
                pz: [ 0, -1 ],
                nx: [ 20, 19 ],
                ny: [ 21, 23 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 12, 8 ],
                pz: [ 0, 0 ],
                nx: [ 2, 8 ],
                ny: [ 2, 16 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 16, 5 ],
                py: [ 4, 5 ],
                pz: [ 0, -1 ],
                nx: [ 7, 8 ],
                ny: [ 9, 1 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 0, 1 ],
                pz: [ 1, 1 ],
                nx: [ 1, 8 ],
                ny: [ 5, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 12, 10 ],
                pz: [ 0, 1 ],
                nx: [ 2, 20 ],
                ny: [ 23, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 11, 0, 0, 2 ],
                py: [ 14, 3, 9, 22 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 13, 14, 7, 3 ],
                ny: [ 6, 7, 11, 1 ],
                nz: [ 0, 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 14, 0 ],
                py: [ 2, 3 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 4, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 23, 11 ],
                py: [ 18, 11 ],
                pz: [ 0, 1 ],
                nx: [ 3, 2 ],
                ny: [ 1, 21 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 17, 14 ],
                pz: [ 0, -1 ],
                nx: [ 4, 5 ],
                ny: [ 10, 8 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 18 ],
                py: [ 7, 14 ],
                pz: [ 1, 0 ],
                nx: [ 18, 9 ],
                ny: [ 17, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 8 ],
                py: [ 4, 22 ],
                pz: [ 2, 0 ],
                nx: [ 4, 3 ],
                ny: [ 10, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 22 ],
                py: [ 4, 9 ],
                pz: [ 2, -1 ],
                nx: [ 11, 23 ],
                ny: [ 8, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 23, 5, 5 ],
                py: [ 8, 2, 1 ],
                pz: [ 0, 2, 2 ],
                nx: [ 10, 10, 2 ],
                ny: [ 4, 4, 2 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 14, 23 ],
                pz: [ 0, -1 ],
                nx: [ 3, 11 ],
                ny: [ 4, 13 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 1 ],
                py: [ 19, 13 ],
                pz: [ 0, -1 ],
                nx: [ 9, 12 ],
                ny: [ 10, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 11, 10 ],
                pz: [ 1, 1 ],
                nx: [ 4, 1 ],
                ny: [ 5, 11 ],
                nz: [ 2, -1 ]
            }, {
                size: 5,
                px: [ 9, 12, 4, 8, 8 ],
                py: [ 3, 5, 2, 9, 8 ],
                pz: [ 1, 0, 2, 1, 1 ],
                nx: [ 23, 23, 23, 23, 23 ],
                ny: [ 3, 4, 6, 5, 5 ],
                nz: [ 0, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 9 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 13, 13, 13, 7, 7 ],
                py: [ 11, 10, 9, 6, 6 ],
                pz: [ 0, 0, 0, 1, -1 ],
                nx: [ 5, 5, 15, 5, 2 ],
                ny: [ 5, 15, 9, 9, 1 ],
                nz: [ 0, 0, 0, 1, 2 ]
            }, {
                size: 2,
                px: [ 19, 7 ],
                py: [ 21, 7 ],
                pz: [ 0, 1 ],
                nx: [ 14, 10 ],
                ny: [ 15, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 21, 0 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 0 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 3, 2 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 0 ],
                py: [ 4, 0 ],
                pz: [ 0, -1 ],
                nx: [ 5, 12 ],
                ny: [ 0, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 5,
                px: [ 14, 16, 12, 15, 13 ],
                py: [ 0, 1, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 4, 8, 8, 4, 9 ],
                ny: [ 2, 3, 4, 1, 3 ],
                nz: [ 2, 1, 1, 2, -1 ]
            }, {
                size: 3,
                px: [ 4, 17, 2 ],
                py: [ 11, 14, 1 ],
                pz: [ 1, -1, -1 ],
                nx: [ 9, 8, 17 ],
                ny: [ 1, 4, 0 ],
                nz: [ 1, 1, 0 ]
            }, {
                size: 2,
                px: [ 18, 9 ],
                py: [ 17, 7 ],
                pz: [ 0, 1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 3, 0 ],
                pz: [ 1, 2 ],
                nx: [ 10, 11 ],
                ny: [ 6, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 21, 21, 21, 21, 20 ],
                py: [ 17, 16, 19, 18, 21 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 0, 0, 0, 0, 0 ],
                ny: [ 4, 9, 11, 6, 6 ],
                nz: [ 1, 0, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 0 ],
                py: [ 7, 1 ],
                pz: [ 0, -1 ],
                nx: [ 8, 11 ],
                ny: [ 4, 17 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 13, 0, 0, 0 ],
                py: [ 15, 0, 0, 0 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 3, 7, 4, 6 ],
                ny: [ 2, 7, 5, 9 ],
                nz: [ 2, 1, 2, 1 ]
            }, {
                size: 2,
                px: [ 2, 9 ],
                py: [ 3, 12 ],
                pz: [ 2, 0 ],
                nx: [ 2, 0 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 6, 1 ],
                pz: [ 1, -1 ],
                nx: [ 20, 21 ],
                ny: [ 19, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 5, 22, 22, 11, 22 ],
                py: [ 1, 4, 3, 3, 2 ],
                pz: [ 2, 0, 0, 1, -1 ],
                nx: [ 7, 13, 14, 8, 15 ],
                ny: [ 3, 6, 6, 3, 7 ],
                nz: [ 1, 0, 0, 1, 0 ]
            }, {
                size: 2,
                px: [ 12, 19 ],
                py: [ 5, 15 ],
                pz: [ 0, -1 ],
                nx: [ 16, 4 ],
                ny: [ 8, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 11, 9 ],
                pz: [ 1, 1 ],
                nx: [ 5, 0 ],
                ny: [ 3, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 8, 3, 4, 2 ],
                py: [ 6, 7, 5, 3 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 13, 14, 11, 11 ],
                ny: [ 11, 13, 3, 5 ],
                nz: [ 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 5, 6 ],
                pz: [ 0, 0 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 9 ],
                py: [ 6, 17 ],
                pz: [ 1, 0 ],
                nx: [ 9, 4 ],
                ny: [ 15, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 6, 3, 6 ],
                py: [ 6, 3, 5 ],
                pz: [ 1, 2, 1 ],
                nx: [ 11, 10, 4 ],
                ny: [ 8, 11, 5 ],
                nz: [ 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 0, 1 ],
                pz: [ 1, -1 ],
                nx: [ 19, 17 ],
                ny: [ 1, 0 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 21, 20 ],
                py: [ 4, 1 ],
                pz: [ 0, 0 ],
                nx: [ 11, 5 ],
                ny: [ 0, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 8, 9 ],
                ny: [ 4, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 13, 12 ],
                ny: [ 6, 5 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 3, 11 ],
                pz: [ 1, -1 ],
                nx: [ 3, 17 ],
                ny: [ 1, 3 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 3, 3 ],
                ny: [ 1, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 3, 18 ],
                py: [ 2, 7 ],
                pz: [ 2, 0 ],
                nx: [ 8, 1 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 6 ],
                py: [ 8, 2 ],
                pz: [ 0, 1 ],
                nx: [ 8, 9 ],
                ny: [ 4, 19 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 12, 3, 14 ],
                py: [ 13, 3, 15 ],
                pz: [ 0, -1, -1 ],
                nx: [ 0, 1, 0 ],
                ny: [ 16, 18, 15 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 1 ],
                py: [ 3, 4 ],
                pz: [ 2, -1 ],
                nx: [ 7, 14 ],
                ny: [ 10, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 16 ],
                py: [ 6, 10 ],
                pz: [ 1, 0 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 11 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 7, 23 ],
                ny: [ 3, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 4, 3, 4, 4 ],
                py: [ 1, 2, 0, 1, 1 ],
                pz: [ 1, 0, 1, 0, -1 ],
                nx: [ 11, 9, 4, 9, 5 ],
                ny: [ 6, 5, 3, 6, 3 ],
                nz: [ 0, 0, 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 0 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 2, 5 ],
                ny: [ 2, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 6, 7 ],
                py: [ 7, 12 ],
                pz: [ 0, 0 ],
                nx: [ 3, 22 ],
                ny: [ 3, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 1, 1 ],
                pz: [ 0, 1 ],
                nx: [ 2, 6 ],
                ny: [ 2, 21 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 13, 1 ],
                py: [ 11, 6 ],
                pz: [ 0, -1 ],
                nx: [ 12, 6 ],
                ny: [ 5, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 5,
                px: [ 10, 5, 11, 10, 10 ],
                py: [ 4, 3, 4, 6, 5 ],
                pz: [ 0, 1, 0, 0, 0 ],
                nx: [ 4, 7, 13, 8, 4 ],
                ny: [ 2, 8, 9, 4, 4 ],
                nz: [ 2, 1, 0, 1, -1 ]
            }, {
                size: 4,
                px: [ 7, 8, 7, 8 ],
                py: [ 11, 3, 4, 7 ],
                pz: [ 1, 1, 1, 1 ],
                nx: [ 0, 7, 3, 8 ],
                ny: [ 0, 12, 2, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 4, 7 ],
                pz: [ 2, 1 ],
                nx: [ 10, 1 ],
                ny: [ 7, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 19, 5 ],
                pz: [ 0, -1 ],
                nx: [ 11, 5 ],
                ny: [ 17, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 11, 12 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 7, 5 ],
                ny: [ 8, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 4, 8, 4 ],
                py: [ 2, 9, 4 ],
                pz: [ 2, 1, 2 ],
                nx: [ 3, 19, 3 ],
                ny: [ 1, 16, 5 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 0, 1 ],
                pz: [ 1, 0 ],
                nx: [ 2, 3 ],
                ny: [ 15, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 4 ],
                py: [ 2, 0 ],
                pz: [ 2, -1 ],
                nx: [ 9, 16 ],
                ny: [ 5, 11 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 14, 15 ],
                py: [ 23, 16 ],
                pz: [ 0, 0 ],
                nx: [ 13, 3 ],
                ny: [ 15, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 0, 1 ],
                pz: [ 1, -1 ],
                nx: [ 3, 7 ],
                ny: [ 0, 0 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 12, 12 ],
                pz: [ 0, 0 ],
                nx: [ 4, 8 ],
                ny: [ 5, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 4, 1, 2, 4, 5 ],
                py: [ 1, 0, 0, 0, 6 ],
                pz: [ 0, 2, 1, 0, 1 ],
                nx: [ 4, 8, 7, 8, 6 ],
                ny: [ 4, 10, 11, 4, 4 ],
                nz: [ 1, 0, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 12 ],
                py: [ 15, 8 ],
                pz: [ 0, -1 ],
                nx: [ 7, 15 ],
                ny: [ 16, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 4, 6 ],
                ny: [ 2, 8 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 14, 4 ],
                py: [ 19, 23 ],
                pz: [ 0, -1 ],
                nx: [ 7, 14 ],
                ny: [ 11, 18 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 7, 4 ],
                pz: [ 1, 2 ],
                nx: [ 2, 22 ],
                ny: [ 5, 19 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 8, 15 ],
                py: [ 7, 17 ],
                pz: [ 1, 0 ],
                nx: [ 14, 4 ],
                ny: [ 15, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 10, 11 ],
                py: [ 9, 8 ],
                pz: [ 1, -1 ],
                nx: [ 23, 5 ],
                ny: [ 19, 4 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 11, 1 ],
                py: [ 7, 9 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 14, 7 ],
                py: [ 6, 9 ],
                pz: [ 0, 0 ],
                nx: [ 4, 11 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 0, 5 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 0, 4 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 10, 22 ],
                py: [ 5, 20 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 3,
                px: [ 23, 11, 11 ],
                py: [ 17, 9, 8 ],
                pz: [ 0, 1, 1 ],
                nx: [ 13, 8, 8 ],
                ny: [ 5, 3, 3 ],
                nz: [ 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 18, 9 ],
                py: [ 0, 21 ],
                pz: [ 0, -1 ],
                nx: [ 10, 10 ],
                ny: [ 2, 1 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 11, 10, 11, 11, 11 ],
                py: [ 11, 13, 10, 12, 12 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 11, 13, 12, 3, 8 ],
                ny: [ 5, 5, 5, 1, 10 ],
                nz: [ 0, 0, 0, 2, 0 ]
            }, {
                size: 2,
                px: [ 7, 8 ],
                py: [ 11, 11 ],
                pz: [ 0, 0 ],
                nx: [ 9, 16 ],
                ny: [ 9, 19 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 18 ],
                py: [ 23, 7 ],
                pz: [ 0, -1 ],
                nx: [ 21, 21 ],
                ny: [ 7, 13 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 7, 8 ],
                pz: [ 1, 1 ],
                nx: [ 5, 21 ],
                ny: [ 9, 13 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 17, 8 ],
                py: [ 22, 8 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 2, 5, 8, 8, 4 ],
                py: [ 3, 9, 13, 23, 7 ],
                pz: [ 2, 1, 0, 0, 1 ],
                nx: [ 9, 17, 18, 19, 20 ],
                ny: [ 0, 0, 0, 2, 3 ],
                nz: [ 1, 0, 0, 0, 0 ]
            }, {
                size: 3,
                px: [ 16, 15, 2 ],
                py: [ 3, 3, 13 ],
                pz: [ 0, 0, -1 ],
                nx: [ 4, 8, 4 ],
                ny: [ 3, 6, 2 ],
                nz: [ 2, 1, 2 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 3, 7 ],
                pz: [ 2, 1 ],
                nx: [ 15, 1 ],
                ny: [ 15, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 3 ],
                pz: [ 2, 1 ],
                nx: [ 3, 18 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 3, 0 ],
                ny: [ 5, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 10, 0 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 2, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 2, 0 ],
                py: [ 8, 3 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 14 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 13, 18 ],
                py: [ 14, 14 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 15, 13 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 3, 2, 2 ],
                py: [ 17, 10, 15 ],
                pz: [ 0, 1, 0 ],
                nx: [ 13, 2, 7 ],
                ny: [ 19, 11, 0 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 17 ],
                py: [ 0, 2 ],
                pz: [ 2, 0 ],
                nx: [ 8, 5 ],
                ny: [ 11, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 15, 21 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 15, 10 ],
                ny: [ 3, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 13, 8 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 7, 22 ],
                py: [ 3, 4 ],
                pz: [ 1, -1 ],
                nx: [ 4, 2 ],
                ny: [ 2, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 4,
                px: [ 6, 2, 6, 5 ],
                py: [ 21, 10, 22, 20 ],
                pz: [ 0, 1, 0, 0 ],
                nx: [ 2, 3, 4, 4 ],
                ny: [ 11, 21, 23, 23 ],
                nz: [ 1, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 6, 8 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 11, 11, 5, 11 ],
                py: [ 6, 5, 2, 4 ],
                pz: [ 1, 1, 2, 1 ],
                nx: [ 13, 7, 8, 3 ],
                ny: [ 7, 3, 5, 2 ],
                nz: [ 0, 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 7, 8 ],
                pz: [ 1, 0 ],
                nx: [ 3, 11 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 16, 1, 5 ],
                py: [ 3, 3, 11 ],
                pz: [ 0, -1, -1 ],
                nx: [ 16, 4, 8 ],
                ny: [ 2, 0, 1 ],
                nz: [ 0, 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 8, 1 ],
                pz: [ 0, -1 ],
                nx: [ 19, 18 ],
                ny: [ 20, 23 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 4 ],
                py: [ 10, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 14 ],
                ny: [ 2, 9 ],
                nz: [ 2, 0 ]
            }, {
                size: 5,
                px: [ 11, 12, 9, 10, 11 ],
                py: [ 2, 3, 2, 2, 3 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 6, 4, 2, 2, 2 ],
                ny: [ 18, 9, 3, 2, 2 ],
                nz: [ 0, 1, 2, 2, -1 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 6, 16 ],
                pz: [ 1, 0 ],
                nx: [ 8, 16 ],
                ny: [ 5, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 2, 3 ],
                pz: [ 2, 2 ],
                nx: [ 8, 17 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 2, 5, 2 ],
                py: [ 5, 6, 4 ],
                pz: [ 1, -1, -1 ],
                nx: [ 0, 0, 0 ],
                ny: [ 3, 5, 6 ],
                nz: [ 2, 1, 1 ]
            }, {
                size: 5,
                px: [ 0, 0, 0, 0, 0 ],
                py: [ 6, 15, 16, 13, 14 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 4, 5, 8, 6, 8 ],
                ny: [ 4, 16, 8, 15, 4 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 5 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 21, 19, 21, 21, 21 ],
                py: [ 17, 23, 18, 19, 20 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 5, 2, 3, 6, 6 ],
                ny: [ 12, 5, 5, 12, 12 ],
                nz: [ 0, 1, 1, 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 11, 1 ],
                pz: [ 1, -1 ],
                nx: [ 5, 11 ],
                ny: [ 3, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 5, 3 ],
                pz: [ 0, 1 ],
                nx: [ 6, 15 ],
                ny: [ 11, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 2 ],
                py: [ 4, 2 ],
                pz: [ 1, -1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 20, 6 ],
                pz: [ 0, -1 ],
                nx: [ 5, 10 ],
                ny: [ 11, 17 ],
                nz: [ 1, 0 ]
            }, {
                size: 4,
                px: [ 8, 4, 7, 11 ],
                py: [ 7, 4, 5, 8 ],
                pz: [ 1, 2, 1, 0 ],
                nx: [ 13, 10, 5, 21 ],
                ny: [ 9, 3, 5, 4 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 13 ],
                py: [ 10, 7 ],
                pz: [ 0, 0 ],
                nx: [ 10, 8 ],
                ny: [ 9, 18 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 8, 5 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 5, 2, 5, 8, 4 ],
                py: [ 8, 4, 14, 23, 7 ],
                pz: [ 1, 2, 0, 0, 1 ],
                nx: [ 18, 4, 16, 17, 17 ],
                ny: [ 1, 0, 0, 1, 1 ],
                nz: [ 0, 2, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 2 ],
                py: [ 2, 4 ],
                pz: [ 1, -1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 1 ],
                py: [ 8, 15 ],
                pz: [ 0, -1 ],
                nx: [ 8, 3 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 7, 2 ],
                pz: [ 1, -1 ],
                nx: [ 6, 6 ],
                ny: [ 9, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 6, 2 ],
                pz: [ 1, -1 ],
                nx: [ 1, 10 ],
                ny: [ 16, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 7, 2 ],
                pz: [ 1, -1 ],
                nx: [ 8, 9 ],
                ny: [ 8, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 4, 8, 7, 6, 6 ],
                py: [ 0, 0, 0, 1, 1 ],
                pz: [ 1, 0, 0, 0, -1 ],
                nx: [ 11, 5, 8, 4, 10 ],
                ny: [ 5, 3, 4, 4, 5 ],
                nz: [ 0, 1, 1, 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 6 ],
                py: [ 8, 5 ],
                pz: [ 0, 0 ],
                nx: [ 6, 6 ],
                ny: [ 8, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 18, 5 ],
                py: [ 19, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 21 ],
                ny: [ 5, 19 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 13, 6 ],
                pz: [ 0, 1 ],
                nx: [ 2, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 17, 6 ],
                pz: [ 0, 1 ],
                nx: [ 10, 2 ],
                ny: [ 15, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 13, 13, 19 ],
                py: [ 11, 12, 8 ],
                pz: [ 0, 0, -1 ],
                nx: [ 12, 3, 8 ],
                ny: [ 4, 1, 4 ],
                nz: [ 0, 2, 1 ]
            }, {
                size: 3,
                px: [ 11, 7, 4 ],
                py: [ 5, 2, 1 ],
                pz: [ 0, -1, -1 ],
                nx: [ 9, 2, 4 ],
                ny: [ 11, 3, 6 ],
                nz: [ 0, 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 7 ],
                py: [ 15, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 0, 1 ],
                nz: [ 2, 2 ]
            }, {
                size: 5,
                px: [ 8, 9, 16, 18, 18 ],
                py: [ 0, 1, 1, 1, 1 ],
                pz: [ 1, 1, 0, 0, -1 ],
                nx: [ 5, 5, 6, 4, 4 ],
                ny: [ 21, 20, 23, 17, 18 ],
                nz: [ 0, 0, 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 7 ],
                py: [ 1, 1 ],
                pz: [ 1, 1 ],
                nx: [ 20, 19 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 10, 11 ],
                pz: [ 1, 1 ],
                nx: [ 3, 3 ],
                ny: [ 10, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 5 ],
                py: [ 23, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 10, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 1, 10 ],
                py: [ 4, 7 ],
                pz: [ 2, -1 ],
                nx: [ 4, 3 ],
                ny: [ 23, 21 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 21 ],
                py: [ 11, 18 ],
                pz: [ 1, 0 ],
                nx: [ 10, 4 ],
                ny: [ 18, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 23 ],
                py: [ 11, 15 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 7, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 7, 7 ],
                pz: [ 1, -1 ],
                nx: [ 15, 4 ],
                ny: [ 14, 4 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 2 ],
                py: [ 9, 20 ],
                pz: [ 1, 0 ],
                nx: [ 21, 3 ],
                ny: [ 12, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 0, 0 ],
                pz: [ 1, 2 ],
                nx: [ 4, 2 ],
                ny: [ 0, 19 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 3, 0 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 1 ],
                py: [ 5, 0 ],
                pz: [ 1, -1 ],
                nx: [ 12, 10 ],
                ny: [ 11, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 11, 12 ],
                py: [ 11, 14 ],
                pz: [ 1, -1 ],
                nx: [ 18, 16 ],
                ny: [ 21, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 18 ],
                py: [ 1, 5 ],
                pz: [ 2, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 18, 7 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 0, 0 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 19, 2 ],
                py: [ 1, 4 ],
                pz: [ 0, -1 ],
                nx: [ 22, 22 ],
                ny: [ 13, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 13, 15, 20 ],
                py: [ 14, 21, 10 ],
                pz: [ 0, -1, -1 ],
                nx: [ 15, 7, 7 ],
                ny: [ 13, 6, 8 ],
                nz: [ 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 6, 7 ],
                pz: [ 1, 1 ],
                nx: [ 8, 7 ],
                ny: [ 4, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 3 ],
                pz: [ 1, 2 ],
                nx: [ 5, 10 ],
                ny: [ 2, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, 11 ],
                py: [ 7, 16 ],
                pz: [ 0, -1 ],
                nx: [ 1, 0 ],
                ny: [ 17, 4 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 14, 18 ],
                py: [ 17, 18 ],
                pz: [ 0, -1 ],
                nx: [ 8, 14 ],
                ny: [ 10, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 6, 11 ],
                py: [ 13, 11 ],
                pz: [ 0, -1 ],
                nx: [ 8, 9 ],
                ny: [ 12, 9 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 2, 2 ],
                pz: [ 0, 0 ],
                nx: [ 3, 3 ],
                ny: [ 2, 2 ],
                nz: [ 2, -1 ]
            }, {
                size: 3,
                px: [ 21, 21, 21 ],
                py: [ 14, 16, 15 ],
                pz: [ 0, 0, 0 ],
                nx: [ 14, 12, 0 ],
                ny: [ 5, 12, 6 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 21 ],
                py: [ 6, 15 ],
                pz: [ 1, -1 ],
                nx: [ 5, 1 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 8, 0 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 2 ],
                py: [ 9, 1 ],
                pz: [ 0, -1 ],
                nx: [ 3, 5 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 16, 1 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 17, 8 ],
                ny: [ 3, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 20, 20 ],
                ny: [ 17, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 7 ],
                py: [ 3, 6 ],
                pz: [ 2, -1 ],
                nx: [ 9, 9 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 17 ],
                py: [ 4, 1 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 15, 2 ],
                py: [ 11, 0 ],
                pz: [ 0, -1 ],
                nx: [ 5, 14 ],
                ny: [ 1, 12 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 22, 19 ],
                py: [ 3, 0 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 6, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 1, 22 ],
                py: [ 3, 21 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 1, 0 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 11, 12 ],
                pz: [ 0, 0 ],
                nx: [ 1, 2 ],
                ny: [ 1, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 18, 3 ],
                py: [ 8, 1 ],
                pz: [ 0, 2 ],
                nx: [ 13, 1 ],
                ny: [ 8, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 6 ],
                py: [ 21, 3 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 15, 14 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 17, 1 ],
                ny: [ 12, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 3 ],
                py: [ 12, 1 ],
                pz: [ 0, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 7, 3 ],
                pz: [ 0, 1 ],
                nx: [ 16, 2 ],
                ny: [ 3, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 7, 20 ],
                pz: [ 1, -1 ],
                nx: [ 9, 8 ],
                ny: [ 4, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 19, 2 ],
                py: [ 10, 2 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 3, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 14, 9 ],
                py: [ 0, 23 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 3, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 6, 9 ],
                py: [ 4, 10 ],
                pz: [ 1, 0 ],
                nx: [ 10, 9 ],
                ny: [ 9, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 6, 9, 10, 8 ],
                py: [ 20, 23, 18, 23 ],
                pz: [ 0, 0, 0, 0 ],
                nx: [ 9, 22, 1, 2 ],
                ny: [ 21, 14, 2, 5 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 17, 18 ],
                py: [ 13, 6 ],
                pz: [ 0, -1 ],
                nx: [ 6, 7 ],
                ny: [ 9, 11 ],
                nz: [ 1, 1 ]
            }, {
                size: 5,
                px: [ 18, 19, 20, 19, 20 ],
                py: [ 15, 19, 16, 20, 17 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 11, 22, 23, 23, 23 ],
                ny: [ 10, 22, 20, 19, 19 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 1, 0 ],
                pz: [ 1, 1 ],
                nx: [ 21, 11 ],
                ny: [ 0, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 0 ],
                py: [ 9, 3 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 2, 1 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 14, 23 ],
                py: [ 2, 18 ],
                pz: [ 0, -1 ],
                nx: [ 15, 18 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 3, 12 ],
                ny: [ 1, 5 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 8, 8 ],
                py: [ 7, 8 ],
                pz: [ 1, 1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 1, 3 ],
                pz: [ 2, -1 ],
                nx: [ 7, 19 ],
                ny: [ 9, 15 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 16, 6, 4 ],
                py: [ 21, 5, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 4, 19, 8 ],
                ny: [ 5, 21, 11 ],
                nz: [ 2, 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 6, 6 ],
                pz: [ 1, -1 ],
                nx: [ 10, 10 ],
                ny: [ 10, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 11 ],
                py: [ 2, 5 ],
                pz: [ 1, 0 ],
                nx: [ 3, 4 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 8, 6, 2 ],
                py: [ 4, 10, 2 ],
                pz: [ 1, 1, 2 ],
                nx: [ 2, 18, 5 ],
                ny: [ 0, 11, 5 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 7 ],
                py: [ 9, 7 ],
                pz: [ 0, -1 ],
                nx: [ 12, 3 ],
                ny: [ 9, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 14, 13 ],
                py: [ 20, 20 ],
                pz: [ 0, 0 ],
                nx: [ 13, 3 ],
                ny: [ 21, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 7 ],
                py: [ 5, 3 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 1, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 6, 2 ],
                py: [ 21, 5 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 23, 5 ],
                py: [ 6, 0 ],
                pz: [ 0, 2 ],
                nx: [ 21, 4 ],
                ny: [ 6, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 7, 6 ],
                pz: [ 1, 1 ],
                nx: [ 8, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 22, 11 ],
                py: [ 20, 9 ],
                pz: [ 0, 1 ],
                nx: [ 8, 8 ],
                ny: [ 10, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 21, 12 ],
                pz: [ 0, -1 ],
                nx: [ 2, 7 ],
                ny: [ 5, 23 ],
                nz: [ 2, 0 ]
            }, {
                size: 5,
                px: [ 0, 1, 1, 1, 1 ],
                py: [ 3, 1, 9, 4, 7 ],
                pz: [ 2, 2, 1, 1, 1 ],
                nx: [ 11, 22, 22, 23, 23 ],
                ny: [ 10, 21, 22, 19, 20 ],
                nz: [ 1, 0, 0, 0, -1 ]
            }, {
                size: 2,
                px: [ 17, 5 ],
                py: [ 12, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 8 ],
                ny: [ 4, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 16, 4 ],
                py: [ 7, 10 ],
                pz: [ 0, -1 ],
                nx: [ 9, 15 ],
                ny: [ 4, 6 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 3, 5 ],
                pz: [ 2, 1 ],
                nx: [ 11, 12 ],
                ny: [ 11, 23 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 14, 7 ],
                pz: [ 0, 1 ],
                nx: [ 4, 17 ],
                ny: [ 18, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 10, 1, 1 ],
                py: [ 12, 5, 4 ],
                pz: [ 0, -1, -1 ],
                nx: [ 7, 11, 5 ],
                ny: [ 1, 2, 1 ],
                nz: [ 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 6 ],
                py: [ 3, 9 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 13, 6 ],
                py: [ 22, 9 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 5,
                px: [ 12, 9, 10, 11, 11 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 16, 5, 10, 4, 8 ],
                ny: [ 10, 3, 6, 4, 4 ],
                nz: [ 0, 1, 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 18, 19 ],
                py: [ 23, 20 ],
                pz: [ 0, 0 ],
                nx: [ 8, 5 ],
                ny: [ 11, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 7, 2 ],
                pz: [ 1, 2 ],
                nx: [ 8, 4 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 8, 14, 8, 7, 4 ],
                py: [ 6, 12, 8, 6, 3 ],
                pz: [ 1, 0, 1, 1, 2 ],
                nx: [ 2, 6, 6, 7, 7 ],
                ny: [ 0, 1, 2, 0, 0 ],
                nz: [ 2, 0, 0, 0, -1 ]
            }, {
                size: 3,
                px: [ 1, 2, 3 ],
                py: [ 15, 18, 21 ],
                pz: [ 0, 0, 0 ],
                nx: [ 19, 5, 18 ],
                ny: [ 23, 5, 8 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 2 ],
                py: [ 6, 1 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 12, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 5 ],
                py: [ 5, 11 ],
                pz: [ 2, 1 ],
                nx: [ 14, 5 ],
                ny: [ 19, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 4 ],
                py: [ 4, 4 ],
                pz: [ 1, -1 ],
                nx: [ 11, 5 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 18, 4 ],
                py: [ 6, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 5, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 2, 4 ],
                pz: [ 1, 0 ],
                nx: [ 8, 8 ],
                ny: [ 3, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 1, 1 ],
                pz: [ 1, 2 ],
                nx: [ 7, 2 ],
                ny: [ 4, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 0 ],
                py: [ 20, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 5 ],
                ny: [ 10, 11 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 14 ],
                py: [ 5, 2 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 0, 2 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 15 ],
                py: [ 4, 7 ],
                pz: [ 1, -1 ],
                nx: [ 4, 7 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 7, 5 ],
                py: [ 2, 1 ],
                pz: [ 0, 1 ],
                nx: [ 3, 1 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 9 ],
                py: [ 4, 2 ],
                pz: [ 0, -1 ],
                nx: [ 11, 9 ],
                ny: [ 1, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 4 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 3, 7 ],
                pz: [ 2, 1 ],
                nx: [ 6, 8 ],
                ny: [ 14, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 0 ],
                py: [ 21, 3 ],
                pz: [ 0, 2 ],
                nx: [ 20, 8 ],
                ny: [ 10, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 5, 8 ],
                pz: [ 0, -1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 2 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 13 ],
                pz: [ 1, 0 ],
                nx: [ 3, 2 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 10 ],
                py: [ 9, 7 ],
                pz: [ 0, 1 ],
                nx: [ 7, 9 ],
                ny: [ 3, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 10 ],
                py: [ 6, 7 ],
                pz: [ 0, -1 ],
                nx: [ 8, 17 ],
                ny: [ 4, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 5, 10 ],
                py: [ 4, 10 ],
                pz: [ 2, 1 ],
                nx: [ 5, 4 ],
                ny: [ 9, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 15, 3, 5, 0 ],
                py: [ 12, 4, 2, 3 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 13, 7, 5, 7 ],
                ny: [ 12, 6, 0, 7 ],
                nz: [ 0, 1, 2, 1 ]
            }, {
                size: 4,
                px: [ 2, 3, 16, 17 ],
                py: [ 3, 4, 6, 6 ],
                pz: [ 2, 1, 0, 0 ],
                nx: [ 16, 16, 8, 16 ],
                ny: [ 8, 3, 10, 13 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 16, 8 ],
                py: [ 1, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 9, 14 ],
                py: [ 6, 2 ],
                pz: [ 1, -1 ],
                nx: [ 8, 8 ],
                ny: [ 6, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 10, 0 ],
                ny: [ 5, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 4, 4 ],
                pz: [ 0, 0 ],
                nx: [ 9, 7 ],
                ny: [ 3, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 11, 10, 13, 6, 12 ],
                py: [ 2, 2, 2, 1, 2 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 4, 18, 18, 13, 13 ],
                ny: [ 2, 18, 19, 7, 7 ],
                nz: [ 2, 0, 0, 0, -1 ]
            }, {
                size: 4,
                px: [ 13, 13, 13, 2 ],
                py: [ 13, 12, 11, 3 ],
                pz: [ 0, 0, 0, -1 ],
                nx: [ 4, 6, 8, 11 ],
                ny: [ 2, 2, 4, 4 ],
                nz: [ 2, 1, 1, 0 ]
            }, {
                size: 2,
                px: [ 4, 7 ],
                py: [ 6, 13 ],
                pz: [ 1, 0 ],
                nx: [ 8, 10 ],
                ny: [ 4, 22 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 7 ],
                py: [ 4, 17 ],
                pz: [ 1, -1 ],
                nx: [ 0, 1 ],
                ny: [ 5, 21 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 22, 22 ],
                pz: [ 0, 0 ],
                nx: [ 2, 2 ],
                ny: [ 13, 13 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 4, 4, 3 ],
                py: [ 22, 23, 19 ],
                pz: [ 0, 0, 0 ],
                nx: [ 8, 12, 3 ],
                ny: [ 22, 15, 2 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 10, 12 ],
                py: [ 3, 13 ],
                pz: [ 0, -1 ],
                nx: [ 15, 2 ],
                ny: [ 10, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 3, 3 ],
                pz: [ 2, -1 ],
                nx: [ 8, 4 ],
                ny: [ 0, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 6, 18 ],
                pz: [ 1, 0 ],
                nx: [ 12, 19 ],
                ny: [ 17, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 2, 1 ],
                pz: [ 0, 1 ],
                nx: [ 5, 4 ],
                ny: [ 4, 17 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 3, 12, 11 ],
                py: [ 5, 23, 23 ],
                pz: [ 2, 0, 0 ],
                nx: [ 12, 4, 4 ],
                ny: [ 21, 17, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 12, 0 ],
                py: [ 21, 5 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 7, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 17, 17 ],
                py: [ 12, 11 ],
                pz: [ 0, 0 ],
                nx: [ 8, 11 ],
                ny: [ 4, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 0 ],
                py: [ 22, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 6 ],
                ny: [ 1, 0 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 9, 5 ],
                pz: [ 1, 1 ],
                nx: [ 23, 11 ],
                ny: [ 23, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 4, 12, 11, 9, 8 ],
                py: [ 0, 1, 1, 0, 1 ],
                pz: [ 1, 0, 0, 0, 0 ],
                nx: [ 4, 17, 8, 7, 7 ],
                ny: [ 2, 13, 4, 4, 4 ],
                nz: [ 2, 0, 1, 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 13 ],
                py: [ 12, 12 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 23, 4 ],
                py: [ 23, 2 ],
                pz: [ 0, -1 ],
                nx: [ 5, 2 ],
                ny: [ 23, 6 ],
                nz: [ 0, 1 ]
            }, {
                size: 3,
                px: [ 8, 16, 0 ],
                py: [ 5, 15, 6 ],
                pz: [ 1, -1, -1 ],
                nx: [ 23, 23, 11 ],
                ny: [ 18, 17, 8 ],
                nz: [ 0, 0, 1 ]
            }, {
                size: 2,
                px: [ 1, 16 ],
                py: [ 4, 15 ],
                pz: [ 2, -1 ],
                nx: [ 2, 2 ],
                ny: [ 3, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 3, 8 ],
                py: [ 7, 9 ],
                pz: [ 1, -1 ],
                nx: [ 4, 2 ],
                ny: [ 10, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 22, 1, 9 ],
                py: [ 23, 2, 3 ],
                pz: [ 0, -1, -1 ],
                nx: [ 2, 2, 5 ],
                ny: [ 5, 4, 19 ],
                nz: [ 2, 2, 0 ]
            }, {
                size: 2,
                px: [ 2, 20 ],
                py: [ 5, 15 ],
                pz: [ 1, -1 ],
                nx: [ 2, 1 ],
                ny: [ 1, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 1, 19 ],
                pz: [ 1, -1 ],
                nx: [ 2, 2 ],
                ny: [ 5, 4 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 21, 0 ],
                pz: [ 0, -1 ],
                nx: [ 6, 5 ],
                ny: [ 1, 1 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 4, 8 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 9, 2 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 17, 3, 10 ],
                py: [ 8, 0, 2 ],
                pz: [ 0, 2, 0 ],
                nx: [ 13, 2, 6 ],
                ny: [ 15, 5, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 6 ],
                py: [ 20, 21 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 10, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 0, 1 ],
                pz: [ 2, 1 ],
                nx: [ 7, 20 ],
                ny: [ 1, 19 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 0, 1 ],
                pz: [ 1, 0 ],
                nx: [ 3, 2 ],
                ny: [ 4, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 4, 19 ],
                pz: [ 2, 0 ],
                nx: [ 5, 2 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 5,
                px: [ 3, 3, 4, 7, 7 ],
                py: [ 1, 0, 0, 0, 1 ],
                pz: [ 1, 1, 1, 0, 0 ],
                nx: [ 5, 4, 10, 8, 8 ],
                ny: [ 3, 3, 5, 4, 4 ],
                nz: [ 1, 1, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 1, 5 ],
                py: [ 0, 3 ],
                pz: [ 1, -1 ],
                nx: [ 1, 0 ],
                ny: [ 0, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 9 ],
                py: [ 0, 4 ],
                pz: [ 2, -1 ],
                nx: [ 13, 10 ],
                ny: [ 0, 0 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 14, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 0, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 17, 4 ],
                py: [ 13, 3 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 1, 0 ],
                py: [ 6, 2 ],
                pz: [ 1, -1 ],
                nx: [ 1, 6 ],
                ny: [ 2, 12 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 12, 4 ],
                py: [ 6, 0 ],
                pz: [ 0, -1 ],
                nx: [ 3, 3 ],
                ny: [ 8, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 1, 5 ],
                py: [ 1, 5 ],
                pz: [ 1, -1 ],
                nx: [ 17, 17 ],
                ny: [ 13, 7 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 11 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 17 ],
                py: [ 2, 8 ],
                pz: [ 1, 0 ],
                nx: [ 3, 3 ],
                ny: [ 1, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 13, 6, 6 ],
                py: [ 22, 11, 10 ],
                pz: [ 0, 1, 1 ],
                nx: [ 13, 12, 11 ],
                ny: [ 20, 20, 20 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 12 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 1, 1 ],
                pz: [ 1, -1 ],
                nx: [ 13, 6 ],
                ny: [ 0, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 2, 8 ],
                py: [ 3, 9 ],
                pz: [ 2, 0 ],
                nx: [ 8, 16 ],
                ny: [ 5, 17 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 15 ],
                py: [ 1, 1 ],
                pz: [ 0, 0 ],
                nx: [ 7, 11 ],
                ny: [ 8, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 18 ],
                py: [ 21, 23 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 4, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 1, 5 ],
                py: [ 0, 2 ],
                pz: [ 1, -1 ],
                nx: [ 15, 11 ],
                ny: [ 8, 7 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 4 ],
                py: [ 7, 8 ],
                pz: [ 1, -1 ],
                nx: [ 9, 10 ],
                ny: [ 13, 11 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 10, 4 ],
                pz: [ 1, 2 ],
                nx: [ 22, 4 ],
                ny: [ 0, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 3 ],
                py: [ 3, 1 ],
                pz: [ 0, 2 ],
                nx: [ 8, 0 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 21 ],
                py: [ 11, 22 ],
                pz: [ 0, -1 ],
                nx: [ 10, 11 ],
                ny: [ 11, 9 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 0, 1 ],
                pz: [ 2, 2 ],
                nx: [ 2, 21 ],
                ny: [ 6, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 10, 10, 1 ],
                py: [ 11, 0, 5 ],
                pz: [ 0, -1, -1 ],
                nx: [ 6, 12, 5 ],
                ny: [ 2, 5, 2 ],
                nz: [ 1, 0, 1 ]
            }, {
                size: 2,
                px: [ 9, 10 ],
                py: [ 5, 6 ],
                pz: [ 0, 0 ],
                nx: [ 12, 19 ],
                ny: [ 23, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 9, 6 ],
                pz: [ 0, 1 ],
                nx: [ 21, 0 ],
                ny: [ 23, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 12 ],
                py: [ 19, 15 ],
                pz: [ 0, 0 ],
                nx: [ 13, 0 ],
                ny: [ 17, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 14, 0 ],
                py: [ 17, 3 ],
                pz: [ 0, -1 ],
                nx: [ 7, 16 ],
                ny: [ 8, 19 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 8, 1 ],
                ny: [ 4, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 10 ],
                py: [ 23, 20 ],
                pz: [ 0, -1 ],
                nx: [ 4, 7 ],
                ny: [ 5, 10 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 16, 9 ],
                py: [ 22, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 10, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 4,
                px: [ 3, 1, 1, 5 ],
                py: [ 4, 2, 1, 2 ],
                pz: [ 0, 2, 2, 1 ],
                nx: [ 13, 5, 8, 0 ],
                ny: [ 22, 2, 9, 2 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 0, 0 ],
                pz: [ 1, -1 ],
                nx: [ 19, 20 ],
                ny: [ 1, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 7, 22 ],
                py: [ 6, 8 ],
                pz: [ 1, 0 ],
                nx: [ 4, 4 ],
                ny: [ 2, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 4, 4 ],
                pz: [ 2, 1 ],
                nx: [ 10, 20 ],
                ny: [ 10, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 12 ],
                py: [ 6, 15 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 2, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 4, 10 ],
                pz: [ 2, -1 ],
                nx: [ 3, 6 ],
                ny: [ 4, 8 ],
                nz: [ 2, 1 ]
            }, {
                size: 3,
                px: [ 11, 11, 4 ],
                py: [ 0, 5, 7 ],
                pz: [ 1, -1, -1 ],
                nx: [ 6, 12, 12 ],
                ny: [ 1, 1, 2 ],
                nz: [ 1, 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 17 ],
                py: [ 4, 18 ],
                pz: [ 0, -1 ],
                nx: [ 8, 2 ],
                ny: [ 10, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 17, 17 ],
                py: [ 10, 18 ],
                pz: [ 0, -1 ],
                nx: [ 8, 8 ],
                ny: [ 2, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 9, 9 ],
                py: [ 7, 7 ],
                pz: [ 1, -1 ],
                nx: [ 7, 4 ],
                ny: [ 6, 3 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 18, 21 ],
                py: [ 0, 0 ],
                pz: [ 0, -1 ],
                nx: [ 11, 6 ],
                ny: [ 5, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 8, 4 ],
                pz: [ 0, 2 ],
                nx: [ 5, 8 ],
                ny: [ 9, 16 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 2 ],
                py: [ 5, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 15 ],
                ny: [ 4, 8 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 4, 6 ],
                pz: [ 1, 1 ],
                nx: [ 11, 3 ],
                ny: [ 7, 9 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 3, 3 ],
                pz: [ 2, 2 ],
                nx: [ 2, 2 ],
                ny: [ 15, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 17, 18 ],
                py: [ 5, 5 ],
                pz: [ 0, 0 ],
                nx: [ 9, 21 ],
                ny: [ 2, 10 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 14, 7 ],
                pz: [ 0, 1 ],
                nx: [ 3, 4 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 3 ],
                py: [ 3, 1 ],
                pz: [ 1, -1 ],
                nx: [ 19, 10 ],
                ny: [ 12, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 16 ],
                py: [ 3, 8 ],
                pz: [ 1, 0 ],
                nx: [ 8, 10 ],
                ny: [ 20, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 5, 5, 2 ],
                py: [ 21, 8, 4 ],
                pz: [ 0, 1, 2 ],
                nx: [ 10, 6, 3 ],
                ny: [ 15, 2, 1 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 10, 12 ],
                pz: [ 0, 0 ],
                nx: [ 11, 11 ],
                ny: [ 2, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 3, 2 ],
                pz: [ 1, 1 ],
                nx: [ 8, 11 ],
                ny: [ 3, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 5, 8 ],
                pz: [ 0, -1 ],
                nx: [ 12, 3 ],
                ny: [ 3, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 13, 7 ],
                py: [ 2, 1 ],
                pz: [ 0, 1 ],
                nx: [ 5, 5 ],
                ny: [ 1, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 10, 8 ],
                pz: [ 0, -1 ],
                nx: [ 14, 16 ],
                ny: [ 10, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 10 ],
                py: [ 7, 8 ],
                pz: [ 1, -1 ],
                nx: [ 2, 6 ],
                ny: [ 5, 6 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 1, 8 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 3, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 4, 0 ],
                py: [ 5, 2 ],
                pz: [ 1, -1 ],
                nx: [ 1, 2 ],
                ny: [ 2, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 1, 12 ],
                py: [ 1, 9 ],
                pz: [ 2, -1 ],
                nx: [ 16, 17 ],
                ny: [ 3, 3 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 5, 8 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 7, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 14, 3 ],
                py: [ 11, 5 ],
                pz: [ 0, -1 ],
                nx: [ 11, 4 ],
                ny: [ 0, 0 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 6, 10 ],
                py: [ 6, 6 ],
                pz: [ 1, -1 ],
                nx: [ 0, 0 ],
                ny: [ 1, 0 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 3, 7 ],
                py: [ 0, 7 ],
                pz: [ 1, -1 ],
                nx: [ 15, 13 ],
                ny: [ 8, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 18, 1 ],
                py: [ 15, 0 ],
                pz: [ 0, -1 ],
                nx: [ 18, 18 ],
                ny: [ 18, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 5, 2 ],
                py: [ 4, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 18 ],
                ny: [ 4, 15 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 3, 14, 13 ],
                py: [ 2, 7, 8 ],
                pz: [ 2, 0, 0 ],
                nx: [ 10, 0, 2 ],
                ny: [ 8, 3, 2 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 16, 0 ],
                py: [ 14, 3 ],
                pz: [ 0, -1 ],
                nx: [ 18, 3 ],
                ny: [ 12, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 8, 3 ],
                pz: [ 1, 2 ],
                nx: [ 13, 4 ],
                ny: [ 10, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 8, 1 ],
                ny: [ 4, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 8, 3 ],
                pz: [ 1, -1 ],
                nx: [ 12, 7 ],
                ny: [ 2, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 17, 3 ],
                py: [ 9, 2 ],
                pz: [ 0, 2 ],
                nx: [ 7, 6 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 1 ],
                py: [ 2, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 22, 5 ],
                py: [ 15, 3 ],
                pz: [ 0, 2 ],
                nx: [ 16, 17 ],
                ny: [ 14, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 11 ],
                py: [ 19, 13 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 8, 11 ],
                py: [ 8, 1 ],
                pz: [ 1, -1 ],
                nx: [ 3, 3 ],
                ny: [ 2, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 3, 8, 0 ],
                py: [ 7, 7, 5 ],
                pz: [ 1, -1, -1 ],
                nx: [ 11, 5, 1 ],
                ny: [ 11, 7, 5 ],
                nz: [ 0, 1, 1 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 9, 0 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 12 ],
                py: [ 7, 1 ],
                pz: [ 0, -1 ],
                nx: [ 16, 7 ],
                ny: [ 6, 4 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 13, 5 ],
                py: [ 14, 0 ],
                pz: [ 0, -1 ],
                nx: [ 13, 10 ],
                ny: [ 0, 0 ],
                nz: [ 0, 0 ]
            }, {
                size: 5,
                px: [ 11, 12, 13, 12, 7 ],
                py: [ 0, 1, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, 1 ],
                nx: [ 13, 16, 14, 4, 4 ],
                ny: [ 18, 23, 18, 5, 5 ],
                nz: [ 0, 0, 0, 2, -1 ]
            }, {
                size: 2,
                px: [ 14, 5 ],
                py: [ 12, 4 ],
                pz: [ 0, -1 ],
                nx: [ 7, 7 ],
                ny: [ 8, 2 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 19, 3 ],
                py: [ 2, 5 ],
                pz: [ 0, -1 ],
                nx: [ 11, 23 ],
                ny: [ 7, 13 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 19, 20 ],
                pz: [ 0, 0 ],
                nx: [ 9, 4 ],
                ny: [ 5, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 4 ],
                py: [ 12, 3 ],
                pz: [ 0, 2 ],
                nx: [ 9, 5 ],
                ny: [ 4, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 8, 0, 1, 21 ],
                py: [ 6, 0, 7, 16 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 11, 6, 11, 5 ],
                ny: [ 8, 6, 4, 3 ],
                nz: [ 1, 1, 1, 2 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 7, 5 ],
                pz: [ 0, -1 ],
                nx: [ 9, 10 ],
                ny: [ 6, 7 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 16, 6 ],
                ny: [ 0, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 3 ],
                pz: [ 1, 2 ],
                nx: [ 1, 21 ],
                ny: [ 23, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 7, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 13 ],
                ny: [ 4, 10 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 11, 4 ],
                py: [ 0, 4 ],
                pz: [ 1, -1 ],
                nx: [ 4, 2 ],
                ny: [ 16, 8 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 3, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 19, 11 ],
                pz: [ 0, -1 ],
                nx: [ 9, 5 ],
                ny: [ 21, 9 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 17, 9 ],
                pz: [ 0, 1 ],
                nx: [ 0, 5 ],
                ny: [ 0, 9 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 4, 5 ],
                py: [ 2, 4 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 5, 6 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 1, 0 ],
                pz: [ 1, 2 ],
                nx: [ 4, 3 ],
                ny: [ 3, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 0 ],
                py: [ 7, 2 ],
                pz: [ 1, -1 ],
                nx: [ 5, 5 ],
                ny: [ 1, 0 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 13, 0 ],
                py: [ 17, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 5, 8 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 0, 5 ],
                pz: [ 2, -1 ],
                nx: [ 4, 9 ],
                ny: [ 2, 7 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 13, 8 ],
                pz: [ 0, -1 ],
                nx: [ 23, 11 ],
                ny: [ 13, 7 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 0, 2 ],
                pz: [ 1, 0 ],
                nx: [ 3, 6 ],
                ny: [ 11, 18 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 6, 5 ],
                pz: [ 0, -1 ],
                nx: [ 1, 1 ],
                ny: [ 1, 3 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 3, 6, 3, 6 ],
                py: [ 3, 6, 2, 5 ],
                pz: [ 2, 1, 2, 1 ],
                nx: [ 0, 4, 1, 1 ],
                ny: [ 0, 22, 17, 0 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 9, 15 ],
                ny: [ 4, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 8, 18 ],
                py: [ 7, 8 ],
                pz: [ 1, 0 ],
                nx: [ 8, 5 ],
                ny: [ 4, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 4, 5 ],
                pz: [ 1, -1 ],
                nx: [ 5, 6 ],
                ny: [ 0, 0 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 13, 18 ],
                py: [ 23, 19 ],
                pz: [ 0, 0 ],
                nx: [ 7, 13 ],
                ny: [ 10, 20 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 6 ],
                py: [ 2, 0 ],
                pz: [ 0, 1 ],
                nx: [ 4, 1 ],
                ny: [ 5, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 5, 4 ],
                pz: [ 2, 2 ],
                nx: [ 0, 20 ],
                ny: [ 4, 4 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 5, 5 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 12, 6 ],
                ny: [ 18, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 5,
                px: [ 2, 1, 3, 1, 5 ],
                py: [ 3, 3, 7, 4, 9 ],
                pz: [ 2, 2, 1, 2, 1 ],
                nx: [ 9, 3, 8, 16, 10 ],
                ny: [ 5, 3, 10, 6, 7 ],
                nz: [ 1, -1, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 4, 1 ],
                py: [ 12, 3 ],
                pz: [ 0, -1 ],
                nx: [ 10, 1 ],
                ny: [ 11, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 19, 0 ],
                py: [ 10, 7 ],
                pz: [ 0, -1 ],
                nx: [ 14, 7 ],
                ny: [ 6, 3 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 6, 0 ],
                ny: [ 2, 18 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 14, 8 ],
                py: [ 3, 0 ],
                pz: [ 0, 1 ],
                nx: [ 17, 1 ],
                ny: [ 1, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 18, 19 ],
                py: [ 1, 17 ],
                pz: [ 0, -1 ],
                nx: [ 5, 11 ],
                ny: [ 2, 5 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 12, 12, 12, 6, 12 ],
                py: [ 10, 11, 12, 6, 9 ],
                pz: [ 0, 0, 0, 1, 0 ],
                nx: [ 13, 3, 12, 6, 6 ],
                ny: [ 4, 1, 4, 2, 2 ],
                nz: [ 0, 2, 0, 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 10 ],
                py: [ 3, 3 ],
                pz: [ 0, 0 ],
                nx: [ 4, 9 ],
                ny: [ 4, 17 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 0 ],
                py: [ 13, 5 ],
                pz: [ 0, 2 ],
                nx: [ 8, 18 ],
                ny: [ 15, 15 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 6, 5 ],
                pz: [ 1, 1 ],
                nx: [ 0, 0 ],
                ny: [ 9, 4 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 2, 15 ],
                ny: [ 2, 1 ],
                nz: [ 2, -1 ]
            }, {
                size: 3,
                px: [ 2, 4, 2 ],
                py: [ 4, 9, 5 ],
                pz: [ 2, 1, 2 ],
                nx: [ 2, 5, 14 ],
                ny: [ 0, 1, 4 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 11, 12 ],
                py: [ 20, 20 ],
                pz: [ 0, 0 ],
                nx: [ 6, 10 ],
                ny: [ 9, 19 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 16, 8 ],
                pz: [ 0, -1 ],
                nx: [ 2, 3 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 5,
                px: [ 16, 17, 15, 16, 15 ],
                py: [ 1, 1, 1, 0, 0 ],
                pz: [ 0, 0, 0, 0, 0 ],
                nx: [ 8, 8, 4, 12, 12 ],
                ny: [ 8, 7, 2, 23, 23 ],
                nz: [ 1, 1, 2, 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 4 ],
                py: [ 6, 12 ],
                pz: [ 1, -1 ],
                nx: [ 8, 13 ],
                ny: [ 1, 1 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 9, 2 ],
                py: [ 3, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 6, 5 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 8 ],
                py: [ 6, 1 ],
                pz: [ 1, -1 ],
                nx: [ 11, 8 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 7, 0 ],
                pz: [ 1, -1 ],
                nx: [ 19, 19 ],
                ny: [ 18, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 2 ],
                py: [ 1, 1 ],
                pz: [ 2, 2 ],
                nx: [ 22, 11 ],
                ny: [ 4, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 10 ],
                py: [ 9, 8 ],
                pz: [ 1, 1 ],
                nx: [ 4, 4 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 0, 5 ],
                pz: [ 0, -1 ],
                nx: [ 10, 8 ],
                ny: [ 2, 2 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 8, 7 ],
                pz: [ 1, 1 ],
                nx: [ 8, 2 ],
                ny: [ 8, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 5 ],
                py: [ 21, 3 ],
                pz: [ 0, -1 ],
                nx: [ 13, 3 ],
                ny: [ 20, 5 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 11, 2 ],
                pz: [ 0, -1 ],
                nx: [ 1, 0 ],
                ny: [ 19, 9 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 10 ],
                py: [ 9, 10 ],
                pz: [ 1, 1 ],
                nx: [ 8, 4 ],
                ny: [ 10, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 9 ],
                pz: [ 2, 1 ],
                nx: [ 2, 11 ],
                ny: [ 9, 19 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 5 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 8, 23 ],
                ny: [ 4, 9 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 4 ],
                py: [ 2, 4 ],
                pz: [ 2, 1 ],
                nx: [ 5, 9 ],
                ny: [ 2, 5 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 2, 3 ],
                pz: [ 1, 1 ],
                nx: [ 19, 9 ],
                ny: [ 6, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 9, 4 ],
                py: [ 5, 10 ],
                pz: [ 1, -1 ],
                nx: [ 10, 22 ],
                ny: [ 0, 16 ],
                nz: [ 1, 0 ]
            }, {
                size: 3,
                px: [ 19, 9, 19 ],
                py: [ 3, 1, 2 ],
                pz: [ 0, 1, 0 ],
                nx: [ 6, 3, 6 ],
                ny: [ 10, 3, 0 ],
                nz: [ 1, -1, -1 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 10, 3 ],
                pz: [ 1, 2 ],
                nx: [ 23, 14 ],
                ny: [ 3, 18 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 19, 0 ],
                pz: [ 0, -1 ],
                nx: [ 4, 16 ],
                ny: [ 4, 11 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 22, 23 ],
                py: [ 3, 22 ],
                pz: [ 0, -1 ],
                nx: [ 9, 3 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 7, 2 ],
                py: [ 12, 4 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 10, 5 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 5, 13 ],
                pz: [ 0, -1 ],
                nx: [ 11, 3 ],
                ny: [ 2, 0 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 3, 17 ],
                py: [ 0, 16 ],
                pz: [ 1, -1 ],
                nx: [ 12, 12 ],
                ny: [ 5, 6 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 4, 3 ],
                ny: [ 0, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 3 ],
                py: [ 12, 0 ],
                pz: [ 0, -1 ],
                nx: [ 12, 12 ],
                ny: [ 13, 12 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 13, 4 ],
                py: [ 11, 14 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 4, 6 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 8, 7 ],
                py: [ 7, 8 ],
                pz: [ 1, 1 ],
                nx: [ 3, 0 ],
                ny: [ 5, 21 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 1, 3 ],
                py: [ 4, 14 ],
                pz: [ 2, 0 ],
                nx: [ 8, 8 ],
                ny: [ 7, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 11 ],
                py: [ 20, 7 ],
                pz: [ 0, -1 ],
                nx: [ 21, 21 ],
                ny: [ 20, 18 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 1 ],
                py: [ 11, 0 ],
                pz: [ 0, -1 ],
                nx: [ 2, 2 ],
                ny: [ 15, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 10, 1 ],
                py: [ 8, 0 ],
                pz: [ 1, -1 ],
                nx: [ 8, 4 ],
                ny: [ 7, 4 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 17, 6 ],
                py: [ 13, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 7, 15 ],
                py: [ 1, 3 ],
                pz: [ 1, 0 ],
                nx: [ 15, 5 ],
                ny: [ 1, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 1 ],
                py: [ 20, 10 ],
                pz: [ 0, -1 ],
                nx: [ 6, 8 ],
                ny: [ 11, 10 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 7, 14 ],
                py: [ 0, 0 ],
                pz: [ 1, 0 ],
                nx: [ 7, 8 ],
                ny: [ 7, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 17, 4 ],
                pz: [ 0, -1 ],
                nx: [ 12, 5 ],
                ny: [ 16, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 15, 0 ],
                pz: [ 0, -1 ],
                nx: [ 12, 7 ],
                ny: [ 17, 8 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 7, 1 ],
                py: [ 14, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 6 ],
                ny: [ 6, 12 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 8, 7 ],
                py: [ 0, 0 ],
                pz: [ 0, 0 ],
                nx: [ 6, 20 ],
                ny: [ 5, 5 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 2 ],
                py: [ 22, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 8 ],
                ny: [ 4, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 4,
                px: [ 8, 2, 2, 9 ],
                py: [ 6, 5, 3, 11 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 2, 7, 4, 3 ],
                ny: [ 2, 1, 0, 2 ],
                nz: [ 2, 0, 1, 2 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 12, 6 ],
                pz: [ 0, 1 ],
                nx: [ 8, 2 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 13, 11 ],
                py: [ 19, 8 ],
                pz: [ 0, -1 ],
                nx: [ 13, 13 ],
                ny: [ 20, 17 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 11, 19 ],
                py: [ 5, 14 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 8, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 10, 0 ],
                py: [ 8, 6 ],
                pz: [ 1, -1 ],
                nx: [ 21, 21 ],
                ny: [ 16, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 1, 12 ],
                py: [ 7, 6 ],
                pz: [ 1, -1 ],
                nx: [ 2, 7 ],
                ny: [ 5, 14 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 2, 9 ],
                py: [ 7, 5 ],
                pz: [ 1, -1 ],
                nx: [ 2, 5 ],
                ny: [ 5, 9 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 12, 5 ],
                py: [ 15, 6 ],
                pz: [ 0, -1 ],
                nx: [ 3, 12 ],
                ny: [ 0, 2 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 23, 22 ],
                py: [ 23, 1 ],
                pz: [ 0, -1 ],
                nx: [ 0, 0 ],
                ny: [ 2, 3 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 1, 2 ],
                pz: [ 2, 1 ],
                nx: [ 8, 0 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 1 ],
                py: [ 9, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 2 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 0, 1 ],
                py: [ 0, 0 ],
                pz: [ 2, 0 ],
                nx: [ 2, 3 ],
                ny: [ 9, 10 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 0 ],
                py: [ 16, 14 ],
                pz: [ 0, -1 ],
                nx: [ 6, 3 ],
                ny: [ 23, 14 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 3 ],
                py: [ 2, 3 ],
                pz: [ 2, 1 ],
                nx: [ 13, 3 ],
                ny: [ 19, 14 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 8, 18 ],
                pz: [ 0, -1 ],
                nx: [ 4, 7 ],
                ny: [ 1, 2 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 4, 4 ],
                py: [ 5, 6 ],
                pz: [ 1, 1 ],
                nx: [ 2, 2 ],
                ny: [ 5, 3 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 7, 3 ],
                py: [ 13, 7 ],
                pz: [ 0, 1 ],
                nx: [ 4, 3 ],
                ny: [ 4, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 5, 6 ],
                pz: [ 1, 0 ],
                nx: [ 2, 1 ],
                ny: [ 5, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 14 ],
                py: [ 3, 5 ],
                pz: [ 1, 0 ],
                nx: [ 5, 0 ],
                ny: [ 16, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 2 ],
                py: [ 18, 5 ],
                pz: [ 0, 2 ],
                nx: [ 11, 4 ],
                ny: [ 16, 4 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 6, 16 ],
                py: [ 19, 20 ],
                pz: [ 0, -1 ],
                nx: [ 3, 2 ],
                ny: [ 10, 5 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 5, 3 ],
                py: [ 3, 1 ],
                pz: [ 0, 1 ],
                nx: [ 1, 3 ],
                ny: [ 4, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 12, 6 ],
                py: [ 13, 6 ],
                pz: [ 0, 1 ],
                nx: [ 10, 1 ],
                ny: [ 12, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 3 ],
                py: [ 6, 2 ],
                pz: [ 1, -1 ],
                nx: [ 4, 8 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 9, 3 ],
                py: [ 21, 2 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 1, 0 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 8, 4 ],
                py: [ 1, 0 ],
                pz: [ 1, -1 ],
                nx: [ 8, 6 ],
                ny: [ 4, 2 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 2, 7 ],
                py: [ 1, 6 ],
                pz: [ 2, -1 ],
                nx: [ 7, 9 ],
                ny: [ 6, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 8, 3 ],
                pz: [ 1, 2 ],
                nx: [ 10, 5 ],
                ny: [ 19, 11 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 3, 4 ],
                pz: [ 2, 2 ],
                nx: [ 3, 6 ],
                ny: [ 4, 6 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 3, 11 ],
                py: [ 5, 20 ],
                pz: [ 2, 0 ],
                nx: [ 11, 5 ],
                ny: [ 21, 8 ],
                nz: [ 0, -1 ]
            }, {
                size: 3,
                px: [ 5, 9, 5 ],
                py: [ 4, 7, 5 ],
                pz: [ 2, 0, 2 ],
                nx: [ 23, 10, 4 ],
                ny: [ 23, 3, 22 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 4,
                px: [ 11, 9, 7, 1 ],
                py: [ 13, 8, 11, 10 ],
                pz: [ 0, -1, -1, -1 ],
                nx: [ 8, 2, 11, 12 ],
                ny: [ 4, 2, 4, 4 ],
                nz: [ 1, 2, 0, 0 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 7, 6 ],
                pz: [ 1, 1 ],
                nx: [ 0, 4 ],
                ny: [ 1, 0 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 19, 20 ],
                py: [ 0, 1 ],
                pz: [ 0, 0 ],
                nx: [ 21, 1 ],
                ny: [ 0, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 5 ],
                py: [ 11, 0 ],
                pz: [ 0, -1 ],
                nx: [ 11, 0 ],
                ny: [ 12, 1 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 1, 1 ],
                pz: [ 0, -1 ],
                nx: [ 4, 7 ],
                ny: [ 5, 4 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 5, 12 ],
                py: [ 4, 23 ],
                pz: [ 2, -1 ],
                nx: [ 13, 15 ],
                ny: [ 5, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 20 ],
                py: [ 4, 16 ],
                pz: [ 0, -1 ],
                nx: [ 9, 4 ],
                ny: [ 2, 1 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 12, 13 ],
                py: [ 2, 2 ],
                pz: [ 0, 0 ],
                nx: [ 4, 16 ],
                ny: [ 2, 11 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 19, 14 ],
                py: [ 10, 17 ],
                pz: [ 0, -1 ],
                nx: [ 3, 8 ],
                ny: [ 0, 2 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 8, 12 ],
                py: [ 1, 2 ],
                pz: [ 1, 0 ],
                nx: [ 19, 10 ],
                ny: [ 3, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 4,
                px: [ 17, 2, 3, 10 ],
                py: [ 8, 6, 2, 12 ],
                pz: [ 0, 1, 2, 0 ],
                nx: [ 17, 9, 12, 2 ],
                ny: [ 9, 22, 13, 5 ],
                nz: [ 0, -1, -1, -1 ]
            }, {
                size: 2,
                px: [ 20, 10 ],
                py: [ 15, 7 ],
                pz: [ 0, 1 ],
                nx: [ 13, 9 ],
                ny: [ 7, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 0, 0 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 10, 3 ],
                ny: [ 9, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 4, 3 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 0, 22 ],
                ny: [ 14, 6 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 3 ],
                py: [ 4, 0 ],
                pz: [ 0, 2 ],
                nx: [ 16, 3 ],
                ny: [ 2, 0 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 8, 16 ],
                py: [ 6, 12 ],
                pz: [ 1, 0 ],
                nx: [ 8, 12 ],
                ny: [ 4, 7 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 5, 11 ],
                py: [ 0, 5 ],
                pz: [ 2, 1 ],
                nx: [ 10, 1 ],
                ny: [ 5, 5 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 7, 4 ],
                py: [ 5, 5 ],
                pz: [ 0, -1 ],
                nx: [ 3, 6 ],
                ny: [ 2, 3 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 11, 11 ],
                py: [ 11, 12 ],
                pz: [ 0, 0 ],
                nx: [ 23, 7 ],
                ny: [ 20, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 16, 8 ],
                py: [ 12, 5 ],
                pz: [ 0, 1 ],
                nx: [ 8, 2 ],
                ny: [ 2, 1 ],
                nz: [ 1, -1 ]
            }, {
                size: 3,
                px: [ 6, 11, 11 ],
                py: [ 11, 23, 20 ],
                pz: [ 1, 0, 0 ],
                nx: [ 11, 3, 22 ],
                ny: [ 21, 3, 16 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 17, 15 ],
                py: [ 3, 2 ],
                pz: [ 0, -1 ],
                nx: [ 4, 4 ],
                ny: [ 3, 2 ],
                nz: [ 2, 2 ]
            }, {
                size: 2,
                px: [ 21, 21 ],
                py: [ 11, 10 ],
                pz: [ 0, 0 ],
                nx: [ 11, 3 ],
                ny: [ 6, 2 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 23, 21 ],
                py: [ 22, 10 ],
                pz: [ 0, -1 ],
                nx: [ 20, 10 ],
                ny: [ 18, 10 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 4, 2 ],
                py: [ 6, 3 ],
                pz: [ 1, 2 ],
                nx: [ 3, 2 ],
                ny: [ 4, 3 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 16, 0 ],
                py: [ 18, 11 ],
                pz: [ 0, -1 ],
                nx: [ 8, 7 ],
                ny: [ 4, 4 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 6, 21 ],
                py: [ 3, 16 ],
                pz: [ 0, -1 ],
                nx: [ 1, 8 ],
                ny: [ 2, 14 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 8, 1 ],
                py: [ 3, 0 ],
                pz: [ 0, -1 ],
                nx: [ 11, 11 ],
                ny: [ 2, 1 ],
                nz: [ 0, 0 ]
            }, {
                size: 3,
                px: [ 11, 11, 11 ],
                py: [ 9, 10, 8 ],
                pz: [ 1, 1, 1 ],
                nx: [ 23, 1, 0 ],
                ny: [ 23, 9, 11 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 6, 3 ],
                py: [ 2, 1 ],
                pz: [ 1, 2 ],
                nx: [ 7, 1 ],
                ny: [ 8, 2 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 17 ],
                py: [ 17, 19 ],
                pz: [ 0, -1 ],
                nx: [ 10, 4 ],
                ny: [ 16, 9 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 7, 1 ],
                pz: [ 1, -1 ],
                nx: [ 11, 0 ],
                ny: [ 11, 8 ],
                nz: [ 0, 1 ]
            }, {
                size: 2,
                px: [ 10, 5 ],
                py: [ 11, 4 ],
                pz: [ 1, 2 ],
                nx: [ 5, 5 ],
                ny: [ 0, 0 ],
                nz: [ 2, -1 ]
            }, {
                size: 2,
                px: [ 3, 6 ],
                py: [ 3, 6 ],
                pz: [ 2, 1 ],
                nx: [ 8, 0 ],
                ny: [ 4, 16 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 14, 1 ],
                py: [ 20, 2 ],
                pz: [ 0, -1 ],
                nx: [ 7, 7 ],
                ny: [ 11, 9 ],
                nz: [ 1, 1 ]
            }, {
                size: 3,
                px: [ 11, 13, 4 ],
                py: [ 16, 21, 3 ],
                pz: [ 0, 0, 2 ],
                nx: [ 14, 16, 5 ],
                ny: [ 20, 14, 9 ],
                nz: [ 0, -1, -1 ]
            }, {
                size: 2,
                px: [ 7, 0 ],
                py: [ 1, 1 ],
                pz: [ 1, -1 ],
                nx: [ 4, 7 ],
                ny: [ 2, 4 ],
                nz: [ 2, 1 ]
            }, {
                size: 2,
                px: [ 23, 11 ],
                py: [ 9, 4 ],
                pz: [ 0, 1 ],
                nx: [ 11, 3 ],
                ny: [ 1, 3 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 13 ],
                py: [ 23, 23 ],
                pz: [ 0, 0 ],
                nx: [ 13, 13 ],
                ny: [ 20, 20 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 10, 8 ],
                py: [ 5, 11 ],
                pz: [ 0, -1 ],
                nx: [ 20, 19 ],
                ny: [ 18, 20 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 19, 5 ],
                py: [ 22, 4 ],
                pz: [ 0, -1 ],
                nx: [ 2, 9 ],
                ny: [ 3, 17 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 15, 2 ],
                py: [ 13, 7 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 2,
                px: [ 14, 13 ],
                py: [ 17, 2 ],
                pz: [ 0, -1 ],
                nx: [ 15, 13 ],
                ny: [ 19, 15 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 12, 23 ],
                py: [ 8, 22 ],
                pz: [ 0, -1 ],
                nx: [ 7, 10 ],
                ny: [ 5, 9 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 2, 6 ],
                py: [ 21, 10 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 3, 3 ],
                nz: [ 1, 1 ]
            }, {
                size: 2,
                px: [ 15, 11 ],
                py: [ 5, 0 ],
                pz: [ 0, -1 ],
                nx: [ 3, 4 ],
                ny: [ 17, 16 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 3, 1 ],
                py: [ 18, 8 ],
                pz: [ 0, 1 ],
                nx: [ 14, 4 ],
                ny: [ 17, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 15, 3 ],
                py: [ 18, 3 ],
                pz: [ 0, 2 ],
                nx: [ 1, 22 ],
                ny: [ 0, 1 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 13, 3 ],
                py: [ 9, 3 ],
                pz: [ 0, -1 ],
                nx: [ 0, 1 ],
                ny: [ 9, 20 ],
                nz: [ 1, 0 ]
            }, {
                size: 2,
                px: [ 1, 1 ],
                py: [ 1, 0 ],
                pz: [ 2, 2 ],
                nx: [ 9, 23 ],
                ny: [ 10, 12 ],
                nz: [ 1, -1 ]
            }, {
                size: 4,
                px: [ 9, 0, 9, 1 ],
                py: [ 8, 0, 0, 10 ],
                pz: [ 1, -1, -1, -1 ],
                nx: [ 23, 7, 5, 23 ],
                ny: [ 20, 7, 5, 19 ],
                nz: [ 0, 1, 2, 0 ]
            }, {
                size: 2,
                px: [ 18, 18 ],
                py: [ 12, 12 ],
                pz: [ 0, -1 ],
                nx: [ 8, 4 ],
                ny: [ 4, 2 ],
                nz: [ 1, 2 ]
            }, {
                size: 3,
                px: [ 0, 4, 1 ],
                py: [ 3, 5, 3 ],
                pz: [ 1, -1, -1 ],
                nx: [ 16, 11, 8 ],
                ny: [ 8, 5, 6 ],
                nz: [ 0, 0, 0 ]
            }, {
                size: 5,
                px: [ 9, 10, 14, 11, 11 ],
                py: [ 0, 0, 0, 0, 0 ],
                pz: [ 0, 0, 0, 0, -1 ],
                nx: [ 8, 3, 4, 6, 2 ],
                ny: [ 22, 9, 5, 4, 0 ],
                nz: [ 0, 1, 0, 0, 2 ]
            }, {
                size: 2,
                px: [ 6, 5 ],
                py: [ 2, 2 ],
                pz: [ 1, 1 ],
                nx: [ 7, 3 ],
                ny: [ 8, 7 ],
                nz: [ 0, -1 ]
            }, {
                size: 2,
                px: [ 11, 5 ],
                py: [ 15, 2 ],
                pz: [ 0, -1 ],
                nx: [ 3, 10 ],
                ny: [ 0, 1 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 0, 11 ],
                py: [ 11, 12 ],
                pz: [ 1, -1 ],
                nx: [ 22, 22 ],
                ny: [ 14, 13 ],
                nz: [ 0, 0 ]
            }, {
                size: 2,
                px: [ 2, 2 ],
                py: [ 15, 14 ],
                pz: [ 0, 0 ],
                nx: [ 1, 2 ],
                ny: [ 11, 8 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 11, 6 ],
                py: [ 0, 7 ],
                pz: [ 1, -1 ],
                nx: [ 19, 5 ],
                ny: [ 3, 0 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 2, 3 ],
                py: [ 3, 7 ],
                pz: [ 2, 1 ],
                nx: [ 1, 5 ],
                ny: [ 5, 0 ],
                nz: [ 1, -1 ]
            }, {
                size: 2,
                px: [ 10, 14 ],
                py: [ 4, 5 ],
                pz: [ 0, -1 ],
                nx: [ 4, 18 ],
                ny: [ 2, 12 ],
                nz: [ 2, 0 ]
            }, {
                size: 2,
                px: [ 19, 10 ],
                py: [ 12, 2 ],
                pz: [ 0, -1 ],
                nx: [ 13, 4 ],
                ny: [ 10, 2 ],
                nz: [ 0, 2 ]
            }, {
                size: 2,
                px: [ 6, 1 ],
                py: [ 21, 6 ],
                pz: [ 0, -1 ],
                nx: [ 6, 5 ],
                ny: [ 0, 0 ],
                nz: [ 1, 1 ]
            } ],
            alpha: [ -1.044179, 1.044179, -.6003138, .6003138, -.4091282, .4091282, -.4590148, .4590148, -.4294004, .4294004, -.3360846, .3360846, -.3054186, .3054186, -.2901743, .2901743, -.3522417, .3522417, -.3195838, .3195838, -.2957309, .2957309, -.2876727, .2876727, -.263746, .263746, -.26079, .26079, -.2455714, .2455714, -.2749847, .2749847, -.2314217, .2314217, -.2540871, .2540871, -.2143416, .2143416, -.2565697, .2565697, -.1901272, .1901272, -.2259981, .2259981, -.2012333, .2012333, -.244846, .244846, -.2192845, .2192845, -.2005951, .2005951, -.2259, .2259, -.1955758, .1955758, -.2235332, .2235332, -.170449, .170449, -.1584628, .1584628, -.216771, .216771, -.1592909, .1592909, -.1967292, .1967292, -.1432268, .1432268, -.2039949, .2039949, -.1404068, .1404068, -.1788201, .1788201, -.1498714, .1498714, -.1282541, .1282541, -.1630182, .1630182, -.1398111, .1398111, -.1464143, .1464143, -.1281712, .1281712, -.1417014, .1417014, -.1779164, .1779164, -.2067174, .2067174, -.1344947, .1344947, -.1357351, .1357351, -.1683191, .1683191, -.1821768, .1821768, -.2158307, .2158307, -.1812857, .1812857, -.1635445, .1635445, -.1474934, .1474934, -.1771993, .1771993, -.151762, .151762, -.1283184, .1283184, -.1862675, .1862675, -.1420491, .1420491, -.1232165, .1232165, -.1472696, .1472696, -.1192156, .1192156, -.1602034, .1602034, -.1321473, .1321473, -.1358101, .1358101, -.1295821, .1295821, -.1289102, .1289102, -.123252, .123252, -.1332227, .1332227, -.1358887, .1358887, -.1179559, .1179559, -.1263694, .1263694, -.1444876, .1444876, -.1933141, .1933141, -.1917886, .1917886, -.119976, .119976, -.1359937, .1359937, -.1690073, .1690073, -.1894222, .1894222, -.1699422, .1699422, -.1340361, .1340361, -.1840622, .1840622, -.1277397, .1277397, -.138161, .138161, -.1282241, .1282241, -.1211334, .1211334, -.1264628, .1264628, -.137301, .137301, -.1363356, .1363356, -.1562568, .1562568, -.1268735, .1268735, -.1037859, .1037859, -.1394322, .1394322, -.1449225, .1449225, -.1109657, .1109657, -.1086931, .1086931, -.1379135, .1379135, -.1881974, .1881974, -.1304956, .1304956, -.09921777, .09921777, -.1398624, .1398624, -.1216469, .1216469, -.1272741, .1272741, -.1878236, .1878236, -.1336894, .1336894, -.1256289, .1256289, -.1247231, .1247231, -.18534, .18534, -.1087805, .1087805, -.1205676, .1205676, -.1023182, .1023182, -.1268422, .1268422, -.14229, .14229, -.1098174, .1098174, -.1317018, .1317018, -.1378142, .1378142, -.127455, .127455, -.1142944, .1142944, -.1713488, .1713488, -.1103035, .1103035, -.1045221, .1045221, -.1293015, .1293015, -.09763183, .09763183, -.1387213, .1387213, -.09031167, .09031167, -.1283052, .1283052, -.1133462, .1133462, -.09370681, .09370681, -.1079269, .1079269, -.1331913, .1331913, -.08969902, .08969902, -.104456, .104456, -.09387466, .09387466, -.1208988, .1208988, -.1252011, .1252011, -.1401277, .1401277, -.1461381, .1461381, -.1323763, .1323763, -.09923889, .09923889, -.1142899, .1142899, -.09110853, .09110853, -.1106607, .1106607, -.125314, .125314, -.09657895, .09657895, -.103001, .103001, -.1348857, .1348857, -.1237793, .1237793, -.1296943, .1296943, -.1323385, .1323385, -.08331554, .08331554, -.08417589, .08417589, -.1104431, .1104431, -.117071, .117071, -.1391725, .1391725, -.1485189, .1485189, -.1840393, .1840393, -.123825, .123825, -.1095287, .1095287, -.1177869, .1177869, -.1036409, .1036409, -.09802581, .09802581, -.09364054, .09364054, -.09936022, .09936022, -.1117201, .1117201, -.10813, .10813, -.1331861, .1331861, -.1192122, .1192122, -.09889761, .09889761, -.1173456, .1173456, -.1032917, .1032917, -.09268551, .09268551, -.1178563, .1178563, -.1215065, .1215065, -.1060437, .1060437, -.1010044, .1010044, -.1021683, .1021683, -.09974968, .09974968, -.1161528, .1161528, -.08686721, .08686721, -.08145259, .08145259, -.0993706, .0993706, -.1170885, .1170885, -.07693779, .07693779, -.09047233, .09047233, -.09168442, .09168442, -.1054105, .1054105, -.09036177, .09036177, -.1251949, .1251949, -.09523847, .09523847, -.103893, .103893, -.143366, .143366, -.148983, .148983, -.08393174, .08393174, -.08888026, .08888026, -.09347861, .09347861, -.1044838, .1044838, -.1102144, .1102144, -.1383415, .1383415, -.1466476, .1466476, -.1129741, .1129741, -.1310915, .1310915, -.1070648, .1070648, -.07559007, .07559007, -.08812082, .08812082, -.1234272, .1234272, -.1088022, .1088022, -.08388703, .08388703, -.07179593, .07179593, -.1008961, .1008961, -.0903007, .0903007, -.08581345, .08581345, -.09023431, .09023431, -.09807321, .09807321, -.09621402, .09621402, -.1730195, .1730195, -.08984631, .08984631, -.09556661, .09556661, -.1047576, .1047576, -.07854313, .07854313, -.08682118, .08682118, -.1159761, .1159761, -.133954, .133954, -.1003048, .1003048, -.09747544, .09747544, -.09501058, .09501058, -.1321566, .1321566, -.09194706, .09194706, -.09359276, .09359276, -.1015916, .1015916, -.1174192, .1174192, -.1039931, .1039931, -.09746733, .09746733, -.128612, .128612, -.1044899, .1044899, -.1066385, .1066385, -.08368626, .08368626, -.1271919, .1271919, -.1055946, .1055946, -.08272876, .08272876, -.1370564, .1370564, -.08539379, .08539379, -.1100343, .1100343, -.0810217, .0810217, -.1028728, .1028728, -.1305065, .1305065, -.1059506, .1059506, -.1264646, .1264646, -.08383843, .08383843, -.09357698, .09357698, -.074744, .074744, -.07814045, .07814045, -.0860097, .0860097, -.120609, .120609, -.09986512, .09986512, -.08516476, .08516476, -.07198783, .07198783, -.07838409, .07838409, -.1005142, .1005142, -.09951857, .09951857, -.07253998, .07253998, -.09913739, .09913739, -.0750036, .0750036, -.0925809, .0925809, -.1400287, .1400287, -.1044404, .1044404, -.07404339, .07404339, -.07256833, .07256833, -.1006995, .1006995, -.1426043, .1426043, -.1036529, .1036529, -.1208443, .1208443, -.1074245, .1074245, -.1141448, .1141448, -.1015809, .1015809, -.1028822, .1028822, -.1055682, .1055682, -.09468699, .09468699, -.1010098, .1010098, -.1205054, .1205054, -.08392956, .08392956, -.08052297, .08052297, -.09576507, .09576507, -.09515692, .09515692, -.1564745, .1564745, -.07357238, .07357238, -.1129262, .1129262, -.1013265, .1013265, -.08760761, .08760761, -.08714771, .08714771, -.09605039, .09605039, -.09064677, .09064677, -.08243857, .08243857, -.08495858, .08495858, -.08350249, .08350249, -.07423234, .07423234, -.07930799, .07930799, -.06620023, .06620023, -.07311919, .07311919, -.1237938, .1237938, -.1086814, .1086814, -.06379798, .06379798, -.07526021, .07526021, -.08297097, .08297097, -.08186337, .08186337, -.07627362, .07627362, -.1061638, .1061638, -.08328494, .08328494, -.1040895, .1040895, -.07649056, .07649056, -.07299058, .07299058, -.09195198, .09195198, -.0799088, .0799088, -.07429346, .07429346, -.09991702, .09991702, -.09755385, .09755385, -.1344138, .1344138, -.1707917, .1707917, -.0832545, .0832545, -.08137793, .08137793, -.08308659, .08308659, -.07440414, .07440414, -.07012744, .07012744, -.08122943, .08122943, -.08845462, .08845462, -.0880345, .0880345, -.09653392, .09653392, -.08795691, .08795691, -.1119045, .1119045, -.1068308, .1068308, -.08406359, .08406359, -.1220414, .1220414, -.1024235, .1024235, -.1252897, .1252897, -.1121234, .1121234, -.0905415, .0905415, -.08974435, .08974435, -.1351578, .1351578, -.1106442, .1106442, -.08093913, .08093913, -.09800762, .09800762, -.07012823, .07012823, -.07434949, .07434949, -.08684816, .08684816, -.08916388, .08916388, -.08773159, .08773159, -.07709608, .07709608, -.07230518, .07230518, -.09662156, .09662156, -.07957632, .07957632, -.07628441, .07628441, -.08050202, .08050202, -.1290593, .1290593, -.09246182, .09246182, -.09703662, .09703662, -.07866445, .07866445, -.1064783, .1064783, -.1012339, .1012339, -.06828389, .06828389, -.1005039, .1005039, -.07559687, .07559687, -.06359878, .06359878, -.08387002, .08387002, -.07851323, .07851323, -.08878569, .08878569, -.07767654, .07767654, -.08033338, .08033338, -.09142797, .09142797, -.08590585, .08590585, -.1052318, .1052318, -.08760062, .08760062, -.09222192, .09222192, -.07548828, .07548828, -.08003344, .08003344, -.1177076, .1177076, -.1064964, .1064964, -.08655553, .08655553, -.09418112, .09418112, -.07248163, .07248163, -.07120974, .07120974, -.06393114, .06393114, -.07997487, .07997487, -.1220941, .1220941, -.09892518, .09892518, -.08270271, .08270271, -.10694, .10694, -.05860771, .05860771, -.091266, .091266, -.06212559, .06212559, -.09397538, .09397538, -.08070447, .08070447, -.08415587, .08415587, -.08564455, .08564455, -.07791811, .07791811, -.06642259, .06642259, -.08266167, .08266167, -.1134986, .1134986, -.1045267, .1045267, -.07122085, .07122085, -.07979415, .07979415, -.07922347, .07922347, -.09003421, .09003421, -.08796449, .08796449, -.07933279, .07933279, -.08307947, .08307947, -.08946349, .08946349, -.07643384, .07643384, -.07818534, .07818534, -.07990991, .07990991, -.09885664, .09885664, -.08071329, .08071329, -.06952112, .06952112, -.06429706, .06429706, -.06307229, .06307229, -.08100137, .08100137, -.07693623, .07693623, -.06906625, .06906625, -.07390462, .07390462, -.06487217, .06487217, -.1233681, .1233681, -.06979273, .06979273, -.08358669, .08358669, -.109542, .109542, -.08519717, .08519717, -.07599857, .07599857, -.06042816, .06042816, -.06546304, .06546304, -.1016245, .1016245, -.08308787, .08308787, -.07385708, .07385708, -.0675163, .0675163, -.09036695, .09036695, -.09371335, .09371335, -.1116088, .1116088, -.05693741, .05693741, -.06383983, .06383983, -.05389843, .05389843, -.08383191, .08383191, -.07820822, .07820822, -.07067557, .07067557, -.07971948, .07971948, -.07360668, .07360668, -.07008027, .07008027, -.08013378, .08013378, -.08331605, .08331605, -.07145702, .07145702, -.0786394, .0786394, -.06992679, .06992679, -.05716495, .05716495, -.05306006, .05306006, -.08855639, .08855639, -.07656397, .07656397, -.06939272, .06939272, -.07523742, .07523742, -.08472299, .08472299, -.08114341, .08114341, -.06795517, .06795517, -.0789013, .0789013, -.07488741, .07488741, -.09281972, .09281972, -.09325498, .09325498, -.1401587, .1401587, -.1176284, .1176284, -.08867597, .08867597, -.08124232, .08124232, -.09441235, .09441235, -.08029452, .08029452, -.08581848, .08581848, -.1029819, .1029819, -.09569118, .09569118, -.07690893, .07690893, -.09018228, .09018228, -.1049209, .1049209, -.08969413, .08969413, -.08651891, .08651891, -.08613331, .08613331, -.07120468, .07120468, -.08743959, .08743959, -.07607158, .07607158, -.1015547, .1015547, -.08090879, .08090879, -.07114079, .07114079, -.08744835, .08744835, -.06074904, .06074904, -.06919871, .06919871, -.07607774, .07607774, -.094446, .094446, -.07833429, .07833429, -.06817555, .06817555, -.0899739, .0899739, -.09845223, .09845223, -.0789418, .0789418, -.07921373, .07921373, -.07448032, .07448032, -.1178165, .1178165, -.08216686, .08216686, -.08103286, .08103286, -.0698147, .0698147, -.08709008, .08709008, -.08336259, .08336259, -.06213589, .06213589, -.07068045, .07068045, -.06915676, .06915676, -.07103416, .07103416, -.06523849, .06523849, -.0763476, .0763476, -.07263038, .07263038, -.07164396, .07164396, -.08745559, .08745559, -.06960181, .06960181, -.08500098, .08500098, -.0652326, .0652326, -.07319714, .07319714, -.06268125, .06268125, -.07083135, .07083135, -.07984517, .07984517, -.1256265, .1256265, -.1065412, .1065412, -.08524323, .08524323, -.09291364, .09291364, -.07936567, .07936567, -.08607723, .08607723, -.07583416, .07583416, -.07931928, .07931928, -.07408357, .07408357, -.1034404, .1034404, -.1012127, .1012127, -.07916689, .07916689, -.08753651, .08753651, -.06090366, .06090366, -.07500103, .07500103, -.1228709, .1228709, -.06318201, .06318201, -.0758542, .0758542, -.0708909, .0708909, -.1053542, .1053542, -.08549521, .08549521, -.07906308, .07906308, -.0633878, .0633878, -.0841791, .0841791, -.07115511, .07115511, -.07693949, .07693949, -.07446749, .07446749, -.1037929, .1037929, -.07991005, .07991005, -.07119439, .07119439, -.0707134, .0707134, -.08587362, .08587362, -.07001236, .07001236, -.07567115, .07567115, -.0711893, .0711893, -.06844895, .06844895, -.1035118, .1035118, -.08156618, .08156618, -.07449593, .07449593, -.0815436, .0815436, -.09110878, .09110878, -.06222534, .06222534, -.1033841, .1033841, -.06811687, .06811687, -.06828443, .06828443, -.05769408, .05769408, -.05917684, .05917684, -.08358868, .08358868 ]
        } ]
    };
    try {
        var getScriptPath = function() {
            "use strict";
            for (var scripts = document.getElementsByTagName("script"), i = 0; i < scripts.length; i++) if (scripts[i].src.match(/(jquery\.facedetection(\.min)?\.js)|\/ccv\.js/)) return scripts[i].src;
        }, scriptPath = getScriptPath();
    } catch (e) {}
    if (void 0 === parallable) {
        var parallable = function(file, funct) {
            "use strict";
            return parallable.core[funct.toString()] = funct().core, function() {
                var i, async, worker_num, params;
                if (arguments.length > 1) for (async = arguments[arguments.length - 2], worker_num = arguments[arguments.length - 1], 
                params = new Array(arguments.length - 2), i = 0; i < arguments.length - 2; i++) params[i] = arguments[i]; else async = arguments[0].async, 
                worker_num = arguments[0].worker, params = arguments[0], delete params.async, delete params.worker, 
                params = [ params ];
                var scope = {
                    shared: {}
                }, ctrl = funct.apply(scope, params);
                return async ? function(complete) {
                    var executed = 0, outputs = new Array(worker_num), inputs = ctrl.pre.apply(scope, [ worker_num ]);
                    for (i in scope.shared) "function" == typeof scope.shared[i] ? delete scope.shared[i] : void 0 !== scope.shared[i].tagName && delete scope.shared[i];
                    for (i = 0; worker_num > i; i++) {
                        var worker = new Worker(file);
                        worker.onmessage = function(i) {
                            return function(event) {
                                outputs[i] = "string" == typeof event.data ? JSON.parse(event.data) : event.data, 
                                executed++, executed == worker_num && complete(ctrl.post.apply(scope, [ outputs ]));
                            };
                        }(i);
                        var msg = {
                            input: inputs[i],
                            name: funct.toString(),
                            shared: scope.shared,
                            id: i,
                            worker: params.worker_num
                        };
                        try {
                            worker.postMessage(msg);
                        } catch (e) {
                            worker.postMessage(JSON.stringify(msg));
                        }
                    }
                } : ctrl.post.apply(scope, [ [ ctrl.core.apply(scope, [ ctrl.pre.apply(scope, [ 1 ])[0], 0, 1 ]) ] ]);
            };
        };
        parallable.core = {};
    }
    var ccv = {
        pre: function(image) {
            if ("img" == image.tagName.toLowerCase()) {
                var canvas = document.createElement("canvas");
                document.body.appendChild(image), canvas.width = image.offsetWidth, canvas.style.width = image.offsetWidth.toString() + "px", 
                canvas.height = image.offsetHeight, canvas.style.height = image.offsetHeight.toString() + "px", 
                document.body.removeChild(image);
                var ctx = canvas.getContext("2d");
                return ctx.drawImage(image, 0, 0), canvas;
            }
            return image;
        },
        grayscale: function(canvas) {
            for (var pix1, pix2, ctx = canvas.getContext("2d"), imageData = ctx.getImageData(0, 0, canvas.width, canvas.height), data = imageData.data, pix = canvas.width * canvas.height * 4; pix > 0; ) data[pix -= 4] = data[pix1 = pix + 1] = data[pix2 = pix + 2] = .3 * data[pix] + .59 * data[pix1] + .11 * data[pix2];
            return ctx.putImageData(imageData, 0, 0), canvas;
        },
        array_group: function(seq, gfunc) {
            var i, j, node = new Array(seq.length);
            for (i = 0; i < seq.length; i++) node[i] = {
                parent: -1,
                element: seq[i],
                rank: 0
            };
            for (i = 0; i < seq.length; i++) if (node[i].element) {
                for (var root = i; -1 != node[root].parent; ) root = node[root].parent;
                for (j = 0; j < seq.length; j++) if (i != j && node[j].element && gfunc(node[i].element, node[j].element)) {
                    for (var root2 = j; -1 != node[root2].parent; ) root2 = node[root2].parent;
                    if (root2 != root) {
                        node[root].rank > node[root2].rank ? node[root2].parent = root : (node[root].parent = root2, 
                        node[root].rank == node[root2].rank && node[root2].rank++, root = root2);
                        for (var temp, node2 = j; -1 != node[node2].parent; ) temp = node2, node2 = node[node2].parent, 
                        node[temp].parent = root;
                        for (node2 = i; -1 != node[node2].parent; ) temp = node2, node2 = node[node2].parent, 
                        node[temp].parent = root;
                    }
                }
            }
            var idx = new Array(seq.length), class_idx = 0;
            for (i = 0; i < seq.length; i++) {
                j = -1;
                var node1 = i;
                if (node[node1].element) {
                    for (;-1 != node[node1].parent; ) node1 = node[node1].parent;
                    node[node1].rank >= 0 && (node[node1].rank = ~class_idx++), j = ~node[node1].rank;
                }
                idx[i] = j;
            }
            return {
                index: idx,
                cat: class_idx
            };
        },
        detect_objects: parallable(scriptPath, function() {
            function pre() {
                var canvas = this.shared.canvas, interval = this.shared.interval, scale = this.shared.scale, next = this.shared.next, scale_upto = this.shared.scale_upto, pyr = new Array(4 * (scale_upto + 2 * next)), ret = new Array(4 * (scale_upto + 2 * next));
                pyr[0] = canvas, ret[0] = {
                    width: pyr[0].width,
                    height: pyr[0].height,
                    data: pyr[0].getContext("2d").getImageData(0, 0, pyr[0].width, pyr[0].height).data
                };
                var i;
                for (i = 1; interval >= i; i++) pyr[4 * i] = document.createElement("canvas"), pyr[4 * i].width = Math.floor(pyr[0].width / Math.pow(scale, i)), 
                pyr[4 * i].height = Math.floor(pyr[0].height / Math.pow(scale, i)), pyr[4 * i].getContext("2d").drawImage(pyr[0], 0, 0, pyr[0].width, pyr[0].height, 0, 0, pyr[4 * i].width, pyr[4 * i].height), 
                ret[4 * i] = {
                    width: pyr[4 * i].width,
                    height: pyr[4 * i].height,
                    data: pyr[4 * i].getContext("2d").getImageData(0, 0, pyr[4 * i].width, pyr[4 * i].height).data
                };
                for (i = next; scale_upto + 2 * next > i; i++) pyr[4 * i] = document.createElement("canvas"), 
                pyr[4 * i].width = Math.floor(pyr[4 * i - 4 * next].width / 2), pyr[4 * i].height = Math.floor(pyr[4 * i - 4 * next].height / 2), 
                pyr[4 * i].getContext("2d").drawImage(pyr[4 * i - 4 * next], 0, 0, pyr[4 * i - 4 * next].width, pyr[4 * i - 4 * next].height, 0, 0, pyr[4 * i].width, pyr[4 * i].height), 
                ret[4 * i] = {
                    width: pyr[4 * i].width,
                    height: pyr[4 * i].height,
                    data: pyr[4 * i].getContext("2d").getImageData(0, 0, pyr[4 * i].width, pyr[4 * i].height).data
                };
                for (i = 2 * next; scale_upto + 2 * next > i; i++) pyr[4 * i + 1] = document.createElement("canvas"), 
                pyr[4 * i + 1].width = Math.floor(pyr[4 * i - 4 * next].width / 2), pyr[4 * i + 1].height = Math.floor(pyr[4 * i - 4 * next].height / 2), 
                pyr[4 * i + 1].getContext("2d").drawImage(pyr[4 * i - 4 * next], 1, 0, pyr[4 * i - 4 * next].width - 1, pyr[4 * i - 4 * next].height, 0, 0, pyr[4 * i + 1].width - 2, pyr[4 * i + 1].height), 
                ret[4 * i + 1] = {
                    width: pyr[4 * i + 1].width,
                    height: pyr[4 * i + 1].height,
                    data: pyr[4 * i + 1].getContext("2d").getImageData(0, 0, pyr[4 * i + 1].width, pyr[4 * i + 1].height).data
                }, pyr[4 * i + 2] = document.createElement("canvas"), pyr[4 * i + 2].width = Math.floor(pyr[4 * i - 4 * next].width / 2), 
                pyr[4 * i + 2].height = Math.floor(pyr[4 * i - 4 * next].height / 2), pyr[4 * i + 2].getContext("2d").drawImage(pyr[4 * i - 4 * next], 0, 1, pyr[4 * i - 4 * next].width, pyr[4 * i - 4 * next].height - 1, 0, 0, pyr[4 * i + 2].width, pyr[4 * i + 2].height - 2), 
                ret[4 * i + 2] = {
                    width: pyr[4 * i + 2].width,
                    height: pyr[4 * i + 2].height,
                    data: pyr[4 * i + 2].getContext("2d").getImageData(0, 0, pyr[4 * i + 2].width, pyr[4 * i + 2].height).data
                }, pyr[4 * i + 3] = document.createElement("canvas"), pyr[4 * i + 3].width = Math.floor(pyr[4 * i - 4 * next].width / 2), 
                pyr[4 * i + 3].height = Math.floor(pyr[4 * i - 4 * next].height / 2), pyr[4 * i + 3].getContext("2d").drawImage(pyr[4 * i - 4 * next], 1, 1, pyr[4 * i - 4 * next].width - 1, pyr[4 * i - 4 * next].height - 1, 0, 0, pyr[4 * i + 3].width - 2, pyr[4 * i + 3].height - 2), 
                ret[4 * i + 3] = {
                    width: pyr[4 * i + 3].width,
                    height: pyr[4 * i + 3].height,
                    data: pyr[4 * i + 3].getContext("2d").getImageData(0, 0, pyr[4 * i + 3].width, pyr[4 * i + 3].height).data
                };
                return [ ret ];
            }
            function core(pyr) {
                var i, j, k, x, y, q, cascade = this.shared.cascade, scale = (this.shared.interval, 
                this.shared.scale), next = this.shared.next, scale_upto = this.shared.scale_upto, scale_x = 1, scale_y = 1, dx = [ 0, 1, 0, 1 ], dy = [ 0, 0, 1, 1 ], seq = [];
                for (i = 0; scale_upto > i; i++) {
                    var qw = pyr[4 * i + 8 * next].width - Math.floor(cascade.width / 4), qh = pyr[4 * i + 8 * next].height - Math.floor(cascade.height / 4), step = [ 4 * pyr[4 * i].width, 4 * pyr[4 * i + 4 * next].width, 4 * pyr[4 * i + 8 * next].width ], paddings = [ 16 * pyr[4 * i].width - 16 * qw, 8 * pyr[4 * i + 4 * next].width - 8 * qw, 4 * pyr[4 * i + 8 * next].width - 4 * qw ];
                    for (j = 0; j < cascade.stage_classifier.length; j++) {
                        var orig_feature = cascade.stage_classifier[j].orig_feature, feature = cascade.stage_classifier[j].feature = new Array(cascade.stage_classifier[j].count);
                        for (k = 0; k < cascade.stage_classifier[j].count; k++) for (feature[k] = {
                            size: orig_feature[k].size,
                            px: new Array(orig_feature[k].size),
                            pz: new Array(orig_feature[k].size),
                            nx: new Array(orig_feature[k].size),
                            nz: new Array(orig_feature[k].size)
                        }, q = 0; q < orig_feature[k].size; q++) feature[k].px[q] = 4 * orig_feature[k].px[q] + orig_feature[k].py[q] * step[orig_feature[k].pz[q]], 
                        feature[k].pz[q] = orig_feature[k].pz[q], feature[k].nx[q] = 4 * orig_feature[k].nx[q] + orig_feature[k].ny[q] * step[orig_feature[k].nz[q]], 
                        feature[k].nz[q] = orig_feature[k].nz[q];
                    }
                    for (q = 0; 4 > q; q++) {
                        var u8 = [ pyr[4 * i].data, pyr[4 * i + 4 * next].data, pyr[4 * i + 8 * next + q].data ], u8o = [ 8 * dx[q] + dy[q] * pyr[4 * i].width * 8, 4 * dx[q] + dy[q] * pyr[4 * i + 4 * next].width * 4, 0 ];
                        for (y = 0; qh > y; y++) {
                            for (x = 0; qw > x; x++) {
                                var sum = 0, flag = !0;
                                for (j = 0; j < cascade.stage_classifier.length; j++) {
                                    sum = 0;
                                    var alpha = cascade.stage_classifier[j].alpha, feature = cascade.stage_classifier[j].feature;
                                    for (k = 0; k < cascade.stage_classifier[j].count; k++) {
                                        var p, n, feature_k = feature[k], pmin = u8[feature_k.pz[0]][u8o[feature_k.pz[0]] + feature_k.px[0]], nmax = u8[feature_k.nz[0]][u8o[feature_k.nz[0]] + feature_k.nx[0]];
                                        if (nmax >= pmin) sum += alpha[2 * k]; else {
                                            var f, shortcut = !0;
                                            for (f = 0; f < feature_k.size; f++) {
                                                if (feature_k.pz[f] >= 0 && (p = u8[feature_k.pz[f]][u8o[feature_k.pz[f]] + feature_k.px[f]], 
                                                pmin > p)) {
                                                    if (nmax >= p) {
                                                        shortcut = !1;
                                                        break;
                                                    }
                                                    pmin = p;
                                                }
                                                if (feature_k.nz[f] >= 0 && (n = u8[feature_k.nz[f]][u8o[feature_k.nz[f]] + feature_k.nx[f]], 
                                                n > nmax)) {
                                                    if (n >= pmin) {
                                                        shortcut = !1;
                                                        break;
                                                    }
                                                    nmax = n;
                                                }
                                            }
                                            sum += shortcut ? alpha[2 * k + 1] : alpha[2 * k];
                                        }
                                    }
                                    if (sum < cascade.stage_classifier[j].threshold) {
                                        flag = !1;
                                        break;
                                    }
                                }
                                flag && seq.push({
                                    x: (4 * x + 2 * dx[q]) * scale_x,
                                    y: (4 * y + 2 * dy[q]) * scale_y,
                                    width: cascade.width * scale_x,
                                    height: cascade.height * scale_y,
                                    neighbor: 1,
                                    confidence: sum
                                }), u8o[0] += 16, u8o[1] += 8, u8o[2] += 4;
                            }
                            u8o[0] += paddings[0], u8o[1] += paddings[1], u8o[2] += paddings[2];
                        }
                    }
                    scale_x *= scale, scale_y *= scale;
                }
                return seq;
            }
            function post(seq) {
                {
                    var i, j, min_neighbors = this.shared.min_neighbors, cascade = this.shared.cascade;
                    this.shared.interval, this.shared.scale, this.shared.next, this.shared.scale_upto;
                }
                for (i = 0; i < cascade.stage_classifier.length; i++) cascade.stage_classifier[i].feature = cascade.stage_classifier[i].orig_feature;
                if (seq = seq[0], min_neighbors > 0) {
                    var result = ccv.array_group(seq, function(r1, r2) {
                        var distance = Math.floor(.25 * r1.width + .5);
                        return r2.x <= r1.x + distance && r2.x >= r1.x - distance && r2.y <= r1.y + distance && r2.y >= r1.y - distance && r2.width <= Math.floor(1.5 * r1.width + .5) && Math.floor(1.5 * r2.width + .5) >= r1.width;
                    }), ncomp = result.cat, idx_seq = result.index, comps = new Array(ncomp + 1);
                    for (i = 0; i < comps.length; i++) comps[i] = {
                        neighbors: 0,
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        confidence: 0
                    };
                    for (i = 0; i < seq.length; i++) {
                        var r1 = seq[i], idx = idx_seq[i];
                        0 == comps[idx].neighbors && (comps[idx].confidence = r1.confidence), ++comps[idx].neighbors, 
                        comps[idx].x += r1.x, comps[idx].y += r1.y, comps[idx].width += r1.width, comps[idx].height += r1.height, 
                        comps[idx].confidence = Math.max(comps[idx].confidence, r1.confidence);
                    }
                    var seq2 = [];
                    for (i = 0; ncomp > i; i++) {
                        var n = comps[i].neighbors;
                        n >= min_neighbors && seq2.push({
                            x: (2 * comps[i].x + n) / (2 * n),
                            y: (2 * comps[i].y + n) / (2 * n),
                            width: (2 * comps[i].width + n) / (2 * n),
                            height: (2 * comps[i].height + n) / (2 * n),
                            neighbors: comps[i].neighbors,
                            confidence: comps[i].confidence
                        });
                    }
                    var result_seq = [];
                    for (i = 0; i < seq2.length; i++) {
                        var r1 = seq2[i], flag = !0;
                        for (j = 0; j < seq2.length; j++) {
                            var r2 = seq2[j], distance = Math.floor(.25 * r2.width + .5);
                            if (i != j && r1.x >= r2.x - distance && r1.y >= r2.y - distance && r1.x + r1.width <= r2.x + r2.width + distance && r1.y + r1.height <= r2.y + r2.height + distance && (r2.neighbors > Math.max(3, r1.neighbors) || r1.neighbors < 3)) {
                                flag = !1;
                                break;
                            }
                        }
                        flag && result_seq.push(r1);
                    }
                    return result_seq;
                }
                return seq;
            }
            if (void 0 !== this.shared) {
                var params = get_named_arguments(arguments, [ "canvas", "cascade", "interval", "min_neighbors" ]);
                this.shared.canvas = params.canvas, this.shared.interval = params.interval, this.shared.min_neighbors = params.min_neighbors, 
                this.shared.cascade = params.cascade, this.shared.scale = Math.pow(2, 1 / (params.interval + 1)), 
                this.shared.next = params.interval + 1, this.shared.scale_upto = Math.floor(Math.log(Math.min(params.canvas.width / params.cascade.width, params.canvas.height / params.cascade.height)) / Math.log(this.shared.scale));
                var i;
                for (i = 0; i < this.shared.cascade.stage_classifier.length; i++) this.shared.cascade.stage_classifier[i].orig_feature = this.shared.cascade.stage_classifier[i].feature;
            }
            return {
                pre: pre,
                core: core,
                post: post
            };
        })
    };
    onmessage = function(event) {
        var data = "string" == typeof event.data ? JSON.parse(event.data) : event.data, scope = {
            shared: data.shared
        }, result = parallable.core[data.name].apply(scope, [ data.input, data.id, data.worker ]);
        try {
            postMessage(result);
        } catch (e) {
            postMessage(JSON.stringify(result));
        }
    }, $.fn.faceDetection = function(settingsOrCallback) {
        "use strict";
        var time, options = {
            interval: 4,
            minNeighbors: 1,
            grayscale: !0,
            confidence: null,
            async: !1,
            complete: function() {},
            error: function() {}
        };
        return $.isFunction(settingsOrCallback) ? options.complete = settingsOrCallback : $.extend(options, settingsOrCallback), 
        this.each(function() {
            function detect() {
                var source, canvas;
                if (time = new Date().getTime(), $$.is("img")) source = new Image(), source.src = $$.attr("src"), 
                source.crossOrigin = $$.attr("crossorigin"), canvas = ccv.pre(source); else if ($$.is("video") || $$.is("canvas")) {
                    var copy, context;
                    source = $$[0], copy = document.createElement("canvas"), copy.setAttribute("width", source.videoWidth || source.width), 
                    copy.setAttribute("height", source.videoHeight || source.height), context = copy.getContext("2d"), 
                    context.drawImage(source, 0, 0), canvas = ccv.pre(copy);
                }
                options.grayscale && (canvas = ccv.grayscale(canvas));
                try {
                    options.async && window.Worker ? ccv.detect_objects({
                        canvas: canvas,
                        cascade: cascade,
                        interval: options.interval,
                        min_neighbors: options.minNeighbors,
                        worker: 1,
                        async: !0
                    })(done) : done(ccv.detect_objects({
                        canvas: canvas,
                        cascade: cascade,
                        interval: options.interval,
                        min_neighbors: options.minNeighbors
                    }));
                } catch (e) {
                    options.error.apply($$, [ 2, e.message ]), options.complete.apply($$, [ !1 ]);
                }
            }
            function done(faces) {
                for (var n = faces.length, data = [], i = 0; n > i; ++i) null !== options.confidence && faces[i].confidence <= options.confidence || (faces[i].positionX = position.left + faces[i].x, 
                faces[i].positionY = position.top + faces[i].y, faces[i].offsetX = offset.left + faces[i].x, 
                faces[i].offsetY = offset.top + faces[i].y, faces[i].scaleX = scaleX, faces[i].scaleY = scaleY, 
                data.push(faces[i]));
                data.time = new Date().getTime() - time, options.complete.apply($$, [ data ]);
            }
            var $$ = $(this), offset = $$.offset(), position = $$.position(), scaleX = $$.width() / (this.naturalWidth || this.videoWidth) || 1, scaleY = $$.height() / (this.naturalHeight || this.videoHeight) || 1;
            return $$.is("img, video, canvas") ? detect() : (options.error.apply($$, [ 1, "Face detection is possible on images, videos and canvas only." ]), 
            void options.complete.apply($$, [ [] ]));
        });
    };
}("function" == typeof jQuery ? jQuery : "function" == typeof Zepto ? Zepto : {
    fn: {}
});