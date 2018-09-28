!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?d(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=["#1B998B","#32021F","#08415C","#95190C","#E3B505"],f=function(e){function t(e){var n;return o(this,t),(n=s(this,c(t).call(this,e))).handleSubmit=n.handleSubmit.bind(d(d(n))),n.handleCancel=n.handleCancel.bind(d(d(n))),n}return u(t,React.Component),a(t,[{key:"handleSubmit",value:function(e){this.props.arr(e,document.querySelector("#".concat(this.props.name)).value),this.handleCancel(e)}},{key:"handleCancel",value:function(e){this.props.clicked(),document.getElementsByClassName("overlay")[0].style.visibility="hidden",e.preventDefault()}},{key:"render",value:function(){return React.createElement("form",{id:"categoryForm",action:"/addColumn",method:"post"},React.createElement("label",{for:this.props.name},this.props.name),React.createElement("input",{type:"text",id:this.props.name,name:this.props.name,placeholder:this.props.placeholder}),React.createElement("input",{type:"submit",value:"Cancel",onClick:this.handleCancel}),React.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit}))}}]),t}(),h=function(e){function t(e){var n;return o(this,t),(n=s(this,c(t).call(this,e))).addColumn=n.addColumn.bind(d(d(n))),n.state={clicked:!1,statusCode:n.props.statusCode},n}return u(t,React.Component),a(t,[{key:"addColumn",value:function(){this.setState(function(e){return{clicked:!e.clicked}}),this.setState({statusCode:this.props.statusCode})}},{key:"render",value:function(){return React.createElement("div",{id:"columnButton"},React.createElement("div",{style:{backgroundColor:"grey"}},React.createElement("h1",{style:{visibility:"hidden"}},"text"),React.createElement("button",{id:"newColumn",onClick:this.addColumn},"+")),this.state.clicked?React.createElement("div",{className:"overlay",style:{visibility:"visible"}},React.createElement("div",{className:"module"},React.createElement(f,{name:"Category",placeholder:"eg. Groceries",arr:this.props.arr,clicked:this.addColumn,statusCode:this.state.statusCode}))):null)}}]),t}(),m=function(e){function t(){return o(this,t),s(this,c(t).apply(this,arguments))}return u(t,React.Component),a(t,[{key:"render",value:function(){return React.createElement("div",{id:"columnData"},React.createElement("div",{id:"category",style:{backgroundColor:p[this.props.color],borderTop:"10px solid ".concat(p[this.props.color])}},React.createElement("h1",null,this.props.categoryName),React.createElement("div",{id:"bottom"},React.createElement("button",{id:"add"},"+"))))}}]),t}(),b=function(e){function t(e){var n;return o(this,t),(n=s(this,c(t).call(this,e))).state={data:n.props.listprop,statusCode:n.props.statusCode},n.createNodes=n.createNodes.bind(d(d(n))),n.display="none",n.colorArray=[],n.expenseNodes=[],n}return u(t,React.Component),a(t,[{key:"createNodes",value:function(){switch(this.display="inline-block",this.props.statusCode){case 204:return alert("Category already exists!"),console.dir("".concat(this.props.statusCode,": Already exists!")),this.expenseNodes;case 201:console.dir("".concat(this.props.statusCode,": Created!"));var e=this.state.data;this.colorArray.push(Math.floor(5*Math.random()));var t=React.createElement(m,{color:this.colorArray[e.length-1],categoryName:e[e.length-1]});return this.expenseNodes.push(t),this.expenseNodes;default:return this.expenseNodes}}},{key:"render",value:function(){return React.createElement("div",{id:"nodes",style:{display:"".concat(this.display)}},this.createNodes())}}]),t}(),y=function(e){function t(e){var n;return o(this,t),(n=s(this,c(t).call(this,e))).state={data:[],statusCode:""},n.postNewColumn=n.postNewColumn.bind(d(d(n))),n}return u(t,React.Component),a(t,[{key:"postNewColumn",value:function(e,t){var n=this,r=document.querySelector("#categoryForm"),o=r.getAttribute("method"),i=r.getAttribute("action");console.log(i);var a=new XMLHttpRequest;return a.open(o,i),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.setRequestHeader("Accept","application/json"),a.onload=function(){""!=a.response&&JSON.parse(a.response),201===a.status&&n.state.data.push(t),n.setState({data:n.state.data,statusCode:a.status})},a.send("name=".concat(t)),e.preventDefault(),!1}},{key:"render",value:function(){return React.createElement("div",{id:"main"},React.createElement(h,{color:Math.floor(5*Math.random()),categoryName:"Other",arr:this.postNewColumn,statusCode:this.state.statusCode}),React.createElement(b,{listprop:this.state.data,statusCode:this.state.statusCode}))}}]),t}();ReactDOM.render(React.createElement(y,null),document.getElementById("app"))},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"html,\nbody,\n#app,\n#main {\n    height: 100%;\n    margin: 0;\n}\n#main {\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n\n#main>#column{\n    display: inline-block;\n}\n\n\n#category {\n    height: 100%;\n    display: inline-block;\n    width: 100%;\n    position: relative;\n}\n\n#columnButton {\n    height: 100%;\n    width: 20%;\n    display: inline-block;\n}\n\n#columnData {\n    height: 100%;\n    width: 40%;\n    display: inline-block;\n}\n\nh1 {\n    margin: 0px;\n    padding-top: 2%;\n    color: white;\n    text-align: center;\n}\n\n#add {\n    color: white;\n    background-color: green;\n    padding: 2px 6px;\n    margin: 1%;\n    font-size: 16px;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 1px 1px 5px black;\n    position: absolute;\n    bottom: 2%;\n    right: 2%;\n}\n\n#newColumn {\n    position: absolute;\n    height: 100%;\n    width: 20%;\n    background-color: grey;\n    color: white;\n    border: none;\n    font-size: 400px;\n    top: 0;\n    padding: 0;\n    margin: 0;\n}\n\n#app {\n    overflow-x: auto;\n}\n\n.overlay{\n    position: absolute;\n    background-color: rgba(0,0,0,.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n}\n\ninput[type=text], select {\n    width: 70%;\n    padding: 12px 20px;\n    margin: auto;\n    display: block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 35%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 3% 3% auto 3%;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    display: inline-block;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n\n.module{\n    background-color: white;\n    opacity: 1;\n    height: 25%;\n    width: 50%;\n    margin: auto;\n    position: absolute;\n    top: 25%;\n    left: 25%;\n    border-radius:20px;\n    text-align: center;\n    font-size:24px;\n}\n\nlabel {\n    display: block;\n    text-align: center;\n    margin: 5%;\n}\n\n#nodes{\n    width: 40%;\n    margin-right: 0;\n    height: 100%;\n}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,c=[],u=n(5);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),p(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=h(t)),r=v.bind(null,n,c,!1),o=v.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&l(d(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);