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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/windowWidth */ \"./lib/windowWidth.js\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar tiktoks = function(param) {\n    var tiktoks = param.tiktoks, tiktokHighlights = param.tiktokHighlights;\n    _s();\n    // console.log(\n    //   tiktoks.filter(tiktok => {  \n    //     const includesTag = tiktok.myTags.find(item => item.value === 'funky');\n    //     if (includesTag) {\n    //       return tiktok\n    //     }\n    //   })\n    // );\n    console.log(tiktoks.filter(function(tiktok) {\n        var ref;\n        return (ref = tiktok.myTags) === null || ref === void 0 ? void 0 : ref.map(function(tag) {\n            var includes = tag.value.includes(\"test\");\n            if (includes) {\n                return tiktok;\n            }\n        });\n    }));\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setTikToks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dataHighlights = ref1[0], setTikTokHighlights = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref2[0], setOpen = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTikToks(tiktoks);\n        setTikTokHighlights(tiktokHighlights);\n    }, []);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref3[0], setOpenModal = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalState = ref4[0], setModalState = ref4[1];\n    var windowWidth = (0,_lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto text-3xl\",\n                    children: \"Categories\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                    ],\n                    slidesPerView: windowWidth < 768 ? 1 : 3,\n                    navigation: true,\n                    loop: true,\n                    autoplay: {\n                        delay: 15000,\n                        disableOnInteraction: false\n                    },\n                    className: \"mySwiper w-screen max-w-[1000px] flex-wrap mx-auto\",\n                    pagination: {\n                        clickable: true\n                    },\n                    children: dataHighlights.map(function(video, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"flex flex-col px-4 py-8 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                            className: \"md:w-full w-3/4 m-auto\",\n                                            controls: true,\n                                            src: video.videoUpload\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                setModalState(true);\n                                                setOpenModal(video.videoUpload);\n                                            },\n                                            className: \" absolute top-0 bottom-0 left-0 right-0 block w-full h-full bg-transparent\",\n                                            type: \"button\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 text-base font-bold m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]\",\n                                    children: video.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto my-10 text-3xl\",\n                    children: \"All Videos\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns-2 md:columns-4 flex flex-wrap\",\n                    children: [\n                        tiktoks.map(function(video, id) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-1/4 relative flex flex-col justify-center w-1/2 px-4 m-auto my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        className: \"border-4 border-[#918fe6] h-fit p-2 bg-[#fee1ff] m-auto\",\n                                        controls: true,\n                                        src: video.videoUpload\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            setModalState(true);\n                                            setOpenModal(video.videoUpload);\n                                        },\n                                        className: \"block absolute h-full w-full bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                                        type: \"button\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            modalState: modalState,\n                            setModalState: setModalState,\n                            openModal: openModal,\n                            setOpenModal: setOpenModal\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(tiktoks, \"yP8DQMkr/zSyXbx/8YGW5mVSPwU=\", false, function() {\n    return [\n        _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tiktoks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsUUFBTTt3Q0FBQ0MsT0FBTyxFQUFFLFdBQU07NENBQUNwQixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7NENBQUNGLFlBQVksQ0FBQ2dCLEtBQUssQ0FBQ0ksV0FBVyxDQUFDLENBQUM7eUNBQUM7d0NBQUVmLFNBQVMsRUFBQyxvSUFBb0k7d0NBQUNrQixJQUFJLEVBQUMsUUFBUTs7Ozs7NkNBQ25POzsrQkFIaUZOLEVBQUU7Ozs7cUNBSXhGO3lCQUNQLENBQUM7c0NBQ0YsOERBQUNwQywwREFBSzs0QkFBQ29CLFVBQVUsRUFBRUEsVUFBVTs0QkFBRUMsYUFBYSxFQUFFQSxhQUFhOzRCQUFFSCxTQUFTLEVBQUVBLFNBQVM7NEJBQUVDLFlBQVksRUFBRUEsWUFBWTs7Ozs7aUNBQUk7Ozs7Ozt5QkFDN0c7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0FsRktsQixPQUFPOztRQWtDU0gsc0RBQVE7Ozs7QUFrRDlCLCtEQUFlRyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rpa3Rva3MuanN4PzhlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFxuICBOYXZpZ2F0aW9uLCBcbiAgUGFnaW5hdGlvbiwgXG4gIEVmZmVjdENyZWF0aXZlLCBcbiAgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3Njcm9sbGJhcic7XG5pbXBvcnQgeyB1c2VXaWR0aCB9IGZyb20gJy4uL2xpYi93aW5kb3dXaWR0aCc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9saWIvY2xpZW50J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cblxuY29uc3QgdGlrdG9rcyA9ICggeyB0aWt0b2tzLCB0aWt0b2tIaWdobGlnaHRzIH0gKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIHRpa3Rva3MuZmlsdGVyKHRpa3RvayA9PiB7ICBcbiAgLy8gICAgIGNvbnN0IGluY2x1ZGVzVGFnID0gdGlrdG9rLm15VGFncy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gJ2Z1bmt5Jyk7XG4gIC8vICAgICBpZiAoaW5jbHVkZXNUYWcpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRpa3Rva1xuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vICk7XG5cblxuICBjb25zb2xlLmxvZyhcbiAgICB0aWt0b2tzLmZpbHRlciggdGlrdG9rID0+IFxuICAgICAgdGlrdG9rLm15VGFncz8ubWFwKHRhZyA9PiBcbiAgICAgICAge2NvbnN0IGluY2x1ZGVzID0gdGFnLnZhbHVlLmluY2x1ZGVzKCd0ZXN0JylcbiAgICAgICAgaWYgKGluY2x1ZGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRpa3Rva1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIFxuICAgICAgICApKSk7XG5cbiAgY29uc3QgW2RhdGEsIHNldFRpa1Rva3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YUhpZ2hsaWdodHMsIHNldFRpa1Rva0hpZ2hsaWdodHNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGlrVG9rcyh0aWt0b2tzKTtcbiAgICBzZXRUaWtUb2tIaWdobGlnaHRzKHRpa3Rva0hpZ2hsaWdodHMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2luZG93V2lkdGggPSB1c2VXaWR0aCgpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtYXgtdy1bMTIwMHB4XSBtLWF1dG8gbWluLWgtc2NyZWVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG0tYXV0byc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J20tYXV0byB0ZXh0LTN4bCc+Q2F0ZWdvcmllczwvaDE+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBtb2R1bGVzPXtbIFxuICAgICAgICAgICAgTmF2aWdhdGlvbiwgXG4gICAgICAgICAgICBQYWdpbmF0aW9uLCBcbiAgICAgICAgICAgIEVmZmVjdENyZWF0aXZlLFxuICAgICAgICAgICAgQXV0b3BsYXldfVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9e3dpbmRvd1dpZHRoIDwgNzY4ID8gMSA6IDN9XG4gICAgICAgICAgbmF2aWdhdGlvblxuICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICAgIGRlbGF5OiAxNTAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyIHctc2NyZWVuIG1heC13LVsxMDAwcHhdIGZsZXgtd3JhcCBteC1hdXRvXCJcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGFIaWdobGlnaHRzLm1hcCgodmlkZW8sIGlkKSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHB4LTQgcHktOCBtLWF1dG8nIGtleT17aWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9J21kOnctZnVsbCB3LTMvNCBtLWF1dG8nIGNvbnRyb2xzIHNyYz17dmlkZW8udmlkZW9VcGxvYWR9PjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kYWxTdGF0ZSh0cnVlKTsgc2V0T3Blbk1vZGFsKHZpZGVvLnZpZGVvVXBsb2FkKTt9fSBjbGFzc05hbWU9XCIgYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgYmxvY2sgdy1mdWxsIGgtZnVsbCBiZy10cmFuc3BhcmVudFwiIHR5cGU9XCJidXR0b25cIiA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGlmcmFtZSBjbGFzc05hbWU9J2gtWzUwMHB4XSBtZDpoLVs0MDBweF0gdy1mdWxsIG0tYXV0bycgc3JjPXt2aWRlby51cmwubWF0Y2goLyhodHRwcz86XFwvXFwvW14gXSopLyl9IGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gKi99XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTEvMiB0ZXh0LWJhc2UgZm9udC1ib2xkIG0tYXV0byBtdC00IHJvdW5kZWQteGwgcHktMiBiZy1bI2Y2YjVmNl0nPnt2aWRlby5jYXRlZ29yeX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtLWF1dG8gbXktMTAgdGV4dC0zeGwnPkFsbCBWaWRlb3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucy0yIG1kOmNvbHVtbnMtNCBmbGV4IGZsZXgtd3JhcCc+XG4gICAgICAgICAge3Rpa3Rva3MubWFwKCh2aWRlbywgaWQpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDp3LTEvNCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHctMS8yIHB4LTQgbS1hdXRvIG15LTQnIGtleT17aWR9PlxuICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPSdib3JkZXItNCBib3JkZXItWyM5MThmZTZdIGgtZml0IHAtMiBiZy1bI2ZlZTFmZl0gbS1hdXRvJyBjb250cm9scyBzcmM9e3ZpZGVvLnZpZGVvVXBsb2FkfT48L3ZpZGVvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzZXRNb2RhbFN0YXRlKHRydWUpOyBzZXRPcGVuTW9kYWwodmlkZW8udmlkZW9VcGxvYWQpO319IGNsYXNzTmFtZT1cImJsb2NrIGFic29sdXRlIGgtZnVsbCB3LWZ1bGwgYmctdHJhbnNwYXJlbnQgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXJcIiB0eXBlPVwiYnV0dG9uXCIgPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxNb2RhbCBtb2RhbFN0YXRlPXttb2RhbFN0YXRlfSBzZXRNb2RhbFN0YXRlPXtzZXRNb2RhbFN0YXRlfSBvcGVuTW9kYWw9e29wZW5Nb2RhbH0gc2V0T3Blbk1vZGFsPXtzZXRPcGVuTW9kYWx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGlrdG9rc1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0aWt0b2tIaWdobGlnaHRzID0gYXdhaXQgY2xpZW50LmZldGNoKCcqW190eXBlID09IFwidGlrdG9rLWhpZ2hsaWdodHNcIl17Y2F0ZWdvcnksIFwidmlkZW9VcGxvYWRcIjogdmlkZW8uYXNzZXQtPnVybH0nKTtcbiAgLy8gY29uc3QgdGlrdG9rcyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInRpa3Rva1ZpZGVvc1wiXScpO1xuICBjb25zdCB0aWt0b2tzID0gYXdhaXQgY2xpZW50LmZldGNoKGBcbiAgICAqW190eXBlID09ICd0aWt0b2tWaWRlb3MnXSB7XG4gICAgICAndmlkZW9VcGxvYWQnOiB2aWRlby5hc3NldC0+dXJsLFxuICAgICAgbXlUYWdzXG4gICAgfVxuICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7IHRpa3Rva3MsIHRpa3Rva0hpZ2hsaWdodHMgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIkVmZmVjdENyZWF0aXZlIiwiQXV0b3BsYXkiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsInVzZVdpZHRoIiwiTW9kYWxWaWRlbyIsIk1vZGFsIiwidGlrdG9rcyIsInRpa3Rva0hpZ2hsaWdodHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwidGlrdG9rIiwibXlUYWdzIiwibWFwIiwidGFnIiwiaW5jbHVkZXMiLCJ2YWx1ZSIsImRhdGEiLCJzZXRUaWtUb2tzIiwiZGF0YUhpZ2hsaWdodHMiLCJzZXRUaWtUb2tIaWdobGlnaHRzIiwiaXNPcGVuIiwic2V0T3BlbiIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwid2luZG93V2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1vZHVsZXMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwidmlkZW8iLCJpZCIsImNvbnRyb2xzIiwic3JjIiwidmlkZW9VcGxvYWQiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tiktoks.jsx\n"));

/***/ })

});