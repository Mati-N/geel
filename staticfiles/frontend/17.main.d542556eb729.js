(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/pages/ChangeUsername.js":
/*!************************************************!*\
  !*** ./src/components/pages/ChangeUsername.js ***!
  \************************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),a=r.n(n),o=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),s=r(/*! ../../Queries */"./src/Queries.js"),l=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=m(Object(n.useState)({password:"",newUsername:"",disabled:!0}),2),t=e[0],r=e[1],i=m(Object(l.useMutation)(s.UPDATE_USER),1)[0],p=Object(n.useContext)(o.default),f=p.setAlert,b=p.removeAlert,w=function(e){e.target.name;r(u(u({},t),{},d({},e.target.name,e.target.value)))};return t.changed?a.a.createElement(c.Redirect,{to:"/"}):a.a.createElement("form",{className:"form-auth",method:"post",onSubmit:function(e){e.preventDefault(),""!=t.password&&i({variables:{username:t.newUsername,password:t.password}}).then((function(e){e&&(e.data.updateUser.ok?(r(u(u({},t),{},{changed:!0})),f("Username changed :}","primary")):f(e.data.updateUser.message,"danger"))}))}},a.a.createElement("p",{className:"h2"},"Change Username"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:function(e){w(e),e.target.value<8?(f("Password too short","warning"),r(u(u({},t),{},{disabled:!0}))):t.newUsername.length>0&&e.target.value>8&&(b(),r(u(u({},t),{},{disabled:!1})))},placeholder:"Password",value:t.password,id:"password"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"newPassword"},"New Username"),a.a.createElement("input",{type:"text",className:"form-control",name:"newUsername",onChange:function(e){w(e),e.target.value<1?(f("New Username too short","warning"),r(u(u({},t),{},{disabled:!0}))):t.password.length>=8&&e.target.value>0&&(b(),r(u(u({},t),{},{disabled:!1})))},placeholder:"New Username",value:t.newUsername,id:"newUsername"})),a.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:t.disabled},"Change"))}}}]);
//# sourceMappingURL=17.main.js.map