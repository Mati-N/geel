(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js"),r=a.n(n),l=a(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),i=a(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js");function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(n.useContext)(i.default),t=e.isAuthenticated,a=e.loading,o=Object(n.useRef)(null),s=c(Object(n.useState)({displayed:!1}),2),m=s[0],d=s[1];if(a||null==t)return"";var u=function(){d({displayed:!m.displayed})},h=function(){m.displayed&&u()};return r.a.createElement("nav",{className:"nav",style:{position:"fixed",top:0,width:"100%"}},r.a.createElement("div",{className:"nav-top"},r.a.createElement(l.Link,{to:"/",className:"navbar-brand"},"UNNAMED"),r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"40",className:"fa fa-bars",id:m.displayed?"fa":"",onClick:u},r.a.createElement("rect",{className:"line0",fill:"white",width:"100",height:"17",id:m.displayed?"line0":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line1",fill:"white",y:"30",width:"100",height:"17",id:m.displayed?"line1":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line2",fill:"white",y:"60",width:"100",height:"17",id:m.displayed?"line2":" ",rx:"0.25em"}))),r.a.createElement("ul",{className:"navbar-items",id:m.displayed?"navitems-block":"navitems-none",ref:o},!t&&r.a.createElement("li",{className:"right",id:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement(l.Link,{to:"/login",className:"nav-link",onClick:h},"Login")),r.a.createElement("span",{className:"navItem"},r.a.createElement(l.Link,{className:"nav-link",to:"/register",onClick:h},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"left"},r.a.createElement("span",{className:"navItem"},r.a.createElement(l.Link,{className:"nav-link",to:"/",onClick:h},"Home")),r.a.createElement("span",{className:"navItem"},r.a.createElement(l.Link,{className:"nav-link",to:"/add-post",onClick:h},"New Post"))),r.a.createElement("li",{className:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement("button",{className:"to-up",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-up",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:h},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("polyline",{points:"6 15 12 9 18 15"})))),r.a.createElement("span",{className:"navItem"},r.a.createElement(l.Link,{className:"nav-link",to:"/account",onClick:h},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))))))))}}}]);
//# sourceMappingURL=14.main.js.map