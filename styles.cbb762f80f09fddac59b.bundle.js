webpackJsonp([1,2],{379:function(n,e,t){var o=t(642);"string"==typeof o&&(o=[[n.i,o,""]]);t(689)(o,{});o.locals&&(n.exports=o.locals)},642:function(n,e,t){e=n.exports=t(643)(),e.push([n.i,"html,\nbody{\n  background:aliceblue;\n  height:100%;\n  padding:0;\n  margin:0; }\n\n.container{\n  height:100%;\n  display:-ms-flexbox;\n  display:-webkit-box;\n  display:-moz-box;\n  display:-ms-box;\n  display:box;\n  -ms-flex-direction:row;\n  -webkit-box-orient:horizontal;\n  -moz-box-orient:horizontal;\n  -ms-box-orient:horizontal;\n  box-orient:horizontal; }\n\n.nav{\n  width:100px;\n  -ms-flex:0 100px;\n  -webkit-box-flex:0;\n  -moz-box-flex:0;\n  -ms-box-flex:0;\n  box-flex:0; }\n\n.main{\n  -ms-flex:1;\n  -webkit-box-flex:1;\n  -moz-box-flex:1;\n  -ms-box-flex:1;\n  box-flex:1; }\n\n.flex-container{\n  padding:0;\n  margin:0;\n  list-style:none;\n  display:-webkit-box;\n  display:-moz-box;\n  display:-ms-flexbox;\n  display:-webkit-flex;\n  display:flex;\n  -webkit-flex-flow:row wrap;\n  flex-flow:row wrap;\n  justify-content:space-around; }\n\n.flex-item{\n  padding:5px 45px;\n  width:90%;\n  height:150px;\n  margin-top:10px;\n  line-height:50px;\n  color:#999999;\n  font-weight:bold;\n  font-size:1em;\n  text-align:left; }\n\n.hint{\n  height:50px;\n  padding:5px 45px;\n  text-align:left;\n  line-height:20px; }\n",""])},643:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},689:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(l(o.parts[i],e));d[o.id]={id:o.id,refs:1,parts:s}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var r=n[o],i=r[0],s=r[1],a=r[2],l=r[3],f={css:s,media:a,sourceMap:l};t[i]?t[i].parts.push(f):e.push(t[i]={id:i,parts:[f]})}return e}function r(n,e){var t=x(),o=v[v.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function s(n){var e=document.createElement("style");return e.type="text/css",r(n,e),e}function a(n){var e=document.createElement("link");return e.rel="stylesheet",r(n,e),e}function l(n,e){var t,o,r;if(e.singleton){var l=m++;t=b||(b=s(e)),o=f.bind(null,t,l,!1),r=f.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=a(e),o=u.bind(null,t),r=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=p.bind(null,t),r=function(){i(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function f(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function u(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},c=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),x=c(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,v=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(n);return t(r,e),function(n){for(var i=[],s=0;s<r.length;s++){var a=r[s],l=d[a.id];l.refs--,i.push(l)}if(n){var f=o(n);t(f,e)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete d[l.id]}}}};var g=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},692:function(n,e,t){n.exports=t(379)}},[692]);
//# sourceMappingURL=styles.cbb762f80f09fddac59b.bundle.map