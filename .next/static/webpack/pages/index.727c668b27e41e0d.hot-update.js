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

/***/ "./src/components/osila.tsx":
/*!**********************************!*\
  !*** ./src/components/osila.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Osila = (props)=>{\n    _s();\n    const { text = \"Hello!\" } = props;\n    const [isSpeaking, setIsSpeaking] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!isSpeaking) {\n            setIsSpeaking(true);\n            const interval = setInterval(()=>{\n                setIsSpeaking(false);\n            }, 1000);\n            return ()=>clearInterval(interval);\n        }\n    }, [\n        text\n    ]);\n    const Bubble = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"120px\",\n                backgroundImage: \"url('/speaking_bubble.png')\",\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\"\n            },\n            className: \"pt-6 w-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl text-center font-bold px-11 py-3\",\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined);\n    }, [\n        text\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: isSpeaking ? \"/osila_speaking.gif\" : \"/osila.png\",\n                width: 200,\n                height: 200,\n                alt: \"Osila\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute ml-32 -mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bubble, {}, void 0, false, {\n                    fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikksarapuu/dev/decathlon/decathlon-client/src/components/osila.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Osila, \"Bnx7NGw1Fr/usZx4CIxAojLDHJg=\");\n_c = Osila;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Osila);\nvar _c;\n$RefreshReg$(_c, \"Osila\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vc2lsYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBQzJCO0FBT3pELE1BQU1JLFFBQVEsQ0FBQ0M7O0lBRWIsTUFBTSxFQUFFQyxPQUFPLFFBQVEsRUFBRSxHQUFHRDtJQUU1QixNQUFNLENBQUNFLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDSyxZQUFZO1lBQ2ZDLGNBQWM7WUFDZCxNQUFNQyxXQUFXQyxZQUFZO2dCQUMzQkYsY0FBYztZQUNoQixHQUFHO1lBRUgsT0FBTyxJQUFNRyxjQUFjRjtRQUM3QjtJQUNGLEdBQUc7UUFBQ0g7S0FBSztJQUdULE1BQU1NLFNBQVNYLGtEQUFXQSxDQUFDO1FBQ3pCLHFCQUNFLDhEQUFDWTtZQUNDQyxPQUFPO2dCQUNMQyxRQUFRO2dCQUNSQyxpQkFBa0I7Z0JBQ2xCQyxnQkFBZ0I7Z0JBQ2hCQyxvQkFBb0I7WUFDdEI7WUFDQUMsV0FBVTtzQkFFViw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQ1ZiOzs7Ozs7Ozs7OztJQUlULEdBQUc7UUFBQ0E7S0FBSztJQUdULHFCQUNFLDhEQUFDTztRQUFJTSxXQUFVOzswQkFDYiw4REFBQ25CLG1EQUFLQTtnQkFDSnFCLEtBQUtkLGFBQWEsd0JBQXdCO2dCQUMxQ2UsT0FBTztnQkFDUFAsUUFBUTtnQkFDUlEsS0FBSTtnQkFDSkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDWDtnQkFBSU0sV0FBVTswQkFDYiw0RUFBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtHQW5ETVI7S0FBQUE7QUFxRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3NpbGEudHN4P2RlZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5pbnRlcmZhY2UgT3NpbGFQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmdcbn1cblxuY29uc3QgT3NpbGEgPSAocHJvcHM6IE9zaWxhUHJvcHMpID0+IHtcblxuICBjb25zdCB7IHRleHQgPSBcIkhlbGxvIVwiIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXNTcGVha2luZywgc2V0SXNTcGVha2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzU3BlYWtpbmcpIHtcbiAgICAgIHNldElzU3BlYWtpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0SXNTcGVha2luZyhmYWxzZSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwgW3RleHRdKTtcblxuXG4gIGNvbnN0IEJ1YmJsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogJzEyMHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9zcGVha2luZ19idWJibGUucG5nJylgLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInB0LTYgdy0yMFwiXG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBweC0xMSBweS0zXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSwgW3RleHRdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHAtOFwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17aXNTcGVha2luZyA/IFwiL29zaWxhX3NwZWFraW5nLmdpZlwiIDogXCIvb3NpbGEucG5nXCJ9XG4gICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICBhbHQ9XCJPc2lsYVwiXG4gICAgICAgIHByaW9yaXR5XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtbC0zMiAtbXQtOFwiPlxuICAgICAgICA8QnViYmxlIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPc2lsYTsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3NpbGEiLCJwcm9wcyIsInRleHQiLCJpc1NwZWFraW5nIiwic2V0SXNTcGVha2luZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiQnViYmxlIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJ3aWR0aCIsImFsdCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/osila.tsx\n"));

/***/ })

});