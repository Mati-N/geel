(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js ***!
  \****************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("(function (global, factory) {\n   true ? factory(exports, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")) :\n  undefined;\n}(this, (function (exports, React) { 'use strict';\n\n  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;\n\n  function _inheritsLoose(subClass, superClass) {\n    subClass.prototype = Object.create(superClass.prototype);\n    subClass.prototype.constructor = subClass;\n    subClass.__proto__ = superClass;\n  }\n\n  var changedArray = function (a, b) {\n    if (a === void 0) {\n      a = [];\n    }\n\n    if (b === void 0) {\n      b = [];\n    }\n\n    return a.length !== b.length || a.some(function (item, index) {\n      return !Object.is(item, b[index]);\n    });\n  };\n\n  var initialState = {\n    error: null,\n    info: null\n  };\n\n  var ErrorBoundary = /*#__PURE__*/function (_React$Component) {\n    _inheritsLoose(ErrorBoundary, _React$Component);\n\n    function ErrorBoundary() {\n      var _this;\n\n      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n        _args[_key] = arguments[_key];\n      }\n\n      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;\n      _this.state = initialState;\n\n      _this.resetErrorBoundary = function () {\n        var _this$props;\n\n        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);\n\n        _this.setState(initialState);\n      };\n\n      return _this;\n    }\n\n    var _proto = ErrorBoundary.prototype;\n\n    _proto.componentDidCatch = function componentDidCatch(error, info) {\n      var _this$props$onError, _this$props2;\n\n      (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info == null ? void 0 : info.componentStack);\n      this.setState({\n        error: error,\n        info: info\n      });\n    };\n\n    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n      var error = this.state.error;\n      var resetKeys = this.props.resetKeys;\n\n      if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {\n        var _this$props$onResetKe, _this$props3;\n\n        (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);\n        this.setState(initialState);\n      }\n    };\n\n    _proto.render = function render() {\n      var _this$state = this.state,\n          error = _this$state.error,\n          info = _this$state.info;\n      var _this$props4 = this.props,\n          fallbackRender = _this$props4.fallbackRender,\n          FallbackComponent = _this$props4.FallbackComponent,\n          fallback = _this$props4.fallback;\n\n      if (error !== null) {\n        var props = {\n          componentStack: info == null ? void 0 : info.componentStack,\n          error: error,\n          resetErrorBoundary: this.resetErrorBoundary\n        };\n\n        if ( /*#__PURE__*/React.isValidElement(fallback)) {\n          return fallback;\n        } else if (typeof fallbackRender === 'function') {\n          return fallbackRender(props);\n        } else if (FallbackComponent) {\n          return /*#__PURE__*/React.createElement(FallbackComponent, props);\n        } else {\n          throw new Error('react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop');\n        }\n      }\n\n      return this.props.children;\n    };\n\n    return ErrorBoundary;\n  }(React.Component);\n\n  function withErrorBoundary(Component, errorBoundaryProps) {\n    function Wrapped(props) {\n      return /*#__PURE__*/React.createElement(ErrorBoundary, errorBoundaryProps, /*#__PURE__*/React.createElement(Component, props));\n    } // Format for display in DevTools\n\n\n    var name = Component.displayName || Component.name || 'Unknown';\n    Wrapped.displayName = \"withErrorBoundary(\" + name + \")\";\n    return Wrapped;\n  }\n\n  function useErrorHandler(givenError) {\n    var _React$useState = React.useState(null),\n        error = _React$useState[0],\n        setError = _React$useState[1];\n\n    if (givenError) throw givenError;\n    if (error) throw error;\n    return setError;\n  }\n\n  exports.ErrorBoundary = ErrorBoundary;\n  exports.useErrorHandler = useErrorHandler;\n  exports.withErrorBoundary = withErrorBoundary;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceMappingURL=react-error-boundary.umd.js.map\n\n\n//# sourceURL=webpack:///./node_modules/react-error-boundary/dist/react-error-boundary.umd.js?")},"./src/components/Routing/AuthenticationRoute.js":
/*!*******************************************************!*\
  !*** ./src/components/Routing/AuthenticationRoute.js ***!
  \*******************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/auth/AuthContext */ "./src/context/auth/AuthContext.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners-kit */ "./node_modules/react-spinners-kit/lib/index.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar AuthenticationRoute = function AuthenticationRoute(_ref) {\n  var Component = _ref.component,\n      auth = _ref.auth,\n      rest = _objectWithoutProperties(_ref, ["component", "auth"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__["default"]),\n      isAuthenticated = _useContext.isAuthenticated,\n      loading = _useContext.loading;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {\n    render: function render(props) {\n      if (loading || isAuthenticated == null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "main"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "spinner"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__["ImpulseSpinner"], {\n        size: 60,\n        style: {}\n      })));else if (isAuthenticated) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {\n          to: "/"\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "main"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {\n          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "main"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "spinner"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__["ImpulseSpinner"], {\n            size: 50,\n            style: {\n              margin: "auto"\n            }\n          })))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)));\n      }\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (AuthenticationRoute);\n\n//# sourceURL=webpack:///./src/components/Routing/AuthenticationRoute.js?')},"./src/components/Routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/Routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/auth/AuthContext */ "./src/context/auth/AuthContext.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners-kit */ "./node_modules/react-spinners-kit/lib/index.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      auth = _ref.auth,\n      rest = _objectWithoutProperties(_ref, ["component", "auth"]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__["default"]),\n      isAuthenticated = _useContext.isAuthenticated,\n      loading = _useContext.loading;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {\n    render: function render(props) {\n      if (loading || isAuthenticated == null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "main"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "spinner"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__["ImpulseSpinner"], {\n        size: 68\n      })));else if (!isAuthenticated) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {\n          to: "/login"\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {\n          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "main"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "spinner"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_kit__WEBPACK_IMPORTED_MODULE_3__["ImpulseSpinner"], {\n            size: 50,\n            style: {\n              margin: "auto"\n            }\n          })))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "main"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)));\n      }\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);\n\n//# sourceURL=webpack:///./src/components/Routing/PrivateRoute.js?')},"./src/components/Routing/Routes.js":
