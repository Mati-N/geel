(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/SVG/Edit.svg":
/*!*************************************!*\
  !*** ./src/components/SVG/Edit.svg ***!
  \*************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=a.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),r=a.createElement("path",{d:"M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"}),c=a.createElement("path",{d:"M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3M16 5l3 3"});t.default=function(e){return a.createElement("svg",o({className:"Edit_svg__icon Edit_svg__icon-tabler Edit_svg__icon-tabler-edit",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),s,r,c)}},"./src/components/SVG/Logout.svg":
/*!***************************************!*\
  !*** ./src/components/SVG/Logout.svg ***!
  \***************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=a.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),r=a.createElement("path",{d:"M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2"}),c=a.createElement("path",{d:"M7 12h14l-3-3m0 6l3-3"});t.default=function(e){return a.createElement("svg",o({className:"Logout_svg__icon Logout_svg__icon-tabler Logout_svg__icon-tabler-logout",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),s,r,c)}},"./src/components/layout/AccountInfo.js":
/*!**********************************************!*\
  !*** ./src/components/layout/AccountInfo.js ***!
  \**********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js"),o=n.n(a),s=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),r=n(/*! ../SVG/Logout.svg */"./src/components/SVG/Logout.svg"),c=n(/*! ../SVG/Edit.svg */"./src/components/SVG/Edit.svg");t.default=function(e){var t=e.user_data,n=e.Logout;return o.a.createElement("div",{className:"account-info"},o.a.createElement("div",{className:"account-info-top"},o.a.createElement("span",{className:"username",style:{display:"block"}},t.selfUser.username)),o.a.createElement("div",{className:"info-mini"},o.a.createElement("span",{className:"info"},t.selfUser.postCount," Posts"),o.a.createElement("span",{className:"info"},t.selfUser.followerCount," Followers")),o.a.createElement("ul",{className:"options"},o.a.createElement("li",{className:"option",onClick:n},o.a.createElement(r.default,{className:"svg"})," ",o.a.createElement("a",null,"Logout")),o.a.createElement("li",{className:"option"},o.a.createElement(c.default,{className:"svg"}),o.a.createElement(s.Link,{to:"/edit"},"Edit Account"))))}}}]);
//# sourceMappingURL=9.main.js.map