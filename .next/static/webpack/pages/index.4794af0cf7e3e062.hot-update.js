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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_osila__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/osila */ \"./src/components/osila.tsx\");\n/* harmony import */ var _components_formLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/formLabel */ \"./src/components/formLabel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_URL = \"http://localhost:8080/api/score\";\nconst EVENTS = [\n    {\n        value: \"TRACK_100\",\n        label: \"100 meters (s)\"\n    },\n    {\n        value: \"LONG_JUMP\",\n        label: \"Long jump (cm)\"\n    },\n    {\n        value: \"SHOT_PUT\",\n        label: \"Shot put (m)\"\n    },\n    {\n        value: \"HIGH_JUMP\",\n        label: \"High jump (cm)\"\n    },\n    {\n        value: \"TRACK_400\",\n        label: \"400 meters (s)\"\n    },\n    {\n        value: \"HURDLES_110\",\n        label: \"110 hurdles (s)\"\n    },\n    {\n        value: \"DISCUS_THROW\",\n        label: \"Discus throw (m)\"\n    },\n    {\n        value: \"POLE_VAULT\",\n        label: \"Pole vault (cm)\"\n    },\n    {\n        value: \"JAVELIN_THROW\",\n        label: \"Javelin throw (m)\"\n    },\n    {\n        value: \"TRACK_1500\",\n        label: \"1500 meters (s)\"\n    }\n];\nfunction Home() {\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        event: \"TRACK_100\",\n        result: \"\"\n    });\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        await fetch(\"\".concat(API_URL, \"?event=\").concat(values.event, \"&result=\").concat(values.result), {\n            method: \"GET\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            return response.json();\n        }).then((data)=>{\n            setScore(data.score);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-8 sm:p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row space-y-8 max-w-sm mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Ask Osila\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    htmlFor: \"event\",\n                                    children: \"Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"event\",\n                                    onChange: (e)=>setValues((prev)=>({\n                                                ...prev,\n                                                event: e.target.value\n                                            })),\n                                    children: EVENTS.map((event)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: event.value,\n                                            children: event.label\n                                        }, event.value, false, {\n                                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    htmlFor: \"event\",\n                                    children: \"Result\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"result\",\n                                    type: \"number\",\n                                    step: 0.01,\n                                    required: true,\n                                    value: values.result,\n                                    onChange: (e)=>setValues((prev)=>({\n                                                ...prev,\n                                                result: e.target.value\n                                            }))\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"primary\",\n                                children: \"Ask\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_osila__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    text: score === null || score === void 0 ? void 0 : score.toString()\n                }, void 0, false, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"X/hw9QWaTuQgeuKZKduQUwSVO6c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3NpbGEgZnJvbSAnQC9jb21wb25lbnRzL29zaWxhJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQC9jb21wb25lbnRzL2Zvcm1MYWJlbCc7XG5cblxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zY29yZVwiO1xuXG5jb25zdCBFVkVOVFM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgfVtdID0gW1xuICB7IHZhbHVlOiBcIlRSQUNLXzEwMFwiLCBsYWJlbDogXCIxMDAgbWV0ZXJzIChzKVwiIH0sXG4gIHsgdmFsdWU6IFwiTE9OR19KVU1QXCIsIGxhYmVsOiBcIkxvbmcganVtcCAoY20pXCIgfSxcbiAgeyB2YWx1ZTogXCJTSE9UX1BVVFwiLCBsYWJlbDogXCJTaG90IHB1dCAobSlcIiB9LFxuICB7IHZhbHVlOiBcIkhJR0hfSlVNUFwiLCBsYWJlbDogXCJIaWdoIGp1bXAgKGNtKVwiIH0sXG4gIHsgdmFsdWU6IFwiVFJBQ0tfNDAwXCIsIGxhYmVsOiBcIjQwMCBtZXRlcnMgKHMpXCIgfSxcbiAgeyB2YWx1ZTogXCJIVVJETEVTXzExMFwiLCBsYWJlbDogXCIxMTAgaHVyZGxlcyAocylcIiB9LFxuICB7IHZhbHVlOiBcIkRJU0NVU19USFJPV1wiLCBsYWJlbDogXCJEaXNjdXMgdGhyb3cgKG0pXCIgfSxcbiAgeyB2YWx1ZTogXCJQT0xFX1ZBVUxUXCIsIGxhYmVsOiBcIlBvbGUgdmF1bHQgKGNtKVwiIH0sXG4gIHsgdmFsdWU6IFwiSkFWRUxJTl9USFJPV1wiLCBsYWJlbDogXCJKYXZlbGluIHRocm93IChtKVwiIH0sXG4gIHsgdmFsdWU6IFwiVFJBQ0tfMTUwMFwiLCBsYWJlbDogXCIxNTAwIG1ldGVycyAocylcIiB9LFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgZXZlbnQ6IFwiVFJBQ0tfMTAwXCIsXG4gICAgcmVzdWx0OiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF3YWl0IGZldGNoKGAke0FQSV9VUkx9P2V2ZW50PSR7dmFsdWVzLmV2ZW50fSZyZXN1bHQ9JHt2YWx1ZXMucmVzdWx0fWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIH0sXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZXRTY29yZShkYXRhLnNjb3JlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicHktOCBzbTpwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteS04IG1heC13LXNtIG14LWF1dG9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPkFzayBPc2lsYTwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZXZlbnRcIj5FdmVudDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImV2ZW50XCIgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWVzKHByZXYgPT4gKHsgLi4ucHJldiwgZXZlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pKX0+XG4gICAgICAgICAgICAgIHtFVkVOVFMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2V2ZW50LnZhbHVlfSB2YWx1ZT17ZXZlbnQudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJldmVudFwiPlJlc3VsdDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwicmVzdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucmVzdWx0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZXMocHJldiA9PiAoeyAuLi5wcmV2LCByZXN1bHQ6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgQXNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8T3NpbGEgdGV4dD17c2NvcmU/LnRvU3RyaW5nKCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk9zaWxhIiwiRm9ybUxhYmVsIiwiQVBJX1VSTCIsIkVWRU5UUyIsInZhbHVlIiwibGFiZWwiLCJIb21lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZXZlbnQiLCJyZXN1bHQiLCJzY29yZSIsInNldFNjb3JlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsImUiLCJwcmV2IiwidGFyZ2V0IiwibWFwIiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwic3RlcCIsInJlcXVpcmVkIiwiYnV0dG9uIiwidGV4dCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});