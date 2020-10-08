(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Routing/AuthenticationRoute.js":
/*!*******************************************************!*\
  !*** ./src/components/Routing/AuthenticationRoute.js ***!
  \*******************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),l=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),c=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.component,n=(e.auth,i(e,["component","auth"])),m=Object(r.useContext)(o.default),u=m.isAuthenticated,d=m.loading;return a.a.createElement(l.Route,s({},n,{render:function(e){return d||null==u?a.a.createElement("div",{className:"spinner"},a.a.createElement(c.ImpulseSpinner,{size:60,style:{}})):u?a.a.createElement(l.Redirect,{to:"/"}):a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"spinner"},a.a.createElement(c.ImpulseSpinner,{size:50,style:{margin:"auto"}}))},a.a.createElement(t,e))}}))}},"./src/components/Routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/Routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),l=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),c=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.component,n=(e.auth,i(e,["component","auth"])),m=Object(r.useContext)(o.default),u=m.isAuthenticated,d=m.loading;return a.a.createElement(l.Route,s({},n,{render:function(e){return d||null==u?a.a.createElement("div",{className:"spinner"},a.a.createElement(c.ImpulseSpinner,{size:68})):u?a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"spinner"},a.a.createElement(c.ImpulseSpinner,{size:50,style:{margin:"auto"}}))},a.a.createElement(t,e)):a.a.createElement(l.Redirect,{to:"/login"})}}))}},"./src/components/Routing/Routes.js":
/*!******************************************!*\
  !*** ./src/components/Routing/Routes.js ***!
  \******************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),l=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=n(/*! ./PrivateRoute */"./src/components/Routing/PrivateRoute.js"),c=n(/*! ./AuthenticationRoute */"./src/components/Routing/AuthenticationRoute.js"),s=n(/*! react-spring */"./node_modules/react-spring/web.js"),i=n(/*! ../../context/auth/AuthContext */"./src/context/auth/AuthContext.js"),m=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),u=n(/*! react-error-boundary */"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js"),d=n(/*! ../layout/Error */"./src/components/layout/Error.js"),f=n(/*! ../pages/Edit */"./src/components/pages/Edit.js"),p=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(26)]).then(n.bind(null,/*! ../post/Post */"./src/components/post/Post.js"))})),h=Object(r.lazy)((function(){return n.e(/*! import() */22).then(n.bind(null,/*! ../pages/Home */"./src/components/pages/Home.js"))})),y=Object(r.lazy)((function(){return n.e(/*! import() */21).then(n.bind(null,/*! ../pages/FollowingPosts */"./src/components/pages/FollowingPosts.js"))})),E=Object(r.lazy)((function(){return n.e(/*! import() */20).then(n.bind(null,/*! ../pages/Account */"./src/components/pages/Account.js"))})),b=Object(r.lazy)((function(){return n.e(/*! import() */23).then(n.bind(null,/*! ../pages/NewPost */"./src/components/pages/NewPost.js"))})),g=Object(r.lazy)((function(){return n.e(/*! import() */10).then(n.bind(null,/*! ../auth/Login */"./src/components/auth/Login.js"))})),j=Object(r.lazy)((function(){return n.e(/*! import() */12).then(n.bind(null,/*! ../auth/Register */"./src/components/auth/Register.js"))})),v=Object(r.lazy)((function(){return n.e(/*! import() */11).then(n.bind(null,/*! ../pages/NotFound */"./src/components/pages/NotFound.js"))})),x=Object(r.lazy)((function(){return n.e(/*! import() */25).then(n.bind(null,/*! ../pages/User */"./src/components/pages/User.js"))})),w=Object(r.lazy)((function(){return Promise.all(/*! import() */[n.e(0),n.e(24)]).then(n.bind(null,/*! ../pages/Notifications */"./src/components/pages/Notifications.js"))}));t.default=function(){Object(r.useContext)(i.default).loggedIn;var e=Object(l.useLocation)(),t=Object(s.useTransition)(e,(function(e){return e.pathname}),{from:{opacity:0,transform:"scale(0.6) translateX(-100%)"},enter:{opacity:1,transform:"scale(1) translateX(0%)"},leave:{opacity:0,transform:"scale(0.6) translateX(70%)"},config:s.config.stiff});return a.a.createElement(a.a.Fragment,null,t.map((function(e){var t=e.item,n=e.props,i=e.key;return a.a.createElement(s.animated.div,{className:"transition-page",key:"".concat(i,"anim"),style:n},a.a.createElement("div",{className:"page"},a.a.createElement(u.ErrorBoundary,{FallbackComponent:d.default},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"spinner"},a.a.createElement(m.ImpulseSpinner,{size:50,style:{margin:"auto"}})))},a.a.createElement(l.Switch,{location:t},a.a.createElement(c.default,{exact:!0,path:"/login",component:g}),a.a.createElement(c.default,{exact:!0,path:"/register",component:j}),a.a.createElement(o.default,{exact:!0,path:"/all",component:h}),a.a.createElement(o.default,{exact:!0,path:"/",component:y}),a.a.createElement(o.default,{exact:!0,path:"/add-post",component:b}),a.a.createElement(o.default,{exact:!0,path:"/account",component:E}),a.a.createElement(o.default,{exact:!0,path:"/user/:id",component:x}),a.a.createElement(o.default,{exact:!0,path:"/post/:id",component:p}),a.a.createElement(o.default,{exact:!0,path:"/notifications",component:w}),a.a.createElement(o.default,{exact:!0,path:"/edit",component:f.default}),a.a.createElement(l.Route,{component:v}))))))})))}},"./src/components/SVG/ServerDown.svg":
