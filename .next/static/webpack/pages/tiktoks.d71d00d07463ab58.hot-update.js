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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/windowWidth */ \"./lib/windowWidth.js\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar tiktoks = function(param) {\n    var tiktoks = param.tiktoks, tiktokHighlights = param.tiktokHighlights;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setTikToks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dataHighlights = ref1[0], setTikTokHighlights = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref2[0], setOpen = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTikToks(tiktoks);\n        setTikTokHighlights(tiktokHighlights);\n    }, []);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref3[0], setOpenModal = ref3[1];\n    var windowWidth = (0,_lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto text-3xl\",\n                    children: \"Categories\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                    ],\n                    slidesPerView: windowWidth < 768 ? 1 : 3,\n                    navigation: true,\n                    loop: true,\n                    autoplay: {\n                        delay: 15000,\n                        disableOnInteraction: false\n                    },\n                    className: \"mySwiper w-screen max-w-[1000px] flex-wrap mx-auto\",\n                    pagination: {\n                        clickable: true\n                    },\n                    children: dataHighlights.map(function(video, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"flex flex-col w-full py-8 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    className: \"h-[500px] md:h-[400px] w-full m-auto\",\n                                    src: video.url.match(/(https?:\\/\\/[^ ]*)/),\n                                    frameborder: \"0\",\n                                    allow: \"autoplay; fullscreen; picture-in-picture\",\n                                    allowfullscreen: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]\",\n                                    children: video.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto my-10 text-3xl\",\n                    children: \"All Videos\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns-4 flex flex-wrap\",\n                    children: [\n                        tiktoks.map(function(video, id) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-auto my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        className: \"md:h-[400px] h-screen md:w-full w-screen m-auto\",\n                                        src: video.url.match(/(https?:\\/\\/[^ ]*)/),\n                                        frameborder: \"0\",\n                                        allow: \"autoplay; fullscreen; picture-in-picture\",\n                                        loading: \"lazy\",\n                                        allowfullscreen: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-primary\",\n                                        onClick: function() {\n                                            setOpen(true);\n                                            setOpenModal(video.url.match(/(https?:\\/\\/[^ ]*)/));\n                                        },\n                                        children: \"VIEW DEMO\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_modal_video__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            channel: \"vimeo\",\n                            autoplay: true,\n                            isOpen: isOpen,\n                            videoId: \"682686153\",\n                            onClose: function() {\n                                setOpen(false);\n                                setOpenModal(null);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(tiktoks, \"iaqsx/8lsy0vxXxXNPVhXdhrnS0=\", false, function() {\n    return [\n        _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tiktoks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRUMsRUFBRTtpREFDckIsOERBQUNkLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxhQUFhOztrREFDMUIsOERBQUNjLFFBQU07d0NBQUVkLFNBQVMsRUFBQyxpREFBaUQ7d0NBQUNlLEdBQUcsRUFBRUgsS0FBSyxDQUFDSSxHQUFHLENBQUNDLEtBQUssc0JBQXNCO3dDQUFFQyxXQUFXLEVBQUMsR0FBRzt3Q0FBQ0MsS0FBSyxFQUFDLDBDQUEwQzt3Q0FBQ0ksT0FBTyxFQUFDLE1BQU07d0NBQUNILGVBQWU7Ozs7OzZDQUFVO2tEQUMxTiw4REFBQ0MsUUFBTTt3Q0FBQ3JCLFNBQVMsRUFBQyxhQUFhO3dDQUFDd0IsT0FBTyxFQUFFLFdBQUs7NENBQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NENBQUNFLFlBQVksQ0FBQ2UsS0FBSyxDQUFDSSxHQUFHLENBQUNDLEtBQUssc0JBQXNCLENBQUM7eUNBQUM7a0RBQUUsV0FBUzs7Ozs7NkNBQVM7OytCQUZ0R0osRUFBRTs7OztxQ0FHOUI7eUJBQ1AsQ0FBQztzQ0FDRiw4REFBQzFCLHlEQUFVOzRCQUFDc0MsT0FBTyxFQUFDLE9BQU87NEJBQUNuQixRQUFROzRCQUFDWixNQUFNLEVBQUVBLE1BQU07NEJBQUVnQyxPQUFPLEVBQUMsV0FBVzs0QkFBQ0MsT0FBTyxFQUFFLFdBQUs7Z0NBQUVoQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQUNFLFlBQVksQ0FBQyxJQUFJLENBQUM7NkJBQUM7Ozs7O2lDQUFJOzs7Ozs7eUJBQzVIOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBdkRLVCxPQUFPOztRQWFTRixzREFBUTs7OztBQTRDOUIsK0RBQWVFLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGlrdG9rcy5qc3g/OGVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgXG4gIE5hdmlnYXRpb24sIFxuICBQYWdpbmF0aW9uLCBcbiAgRWZmZWN0Q3JlYXRpdmUsIFxuICBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3Mvc2Nyb2xsYmFyJztcbmltcG9ydCB7IHVzZVdpZHRoIH0gZnJvbSAnLi4vbGliL3dpbmRvd1dpZHRoJztcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2xpYi9jbGllbnQnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9jc3MvbW9kYWwtdmlkZW8uY3NzJztcblxuXG5jb25zdCB0aWt0b2tzID0gKCB7IHRpa3Rva3MsIHRpa3Rva0hpZ2hsaWdodHMgfSApID0+IHtcblxuICBjb25zdCBbZGF0YSwgc2V0VGlrVG9rc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhSGlnaGxpZ2h0cywgc2V0VGlrVG9rSGlnaGxpZ2h0c10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaWtUb2tzKHRpa3Rva3MpO1xuICAgIHNldFRpa1Rva0hpZ2hsaWdodHModGlrdG9rSGlnaGxpZ2h0cyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgd2luZG93V2lkdGggPSB1c2VXaWR0aCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWF4LXctWzEyMDBweF0gbS1hdXRvIG1pbi1oLXNjcmVlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtLWF1dG8nPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtLWF1dG8gdGV4dC0zeGwnPkNhdGVnb3JpZXM8L2gxPlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgbW9kdWxlcz17WyBcbiAgICAgICAgICAgIE5hdmlnYXRpb24sIFxuICAgICAgICAgICAgUGFnaW5hdGlvbiwgXG4gICAgICAgICAgICBFZmZlY3RDcmVhdGl2ZSxcbiAgICAgICAgICAgIEF1dG9wbGF5XX1cbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXt3aW5kb3dXaWR0aCA8IDc2OCA/IDEgOiAzfVxuICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgICBkZWxheTogMTUwMDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJteVN3aXBlciB3LXNjcmVlbiBtYXgtdy1bMTAwMHB4XSBmbGV4LXdyYXAgbXgtYXV0b1wiXG4gICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhSGlnaGxpZ2h0cy5tYXAoKHZpZGVvLCBpZCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LWZ1bGwgcHktOCBtLWF1dG8nIGtleT17aWR9PlxuICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT0naC1bNTAwcHhdIG1kOmgtWzQwMHB4XSB3LWZ1bGwgbS1hdXRvJyBzcmM9e3ZpZGVvLnVybC5tYXRjaCgvKGh0dHBzPzpcXC9cXC9bXiBdKikvKX0gZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0xLzIgbS1hdXRvIG10LTQgcm91bmRlZC14bCBweS0yIGJnLVsjZjZiNWY2XSc+e3ZpZGVvLmNhdGVnb3J5fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J20tYXV0byBteS0xMCB0ZXh0LTN4bCc+QWxsIFZpZGVvczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zLTQgZmxleCBmbGV4LXdyYXAnPlxuICAgICAgICAgIHt0aWt0b2tzLm1hcCgodmlkZW8sIGlkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS1hdXRvIG15LTQnIGtleT17aWR9PlxuICAgICAgICAgICAgICA8aWZyYW1lICBjbGFzc05hbWU9J21kOmgtWzQwMHB4XSBoLXNjcmVlbiBtZDp3LWZ1bGwgdy1zY3JlZW4gbS1hdXRvJyBzcmM9e3ZpZGVvLnVybC5tYXRjaCgvKGh0dHBzPzpcXC9cXC9bXiBdKikvKX0gZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlbjsgcGljdHVyZS1pbi1waWN0dXJlXCIgbG9hZGluZz0nbGF6eScgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCk9PiB7c2V0T3Blbih0cnVlKTsgc2V0T3Blbk1vZGFsKHZpZGVvLnVybC5tYXRjaCgvKGh0dHBzPzpcXC9cXC9bXiBdKikvKSl9fT5WSUVXIERFTU88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxNb2RhbFZpZGVvIGNoYW5uZWw9J3ZpbWVvJyBhdXRvcGxheSBpc09wZW49e2lzT3Blbn0gdmlkZW9JZD0nNjgyNjg2MTUzJyBvbkNsb3NlPXsoKSA9Pnsgc2V0T3BlbihmYWxzZSk7IHNldE9wZW5Nb2RhbChudWxsKX19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGlrdG9rc1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0aWt0b2tIaWdobGlnaHRzID0gYXdhaXQgY2xpZW50LmZldGNoKCcqW190eXBlID09IFwidGlrdG9rLWhpZ2hsaWdodHNcIl0nKTtcbiAgY29uc3QgdGlrdG9rcyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInRpa3Rva1ZpZGVvc1wiXScpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOnsgdGlrdG9rcywgdGlrdG9rSGlnaGxpZ2h0cyB9XG4gIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiRWZmZWN0Q3JlYXRpdmUiLCJBdXRvcGxheSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlV2lkdGgiLCJNb2RhbFZpZGVvIiwidGlrdG9rcyIsInRpa3Rva0hpZ2hsaWdodHMiLCJkYXRhIiwic2V0VGlrVG9rcyIsImRhdGFIaWdobGlnaHRzIiwic2V0VGlrVG9rSGlnaGxpZ2h0cyIsImlzT3BlbiIsInNldE9wZW4iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ3aW5kb3dXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtYXAiLCJ2aWRlbyIsImlkIiwiaWZyYW1lIiwic3JjIiwidXJsIiwibWF0Y2giLCJmcmFtZWJvcmRlciIsImFsbG93IiwiYWxsb3dmdWxsc2NyZWVuIiwiYnV0dG9uIiwiY2F0ZWdvcnkiLCJsb2FkaW5nIiwib25DbGljayIsImNoYW5uZWwiLCJ2aWRlb0lkIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tiktoks.jsx\n"));

/***/ })

});