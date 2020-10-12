(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/pages/Account.js":
/*!*****************************************!*\
  !*** ./src/components/pages/Account.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r.n(n),a=r(/*! ../../Queries */"./src/Queries.js"),s=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),u=r(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),c=r(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),l=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js");function i(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=Object(n.lazy)((function(){return Promise.all(/*! import() */[r.e(0),r.e(1)]).then(r.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))})),y=Object(n.lazy)((function(){return r.e(/*! import() */9).then(r.bind(null,/*! ../layout/AccountInfo */"./src/components/layout/AccountInfo.js"))}));t.default=function(){var e=Object(s.useQuery)(a.SELF_USER,{pollInterval:3e3}),t=e.loading,r=e.data,d=e.error,m=Object(s.useQuery)(a.SELF_POSTS),b=m.loading,g=m.data,h=m.error,j=m.fetchMore,v=m.refetch,S=Object(n.useContext)(c.default),A=S.doLogout,O=S.user,P=Object(n.useContext)(l.default).removeAlert,w=f(Object(n.useState)(!1),2),E=w[0],I=w[1];if(Object(n.useEffect)((function(){P()}),[]),b||!g||t)return o.a.createElement("div",{className:"spinner"},o.a.createElement(u.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(h||d)return"".concat(h);var x=g.selfPost;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{user_data:r,Logout:A}),o.a.createElement(p,{posts:x.edges,self:!0,id:O,username:"You",more:function(){j({query:a.SELF_POSTS,variables:{cursor:g.selfPost.pageInfo.endCursor},updateQuery:function(e,t){var r=t.fetchMoreResult;I(!0);var n=r.selfPost.edges,o=r.selfPost.pageInfo;return e.selfPost.pageInfo.hasNextPage?n.length?{selfPost:{__typename:e.selfPost.__typename,edges:[].concat(i(e.selfPost.edges),i(n)),pageInfo:o}}:e:(I(!1),e)}})},spin:E,refetch:v}))}}}]);
//# sourceMappingURL=20.main.js.map