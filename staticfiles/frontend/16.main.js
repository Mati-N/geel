(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/pages/Account.js":
/*!*****************************************!*\
  !*** ./src/components/pages/Account.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js"),o=n.n(a),s=n(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js"),r=n.n(s),l=n(/*! react */"./node_modules/react/index.js"),c=n.n(l),i=n(/*! ../../Queries */"./src/Queries.js"),m=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),d=n(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),u=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),p=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),h=n(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),E=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),g=Object(l.lazy)((function(){return n.e(/*! import() */1).then(n.bind(null,/*! ../post/Posts */"./src/components/post/Posts.js"))}));t.default=function(){var e=Object(m.useQuery)(i.SELF_USER),t=e.loading,n=e.data,a=e.error,s=Object(m.useQuery)(i.SELF_POSTS),v=s.loading,w=s.data,k=s.error,b=s.fetchMore,f=Object(l.useContext)(p.default),x=f.Logout,j=f.user,y=Object(l.useContext)(h.default).removeAlert,N=Object(l.useState)(!1),L=r()(N,2),_=L[0],M=L[1];if(Object(l.useEffect)((function(){y()}),[]),v||!w||t)return c.a.createElement("div",{className:"spinner"},c.a.createElement(u.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(k||a)return"".concat(k);var S=w.post;return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"account-info"},c.a.createElement("div",{className:"account-info-top"},c.a.createElement("span",{className:"username",style:{display:"block"}},n.user.username)),c.a.createElement("div",{className:"info-mini"},c.a.createElement("span",{className:"info"},"Posts",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.post_count),c.a.createElement("span",{className:"info"},"Followers",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.follower_count)),c.a.createElement("div",{className:"options-container"},c.a.createElement("ul",{className:"options"},c.a.createElement("li",{className:"option"},c.a.createElement("button",{style:{background:"none",border:"none"},onClick:x},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-logout",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.a.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),c.a.createElement("path",{d:"M7 12h14l-3 -3m0 6l3 -3"}))," ","Logout")),c.a.createElement("li",{className:"option"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),c.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),c.a.createElement(E.Link,{to:"/password"},"Change Password")),c.a.createElement("li",{className:"option"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),c.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),c.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),c.a.createElement(E.Link,{to:"/username"},"Change Username"))))),c.a.createElement("div",{className:"main"},c.a.createElement(g,{posts:S.edges,self:!0,id:j,username:"You"}),c.a.createElement(d.Waypoint,{onEnter:function(){b({query:i.SELF_POSTS,variables:{cursor:w.post.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;M(!0);var a=n.post.edges,s=n.post.pageInfo;return e.post.pageInfo.hasNextPage?a.length?{post:{__typename:e.post.__typename,edges:[].concat(o()(e.post.edges),o()(a)),pageInfo:s}}:e:(M(!1),e)}})}},c.a.createElement("div",{className:"spinner"},_&&c.a.createElement(u.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=16.main.js.map