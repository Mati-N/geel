(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,r,t){!function(e,r){"use strict";r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var t={error:null,info:null},n=function(e){var n,o;function a(){for(var r,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).state=t,r.resetErrorBoundary=function(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];null==r.props.onReset||(e=r.props).onReset.apply(e,o),r.setState(t)},r}o=e,(n=a).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var s=a.prototype;return s.componentDidCatch=function(e,r){var t,n;null==(t=(n=this.props).onError)||t.call(n,e,null==r?void 0:r.componentStack),this.setState({error:e,info:r})},s.componentDidUpdate=function(e){var r,n,o,a,s=this.state.error,l=this.props.resetKeys;null!==s&&(void 0===(o=e.resetKeys)&&(o=[]),void 0===(a=l)&&(a=[]),o.length!==a.length||o.some((function(e,r){return!Object.is(e,a[r])})))&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,l),this.setState(t))},s.render=function(){var e=this.state,t=e.error,n=e.info,o=this.props,a=o.fallbackRender,s=o.FallbackComponent,l=o.fallback;if(null!==t){var u={componentStack:null==n?void 0:n.componentStack,error:t,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(l))return l;if("function"==typeof a)return a(u);if(s)return r.createElement(s,u);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},a}(r.Component);e.ErrorBoundary=n,e.useErrorHandler=function(e){var t=r.useState(null),n=t[0],o=t[1];if(e)throw e;if(n)throw n;return o},e.withErrorBoundary=function(e,t){function o(o){return r.createElement(n,t,r.createElement(e,o))}var a=e.displayName||e.name||"Unknown";return o.displayName="withErrorBoundary("+a+")",o},Object.defineProperty(e,"__esModule",{value:!0})}(r,t(/*! react */"./node_modules/react/index.js"))},"./src/components/layout/Error.js":
/*!****************************************!*\
  !*** ./src/components/layout/Error.js ***!
  \****************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);var n=t(/*! react */"./node_modules/react/index.js"),o=t.n(n);r.default=function(e){var r=e.error,t=e.componentStack,n=e.resetErrorBoundary;return o.a.createElement("div",{role:"alert"},o.a.createElement("p",null,"Something went wrong:"),o.a.createElement("pre",null,r.message),o.a.createElement("pre",null,t),o.a.createElement("button",{onClick:n},"Try again"))}},"./src/components/post/Post.js":
/*!*************************************!*\
  !*** ./src/components/post/Post.js ***!
  \*************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);t(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js"),t(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");var n=t(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js"),o=t.n(n),a=t(/*! react */"./node_modules/react/index.js"),s=t.n(a),l=(t(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),t(/*! @apollo/client */"./node_modules/@apollo/client/index.js")),u=t(/*! ../../Queries */"./src/Queries.js"),i=t(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),c=t(/*! react-error-boundary */"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js"),d=t(/*! ../layout/Error */"./src/components/layout/Error.js");var p=Object(a.lazy)((function(){return t.e(/*! import() */1).then(t.bind(null,/*! ./PostItem */"./src/components/post/PostItem.js"))}));r.default=function(e){var r=e.match.params.id,t=Object(l.useQuery)(u.GET_POST,{variables:{id:r}}),n=t.loading,m=t.data,f=(t.error,t.fetchMore,t.refetch,Object(a.useState)(!0)),y=o()(f,2),h=y[0];y[1];if(n&&!m)return s.a.createElement(i.ImpulseSpinner,{size:40});var b=m.posts.edges[0].node;return s.a.createElement(c.ErrorBoundary,{FallbackComponent:d.default},s.a.createElement("div",{className:"main"},s.a.createElement(p,{key:b.id,comments:50,user_id:35,id:35,username:"Ethiopian",text:" ",title:" ",creation:new Date})," ",(n||h)&&s.a.createElement(i.ImpulseSpinner,null)))}}}]);
//# sourceMappingURL=4.main.js.map