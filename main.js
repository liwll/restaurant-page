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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearContent = () => {\n    const content = document.querySelector('#content');\n    while (content.children.length > 1) {\n        content.children[1].remove();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);\n\n//# sourceURL=webpack://restaurant-page/./src/display/clearContent.js?");

/***/ }),

/***/ "./src/display/renderFooter.js":
/*!*************************************!*\
  !*** ./src/display/renderFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderFooter = () => {\n    const content = document.querySelector('#content');\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', 'footer');\n    footer.innerHTML = '<div>Brought to you by the Straw Hat Pirates</div><a href=\"https://www.github.com/liwll\"><ion-icon name=\"logo-github\"></ion-icon>'\n    content.appendChild(footer);\n    console.log(\"footer rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);\n\n//# sourceURL=webpack://restaurant-page/./src/display/renderFooter.js?");

/***/ }),

/***/ "./src/display/renderHeader.js":
/*!*************************************!*\
  !*** ./src/display/renderHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHeader = () => {\n    const content = document.querySelector('#content');\n    const header = document.createElement('header');\n    header.setAttribute('id', 'header');\n    header.innerHTML = '<span class=\"tabs\"><span id=\"menu\">Menu </span><span id=\"home\">BARATIE</span><span id=\"about\"> About</span></span>'\n    content.appendChild(header);\n    console.log(\"header rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/display/renderHeader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/clearContent */ \"./src/display/clearContent.js\");\n/* harmony import */ var _display_renderHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/renderHeader */ \"./src/display/renderHeader.js\");\n/* harmony import */ var _display_renderFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/renderFooter */ \"./src/display/renderFooter.js\");\n/* harmony import */ var _pages_renderHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/renderHome */ \"./src/pages/renderHome.js\");\n/* harmony import */ var _pages_renderAbout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/renderAbout */ \"./src/pages/renderAbout.js\");\n/* harmony import */ var _pages_renderMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/renderMenu */ \"./src/pages/renderMenu.js\");\n\n\n\n\n\n\n\n(0,_display_renderHeader__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_pages_renderHome__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_display_renderFooter__WEBPACK_IMPORTED_MODULE_2__.default)();\n\nconst homeTab = document.querySelector('#home');\nconst aboutTab = document.querySelector('#about');\nconst menuTab = document.querySelector('#menu');\n\nhomeTab.addEventListener('click', () => {\n    (0,_display_clearContent__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_pages_renderHome__WEBPACK_IMPORTED_MODULE_3__.default)();\n    (0,_display_renderFooter__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\naboutTab.addEventListener('click', () => {\n    (0,_display_clearContent__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_pages_renderAbout__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_display_renderFooter__WEBPACK_IMPORTED_MODULE_2__.default)();\n})\n\nmenuTab.addEventListener('click', () => {\n    ;(0,_display_clearContent__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_pages_renderMenu__WEBPACK_IMPORTED_MODULE_5__.default)();\n    (0,_display_renderFooter__WEBPACK_IMPORTED_MODULE_2__.default)();\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/renderAbout.js":
/*!**********************************!*\
  !*** ./src/pages/renderAbout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderAbout = () => {\n    const content = document.querySelector('#content');\n    const aboutPage = document.createElement('div');\n    aboutPage.classList.add('about');\n    aboutPage.innerHTML = `\n        <div class=\"about\">\n        <div class=\"heading\">\n            <h1>Enjoy the <span style=\"color: green\">best food</span> in all of the <span style=\"color: #3c2fc5\">Grand Line</span>...</h1>\n        </div>\n            <img id=\"img-indoors\" src=\"./imgs/baratie.jpg\" alt=\"\">\n        <div class=\"heading\">\n            <h1>Sourcing ingredients from the legendary \n                <span style=\"color: #003daf\">All Blue Sea</span>, and backed by the \n                <span style=\"color: #890304\">Straw Hat Pirates</span>, \n                <span style=\"color: rgb(129, 209, 233);\">Restaraunt Baratie's</span> \n                food is enjoyed by all!</h1>\n        </div>\n            <img id=\"img-crew\" src=\"./imgs/baratie_eating.jpg\" alt=\"\">\n        </div>\n    `\n    content.appendChild(aboutPage);\n    console.log(\"about rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/renderAbout.js?");

/***/ }),

/***/ "./src/pages/renderHome.js":
/*!*********************************!*\
  !*** ./src/pages/renderHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = () => {\n    const content = document.querySelector('#content');\n    const homePage = document.createElement('div');\n    homePage.classList.add('home');\n    const background = document.createElement('div');\n    background.classList.add('background');\n    homePage.appendChild(background);\n    content.appendChild(homePage);\n    console.log(\"home rendered\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/renderHome.js?");

/***/ }),

