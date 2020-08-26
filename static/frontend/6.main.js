(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/pages/Account.js":
/*!*****************************************!*\
  !*** ./src/components/pages/Account.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! @babel/runtime/helpers/extends */"./node_modules/@babel/runtime/helpers/extends.js"),o=n.n(a),s=n(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js"),r=n.n(s),l=n(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js"),c=n.n(l),i=n(/*! react */"./node_modules/react/index.js"),m=n.n(i),d=n(/*! ../../Queries */"./src/Queries.js"),u=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),p=n(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),h=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),g=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),E=n(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),v=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),w=Object(i.lazy)((function(){return Promise.resolve().then(n.bind(null,/*! ../post/PostItem */"./src/components/post/PostItem.js"))}));t.default=function(){var e=Object(u.useQuery)(d.SELF_USER),t=e.loading,n=e.data,a=e.error,s=Object(u.useQuery)(d.SELF_POSTS),l=s.loading,k=s.data,b=s.error,f=s.fetchMore,x=Object(i.useContext)(g.default).Logout,j=Object(i.useContext)(E.default).removeAlert,y=Object(i.useState)(!1),N=c()(y,2),L=N[0],_=N[1];if(Object(i.useEffect)((function(){j()}),[]),l||!k||t)return m.a.createElement("div",{className:"spinner"},m.a.createElement(h.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(b||a)return"".concat(b);var S=k.post;return m.a.createElement("div",{className:"main"},m.a.createElement("div",{className:"account-info"},m.a.createElement("div",{className:"account-info-top"},m.a.createElement("span",{className:"username",style:{display:"block"}},n.user.username)),m.a.createElement("div",{className:"info-mini"},m.a.createElement("span",{className:"info"},"Posts",m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},m.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),m.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.posts.edges.length),m.a.createElement("span",{className:"info"},"Followers",m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},m.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),m.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.followers.edges.length)),m.a.createElement("div",{className:"options-container"},m.a.createElement("ul",{className:"options"},m.a.createElement("li",{className:"option"},m.a.createElement("button",{style:{background:"none",border:"none"},onClick:x},m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-logout",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},m.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),m.a.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),m.a.createElement("path",{d:"M7 12h14l-3 -3m0 6l3 -3"}))," ","Logout")),m.a.createElement("li",{className:"option"},m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},m.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),m.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),m.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),m.a.createElement(v.Link,{to:"/password"},"Change Password")),m.a.createElement("li",{className:"option"},m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},m.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),m.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),m.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),m.a.createElement(v.Link,{to:"/username"},"Change Username"))))),m.a.createElement("div",{className:"main"},S.edges.map((function(e){var t=e.node;return m.a.createElement(w,o()({key:"".concat(t.id,"k")},t,{likes:t.likers.length,comments:t.commentSet.length,user_id:n.user.id,username:"You"}))})),m.a.createElement(p.Waypoint,{onEnter:function(){f({query:d.SELF_POSTS,variables:{cursor:k.post.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;_(!0);var a=n.post.edges,o=n.post.pageInfo;return e.post.pageInfo.hasNextPage?a.length?{post:{__typename:e.post.__typename,edges:[].concat(r()(e.post.edges),r()(a)),pageInfo:o}}:e:(_(!1),e)}})}},m.a.createElement("div",{className:"spinner"},L&&m.a.createElement(h.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=6.main.js.map