/*!*******************************************!*\
  !*** ./src/components/SVG/ServerDown.svg ***!
  \*******************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=r.createElement("circle",{cx:292.609,cy:213,r:213,fill:"#f2f2f2"}),o=r.createElement("path",{d:"M0 51.142c0 77.498 48.618 140.209 108.7 140.209",fill:"#2f2e41"}),c=r.createElement("path",{d:"M108.7 191.35c0-78.368 54.256-141.783 121.304-141.783M39.384 58.168c0 73.614 31.003 133.183 69.317 133.183",fill:"#3d9970"}),s=r.createElement("path",{d:"M108.7 191.35c0-100.137 62.711-181.167 140.209-181.167",fill:"#2f2e41"}),i=r.createElement("path",{d:"M85.833 192.339s15.415-.475 20.061-3.783 23.713-7.258 24.866-1.953 23.167 26.388 5.762 26.529-40.439-2.711-45.076-5.536-5.613-15.257-5.613-15.257z",fill:"#a8a8a8"}),m=r.createElement("path",{d:"M136.833 211.285c-17.404.14-40.44-2.711-45.076-5.536-3.531-2.15-4.939-9.869-5.41-13.43-.325.014-.514.02-.514.02s.976 12.433 5.613 15.257 27.672 5.676 45.077 5.536c5.023-.04 6.759-1.828 6.663-4.476-.698 1.6-2.614 2.599-6.353 2.629z",opacity:.2}),u=r.createElement("ellipse",{cx:198.609,cy:424.5,rx:187,ry:25.44,fill:"#3f3d56"}),d=r.createElement("ellipse",{cx:198.609,cy:424.5,rx:157,ry:21.359,opacity:.1}),f=r.createElement("ellipse",{cx:836.609,cy:660.5,rx:283,ry:38.5,fill:"#3f3d56"}),p=r.createElement("ellipse",{cx:310.609,cy:645.5,rx:170,ry:23.127,fill:"#3f3d56"}),h=r.createElement("path",{d:"M462.61 626c90 23 263-30 282-90M309.61 259s130-36 138 80-107 149-17 172M184.011 537.283s39.073-10.82 41.477 24.045-32.16 44.783-5.11 51.695",fill:"none",stroke:"#2f2e41",strokeMiterlimit:10,strokeWidth:2}),y=r.createElement("path",{d:"M778.705 563.24l-7.878 50.295s-38.782 20.603-11.513 21.209 155.733 0 155.733 0 24.845 0-14.543-21.815l-7.878-52.719z",fill:"#2f2e41"}),E=r.createElement("path",{d:"M753.828 634.198c6.193-5.51 17-11.252 17-11.252l7.877-50.295 113.921.107 7.878 49.582c9.185 5.087 14.875 8.987 18.203 11.978 5.06-1.154 10.588-5.443-18.203-21.389l-7.878-52.719-113.921 3.03-7.878 50.295s-32.588 17.315-16.999 20.663z",opacity:.1}),b=r.createElement("rect",{x:578.433,y:212.689,width:513.253,height:357.52,rx:18.046,fill:"#2f2e41"}),g=r.createElement("path",{fill:"#3f3d56",d:"M595.703 231.777h478.713v267.837H595.703z"}),j=r.createElement("circle",{cx:835.059,cy:223.293,r:3.03,fill:"#f2f2f2"}),v=r.createElement("path",{d:"M1091.686 520.822v31.34a18.043 18.043 0 01-18.046 18.046H596.48a18.043 18.043 0 01-18.046-18.045v-31.34zM968.978 667.466v6.06h-326.01v-4.848l.449-1.212 8.035-21.815h310.86l6.666 21.815zM1094.437 661.534c-.594 2.539-2.836 5.217-7.902 7.75-18.179 9.09-55.143-2.424-55.143-2.424s-28.48-4.848-28.48-17.573a22.725 22.725 0 012.497-1.485c7.643-4.043 32.984-14.02 77.917.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z",fill:"#2f2e41"}),x=r.createElement("path",{d:"M1094.437 661.534c-22.25 8.526-42.084 9.162-62.439-4.975-10.265-7.127-19.59-8.89-26.59-8.757 7.644-4.043 32.985-14.02 77.918.423a18.74 18.74 0 018.541 5.597c1.821 2.132 3.249 4.835 2.57 7.712z",opacity:.1}),w=r.createElement("ellipse",{cx:1066.538,cy:654.135,rx:7.878,ry:2.424,fill:"#f2f2f2"}),O=r.createElement("circle",{cx:835.059,cy:545.667,r:11.513,fill:"#f2f2f2"}),z=r.createElement("path",{opacity:.1,d:"M968.978 667.466v6.06h-326.01v-4.848l.449-1.212h325.561z"}),M=r.createElement("path",{fill:"#2f2e41",d:"M108.609 159h208v242h-208z"}),S=r.createElement("path",{fill:"#3f3d56",d:"M87.609 135h250v86h-250zM87.609 237h250v86h-250zM87.609 339h250v86h-250z"}),F=r.createElement("path",{fill:"#3d9970",opacity:.4,d:"M271.609 150h16v16h-16z"}),P=r.createElement("path",{fill:"#3d9970",opacity:.8,d:"M294.609 150h16v16h-16z"}),N=r.createElement("path",{fill:"#3d9970",d:"M317.609 150h16v16h-16z"}),k=r.createElement("path",{fill:"#3d9970",opacity:.4,d:"M271.609 251h16v16h-16z"}),A=r.createElement("path",{fill:"#3d9970",opacity:.8,d:"M294.609 251h16v16h-16z"}),C=r.createElement("path",{fill:"#3d9970",d:"M317.609 251h16v16h-16z"}),_=r.createElement("path",{fill:"#3d9970",opacity:.4,d:"M271.609 352h16v16h-16z"}),R=r.createElement("path",{fill:"#3d9970",opacity:.8,d:"M294.609 352h16v16h-16z"}),I=r.createElement("path",{fill:"#3d9970",d:"M317.609 352h16v16h-16z"}),T=r.createElement("circle",{cx:316.609,cy:538,r:79,fill:"#2f2e41"}),W=r.createElement("path",{fill:"#2f2e41",d:"M280.609 600h24v43h-24zM328.609 600h24v43h-24z"}),U=r.createElement("ellipse",{cx:300.609,cy:643.5,rx:20,ry:7.5,fill:"#2f2e41"}),H=r.createElement("ellipse",{cx:348.609,cy:642.5,rx:20,ry:7.5,fill:"#2f2e41"}),L=r.createElement("circle",{cx:318.609,cy:518,r:27,fill:"#fff"}),V=r.createElement("circle",{cx:318.609,cy:518,r:9,fill:"#3f3d56"}),B=r.createElement("path",{d:"M239.976 464.532c-6.378-28.567 14.012-57.434 45.544-64.474s62.266 10.41 68.644 38.977-14.518 39.104-46.05 46.145-61.759 7.92-68.138-20.648z",fill:"#3d9970"}),D=r.createElement("ellipse",{cx:417.215,cy:611.344,rx:39.5,ry:12.4,transform:"rotate(-23.171 156.408 637.654)",fill:"#2f2e41"}),X=r.createElement("ellipse",{cx:269.215,cy:664.344,rx:39.5,ry:12.4,transform:"rotate(-23.171 8.408 690.654)",fill:"#2f2e41"}),q=r.createElement("path",{d:"M362.61 561c0 7.732-19.91 23-42 23s-43-14.268-43-22 20.908-6 43-6 42-2.732 42 5z",fill:"#fff"});t.default=function(e){return r.createElement("svg",a({"data-name":"Layer 1",viewBox:"0 0 1119.609 699"},e),l,o,c,s,i,m,u,d,f,p,h,y,E,b,g,j,v,x,w,O,z,M,S,F,P,N,k,A,C,_,R,I,T,W,U,H,L,V,B,D,X,q)}},"./src/components/layout/Error.js":
/*!****************************************!*\
  !*** ./src/components/layout/Error.js ***!
  \****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),l=n(/*! ../SVG/ServerDown.svg */"./src/components/SVG/ServerDown.svg");t.default=function(e){return e.error,e.componentStack,e.resetErrorBoundary,a.a.createElement("div",{className:"w-75 h-75 m-auto d-flex align-items-center justify-content-center flex-column"},a.a.createElement("span",{style:{fontSize:"1.5em"},className:"p-1"},"Something Went Wrong"),a.a.createElement(l.default,{width:"90%",height:"90%",preserveAspectRatio:!0}))}},"./src/components/pages/Edit.js":
