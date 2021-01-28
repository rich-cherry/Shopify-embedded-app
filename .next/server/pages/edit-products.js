module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/Rich/Desktop/Developer New/Special_projects/sample-embedded-app/pages/edit-products.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n`;\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '',\n      price: '',\n      variantId: '',\n      showToast: false\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"itemToBeConsumed\", () => {\n      const item = store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('item');\n      const price = item.variants.edges[0].node.price;\n      const variantId = item.variants.edges[0].node.id;\n      const discounter = price * 0.1;\n      this.setState({\n        price,\n        variantId\n      });\n      return (price - discounter).toFixed(2);\n    });\n  }\n\n  componentDidMount() {\n    this.setState({\n      discount: this.itemToBeConsumed()\n    });\n  }\n\n  render() {\n    const {\n      name,\n      price,\n      discount,\n      variantId\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_6__[\"Mutation\"], {\n      mutation: UPDATE_PRICE,\n      children: (handleSubmit, {\n        error,\n        data\n      }) => {\n        const showError = error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Banner\"], {\n          status: \"critical\",\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, this);\n\n        const showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Toast\"], {\n          content: \"Sucessfully updated\",\n          onDismiss: () => this.setState({\n            showToast: false\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this);\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Frame\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n              children: [showToast, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n                children: showError\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"DisplayText\"], {\n                  size: \"large\",\n                  children: name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n                    sectioned: true,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"FormLayout\"], {\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"FormLayout\"].Group, {\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: price,\n                          disabled: true,\n                          label: \"Original price\",\n                          type: \"price\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 76,\n                          columnNumber: 29\n                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], {\n                          prefix: \"$\",\n                          value: discount,\n                          onChange: this.handleChange('discount'),\n                          label: \"Discounted price\",\n                          type: \"discount\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 83,\n                          columnNumber: 29\n                        }, this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 75,\n                        columnNumber: 27\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                        children: \"This sale price will expire in two weeks\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 91,\n                        columnNumber: 27\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 74,\n                      columnNumber: 25\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 23\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"PageActions\"], {\n                    primaryAction: [{\n                      content: 'Save',\n                      onAction: () => {\n                        const productVariableInput = {\n                          id: variantId,\n                          price: discount\n                        };\n                        handleSubmit({\n                          variables: {\n                            input: productVariableInput\n                          }\n                        });\n                      }\n                    }],\n                    secondaryActions: [{\n                      content: 'Remove discount'\n                    }]\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 96,\n                    columnNumber: 23\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzPzg4MzIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0Msa0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWkE7O0FBY0EsTUFBTUMsV0FBTixTQUEwQkMsNENBQUssQ0FBQ0MsU0FBaEMsQ0FBMEM7QUFBQTtBQUFBOztBQUFBLG1DQUNoQztBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxlQUFTLEVBQUUsRUFITDtBQUlOQyxlQUFTLEVBQUU7QUFKTCxLQURnQzs7QUFBQSwwQ0E4RnhCQyxLQUFELElBQVc7QUFDeEIsYUFBUUMsS0FBRCxJQUFXLEtBQUtDLFFBQUwsQ0FBYztBQUFFLFNBQUNGLEtBQUQsR0FBU0M7QUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQXdCRSxxRUFBQyw0REFBRDtBQUNFLGlDQUFhLEVBQUUsQ0FDYjtBQUNFQyw2QkFBTyxFQUFFLE1BRFg7QUFFRUMsOEJBQVEsRUFBRSxNQUFNO0FBQ2QsOEJBQU1DLG9CQUFvQixHQUFHO0FBQzNCakIsNEJBQUUsRUFBRVgsU0FEdUI7QUFFM0JELCtCQUFLLEVBQUVEO0FBRm9CLHlCQUE3QjtBQUlBcUIsb0NBQVksQ0FBQztBQUNYVSxtQ0FBUyxFQUFFO0FBQUVDLGlDQUFLLEVBQUVGO0FBQVQ7QUFEQSx5QkFBRCxDQUFaO0FBR0Q7QUFWSCxxQkFEYSxDQURqQjtBQWVFLG9DQUFnQixFQUFFLENBQ2hCO0FBQ0VGLDZCQUFPLEVBQUU7QUFEWCxxQkFEZ0I7QUFmcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQTZERDtBQTFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE4RUQ7O0FBNUZ1Qzs7QUE0RzNCL0IsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtcbiAgQmFubmVyLFxuICBDYXJkLFxuICBEaXNwbGF5VGV4dCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgRnJhbWUsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgUGFnZUFjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgVG9hc3QsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5jb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXG4gIG11dGF0aW9uIHByb2R1Y3RWYXJpYW50VXBkYXRlKCRpbnB1dDogUHJvZHVjdFZhcmlhbnRJbnB1dCEpIHtcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBwcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICAgIHByb2R1Y3RWYXJpYW50IHtcbiAgICAgICAgaWRcbiAgICAgICAgcHJpY2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzY291bnQ6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgICB2YXJpYW50SWQ6ICcnLFxuICAgIHNob3dUb2FzdDogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2NvdW50OiB0aGlzLml0ZW1Ub0JlQ29uc3VtZWQoKSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TXV0YXRpb25cbiAgICAgICAgbXV0YXRpb249e1VQREFURV9QUklDRX1cbiAgICAgID5cbiAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHsgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcbiAgICAgICAgICAgIDxCYW5uZXIgc3RhdHVzPVwiY3JpdGljYWxcIj57ZXJyb3IubWVzc2FnZX08L0Jhbm5lcj5cbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHNob3dUb2FzdCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0VmFyaWFudFVwZGF0ZSAmJiAoXG4gICAgICAgICAgICA8VG9hc3RcbiAgICAgICAgICAgICAgY29udGVudD1cIlN1Y2Vzc2Z1bGx5IHVwZGF0ZWRcIlxuICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IGZhbHNlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICB7c2hvd1RvYXN0fVxuICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yfVxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYWJsZUlucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlbW92ZSBkaXNjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L011dGF0aW9uPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcbiAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgaXRlbVRvQmVDb25zdW1lZCA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XG4gICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XG4gICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xuICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcbiAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit-products.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });