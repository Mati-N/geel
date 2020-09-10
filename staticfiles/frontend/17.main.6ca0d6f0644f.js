(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/pages/ChangeUsername.js":
/*!************************************************!*\
  !*** ./src/components/pages/ChangeUsername.js ***!
  \************************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);var n=t(/*! react */"./node_modules/react/index.js"),a=t.n(n),o=t(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),s=t(/*! ../../Queries */"./src/Queries.js"),l=t(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=t(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r.default=function(){var e=m(Object(n.useState)({password:"",newUsername:"",disabled:!0,change:!0}),2),r=e[0],t=e[1],i=m(Object(l.useMutation)(s.UPDATE_USER),1)[0],p=Object(n.useContext)(o.default),b=p.setAlert,f=p.removeAlert,w=function(e){var n=e.target.name;t(u(u({},r),{},d({},n,e.target.value))),"password"===n?r.password.length<8?(b("Password too short","warning"),t(u(u({},r),{},{disabled:!0}))):r.newUsername.length>0&&r.password.length>8&&(f(),t(u(u({},r),{},{disabled:!1}))):"newUsername"===n&&(r.newUsername.length<8?(b("New Username too short","warning"),t(u(u({},r),{},{disabled:!0}))):r.password.length>=8&&r.newUsername.length>0&&(f(),t(u(u({},r),{},{disabled:!1}))))};return r.changed?a.a.createElement(c.Redirect,{to:"/"}):a.a.createElement("form",{className:"form-auth",method:"post",onSubmit:function(e){e.preventDefault(),""!=r.password&&i({variables:{username:r.newUsername,password:r.password}}).then((function(e){e&&(e.data.updateUser.ok?(t(u(u({},r),{},{changed:!0})),b("Username changed :}","primary")):b(e.data.updateUser.message,"danger"))}))}},a.a.createElement("p",{className:"h2"},"Change Username"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:w,placeholder:"Password",value:r.password,id:"password"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label-hide",htmlFor:"newPassword"},"New Username"),a.a.createElement("input",{type:"text",className:"form-control",name:"newUsername",onChange:w,placeholder:"New Username",value:r.newUsername,id:"newUsername"})),a.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:r.disabled},"Change"))}}}]);
//# sourceMappingURL=17.main.js.map