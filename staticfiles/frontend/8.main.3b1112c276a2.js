(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/SVG/Notifications.svg":
/*!**********************************************!*\
  !*** ./src/components/SVG/Notifications.svg ***!
  \**********************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=n.createElement("path",{d:"M432 352c-17.645 0-32-14.355-32-32V208c0-38.558-15.043-74.783-42.357-102.002-16.839-16.78-37.087-28.878-59.176-35.662A47.687 47.687 0 00304 48c0-26.467-21.533-48-48-48s-48 21.533-48 48a47.683 47.683 0 005.593 22.453C154.848 88.802 112 144.21 112 209.39V320c0 17.645-14.355 32-32 32-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h120.575a56.769 56.769 0 00-.575 8c0 30.878 25.122 56 56 56s56-25.122 56-56c0-2.701-.2-5.371-.575-8H432c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16zM256 32c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zm24 424c0 13.234-10.766 24-24 24s-24-10.766-24-24c0-2.765.462-5.458 1.361-8h45.277a23.913 23.913 0 011.362 8zm136-40H96v-34.025c27.573-7.122 48-32.208 48-61.975V209.39c0-62.307 50.062-113.173 111.597-113.389l.405-.001c29.844 0 57.905 11.591 79.053 32.665C356.3 149.835 368 178.011 368 208v112c0 29.767 20.427 54.853 48 61.975z"}),i=n.createElement("path",{d:"M192 224c-8.836 0-16-7.164-16-16 0-44.112 35.888-80 80-80 8.836 0 16 7.164 16 16s-7.164 16-16 16c-26.467 0-48 21.533-48 48 0 8.836-7.164 16-16 16z"});t.default=function(e){return n.createElement("svg",r({height:43,viewBox:"0 0 512 512",width:43,strokeWidth:1.5,stroke:"#F8F8F8"},e),c,i)}},"./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js"),r=a.n(n),c=a(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),i=a(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),l=a(/*! ../SVG/Notifications.svg */"./src/components/SVG/Notifications.svg");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(n.useContext)(i.default),t=e.isAuthenticated,a=e.loading,o=Object(n.useRef)(null),m=s(Object(n.useState)({displayed:!1}),2),d=m[0],u=m[1];if(a||null==t)return"";var h=function(){u({displayed:!d.displayed})},v=function(){d.displayed&&h()};return r.a.createElement("nav",{className:"nav",style:{position:"fixed",top:0,width:"100%"}},r.a.createElement("div",{className:"nav-top"},r.a.createElement(c.Link,{to:"/",className:"navbar-brand"},"UNNAMED"),r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"40",className:"fa fa-bars",id:d.displayed?"fa":"",onClick:h},r.a.createElement("rect",{className:"line0",fill:"white",width:"100",height:"17",id:d.displayed?"line0":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line1",fill:"white",y:"30",width:"100",height:"17",id:d.displayed?"line1":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line2",fill:"white",y:"60",width:"100",height:"17",id:d.displayed?"line2":" ",rx:"0.25em"}))),r.a.createElement("ul",{className:"navbar-items",id:d.displayed?"navitems-block":"navitems-none",ref:o},!t&&r.a.createElement("li",{className:"right",id:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{to:"/login",className:"nav-link",onClick:v},"Login")),r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{className:"nav-link",to:"/register",onClick:v},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"left"},r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{className:"nav-link",to:"/",onClick:v},"Home")),r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{className:"nav-link",to:"/add-post",onClick:v},"New Post"))),r.a.createElement("li",{className:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement("button",{className:"to-up",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-up",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:v},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("polyline",{points:"6 15 12 9 18 15"})))),r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{className:"nav-link",to:"/account",onClick:v},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"3"})))),r.a.createElement("span",{className:"navItem"},r.a.createElement(c.Link,{className:"nav-link",to:"/notification",onClick:v},r.a.createElement(l.default,null)))))))}}}]);
//# sourceMappingURL=8.main.js.map