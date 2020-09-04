(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/SVG/ForwardPointer.svg":
/*!***********************************************!*\
  !*** ./src/components/SVG/ForwardPointer.svg ***!
  \***********************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=n.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"}),s=n.createElement("path",{d:"M9 6l6 6-6 6"});t.default=function(e){return n.createElement("svg",o({strokeWidth:1.5,stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e),a,s)}},"./src/components/pages/User.js":
/*!**************************************!*\
  !*** ./src/components/pages/User.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */"./node_modules/react/index.js"),o=r.n(n),a=r(/*! ../../Queries */"./src/Queries.js"),s=r(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),l=r(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),i=r(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),c=r(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),u=r(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),f=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),m=r(/*! ../SVG/ForwardPointer.svg */"./src/components/SVG/ForwardPointer.svg");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=Object(n.lazy)((function(){return r.e(/*! import() */2).then(r.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))})),j=Object(n.lazy)((function(){return r.e(/*! import() */1).then(r.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));t.default=function(e){var t=e.match,r=Object(s.useQuery)(a.GET_USER,{variables:{id:t.params.id}}),d=r.loading,b=r.data,h=r.error,v=Object(s.useQuery)(a.USER_POSTS,{variables:{id:t.params.id}}),E=v.loading,O=v.data,P=v.error,S=v.fetchMore,k=Object(n.useContext)(c.default),x=(k.Logout,k.user),A=Object(n.useContext)(u.default),_=A.removeAlert,N=(A.setAlert,g(Object(n.useState)(!1),2)),I=N[0],M=N[1],C=g(Object(n.useState)({first:!0,following:!1,followers:""}),2),L=C[0],z=C[1],F=g(Object(s.useMutation)(a.FOLLOW),1)[0];if(Object(n.useEffect)((function(){_()}),[]),x==t.params.id)return o.a.createElement(f.Redirect,{to:"/account"});if(E||!O||d||!b)return o.a.createElement("div",{className:"spinner"},o.a.createElement(i.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(P||h)return o.a.createElement(w,null);E||L.first&&z({first:!1,following:b.isFollowing,followers:b.userGet.followerCount});var G=O.userPost;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"account-info"},o.a.createElement("div",{className:"account-info-top"},o.a.createElement("span",{className:"username",style:{display:"block"}},b.userGet.username)),o.a.createElement("button",{className:"btn btn-teal",onClick:function(){F({variables:{id:t.params.id}}).then((function(e){var t=e.data.followUser;z(p(p({},L),{},{following:!L.following,followers:t.user.followerCount}))}))}},L.following?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-minus",width:"25",height:"25",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),o.a.createElement("line",{x1:"16",y1:"11",x2:"22",y2:"11"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-plus",width:"25",height:"25",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"rgb(248, 248, 248)",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),o.a.createElement("path",{d:"M16 11h6m-3 -3v6"}))," ",L.following?"Unfollow":"Follow"),o.a.createElement("div",{className:"info-mini"},o.a.createElement("span",{className:"info"},"Posts",o.a.createElement(m.default,null)," ",b.userGet.posts.edges.length),o.a.createElement("span",{className:"info"},"Followers",o.a.createElement(m.default,null)," ",L.followerCount)),o.a.createElement(j,{posts:G.edges,self:!0,username:b.userGet.username,id:t.params.id}),o.a.createElement(l.Waypoint,{onEnter:function(){S({query:a.USER_POSTS,variables:{cursor:O.userPost.pageInfo.endCursor,id:t.params.id},updateQuery:function(e,t){var r=t.fetchMoreResult;M(!0);var n=r.userPost.edges,o=r.userPost.pageInfo;return e.userPost.pageInfo.hasNextPage?n.length?{userPost:{__typename:e.userPost.__typename,edges:[].concat(y(e.userPost.edges),y(n)),pageInfo:o}}:e:(M(!1),e)}})}},o.a.createElement("div",{className:"spinner"},I&&o.a.createElement(i.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=7.main.js.map