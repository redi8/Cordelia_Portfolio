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

/***/ "./pages/tiktoks.jsx":
/*!***************************!*\
  !*** ./pages/tiktoks.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/windowWidth */ \"./lib/windowWidth.js\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar tiktoks = function(param) {\n    var tiktoks = param.tiktoks, tiktokHighlights = param.tiktokHighlights;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setTikToks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dataHighlights = ref1[0], setTikTokHighlights = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref2[0], setOpen = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTikToks(tiktoks);\n        setTikTokHighlights(tiktokHighlights);\n    }, []);\n    var windowWidth = (0,_lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto text-3xl\",\n                    children: \"Categories\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                    ],\n                    slidesPerView: windowWidth < 768 ? 1 : 3,\n                    navigation: true,\n                    loop: true,\n                    autoplay: {\n                        delay: 15000,\n                        disableOnInteraction: false\n                    },\n                    className: \"mySwiper w-screen max-w-[1000px] flex-wrap mx-auto\",\n                    pagination: {\n                        clickable: true\n                    },\n                    children: dataHighlights.map(function(video, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"flex flex-col w-full py-8 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    className: \"h-[500px] md:h-[400px] w-full m-auto\",\n                                    src: video.url.match(/(https?:\\/\\/[^ ]*)/),\n                                    frameborder: \"0\",\n                                    allow: \"autoplay; fullscreen; picture-in-picture\",\n                                    allowfullscreen: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]\",\n                                    children: video.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto my-10 text-3xl\",\n                    children: \"All Videos\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns-4 flex flex-wrap\",\n                    children: tiktoks.map(function(video, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    className: \"md:h-[400px] h-screen md:w-full w-screen m-auto\",\n                                    src: video.url.match(/(https?:\\/\\/[^ ]*)/),\n                                    frameborder: \"0\",\n                                    allow: \"autoplay; fullscreen; picture-in-picture\",\n                                    loading: \"lazy\",\n                                    allowfullscreen: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-primary\",\n                                    onClick: function() {\n                                        return setOpen(true);\n                                    },\n                                    children: \"VIEW DEMO\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(tiktoks, \"HhunvVMkCaqJoAT6ueedUF6MU+A=\", false, function() {\n    return [\n        _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tiktoks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsS0FBSyxzQkFBc0I7b0NBQUVDLFdBQVcsRUFBQyxHQUFHO29DQUFDQyxLQUFLLEVBQUMsMENBQTBDO29DQUFDSSxPQUFPLEVBQUMsTUFBTTtvQ0FBQ0gsZUFBZTs7Ozs7eUNBQVU7OENBQzFOLDhEQUFDQyxRQUFNO29DQUFDckIsU0FBUyxFQUFDLGFBQWE7b0NBQUN3QixPQUFPLEVBQUU7K0NBQUszQixPQUFPLENBQUMsSUFBSSxDQUFDO3FDQUFBOzhDQUFFLFdBQVM7Ozs7O3lDQUFTOzsyQkFGL0NnQixFQUFFOzs7O2lDQUc5QjtxQkFDUCxDQUFDOzs7Ozt5QkFFRTs7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ1A7Q0FDRjtHQXJES3ZCLE9BQU87O1FBV1NGLHNEQUFROzs7O0FBNEM5QiwrREFBZUUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aWt0b2tzLmpzeD84ZWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBcbiAgTmF2aWdhdGlvbiwgXG4gIFBhZ2luYXRpb24sIFxuICBFZmZlY3RDcmVhdGl2ZSwgXG4gIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9zY3JvbGxiYXInO1xuaW1wb3J0IHsgdXNlV2lkdGggfSBmcm9tICcuLi9saWIvd2luZG93V2lkdGgnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vbGliL2NsaWVudCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcblxuXG5jb25zdCB0aWt0b2tzID0gKCB7IHRpa3Rva3MsIHRpa3Rva0hpZ2hsaWdodHMgfSApID0+IHtcblxuICBjb25zdCBbZGF0YSwgc2V0VGlrVG9rc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhSGlnaGxpZ2h0cywgc2V0VGlrVG9rSGlnaGxpZ2h0c10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaWtUb2tzKHRpa3Rva3MpO1xuICAgIHNldFRpa1Rva0hpZ2hsaWdodHModGlrdG9rSGlnaGxpZ2h0cyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpZHRoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtYXgtdy1bMTIwMHB4XSBtLWF1dG8gbWluLWgtc2NyZWVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG0tYXV0byc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J20tYXV0byB0ZXh0LTN4bCc+Q2F0ZWdvcmllczwvaDE+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBtb2R1bGVzPXtbIFxuICAgICAgICAgICAgTmF2aWdhdGlvbiwgXG4gICAgICAgICAgICBQYWdpbmF0aW9uLCBcbiAgICAgICAgICAgIEVmZmVjdENyZWF0aXZlLFxuICAgICAgICAgICAgQXV0b3BsYXldfVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9e3dpbmRvd1dpZHRoIDwgNzY4ID8gMSA6IDN9XG4gICAgICAgICAgbmF2aWdhdGlvblxuICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICAgIGRlbGF5OiAxNTAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyIHctc2NyZWVuIG1heC13LVsxMDAwcHhdIGZsZXgtd3JhcCBteC1hdXRvXCJcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGFIaWdobGlnaHRzLm1hcCgodmlkZW8sIGlkKSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCBweS04IG0tYXV0bycga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPSdoLVs1MDBweF0gbWQ6aC1bNDAwcHhdIHctZnVsbCBtLWF1dG8nIHNyYz17dmlkZW8udXJsLm1hdGNoKC8oaHR0cHM/OlxcL1xcL1teIF0qKS8pfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTEvMiBtLWF1dG8gbXQtNCByb3VuZGVkLXhsIHB5LTIgYmctWyNmNmI1ZjZdJz57dmlkZW8uY2F0ZWdvcnl9PC9idXR0b24+XG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbS1hdXRvIG15LTEwIHRleHQtM3hsJz5BbGwgVmlkZW9zPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMtNCBmbGV4IGZsZXgtd3JhcCc+XG4gICAgICAgICAge3Rpa3Rva3MubWFwKCh2aWRlbywgaWQpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLWF1dG8gbXktNCcga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxpZnJhbWUgIGNsYXNzTmFtZT0nbWQ6aC1bNDAwcHhdIGgtc2NyZWVuIG1kOnctZnVsbCB3LXNjcmVlbiBtLWF1dG8nIHNyYz17dmlkZW8udXJsLm1hdGNoKC8oaHR0cHM/OlxcL1xcL1teIF0qKS8pfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBsb2FkaW5nPSdsYXp5JyBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKT0+IHNldE9wZW4odHJ1ZSl9PlZJRVcgREVNTzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgey8qIDxNb2RhbFZpZGVvIGNoYW5uZWw9J3ZpbWVvJyBhdXRvcGxheSBpc09wZW49e2lzT3Blbn0gdmlkZW9JZD17dmlkZW8udXJsLm1hdGNoKC8oaHR0cHM/OlxcL1xcL1teIF0qKS8pfSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGlrdG9rc1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0aWt0b2tIaWdobGlnaHRzID0gYXdhaXQgY2xpZW50LmZldGNoKCcqW190eXBlID09IFwidGlrdG9rLWhpZ2hsaWdodHNcIl0nKTtcbiAgY29uc3QgdGlrdG9rcyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInRpa3Rva1ZpZGVvc1wiXScpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOnsgdGlrdG9rcywgdGlrdG9rSGlnaGxpZ2h0cyB9XG4gIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiRWZmZWN0Q3JlYXRpdmUiLCJBdXRvcGxheSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlV2lkdGgiLCJNb2RhbFZpZGVvIiwidGlrdG9rcyIsInRpa3Rva0hpZ2hsaWdodHMiLCJkYXRhIiwic2V0VGlrVG9rcyIsImRhdGFIaWdobGlnaHRzIiwic2V0VGlrVG9rSGlnaGxpZ2h0cyIsImlzT3BlbiIsInNldE9wZW4iLCJ3aW5kb3dXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtYXAiLCJ2aWRlbyIsImlkIiwiaWZyYW1lIiwic3JjIiwidXJsIiwibWF0Y2giLCJmcmFtZWJvcmRlciIsImFsbG93IiwiYWxsb3dmdWxsc2NyZWVuIiwiYnV0dG9uIiwiY2F0ZWdvcnkiLCJsb2FkaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tiktoks.jsx\n"));

/***/ })

});