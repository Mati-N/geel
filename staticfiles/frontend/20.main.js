(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/pages/Home.js":
/*!**************************************!*\
  !*** ./src/components/pages/Home.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! ../../Queries */"./src/Queries.js"),s=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),l=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),i=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function c(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=Object(r.lazy)((function(){return n.e(/*! import() */1).then(n.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))})),d=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(2)]).then(n.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));t.default=function(){var e=Object(l.useQuery)(o.GET_POSTS),t=e.loading,n=e.data,m=e.error,f=e.fetchMore,y=e.refetch,b=u(Object(r.useState)(!0),2),v=b[0],g=b[1];return t||!n?a.a.createElement("div",{className:"spinner"},a.a.createElement(i.ImpulseSpinner,{size:50,style:{margin:"auto"}})):m?a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null),a.a.createElement("button",{className:"btn btn-teal",onClick:y},"Refresh")):a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"nav nav-pills nav-fill home-pages"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link active"},"All Posts")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.Link,{className:"nav-link",to:"/"},"Following"))),a.a.createElement(d,{posts:n.posts.edges,self:!1,id:null,more:function(){f({query:o.GET_POSTS,variables:{cursor:n.posts.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;if(g(!0),!e.posts.pageInfo.hasNextPage)return g(!1),e;var r=n.posts.edges,a=n.posts.pageInfo;return r.length?{posts:{__typename:e.posts.__typename,edges:[].concat(c(e.posts.edges),c(r)),pageInfo:a}}:e}})},spin:v,refetch:y}))}}}]);
//# sourceMappingURL=20.main.js.map