(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/SVG/Edit.svg":
/*!*************************************!*\
  !*** ./src/components/SVG/Edit.svg ***!
  \*************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=r.createElement("path",{d:"M4 20h4L18.5 9.5a1.5 1.5 0 00-4-4L4 16v4M13.5 6.5l4 4"});t.default=function(e){return r.createElement("svg",a({width:45,height:45,strokeWidth:2,stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),o,s)}},"./src/components/SVG/ForwardPointer.svg":
/*!***********************************************!*\
  !*** ./src/components/SVG/ForwardPointer.svg ***!
  \***********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=r.createElement("path",{d:"M9 6l6 6-6 6"});t.default=function(e){return r.createElement("svg",a({width:45,height:45,strokeWidth:1.5,stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),o,s)}},"./src/components/SVG/Logout.svg":
/*!***************************************!*\
  !*** ./src/components/SVG/Logout.svg ***!
  \***************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=r.createElement("path",{d:"M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2"}),c=r.createElement("path",{d:"M7 12h14l-3-3m0 6l3-3"});t.default=function(e){return r.createElement("svg",a({width:45,height:45,strokeWidth:2,stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),o,s,c)}},"./src/components/pages/Account.js":
/*!*****************************************!*\
  !*** ./src/components/pages/Account.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! ../../Queries */"./src/Queries.js"),s=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=n(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),i=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),l=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),u=n(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),m=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),d=(n(/*! ../SVG/ForwardPointer.svg */"./src/components/SVG/ForwardPointer.svg"),n(/*! ../SVG/Logout.svg */"./src/components/SVG/Logout.svg")),p=n(/*! ../SVG/Edit.svg */"./src/components/SVG/Edit.svg");function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=Object(r.lazy)((function(){return n.e(/*! import() */2).then(n.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));t.default=function(){var e=Object(s.useQuery)(o.SELF_USER),t=e.loading,n=e.data,h=e.error,g=Object(s.useQuery)(o.SELF_POSTS),E=g.loading,b=g.data,j=g.error,S=g.fetchMore,w=Object(r.useContext)(l.default),k=w.doLogout,O=w.user,L=Object(r.useContext)(u.default).removeAlert,N=v(Object(r.useState)(!1),2),x=N[0],_=N[1];if(Object(r.useEffect)((function(){L()}),[]),E||!b||t)return a.a.createElement("div",{className:"spinner"},a.a.createElement(i.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(j||h)return"".concat(j);var A=b.post;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"account-info"},a.a.createElement("div",{className:"account-info-top"},a.a.createElement("span",{className:"username",style:{display:"block"}},n.selfUser.username)),a.a.createElement("div",{className:"info-mini"},a.a.createElement("span",{className:"info"},n.selfUser.postCount," Posts"),a.a.createElement("span",{className:"info"},n.selfUser.followerCount," Followers")),a.a.createElement("ul",{className:"options"},a.a.createElement("li",{className:"option"},a.a.createElement("button",{style:{background:"none",border:"none"},onClick:k},a.a.createElement(d.default,{className:"svg"})," Logout")),a.a.createElement("li",{className:"option"},a.a.createElement(p.default,{className:"svg"}),a.a.createElement(m.Link,{to:"/password"},"Change Password")),a.a.createElement("li",{className:"option"},a.a.createElement(p.default,{className:"svg"}),a.a.createElement(m.Link,{to:"/username"},"Change Username")))),a.a.createElement("div",{className:"main"},a.a.createElement(y,{posts:A.edges,self:!0,id:O,username:"You"}),a.a.createElement(c.Waypoint,{onEnter:function(){S({query:o.SELF_POSTS,variables:{cursor:b.post.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;_(!0);var r=n.post.edges,a=n.post.pageInfo;return e.post.pageInfo.hasNextPage?r.length?{post:{__typename:e.post.__typename,edges:[].concat(f(e.post.edges),f(r)),pageInfo:a}}:e:(_(!1),e)}})}},a.a.createElement("div",{className:"spinner"},x&&a.a.createElement(i.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=6.main.js.map