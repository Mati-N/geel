(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Routing/AuthenticationRoute.js":
/*!*******************************************************!*\
  !*** ./src/components/Routing/AuthenticationRoute.js ***!
  \*******************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.component,n=(e.auth,i(e,["component","auth"])),u=Object(a.useContext)(c.default),m=u.isAuthenticated,p=u.loading;return r.a.createElement(o.Route,l({},n,{render:function(e){return p||null==m?r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"spinner"},r.a.createElement(s.ImpulseSpinner,{size:60,style:{}}))):m?r.a.createElement(o.Redirect,{to:"/"}):r.a.createElement("div",{className:"main"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"spinner"},r.a.createElement(s.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},r.a.createElement(t,e)))}}))}},"./src/components/Routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/Routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),s=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.component,n=(e.auth,i(e,["component","auth"])),u=Object(a.useContext)(c.default),m=u.isAuthenticated,p=u.loading;return r.a.createElement(o.Route,l({},n,{render:function(e){return p||null==m?r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"spinner"},r.a.createElement(s.ImpulseSpinner,{size:68}))):m?r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"spinner"},r.a.createElement(s.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},r.a.createElement("div",{className:"main"},r.a.createElement(t,e))):r.a.createElement(o.Redirect,{to:"/login"})}}))}},"./src/components/Routing/Routes.js":
/*!******************************************!*\
  !*** ./src/components/Routing/Routes.js ***!
  \******************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),o=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),c=n(/*! ./PrivateRoute */"./src/components/Routing/PrivateRoute.js"),s=n(/*! ./AuthenticationRoute */"./src/components/Routing/AuthenticationRoute.js"),l=n(/*! react-spring */"./node_modules/react-spring/web.js"),i=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),u=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),m=Object(a.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(6)]).then(n.bind(null,/*! ../post/Post */"./src/components/post/Post.js"))})),p=Object(a.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(16)]).then(n.bind(null,/*! ../pages/Home */"./src/components/pages/Home.js"))})),d=Object(a.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(15)]).then(n.bind(null,/*! ../pages/Account */"./src/components/pages/Account.js"))})),f=Object(a.lazy)((function(){return n.e(/*! import() */17).then(n.bind(null,/*! ../pages/NewPost */"./src/components/pages/NewPost.js"))})),j=Object(a.lazy)((function(){return n.e(/*! import() */11).then(n.bind(null,/*! ../auth/Login */"./src/components/auth/Login.js"))})),b=Object(a.lazy)((function(){return n.e(/*! import() */12).then(n.bind(null,/*! ../auth/Register */"./src/components/auth/Register.js"))})),h=Object(a.lazy)((function(){return n.e(/*! import() */18).then(n.bind(null,/*! ../pages/NotFound */"./src/components/pages/NotFound.js"))})),E=Object(a.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(19)]).then(n.bind(null,/*! ../pages/User */"./src/components/pages/User.js"))}));t.default=function(){var e=Object(a.useContext)(i.default).loggedIn,t=Object(o.useLocation)(),n=Object(l.useTransition)(t,(function(e){return e.pathname}),{from:{opacity:0,transform:"scale(0.6) translateX(-100%)"},enter:{opacity:1,transform:"scale(1) translateX(0%)"},leave:{opacity:0,transform:"scale(0.6) translateX(70%)"},config:l.config.stiff});return Object(a.useEffect)((function(){e()}),[]),r.a.createElement(r.a.Fragment,null,n.map((function(e){var t=e.item,n=e.props,i=e.key;return r.a.createElement(l.animated.div,{key:"".concat(i,"anim"),style:n,className:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"spinner"},r.a.createElement(u.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},r.a.createElement(o.Switch,{location:t},r.a.createElement(s.default,{exact:!0,path:"/login",component:j}),r.a.createElement(s.default,{exact:!0,path:"/register",component:b}),r.a.createElement(c.default,{exact:!0,path:"/",component:p}),r.a.createElement(c.default,{exact:!0,path:"/add-post",component:f}),r.a.createElement(c.default,{exact:!0,path:"/account",component:d}),r.a.createElement(c.default,{exact:!0,path:"/user/:id",component:E}),r.a.createElement(c.default,{exact:!0,path:"/post/:id",component:m}),r.a.createElement(o.Route,{component:h}))))})))}}}]);
//# sourceMappingURL=5.main.js.map