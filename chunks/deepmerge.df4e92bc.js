var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e){var r=e.default;if(typeof r=="function"){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}),t}var o=function(r){return i(r)&&!b(r)};function i(e){return!!e&&typeof e=="object"}function b(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||d(e)}var y=typeof Symbol=="function"&&Symbol.for,s=y?Symbol.for("react.element"):60103;function d(e){return e.$$typeof===s}function g(e){return Array.isArray(e)?[]:{}}function f(e,r){return r.clone!==!1&&r.isMergeableObject(e)?c(g(e),e,r):e}function j(e,r,t){return e.concat(r).map(function(a){return f(a,t)})}function p(e,r,t){var a={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(n){a[n]=f(e[n],t)}),Object.keys(r).forEach(function(n){!t.isMergeableObject(r[n])||!e[n]?a[n]=f(r[n],t):a[n]=c(e[n],r[n],t)}),a}function c(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||j,t.isMergeableObject=t.isMergeableObject||o;var a=Array.isArray(r),n=Array.isArray(e),l=a===n;return l?a?t.arrayMerge(e,r,t):p(e,r,t):f(r,t)}c.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,n){return c(a,n,t)},{})};var O=c;const m=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),E=u(m);export{u as a,M as c,A as g,E as r};