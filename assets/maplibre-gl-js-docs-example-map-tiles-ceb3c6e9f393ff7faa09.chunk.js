(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"5dk6":function(t,e,r){var n=r("RBf7");n=n.default||n,t.exports={component:n,props:{frontMatter:{title:"Add a raster tile source",description:"Add a third-party raster source to the map.",topics:["Sources"],thumbnail:"map-tiles",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './map-tiles.html';"]}}}},M4Oy:function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((n=r("fG8n"))&&n.__esModule?n:{default:n}).default;e.default=o},RBf7:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(r("q1tI")),a=(r("yr+R"),r("cQZ0"),s(r("uLm5"))),i=s(r("gN82")),c=s(r("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b={title:"Add a raster tile source",description:"Add a third-party raster source to the map.",topics:["Sources"],thumbnail:"map-tiles",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(y,t);var e,r,n,s=d(y);function y(){return p(this,y),s.apply(this,arguments)}return e=y,(r=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,u({},t,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Add a third-party raster source to the map."),o.default.createElement(a.default,u({html:i.default},this.props))))}}])&&l(e.prototype,r),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),y}(o.default.PureComponent);e.default=h},gN82:function(t,e,r){"use strict";r.r(e),e.default="<div id=\"map\"></div>\n<script>\n    var map = new maplibregl.Map({\n        container: 'map', // container id\n        style: {\n            'version': 8,\n            'sources': {\n                'raster-tiles': {\n                    'type': 'raster',\n                    'tiles': [\n                        'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'\n                    ],\n                    'tileSize': 256,\n                    'attribution':\n                        'Map tiles by <a target=\"_top\" rel=\"noopener\" href=\"http://stamen.com\">Stamen Design</a>, under <a target=\"_top\" rel=\"noopener\" href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a target=\"_top\" rel=\"noopener\" href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a target=\"_top\" rel=\"noopener\" href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>'\n                }\n            },\n            'layers': [\n                {\n                    'id': 'simple-tiles',\n                    'type': 'raster',\n                    'source': 'raster-tiles',\n                    'minzoom': 0,\n                    'maxzoom': 22\n                }\n            ]\n        },\n        center: [-74.5, 40], // starting position\n        zoom: 2 // starting zoom\n    });\n<\/script>\n"},mOgX:function(t,e,r){"use strict";r.r(e);var n=r("YQ9j");function o(t){return"https://unpkg.com/maplibre-gl@".concat(n.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js")},css:function(t){return o("css")}}},uLm5:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return P}));var n=r("q1tI"),o=r.n(n),a=r("mOgX"),i=r("v8ZZ"),c=r("irdr"),s=r.n(c),u=r("M4Oy"),p=r.n(u),l=r("umIL"),f=r("wdKx");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g(t);if(e){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,r,n,c=v(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this,t)).state={unsupported:!1},e}return e=u,(r=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,r=t.location,n=this.displayHTML(e).replace(/[\r\n]+/gm,"\n"),a=f.extractor(n);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(e),highlighter:function(){return l.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:r.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,r=e.frontMatter,n=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"MapLibre GL unsupported",theme:"warning"},"MapLibre GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:n},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(r.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&b(e.prototype,r),n&&b(e,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(o.a.Component);w(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,r){"use strict";function n(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,r=new Blob([""],{type:"text/javascript"}),n=URL.createObjectURL(r);try{e=new Worker(n),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(n),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas");t.width=t.height=1;var e=t.getContext("2d");if(!e)return!1;var r=e.getImageData(0,0,1,1);return r&&r.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){var e,r=function(t){var e=document.createElement("canvas"),r=Object.create(n.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=t,e.getContext("webgl",r)||e.getContext("experimental-webgl",r)}(t);if(!r)return!1;try{e=r.createShader(r.VERTEX_SHADER)}catch(t){return!1}if(!e||r.isContextLost())return!1;return r.shaderSource(e,"void main() {}"),r.compileShader(e),!0===r.getShaderParameter(e,r.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.supported=n,e.notSupportedReason=o;var a={};n.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",r={js:[],css:[]},n=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(i),u="".concat(t.replace(a,"")),p=t.match(a)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(i,"")));if(t.match(n)){var l=t.match(n).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));r.js=r.js.concat(l),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));r.css=r.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(c)&&(u=u.match(c)[1]);return{html:u,css:e,js:p,resources:r}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-map-tiles-ceb3c6e9f393ff7faa09.chunk.js.map