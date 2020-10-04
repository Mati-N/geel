(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/SVG/Notifications.svg":
/*!**********************************************!*\
  !*** ./src/components/SVG/Notifications.svg ***!
  \**********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=a.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),l=a.createElement("path",{d:"M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"}),c=a.createElement("circle",{cx:16,cy:8,r:3});t.default=function(e){return a.createElement("svg",r({className:"Notifications_svg__icon Notifications_svg__icon-tabler Notifications_svg__icon-tabler-notification",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),i,l,c)}},"./src/components/SVG/Settings.svg":
/*!*****************************************!*\
  !*** ./src/components/SVG/Settings.svg ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=a.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),l=a.createElement("circle",{cx:6,cy:10,r:2}),c=a.createElement("path",{d:"M6 4v4M6 12v8"}),o=a.createElement("circle",{cx:12,cy:16,r:2}),s=a.createElement("path",{d:"M12 4v10M12 18v2"}),m=a.createElement("circle",{cx:18,cy:7,r:2}),u=a.createElement("path",{d:"M18 4v1M18 9v11"});t.default=function(e){return a.createElement("svg",r({className:"Settings_svg__icon Settings_svg__icon-tabler Settings_svg__icon-tabler-adjustments",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),i,l,c,o,s,m,u)}},"./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),i=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),l=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),c=n(/*! ../SVG/Notifications.svg */"./src/components/SVG/Notifications.svg"),o=n(/*! ../SVG/Settings.svg */"./src/components/SVG/Settings.svg");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=Object(a.useContext)(l.default),t=e.isAuthenticated,n=e.loading,m=Object(a.useRef)(null),u=s(Object(a.useState)({displayed:!1}),2),d=u[0],f=u[1];if(n||null==t)return"";var v=function(){f({displayed:!d.displayed})},h=function(){d.displayed&&v()};return r.a.createElement("nav",{className:"nav",style:{position:"fixed",top:0,width:"100%"}},r.a.createElement("div",{className:"nav-top"},r.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"UNNAMED"),r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"40",className:"fa fa-bars",id:d.displayed?"fa":"",onClick:v},r.a.createElement("rect",{className:"line0",fill:"white",width:"100",height:"17",id:d.displayed?"line0":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line1",fill:"white",y:"30",width:"100",height:"17",id:d.displayed?"line1":" ",rx:"0.25em"}),r.a.createElement("rect",{className:"line2",fill:"white",y:"60",width:"100",height:"17",id:d.displayed?"line2":" ",rx:"0.25em"}))),r.a.createElement("ul",{className:"navbar-items",id:d.displayed?"navitems-block":"navitems-none",ref:m},!t&&r.a.createElement("li",{className:"right",id:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{to:"/login",className:"nav-link",onClick:h},"Login")),r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{className:"nav-link",to:"/register",onClick:h},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"left"},r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{className:"nav-link",to:"/",onClick:h},"Home")),r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{className:"nav-link",to:"/add-post",onClick:h},"New Post"))),r.a.createElement("li",{className:"right"},r.a.createElement("span",{className:"navItem"},r.a.createElement("a",{className:"nav-link",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-up-circle",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"9"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"8",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"16",y1:"12",x2:"12",y2:"8"})))),r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{className:"nav-link",to:"/account",onClick:h},r.a.createElement(o.default,null))),r.a.createElement("span",{className:"navItem"},r.a.createElement(i.Link,{className:"nav-link",to:"/notifications",onClick:h},r.a.createElement(c.default,null)))))))}}}]);
//# sourceMappingURL=7.main.js.map