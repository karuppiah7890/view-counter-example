parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zzYA":[function(require,module,exports) {
"use strict";function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var o=function o(i,s,a){t(this,o),this.type=i,this.loaded=void 0!==s?s:0,a>0?(this.total=a,this.lengthComputable=!0):(this.total=0,this.lengthComputable=!1)};module.exports=o;
},{}],"btwv":[function(require,module,exports) {
"use strict";function e(e){return r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e){return"boolean"==typeof e?e:!!e.capture}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;i(this,t),this._eventContext=e,this._eventListeners={}}return o(t,[{key:"hasListeners",value:function(){var e=this;return t.events.some(function(t){return e._eventListeners[t]||e["on".concat(t)]})}},{key:"addEventListener",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t){var r={callback:t,useCapture:a(n),once:!!n.once};this._eventListeners[e]=this._eventListeners[e]||[],this._eventListeners[e].some(function(e){return e.callback===r.callback&&e.useCapture===r.useCapture})||this._eventListeners[e].push(r)}}},{key:"removeEventListener",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._eventListeners[e]){var r=a(n),i=this._eventListeners[e].findIndex(function(e){return t===e.callback&&r===e.useCapture});i>=0&&this._eventListeners[e].splice(i,1)}}},{key:"dispatchEvent",value:function(n){var r=this,i=[];if(this._eventListeners[n.type]&&(i.push.apply(i,e(this._eventListeners[n.type].map(function(e){return e.callback}))),this._eventListeners[n.type]=this._eventListeners[n.type].filter(function(e){return!e.once})),t.events.includes(n.type)){var s=this["on".concat(n.type)];s&&i.push(s)}return i.forEach(function(e){"function"==typeof e?e.call(r._eventContext,n):e.handleEvent()}),!0}}]),t}();u.events=["loadstart","progress","abort","error","load","timeout","loadend"],module.exports=u;
},{}],"Qmwk":[function(require,module,exports) {
"use strict";function e(e){return n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function n(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}var i=function(){function t(e){var r=this;a(this,t),this._headers=new Map,e&&e instanceof Object&&Object.keys(e).forEach(function(t){r.addHeader(t,e[t])})}return c(t,[{key:"reset",value:function(){this._headers.clear()}},{key:"getHeader",value:function(e){var t=this._headers.get(e.toLowerCase());return void 0!==t?t:null}},{key:"getAll",value:function(){var t=this;return e(this._headers.keys()).sort().reduce(function(e,r){var n=t._headers.get(r);return"".concat(e).concat(r,": ").concat(n,"\r\n")},"")}},{key:"getHash",value:function(){var e={};return this._headers.forEach(function(t,r){e[r]=t}),e}},{key:"addHeader",value:function(e,t){e=e.toLowerCase();var r=this._headers.get(e);r&&(t="".concat(r,", ").concat(t)),this._headers.set(e,t)}}]),t}();module.exports=i;
},{}],"78Pb":[function(require,module,exports) {
"use strict";var e=["Accept-Charset","Accept-Encoding","Access-Control-Request-Headers","Access-Control-Request-Method","Connection","Content-Length","Cookie","Cookie2","Date","DNT","Expect","Host","Keep-Alive","Origin","Referer","TE","Trailer","Transfer-Encoding","Upgrade","Via"],t=new RegExp("^(".concat(e.join("|"),"|Proxy-.*|Sec-.*)$"),"i");function o(e){return t.test(e)}function n(e){return/^(CONNECT|TRACE|TRACK)$/i.test(e)}var r=["DELETE","GET","HEAD","OPTIONS","POST","PUT"],i=new RegExp("^(".concat(r.join("|"),")$"),"i");function a(e){return i.test(e)&&(e=e.toUpperCase()),e}var d={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",507:"Insufficient Storage",511:"Network Authentication Required"};function c(e){return d[e]||"Unknown Status"}module.exports={getStatusText:c,isRequestHeaderForbidden:o,isRequestMethodForbidden:n,normalizeHTTPMethodName:a};
},{}],"0X/f":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function n(t,s){return!s||"object"!==e(s)&&"function"!=typeof s?i(t):s}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=require("./Event"),d=require("./EventTarget"),l=require("./HeadersContainer"),_=require("./Utils");function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=new Error(t);throw s.name=e,s}var p=function(e){function s(){var e;return t(this,s),(e=n(this,o(s).call(this)))._readyState=s.UNSENT,e.requestHeaders=new l,e._withCredentials=!1,e._timeout=0,e._upload=new d(i(e)),e._response=e._networkErrorResponse(),e.timeoutEnabled=!0,"function"==typeof s.onCreate&&s.onCreate(i(e)),e}return a(s,d),r(s,[{key:"open",value:function(e,t){if(!(!(arguments.length>2&&void 0!==arguments[2])||arguments[2]))throw new Error("async = false is not supported.");_.isRequestMethodForbidden(e)&&y("SecurityError",'Method "'.concat(e,'" forbidden.')),e=_.normalizeHTTPMethodName(e),this._terminateRequest(),this._sendFlag=!1,this._uploadListenerFlag=!1,this.method=e,this.url=t,this.requestHeaders.reset(),this._response=this._networkErrorResponse(),this._readyState!==s.OPENED&&(this._readyState=s.OPENED,this._fireReadyStateChange())}},{key:"setRequestHeader",value:function(e,t){if((this._readyState!==s.OPENED||this._sendFlag)&&y("InvalidStateError"),"string"!=typeof e||"string"!=typeof t)throw new SyntaxError;_.isRequestHeaderForbidden(e)||(t=t.trim(),this.requestHeaders.addHeader(e,t))}},{key:"send",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((this._readyState!==s.OPENED||this._sendFlag)&&y("InvalidStateError"),"GET"!==this.method&&"HEAD"!==this.method||(t=null),null!==t){var r,n=null;"string"==typeof t?n="text/plain;charset=UTF-8":t.type&&(n=t.type),r=n,null===this.requestHeaders.getHeader("Content-Type")&&null!==r&&this.requestHeaders.addHeader("Content-Type",r)}if(this._uploadListenerFlag=this._upload.hasListeners(),this.body=t,this._uploadCompleteFlag=null===this.body,this._timedOutFlag=!1,this._sendFlag=!0,this._fireEvent("loadstart",0,0),!this._uploadCompleteFlag&&this._uploadListenerFlag&&this._fireUploadEvent("loadstart",0,this._getRequestBodySize()),this._readyState===s.OPENED&&this._sendFlag){if(this._timeoutReference=Date.now(),this._scheduleRequestTimeout(),"function"==typeof this.onSend){var{onSend:o}=this;setTimeout(function(){return o.call(e,e)},0)}if("function"==typeof s.onSend){var{onSend:i}=s;setTimeout(function(){return i.call(e,e)},0)}}}},{key:"abort",value:function(){this._terminateRequest(),(this._readyState===s.OPENED&&this._sendFlag||this._readyState===s.HEADERS_RECEIVED||this._readyState===s.LOADING)&&this._requestErrorSteps("abort"),this._readyState===s.DONE&&(this._readyState=s.UNSENT,this._response=this._networkErrorResponse())}},{key:"getResponseHeader",value:function(e){return this._response.headers.getHeader(e)}},{key:"getAllResponseHeaders",value:function(){return this._response.headers.getAll()}},{key:"overrideMimeType",value:function(){this._readyState!==s.LOADING&&this._readyState!==s.DONE||y("InvalidStateError")}},{key:"uploadProgress",value:function(e){if(!this._sendFlag||this._uploadCompleteFlag)throw new Error("Mock usage error detected.");this._uploadListenerFlag&&this._fireUploadEvent("progress",e,this._getRequestBodySize())}},{key:"respond",value:function(e,t,s,r){this.setResponseHeaders(e,t,r),this.setResponseBody(s)}},{key:"setResponseHeaders",value:function(e,t,r){if(this._readyState!==s.OPENED||!this._sendFlag)throw new Error("Mock usage error detected.");this.body&&this._requestEndOfBody(),e="number"==typeof e?e:200;var n=void 0!==r?r:_.getStatusText(e);this._processResponse({status:e,statusMessage:n,headers:new l(t)})}},{key:"downloadProgress",value:function(e,t){if(this._readyState!==s.HEADERS_RECEIVED&&this._readyState!==s.LOADING)throw new Error("Mock usage error detected.");this._readyState===s.HEADERS_RECEIVED&&(this._readyState=s.LOADING),this._fireReadyStateChange(),this._fireEvent("progress",e,t)}},{key:"setResponseBody",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this._sendFlag||this._readyState!==s.OPENED&&this._readyState!==s.HEADERS_RECEIVED&&this._readyState!==s.LOADING)throw new Error("Mock usage error detected.");this._readyState===s.OPENED&&this.setResponseHeaders(),this._readyState=s.LOADING,this._fireReadyStateChange(),this._response.body=void 0!==e?e:null,this._handleResponseEndOfBody()}},{key:"setNetworkError",value:function(){if(!this._sendFlag)throw new Error("Mock usage error detected.");this._processResponse(this._networkErrorResponse())}},{key:"setRequestTimeout",value:function(){if(!this._sendFlag)throw new Error("Mock usage error detected.");this._terminateRequest(),this._timedOutFlag=!0,this._processResponse(this._networkErrorResponse())}},{key:"_requestEndOfBody",value:function(){if(this._uploadCompleteFlag=!0,this._uploadListenerFlag){var e=this._getRequestBodySize(),t=e;this._fireUploadEvent("progress",t,e),this._fireUploadEvent("load",t,e),this._fireUploadEvent("loadend",t,e)}}},{key:"_processResponse",value:function(e){this._response=e,this._handleResponseErrors(),this._isNetworkErrorResponse()||(this._readyState=s.HEADERS_RECEIVED,this._fireReadyStateChange(),this._readyState===s.HEADERS_RECEIVED&&null===this._response.body&&this._handleResponseEndOfBody())}},{key:"_handleResponseEndOfBody",value:function(){if(this._handleResponseErrors(),!this._isNetworkErrorResponse()){var e=this._response.body?this._response.body.length:0;this._fireEvent("progress",e,e),this._readyState=s.DONE,this._sendFlag=!1,this._fireReadyStateChange(),this._fireEvent("load",e,e),this._fireEvent("loadend",e,e)}}},{key:"_handleResponseErrors",value:function(){this._sendFlag&&(this._timedOutFlag?this._requestErrorSteps("timeout"):this._isNetworkErrorResponse()&&this._requestErrorSteps("error"))}},{key:"_requestErrorSteps",value:function(e){this._readyState=s.DONE,this._sendFlag=!1,this._response=this._networkErrorResponse(),this._fireReadyStateChange(),this._uploadCompleteFlag||(this._uploadCompleteFlag=!0,this._uploadListenerFlag&&(this._fireUploadEvent(e,0,0),this._fireUploadEvent("loadend",0,0))),this._fireEvent(e,0,0),this._fireEvent("loadend",0,0)}},{key:"_networkErrorResponse",value:function(){return{type:"error",status:0,statusMessage:"",headers:new l,body:null}}},{key:"_isNetworkErrorResponse",value:function(){return"error"===this._response.type}},{key:"_terminateRequest",value:function(){delete this.method,delete this.url}},{key:"_getRequestBodySize",value:function(){return this.body?this.body.size?this.body.size:this.body.length:0}},{key:"_newEvent",value:function(e,t,s){return new h(e,t,s)}},{key:"_fireEvent",value:function(e,t,s){this.dispatchEvent(this._newEvent(e,t,s))}},{key:"_fireUploadEvent",value:function(e,t,s){this._upload.dispatchEvent(this._newEvent(e,t,s))}},{key:"_fireReadyStateChange",value:function(){var e=new h("readystatechange");this.onreadystatechange&&this.onreadystatechange(e),this.dispatchEvent(e)}},{key:"_scheduleRequestTimeout",value:function(){var e=this;if(this._timeoutTask&&clearTimeout(this._timeoutTask),this._timeout>0){var t=Math.max(0,this._timeout-(Date.now()-this._timeoutReference));this._timeoutTask=setTimeout(function(){e._sendFlag&&e.setRequestTimeout(),delete e._timeoutTask},t)}}},{key:"readyState",get:function(){return this._readyState},set:function(e){return e}},{key:"timeout",get:function(){return this._timeout},set:function(e){this._timeout=e,this._sendFlag&&this.timeoutEnabled&&this.constructor.timeoutEnabled&&this._scheduleRequestTimeout()}},{key:"withCredentials",get:function(){return this._withCredentials},set:function(e){(this._readyState!==s.UNSENT&&this._readyState!==s.OPENED||this._sendFlag)&&y("InvalidStateError"),this._withCredentials=!!e}},{key:"upload",get:function(){return this._upload},set:function(e){return e}},{key:"status",get:function(){return this._response.status},set:function(e){return e}},{key:"statusText",get:function(){return this._response.statusMessage},set:function(e){return e}},{key:"responseType",get:function(){return this._responseType||""},set:function(e){this._readyState!==s.LOADING&&this._readyState!==s.DONE||y("InvalidStateError");["","arraybuffer","blob","document","json","text"].includes(e)&&(this._responseType=e)}},{key:"response",get:function(){if(""===this.responseType||"text"===this.responseType)return this._readyState!==s.LOADING&&this._readyState!==s.DONE?"":null===this._response.body?"":this._response.body;if(this._readyState!==s.DONE)return null;if("json"===this.responseType){if(null===this._response.body)return null;try{return JSON.parse(this._response.body)}catch(e){return null}}return this._response.body},set:function(e){return e}},{key:"responseText",get:function(){return""!==this.responseType&&"text"!==this.responseType&&y("InvalidStateError"),this._readyState!==s.LOADING&&this._readyState!==s.DONE?"":null===this._response.body?"":this._response.body},set:function(e){return e}},{key:"responseXML",get:function(){return""!==this.responseType&&"document"!==this.responseType&&y("InvalidStateError"),this._readyState!==s.DONE?null:null===this._response.body?"":this._response.body},set:function(e){return e}}]),s}();p.timeoutEnabled=!0,p.UNSENT=0,p.OPENED=1,p.HEADERS_RECEIVED=2,p.LOADING=3,p.DONE=4,module.exports=p;
},{"./Event":"zzYA","./EventTarget":"btwv","./HeadersContainer":"Qmwk","./Utils":"78Pb"}],"4FnR":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var u=require("./Utils"),s=function(){function n(e){var r=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,n),this.MockXhr=e,this._requests=[],this._routes={},Object.keys(u).forEach(function(e){var[t,n]=u[e];r.addHandler(e,t,n)}),e.onSend=function(e){r._handleRequest(e)},this.xhrMock=e,this.xhrFactory=function(){return new r.MockXhr}}return r(n,[{key:"install",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return this._savedXMLHttpRequest=t.XMLHttpRequest,this._savedContext=t,t.XMLHttpRequest=this.MockXhr,this}},{key:"remove",value:function(){if(!this._savedContext)throw new Error("remove() called without matching install(global).");void 0!==this._savedXMLHttpRequest?(this._savedContext.XMLHttpRequest=this._savedXMLHttpRequest,delete this._savedXMLHttpRequest):delete this._savedContext.XMLHttpRequest,delete this._savedContext}},{key:"disableTimeout",value:function(){this.MockXhr.timeoutEnabled=!1}},{key:"enableTimeout",value:function(){this.MockXhr.timeoutEnabled=!0}},{key:"get",value:function(e,t){return this.addHandler("GET",e,t)}},{key:"post",value:function(e,t){return this.addHandler("POST",e,t)}},{key:"put",value:function(e,t){return this.addHandler("PUT",e,t)}},{key:"delete",value:function(e,t){return this.addHandler("DELETE",e,t)}},{key:"addHandler",value:function(e,t,n){return e=u.normalizeHTTPMethodName(e),this._routes[e]||(this._routes[e]=[]),this._routes[e].push({matcher:t,handler:n,count:0}),this}},{key:"setDefaultHandler",value:function(e){return this._defaultRoute={handler:e,count:0},this}},{key:"setDefault404",value:function(){return this.setDefaultHandler({status:404})}},{key:"getRequestLog",value:function(){return this._requests}},{key:"_handleRequest",value:function(e){this._requests.push({method:e.method,url:e.url,headers:e.requestHeaders.getHash(),body:e.body});var t=this._findFirstMatchingRoute(e)||this._defaultRoute;if(t){var{handler:n}=t;Array.isArray(n)&&(n=n[Math.min(n.length-1,t.count)]),t.count+=1,"function"==typeof n?n(e):e.respond(n.status,n.headers,n.body,n.statusText)}}},{key:"_findFirstMatchingRoute",value:function(e){var t=u.normalizeHTTPMethodName(e.method);if(this._routes[t]){var{url:n}=e;return this._routes[t].find(function(e){var{matcher:t}=e;return"function"==typeof t?t(n):t instanceof RegExp?t.test(n):t===n})}}}]),n}();module.exports=s;
},{"./Utils":"78Pb"}],"29PQ":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=i(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function i(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=require("./MockXhr"),y=require("./MockXhrServer");function s(){var t=function(t){function n(){var t;return e(this,n),t=o(this,f(n).call(this)),"function"==typeof n.onCreate&&n.onCreate(u(t)),t}return l(n,p),r(n,[{key:"send",value:function(){for(var t,e=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];if((t=c(f(n.prototype),"send",this)).call.apply(t,[this].concat(o)),"function"==typeof n.onSend){var{onSend:i}=n;setTimeout(function(){return i.call(e,e)},0)}}}]),n}();return t.timeoutEnabled=!0,t}function b(t){return new y(s(),t)}module.exports={newMockXhr:s,newServer:b};
},{"./MockXhr":"0X/f","./MockXhrServer":"4FnR"}],"/kAY":[function(require,module,exports) {
"use strict";var r=require("./src/Factories"),e=require("./src/MockXhr"),c=require("./src/MockXhrServer");module.exports={MockXhr:e,MockXhrServer:c,newMockXhr:r.newMockXhr,newServer:r.newServer};
},{"./src/Factories":"29PQ","./src/MockXhr":"0X/f","./src/MockXhrServer":"4FnR"}],"Focm":[function(require,module,exports) {
var e=require("mock-xmlhttprequest"),t=e.newServer({get:["/views",function(e){count=0,"undefined"!=typeof Storage?count=Number(localStorage.getItem("count")):alert("Sorry! No Web Storage support for this browser. This web page will not function properly"),e.respond(200,{"Content-Type":"application/json"},'{ "views":  '.concat(count,"}"),"OK")}],post:["/views",function(e){"undefined"!=typeof Storage?(count=Number(localStorage.getItem("count")),localStorage.setItem("count",count+1)):alert("Sorry! No Web Storage support for this browser. This web page will not function properly"),e.respond(200,{},null,"OK")}]}).install();document.addEventListener("DOMContentLoaded",function(){updateViewsReq=new XMLHttpRequest,updateViewsReq.open("POST","/views",!0),updateViewsReq.send(),updateViewsReq.onload=function(){console.log(updateViewsReq)},getViewsReq=new XMLHttpRequest,getViewsReq.open("GET","/views",!0),getViewsReq.send(),getViewsReq.onload=function(){var e=JSON.parse(getViewsReq.responseText).views;document.getElementById("viewCount").innerHTML=e,document.getElementById("message").style.display="block"}});
},{"mock-xmlhttprequest":"/kAY"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map