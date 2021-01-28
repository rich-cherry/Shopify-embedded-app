webpackHotUpdate_N_E("pages/annotated-layout",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Rich/Desktop/Developer New/Special_projects/sample-embedded-app/pages/annotated-layout.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AnnotatedLayout, _React$Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log('submission', _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleChange\", function (field) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, field, value));\n      };\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleToggle\", function () {\n      _this.setState(function (_ref) {\n        var enabled = _ref.enabled;\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          discount = _this$state.discount,\n          enabled = _this$state.enabled;\n      var contentStatus = enabled ? 'Disable' : 'Enable';\n      var textStatus = enabled ? 'enabled' : 'disabled';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Default discount\",\n            description: \"Add a product to Sample App, it will automatically be discounted.\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], {\n              sectioned: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Form\"], {\n                onSubmit: this.handleSubmit,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"FormLayout\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], {\n                    value: discount,\n                    onChange: this.handleChange('discount'),\n                    label: \"Discount percentage\",\n                    type: \"discount\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 19\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n                    distribution: \"trailing\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n                      primary: true,\n                      submit: true,\n                      children: \"Save\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 43,\n                      columnNumber: 21\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 19\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 17\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Price updates\",\n            description: \"Temporarily disable all Sample App price updates\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"SettingToggle\"], {\n              action: {\n                content: contentStatus,\n                onAction: this.handleToggle\n              },\n              enabled: enabled,\n              children: [\"This setting is\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextStyle\"], {\n                variation: \"strong\",\n                children: textStatus\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 15\n              }, this), \".\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcz8wMTc3Il0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlVG9nZ2xlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBYU1BLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsYUFBTyxFQUFFO0FBRkgsSzs7dU5BdURPLFlBQU07QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUUsTUFBS0csS0FBTCxDQUFXSDtBQURULE9BQWQ7O0FBR0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsTUFBS0YsS0FBL0I7QUFDRCxLOzt1TkFFYyxVQUFDRyxLQUFELEVBQVc7QUFDeEIsYUFBTyxVQUFDQyxLQUFEO0FBQUEsZUFBVyxNQUFLTCxRQUFMLCtGQUFpQkksS0FBakIsRUFBeUJDLEtBQXpCLEVBQVg7QUFBQSxPQUFQO0FBQ0QsSzs7dU5BQ2MsWUFBTTtBQUNuQixZQUFLTCxRQUFMLENBQWMsZ0JBQWlCO0FBQUEsWUFBZEQsT0FBYyxRQUFkQSxPQUFjO0FBQzdCLGVBQU87QUFBRUEsaUJBQU8sRUFBRSxDQUFDQTtBQUFaLFNBQVA7QUFDRCxPQUZEO0FBR0QsSzs7Ozs7Ozs2QkFoRVE7QUFBQSx3QkFDdUIsS0FBS0UsS0FENUI7QUFBQSxVQUNDSCxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxPQURYLGVBQ1dBLE9BRFg7QUFFUCxVQUFNTyxhQUFhLEdBQUdQLE9BQU8sR0FBRyxTQUFILEdBQWUsUUFBNUM7QUFDQSxVQUFNUSxVQUFVLEdBQUdSLE9BQU8sR0FBRyxTQUFILEdBQWUsVUFBekM7QUFFQSwwQkFDRSxxRUFBQyxxREFBRDtBQUFBLCtCQUNFLHFFQUFDLHVEQUFEO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGlCQUFLLEVBQUMsa0JBRFI7QUFFRSx1QkFBVyxFQUFDLG1FQUZkO0FBQUEsbUNBSUUscUVBQUMscURBQUQ7QUFBTSx1QkFBUyxNQUFmO0FBQUEscUNBQ0UscUVBQUMscURBQUQ7QUFBTSx3QkFBUSxFQUFFLEtBQUtTLFlBQXJCO0FBQUEsdUNBQ0UscUVBQUMsMkRBQUQ7QUFBQSwwQ0FDRSxxRUFBQywwREFBRDtBQUNFLHlCQUFLLEVBQUVWLFFBRFQ7QUFFRSw0QkFBUSxFQUFFLEtBQUtXLFlBQUwsQ0FBa0IsVUFBbEIsQ0FGWjtBQUdFLHlCQUFLLEVBQUMscUJBSFI7QUFJRSx3QkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQU9FLHFFQUFDLHNEQUFEO0FBQU8sZ0NBQVksRUFBQyxVQUFwQjtBQUFBLDJDQUNFLHFFQUFDLHVEQUFEO0FBQVEsNkJBQU8sTUFBZjtBQUFnQiw0QkFBTSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBdUJFLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxpQkFBSyxFQUFDLGVBRFI7QUFFRSx1QkFBVyxFQUFDLGtEQUZkO0FBQUEsbUNBSUUscUVBQUMsOERBQUQ7QUFDRSxvQkFBTSxFQUFFO0FBQ05DLHVCQUFPLEVBQUVKLGFBREg7QUFFTkssd0JBQVEsRUFBRSxLQUFLQztBQUZULGVBRFY7QUFLRSxxQkFBTyxFQUFFYixPQUxYO0FBQUEsNENBT2tCLEdBUGxCLGVBUUUscUVBQUMsMERBQUQ7QUFBVyx5QkFBUyxFQUFDLFFBQXJCO0FBQUEsMEJBQStCUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTJDRDs7OztFQXREMkJNLDRDQUFLLENBQUNDLFM7O0FBeUVyQmpCLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIEZvcm0sXG4gIEZvcm1MYXlvdXQsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgU2V0dGluZ1RvZ2dsZSxcbiAgU3RhY2ssXG4gIFRleHRGaWVsZCxcbiAgVGV4dFN0eWxlLFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcblxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzY291bnQ6ICcxMCUnLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2NvdW50LCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSc7XG4gICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJEZWZhdWx0IGRpc2NvdW50XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWRkIGEgcHJvZHVjdCB0byBTYW1wbGUgQXBwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzY291bnRlZC5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnQgcGVyY2VudGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XG4gICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgdXBkYXRlc1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRlbXBvcmFyaWx5IGRpc2FibGUgYWxsIFNhbXBsZSBBcHAgcHJpY2UgdXBkYXRlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdUb2dnbGVcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFN0YXR1cyxcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb2dnbGUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRoaXMgc2V0dGluZyBpc3snICd9XG4gICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+e3RleHRTdGF0dXN9PC9UZXh0U3R5bGU+LlxuICAgICAgICAgICAgPC9TZXR0aW5nVG9nZ2xlPlxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcbiAgfTtcbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZCB9O1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ })

})