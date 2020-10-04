(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/post/Post.js":
/*!*************************************!*\
  !*** ./src/components/post/Post.js ***!
  \*************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r.n(n),a=r(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),s=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),i=r(/*! ../../Queries */"./src/Queries.js"),c=r(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=Object(n.lazy)((function(){return r.e(/*! import() */3).then(r.bind(null,/*! ./PostItem */"./src/components/post/PostItem.js"))})),O=Object(n.lazy)((function(){return r.e(/*! import() */9).then(r.bind(null,/*! ./Comments */"./src/components/post/Comments.js"))}));t.default=function(e){var t=e.match.params.id,r=Object(s.useQuery)(i.GET_POST,{variables:{id:t}}),p=r.loading,f=r.data,y=(r.error,r.fetchMore),b=(r.refetch,d(Object(n.useState)(!0),2)),g=b[0],h=b[1];if(p&&!f)return o.a.createElement(c.ImpulseSpinner,{size:40});var v=f.posts.edges[0].node;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,u({key:v.id,user_id:v.user.id,username:v.user.username,show_comment:!0},v)),o.a.createElement(O,{comments:f.postComments.edges}),o.a.createElement(a.Waypoint,{onEnter:function(){y({query:i.GET_POST,variables:{cursor:f.postComments.pageInfo.endCursor,id:t},updateQuery:function(e,t){var r=t.fetchMoreResult;if(h(!0),!e.postComments.pageInfo.hasNextPage)return h(!1),e;var n=r.postComments.edges,o=r.postComments.pageInfo;return n.length?{post:m(m({},e.post),{},{postComments:{__typename:e.postComments.__typename,edges:[].concat(l(e.postComments.edges),l(n)),pageInfo:o}})}:e}}),h(!1)}},o.a.createElement("div",{className:"spinner"},(p||g)&&o.a.createElement(c.ImpulseSpinner,{size:40}))))}}}]);
//# sourceMappingURL=25.main.js.map