/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar PORT = process.env.PORT || 8079;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\napp.use('/img', _express2.default.static('img'));\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n    var actions, context, content;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            actions = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return route.component.fetching ? route.component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n            }).map(function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context.abrupt('return', _context.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, undefined);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            _context2.next = 3;\n            return Promise.all(actions);\n\n          case 3:\n            context = {};\n            content = (0, _render2.default)(req.path, _store2.default, context);\n\n\n            res.send(content);\n\n          case 6:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(PORT, function () {\n  return console.log('Frontend service listening on port: http://localhost:' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: pathname, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/countries.js":
/*!*********************************!*\
  !*** ./src/action/countries.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCountriesEu = exports.fetchCountry = exports.fetchCountries = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchCountries = exports.fetchCountries = function fetchCountries() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRIES });\n              _context.next = 4;\n              return _axios2.default.get(_types.ROOT + '/all');\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: res.data });\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](0);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: [] });\n\n            case 12:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchCountry = exports.fetchCountry = function fetchCountry(name) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRY });\n              _context2.next = 4;\n              return _axios2.default.get(_types.ROOT + '/name/' + name);\n\n            case 4:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: res.data[0] });\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2['catch'](0);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: {} });\n\n            case 12:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchCountriesEu = exports.fetchCountriesEu = function fetchCountriesEu() {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              console.log('fetchCountriesEu');\n              _context3.prev = 1;\n\n              dispatch({ type: _types.REQUEST_EU_COUNTRIES });\n              _context3.next = 5;\n              return _axios2.default.get(_types.ROOT + '/regionalbloc/eu');\n\n            case 5:\n              res = _context3.sent;\n\n              dispatch({ type: _types.RECEIVE_EU_COUNTRIES, payload: res.data });\n              _context3.next = 13;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3['catch'](1);\n\n              console.log(_context3.t0);\n              dispatch({ type: _types.RECEIVE_EU_COUNTRIES, payload: [] });\n\n            case 13:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined, [[1, 9]]);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/countries.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ROOT = exports.ROOT = 'https://restcountries.eu/rest/v2';\n\nvar REQUEST_COUNTRIES = exports.REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';\nvar RECEIVE_COUNTRIES = exports.RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';\n\nvar REQUEST_EU_COUNTRIES = exports.REQUEST_EU_COUNTRIES = 'REQUEST_EU_COUNTRIES';\nvar RECEIVE_EU_COUNTRIES = exports.RECEIVE_EU_COUNTRIES = 'RECEIVE_EU_COUNTRIES';\n\nvar REQUEST_COUNTRY = exports.REQUEST_COUNTRY = 'REQUEST_COUNTRY';\nvar RECEIVE_COUNTRY = exports.RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/common/Loading.js":
/*!*******************************!*\
  !*** ./src/common/Loading.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loading = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Loading = exports.Loading = function Loading() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"loading-container\" },\n      _react2.default.createElement(\"img\", { src: \"../../img/loading.svg\", alt: \"\" })\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/common/Loading.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Loading = __webpack_require__(/*! ./Loading */ \"./src/common/Loading.js\");\n\nObject.keys(_Loading).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Loading[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/Countries/CityDetails.js":
/*!*************************************************!*\
  !*** ./src/components/Countries/CityDetails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _CountriesItem = __webpack_require__(/*! ./CountriesItem */ \"./src/components/Countries/CountriesItem.js\");\n\nvar _CountriesItem2 = _interopRequireDefault(_CountriesItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var countries = _ref.countries;\n  return { countries: countries };\n};\n\nvar CityDetails = function (_Component) {\n  _inherits(CityDetails, _Component);\n\n  function CityDetails() {\n    _classCallCheck(this, CityDetails);\n\n    return _possibleConstructorReturn(this, (CityDetails.__proto__ || Object.getPrototypeOf(CityDetails)).apply(this, arguments));\n  }\n\n  _createClass(CityDetails, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchCountriesEu();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$countries = this.props.countries,\n          isFetching = _props$countries.isFetching,\n          data = _props$countries.data;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'countries-container' },\n          data.map(function (item, i) {\n            return _react2.default.createElement(_CountriesItem2.default, _extends({ key: i }, item));\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch;\n\n      return [dispatch((0, _countries.fetchCountriesEu)())];\n    }\n  }]);\n\n  return CityDetails;\n}(_react.Component);\n\n;\n\nexports.default = (0, _reactRedux.connect)(m, { fetchCountriesEu: _countries.fetchCountriesEu })(CityDetails);\n\n//# sourceURL=webpack:///./src/components/Countries/CityDetails.js?");

/***/ }),

/***/ "./src/components/Countries/CountriesItem.js":
/*!***************************************************!*\
  !*** ./src/components/Countries/CountriesItem.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var name = _ref.name,\n      flag = _ref.flag,\n      capital = _ref.capital,\n      population = _ref.population;\n\n  return _react2.default.createElement(\n    _reactRouterDom.NavLink,\n    { to: '/' + name, className: 'countries-item' },\n    _react2.default.createElement('img', { src: flag, alt: '' }),\n    _react2.default.createElement(\n      'div',\n      { className: 'countries-item-data' },\n      _react2.default.createElement(\n        'h4',\n        null,\n        name\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        capital\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        population,\n        ' pop.'\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/Countries/CountriesItem.js?");

/***/ }),

