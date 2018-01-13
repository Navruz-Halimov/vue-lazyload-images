/*!
 * vue-lazy-images v1.4.5
 * (c) 2018 LowesYang
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueLazyImages=t():e.VueLazyImages=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=65)}({64:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(68),a=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.init(t)}return r(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.images=[],this.scrollParent=new WeakSet,this.options=e,this.eventsList=e.eventsList||a}},{key:"addImage",value:function(e){if(e.tagName&&"img"===e.tagName.toLowerCase()){var t=(0,i.getScrollParent)(e);if(t){var n={el:e,scrollParent:t};this.images.push(n),this.initListener(t)}}}},{key:"removeImage",value:function(e){var t=this.images.findIndex(function(t){return t.el===e});this.images.splice(t,1)}},{key:"initListener",value:function(e){var t=this,n=void 0;if(n=this.options.throttle?(0,i.throttle)(this.loadImage,this.options.throttle):this.options.debounce?(0,i.debounce)(this.loadImage,this.options.debounce):this.loadImage,!this.scrollParent.has(e)){var o=(0,i.getStyle)(e,"position");""!==o&&"static"!==o||(e.style.position="relative"),this.scrollParent.add(e),this.eventsList.forEach(function(o){e.addEventListener(o,n.bind(t))})}}},{key:"loadImage",value:function(){for(var e=this,t=this.images,n=0;n<t.length;n++)!function(o){var r=t[o].scrollParent,a=t[o].el;if((0,i.checkInView)(a,r,e.options.offset)){var s=a.dataset.src;s||console.error(a+" has no attribute 'data-src'!");var u=new Image;u.src=s,u.onload=function(){a.src=s,u=null},t.splice(o--,1)}n=o}(n)}}]),e}();t.default=s},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VueLazyImage=t.install=void 0;var r=n(66),i=o(r),a=n(64),s=o(a),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component("lazy-image",i.default),t.offset=parseInt(t.offset,10)||0;var n=new s.default(t);e.prototype.$lazyImages=n};t.default={install:u,VueLazyImage:i.default},t.install=u,t.VueLazyImage=i.default},66:function(e,t,n){var o=n(95)(n(67),n(96),null,null);o.options.__file="/home/anonymous/GitHub/vue-lazyload-images/src/VueLazyImage.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] VueLazyImage.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!1}},computed:{_class:function(){var e=void 0;return this.show&&(e=this.imgClass instanceof Array?this.imgClass.concat(["show"]):this.imgClass+" show"),e}},mounted:function(){var e=this;this.$lazyImages.addImage(this.$refs.target),this.$refs.target.onload=function(){e.show=!0},this.$lazyImages.loadImage()},beforeDestroy:function(){this.$lazyImages.removeImage(this.$refs.target)},props:{imgAlt:{type:String,default:""},src:{type:String,required:!0},placeholder:String,imgClass:{type:[Array,String],default:""}}}},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return!!(window.ActiveXObject||"ActiveXObject"in window)},r=function(e,t){return e&&e!==window?(o()?e.currentStyle[t]:getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t])||e.style[t]:null},i=function(e){return/scroll|auto/.test(r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x"))},a=function(e){if(!(e instanceof HTMLElement))return console.error(e+" is not an HTMLElement"),null;for(var t=e;t&&t!==document.body&&t!==document.documentElement;){if(!t.parentNode)return null;if(i(t))return t;t=t.parentNode}return window},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=void 0,i=void 0,a=0,s=0,u=void 0;o=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.clientWidth||document.body.clientWidth;var l=void 0,c=void 0,f=void 0,d=void 0,p=void 0;if(p=e.getBoundingClientRect(),l=p.top-n,c=p.left-n,d=p.bottom+n,f=p.right+n,u=l<o&&d>0&&c<i&&f>0,t!==window){var h=t.scrollTop,v=t.scrollLeft,m=e.offsetWidth,g=e.offsetHeight;for(o=t.clientHeight,i=t.clientWidth;e&&e!==t;){var y=parseInt(r(e,"border-width"))||0;a+=e.offsetTop+y,s+=e.offsetLeft+y,e=e.offsetParent}u=u&&h+o>a-n&&a+g+n>h&&v+i>s-n&&s+m+n>v}return u},u=function(e,t){var n=0,o=void 0;return!t||t<=0?e:function(){var r=Date.now();r-n>t?(n=r,e.apply(this,arguments)):(clearTimeout(o),o=setTimeout(e.bind.apply(e,[this].concat(Array.prototype.slice.call(arguments))),t-(r-n)))}},l=function(e,t){var n=void 0;return!t||t<=0?e:function(){clearTimeout(n),n=setTimeout(e.bind.apply(e,[this].concat(Array.prototype.slice.call(arguments))),t)}};t.getScrollParent=a,t.getStyle=r,t.checkOverflow=i,t.checkInView=s,t.throttle=u,t.debounce=l},95:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var u=Object.create(s.computed||null);Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}}),s.computed=u}return{esModule:r,exports:i,options:s}}},96:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{ref:"target",class:e._class,attrs:{"data-src":e.src,src:e.placeholder,width:"100%",height:"100%",alt:e.imgAlt}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}})});