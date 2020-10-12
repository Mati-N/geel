(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/SVG/Notifications.svg":
/*!**********************************************!*\
  !*** ./src/components/SVG/Notifications.svg ***!
  \**********************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=n.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),c=n.createElement("path",{d:"M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"}),l=n.createElement("circle",{cx:16,cy:8,r:3});t.default=function(e){return n.createElement("svg",r({className:"Notifications_svg__icon Notifications_svg__icon-tabler Notifications_svg__icon-tabler-notification",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),i,c,l)}},"./src/components/SVG/Settings.svg":
/*!*****************************************!*\
  !*** ./src/components/SVG/Settings.svg ***!
  \*****************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=n.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),c=n.createElement("circle",{cx:6,cy:10,r:2}),l=n.createElement("path",{d:"M6 4v4M6 12v8"}),o=n.createElement("circle",{cx:12,cy:16,r:2}),s=n.createElement("path",{d:"M12 4v10M12 18v2"}),m=n.createElement("circle",{cx:18,cy:7,r:2}),u=n.createElement("path",{d:"M18 4v1M18 9v11"});t.default=function(e){return n.createElement("svg",r({className:"Settings_svg__icon Settings_svg__icon-tabler Settings_svg__icon-tabler-adjustments",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),i,c,l,o,s,m,u)}},"./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */"./node_modules/react/index.js"),r=a.n(n),i=a(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=a(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),l=a(/*! ../SVG/Notifications.svg */"./src/components/SVG/Notifications.svg"),o=a(/*! ../SVG/Settings.svg */"./src/components/SVG/Settings.svg");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(n.useContext)(c.default),t=e.isAuthenticated,a=e.loading,m=Object(n.useRef)(null),u=Object(i.useLocation)(),d=s(Object(n.useState)({displayed:!1}),2),v=d[0],f=d[1];if(a||null==t)return"";var h=function(){f({displayed:!v.displayed})},p=function(){v.displayed&&h()};return r.a.createElement("nav",{className:"main=nav nav",style:{position:"fixed",top:0,width:"100%"}},r.a.createElement("div",{className:"nav-top"},r.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"UNNAMED"),r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"40",className:"fa fa-bars",id:v.displayed?"fa":"",onClick:h},r.a.createElement("rect",{className:"line0",fill:"white",width:"100",height:"17",id:v.displayed?"line0":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line1",fill:"white",y:"30",width:"100",height:"17",id:v.displayed?"line1":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line2",fill:"white",y:"60",width:"100",height:"17",id:v.displayed?"line2":" ",rx:"0.25em"}))),r.a.createElement("ul",{className:"navbar-items",id:v.displayed?"navitems-block":"navitems-none",ref:m},!t&&r.a.createElement("li",{className:"right",id:"right"},r.a.createElement("span",{className:"navItem ".concat("/login"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{to:"/login",className:"nav-link",onClick:p},"Login")),r.a.createElement("span",{className:"navItem ".concat("/register"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{className:"nav-link",to:"/register",onClick:p},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"left"},r.a.createElement("span",{className:"navItem ".concat("/"==u.pathname||"/all"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{className:"nav-link",to:"/",onClick:p},"Home")),r.a.createElement("span",{className:"navItem ".concat("/add-post"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{className:"nav-link",to:"/add-post",onClick:p},"New Post"))),r.a.createElement("li",{className:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement("a",{className:"nav-link",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-up-circle",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"9"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"8",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"16",y1:"12",x2:"12",y2:"8"})))),r.a.createElement("span",{className:"navItem ".concat("/account"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{className:"nav-link",to:"/account",onClick:p},r.a.createElement(o.default,null))),r.a.createElement("span",{className:"navItem ".concat("/notifications"==u.pathname?"active-navItem":"")},r.a.createElement(i.Link,{className:"nav-link",to:"/notifications",onClick:p},r.a.createElement(l.default,null)))))))}}}]);
//# sourceMappingURL=8.main.js.map