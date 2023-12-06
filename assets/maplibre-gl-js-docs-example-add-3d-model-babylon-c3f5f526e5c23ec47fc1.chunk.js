(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7z+X":function(e,t,n){"use strict";n.r(t),t.default="<script src=\"https://unpkg.com/babylonjs@5.42.2/babylon.js\"><\/script>\n<script src=\"https://unpkg.com/babylonjs-loaders@5.42.2/babylonjs.loaders.min.js\"><\/script>\n<div id=\"map\"></div>\n<script>\n    var BABYLON = window.BABYLON;\n\n    var map = (window.map = new maplibregl.Map({\n        container: 'map',\n        style: 'https://api.radar.io/maps/styles/radar-default-v1?publishableKey=org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947',\n        zoom: 18,\n        center: [148.9819, -35.3981],\n        pitch: 60,\n        antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased\n    }));\n\n    // World matrix parameters\n    var worldOrigin = [148.9819, -35.39847];\n    var worldAltitude = 0;\n\n    // Maplibre.js default coordinate system (no rotations)\n    // +x east, -y north, +z up\n    //var worldRotate = [0, 0, 0];\n\n    // Babylon.js default coordinate system\n    // +x east, +y up, +z north\n    var worldRotate = [Math.PI / 2, 0, 0];\n\n    // Calculate mercator coordinates and scale\n    var worldOriginMercator = maplibregl.MercatorCoordinate.fromLngLat(\n        worldOrigin,\n        worldAltitude\n    );\n    const worldScale = worldOriginMercator.meterInMercatorCoordinateUnits();\n\n    // Calculate world matrix\n    var worldMatrix = BABYLON.Matrix.Compose(\n        new BABYLON.Vector3(worldScale, worldScale, worldScale),\n        BABYLON.Quaternion.FromEulerAngles(\n            worldRotate[0],\n            worldRotate[1],\n            worldRotate[2]\n        ),\n        new BABYLON.Vector3(\n            worldOriginMercator.x,\n            worldOriginMercator.y,\n            worldOriginMercator.z\n        )\n    );\n\n    // configuration of the custom layer for a 3D model per the CustomLayerInterface\n    var customLayer = {\n        id: '3d-model',\n        type: 'custom',\n        renderingMode: '3d',\n        onAdd: function (map, gl) {\n            this.engine = new BABYLON.Engine(\n                gl,\n                true,\n                {\n                    useHighPrecisionMatrix: true // Important to prevent jitter at mercator scale\n                },\n                true\n            );\n            this.scene = new BABYLON.Scene(this.engine);\n            this.scene.autoClear = false;\n            this.scene.detachControl();\n\n            this.scene.beforeRender = () => {\n                this.engine.wipeCaches(true);\n            };\n\n            // create simple camera (will have its project matrix manually calculated)\n            this.camera = new BABYLON.Camera(\n                'Camera',\n                new BABYLON.Vector3(0, 0, 0),\n                this.scene\n            );\n\n            // create simple light\n            const light = new BABYLON.HemisphericLight(\n                'light1',\n                new BABYLON.Vector3(0, 0, 100),\n                this.scene\n            );\n            light.intensity = 0.7;\n\n            // Add debug axes viewer, positioned at origin, 10 meter axis lengths\n            new BABYLON.AxesViewer(this.scene, 10);\n\n            // load GLTF model in to the scene\n            BABYLON.SceneLoader.LoadAssetContainerAsync(\n                'https://maplibre.org/maplibre-gl-js-docs/assets/34M_17/34M_17.gltf',\n                '',\n                this.scene\n            ).then((modelContainer) => {\n                modelContainer.addAllToScene();\n\n                const rootMesh = modelContainer.createRootMesh();\n\n                // If using maplibre.js coordinate system (+z up)\n                //rootMesh.rotation.x = Math.PI/2\n\n                // Create a second mesh\n                const rootMesh2 = rootMesh.clone();\n\n                // Position in babylon.js coordinate system\n                rootMesh2.position.x = 25; // +east, meters\n                rootMesh2.position.z = 25; // +north, meters\n            });\n\n            this.map = map;\n        },\n        render: function (gl, matrix) {\n            const cameraMatrix = BABYLON.Matrix.FromArray(matrix);\n\n            // world-view-projection matrix\n            const wvpMatrix = worldMatrix.multiply(cameraMatrix);\n\n            this.camera.freezeProjectionMatrix(wvpMatrix);\n\n            this.scene.render(false);\n            this.map.triggerRepaint();\n        }\n    };\n\n    map.on('style.load', function () {\n        map.addLayer(customLayer);\n    });\n<\/script>\n"},HGK0:function(e,t,n){var r=n("Lc9W");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Add a 3D model with babylon.js",description:"Use a custom style layer with babylon.js to add a 3D model to the map.",topics:["Layers"],thumbnail:"add-3d-model-babylon",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './add-3d-model-babylon.html';"]}}}},Lc9W:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("7z+X")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Add a 3D model with babylon.js",description:"Use a custom style layer with babylon.js to add a 3D model to the map.",topics:["Layers"],thumbnail:"add-3d-model-babylon",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(m,e);var t,n,r,s=d(m);function m(){return u(this,m),s.apply(this,arguments)}return t=m,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,l({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use a ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/api/properties/#customlayerinterface"},"custom style layer")," with ",o.default.createElement("a",{href:"https://babylonjs.com/"},"babylon.js")," to add a 3D model to the map."),o.default.createElement(a.default,l({html:i.default},this.props))))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(o.default.PureComponent);t.default=b},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("YQ9j");function o(e){return"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js")},css:function(e){return o("css")}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("v8ZZ"),c=n("irdr"),s=n.n(c),l=n("M4Oy"),u=n.n(l),p=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',M="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,r,c=w(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={unsupported:!1},t}return t=l,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(M,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(M,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t).replace(/[\r\n]+/gm,"\n"),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return p.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"MapLibre GL unsupported",theme:"warning"},"MapLibre GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.a.Component);v(L,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),l="".concat(e.replace(a,"")),u=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(i,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-add-3d-model-babylon-c3f5f526e5c23ec47fc1.chunk.js.map