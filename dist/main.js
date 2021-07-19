/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display/clearContent.js":
/*!*************************************!*\
  !*** ./src/display/clearContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearContent = () => {\n    const content = document.querySelector('#content');\n    while (content.hasChildNodes) {\n        content.removeChild(content.firstChild);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);\n\n//# sourceURL=webpack://restaurant-page/./src/display/clearContent.js?");

/***/ }),

/***/ "./src/display/renderFooter.js":
/*!*************************************!*\
  !*** ./src/display/renderFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderFooter = () => {\n    const body = document.querySelector('body');\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    footer.innerHTML = '<div>Brought to you by the Straw Hat Pirates</div><ion-icon name=\"logo-github\"></ion-icon>'\n    body.appendChild(footer);\n    console.log(\"footer rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);\n\n//# sourceURL=webpack://restaurant-page/./src/display/renderFooter.js?");

/***/ }),

/***/ "./src/display/renderHeader.js":
/*!*************************************!*\
  !*** ./src/display/renderHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHeader = () => {\n    const body = document.querySelector('body');\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.innerHTML = '<span class=\"tabs\">Menu <span id=\"header-title\">BARATIE</span> About</span>'\n    body.appendChild(header);\n    console.log(\"header rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/display/renderHeader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/clearContent */ \"./src/display/clearContent.js\");\n/* harmony import */ var _display_renderHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/renderHeader */ \"./src/display/renderHeader.js\");\n/* harmony import */ var _display_renderFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/renderFooter */ \"./src/display/renderFooter.js\");\n/* harmony import */ var _pages_renderHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/renderHome */ \"./src/pages/renderHome.js\");\n\n\n\n\n\n(0,_display_renderHeader__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_display_renderFooter__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_pages_renderHome__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/renderHome.js":
/*!*********************************!*\
  !*** ./src/pages/renderHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = () => {\n    const content = document.querySelector('#content');\n    const homePage = document.createElement('div');\n    homePage.classList.add('homepage');\n    const background = document.createElement('div');\n    background.classList.add('background');\n    homePage.appendChild(background);\n    content.appendChild(homePage);\n    console.log(\"home rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/renderHome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;