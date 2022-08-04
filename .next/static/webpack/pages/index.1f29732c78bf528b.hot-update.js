"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ContactForm.jsx":
/*!************************************!*\
  !*** ./components/ContactForm.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContactForm = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), emailSent = ref3[0], setEmailSent = ref3[1];\n    // EmailJS setting id and template id variables\n    var submit = function(e) {\n        e.preventDefault();\n        if (name && email && message) {\n            var serviceId = \"\";\n            var templateId = \"\";\n            var userId = \"\";\n            var templateParams = {\n                name: name,\n                email: email,\n                message: message\n            };\n            // If variable isn't set or input is missing, error will be console logged\n            _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(serviceId, templateId, templateParams, userId).then(function(response) {\n                return console.log(response);\n            }).then(function(error) {\n                return console.log(error);\n            });\n            // After email has been sent, all variables are now set to blank again.\n            setName(\"\");\n            setEmail(\"\");\n            setMessage(\"\");\n            setEmailSent(true);\n        } else {\n            // if no data is input, error will alert user\n            alert(\"Please fill in all fields.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-fit overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"md:text-3xl m-auto mb-2 text-2xl text-black\",\n                    children: \"Contact Me :)\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-5/6 pb-4 md:max-w-[700px] mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-xl sm:rounded-md p-6 bg-[#7d7cca] border-4 border-[#b7b6d4]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                ref: form,\n                                onSubmit: submit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-black\",\n                                                children: \"Your name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"name\",\n                                                type: \"text\",\n                                                className: \"focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-[#ababab] bg-transparent border-2 border-[#b7b6d4] rounded-md shadow-sm\",\n                                                placeholder: \"Joe Bloggs\",\n                                                value: name,\n                                                onChange: function(e) {\n                                                    return setName(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-black\",\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"email\",\n                                                type: \"email\",\n                                                className: \" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-[#ababab] bg-transparent border-2 border-[#b7b6d4] rounded-md shadow-sm\",\n                                                placeholder: \"joe.bloggs@example.com\",\n                                                required: true,\n                                                value: email,\n                                                onChange: function(e) {\n                                                    return setEmail(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block mb-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-black\",\n                                                children: \"Message\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                name: \"message\",\n                                                className: \"md:h-[200px] p-2 border-2 block w-full mt-1 border-[#b7b6d4] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-[#ababab] text-gray-300 \",\n                                                rows: \"3\",\n                                                placeholder: \"Tell us what you're thinking about...\",\n                                                value: message,\n                                                onChange: function(e) {\n                                                    return setMessage(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex mb-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            value: \"Send\",\n                                            className: \" focus:shadow-outline hover:bg-[#6665b2] h-10 px-5 m-auto text-black transition-colors duration-150 bg-[#918fe6] rounded-lg\",\n                                            children: \"Send\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: emailSent ? \"visible text-white\" : \"hidden\",\n                                children: \"Thank you for your message, we will be in touch in no time!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/components/ContactForm.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactForm, \"g8drEvyxdmSMw7YiHXwHMnahBVU=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNWLEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxXQUFXO2tEQUN4Qiw0RUFBQ2UsUUFBTTs0Q0FDTFIsSUFBSSxFQUFDLFFBQVE7NENBQ2JFLEtBQUssRUFBQyxNQUFNOzRDQUNaVCxTQUFTLEVBQUMsNkhBQTZIO3NEQUFDLE1BRTFJOzs7OztpREFBUzs7Ozs7NkNBQ0w7Ozs7OztxQ0FDRDswQ0FDUCw4REFBQ0ssTUFBSTtnQ0FBQ0wsU0FBUyxFQUFFakIsU0FBUyxHQUFHLG9CQUFvQixHQUFHLFFBQVE7MENBQUUsNkRBQTJEOzs7OztxQ0FBTzs7Ozs7OzZCQUM1SDs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0F6RktSLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQTJGakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qc3g/ZTZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBlbWFpbGpzIGZyb20gJ0BlbWFpbGpzL2Jyb3dzZXInXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKClcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWxTZW50LCBzZXRFbWFpbFNlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBFbWFpbEpTIHNldHRpbmcgaWQgYW5kIHRlbXBsYXRlIGlkIHZhcmlhYmxlc1xuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZSAmJiBlbWFpbCAmJiBtZXNzYWdlKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlSWQgPSAnJztcbiAgICAgIGNvbnN0IHRlbXBsYXRlSWQgPSAnJztcbiAgICAgIGNvbnN0IHVzZXJJZCA9ICcnO1xuICAgICAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBtZXNzYWdlXG4gICAgICB9O1xuICAgICAgLy8gSWYgdmFyaWFibGUgaXNuJ3Qgc2V0IG9yIGlucHV0IGlzIG1pc3NpbmcsIGVycm9yIHdpbGwgYmUgY29uc29sZSBsb2dnZWRcbiAgICAgIGVtYWlsanMuc2VuZChzZXJ2aWNlSWQsIHRlbXBsYXRlSWQsIHRlbXBsYXRlUGFyYW1zLCB1c2VySWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAgICAgLnRoZW4oZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgIC8vIEFmdGVyIGVtYWlsIGhhcyBiZWVuIHNlbnQsIGFsbCB2YXJpYWJsZXMgYXJlIG5vdyBzZXQgdG8gYmxhbmsgYWdhaW4uXG4gICAgICBzZXROYW1lKCcnKTtcbiAgICAgIHNldEVtYWlsKCcnKTtcbiAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgc2V0RW1haWxTZW50KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBkYXRhIGlzIGlucHV0LCBlcnJvciB3aWxsIGFsZXJ0IHVzZXJcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLicpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1maXQgb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG10LTEwJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWQ6dGV4dC0zeGwgbS1hdXRvIG1iLTIgdGV4dC0yeGwgdGV4dC1ibGFjayc+Q29udGFjdCBNZSA6KTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcGItNCBtZDptYXgtdy1bNzAwcHhdIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgc206cm91bmRlZC1tZCBwLTYgYmctWyM3ZDdjY2FdIGJvcmRlci00IGJvcmRlci1bI2I3YjZkNF1cIj5cbiAgICAgICAgICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3N1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi02XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPllvdXIgbmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOmJvcmRlci1pbmRpZ28tMzAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCBibG9jayB3LWZ1bGwgcC0yIG10LTEgdGV4dC1ncmF5LTMwMCBwbGFjZWhvbGRlci1bI2FiYWJhYl0gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTIgYm9yZGVyLVsjYjdiNmQ0XSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvZSBCbG9nZ3NcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5FbWFpbCBhZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgZm9jdXM6Ym9yZGVyLWluZGlnby0zMDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGJsb2NrIHctZnVsbCBwLTIgbXQtMSB0ZXh0LWdyYXktMzAwIHBsYWNlaG9sZGVyLVsjYWJhYmFiXSBiZy10cmFuc3BhcmVudCBib3JkZXItMiBib3JkZXItWyNiN2I2ZDRdIHJvdW5kZWQtbWQgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9lLmJsb2dnc0BleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi02XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPk1lc3NhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoLVsyMDBweF0gcC0yIGJvcmRlci0yIGJsb2NrIHctZnVsbCBtdC0xIGJvcmRlci1bI2I3YjZkNF0gcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWluZGlnby0zMDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGJnLXRyYW5zcGFyZW50IHBsYWNlaG9sZGVyLVsjYWJhYmFiXSB0ZXh0LWdyYXktMzAwIFwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgd2hhdCB5b3UncmUgdGhpbmtpbmcgYWJvdXQuLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSdTZW5kJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGhvdmVyOmJnLVsjNjY2NWIyXSBoLTEwIHB4LTUgbS1hdXRvIHRleHQtYmxhY2sgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLVsjOTE4ZmU2XSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2VtYWlsU2VudCA/ICd2aXNpYmxlIHRleHQtd2hpdGUnIDogJ2hpZGRlbid9PlRoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLCB3ZSB3aWxsIGJlIGluIHRvdWNoIGluIG5vIHRpbWUhPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJlbWFpbGpzIiwidXNlUmVmIiwiQ29udGFjdEZvcm0iLCJmb3JtIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJlbWFpbFNlbnQiLCJzZXRFbWFpbFNlbnQiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXJ2aWNlSWQiLCJ0ZW1wbGF0ZUlkIiwidXNlcklkIiwidGVtcGxhdGVQYXJhbXMiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJlZiIsIm9uU3VibWl0IiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm.jsx\n"));

/***/ })

});