(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/pages/User.js":
/*!**************************************!*\
  !*** ./src/components/pages/User.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r.n(n),a=r(/*! ../../Queries */"./src/Queries.js"),s=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),l=r(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),i=r(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),c=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),u=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=Object(n.lazy)((function(){return r.e(/*! import() */1).then(r.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))})),h=Object(n.lazy)((function(){return Promise.all(/*! import() */[r.e(0),r.e(2)]).then(r.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));t.default=function(e){var t=e.match,r=Object(s.useQuery)(a.GET_USER,{variables:{id:t.params.id}}),f=r.loading,d=r.data,y=r.error,w=Object(s.useQuery)(a.USER_POSTS,{variables:{id:t.params.id}}),v=w.loading,j=w.data,O=w.error,E=w.fetchMore,P=Object(n.useContext)(i.default),S=(P.Logout,P.user),x=Object(n.useContext)(c.default),k=x.removeAlert,N=(x.setAlert,b(Object(n.useState)(!1),2)),A=N[0],C=N[1],_=b(Object(n.useState)({first:!0,following:null,followers:""}),2),I=_[0],M=_[1],G=b(Object(s.useMutation)(a.FOLLOW),1)[0];if(Object(n.useEffect)((function(){k()}),[]),S==t.params.id)return o.a.createElement(u.Redirect,{to:"/account"});if(v||!j||f||!d)return o.a.createElement("div",{className:"spinner"},o.a.createElement(l.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(O||y)return o.a.createElement(g,null);if(null==d.userGet)return o.a.createElement("h1",null,"User Does Not Exist");v||I.first&&M({first:!1,following:d.isFollowing,followers:d.userGet.followerCount});var U=j.userPost;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"account-info"},o.a.createElement("div",{className:"account-info-top"},o.a.createElement("span",{className:"username",style:{display:"block"}},d.userGet.username)),o.a.createElement("div",{className:"info-mini"},o.a.createElement("button",{className:"btn btn-teal",onClick:function(){G({variables:{id:t.params.id}}).then((function(e){var t=e.data.followUser;M(m(m({},I),{},{following:!I.following,followers:t.user.followerCount}))}))}},I.following?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-minus",width:"25",height:"25",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),o.a.createElement("line",{x1:"16",y1:"11",x2:"22",y2:"11"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-plus",width:"25",height:"25",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),o.a.createElement("path",{d:"M16 11h6m-3 -3v6"}))," ",I.following?"Unfollow":"Follow"),o.a.createElement("span",{className:"info"},d.userGet.postCount>0?d.userGet.postCount:"No"," ","Post",d.userGet.postCount>1?"s":""),o.a.createElement("span",{className:"info"},I.followers>0?I.followers:"No"," Follower",I.followers>1?"s":""))),o.a.createElement(h,{posts:U.edges,self:!0,username:d.userGet.username,id:t.params.id,more:function(){E({query:a.USER_POSTS,variables:{cursor:j.userPost.pageInfo.endCursor,id:t.params.id},updateQuery:function(e,t){var r=t.fetchMoreResult;C(!0);var n=r.userPost.edges,o=r.userPost.pageInfo;return e.userPost.pageInfo.hasNextPage?n.length?{userPost:{__typename:e.userPost.__typename,edges:[].concat(p(e.userPost.edges),p(n)),pageInfo:o}}:e:(C(!1),e)}})},spin:A,loading:f}))}}}]);
//# sourceMappingURL=22.main.js.map