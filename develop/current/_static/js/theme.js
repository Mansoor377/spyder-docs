!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),e.exports=n(3)},function(e,t){(function(){$(window).on("activate.bs.scrollspy",(function(){for(var e=document.querySelectorAll("#bd-toc-nav a"),t=0;t<e.length;t++){e[t].parentElement.classList.remove("active")}for(e=document.querySelectorAll("#bd-toc-nav a.active"),t=0;t<e.length;t++){e[t].parentElement.classList.add("active")}}));const e=e=>{const t=e.which;37===t?window.location.href=document.getElementById("prev-link").href:39===t&&(window.location.href=document.getElementById("next-link").href)};var t=!1;$(document).ready(()=>{!1===t&&(document.addEventListener("keydown",e),t=!0);var n=$("#small-dropdown option"),o=n.filter('[value=""]');n.length&&o.length?o.prop("selected",!0):($("#small-dropdown").hide(),$("#topics-header").hide())}),$("#small-dropdown").change((function(){$(this).val()&&(window.location.href=$(this).val())}))}).call(window)},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/theme.css"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/spyder.css"}]);