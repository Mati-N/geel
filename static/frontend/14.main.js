(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),a=r.n(n),o=r(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i(Object(n.useState)({username:"",password:""}),2),t=e[0],r=e[1],l=i(Object(n.useState)(!0),2),m=l[0],f=l[1],p=Object(n.useContext)(o.default),b=Object(n.useContext)(s.default),d=b.setAlert,g=b.removeAlert;Object(n.useEffect)((function(){g()}),[]);var h=function(e){var n=e.target.name;r(u(u({},t),{},c({},n,e.target.value))),"username"===n?e.target.value.length<1?(d("Username too short","warning"),f(!0)):t.password.length>8&&e.target.value.length>0&&(g(),f(!1)):"password"===n&&(e.target.value.length<8?(d("Password too short","warning"),f(!0)):t.username.length>0&&e.target.value.length>8&&(g(),f(!1)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{className:"form-auth",method:"post",onSubmit:function(e){e.preventDefault(),f(!0),""!==t.username&&p.doRegister(t.username,t.password),f(!1)}},a.a.createElement("p",{className:"h2"},"Register"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"username"},"Username"),a.a.createElement("input",{type:"text",className:"form-control",name:"username",onChange:h,placeholder:"Username",id:"username",value:t.username})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"password"},"Password"),a.a.createElement("input",{id:"password",type:"password",className:"form-control",name:"password",onChange:h,placeholder:"Password",value:t.password})),a.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:m},"Register")))}}}]);
//# sourceMappingURL=14.main.js.map