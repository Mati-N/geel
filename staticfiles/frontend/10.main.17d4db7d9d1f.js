(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),a=r.n(n),o=r(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i(Object(n.useState)({username:"",password:""}),2),t=e[0],r=e[1],l=i(Object(n.useState)(!0),2),m=l[0],f=l[1],p=i(Object(n.useState)(!1),2),b=(p[0],p[1],Object(n.useContext)(o.default)),d=Object(n.useContext)(s.default),g=d.setAlert,h=d.removeAlert;Object(n.useEffect)((function(){h()}),[]);var y=function(e){var n=e.target.name;r(c(c({},t),{},u({},n,e.target.value))),"username"===n?e.target.value.length<1?(g("Username too short","warning"),f(!0)):t.password.length>8&&e.target.value.length>0&&(h(),f(!1)):"password"===n&&(e.target.value.length<8?(g("Password too short","warning"),f(!0)):t.username.length>0&&e.target.value.length>8&&(h(),f(!1)))};return a.a.createElement("div",{className:"main"},a.a.createElement("form",{className:"form-auth",method:"post",onSubmit:function(e){e.preventDefault(),b.Login(t.username,t.password)}},a.a.createElement("p",{className:"h2"},"Login"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"username"},"Username"),a.a.createElement("input",{type:"text",className:"form-control",name:"username",onChange:y,placeholder:"Username",value:t.username,id:"username"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"password"},"Password"),a.a.createElement("input",{id:"password",type:"password",className:"form-control",name:"password",onChange:y,placeholder:"Password",value:t.password})),a.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:m},"Login")))}}}]);
//# sourceMappingURL=10.main.js.map