/***/ "./src/pages/renderMenu.js":
/*!*********************************!*\
  !*** ./src/pages/renderMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMenu = () => {\n    const content = document.querySelector('#content');\n    const menu = document.createElement('div');\n    menu.innerHTML = `\n        <div class=\"menu\">\n        <div class=\"quick-nav\">\n            <div>Quick Navigation</div>\n            <a href=\"#lunch-dinner\">Lunch and Dinner</a>\n            <a href=\"#dessert\">Dessert</a>\n            <a href=\"#drinks\">Drinks</a>\n        </div>\n        \n        <span class=\"title\" id=\"lunch-dinner\">Lunch and Dinner</span>\n        <div class=\"lunch-dinner\">\n            <div class=\"menu-item\">\n                <div>Receive the Blessing of East Blue</div>\n                <img style=\"margin-top: 10%\" src=\"./imgs/menu-items/lunch-dinner/blessing-east-blue.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>In Order to Save My Friends: The Vow with Shanks</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/save-my-friends.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>\"In the Name of Absolute Justice\": The Birth of a Man Becoming a Marine Officer</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/absolute-justice-kids.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>\"In the Name of Absolute Justice\": The Birth of a Man Becoming a Marine Officer (kids)</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/absolute-justice.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>\"Honorable Liar\": Proud Warrior's Departure</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/honorable-liar.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/fighting-cook.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Aiming to be the Best Swordsman in the World: Battle of the \"Strong Man\"</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/best-swordsman.jpg\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>The One Spear that Comes from the Gut: Courage that Sticks to its Convictions</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/the-one-spear.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>The Day of Freedom from Control: The Happy Celebration at the End</div>\n                <img src=\"./imgs/menu-items/lunch-dinner/day-of-freedom.png\" alt=\"\">\n            </div>\n        </div>\n        <span class=\"title\" id=\"dessert\">Dessert</span>\n        <div class=\"dessert\">\n            <div class=\"menu-item\">\n                <div>Red Nose's Great Adventure: \"Raspberry Mousse\" - Garnished with Bara-Bara Fruit</div>\n                <img src=\"./imgs/dessert/red-nose.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Beautiful Lady: Glossy and Smooth Creme Brulee</div>\n                <img src=\"./imgs/dessert/beautiful-lady.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>A Gentleman's Taste: Apology - Panna Cotta and Macedonia Combination with Orange Sauce</div>\n                <img src=\"./imgs/dessert/gentleman-taste.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Sparks Fall: Moku-Moku Shaved Ice</div>\n                <img src=\"./imgs/dessert/sparks-fall.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Nami's Orange Jelly</div>\n                <img src=\"./imgs/dessert/nami-mikan-jelly.png\" alt=\"\">\n            </div>\n        </div>\n        <span class=\"title\" id=\"drinks\">Drinks</span>\n        <div class=\"drinks\">\n            <div class=\"menu-item\">\n                <div>Luffy: \"I'm going to become King of the Pirates!\" - Berry Berry Squash</div>\n                <img src=\"./imgs/drinks/luffy-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Zoro: \"Thank you. I can still become stronger.\" - Kiwi Lassi</div>\n                <img src=\"./imgs/drinks/zoro-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Sanji: \"Do you know All Blue?\" - Blue Ocean</div>\n                <img src=\"./imgs/drinks/sanji-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Cocoyasi Village: \"Never forget the strength to continue laughing.\" - Bellemere's Orange Juice</div>\n                <img src=\"./imgs/drinks/nami-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Scurvy: \"Almost had him!\" - Lime Juice to Save Yosaku</div>\n                <img src=\"./imgs/drinks/scurvy-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Going Merry: \"Yes! It's complete! With this, the pirate ship Going Merry is ready!\" - Milky Cocktail with a Black Currant Aroma</div>\n                <img src=\"./imgs/drinks/going-merry-drink.png\" alt=\"\">\n            </div>\n            <div class=\"menu-item\">\n                <div>Usopp: \"For the sake of becoming a true warrior of the sea\" - Mixed Vegetable Juice Red Eye Kiwi Lassi</div>\n                <img src=\"./imgs/drinks/usopp-drink.png\" alt=\"\">\n            </div>\n        </div>\n        <div style=\"margin-bottom: 2%;\">\n            <a href=\"#\">Back To Top</a>\n        </div>\n    </div>\n    `\n    content.appendChild(menu);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/renderMenu.js?");

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