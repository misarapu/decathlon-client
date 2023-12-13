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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_osila__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/osila */ \"./src/components/osila.tsx\");\n/* harmony import */ var _components_formLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/formLabel */ \"./src/components/formLabel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_URL = \"http://localhost:8080/api/score\";\nconst EVENTS = [\n    {\n        value: \"TRACK_100\",\n        label: \"100 meters (s)\"\n    },\n    {\n        value: \"LONG_JUMP\",\n        label: \"Long jump (cm)\"\n    },\n    {\n        value: \"SHOT_PUT\",\n        label: \"Shot put (m)\"\n    },\n    {\n        value: \"HIGH_JUMP\",\n        label: \"High jump (cm)\"\n    },\n    {\n        value: \"TRACK_400\",\n        label: \"400 meters (s)\"\n    },\n    {\n        value: \"HURDLES_110\",\n        label: \"110 hurdles (s)\"\n    },\n    {\n        value: \"DISCUS_THROW\",\n        label: \"Discus throw (m)\"\n    },\n    {\n        value: \"POLE_VAULT\",\n        label: \"Pole vault (cm)\"\n    },\n    {\n        value: \"JAVELIN_THROW\",\n        label: \"Javelin throw (m)\"\n    },\n    {\n        value: \"TRACK_1500\",\n        label: \"1500 meters (s)\"\n    }\n];\nfunction Home() {\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        event: \"TRACK_100\",\n        result: \"\"\n    });\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        await fetch(\"\".concat(API_URL, \"?event=\").concat(values.event, \"&result=\").concat(values.result), {\n            method: \"GET\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            return response.json();\n        }).then((data)=>{\n            setScore(data.score);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-8 sm:p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row space-x-16 max-w-sm mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_osila__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    text: score === null || score === void 0 ? void 0 : score.toString()\n                }, void 0, false, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl mb-4\",\n                            children: \"Ask Osila\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    htmlFor: \"event\",\n                                    children: \"Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"event\",\n                                    onChange: (e)=>setValues((prev)=>({\n                                                ...prev,\n                                                event: e.target.value\n                                            })),\n                                    children: EVENTS.map((event)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: event.value,\n                                            children: event.label\n                                        }, event.value, false, {\n                                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_formLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    htmlFor: \"event\",\n                                    children: \"Result\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"result\",\n                                    type: \"number\",\n                                    step: 0.01,\n                                    required: true,\n                                    value: values.result,\n                                    onChange: (e)=>setValues((prev)=>({\n                                                ...prev,\n                                                result: e.target.value\n                                            }))\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"primary\",\n                                children: \"Ask\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"X/hw9QWaTuQgeuKZKduQUwSVO6c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPc2lsYSBmcm9tICdAL2NvbXBvbmVudHMvb3NpbGEnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAL2NvbXBvbmVudHMvZm9ybUxhYmVsJztcblxuXG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Njb3JlXCI7XG5cbmNvbnN0IEVWRU5UUzogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyB9W10gPSBbXG4gIHsgdmFsdWU6IFwiVFJBQ0tfMTAwXCIsIGxhYmVsOiBcIjEwMCBtZXRlcnMgKHMpXCIgfSxcbiAgeyB2YWx1ZTogXCJMT05HX0pVTVBcIiwgbGFiZWw6IFwiTG9uZyBqdW1wIChjbSlcIiB9LFxuICB7IHZhbHVlOiBcIlNIT1RfUFVUXCIsIGxhYmVsOiBcIlNob3QgcHV0IChtKVwiIH0sXG4gIHsgdmFsdWU6IFwiSElHSF9KVU1QXCIsIGxhYmVsOiBcIkhpZ2gganVtcCAoY20pXCIgfSxcbiAgeyB2YWx1ZTogXCJUUkFDS180MDBcIiwgbGFiZWw6IFwiNDAwIG1ldGVycyAocylcIiB9LFxuICB7IHZhbHVlOiBcIkhVUkRMRVNfMTEwXCIsIGxhYmVsOiBcIjExMCBodXJkbGVzIChzKVwiIH0sXG4gIHsgdmFsdWU6IFwiRElTQ1VTX1RIUk9XXCIsIGxhYmVsOiBcIkRpc2N1cyB0aHJvdyAobSlcIiB9LFxuICB7IHZhbHVlOiBcIlBPTEVfVkFVTFRcIiwgbGFiZWw6IFwiUG9sZSB2YXVsdCAoY20pXCIgfSxcbiAgeyB2YWx1ZTogXCJKQVZFTElOX1RIUk9XXCIsIGxhYmVsOiBcIkphdmVsaW4gdGhyb3cgKG0pXCIgfSxcbiAgeyB2YWx1ZTogXCJUUkFDS18xNTAwXCIsIGxhYmVsOiBcIjE1MDAgbWV0ZXJzIChzKVwiIH0sXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBldmVudDogXCJUUkFDS18xMDBcIixcbiAgICByZXN1bHQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0/ZXZlbnQ9JHt2YWx1ZXMuZXZlbnR9JnJlc3VsdD0ke3ZhbHVlcy5yZXN1bHR9YCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgfSxcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIHNldFNjb3JlKGRhdGEuc2NvcmUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJweS04IHNtOnAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTE2IG1heC13LXNtIG14LWF1dG9cIj5cbiAgICAgICAgPE9zaWxhIHRleHQ9e3Njb3JlPy50b1N0cmluZygpfSAvPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+QXNrIE9zaWxhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImV2ZW50XCI+RXZlbnQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJldmVudFwiIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlcyhwcmV2ID0+ICh7IC4uLnByZXYsIGV2ZW50OiBlLnRhcmdldC52YWx1ZSB9KSl9PlxuICAgICAgICAgICAgICB7RVZFTlRTLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtldmVudC52YWx1ZX0gdmFsdWU9e2V2ZW50LnZhbHVlfT5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZXZlbnRcIj5SZXN1bHQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInJlc3VsdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnJlc3VsdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWVzKHByZXYgPT4gKHsgLi4ucHJldiwgcmVzdWx0OiBlLnRhcmdldC52YWx1ZSB9KSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIEFza1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiT3NpbGEiLCJGb3JtTGFiZWwiLCJBUElfVVJMIiwiRVZFTlRTIiwidmFsdWUiLCJsYWJlbCIsIkhvbWUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJldmVudCIsInJlc3VsdCIsInNjb3JlIiwic2V0U2NvcmUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJ0ZXh0IiwidG9TdHJpbmciLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInByZXYiLCJ0YXJnZXQiLCJtYXAiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJzdGVwIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});