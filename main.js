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

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUs\": () => (/* binding */ createAboutUs)\n/* harmony export */ });\nfunction createAboutUs() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'About Us'\n\n    const teamTitle = document.createElement('p')\n    teamTitle.textContent = 'Our Team'\n\n    const team = document.createElement('div')\n        const manager = document.createElement('div')\n        manager.classList.add('personnel')\n            const managerPicture = document.createElement('img')\n            const managerName = document.createElement('p')\n            managerName.textContent = 'Our Manager, Albert'\n            managerPicture.src = './../dist/images/manager.jpg'\n            managerPicture.classList.add('staff')\n\n        const chef = document.createElement('div')\n        chef.classList.add('personnel')\n            const chefPicture = document.createElement('img')\n            const chefName = document.createElement('p')\n            chefName.textContent = 'Our Chef, Fred'\n            chefPicture.src = './../dist/images/chef.webp'\n            chefPicture.classList.add('staff')\n\n        const cook = document.createElement('div')\n        cook.classList.add('personnel')\n            const cookPicture = document.createElement('img')\n            const cookName = document.createElement('p')\n            cook.textContent = 'Our Cook, Gregory'\n            cookPicture.src = './../dist/images/cook.jpeg'\n            cookPicture.classList.add('staff')\n\n        manager.append(managerPicture, managerName)\n        chef.append(chefPicture, chefName)\n        cook.append(cookPicture, cookName)\n\n    team.append(manager, chef, cook)\n    container.append(header, teamTitle, team)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutUs.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContacts\": () => (/* binding */ createContacts)\n/* harmony export */ });\nfunction createContacts() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'Contacts'\n\n    container.append(header)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\n\nconst aboutUs = document.querySelector('.about')\naboutUs.addEventListener('click', _aboutUs__WEBPACK_IMPORTED_MODULE_0__.createAboutUs)\n\nconst menu = document.querySelector('.menu')\nmenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)\n\nconst contacts = document.querySelector('.contacts')\ncontacts.addEventListener('click', _contacts__WEBPACK_IMPORTED_MODULE_2__.createContacts)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'Menu'\n\n    container.append(header)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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