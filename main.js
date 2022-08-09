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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUs\": () => (/* binding */ createAboutUs)\n/* harmony export */ });\nfunction createAboutUs() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'About Us'\n\n    const whoAreWe = document.createElement('div')\n    whoAreWe.classList.add('description')\n        const title = document.createElement('p')\n        title.classList.add('title')\n        title.textContent = 'Who are we?'\n\n        const text = document.createElement('p')\n        text.classList.add('text')\n        text.textContent = 'We are a new, up-and-coming team of highly trained professionals, here to bring YOU the finest cuisine this city has to offer! Bring your family and friends, everyone is invited!'\n\n    whoAreWe.append(title, text)\n\n    const teamTitle = document.createElement('p')\n    teamTitle.classList.add('team-title')\n    teamTitle.textContent = 'Our Team'\n\n    const team = document.createElement('div')\n    team.classList.add('team')\n        const manager = document.createElement('div')\n        manager.classList.add('personnel')\n            const managerPicture = document.createElement('img')\n            const managerName = document.createElement('p')\n            managerName.textContent = 'Our Manager, Albert'\n            managerPicture.src = './../dist/images/manager.jpg'\n            managerPicture.classList.add('staff')\n\n        const chef = document.createElement('div')\n        chef.classList.add('personnel')\n            const chefPicture = document.createElement('img')\n            const chefName = document.createElement('p')\n            chefName.textContent = 'Our Chef, Fred'\n            chefPicture.src = './../dist/images/chef.webp'\n            chefPicture.classList.add('staff')\n\n        const cook = document.createElement('div')\n        cook.classList.add('personnel')\n            const cookPicture = document.createElement('img')\n            const cookName = document.createElement('p')\n            cookName.textContent = 'Our Cook, Gregory'\n            cookPicture.src = './../dist/images/cook.jpeg'\n            cookPicture.classList.add('staff')\n\n\n        manager.append(managerPicture, managerName)\n        chef.append(chefPicture, chefName)\n        cook.append(cookPicture, cookName)\n\n    team.append(manager, chef, cook)\n\n    const footer = document.createElement('footer')\n    footer.classList.add('footer')\n        const logo = document.createElement('img')\n        logo.classList.add('logo')\n        logo.src = './../dist/images/github.png'\n\n        const footerText = document.createElement('a')\n        footerText.classList.add('footer-text')\n        footerText.textContent = 'pequito193'\n        footerText.href = 'https://github.com/pequito193'\n        footerText.target = '_blank'\n\n    \n    footer.append(logo, footerText)\n\n\n    \n    container.append(header, whoAreWe, teamTitle, team, footer)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutUs.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContacts\": () => (/* binding */ createContacts)\n/* harmony export */ });\nfunction createContacts() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'Contacts'\n\n    const footer = document.createElement('footer')\n    footer.classList.add('footer')\n        const logo = document.createElement('img')\n        logo.classList.add('logo')\n        logo.src = './../dist/images/github.png'\n\n        const footerText = document.createElement('a')\n        footerText.classList.add('footer-text')\n        footerText.textContent = 'pequito193'\n        footerText.href = 'https://github.com/pequito193'\n        footerText.target = '_blank'\n\n    \n    footer.append(logo, footerText)\n\n\n\n    container.append(header, footer)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\n\n(0,_aboutUs__WEBPACK_IMPORTED_MODULE_0__.createAboutUs)();\n\nconst aboutUs = document.querySelector('.about')\naboutUs.addEventListener('click', _aboutUs__WEBPACK_IMPORTED_MODULE_0__.createAboutUs)\n\nconst menu = document.querySelector('.menu')\nmenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)\n\nconst contacts = document.querySelector('.contacts')\ncontacts.addEventListener('click', _contacts__WEBPACK_IMPORTED_MODULE_2__.createContacts)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n\n    const container = document.querySelector('#content')\n    container.innerHTML = ''\n\n    const header = document.createElement('h1')\n    header.textContent = 'Menu'\n\n    const mainDishes = document.createElement('p')\n    mainDishes.classList.add('main-dishes')\n    mainDishes.textContent = 'Main Course (Meat)'\n\n    const menuGrid = document.createElement('div')\n    menuGrid.classList.add('menu-grid')\n        const food1 = document.createElement('div')\n        food1.classList.add('food')\n            const food1Picture = document.createElement('img')\n            const food1Price = document.createElement('p')\n            food1Picture.classList.add('food-image')\n            food1Picture.src = './../dist/images/steak.webp'\n            food1Price.textContent = 'Outstanding roasted beef, 8.00$'\n\n        const food2 = document.createElement('div')\n        food2.classList.add('food')\n            const food2Picture = document.createElement('img')\n            const food2Price = document.createElement('p')\n            food2Picture.classList.add('food-image')\n            food2Picture.src = './../dist/images/pork.webp'\n            food2Price.textContent = 'Delicious cooked pork, 7.00$'\n\n        const food3 = document.createElement('div')\n        food3.classList.add('food')\n            const food3Picture = document.createElement('img')\n            const food3Price = document.createElement('p')\n            food3Picture.classList.add('food-image')\n            food3Picture.src = './../dist/images/chicken.webp'\n            food3Price.textContent = 'Spicy chicken curry, 6.00$'\n\n        const food4 = document.createElement('div')\n        food4.classList.add('food')\n            const food4Picture = document.createElement('img')\n            const food4Price = document.createElement('p')\n            food4Picture.classList.add('food-image')\n            food4Picture.src = './../dist/images/lamb.webp'\n            food4Price.textContent = 'Lamb (mutton) chops, 7.50$'\n\n        const food5 = document.createElement('div')\n        food5.classList.add('food')\n            const food5Picture = document.createElement('img')\n            const food5Price = document.createElement('p')\n            food5Picture.classList.add('food-image')\n            food5Picture.src = './../dist/images/rabbit.webp'\n            food5Price.textContent = 'Spicy rabbit broth, 6.50$'\n\n        \n        food1.append(food1Picture, food1Price)\n        food2.append(food2Picture, food2Price)\n        food3.append(food3Picture, food3Price)\n        food4.append(food4Picture, food4Price)\n        food5.append(food5Picture, food5Price)\n\n    const mainDishes2 = document.createElement('p')\n    mainDishes2.classList.add('main-dishes')\n    mainDishes2.textContent = 'Main Course (Fish)'\n\n    const menuGrid2 = document.createElement('div')\n    menuGrid2.classList.add('menu-grid2')\n        const fish1 = document.createElement('div')\n        fish1.classList.add('food')\n            const fish1Picture = document.createElement('img')\n            const fish1Price = document.createElement('p')\n            fish1Picture.classList.add('food-image')\n            fish1Picture.src = './../dist/images/salmon.webp'\n            fish1Price.textContent = 'Delicious roasted salmon, 9.00$'\n\n        const fish2 = document.createElement('div')\n        fish2.classList.add('food')\n            const fish2Picture = document.createElement('img')\n            const fish2Price = document.createElement('p')\n            fish2Picture.classList.add('food-image')\n            fish2Picture.src = './../dist/images/pufferfish.webp'\n            fish2Price.textContent = 'Pufferfish sashimi, 9.50$'\n\n        const fish3 = document.createElement('div')\n        fish3.classList.add('food')\n            const fish3Picture = document.createElement('img')\n            const fish3Price = document.createElement('p')\n            fish3Picture.classList.add('food-image')\n            fish3Picture.src = './../dist/images/cod.webp'\n            fish3Price.textContent = 'Exquisite salted cod, 7.50$'\n\n\n        fish1.append(fish1Picture, fish1Price)\n        fish2.append(fish2Picture, fish2Price)\n        fish3.append(fish3Picture, fish3Price)\n\n    menuGrid.append(food1, food2, food3, food4, food5)\n    menuGrid2.append(fish1, fish2, fish3)\n\n    const footer = document.createElement('footer')\n    footer.classList.add('footer')\n        const logo = document.createElement('img')\n        logo.classList.add('logo')\n        logo.src = './../dist/images/github.png'\n\n        const footerText = document.createElement('a')\n        footerText.classList.add('footer-text')\n        footerText.textContent = 'pequito193'\n        footerText.href = 'https://github.com/pequito193'\n        footerText.target = '_blank'\n\n    \n    footer.append(logo, footerText)\n\n\n\n    container.append(header, mainDishes, menuGrid, mainDishes2, menuGrid2, footer)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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