/*!**************************************!*\
  !*** ./src/components/pages/Edit.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),l=n(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),c=n(/*! ../../Queries */"./src/Queries.js"),s=n(/*! ../../context/alert/AlertContext */"./src/context/alert/AlertContext.js"),i=n(/*! formik */"./node_modules/formik/dist/formik.esm.js"),m=n(/*! @material-ui/core */"./node_modules/@material-ui/core/esm/index.js"),u=n(/*! yup */"./node_modules/yup/es/index.js");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=Object(m.makeStyles)((function(e){return{form:(t={marginTop:e.spacing(14),width:"80%",margin:"auto"},n=e.breakpoints.up("sm"),r={width:"90%"},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t),formField:{padding:"0.2em"},formControl:{margin:"0.1em",padding:"0.1em"},formLabel:{margin:"auto",width:"auto",fontSize:"2.5em"},submit:{margin:e.spacing(3,0,2)}};var t,n,r}));t.default=function(){var e=Object(r.useContext)(s.default),t=e.removeAlert,n=e.setAlert,f=d(Object(o.useMutation)(c.UPDATE_USER),1)[0],h=p(),y=Object(l.useHistory)();return Object(r.useEffect)((function(){t()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Formik,{initialValues:{username:"",newPassword:"",password:""},validationSchema:u.object({username:u.string().max(30,"Must be 30 characters or less"),password:u.string().min(8,"Must be 8 characters or more").required("Required"),newPassword:u.string().min(8,"Must be 8 characters or more")}),onSubmit:function(e,t){var r=t.setSubmitting;r(!0),""!=e.password&&f({variables:{password:e.password,username:e.username.length>0?e.username:null,newPassword:e.newPassword.length>0?e.newPassword:null}}).then((function(e){e&&(e.data.updateUser.ok?(n(e.data.updateUser.message,"success"),y.push("/")):n(e.data.updateUser.message,"warning"))})),r(!1)}},(function(e){var t=e.isSubmitting,n=e.isValid,r=e.dirty;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Form,{className:h.form},a.a.createElement("p",{className:h.formLabel},"Edit Account"),a.a.createElement(m.FormControl,{className:h.formControl,fullWidth:!0},a.a.createElement(i.Field,{type:"text",name:"username",as:m.TextField,label:"Username",className:h.formField,fullWidth:!0}),a.a.createElement(i.ErrorMessage,{name:"username",component:m.FormHelperText,error:!0})),a.a.createElement(m.FormControl,{className:h.formControl,fullWidth:!0},a.a.createElement(i.Field,{type:"password",label:"Password",name:"password",as:m.TextField,fullWidth:!0,className:h.formField}),a.a.createElement(i.ErrorMessage,{name:"password",component:m.FormHelperText,error:!0})),a.a.createElement(m.FormControl,{className:h.formControl,fullWidth:!0},a.a.createElement(i.Field,{type:"password",label:"New Password",name:"newPassword",as:m.TextField,fullWidth:!0,className:h.formField}),a.a.createElement(i.ErrorMessage,{name:"newPassword",component:m.FormHelperText,error:!0})),a.a.createElement(m.FormControl,{className:h.formControl,fullWidth:!0},a.a.createElement("button",{type:"submit",className:"btn btn-teal",disabled:t||!n||!r},"Change"))))})))}}}]);
//# sourceMappingURL=8.main.js.map