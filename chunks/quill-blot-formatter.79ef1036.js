import{r as ee}from"./deepmerge.df4e92bc.js";import{q as te}from"./quill.5e1304ff.js";var k={},S={},w={},O={},C;function b(){if(C)return O;C=1,Object.defineProperty(O,"__esModule",{value:!0});var v=function(){function c(s,u){for(var l=0;l<u.length;l++){var n=u[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,u,l){return u&&c(s.prototype,u),l&&c(s,l),s}}(),h=m();f(h);function f(c){return c&&c.__esModule?c:{default:c}}function d(c,s){if(!(c instanceof s))throw new TypeError("Cannot call a class as a function")}var p=function(){function c(s){d(this,c),this.formatter=s}return v(c,[{key:"onCreate",value:function(){}},{key:"onDestroy",value:function(){}},{key:"onUpdate",value:function(){}}]),c}();return O.default=p,O}var x={},M={};Object.defineProperty(M,"__esModule",{value:!0});var ne=function(){function v(h,f){for(var d=0;d<f.length;d++){var p=f[d];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(h,p.key,p)}}return function(h,f,d){return f&&v(h.prototype,f),d&&v(h,d),h}}();function D(v,h,f){return h in v?Object.defineProperty(v,h,{value:f,enumerable:!0,configurable:!0,writable:!0}):v[h]=f,v}function re(v,h){if(!(v instanceof h))throw new TypeError("Cannot call a class as a function")}var H="left",I="center",L="right",ie=function(){function v(h){var f=this,d;re(this,v),this.applyStyle=h.aligner.applyStyle,this.alignAttribute=h.attribute,this.alignments=(d={},D(d,H,{name:H,icon:h.icons.left,apply:function(c){f.setAlignment(c,H),f.setStyle(c,"inline","left","0 1em 1em 0")}}),D(d,I,{name:I,icon:h.icons.center,apply:function(c){f.setAlignment(c,I),f.setStyle(c,"block",null,"auto")}}),D(d,L,{name:L,icon:h.icons.right,apply:function(c){f.setAlignment(c,L),f.setStyle(c,"inline","right","0 0 1em 1em")}}),d)}return ne(v,[{key:"getAlignments",value:function(){var f=this;return Object.keys(this.alignments).map(function(d){return f.alignments[d]})}},{key:"clear",value:function(f){f.removeAttribute(this.alignAttribute),this.setStyle(f,null,null,null)}},{key:"isAligned",value:function(f,d){return f.getAttribute(this.alignAttribute)===d.name}},{key:"setAlignment",value:function(f,d){f.setAttribute(this.alignAttribute,d)}},{key:"setStyle",value:function(f,d,p,c){this.applyStyle&&(f.style.setProperty("display",d),f.style.setProperty("float",p),f.style.setProperty("margin",c))}}]),v}();M.default=ie;var z={},N;function Z(){if(N)return z;N=1;var v=m();h(v);function h(f){return f&&f.__esModule?f:{default:f}}return z}var A={},F;function oe(){if(F)return A;F=1,Object.defineProperty(A,"__esModule",{value:!0});var v=function(){function c(s,u){for(var l=0;l<u.length;l++){var n=u[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}return function(s,u,l){return u&&c(s.prototype,u),l&&c(s,l),s}}();Z();var h=m();f(h);function f(c){return c&&c.__esModule?c:{default:c}}function d(c,s){if(!(c instanceof s))throw new TypeError("Cannot call a class as a function")}var p=function(){function c(){d(this,c),this.toolbar=null,this.buttons=[]}return v(c,[{key:"create",value:function(u,l){var n=document.createElement("div");return n.classList.add(u.options.align.toolbar.mainClassName),this.addToolbarStyle(u,n),this.addButtons(u,n,l),this.toolbar=n,this.toolbar}},{key:"destroy",value:function(){this.toolbar=null,this.buttons=[]}},{key:"getElement",value:function(){return this.toolbar}},{key:"addToolbarStyle",value:function(u,l){u.options.align.toolbar.mainStyle&&Object.assign(l.style,u.options.align.toolbar.mainStyle)}},{key:"addButtonStyle",value:function(u,l,n){n.options.align.toolbar.buttonStyle&&(Object.assign(u.style,n.options.align.toolbar.buttonStyle),l>0&&(u.style.borderLeftWidth="0")),n.options.align.toolbar.svgStyle&&Object.assign(u.children[0].style,n.options.align.toolbar.svgStyle)}},{key:"addButtons",value:function(u,l,n){var o=this;n.getAlignments().forEach(function(i,e){var t=document.createElement("span");t.classList.add(u.options.align.toolbar.buttonClassName),t.innerHTML=i.icon,t.addEventListener("click",function(){o.onButtonClick(t,u,i,n)}),o.preselectButton(t,i,u,n),o.addButtonStyle(t,e,u),o.buttons.push(t),l.appendChild(t)})}},{key:"preselectButton",value:function(u,l,n,o){if(!!n.currentSpec){var i=n.currentSpec.getTargetElement();!i||o.isAligned(i,l)&&this.selectButton(n,u)}}},{key:"onButtonClick",value:function(u,l,n,o){if(!!l.currentSpec){var i=l.currentSpec.getTargetElement();!i||this.clickButton(u,i,l,n,o)}}},{key:"clickButton",value:function(u,l,n,o,i){var e=this;this.buttons.forEach(function(t){e.deselectButton(n,t)}),i.isAligned(l,o)?n.options.align.toolbar.allowDeselect?i.clear(l):this.selectButton(n,u):(this.selectButton(n,u),o.apply(l)),n.update()}},{key:"selectButton",value:function(u,l){l.classList.add("is-selected"),u.options.align.toolbar.addButtonSelectStyle&&l.style.setProperty("filter","invert(20%)")}},{key:"deselectButton",value:function(u,l){l.classList.remove("is-selected"),u.options.align.toolbar.addButtonSelectStyle&&l.style.removeProperty("filter")}}]),c}();return A.default=p,A}var $;function ae(){if($)return x;$=1,Object.defineProperty(x,"__esModule",{value:!0});var v=function(){function t(r,a){for(var y=0;y<a.length;y++){var g=a[y];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(r,g.key,g)}}return function(r,a,y){return a&&t(r.prototype,a),y&&t(r,y),r}}(),h=b(),f=l(h),d=m();l(d);var p=M,c=l(p);Z();var s=oe(),u=l(s);function l(t){return t&&t.__esModule?t:{default:t}}function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:t}function i(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}var e=function(t){i(r,t);function r(a){n(this,r);var y=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return y.aligner=new c.default(a.options.align),y.toolbar=new u.default,y}return v(r,[{key:"onCreate",value:function(){var y=this.toolbar.create(this.formatter,this.aligner);this.formatter.overlay.appendChild(y)}},{key:"onDestroy",value:function(){var y=this.toolbar.getElement();!y||(this.formatter.overlay.removeChild(y),this.toolbar.destroy())}}]),r}(f.default);return x.default=e,x}var E={},X;function le(){if(X)return E;X=1,Object.defineProperty(E,"__esModule",{value:!0});var v=function(){function n(o,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(o,i,e){return i&&n(o.prototype,i),e&&n(o,e),o}}(),h=b(),f=p(h),d=m();p(d);function p(n){return n&&n.__esModule?n:{default:n}}function c(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function s(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:n}function u(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}var l=function(n){u(o,n);function o(i){c(this,o);var e=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return e.onMouseDown=function(t){if(t.target instanceof HTMLElement&&(e.dragHandle=t.target,e.setCursor(e.dragHandle.style.cursor),!!e.formatter.currentSpec)){var r=e.formatter.currentSpec.getTargetElement();if(!!r){var a=r.getBoundingClientRect();e.dragStartX=t.clientX,e.preDragWidth=a.width,e.targetRatio=a.height/a.width,document.addEventListener("mousemove",e.onDrag),document.addEventListener("mouseup",e.onMouseUp)}}},e.onDrag=function(t){if(!!e.formatter.currentSpec){var r=e.formatter.currentSpec.getTargetElement();if(!!r){var a=t.clientX-e.dragStartX,y=0;e.dragHandle===e.topLeftHandle||e.dragHandle===e.bottomLeftHandle?y=Math.round(e.preDragWidth-a):y=Math.round(e.preDragWidth+a);var g=e.targetRatio*y;r.setAttribute("width",""+y),r.setAttribute("height",""+g),e.formatter.update()}}},e.onMouseUp=function(){e.setCursor(""),document.removeEventListener("mousemove",e.onDrag),document.removeEventListener("mouseup",e.onMouseUp)},e.topLeftHandle=e.createHandle("top-left","nwse-resize"),e.topRightHandle=e.createHandle("top-right","nesw-resize"),e.bottomRightHandle=e.createHandle("bottom-right","nwse-resize"),e.bottomLeftHandle=e.createHandle("bottom-left","nesw-resize"),e.dragHandle=null,e.dragStartX=0,e.preDragWidth=0,e.targetRatio=0,e}return v(o,[{key:"onCreate",value:function(){this.formatter.overlay.appendChild(this.topLeftHandle),this.formatter.overlay.appendChild(this.topRightHandle),this.formatter.overlay.appendChild(this.bottomRightHandle),this.formatter.overlay.appendChild(this.bottomLeftHandle),this.repositionHandles(this.formatter.options.resize.handleStyle)}},{key:"onDestroy",value:function(){this.setCursor(""),this.formatter.overlay.removeChild(this.topLeftHandle),this.formatter.overlay.removeChild(this.topRightHandle),this.formatter.overlay.removeChild(this.bottomRightHandle),this.formatter.overlay.removeChild(this.bottomLeftHandle)}},{key:"createHandle",value:function(e,t){var r=document.createElement("div");return r.classList.add(this.formatter.options.resize.handleClassName),r.setAttribute("data-position",e),r.style.cursor=t,this.formatter.options.resize.handleStyle&&Object.assign(r.style,this.formatter.options.resize.handleStyle),r.addEventListener("mousedown",this.onMouseDown),r}},{key:"repositionHandles",value:function(e){var t="0px",r="0px";e&&(e.width&&(t=-parseFloat(e.width)/2+"px"),e.height&&(r=-parseFloat(e.height)/2+"px")),Object.assign(this.topLeftHandle.style,{left:t,top:r}),Object.assign(this.topRightHandle.style,{right:t,top:r}),Object.assign(this.bottomRightHandle.style,{right:t,bottom:r}),Object.assign(this.bottomLeftHandle.style,{left:t,bottom:r})}},{key:"setCursor",value:function(e){if(document.body&&(document.body.style.cursor=e),this.formatter.currentSpec){var t=this.formatter.currentSpec.getOverlayElement();t&&(t.style.cursor=e)}}}]),o}(f.default);return E.default=l,E}var R={},V;function ue(){if(V)return R;V=1,Object.defineProperty(R,"__esModule",{value:!0});var v=function(){function o(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}return function(i,e,t){return e&&o(i.prototype,e),t&&o(i,t),i}}(),h=te.exports,f=c(h),d=b(),p=c(d);function c(o){return o&&o.__esModule?o:{default:o}}function s(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function u(o,i){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i&&(typeof i=="object"||typeof i=="function")?i:o}function l(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}var n=function(o){l(i,o);function i(){var e,t,r,a;s(this,i);for(var y=arguments.length,g=Array(y),_=0;_<y;_++)g[_]=arguments[_];return a=(t=(r=u(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(g))),r),r.onKeyUp=function(U){if(!!r.formatter.currentSpec&&(U.keyCode===46||U.keyCode===8)){var j=f.default.find(r.formatter.currentSpec.getTargetElement());j&&j.deleteAt(0),r.formatter.hide()}},t),u(r,a)}return v(i,[{key:"onCreate",value:function(){document.addEventListener("keyup",this.onKeyUp,!0),this.formatter.quill.root.addEventListener("input",this.onKeyUp,!0)}},{key:"onDestroy",value:function(){document.removeEventListener("keyup",this.onKeyUp),this.formatter.quill.root.removeEventListener("input",this.onKeyUp)}}]),i}(p.default);return R.default=n,R}var W;function P(){if(W)return w;W=1,Object.defineProperty(w,"__esModule",{value:!0});var v=function(){function e(t,r){for(var a=0;a<r.length;a++){var y=r[a];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(t,y.key,y)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),h=m();n(h);var f=b();n(f);var d=ae(),p=n(d),c=le(),s=n(c),u=ue(),l=n(u);function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(t){o(this,e),this.formatter=t}return v(e,[{key:"init",value:function(){}},{key:"getActions",value:function(){return[p.default,s.default,l.default]}},{key:"getTargetElement",value:function(){return null}},{key:"getOverlayElement",value:function(){return this.getTargetElement()}},{key:"setSelection",value:function(){this.formatter.quill.setSelection(null)}},{key:"onHide",value:function(){}}]),e}();return w.default=i,w}var q={},G;function ce(){if(G)return q;G=1,Object.defineProperty(q,"__esModule",{value:!0});var v=function(){function n(o,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(o,i,e){return i&&n(o.prototype,i),e&&n(o,e),o}}(),h=P(),f=p(h),d=m();p(d);function p(n){return n&&n.__esModule?n:{default:n}}function c(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function s(n,o){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:n}function u(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(n,o):n.__proto__=o)}var l=function(n){u(o,n);function o(i){c(this,o);var e=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return e.onClick=function(t){var r=t.target;!(r instanceof HTMLElement)||r.tagName!=="IMG"||(e.img=r,e.formatter.show(e))},e.img=null,e}return v(o,[{key:"init",value:function(){this.formatter.quill.root.addEventListener("click",this.onClick)}},{key:"getTargetElement",value:function(){return this.img}},{key:"onHide",value:function(){this.img=null}}]),o}(f.default);return q.default=l,q}var B={},T={},K;function fe(){if(K)return T;K=1,Object.defineProperty(T,"__esModule",{value:!0});var v=function(){function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}(),h=P(),f=p(h),d=m();p(d);function p(i){return i&&i.__esModule?i:{default:i}}function c(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function s(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i}function u(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}var l="data-blot-formatter-unclickable-bound",n="blot-formatter__proxy-image",o=function(i){u(e,i);function e(t,r){c(this,e);var a=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return a.onTextChange=function(){Array.from(document.querySelectorAll(a.selector+":not(["+l+"])")).forEach(function(y){y.setAttribute(l,"true"),y.addEventListener("mouseenter",a.onMouseEnter)})},a.onMouseEnter=function(y){var g=y.target;g instanceof HTMLElement&&(a.nextUnclickable=g,a.repositionProxyImage(a.nextUnclickable))},a.onProxyImageClick=function(){a.unclickable=a.nextUnclickable,a.nextUnclickable=null,a.formatter.show(a),a.hideProxyImage()},a.selector=r,a.unclickable=null,a.nextUnclickable=null,a}return v(e,[{key:"init",value:function(){document.body&&document.body.appendChild(this.createProxyImage()),this.hideProxyImage(),this.proxyImage.addEventListener("click",this.onProxyImageClick),this.formatter.quill.on("text-change",this.onTextChange)}},{key:"getTargetElement",value:function(){return this.unclickable}},{key:"getOverlayElement",value:function(){return this.unclickable}},{key:"onHide",value:function(){this.hideProxyImage(),this.nextUnclickable=null,this.unclickable=null}},{key:"createProxyImage",value:function(){var r=document.createElement("canvas"),a=r.getContext("2d");return a.globalAlpha=0,a.fillRect(0,0,1,1),this.proxyImage=document.createElement("img"),this.proxyImage.src=r.toDataURL("image/png"),this.proxyImage.classList.add(n),Object.assign(this.proxyImage.style,{position:"absolute",margin:"0"}),this.proxyImage}},{key:"hideProxyImage",value:function(){Object.assign(this.proxyImage.style,{display:"none"})}},{key:"repositionProxyImage",value:function(r){var a=r.getBoundingClientRect();Object.assign(this.proxyImage.style,{display:"block",left:a.left+window.pageXOffset+"px",top:a.top+window.pageYOffset+"px",width:a.width+"px",height:a.height+"px"})}}]),e}(f.default);return T.default=o,T}var Y;function se(){if(Y)return B;Y=1,Object.defineProperty(B,"__esModule",{value:!0});var v=fe(),h=d(v),f=m();d(f);function d(l){return l&&l.__esModule?l:{default:l}}function p(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function c(l,n){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:l}function s(l,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(l,n):l.__proto__=n)}var u=function(l){s(n,l);function n(o){return p(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o,"iframe.ql-video"))}return n}(h.default);return B.default=u,B}var J;function he(){if(J)return S;J=1,Object.defineProperty(S,"__esModule",{value:!0});var v=P();c(v);var h=ce(),f=c(h),d=se(),p=c(d);function c(u){return u&&u.__esModule?u:{default:u}}var s={specs:[f.default,p.default],overlay:{className:"blot-formatter__overlay",style:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"}},align:{attribute:"data-align",aligner:{applyStyle:!0},icons:{left:`
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
        </svg>
      `,center:`
        <svg viewbox="0 0 18 18">
           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
        </svg>
      `,right:`
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
        </svg>
      `},toolbar:{allowDeselect:!0,mainClassName:"blot-formatter__toolbar",mainStyle:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default",zIndex:"1"},buttonClassName:"blot-formatter__toolbar-button",addButtonSelectStyle:!0,buttonStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},svgStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"}}},resize:{handleClassName:"blot-formatter__resize-handle",handleStyle:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"}}};return S.default=s,S}var Q;function m(){if(Q)return k;Q=1,Object.defineProperty(k,"__esModule",{value:!0});var v=function(){function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}(),h=ee,f=u(h),d=he(),p=u(d),c=b();u(c);var s=P();u(s);function u(i){return i&&i.__esModule?i:{default:i}}function l(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(e,t){return t},o=function(){function i(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};l(this,i),this.onClick=function(){t.hide()},this.quill=e,this.options=(0,f.default)(p.default,r,{arrayMerge:n}),this.currentSpec=null,this.actions=[],this.overlay=document.createElement("div"),this.overlay.classList.add(this.options.overlay.className),this.options.overlay.style&&Object.assign(this.overlay.style,this.options.overlay.style),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.quill.root.addEventListener("click",this.onClick),this.specs=this.options.specs.map(function(a){return new a(t)}),this.specs.forEach(function(a){return a.init()})}return v(i,[{key:"show",value:function(t){this.currentSpec=t,this.currentSpec.setSelection(),this.setUserSelect("none"),this.quill.root.parentNode.appendChild(this.overlay),this.repositionOverlay(),this.createActions(t)}},{key:"hide",value:function(){!this.currentSpec||(this.currentSpec.onHide(),this.currentSpec=null,this.quill.root.parentNode.removeChild(this.overlay),this.overlay.style.setProperty("display","none"),this.setUserSelect(""),this.destroyActions())}},{key:"update",value:function(){this.repositionOverlay(),this.actions.forEach(function(t){return t.onUpdate()})}},{key:"createActions",value:function(t){var r=this;this.actions=t.getActions().map(function(a){var y=new a(r);return y.onCreate(),y})}},{key:"destroyActions",value:function(){this.actions.forEach(function(t){return t.onDestroy()}),this.actions=[]}},{key:"repositionOverlay",value:function(){if(!!this.currentSpec){var t=this.currentSpec.getOverlayElement();if(!!t){var r=this.quill.root.parentNode,a=t.getBoundingClientRect(),y=r.getBoundingClientRect();Object.assign(this.overlay.style,{display:"block",left:a.left-y.left-1+r.scrollLeft+"px",top:a.top-y.top+r.scrollTop+"px",width:a.width+"px",height:a.height+"px"})}}}},{key:"setUserSelect",value:function(t){var r=this,a=["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"];a.forEach(function(y){r.quill.root.style.setProperty(y,t),document.documentElement&&document.documentElement.style.setProperty(y,t)})}}]),i}();return k.default=o,k}var ve=m();export{ve as B};
