(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/pages/ChangePassword.js":
/*!************************************************!*\
  !*** ./src/components/pages/ChangePassword.js ***!
  \************************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var a=r(/*! react */"./node_modules/react/index.js"),n=r.n(a),o=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),s=r(/*! ../../Queries */"./src/Queries.js"),l=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(){var e=p(Object(a.useState)({password:"",newPassword:"",disabled:!0,change:!0}),2),t=e[0],r=e[1],d=p(Object(l.useMutation)(s.UPDATE_USER),1)[0],w=Object(a.useContext)(o.default),m=w.setAlert,b=w.removeAlert,f=function(e){var a=e.target.name;r(i(i({},t),{},u({},a,e.target.value))),"password"===a?e.target.value.length<8?(m("Password too short","warning"),r(i(i({},t),{},{disabled:!0}))):t.newPassword.length>=8&&e.target.value.length>8&&(b(),r(i(i({},t),{},{disabled:!1}))):"newPassword"===a&&(e.target.value.length<8?(m("New Password too short","warning"),r(i(i({},t),{},{disabled:!0}))):t.password.length>=8&&e.target.value.length>8&&(b(),r(i(i({},t),{},{disabled:!1}))))};return t.changed?n.a.createElement(c.Redirect,{to:"/"}):n.a.createElement("form",{className:"form-auth",method:"post",onSubmit:function(e){e.preventDefault(),""!=t.password&&d({variables:{newP:t.newPassword,password:t.password}}).then((function(e){e&&(e.data.updateUser.ok?(r(i(i({},t),{},{changed:!0})),m("PaSsWoRd ChAnGeD :}")):m(e.data.updateUser.message,"danger"))}))}},n.a.createElement("p",{className:"h2"},"Change Password"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"label-hide",htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:f,placeholder:"Password",value:t.password,id:"password"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"label-hide",htmlFor:"newPassword"},"New Password"),n.a.createElement("input",{type:"password",className:"form-control",name:"newPassword",onChange:f,placeholder:"New Password",value:t.newPassword,id:"newPassword"})),n.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:t.disabled},"Change"))}}}]);
//# sourceMappingURL=16.main.js.map