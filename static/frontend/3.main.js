(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,n){var o=n(104),r=n(105),i=n(81),a=n(106);e.exports=function(e){return o(e)||r(e)||i(e)||a()}},104:function(e,t,n){var o=n(82);e.exports=function(e){if(Array.isArray(e))return o(e)}},105:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},106:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},107:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var o=n(108),r=(n(29),n(0)),i=n.n(r),a=n(37);function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function d(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}function f(e){return"string"==typeof e.type}var v;var h=[];function w(e){h.push(e),v||(v=setTimeout((function(){var e;for(v=null;e=h.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=h.indexOf(e);-1!==n&&(h.splice(n,1),!h.length&&v&&(clearTimeout(v),v=null))}}}var m={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(v,t);var n,r,l,u=p(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=u.call(this,e)).refElement=function(e){t._ref=e},t}return n=v,(r=[{key:"componentDidMount",value:function(){var e=this;v.getWindow()&&(this.cancelOnNextTick=w((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!f(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;v.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=w((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){v.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),a=(n?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===a||"scroll"===a||"overlay"===a)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),o=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),a=r.onEnter,s=r.onLeave,l=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,c),"inside"===n?a.call(this,c):"inside"===o&&s.call(this,c),l&&("below"===o&&"above"===n||"above"===o&&"below"===n)&&(a.call(this,{currentPosition:"inside",previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),s.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),i=r.left,a=r.top,s=r.right,l=r.bottom,c=o?i:a,u=o?s:l;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,f=p.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+d(p.topOffset,e),viewportBottom:t+e-d(f,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?f(t)||Object(a.isForwardRef)(t)?i.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):i.a.cloneElement(t,{innerRef:this.refElement}):i.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&s(n.prototype,r),l&&s(n,l),v}(i.a.PureComponent);b.above="above",b.below="below",b.inside="inside",b.invisible="invisible",b.getWindow=function(){if("undefined"!=typeof window)return window},b.defaultProps=m,b.displayName="Waypoint"}).call(this,n(57))},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function i(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(e){}return e}()),r}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function s(e){this.target=e,this.events={}}s.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},s.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},s.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);a(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,a(r);var s=r.nextHandlers.indexOf(t);r.nextHandlers.splice(s,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};function l(e,t,n,o){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new s(e));var r=function(e){if(e)return i()?e:!!e.capture}(o);return e.__consolidated_events_handlers__.add(t,n,r)}},113:function(e,t,n){"use strict";n.r(t);var o=n(103),r=n.n(o),i=n(21),a=n.n(i),s=n(0),l=n.n(s),c=n(30),u=n(8),p=n(107),d=n(33),f=n(26),v=n(34),h=n(22),w=Object(s.lazy)((function(){return n.e(15).then(n.bind(null,123))}));t.default=function(){var e=Object(u.useQuery)(c.o),t=e.loading,n=e.data,o=e.error,i=Object(u.useQuery)(c.n),m=i.loading,b=i.data,y=i.error,g=i.fetchMore,E=Object(s.useContext)(f.a),_=E.Logout,k=E.user,x=Object(s.useContext)(v.a).removeAlert,O=Object(s.useState)(!1),B=a()(O,2),T=B[0],N=B[1];if(Object(s.useEffect)((function(){x()}),[]),m||!b||t)return l.a.createElement("div",{className:"spinner"},l.a.createElement(d.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(y||o)return"".concat(y);var P=b.post;return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"account-info"},l.a.createElement("div",{className:"account-info-top"},l.a.createElement("span",{className:"username",style:{display:"block"}},n.user.username)),l.a.createElement("div",{className:"info-mini"},l.a.createElement("span",{className:"info"},"Posts",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),l.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.postCount),l.a.createElement("span",{className:"info"},"Followers",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"34",height:"34",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),l.a.createElement("polyline",{points:"9 6 15 12 9 18"}))," ",n.user.followerCount)),l.a.createElement("div",{className:"options-container"},l.a.createElement("ul",{className:"options"},l.a.createElement("li",{className:"option"},l.a.createElement("button",{style:{background:"none",border:"none"},onClick:_},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-logout",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),l.a.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),l.a.createElement("path",{d:"M7 12h14l-3 -3m0 6l3 -3"}))," ","Logout")),l.a.createElement("li",{className:"option"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),l.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),l.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),l.a.createElement(h.b,{to:"/password"},"Change Password")),l.a.createElement("li",{className:"option"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-pencil",width:"45",height:"45",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#607D8B",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),l.a.createElement("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),l.a.createElement("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})),l.a.createElement(h.b,{to:"/username"},"Change Username"))))),l.a.createElement("div",{className:"main"},l.a.createElement(w,{posts:P.edges,self:!0,id:k,username:"You"}),l.a.createElement(p.a,{onEnter:function(){g({query:c.n,variables:{cursor:b.post.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;N(!0);var o=n.post.edges,i=n.post.pageInfo;return e.post.pageInfo.hasNextPage?o.length?{post:{__typename:e.post.__typename,edges:[].concat(r()(e.post.edges),r()(o)),pageInfo:i}}:e:(N(!1),e)}})}},l.a.createElement("div",{className:"spinner"},T&&l.a.createElement(d.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=3.main.js.map