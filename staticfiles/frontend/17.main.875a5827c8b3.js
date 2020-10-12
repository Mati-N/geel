(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/@material-ui/icons/MarkunreadMailboxTwoTone.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/icons/MarkunreadMailboxTwoTone.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(/*! react */"./node_modules/react/index.js")),a=(0,r(n(/*! ./utils/createSvgIcon */"./node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M10 12H6V8H4v12h16V8H10z",opacity:".3"}),o.default.createElement("path",{d:"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"})),"MarkunreadMailboxTwoTone");t.default=a},"./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default.memo(a.default.forwardRef((function(t,n){return a.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));n.displayName="".concat(t,"Icon");return n.muiName=i.default.muiName,n};var o=r(n(/*! @babel/runtime/helpers/extends */"./node_modules/@babel/runtime/helpers/extends.js")),a=r(n(/*! react */"./node_modules/react/index.js")),i=r(n(/*! @material-ui/core/SvgIcon */"./node_modules/@material-ui/core/esm/SvgIcon/index.js"))},"./src/components/pages/Notifications.js":
/*!***********************************************!*\
  !*** ./src/components/pages/Notifications.js ***!
  \***********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),o=n.n(r),a=n(/*! ../../Queries */"./src/Queries.js"),i=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),l=n(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),c=n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"),s=n(/*! ../SVG/NoData.svg */"./src/components/SVG/NoData.svg"),u=n(/*! @material-ui/icons/MarkunreadMailboxTwoTone */"./node_modules/@material-ui/icons/MarkunreadMailboxTwoTone.js"),d=n.n(u),f=n(/*! @material-ui/core/Button */"./node_modules/@material-ui/core/esm/Button/index.js");function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=Object(r.lazy)((function(){return n.e(/*! import() */28).then(n.bind(null,/*! ../layout/NotificationList */"./src/components/layout/NotificationList.js"))})),v=Object(r.lazy)((function(){return n.e(/*! import() */8).then(n.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))}));t.default=function(){var e=Object(i.useQuery)(a.GET_NOTIFICATIONS,{onError:function(e){return console.log(e)},errorPolicy:"all"}),t=e.loading,n=e.data,u=e.error,b=e.fetchMore,y=e.refetch,g=e.subscribeToMore,N=p(Object(r.useState)(!0),2),j=N[0],E=N[1];if(t||!n)return o.a.createElement("div",{className:"spinner"},o.a.createElement(c.ImpulseSpinner,{size:50,style:{margin:"auto"}}));if(u)return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement("button",{className:"btn btn-teal",onClick:y},"Refresh"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.default,{className:"mx-auto d-block ",style:{minWidth:"25%"},variant:"contained",color:"primary",startIcon:o.a.createElement(d.a,null),onClick:function(){return readNotif()}},"Read All"),0==n.selfNotification.edges.length&&o.a.createElement("div",{className:"w-75 h-75 m-auto d-flex align-items-center justify-content-center flex-column"},o.a.createElement(s.default,{className:"w-50 h-50"})),o.a.createElement(h,{subscribeToNewNotifications:function(){g({document:a.NOTIFICATION_SUB,onError:function(e){var t=e.response,n=e.graphQLErrors,r=e.networkError;n&&n.map((function(e){var t=e.message,n=e.locations,r=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(r))})),console.log(n),console.log(t),r&&console.log("[Network error]: ".concat(r))},updateQuery:function(e,t){var n=t.subscriptionData;if(console.log(e,n),!n.data)return e},errorPolicy:"all"})},edges:n.selfNotification.edges}),o.a.createElement(l.Waypoint,{onEnter:function(){b({query:a.GET_NOTIFICATIONS,variables:{cursor:n.selfNotification.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;if(E(!0),!e.selfNotification.pageInfo.hasNextPage)return E(!1),e;var r=n.selfNotification.edges,o=n.selfNotification.pageInfo;return r.length?{selfNotification:{__typename:e.selfNotification.__typename,edges:[].concat(m(e.selfNotification.edges),m(r)),pageInfo:o}}:e}})}},o.a.createElement("div",{className:"refetch-and-spinner"},o.a.createElement("button",{className:"btn btn-teal",onClick:function(){return y()}},"Refetch"),j&&o.a.createElement("div",{className:"spinner"},o.a.createElement(c.ImpulseSpinner,{size:40})))))}}}]);
//# sourceMappingURL=17.main.js.map