(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/pages/Notifications.js":
/*!***********************************************!*\
  !*** ./src/components/pages/Notifications.js ***!
  \***********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"./node_modules/react/index.js"),a=n.n(r),o=n(/*! ../../Queries */"./src/Queries.js"),i=n(/*! @apollo/client */"./node_modules/@apollo/client/index.js"),l=(n(/*! react-waypoint */"./node_modules/react-waypoint/es/index.js"),n(/*! react-spinners-kit */"./node_modules/react-spinners-kit/lib/index.js"));function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=Object(r.lazy)((function(){return n.e(/*! import() */1).then(n.bind(null,/*! ./Offline */"./src/components/pages/Offline.js"))}));t.default=function(){var e=Object(i.useQuery)(o.GET_NOTIFICATIONS),t=e.loading,n=e.data,s=e.error,u=(e.fetchMore,e.refetch),m=c(Object(r.useState)(!0),2);return m[0],m[1],t||!n?a.a.createElement("div",{className:"spinner"},a.a.createElement(l.ImpulseSpinner,{size:50,style:{margin:"auto"}})):s?a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement("button",{className:"btn btn-teal",onClick:u},"Refresh")):a.a.createElement(a.a.Fragment,null,n.edges.map((function(e){var t=e.node;return a.a.createElement("h1",null,t.verb)})))}}}]);
//# sourceMappingURL=20.main.js.map