/***/ "./src/components/Countries/index.js":
/*!*******************************************!*\
  !*** ./src/components/Countries/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _CountriesItem = __webpack_require__(/*! ./CountriesItem */ \"./src/components/Countries/CountriesItem.js\");\n\nvar _CountriesItem2 = _interopRequireDefault(_CountriesItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var countries = _ref.countries;\n  return { countries: countries };\n};\n\nvar Countries = function (_Component) {\n  _inherits(Countries, _Component);\n\n  function Countries() {\n    _classCallCheck(this, Countries);\n\n    return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).apply(this, arguments));\n  }\n\n  _createClass(Countries, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchCountries();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$countries = this.props.countries,\n          isFetching = _props$countries.isFetching,\n          data = _props$countries.data;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'countries-container' },\n          data.map(function (item, i) {\n            return _react2.default.createElement(_CountriesItem2.default, _extends({ key: i }, item));\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch;\n\n      return [dispatch((0, _countries.fetchCountries)())];\n    }\n  }]);\n\n  return Countries;\n}(_react.Component);\n\n;\n\nexports.default = (0, _reactRedux.connect)(m, { fetchCountries: _countries.fetchCountries })(Countries);\n\n//# sourceURL=webpack:///./src/components/Countries/index.js?");

/***/ }),

/***/ "./src/components/Country/index.js":
/*!*****************************************!*\
  !*** ./src/components/Country/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var country = _ref.country;\n  return { country: country };\n};\n\nvar Country = function (_Component) {\n  _inherits(Country, _Component);\n\n  function Country() {\n    _classCallCheck(this, Country);\n\n    return _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).apply(this, arguments));\n  }\n\n  _createClass(Country, [{\n    key: 'componentDidMount',\n\n\n    // static fetching ({ dispatch, path }) {\n    //   return [dispatch(fetchCountry(path.substr(1)))];\n    // }\n\n    value: function componentDidMount() {\n      this.props.fetchCountry(this.props.match.params.name);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$country = this.props.country,\n          isFetching = _props$country.isFetching,\n          flag = _props$country.flag,\n          name = _props$country.name,\n          nativeName = _props$country.nativeName,\n          capital = _props$country.capital,\n          region = _props$country.region,\n          population = _props$country.population,\n          languages = _props$country.languages;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'country-container' },\n          _react2.default.createElement('img', { src: flag, alt: '' }),\n          _react2.default.createElement(\n            'div',\n            { className: 'country-data' },\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Name: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                name\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'NativeName: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                nativeName\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Capital: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                capital\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Region: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                region\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'country-data-item' },\n              _react2.default.createElement(\n                'span',\n                null,\n                'Population: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                population\n              )\n            )\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'div',\n            { className: 'languages-container' },\n            languages.map(function (item, i) {\n              return _react2.default.createElement(\n                'span',\n                { key: i },\n                item.name\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Country;\n}(_react.Component);\n\nexports.default = (0, _reactRedux.connect)(m, { fetchCountry: _countries.fetchCountry })(Country);\n\n//# sourceURL=webpack:///./src/components/Country/index.js?");

/***/ }),

/***/ "./src/reducers/countries.js":
/*!***********************************!*\
  !*** ./src/reducers/countries.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  data: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    case _types.REQUEST_EU_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_EU_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/countries.js?");

/***/ }),

/***/ "./src/reducers/country.js":
/*!*********************************!*\
  !*** ./src/reducers/country.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  name: '',\n  nativeName: '',\n  flag: '',\n  capital: '',\n  region: '',\n  population: '',\n  languages: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/country.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _countries = __webpack_require__(/*! ./countries */ \"./src/reducers/countries.js\");\n\nvar _countries2 = _interopRequireDefault(_countries);\n\nvar _country = __webpack_require__(/*! ./country */ \"./src/reducers/country.js\");\n\nvar _country2 = _interopRequireDefault(_country);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  countries: _countries2.default,\n  country: _country2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Countries = __webpack_require__(/*! ../components/Countries */ \"./src/components/Countries/index.js\");\n\nvar _Countries2 = _interopRequireDefault(_Countries);\n\nvar _Country = __webpack_require__(/*! ../components/Country */ \"./src/components/Country/index.js\");\n\nvar _Country2 = _interopRequireDefault(_Country);\n\nvar _CityDetails = __webpack_require__(/*! ../components/Countries/CityDetails */ \"./src/components/Countries/CityDetails.js\");\n\nvar _CityDetails2 = _interopRequireDefault(_CityDetails);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _Countries2.default,\n  exact: true\n}, {\n  path: '/cityDetails',\n  component: _CityDetails2.default,\n  exact: true\n}, {\n  path: '/:name',\n  component: _Country2.default,\n  exact: true\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });