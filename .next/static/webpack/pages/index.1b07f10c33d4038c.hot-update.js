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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [leadCopied, setLeadCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [lead, setLead] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function generateLead(e) {\n        e.preventDefault();\n        setLoading(true);\n        const inputs = document.getElementById(\"inputs\");\n        const response = await fetch(\"/api/askai\", {\n            method: \"POST\",\n            body: inputs.value\n        });\n        const data = await response.json();\n        setLoading(false);\n        console.log(\"data\", data);\n        if (data.error) {\n            alert(\"Something went wrong!\");\n            return;\n        }\n        alert(\"Lead generated successfully!\");\n        inputs.value = \"\";\n        setLead(data.result);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>generateLead(e),\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"inputs\",\n                                children: \"Provide some inputs to build your lead\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"inputs\",\n                                id: \"inputs\",\n                                cols: 30,\n                                rows: 10,\n                                className: \"rounded\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"bg-blue-500 p-2 rounded text-white\",\n                                children: loading ? \"Generating...\" : \"Generate Lead\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    lead.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold mb-4 font-xl\",\n                                        children: \"Your lead is ready! \\uD83D\\uDC47\\uD83C\\uDFFB\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard, {\n                                        text: lead,\n                                        onCopy: ()=>setLeadCopied(true),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: leadCopied ? \"Copied \\uD83D\\uDC4D\\uD83C\\uDFFB\" : \"Copy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                children: lead\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Arthur/Repos/hackday/lead-generator/src/pages/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"LAPOPBPkRMW6LRDeFtboNOhs9dM=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDeUI7QUFDcEI7QUFFdkIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLGVBQWVVLGFBQWFDLENBQUM7UUFDM0JBLEVBQUVDO1FBQ0ZQLFdBQVc7UUFDWCxNQUFNUSxTQUFTQyxTQUFTQyxlQUFlO1FBQ3ZDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxjQUFjO1lBQ3pDQyxRQUFRO1lBQ1JDLE1BQU1OLE9BQU9PO1FBQ2Y7UUFDQSxNQUFNQyxPQUFPLE1BQU1MLFNBQVNNO1FBQzVCakIsV0FBVztRQUNYa0IsUUFBUUMsSUFBSSxRQUFRSDtRQUNwQixJQUFJQSxLQUFLSSxPQUFPO1lBQ2RDLE1BQU07WUFDTjtRQUNGO1FBRUFBLE1BQU07UUFDTmIsT0FBT08sUUFBUTtRQUNmWCxRQUFRWSxLQUFLTTtJQUNmO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQzdCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFLQyxVQUFVLENBQUNyQixJQUFNRCxhQUFhQzt3QkFBSW1CLFdBQVU7OzBDQUNoRCw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFNO2dDQUNOQyxNQUFNO2dDQUNOVCxXQUFVOzs7Ozs7MENBRVosOERBQUNVO2dDQUNDQyxNQUFLO2dDQUNMQyxVQUFVdEM7Z0NBQ1YwQixXQUFVOzBDQUVUMUIsVUFBVSxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFJaENJLEtBQUttQyxTQUFTLG1CQUNiLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2M7d0NBQUdkLFdBQVU7a0RBQXlCOzs7Ozs7a0RBQ3ZDLDhEQUFDN0Isb0VBQWVBO3dDQUFDNEMsTUFBTXJDO3dDQUFNc0MsUUFBUSxJQUFNdkMsY0FBYztrREFDdkQsNEVBQUNpQztzREFBUWxDLGFBQWEsb0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUMsOERBQUNKLHNEQUFRQTswQ0FBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQTlEd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xlYWRDb3BpZWQsIHNldExlYWRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGVhZCwgc2V0TGVhZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUxlYWQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRzXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXNrYWlcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IGlucHV0cy52YWx1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWxlcnQoXCJMZWFkIGdlbmVyYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIGlucHV0cy52YWx1ZSA9IFwiXCI7XG4gICAgc2V0TGVhZChkYXRhLnJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBnZW5lcmF0ZUxlYWQoZSl9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0c1wiPlByb3ZpZGUgc29tZSBpbnB1dHMgdG8gYnVpbGQgeW91ciBsZWFkPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJpbnB1dHNcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgY29scz17MzB9XG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMiByb3VuZGVkIHRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJHZW5lcmF0aW5nLi4uXCIgOiBcIkdlbmVyYXRlIExlYWRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHtsZWFkLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItNCBmb250LXhsXCI+WW91ciBsZWFkIGlzIHJlYWR5ISDwn5GH8J+PuzwvaDI+XG4gICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17bGVhZH0gb25Db3B5PXsoKSA9PiBzZXRMZWFkQ29waWVkKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPntsZWFkQ29waWVkID8gXCJDb3BpZWQg8J+RjfCfj7tcIiA6IFwiQ29weVwifTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1hcmtkb3duPntsZWFkfTwvTWFya2Rvd24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJDb3B5VG9DbGlwYm9hcmQiLCJNYXJrZG93biIsIlBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxlYWRDb3BpZWQiLCJzZXRMZWFkQ29waWVkIiwibGVhZCIsInNldExlYWQiLCJnZW5lcmF0ZUxlYWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ2YWx1ZSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJyZXN1bHQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwidGV4dGFyZWEiLCJuYW1lIiwiaWQiLCJjb2xzIiwicm93cyIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsImxlbmd0aCIsImgyIiwidGV4dCIsIm9uQ29weSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});