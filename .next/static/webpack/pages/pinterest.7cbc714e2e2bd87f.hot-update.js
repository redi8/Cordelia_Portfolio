"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pinterest",{

/***/ "./pages/pinterest.jsx":
/*!*****************************!*\
  !*** ./pages/pinterest.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar pinterest = function(param) {\n    var boards = param.boards;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"columns-3 justify-evenly flex flex-wrap gap-8 mt-4\",\n            children: boards.map(function(board, id) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/4 flex flex-col w-3/4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"m-auto text-3xl\",\n                            children: board.title\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full my-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\",\n                                \"data-pin-do\": \"embedBoard\",\n                                \"data-pin-board-width\": \"500\",\n                                \"data-pin-scale-height\": \"400\",\n                                \"data-pin-scale-width\": \"80\",\n                                \"data-pin-build\": \"doBuild\",\n                                href: board === null || board === void 0 ? void 0 : board.url\n                            }, id, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/pinterest.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (pinterest);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waW50ZXJlc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFDUDtBQUd6QixJQUFNRSxTQUFTLEdBQUcsZ0JBQWtCO1FBQWRDLE1BQU0sU0FBTkEsTUFBTTtJQUMxQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0RBQWtEO2tCQUMvRCw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsb0RBQW9EO3NCQUNoRUYsTUFBTSxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxFQUFFOzhCQUNwQixxRUFBQ0osS0FBRztvQkFBVUMsU0FBUyxFQUFDLDhCQUE4Qjs7c0NBQ3BELDhEQUFDSSxJQUFFOzRCQUFDSixTQUFTLEVBQUMsaUJBQWlCO3NDQUFFRSxLQUFLLENBQUNHLEtBQUs7Ozs7O2lDQUFNO3NDQUNsRCw4REFBQ04sS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGFBQWE7c0NBQzFCLDRFQUFDTSxHQUFDO2dDQUFDTixTQUFTLEVBQUMsRUFBRTtnQ0FBVU8sYUFBVyxFQUFDLFlBQVk7Z0NBQUNDLHNCQUFvQixFQUFDLEtBQUs7Z0NBQUNDLHVCQUFxQixFQUFDLEtBQUs7Z0NBQUNDLHNCQUFvQixFQUFDLElBQUk7Z0NBQUNDLGdCQUFjLEVBQUMsU0FBUztnQ0FBQ0MsSUFBSSxFQUFFVixLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRVcsR0FBRzsrQkFBdkpWLEVBQUU7Ozs7cUNBQTJKOzs7OztpQ0FDOUs7O21CQUpFQSxFQUFFOzs7O3lCQUtOO2FBQ1AsQ0FBQzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDUDtDQUNGOztBQUVELCtEQUFlTixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpbnRlcmVzdC5qc3g/NzM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vbGliL2NsaWVudCdcblxuY29uc3QgcGludGVyZXN0ID0gKCB7IGJvYXJkcyB9ICkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1heC13LVsxMjAwcHhdIG0tYXV0byBtaW4taC1zY3JlZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMtMyBqdXN0aWZ5LWV2ZW5seSBmbGV4IGZsZXgtd3JhcCBnYXAtOCBtdC00Jz5cbiAgICAgICAge2JvYXJkcy5tYXAoKGJvYXJkLCBpZCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPSdtZDp3LTEvNCBmbGV4IGZsZXgtY29sIHctMy80Jz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J20tYXV0byB0ZXh0LTN4bCc+e2JvYXJkLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIG15LTQnPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9Jycga2V5PXtpZH0gZGF0YS1waW4tZG89XCJlbWJlZEJvYXJkXCIgZGF0YS1waW4tYm9hcmQtd2lkdGg9XCI1MDBcIiBkYXRhLXBpbi1zY2FsZS1oZWlnaHQ9XCI0MDBcIiBkYXRhLXBpbi1zY2FsZS13aWR0aD1cIjgwXCIgZGF0YS1waW4tYnVpbGQ9XCJkb0J1aWxkXCIgaHJlZj17Ym9hcmQ/LnVybH0+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGludGVyZXN0XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInBpbnRlcmVzdEJvYXJkc1wiXScpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOnsgYm9hcmRzIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJTY3JpcHQiLCJSZWFjdCIsInBpbnRlcmVzdCIsImJvYXJkcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImJvYXJkIiwiaWQiLCJoMSIsInRpdGxlIiwiYSIsImRhdGEtcGluLWRvIiwiZGF0YS1waW4tYm9hcmQtd2lkdGgiLCJkYXRhLXBpbi1zY2FsZS1oZWlnaHQiLCJkYXRhLXBpbi1zY2FsZS13aWR0aCIsImRhdGEtcGluLWJ1aWxkIiwiaHJlZiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pinterest.jsx\n"));

/***/ })

});