<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";!function(){const e=document.querySelector(".wp-block-lfdb-lfdb-hamburger"),s=document.getElementById("lfdb-section-menu-mobile"),i=document.body;e.addEventListener("click",(function(){if(e.classList.contains("is-active"))return e.classList.remove("is-active"),s.classList.remove("is-active"),void i.classList.remove("menu-mobile-is-active");e.classList.add("is-active"),s.classList.add("is-active"),i.classList.add("menu-mobile-is-active")}))}()})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hamburger/view.scss":
/*!*********************************!*\
  !*** ./src/hamburger/view.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/hamburger/view.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.scss */ "./src/hamburger/view.scss");

(function () {
  'use-strict';

  const hamburgerOpen = document.querySelector(".wp-block-lfdb-lfdb-hamburger");
  const blockNavigationMobile = document.getElementById("lfdb-section-menu-mobile");
  const body = document.body;
  hamburgerOpen.addEventListener("click", function () {
    if (hamburgerOpen.classList.contains("is-active")) {
      hamburgerOpen.classList.remove("is-active");
      blockNavigationMobile.classList.remove("is-active");
      body.classList.remove("menu-mobile-is-active");
      return;
    }
    hamburgerOpen.classList.add("is-active");
    blockNavigationMobile.classList.add("is-active");
    body.classList.add("menu-mobile-is-active");
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=view.js.map
>>>>>>> 82096cc9ecff279cf5c3883ef42a509cf4619c6a
=======
(()=>{"use strict";!function(){const e=document.querySelector(".wp-block-lfdb-lfdb-hamburger"),s=document.getElementById("lfdb-section-menu-mobile"),i=document.body;e.addEventListener("click",(function(){if(e.classList.contains("is-active"))return e.classList.remove("is-active"),s.classList.remove("is-active"),void i.classList.remove("menu-mobile-is-active");e.classList.add("is-active"),s.classList.add("is-active"),i.classList.add("menu-mobile-is-active")}))}()})();
>>>>>>> rescits
