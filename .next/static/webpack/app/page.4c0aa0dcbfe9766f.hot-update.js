"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/GameContainer/RecommendationsSection/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/app/components/GameContainer/RecommendationsSection/index.tsx ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ \"(app-pages-browser)/./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ \"(app-pages-browser)/./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ \"(app-pages-browser)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RecommendationsSection = (param)=>{\n    let { recomendaciones } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"dark:bg-gray-400 text-white my-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-2xl font-semibold mb-6\",\n                children: \"The best games (Digital)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        gutter: [\n                            16,\n                            16\n                        ],\n                        className: \"md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4\",\n                        children: recomendaciones.map((game, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-full sm:mx-2 md:mx-2 lg:mx-2 2xl:mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/game-details/\".concat(game.id),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                alt: game.nombre,\n                                                src: game.imagen,\n                                                className: \"w-full h-48 object-cover rounded-t-xl border border-gray-300\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"text-xl font-semibold mb-2\",\n                                                        children: game.nombre\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-100\",\n                                                        children: game.categoria.join(\", \")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                        lineNumber: 35,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-100\",\n                                                        children: game.fecha_lanzamiento\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-red-500 font-semibold mt-2\",\n                                                        children: [\n                                                            \"$\",\n                                                            game.precio\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        type: \"primary\",\n                        block: true,\n                        size: \"large\",\n                        className: \"mt-6 button1 dark:w-80\",\n                        onClick: ()=>window.location.href = \"/best-games\",\n                        children: \"Read More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\RecommendationsSection\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RecommendationsSection, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = RecommendationsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecommendationsSection);\nvar _c;\n$RefreshReg$(_c, \"RecommendationsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9HYW1lQ29udGFpbmVyL1JlY29tbWVuZGF0aW9uc1NlY3Rpb24vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDOztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ2pCO0FBQ2U7QUFNNUMsTUFBTU0seUJBQWdFO1FBQUMsRUFDckVDLGVBQWUsRUFDaEI7O0lBQ0MsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDRixxREFBSUE7UUFBQ00sV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEM7Ozs7OzswQkFHeEQsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ1Qsb0RBQUdBO3dCQUNGWSxRQUFROzRCQUFDOzRCQUFJO3lCQUFHO3dCQUNoQkgsV0FBVTtrQ0FFVEYsZ0JBQWdCTSxHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msc0JBQy9CLDhEQUFDZCxvREFBR0E7Z0NBQUNRLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFJRixXQUFVOzhDQUNiLDRFQUFDTCxrREFBSUE7d0NBQUNZLE1BQU0saUJBQXlCLE9BQVJGLEtBQUtHLEVBQUU7OzBEQUNsQyw4REFBQ0M7Z0RBQ0NDLEtBQUtMLEtBQUtNLE1BQU07Z0RBQ2hCQyxLQUFLUCxLQUFLUSxNQUFNO2dEQUNoQmIsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDRTtnREFBSUYsV0FBVTs7a0VBQ2IsOERBQUNDO3dEQUFHRCxXQUFVO2tFQUE4QkssS0FBS00sTUFBTTs7Ozs7O2tFQUN2RCw4REFBQ0c7d0RBQUVkLFdBQVU7a0VBQWlCSyxLQUFLVSxTQUFTLENBQUNDLElBQUksQ0FBQzs7Ozs7O2tFQUNsRCw4REFBQ0Y7d0RBQUVkLFdBQVU7a0VBQWlCSyxLQUFLWSxpQkFBaUI7Ozs7OztrRUFDcEQsOERBQUNIO3dEQUFFZCxXQUFVOzs0REFBa0M7NERBQzNDSyxLQUFLYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBYnVDWjs7Ozs7Ozs7OztrQ0FzQmxFLDhEQUFDYix3REFBTUE7d0JBQ0wwQixNQUFLO3dCQUNMQyxLQUFLO3dCQUNMQyxNQUFLO3dCQUNMckIsV0FBVTt3QkFDVnNCLFNBQVMsSUFBT0MsT0FBT0MsUUFBUSxDQUFDakIsSUFBSSxHQUFHO2tDQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVA7R0FqRE1WOztRQUdXRCxzREFBU0E7OztLQUhwQkM7QUFrRE4sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvR2FtZUNvbnRhaW5lci9SZWNvbW1lbmRhdGlvbnNTZWN0aW9uL2luZGV4LnRzeD8zYWMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFJlY29tbWVuZGF0aW9uc1NlY3Rpb25Qcm9wcyB7XHJcbiAgcmVjb21lbmRhY2lvbmVzOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgUmVjb21tZW5kYXRpb25zU2VjdGlvbjogUmVhY3QuRkM8UmVjb21tZW5kYXRpb25zU2VjdGlvblByb3BzPiA9ICh7XHJcbiAgcmVjb21lbmRhY2lvbmVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT0nZGFyazpiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlIG15LTInPlxyXG4gICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi02Jz5cclxuICAgICAgVGhlIGJlc3QgZ2FtZXMgKERpZ2l0YWwpXHJcbiAgICA8L2gyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgPFJvd1xyXG4gICAgICAgIGd1dHRlcj17WzE2LCAxNl19XHJcbiAgICAgICAgY2xhc3NOYW1lPSdtZDpncmlkIHNtOmdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IDJ4bDpncmlkLWNvbHMtNCdcclxuICAgICAgPlxyXG4gICAgICAgIHtyZWNvbWVuZGFjaW9uZXMubWFwKChnYW1lOiBhbnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0ndy1mdWxsIHNtOm14LTIgbWQ6bXgtMiBsZzpteC0yIDJ4bDpteC0yJyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaG9tZSBjYXJkMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1tZCByb3VuZGVkLXhsIGRhcms6YmctZ3JheS05MDAgaC05Nic+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9nYW1lLWRldGFpbHMvJHtnYW1lLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2dhbWUubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2dhbWUuaW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciByb3VuZGVkLXQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00Jz5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkIG1iLTInPntnYW1lLm5vbWJyZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS0xMDAnPntnYW1lLmNhdGVnb3JpYS5qb2luKCcsICcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktMTAwJz57Z2FtZS5mZWNoYV9sYW56YW1pZW50b308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIGZvbnQtc2VtaWJvbGQgbXQtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnYW1lLnByZWNpb31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPSdwcmltYXJ5J1xyXG4gICAgICAgIGJsb2NrXHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgY2xhc3NOYW1lPSdtdC02IGJ1dHRvbjEgZGFyazp3LTgwJ1xyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYmVzdC1nYW1lcycpfVxyXG4gICAgICA+XHJcbiAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uc1NlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSb3ciLCJDb2wiLCJCdXR0b24iLCJDYXJkIiwiTGluayIsInVzZVJvdXRlciIsIlJlY29tbWVuZGF0aW9uc1NlY3Rpb24iLCJyZWNvbWVuZGFjaW9uZXMiLCJyb3V0ZXIiLCJjbGFzc05hbWUiLCJoMiIsImRpdiIsImd1dHRlciIsIm1hcCIsImdhbWUiLCJpbmRleCIsImhyZWYiLCJpZCIsImltZyIsImFsdCIsIm5vbWJyZSIsInNyYyIsImltYWdlbiIsInAiLCJjYXRlZ29yaWEiLCJqb2luIiwiZmVjaGFfbGFuemFtaWVudG8iLCJwcmVjaW8iLCJ0eXBlIiwiYmxvY2siLCJzaXplIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/GameContainer/RecommendationsSection/index.tsx\n"));

/***/ })

});