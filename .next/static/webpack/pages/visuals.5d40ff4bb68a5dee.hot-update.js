"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/visuals",{

/***/ "./pages/visuals.jsx":
/*!***************************!*\
  !*** ./pages/visuals.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageModal */ \"./components/ImageModal.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar visuals = function(param) {\n    var visuals = param.visuals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref[0], setOpenModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalState = ref1[0], setModalState = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:columns-5 columns-2 justify-evenly md:gap-8 flex flex-wrap mt-4\",\n                children: visuals.map(function(image, id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-[40%] md:w-1/6 h-fit border-4 p-2 bg-[#fee1ff] border-[#918fe6] flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"\",\n                                src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image.image)\n                            }, id, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    setOpenModal((0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image.image));\n                                    setModalState(true);\n                                },\n                                className: \"focus:outline-none absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-transparent\",\n                                type: \"button\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                modalState: modalState,\n                setModalState: setModalState,\n                openModal: openModal,\n                setOpenModal: setOpenModal\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(visuals, \"R5MpwxtIzaMQi8yPEhY6DBbDou0=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (visuals);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aXN1YWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ1c7QUFDSjs7QUFFOUMsSUFBTUksT0FBTyxHQUFHLGdCQUFtQjtRQUFmQSxPQUFPLFNBQVBBLE9BQU87O0lBQ3pCLElBQWtDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDSSxTQUFTLEdBQWtCSixHQUFjLEdBQWhDLEVBQUVLLFlBQVksR0FBSUwsR0FBYyxHQUFsQjtJQUM5QixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q00sVUFBVSxHQUFtQk4sSUFBZSxHQUFsQyxFQUFFTyxhQUFhLEdBQUlQLElBQWUsR0FBbkI7SUFFaEMscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtEQUFrRDs7MEJBQy9ELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0VBQW9FOzBCQUNoRk4sT0FBTyxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxFQUFFO3lDQUNyQiw4REFBQ0osS0FBRzt3QkFBVUMsU0FBUyxFQUFDLDBGQUEwRjs7MENBQ2hILDhEQUFDSSxLQUFHO2dDQUFFSixTQUFTLEVBQUMsRUFBRTtnQ0FBVUssR0FBRyxFQUFFWixtREFBTSxDQUFDUyxLQUFLLENBQUNBLEtBQUssQ0FBQzsrQkFBNUJDLEVBQUU7Ozs7cUNBQWtDOzBDQUM1RCw4REFBQ0csUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFLFdBQU07b0NBQUNYLFlBQVksQ0FBQ0gsbURBQU0sQ0FBQ1MsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDO29DQUFDSixhQUFhLENBQUMsSUFBSSxDQUFDO2lDQUFDO2dDQUFFRSxTQUFTLEVBQUMsd0ZBQXdGO2dDQUFDUSxJQUFJLEVBQUMsUUFBUTs7Ozs7cUNBQUc7O3VCQUY1TEwsRUFBRTs7Ozs2QkFHTjtpQkFDUCxDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ1gsOERBQVU7Z0JBQUNLLFVBQVUsRUFBRUEsVUFBVTtnQkFBRUMsYUFBYSxFQUFFQSxhQUFhO2dCQUFFSCxTQUFTLEVBQUVBLFNBQVM7Z0JBQUVDLFlBQVksRUFBRUEsWUFBWTs7Ozs7cUJBQUk7Ozs7OzthQUNsSCxDQUNQO0NBQ0Y7R0FqQktGLE9BQU87O0FBbUJiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Zpc3VhbHMuanN4P2U0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlTW9kYWwnO1xuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50J1xuXG5jb25zdCB2aXN1YWxzID0gKCB7IHZpc3VhbHMgfSApID0+IHtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtYXgtdy1bMTIwMHB4XSBtLWF1dG8gbWluLWgtc2NyZWVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpjb2x1bW5zLTUgY29sdW1ucy0yIGp1c3RpZnktZXZlbmx5IG1kOmdhcC04IGZsZXggZmxleC13cmFwIG10LTQnPlxuICAgICAgICB7dmlzdWFscy5tYXAoKGltYWdlLCBpZCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LVs0MCVdIG1kOnctMS82IGgtZml0IGJvcmRlci00IHAtMiBiZy1bI2ZlZTFmZl0gYm9yZGVyLVsjOTE4ZmU2XSBmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT0nJyBrZXk9e2lkfSBzcmM9e3VybEZvcihpbWFnZS5pbWFnZSl9PjwvaW1nPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0T3Blbk1vZGFsKHVybEZvcihpbWFnZS5pbWFnZSkpOyBzZXRNb2RhbFN0YXRlKHRydWUpfX0gY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBoLWZ1bGwgYmctdHJhbnNwYXJlbnRcIiB0eXBlPVwiYnV0dG9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZU1vZGFsIG1vZGFsU3RhdGU9e21vZGFsU3RhdGV9IHNldE1vZGFsU3RhdGU9e3NldE1vZGFsU3RhdGV9IG9wZW5Nb2RhbD17b3Blbk1vZGFsfSBzZXRPcGVuTW9kYWw9e3NldE9wZW5Nb2RhbH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aXN1YWxzXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZpc3VhbHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goJypbX3R5cGUgPT0gXCJ2aXN1YWxzXCJdJyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6eyB2aXN1YWxzIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2VNb2RhbCIsInVybEZvciIsInZpc3VhbHMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiaWQiLCJpbWciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/visuals.jsx\n"));

/***/ })

});