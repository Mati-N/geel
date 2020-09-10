(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/pages/NewPost.js":
/*!*****************************************!*\
  !*** ./src/components/pages/NewPost.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),o=n.n(r),a=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),l=n(/*! ../../Queries */"./src/Queries.js"),c=n(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),i=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e,t=b(Object(r.useState)({title:"",content:""}),2),n=t[0],s=t[1],d=b(Object(r.useState)(!0),2),p=d[0],g=d[1],y=b(Object(r.useState)(!1),2),h=y[0],v=y[1],O=b(Object(a.useMutation)(l.CREATE_POST),1)[0],j=Object(r.useContext)(c.default),w=j.setAlert,S=j.removeAlert,E=function(e){var t=e.target.name;switch(s(m(m({},n),{},f({},t,e.target.value))),t){case"title":e.target.value.length<1?(w("Title too short","warning"),g(!0)):e.target.value.length>260?(w("Title too long","warning"),s(m(m({},n),{},{title:n.title.substring(0,260)})),g(!0)):n.content.length>0&&n.content.length<=5500&&(S(),g(!1));case"content":e.target.value.length<1?(w("Content too short","warning"),g(!0)):e.target.value.length>5500?(w("Content too long","warning"),s(m(m({},n),{},{content:n.content.substring(0,5500)})),g(!0)):n.title.length>0&&n.title.length<=260&&(S(),g(!1))}};Object(r.useEffect)((function(){S()}),[]);return h?o.a.createElement(i.Redirect,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O({variables:{title:n.title,text:n.content},update:function(e,t){var n=t.data;if(e){var r=e.readQuery({query:l.GET_POSTS}).posts;console.log(r);var o=m(m({},r),{},{edges:[{__typename:"PostNodeEdge",node:n.createPost.post}].concat(u(r.edges))});e.writeQuery({query:l.GET_POSTS,data:{posts:o}})}}}).catch((function(e){return console.log(e)})).then((function(e){e&&(null!==e&&e.data.createPost.ok?(w("Post Sent","primary"),v(!0)):w("Something went wrong","warning"))}))},method:"post",className:"form-auth"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"label-hide",htmlFor:"title"},"Title"),o.a.createElement("input",f({type:"text",className:"form-control",name:"title",placeholder:"Title","aria-describedby":"emailHelp",value:n.title,onChange:E},"name","title"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"content"},"Content"),o.a.createElement("textarea",(f(e={name:"content",value:n.text,className:"form-control"},"name","content"),f(e,"rows","3"),f(e,"onChange",E),f(e,"id","content"),e))),o.a.createElement("button",{disabled:p,type:"submit",className:"btn btn-teal"},"Submit")))}}}]);
//# sourceMappingURL=20.main.js.map