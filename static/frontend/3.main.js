(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/post/PostItem.js":
/*!*****************************************!*\
  !*** ./src/components/post/PostItem.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),o=n.n(r),a=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=n(/*! ../../Queries */"./src/Queries.js"),i=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),s=n(/*! react-spring */"./node_modules/react-spring/web.js");function l(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=Object(r.lazy)((function(){return n.e(/*! import() */11).then(n.bind(null,/*! ../SVG/Like.svg */"./src/components/SVG/Like.svg"))})),h=Object(r.lazy)((function(){return n.e(/*! import() */10).then(n.bind(null,/*! ../SVG/Heart.svg */"./src/components/SVG/Heart.svg"))})),v=Object(r.lazy)((function(){return n.e(/*! import() */9).then(n.bind(null,/*! ../SVG/Comments.svg */"./src/components/SVG/Comments.svg"))}));t.default=function(e){var t=e.text,n=e.title,u=e.username,f=e.id,p=e.likeCount,b=e.createdAt,g=e.user_id,O=e.commentCount,j=e.show_comment,E={done:!1,likes:p,hasMore:!1,height:"32vh",loading:!0,comments:O,expand:!1},k=d(Object(a.useLazyQuery)(c.LIKED,{variables:{post_id:f},onCompleted:function(e){T(m(m({},I),{},{liked:e.liked}))}}),1)[0],w=d(Object(r.useState)(!1),2),N=w[0],S=w[1],M=d(Object(r.useState)(""),2),x=M[0],C=M[1],P=Object(r.useRef)(null),_=d(Object(a.useMutation)(c.LIKE),1)[0],A=d(Object(a.useMutation)(c.CREATE_COMMENT),1)[0],D=d(Object(r.useState)(E),2),I=D[0],T=D[1],L=Object(s.useSpring)({to:{height:I.expand?"".concat(P.current.scrollHeight,"px"):"230px"},from:{height:I.expand?"".concat(P.current.scrollHeight,"px"):"230px"},duration:"0.9s"});Object(r.useEffect)((function(){k();var e=P.current.scrollHeight>P.current.clientHeight;e&&(P.current.style.maxHeight="none",P.current.style.height="230px"),T(m(m({},I),{},{hasMore:e,loading:!1}))}),[]);return o.a.createElement("div",{className:"post card"},o.a.createElement("div",{className:"post-top card-top"},o.a.createElement("div",{className:"post-info-top"},o.a.createElement(i.Link,{to:"/user/".concat(g),className:"post-user"}," ",u," "),o.a.createElement("small",{className:"post-time"},function(e){var t=Math.floor((new Date-e)/1e3),n=t/31536e3;if(n>1){var r=Math.floor(n);return Math.floor(n)+(1===r?" year":" years")}if((n=t/2592e3)>1){var o=Math.floor(n);return o+(1===o?" month":" months")}if((n=t/86400)>1){var a=Math.floor(n);return Math.floor(a)+(1===a?" day":" days")}if((n=t/3600)>1){var c=Math.floor(n);return c+(1===c?" hour":" hours")}if((n=t/60)>1){var i=Math.floor(n);return i+(1==i?" minute":" minutes")}return"Seconds"}(new Date(b))," ago"," ")),o.a.createElement("h5",{className:"post-title"},n)),o.a.createElement(s.animated.pre,{ref:P,className:"post-text",style:I.hasMore?L:{}},t,I.hasMore&&o.a.createElement("button",{className:"more",onClick:function(){T(m(m({},I),{},{expand:!I.expand}))}},I.expand?"less":"more")),!I.loading&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"info-bottom"},o.a.createElement("span",{className:"like",onClick:function(){_({variables:{post_id:f}}).catch((function(e){return console.log(e)})).then((function(e){var t=e.data.likePost;T(m(m({},I),{},{liked:!I.liked,likes:t.post.likeCount}))}))},onMouseOver:function(){return S(!0)},onMouseOut:function(){return S(!1)},onMouseLeave:function(){return S(!1)}},N?I.liked?o.a.createElement(h,{className:"like-icon"}):o.a.createElement(y,{className:"like-icon"}):I.liked?o.a.createElement(y,{className:"like-icon"}):o.a.createElement(h,{className:"like-icon"}),I.likes>0&&I.likes),o.a.createElement("span",{className:"like"},o.a.createElement(i.Link,{to:"/post/".concat(f),className:"like-icon"},o.a.createElement(v,null)),I.comments>0&&I.comments)),j&&o.a.createElement("span",{className:"comment-form"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A({variables:{id:f,comment:x},update:function(e,t){var n=t.data;if(e){var r=e.readQuery({query:c.GET_POST,variables:{id:f}}).postComments;if(console.log(r),r){var o=m(m({},r),{},{edges:[{__typename:"CommentNodeConnection",node:n.createComment.comment}].concat(l(r.edges))});e.writeQuery({query:c.GET_POST,variables:{id:f},data:{postComments:o}})}}}})},className:"form-group comment-form"},o.a.createElement("input",{className:"form-control",type:"text",id:"comment",name:"text",value:x,onChange:function(e){return C(e.target.value)}}),o.a.createElement("button",{className:"btn btn-teal",type:"submit",id:"btn"},"Comment")))))}}}]);
//# sourceMappingURL=3.main.js.map