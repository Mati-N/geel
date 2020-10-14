(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/components/pages/User.js":
/*!**************************************!*\
  !*** ./src/components/pages/User.js ***!
  \**************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);var n=t(/*! react */"./node_modules/react/index.js"),o=t.n(n),a=t(/*! ../../Queries */"./src/Queries.js"),s=t(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),u=t(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),i=t(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=t(/*! ../../atoms */"./src/atoms.js"),l=t(/*! recoil */"./node_modules/recoil/es/recoil.js");function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,r)||f(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=Object(n.lazy)((function(){return Promise.all(/*! import() */[t.e(0),t.e(34)]).then(t.bind(null,/*! ../layout/UserInfo */"./src/components/layout/UserInfo.js"))})),b=Object(n.lazy)((function(){return t.e(/*! import() */8).then(t.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))})),h=Object(n.lazy)((function(){return Promise.all(/*! import() */[t.e(5),t.e(6),t.e(9)]).then(t.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));r.default=function(e){var r=e.match,t=Object(s.useQuery)(a.GET_USER,{variables:{id:r.params.id}}),f=t.loading,p=t.data,j=t.error,g=Object(s.useQuery)(a.USER_POSTS,{variables:{id:r.params.id}}),v=g.loading,S=g.data,E=g.error,O=g.fetchMore,P=g.refetch,w=Object(l.useRecoilValue)(c.authAtom).user,_=Object(l.useResetRecoilState)(c.alertAtom),A=d(Object(n.useState)(!1),2),I=A[0],R=A[1];if(Object(n.useEffect)((function(){_()}),[]),w==r.params.id)return o.a.createElement(i.Redirect,{to:"/account"});if(v||!S||f||!p)return o.a.createElement("div",{className:"spinner"},o.a.createElement(u.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(E||j)return o.a.createElement(b,null);if(null==p.userGet)return o.a.createElement("h1",null,"User Does Not Exist");var U=S.userPost;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{user:p.userGet}),o.a.createElement(h,{posts:U.edges,self:!0,username:p.userGet.username,id:r.params.id,more:function(){O({query:a.USER_POSTS,variables:{cursor:S.userPost.pageInfo.endCursor,id:r.params.id},updateQuery:function(e,r){var t=r.fetchMoreResult;R(!0);var n=t.userPost.edges,o=t.userPost.pageInfo;return e.userPost.pageInfo.hasNextPage?n.length?{userPost:{__typename:e.userPost.__typename,edges:[].concat(m(e.userPost.edges),m(n)),pageInfo:o}}:e:(R(!1),e)}})},spin:I,refetch:P,imagePath:p.userGet.imagePath}))}}}]);
//# sourceMappingURL=35.main.js.map