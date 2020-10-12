(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./node_modules/@material-ui/core/esm/Avatar/Avatar.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Avatar/Avatar.js ***!
  \*************************************************************/
/*! exports provided: styles, default */function(e,t,r){"use strict";r.r(t),r.d(t,"styles",(function(){return d}));var n=r(/*! @babel/runtime/helpers/esm/extends */"./node_modules/@babel/runtime/helpers/esm/extends.js"),o=r(/*! @babel/runtime/helpers/esm/objectWithoutProperties */"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r(/*! react */"./node_modules/react/index.js"),s=r(/*! prop-types */"./node_modules/prop-types/index.js"),c=r.n(s),i=r(/*! clsx */"./node_modules/clsx/dist/clsx.m.js"),l=r(/*! ../styles/withStyles */"./node_modules/@material-ui/core/esm/styles/withStyles.js"),u=r(/*! ../internal/svg-icons/Person */"./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js"),d=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}};var m=a.forwardRef((function(e,t){var r=e.alt,s=e.children,c=e.classes,l=e.className,d=e.component,m=void 0===d?"div":d,f=e.imgProps,p=e.sizes,v=e.src,g=e.srcSet,b=e.variant,h=void 0===b?"circle":b,j=Object(o.default)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,_=function(e){var t=e.src,r=e.srcSet,n=a.useState(!1),o=n[0],s=n[1];return a.useEffect((function(){if(t||r){s(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&s("loaded")},n.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,r]),o}({src:v,srcSet:g}),O=v||g,E=O&&"error"!==_;return y=E?a.createElement("img",Object(n.default)({alt:r,src:v,srcSet:g,sizes:p,className:c.img},f)):null!=s?s:O&&r?r[0]:a.createElement(u.default,{className:c.fallback}),a.createElement(m,Object(n.default)({className:Object(i.default)(c.root,c.system,c[h],l,!E&&c.colorDefault),ref:t},j),y)}));m.propTypes={alt:c.a.string,children:c.a.node,classes:c.a.object,className:c.a.string,component:c.a.elementType,imgProps:c.a.object,sizes:c.a.string,src:c.a.string,srcSet:c.a.string,variant:c.a.oneOf(["circle","rounded","square"])},t.default=Object(l.default)(d,{name:"MuiAvatar"})(m)},"./node_modules/@material-ui/core/esm/Avatar/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Avatar/index.js ***!
  \************************************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! ./Avatar */"./node_modules/@material-ui/core/esm/Avatar/Avatar.js");r.d(t,"default",(function(){return n.default}))},"./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js ***!
  \*************************************************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r(/*! ../../utils/createSvgIcon */"./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");t.default=Object(o.default)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person")},"./node_modules/@material-ui/core/esm/utils/createSvgIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r(/*! @babel/runtime/helpers/esm/extends */"./node_modules/@babel/runtime/helpers/esm/extends.js"),o=r(/*! react */"./node_modules/react/index.js"),a=r.n(o),s=r(/*! ../SvgIcon */"./node_modules/@material-ui/core/esm/SvgIcon/index.js");function c(e,t){var r=function(t,r){return a.a.createElement(s.default,Object(n.default)({ref:r},t),e)};return r.displayName="".concat(t,"Icon"),r.muiName=s.default.muiName,a.a.memo(a.a.forwardRef(r))}},"./src/components/SVG/Edit.svg":
/*!*************************************!*\
  !*** ./src/components/SVG/Edit.svg ***!
  \*************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=n.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=n.createElement("path",{d:"M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"}),c=n.createElement("path",{d:"M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3M16 5l3 3"});t.default=function(e){return n.createElement("svg",o({className:"Edit_svg__icon Edit_svg__icon-tabler Edit_svg__icon-tabler-edit",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),a,s,c)}},"./src/components/SVG/Logout.svg":
/*!***************************************!*\
  !*** ./src/components/SVG/Logout.svg ***!
  \***************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=n.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=n.createElement("path",{d:"M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2"}),c=n.createElement("path",{d:"M7 12h14l-3-3m0 6l3-3"});t.default=function(e){return n.createElement("svg",o({className:"Logout_svg__icon Logout_svg__icon-tabler Logout_svg__icon-tabler-logout",width:44,height:44,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),a,s,c)}},"./src/components/layout/AccountInfo.js":
/*!**********************************************!*\
  !*** ./src/components/layout/AccountInfo.js ***!
  \**********************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r.n(n),a=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),s=r(/*! ../SVG/Logout.svg */"./src/components/SVG/Logout.svg"),c=r(/*! ../SVG/Edit.svg */"./src/components/SVG/Edit.svg"),i=r(/*! @material-ui/core/Avatar */"./node_modules/@material-ui/core/esm/Avatar/index.js"),l=r(/*! ../../atoms */"./src/atoms.js"),u=r(/*! ../../Queries */"./src/Queries.js"),d=r(/*! recoil */"./node_modules/recoil/es/recoil.js"),m=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=e.user_data,r=g(Object(n.useState)(!1),2),f=r[0],v=r[1],b=g(Object(m.useMutation)(u.LOGOUT_LOGGED_OUT),1)[0],h=g(Object(m.useMutation)(u.LOGOUT_USER),1)[0],j=g(Object(d.useRecoilState)(l.authAtom),2),y=j[0],_=j[1],O=function(){var e=setInterval((function(){h({variables:{token:y.refreshToken}}).then((function(t){t.data.revokeToken.revoked&&(Cookies.remove("token"),Cookies.remove("refresh-token"),Cookies.remove("USER-ID"),b(),_((function(e){return p(p({},e),{},{isAuthenticated:!1})})),props.client.clearStore(),clearInterval(e))}))}),5e3)};return o.a.createElement("div",{className:"account-info"},o.a.createElement("div",{className:"account-info-top"},o.a.createElement(i.default,{alt:t.selfUser.username,src:t.selfUser.imagePath,variant:"circle",style:{margin:"0.4em"}},t.selfUser.username.substring(0,1)),o.a.createElement("span",{className:"username d-inline-block"},t.selfUser.username)),o.a.createElement("div",{className:"info-mini"},o.a.createElement("span",{className:"info"},t.selfUser.postCount," Posts"),o.a.createElement("span",{className:"info"},t.selfUser.followerCount," Followers")),o.a.createElement("ul",{className:"options"},o.a.createElement("li",{className:"option",onClick:function(){f||(v(!0),O(),v(!1))},disabled:f},o.a.createElement(s.default,{className:"svg"})," ",o.a.createElement("a",null,"Logout")),o.a.createElement("li",{className:"option"},o.a.createElement(c.default,{className:"svg"}),o.a.createElement(a.Link,{to:"/edit"},"Edit Account"))))}}}]);
//# sourceMappingURL=14.main.js.map