(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(103),r=n.n(a),o=n(40),c=n.n(o),l=n(21),s=n.n(l),i=n(0),m=n.n(i),u=n(8),p=n(30),f=n(22),d=n(32);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=Object(i.lazy)((function(){return n.e(14).then(n.bind(null,120))})),O=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,121))})),g=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,122))}));t.default=function(e){var t=e.text,n=e.title,a=e.username,o=e.id,c=e.likes,l=e.creation,h=e.user_id,y=e.comments,k=e.show_comment,E={done:!1,likes:c,hasMore:!1,height:"32vh",loading:!1,comments:y,expand:!1},j=Object(u.useLazyQuery)(p.i,{variables:{post_id:o},onCompleted:function(e){R(b(b({},I),{},{liked:e.liked}))}}),x=s()(j,1)[0],N=Object(i.useState)(!1),w=s()(N,2),M=w[0],C=w[1],P=Object(i.useState)(""),H=s()(P,2),D=H[0],S=H[1],_=Object(i.useRef)(null),z=Object(u.useMutation)(p.h),L=s()(z,1)[0],Q=Object(u.useMutation)(p.b),q=s()(Q,1)[0],J=Object(i.useState)(E),F=s()(J,2),I=F[0],R=F[1],A=Object(d.c)({to:{maxHeight:I.expand?"".concat(_.current.scrollHeight,"px"):"230px",height:I.expand?"".concat(_.current.scrollHeight,"px"):"230px"},from:{maxHeight:I.expand?"".concat(_.current.scrollHeight,"px"):"230px",height:I.expand?"".concat(_.current.scrollHeight,"px"):"230px"},duration:"1s"});Object(i.useEffect)((function(){x(),R(b(b({},I),{},{hasMore:_.current.scrollHeight>_.current.clientHeight,loading:!1}))}),[]);return m.a.createElement("div",{className:"post card"},m.a.createElement("div",{className:"post-top card-top"},m.a.createElement("div",{className:"post-info-top"},m.a.createElement(f.Link,{to:"user/".concat(h),className:"post-user"}," ",a," "),m.a.createElement("small",{className:"post-time"},function(e){var t=Math.floor((new Date-e)/1e3),n=t/31536e3;if(n>1){var a=Math.floor(n);return Math.floor(n)+(1===a?" year":" years")}if((n=t/2592e3)>1){var r=Math.floor(n);return r+(1===r?" month":" months")}if((n=t/86400)>1){var o=Math.floor(n);return Math.floor(o)+(1===o?" day":" days")}if((n=t/3600)>1){var c=Math.floor(n);return c+(1===c?" hour":" hours")}if((n=t/60)>1){var l=Math.floor(n);return l+(1==l?" minute":" minutes")}return"Seconds"}(new Date(l))," ago"," ")),m.a.createElement("h5",{className:"post-title"},n)),m.a.createElement(d.a.pre,{ref:_,className:"post-text",style:I.hasMore?A:{}},t,I.hasMore&&m.a.createElement("button",{className:"more",onClick:function(){R(b(b({},I),{},{expand:!I.expand}))}},I.expand?"less":"more")),!I.loading&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"info-bottom"},m.a.createElement("span",{className:"like",onClick:function(){L({variables:{post_id:o}}).catch((function(e){return console.log(e)})).then((function(e){var t=e.data.likePost;R(b(b({},I),{},{liked:!I.liked,likes:t.post.likers.length}))}))},onMouseOver:function(){return C(!0)},onMouseOut:function(){return C(!1)}},M?I.liked?m.a.createElement(O,{className:"like-icon"}):m.a.createElement(v,{className:"like-icon"}):I.liked?m.a.createElement(v,{className:"like-icon"}):m.a.createElement(O,{className:"like-icon"}),I.likes>0&&I.likes),m.a.createElement("span",{className:"like"},m.a.createElement(f.Link,{to:"/post/".concat(o),className:"like-icon"},m.a.createElement(g,null)),I.comments>0&&I.comments)),k&&m.a.createElement("span",{className:"comment-form"},m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),q({variables:{id:o,comment:D},update:function(e,t){var n=t.data;if(e){var a=e.readQuery({query:p.e,variables:{id:parseInt(o)}}).postComments;if(a){var c=b(b({},a),{},{edges:[{__typename:"CommentNodeConnection",node:n.createComment.comment}].concat(r()(a.edges))});e.writeQuery({query:p.e,variables:{id:o},data:{postComments:c}})}}}})}},m.a.createElement("div",{className:"form-group comment-form"},m.a.createElement("input",{className:"form-control",type:"text",id:"comment",name:"text",value:D,onChange:function(e){return S(e.target.value)}}),m.a.createElement("button",{className:"btn btn-teal",type:"submit",id:"btn"},"Comment"))))))}}}]);
//# sourceMappingURL=0.main.js.map