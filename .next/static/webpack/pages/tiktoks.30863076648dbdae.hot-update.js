"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tiktoks",{

/***/ "./components/Modal.jsx":
/*!******************************!*\
  !*** ./components/Modal.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Modal = function(param) {\n    var openModal = param.openModal, setOpenModal = param.setOpenModal, modalState = param.modalState, setModalState = param.setModalState;\n    _s();\n    var vidRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var handlePlayVideo = function() {\n        if (vidRef.current.play()) {\n            vidRef.current.pause();\n        } else {\n            vidRef.current.play();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(modalState ? \"block\" : \"hidden\", \" md:inset-0 md:h-full fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen overflow-x-hidden overflow-y-auto\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    setOpenModal(null);\n                    handlePlayVideo();\n                    setModalState(false);\n                },\n                className: \"absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#040202bc]\"\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-fit relative flex h-screen p-4 m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dark:bg-gray-700 relative m-auto bg-white rounded-lg shadow\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                setOpenModal(null);\n                                handlePlayVideo();\n                                setModalState(false);\n                            },\n                            type: \"button\",\n                            className: \"absolute top-0 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    \"aria-hidden\": \"true\",\n                                    className: \"w-8 h-8\",\n                                    fill: \"currentColor\",\n                                    viewBox: \"0 0 20 20\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 132\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Close modal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-20 flex pt-10 text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                onClick: function() {\n                                    return handlePlayVideo();\n                                },\n                                ref: vidRef,\n                                className: \"md:max-h-[600px] h-2/3 m-auto\",\n                                autoPlay: true,\n                                controls: true,\n                                src: openModal\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/Modal.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Modal, \"s06VonDDGAK+tDJH5akHJ4kD8xs=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFxQzs7QUFFckMsSUFBTUUsS0FBSyxHQUFHLGdCQUF5RDtRQUF2REMsU0FBUyxTQUFUQSxTQUFTLEVBQUNDLFlBQVksU0FBWkEsWUFBWSxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsYUFBYSxTQUFiQSxhQUFhOztJQUMvRCxJQUFNQyxNQUFNLEdBQUdOLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLElBQU1PLGVBQWUsR0FBRyxXQUFNO1FBQzVCLElBQUdELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxJQUFJLEVBQUUsRUFBRTtZQUN4QkgsTUFBTSxDQUFDRSxPQUFPLENBQUNFLEtBQUssRUFBRSxDQUFDO1NBQ3hCLE1BQU07WUFDTEosTUFBTSxDQUFDRSxPQUFPLENBQUNDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7SUFDRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFpQyxNQUFrSCxDQUFqSlIsVUFBVSxHQUFHLE9BQU8sR0FBRSxRQUFRLEVBQUMsb0hBQWtILENBQUM7OzBCQUNuSyw4REFBQ08sS0FBRztnQkFBQ0UsT0FBTyxFQUFFLFdBQU07b0JBQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0ksZUFBZSxFQUFFLENBQUM7b0JBQUNGLGFBQWEsQ0FBQyxLQUFLLENBQUM7aUJBQUM7Z0JBQUVPLFNBQVMsRUFBQyx5RUFBeUU7Ozs7O3FCQUFPOzBCQUM3Syw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlDQUF5QzswQkFDdEQsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw2REFBNkQ7O3NDQUMxRSw4REFBQ0UsUUFBTTs0QkFBQ0QsT0FBTyxFQUFFLFdBQU07Z0NBQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FBQ0ksZUFBZSxFQUFFLENBQUM7Z0NBQUNGLGFBQWEsQ0FBQyxLQUFLLENBQUM7NkJBQUM7NEJBQUVVLElBQUksRUFBQyxRQUFROzRCQUFDSCxTQUFTLEVBQUMsa01BQWtNOzs4Q0FDOVMsOERBQUNJLEtBQUc7b0NBQUNDLGFBQVcsRUFBQyxNQUFNO29DQUFDTCxTQUFTLEVBQUMsU0FBUztvQ0FBQ00sSUFBSSxFQUFDLGNBQWM7b0NBQUNDLE9BQU8sRUFBQyxXQUFXO29DQUFDQyxLQUFLLEVBQUMsNEJBQTRCOzhDQUFDLDRFQUFDQyxNQUFJO3dDQUFDQyxRQUFRLEVBQUMsU0FBUzt3Q0FBQ0MsQ0FBQyxFQUFDLG9NQUFvTTt3Q0FBQ0MsUUFBUSxFQUFDLFNBQVM7Ozs7OzZDQUFROzs7Ozt5Q0FBTTs4Q0FDdlgsOERBQUNDLE1BQUk7b0NBQUNiLFNBQVMsRUFBQyxTQUFTOzhDQUFDLGFBQVc7Ozs7O3lDQUFPOzs7Ozs7aUNBQ3JDO3NDQUNULDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsNkJBQTZCO3NDQUMxQyw0RUFBQ2MsT0FBSztnQ0FBQ2IsT0FBTyxFQUFFOzJDQUFNTixlQUFlLEVBQUU7aUNBQUE7Z0NBQUVvQixHQUFHLEVBQUVyQixNQUFNO2dDQUFFTSxTQUFTLEVBQUMsK0JBQStCO2dDQUFDZ0IsUUFBUTtnQ0FBQ0MsUUFBUTtnQ0FBQ0MsR0FBRyxFQUFFNUIsU0FBUzs7Ozs7cUNBQVU7Ozs7O2lDQUN0STs7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBekJLRCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUEyQlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qc3g/ZTVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE1vZGFsID0gKHtvcGVuTW9kYWwsc2V0T3Blbk1vZGFsLCBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlfSkgPT4ge1xuICBjb25zdCB2aWRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhhbmRsZVBsYXlWaWRlbyA9ICgpID0+IHtcbiAgICBpZih2aWRSZWYuY3VycmVudC5wbGF5KCkpIHtcbiAgICAgIHZpZFJlZi5jdXJyZW50LnBhdXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZFJlZi5jdXJyZW50LnBsYXkoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bW9kYWxTdGF0ZSA/ICdibG9jayc6ICdoaWRkZW4nfSBtZDppbnNldC0wIG1kOmgtZnVsbCBmaXhlZCB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIHctc2NyZWVuIGgtc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0b2B9PlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7c2V0T3Blbk1vZGFsKG51bGwpOyBoYW5kbGVQbGF5VmlkZW8oKTsgc2V0TW9kYWxTdGF0ZShmYWxzZSl9fSBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctc2NyZWVuIGgtc2NyZWVuIGJnLVsjMDQwMjAyYmNdJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1maXQgcmVsYXRpdmUgZmxleCBoLXNjcmVlbiBwLTQgbS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyazpiZy1ncmF5LTcwMCByZWxhdGl2ZSBtLWF1dG8gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3dcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzZXRPcGVuTW9kYWwobnVsbCk7IGhhbmRsZVBsYXlWaWRlbygpOyBzZXRNb2RhbFN0YXRlKGZhbHNlKX19IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0xIHRleHQtZ3JheS00MDAgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JheS0yMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIHRleHQtbGcgcC0xLjUgbWwtYXV0byBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZGFyazpob3ZlcjpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiA+XG4gICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctOCBoLThcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2UgbW9kYWw8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTIwIGZsZXggcHQtMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx2aWRlbyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5VmlkZW8oKX0gcmVmPXt2aWRSZWZ9IGNsYXNzTmFtZT0nbWQ6bWF4LWgtWzYwMHB4XSBoLTIvMyBtLWF1dG8nIGF1dG9QbGF5IGNvbnRyb2xzIHNyYz17b3Blbk1vZGFsfT48L3ZpZGVvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTW9kYWwiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsInZpZFJlZiIsImhhbmRsZVBsYXlWaWRlbyIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYnV0dG9uIiwidHlwZSIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsInNwYW4iLCJ2aWRlbyIsInJlZiIsImF1dG9QbGF5IiwiY29udHJvbHMiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.jsx\n"));

/***/ })

});