/*!******************************************!*\
  !*** ./src/components/Routing/Routes.js ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrivateRoute */ "./src/components/Routing/PrivateRoute.js");\n/* harmony import */ var _AuthenticationRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthenticationRoute */ "./src/components/Routing/AuthenticationRoute.js");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");\n/* harmony import */ var _context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/auth/AuthContext */ "./src/context/auth/AuthContext.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners-kit */ "./node_modules/react-spinners-kit/lib/index.js");\n/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_kit__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _layout_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/Error */ "./src/components/layout/Error.js");\n\n\n\n\n\n\n\n\n\nvar Post = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ../post/Post */ "./src/components/post/Post.js"));\n});\nvar Home = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ../pages/Home */ "./src/components/pages/Home.js"));\n});\nvar Account = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ../pages/Account */ "./src/components/pages/Account.js"));\n});\nvar NewPost = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../pages/NewPost */ "./src/components/pages/NewPost.js"));\n});\nvar ChangePassword = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ../pages/ChangePassword */ "./src/components/pages/ChangePassword.js"));\n});\nvar Login = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../auth/Login */ "./src/components/auth/Login.js"));\n});\nvar Register = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../auth/Register */ "./src/components/auth/Register.js"));\n});\nvar NotFound = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ../pages/NotFound */ "./src/components/pages/NotFound.js"));\n});\nvar User = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../pages/User */ "./src/components/pages/User.js"));\n});\n\nvar Routes = function Routes() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_AuthContext__WEBPACK_IMPORTED_MODULE_5__["default"]),\n      loggedIn = _useContext.loggedIn;\n\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();\n  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useTransition"])(location, function (location) {\n    return location.pathname;\n  }, {\n    from: {\n      opacity: 0,\n      transform: "scale(0.6) translateX(-100%)"\n    },\n    enter: {\n      opacity: 1,\n      transform: "scale(1) translateX(0%)"\n    },\n    leave: {\n      opacity: 0,\n      transform: "scale(0.6) translateX(70%)"\n    },\n    config: react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].stiff\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    loggedIn();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, transitions.map(function (_ref) {\n    var item = _ref.item,\n        props = _ref.props,\n        key = _ref.key;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {\n      key: "".concat(key, "anim"),\n      style: props,\n      className: "container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_7__["ErrorBoundary"], {\n      FallbackComponent: _layout_Error__WEBPACK_IMPORTED_MODULE_8__["default"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "main"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "spinner"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_kit__WEBPACK_IMPORTED_MODULE_6__["ImpulseSpinner"], {\n        size: 50,\n        style: {\n          margin: "auto"\n        }\n      })))\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {\n      location: item\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthenticationRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      exact: true,\n      path: "/login",\n      component: Login\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthenticationRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      exact: true,\n      path: "/register",\n      component: Register\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/",\n      component: Home\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/add-post",\n      component: NewPost\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/account",\n      component: Account\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/user/:id",\n      component: User\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/post/:id",\n      component: Post\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      exact: true,\n      path: "/password",\n      component: ChangePassword\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n      component: NotFound\n    })))));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Routes);\n\n//# sourceURL=webpack:///./src/components/Routing/Routes.js?')},"./src/components/layout/Error.js":
/*!****************************************!*\
  !*** ./src/components/layout/Error.js ***!
  \****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Error(_ref) {\n  var error = _ref.error,\n      componentStack = _ref.componentStack,\n      resetErrorBoundary = _ref.resetErrorBoundary;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    role: "alert"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    style: {\n      width: "40%",\n      margin: "auto",\n      padding: "8vh",\n      fontSize: "10em "\n    }\n  }, "Something went wrong"));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Error);\n\n//# sourceURL=webpack:///./src/components/layout/Error.js?')}}]);