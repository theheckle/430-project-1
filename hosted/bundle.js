!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,s=0,c=[],l=n(6);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(y(o.parts[i],t))}else{var s=[];for(i=0;i<o.parts.length;i++)s.push(y(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function d(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),d(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=s++;n=i||(i=h(t)),r=b.bind(null,n,c,!1),o=b.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(s=r[i.id]).refs--,o.push(s)}e&&u(p(e,t),t);for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(n(7));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFlipped:e.flipped,flipperRotate:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.state,n=this.props,r=t.flipperRotate;return"revolving-door"===n.type&&(r=t.flipperRotate+180),!n.disabled&&(!0===e.flipped&&!1===t.isFlipped||!1===e.flipped&&!0===t.isFlipped)&&this.setState({isFlipped:!t.isFlipped,flipperRotate:r})}},{key:"render",value:function(){var e=this.props,t=this.state,n=e.type,o=(e.flipped,e.disabled),i=e.classNameFlipper,s=e.classNameFront,c=e.classNameBack,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type","flipped","disabled","classNameFlipper","classNameFront","classNameBack"]),u={};if("revolving-door"===n){var p="rotateY("+t.flipperRotate+"deg)";u={WebkitTransform:p,transform:p}}var d=["Flipcard-flipper",!0===t.isFlipped?"Flipcard--flipped":"","Flipcard--"+n,i];return a.default.createElement("div",r({},l,{className:"Flipcard",tabIndex:0}),a.default.createElement("div",{className:d.join(" "),style:u},[0,1].map(function(n){var r=e.children[n],i=0,l=1;return 1===n&&(i=1,l=0),a.default.createElement("div",{key:"Flipcard_card_"+n,className:"Flipcard-"+(0===n?"front "+s:"back "+c),style:{opacity:t.isFlipped?i:l,userSelect:t.isFlipped&&!0==!o?"none":null,cursor:o||"function"!=typeof e.onClick&&"function"!=typeof r.props.onClick?"auto":"pointer"},tabIndex:-1,"aria-hidden":t.isFlipped&&!o},r)})))}}]),t}();i.defaultProps={type:"horizontal",flipped:!1,disabled:!1,classNameFlipper:"",classNameFront:"",classNameBack:""},t.default=i},function(e,t,n){"use strict";n.r(t);n(4);var r=n(2),o=n.n(r);n(10);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=["#1B998B","#32021F","#08415C","#95190C","#E3B505"],m=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).handleSubmit=n.handleSubmit.bind(f(f(n))),n.handleCancel=n.handleCancel.bind(f(f(n))),n}return p(t,React.Component),c(t,[{key:"handleSubmit",value:function(e){this.props.arr(e,document.querySelector("#".concat(this.props.name)).value),this.handleCancel(e)}},{key:"handleCancel",value:function(e){this.props.clicked(),document.getElementsByClassName("overlay")[0].style.visibility="hidden",e.preventDefault()}},{key:"render",value:function(){return React.createElement("form",{id:"categoryForm",action:"/addColumn",method:"post"},React.createElement("label",{for:this.props.name},this.props.name),React.createElement("input",{type:"text",id:this.props.name,name:this.props.name,placeholder:this.props.placeholder}),React.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit}),React.createElement("input",{type:"submit",value:"Cancel",onClick:this.handleCancel,style:{backgroundColor:"red"}}))}}]),t}(),y=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).handleSubmit=n.handleSubmit.bind(f(f(n))),n.handleCancel=n.handleCancel.bind(f(f(n))),n}return p(t,React.Component),c(t,[{key:"handleSubmit",value:function(e){var t=[];t.push(document.querySelector("#Item").value),t.push(document.querySelector("#Amount").value),t.push(document.querySelector("#Date").value),t.push(document.querySelector("#Notes").value),this.props.arr(e,t),this.handleCancel(e)}},{key:"handleCancel",value:function(e){this.props.clicked(),document.getElementsByClassName("overlay")[0].style.visibility="hidden",e.preventDefault()}},{key:"render",value:function(){return React.createElement("form",{id:"categoryForm",action:"/addExpense",method:"post"},React.createElement("label",{for:"Item"},"Item"),React.createElement("input",{type:"text",id:"Item",name:"Item",placeholder:"eg. Taco Bell"}),React.createElement("label",{for:"Amount"},"Amount"),React.createElement("input",{type:"text",id:"Amount",name:"Amount",placeholder:"eg. 14.50"}),React.createElement("label",{for:"Date"},"Date"),React.createElement("input",{type:"date",style:{fontSize:"1.5em"},id:"Date",name:"Date"}),React.createElement("label",{for:"Notes"},"Notes"),React.createElement("input",{type:"text",id:"Notes",name:"Notes",placeholder:"eg. paid for Peter, got quesadillas"}),React.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit}),React.createElement("input",{type:"submit",value:"Cancel",onClick:this.handleCancel,style:{backgroundColor:"red"}}))}}]),t}(),v=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).addColumn=n.addColumn.bind(f(f(n))),n.state={clicked:!1,statusCode:n.props.statusCode},n}return p(t,React.Component),c(t,[{key:"addColumn",value:function(){this.setState(function(e){return{clicked:!e.clicked}}),this.setState({statusCode:this.props.statusCode})}},{key:"render",value:function(){return React.createElement("div",{id:"columnButton"},React.createElement("div",{style:{backgroundColor:"grey"}},React.createElement("h1",{style:{visibility:"hidden"}},"text"),React.createElement("button",{id:"newColumn",onClick:this.addColumn},"+")),this.state.clicked?React.createElement("div",{className:"overlay",style:{visibility:"visible"}},React.createElement("div",{className:"module"},React.createElement(m,{name:"Category",placeholderExpense:"eg. Food",arr:this.props.arr,clicked:this.addColumn,statusCode:this.state.statusCode}))):null)}}]),t}(),b=function(e){function t(){var e;return i(this,t),(e=l(this,u(t).call(this))).state={flipped:!1},e}return p(t,React.Component),c(t,[{key:"render",value:function(){var e=this;return React.createElement(o.a,{flipped:this.state.flipped,type:"horizontal",onClick:function(t){return e.setState({flipped:!e.state.flipped})}},React.createElement("div",{className:"Card"},React.createElement("div",{className:"date"},this.props.data[2]),React.createElement("div",{className:"number"},this.props.data[1])),React.createElement("div",{className:"Card"},React.createElement("div",{className:"itemTitle"},this.props.data[0]),React.createElement("div",null,this.props.data[3])))}}]),t}(),g=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).state={data:n.props.data,statusCode:n.props.statusCode},n.createNodes=n.createNodes.bind(f(f(n))),n.expenseNodes=[],n}return p(t,React.Component),c(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.data!=this.props.data}},{key:"createNodes",value:function(){switch(this.props.statusCode){case 201:console.dir("".concat(this.props.statusCode,": Created expense!"));var e=React.createElement(b,{data:this.props.data});return this.expenseNodes.push(e),this.expenseNodes;case 400:return;default:return this.expenseNodes}}},{key:"render",value:function(){return React.createElement("div",{id:"node-cards"},this.createNodes())}}]),t}(),w=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).state={clicked:!1,data:[],statusCode:""},n.addExpenseItem=n.addExpenseItem.bind(f(f(n))),n.postNewExpense=n.postNewExpense.bind(f(f(n))),n}return p(t,React.Component),c(t,[{key:"addExpenseItem",value:function(){this.setState(function(e){return{clicked:!e.clicked}})}},{key:"postNewExpense",value:function(e,t){var n=this,r=document.querySelector("#categoryForm"),o=r.getAttribute("method"),a=r.getAttribute("action");console.log(o+" "+a);var i=new XMLHttpRequest;return i.open(o,a),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("Accept","application/json"),i.onload=function(){n.state.data=[];var e="";""!=i.response&&(e=JSON.parse(i.response));for(var r=0;r<t.length;r++)n.state.data.push(t[r]);400===i.status&&(alert("Please enter required items: "+e.message),console.log(e)),n.setState({data:n.state.data,statusCode:i.status})},i.send("item=".concat(t[0],"&amount=").concat(t[1],"&date=").concat(t[2],"&notes=").concat(t[3])),e.preventDefault(),!1}},{key:"render",value:function(){return React.createElement("div",{id:"columnData"},React.createElement("div",{id:"category",style:{backgroundColor:h[this.props.color],borderTop:"10px solid ".concat(h[this.props.color])}},React.createElement("h1",null,this.props.categoryName),React.createElement(g,{data:this.state.data,statusCode:this.state.statusCode,previousDataCards:this.props.previousDataCards}),React.createElement("div",{id:"bottom"},React.createElement("button",{id:"add",onClick:this.addExpenseItem},"+"))),this.state.clicked?React.createElement("div",{className:"overlay",style:{visibility:"visible"}},React.createElement("div",{className:"module"},React.createElement(y,{clicked:this.addExpenseItem,arr:this.postNewExpense}))):null)}}]),t}(),C=function(e){function t(e){var n;if(i(this,t),(n=l(this,u(t).call(this,e))).state={data:n.props.listprop,statusCode:n.props.statusCode},n.createNodes=n.createNodes.bind(f(f(n))),n.display="none",n.colorArray=[],n.expenseNodes=[],void 0!=n.state.data&&n.state.data.length>0){for(var r=0;r<n.state.data.length;r++){n.colorArray.push(Math.floor(5*Math.random()));var o=React.createElement(w,{color:n.colorArray[r],categoryName:n.state.data[r],previousDataCards:n.props.previousDataCards});n.expenseNodes.push(o)}n.display="inline-block"}return n}return p(t,React.Component),c(t,[{key:"createNodes",value:function(){switch(this.display="inline-block",this.props.statusCode){case 204:return alert("Category already exists!"),console.dir("".concat(this.props.statusCode,": Already exists!")),this.expenseNodes;case 201:console.dir("".concat(this.props.statusCode,": Created!"));var e=this.state.data;this.colorArray.push(Math.floor(5*Math.random()));var t=React.createElement(w,{color:this.colorArray[e.length-1],categoryName:e[e.length-1]});return this.expenseNodes.push(t),this.expenseNodes;default:return this.expenseNodes}}},{key:"render",value:function(){return React.createElement("div",{id:"nodes",style:{display:"".concat(this.display)}},this.createNodes())}}]),t}(),k=function(e){function t(e){var n;return i(this,t),(n=l(this,u(t).call(this,e))).state={data:[],statusCode:""},n.postNewColumn=n.postNewColumn.bind(f(f(n))),n.resetColumns=n.resetColumns.bind(f(f(n))),n.resetColumns(),n}return p(t,React.Component),c(t,[{key:"postNewColumn",value:function(e,t){var n=this,r=document.querySelector("#categoryForm"),o=r.getAttribute("method"),a=r.getAttribute("action");console.log(o+" "+a);var i=new XMLHttpRequest;return i.open(o,a),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("Accept","application/json"),i.onload=function(){var e="";""!=i.response&&(e=JSON.parse(i.response)),201===i.status&&n.state.data.push(t),400===i.status&&(alert(e.message),console.dir(e.message)),n.setState({data:n.state.data,statusCode:i.status})},i.send("name=".concat(t)),e.preventDefault(),!1}},{key:"resetColumns",value:function(){if(void 0!=this.props.previousDataColumns&&this.props.previousDataColumns.length>0){for(var e=0;e<this.props.previousDataColumns.length;e++)this.state.data.push(this.props.previousDataColumns[e].name);this.setState({data:this.state.data,statusCode:this.props.statusCode})}}},{key:"render",value:function(){return React.createElement("div",{id:"main"},React.createElement(v,{color:Math.floor(5*Math.random()),categoryName:"Other",arr:this.postNewColumn,statusCode:this.state.statusCode}),React.createElement(C,{listprop:this.state.data,statusCode:this.state.statusCode,previousDataCards:this.props.previousDataCards}))}}]),t}();window.onload=function(){var e=new XMLHttpRequest;e.open("GET","/getPage"),e.setRequestHeader("Accept","application/json"),e.onload=function(){var t=JSON.parse(e.response),n=[];switch(Object.keys(t.columns).length>0&&(n=Object.keys(t.columns).map(function(e){return t.columns[e]})),console.dir("GET /getPage"),e.status){case 200:console.dir(e.status+" OK");case 404:alert(t.message)}ReactDOM.render(React.createElement(k,{previousDataColumns:n,previousDataCards:t.cards,statusCode:e.status}),document.getElementById("app"))},e.send()}},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"html,\nbody,\n#app,\n#main {\n    height: 100%;\n    margin: 0;\n}\n#main {\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n\n#main>#column{\n    display: inline-block;\n}\n\n\n#category {\n    height: 100%;\n    display: inline-block;\n    width: 100%;\n    position: relative;\n}\n\n#columnButton {\n    height: 100%;\n    width: 20%;\n    display: inline-block;\n}\n\n#columnData {\n    height: 100%;\n    width: 40%;\n    display: inline-block;\n}\n\nh1 {\n    margin: 0px;\n    padding-top: 2%;\n    color: white;\n    text-align: center;\n}\n\n#add {\n    color: white;\n    background-color: green;\n    padding: 2px 6px;\n    margin: 1%;\n    font-size: 16px;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 1px 1px 5px black;\n    position: absolute;\n    bottom: 2%;\n    right: 2%;\n}\n\n#newColumn {\n    position: absolute;\n    height: 100%;\n    width: 20%;\n    background-color: grey;\n    color: white;\n    border: none;\n    font-size: 400px;\n    top: 0;\n    padding: 0;\n    margin: 0;\n}\n\n#app {\n    overflow-x: auto;\n}\n\n.overlay{\n    position: absolute;\n    background-color: rgba(0,0,0,.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n}\n\ninput[type=text], select {\n    width: 70%;\n    padding: 12px 20px;\n    margin: auto;\n    display: block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 35%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 3% 3% auto 3%;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    display: inline-block;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n\n.module{\n    background-color: white;\n    opacity: 1;\n    width: 50%;\n    position: absolute;\n    top: 20%;\n    left: 20%;\n    border-radius:20px;\n    text-align: center;\n    font-size:24px;\n    padding: 5%;\n}\n\nlabel {\n    display: block;\n    text-align: left;\n    margin-left: 15%;\n    margin-top: 2%;\n}\n\n#nodes{\n    width: 40%;\n    margin-right: 0;\n    height: 100%;\n}\n\n.Card{\n    background-color: white;\n    border-radius: 2%;\n    width: 90% !important; \n    margin: auto;\n    word-wrap: break-word;\n    height: 100%;\n    overflow-x: auto;\n    box-shadow: 2px 2px black;\n    padding-left: 2px;\n    opacity: .9;\n}\n\n.Flipcard-flipper,\n.Flipcard-front,\n.Flipcard-back{\n    width: 100%;\n    position: relative;\n    height:90%;\n}\n\n.Flipcard{\n    display: block;\n    height: 10%;\n}\n\n#node-cards{\n    height: 100%;\n    position: absolute;\n    width: 100%;\n    overflow: auto;\n}\n\n.number{\n    font-size: 3em;\n    text-align: center;\n}\n.itemTitle{\n    font-size: 2em;\n}\n.date{\n    color: grey;\n}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";e.exports=n(8)},function(e,t,n){"use strict";
/** @license React v16.5.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(9),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.placeholder");var h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,s],l=0;(e=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var C=w.prototype=new g;C.constructor=w,r(C,b.prototype),C.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},x=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!R.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g,j=[];function N(e,t,n,r){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+P(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+P(s=t[l],l);c+=e(s,u,r,o)}else if(u=null===t||"object"!=typeof t?null:"function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)c+=e(s=s.value,u=n+P(s,l++),r,o);else"object"===s&&m("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,function(e){return e}):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(O,"$&/")+"/"),F(e,D,t=N(t,a,r,o)),_(t)}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,A,t=N(null,null,t,n)),_(t)},count:function(e){return F(e,function(){return null},null)},toArray:function(e){var t=[];return M(e,t,null,function(e){return e}),t},only:function(e){return S(e)||m("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:u,_context:e},e.Consumer=e,e.unstable_read=function(e,t){var n=k.currentDispatcher;return null===n&&m("277"),n.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:f,render:e}},Fragment:s,StrictMode:c,unstable_AsyncMode:d,unstable_Profiler:l,createElement:E,cloneElement:function(e,t,n){(null===e||void 0===e)&&m("267",e);var o=void 0,i=r({},e.props),s=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(s=""+t.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)x.call(t,o)&&!R.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==u?u[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){u=Array(o);for(var p=0;p<o;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:a,type:e.type,key:s,ref:c,props:i,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:S,version:"16.5.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:r}},T={default:I},U=T&&I||T;e.exports=U.default||U},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))o.call(n,l)&&(s[l]=n[l]);if(r){i=r(n);for(var u=0;u<i.length;u++)a.call(n,i[u])&&(s[i[u]]=n[i[u]])}}return s}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":root{--flipcard-transition-duration:0.33s;--flipcard-transition-easing-function:ease-in}.Flipcard,.Flipcard-back,.Flipcard-flipper,.Flipcard-front{outline:0;-webkit-box-shadow:none;box-shadow:none}.Flipcard-back,.Flipcard-front{z-index:0;overflow-x:hidden}@-moz-document url-prefix(){.Flipcard{perspective:none!important}}.Flipcard{-webkit-perspective:1000px;perspective:1000px;width:100%}.Flipcard-flipper{-webkit-transition:var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);transition:var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.Flipcard-back,.Flipcard-front{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:opacity var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in),-webkit-transform var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);transition:opacity var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in),-webkit-transform var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);transition:transform var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in),opacity var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);transition:transform var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in),opacity var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in),-webkit-transform var(--flipcard-transition-duration,.33s) var(--flipcard-transition-easing-function,ease-in);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateY(0);transform:rotateY(0);position:absolute;top:0;left:0}.Flipcard-front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}.Flipcard-back{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.Flipcard--horizontal.Flipcard--flipped>.Flipcard-front{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.Flipcard--horizontal.Flipcard--flipped>.Flipcard-back{-webkit-transform:rotateY(0);transform:rotateY(0)}",""])}]);