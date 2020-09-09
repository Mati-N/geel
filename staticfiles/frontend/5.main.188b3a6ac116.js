(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js ***!
  \****************************************************************************/
/*! no static exports found */function(e,t,n){!function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n={error:null,info:null},r=function(e){var r,a;function o(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state=n,t.resetErrorBoundary=function(){for(var e,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,a),t.setState(n)},t}a=e,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=o.prototype;return c.componentDidCatch=function(e,t){var n,r;null==(n=(r=this.props).onError)||n.call(r,e,null==t?void 0:t.componentStack),this.setState({error:e,info:t})},c.componentDidUpdate=function(e){var t,r,a,o,c=this.state.error,s=this.props.resetKeys;null!==c&&(void 0===(a=e.resetKeys)&&(a=[]),void 0===(o=s)&&(o=[]),a.length!==o.length||a.some((function(e,t){return!Object.is(e,o[t])})))&&(null==(t=(r=this.props).onResetKeysChange)||t.call(r,e.resetKeys,s),this.setState(n))},c.render=function(){var e=this.state,n=e.error,r=e.info,a=this.props,o=a.fallbackRender,c=a.FallbackComponent,s=a.fallback;if(null!==n){var l={componentStack:null==r?void 0:r.componentStack,error:n,resetErrorBoundary:this.resetErrorBoundary};if(t.isValidElement(s))return s;if("function"==typeof o)return o(l);if(c)return t.createElement(c,l);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},o}(t.Component);e.ErrorBoundary=r,e.useErrorHandler=function(e){var n=t.useState(null),r=n[0],a=n[1];if(e)throw e;if(r)throw r;return a},e.withErrorBoundary=function(e,n){function a(a){return t.createElement(r,n,t.createElement(e,a))}var o=e.displayName||e.name||"Unknown";return a.displayName="withErrorBoundary("+o+")",a},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(/*! react */"./node_modules/react/index.js"))},"./src/components/Routing/AuthenticationRoute.js":
/*!*******************************************************!*\
  !*** ./src/components/Routing/AuthenticationRoute.js ***!
  \*******************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.component,n=(e.auth,u(e,["component","auth"])),i=Object(r.useContext)(c.default),m=i.isAuthenticated,p=i.loading;return a.a.createElement(o.Route,l({},n,{render:function(e){return p||null==m?a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(s.ImpulseSpinner,{size:60,style:{}}))):m?a.a.createElement(o.Redirect,{to:"/"}):a.a.createElement("div",{className:"main"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(s.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},a.a.createElement(t,e)))}}))}},"./src/components/Routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/Routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.component,n=(e.auth,u(e,["component","auth"])),i=Object(r.useContext)(c.default),m=i.isAuthenticated,p=i.loading;return a.a.createElement(o.Route,l({},n,{render:function(e){return p||null==m?a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(s.ImpulseSpinner,{size:68}))):m?a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(s.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},a.a.createElement("div",{className:"main"},a.a.createElement(t,e))):a.a.createElement(o.Redirect,{to:"/login"})}}))}},"./src/components/Routing/Routes.js":
/*!******************************************!*\
  !*** ./src/components/Routing/Routes.js ***!
  \******************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ./PrivateRoute */"./src/components/Routing/PrivateRoute.js"),s=n(/*! ./AuthenticationRoute */"./src/components/Routing/AuthenticationRoute.js"),l=n(/*! react-spring */"./node_modules/react-spring/web.js"),u=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),i=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),m=n(/*! react-error-boundary */"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js"),p=n(/*! ../layout/Error */"./src/components/layout/Error.js"),d=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(21)]).then(n.bind(null,/*! ../post/Post */"./src/components/post/Post.js"))})),f=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(17)]).then(n.bind(null,/*! ../pages/Home */"./src/components/pages/Home.js"))})),h=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(6)]).then(n.bind(null,/*! ../pages/Account */"./src/components/pages/Account.js"))})),y=Object(r.lazy)((function(){return n.e(/*! import() */18).then(n.bind(null,/*! ../pages/NewPost */"./src/components/pages/NewPost.js"))})),b=Object(r.lazy)((function(){return n.e(/*! import() */16).then(n.bind(null,/*! ../pages/ChangePassword */"./src/components/pages/ChangePassword.js"))})),j=Object(r.lazy)((function(){return n.e(/*! import() */13).then(n.bind(null,/*! ../auth/Login */"./src/components/auth/Login.js"))})),E=Object(r.lazy)((function(){return n.e(/*! import() */14).then(n.bind(null,/*! ../auth/Register */"./src/components/auth/Register.js"))})),v=Object(r.lazy)((function(){return n.e(/*! import() */19).then(n.bind(null,/*! ../pages/NotFound */"./src/components/pages/NotFound.js"))})),g=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(7)]).then(n.bind(null,/*! ../pages/User */"./src/components/pages/User.js"))})),O=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(20)]).then(n.bind(null,/*! ../pages/Notifications */"./src/components/pages/Notifications.js"))}));t.default=function(){var e=Object(r.useContext)(u.default).loggedIn,t=Object(o.useLocation)(),n=Object(l.useTransition)(t,(function(e){return e.pathname}),{from:{opacity:0,transform:"scale(0.6) translateX(-100%)"},enter:{opacity:1,transform:"scale(1) translateX(0%)"},leave:{opacity:0,transform:"scale(0.6) translateX(70%)"},config:l.config.stiff});return Object(r.useEffect)((function(){e()}),[]),a.a.createElement(a.a.Fragment,null,n.map((function(e){var t=e.item,n=e.props,u=e.key;return a.a.createElement(l.animated.div,{key:"".concat(u,"anim"),style:n,className:"container"},a.a.createElement(m.ErrorBoundary,{FallbackComponent:p.default},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(i.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},a.a.createElement(o.Switch,{location:t},a.a.createElement(s.default,{exact:!0,path:"/login",component:j}),a.a.createElement(s.default,{exact:!0,path:"/register",component:E}),a.a.createElement(c.default,{exact:!0,path:"/",component:f}),a.a.createElement(c.default,{exact:!0,path:"/add-post",component:y}),a.a.createElement(c.default,{exact:!0,path:"/account",component:h}),a.a.createElement(c.default,{exact:!0,path:"/user/:id",component:g}),a.a.createElement(c.default,{exact:!0,path:"/post/:id",component:d}),a.a.createElement(c.default,{exact:!0,path:"/password",component:b}),a.a.createElement(c.default,{exact:!0,path:"/notifications",component:O}),a.a.createElement(o.Route,{component:v})))))})))}},"./src/components/layout/Error.js":
/*!****************************************!*\
  !*** ./src/components/layout/Error.js ***!
  \****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r);t.default=function(e){return e.error,e.componentStack,e.resetErrorBoundary,a.a.createElement("div",{role:"alert"},a.a.createElement("p",{style:{width:"40%",margin:"auto",padding:"8vh",fontSize:"10em "}},"Something went wrong"))}}}]);
//# sourceMappingURL=5.main.js.map