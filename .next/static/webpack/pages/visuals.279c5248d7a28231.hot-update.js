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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar visuals = function(param) {\n    var visuals = param.visuals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref[0], setOpenModal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns-5 justify-evenly flex flex-wrap gap-8 mt-4\",\n                children: visuals.map(function(image, id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative md:w-1/6 h-fit border-4 p-2 bg-[#fee1ff] border-[#918fe6] flex flex-col w-3/4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"\",\n                                src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image.image)\n                            }, id, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setOpenModal((0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image.image));\n                                },\n                                className: \"focus:outline-none absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-transparent\",\n                                type: \"button\",\n                                \"data-modal-toggle\": \"popup-modal\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                image: true,\n                openModal: openModal,\n                setOpenModal: setOpenModal\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(visuals, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (visuals);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aXN1YWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ0M7QUFDTTs7QUFFOUMsSUFBTUksT0FBTyxHQUFHLGdCQUFtQjtRQUFmQSxPQUFPLFNBQVBBLE9BQU87O0lBQ3pCLElBQWtDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDSSxTQUFTLEdBQWtCSixHQUFjLEdBQWhDLEVBQUVLLFlBQVksR0FBSUwsR0FBYyxHQUFsQjtJQUU5QixxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsa0RBQWtEOzswQkFDL0QsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxvREFBb0Q7MEJBQ2hFSixPQUFPLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEVBQUU7eUNBQ3JCLDhEQUFDSixLQUFHO3dCQUFVQyxTQUFTLEVBQUMsd0ZBQXdGOzswQ0FDOUcsOERBQUNJLEtBQUc7Z0NBQUVKLFNBQVMsRUFBQyxFQUFFO2dDQUFVSyxHQUFHLEVBQUVWLG1EQUFNLENBQUNPLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOytCQUE1QkMsRUFBRTs7OztxQ0FBa0M7MENBQzVELDhEQUFDRyxRQUFNO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU1ULFlBQVksQ0FBQ0gsbURBQU0sQ0FBQ08sS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztpQ0FBQTtnQ0FBRUYsU0FBUyxFQUFDLHdGQUF3RjtnQ0FBQ1EsSUFBSSxFQUFDLFFBQVE7Z0NBQUNDLG1CQUFpQixFQUFDLGFBQWE7Ozs7O3FDQUNqTTs7dUJBSEROLEVBQUU7Ozs7NkJBSU47aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNULHlEQUFLO2dCQUFDUSxLQUFLLEVBQUUsSUFBSTtnQkFBRUwsU0FBUyxFQUFFQSxTQUFTO2dCQUFFQyxZQUFZLEVBQUVBLFlBQVk7Ozs7O3FCQUFJOzs7Ozs7YUFDcEUsQ0FDUDtDQUNGO0dBakJLRixPQUFPOztBQW1CYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aXN1YWxzLmpzeD9lNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50J1xuXG5jb25zdCB2aXN1YWxzID0gKCB7IHZpc3VhbHMgfSApID0+IHtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWF4LXctWzEyMDBweF0gbS1hdXRvIG1pbi1oLXNjcmVlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucy01IGp1c3RpZnktZXZlbmx5IGZsZXggZmxleC13cmFwIGdhcC04IG10LTQnPlxuICAgICAgICB7dmlzdWFscy5tYXAoKGltYWdlLCBpZCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPSdyZWxhdGl2ZSBtZDp3LTEvNiBoLWZpdCBib3JkZXItNCBwLTIgYmctWyNmZWUxZmZdIGJvcmRlci1bIzkxOGZlNl0gZmxleCBmbGV4LWNvbCB3LTMvNCc+XG4gICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9Jycga2V5PXtpZH0gc3JjPXt1cmxGb3IoaW1hZ2UuaW1hZ2UpfT48L2ltZz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsKHVybEZvcihpbWFnZS5pbWFnZSkpfSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGgtZnVsbCBiZy10cmFuc3BhcmVudFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW1vZGFsLXRvZ2dsZT1cInBvcHVwLW1vZGFsXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbCBpbWFnZT17dHJ1ZX0gb3Blbk1vZGFsPXtvcGVuTW9kYWx9IHNldE9wZW5Nb2RhbD17c2V0T3Blbk1vZGFsfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpc3VhbHNcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmlzdWFscyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInZpc3VhbHNcIl0nKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7IHZpc3VhbHMgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInVybEZvciIsInZpc3VhbHMiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbWFnZSIsImlkIiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJkYXRhLW1vZGFsLXRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/visuals.jsx\n"));

/***/ })

});