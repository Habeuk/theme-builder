/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hiddey/header/header.js":
/*!*************************************!*\
  !*** ./src/hiddey/header/header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html */ "./src/hiddey/header/header.html");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/hiddey/header/header.scss");



/***/ }),

/***/ "./src/hiddey/presentation/presentation.js":
/*!*************************************************!*\
  !*** ./src/hiddey/presentation/presentation.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presentation_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation.html */ "./src/hiddey/presentation/presentation.html");
/* harmony import */ var _presentation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.scss */ "./src/hiddey/presentation/presentation.scss");



/***/ }),

/***/ "./src/hiddey/header/header.html":
/*!***************************************!*\
  !*** ./src/hiddey/header/header.html ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"hiddey-header container-fluid bg-light px-xl-5\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand h3\" href=\"#\"><img src=\"https://habeuk.com/sites/default/files/styles/medium/public/2022-07/untitled-42_4x-v2.png\" alt=\"logo\"/></a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\"> Work </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"> About </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<!-- \nQuel est la police par defaut ?\n\n -->\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/hiddey/presentation/presentation.html":
/*!***************************************************!*\
  !*** ./src/hiddey/presentation/presentation.html ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"hiddey-presentation container-fluid mx-auto\">\n    <div class=\"row\">\n\n        <div class=\"presentation-left col-md-4 mx-auto\">\n            <img class=\"presentation-image\" src=\"https://static.wixstatic.com/media/c0bbc5_01c1c36beaa141a49c875766b4cdc53c~mv2_d_1508_1200_s_2.png/v1/fit/w_613,h_487,q_90/c0bbc5_01c1c36beaa141a49c875766b4cdc53c~mv2_d_1508_1200_s_2.png\"   >\n        </div>\n        <div class=\"prensentation-right col-md-6 d-flex flex-column justify-content-around mx-auto\">\n            <div class=\"presentation-title h2\">L'ANALYSE FACIALE AU SERVICE DU MARQUETING!</div>\n            <div class=\"presentation-description font-weight-bold\">\n                Nous mettons aux services des entreprises L'intelligence artificielle afin de leur\n                permettre d''élaborer leurs stratégies marketing et d'évaluer les résultats de\n                leurs campagnes sur le terrain tout au long de l'année à travers des\n                statistiques en temps réelles !\n            </div>\n            <div class=\"call-to-action\">\n                <a href=\"#hiddey-products\" class=\"btn btn-dark rounded-pill\">Show Products</a>\n            </div>\n        </div>\n    </div>\n</div>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/hiddey/header/header.scss":
/*!***************************************!*\
  !*** ./src/hiddey/header/header.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hiddey/hiddey.scss":
/*!********************************!*\
  !*** ./src/hiddey/hiddey.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hiddey/presentation/presentation.scss":
/*!***************************************************!*\
  !*** ./src/hiddey/presentation/presentation.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/hiddey/hiddey.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hiddey_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hiddey.scss */ "./src/hiddey/hiddey.scss");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/hiddey/header/header.js");
/* harmony import */ var _presentation_presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/presentation */ "./src/hiddey/presentation/presentation.js");




}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUI7Ozs7Ozs7Ozs7Ozs7O0FDQU07Ozs7Ozs7Ozs7OztBQ0E3QjtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJOzs7Ozs7Ozs7OztBQ0huQjtBQUNBO0FBQ0E7QUFDQSwrREFBZSxJQUFJOzs7Ozs7Ozs7OztBQ0huQjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QjtBQUNFO0FBQ1kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9oaWRkZXkvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9oaWRkZXkvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9oaWRkZXkvaGVhZGVyL2hlYWRlci5odG1sIiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2hpZGRleS9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vQGd1Z2xlZGFzL3RoZW1lLWJ1aWxkZXIvLi9zcmMvaGlkZGV5L2hlYWRlci9oZWFkZXIuc2Nzcz9kMjVkIiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2hpZGRleS9oaWRkZXkuc2Nzcz84OWQwIiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2hpZGRleS9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLnNjc3M/MmJlYiIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2hpZGRleS9oaWRkZXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9oZWFkZXIuaHRtbFwiO1xuaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiOyIsImltcG9ydCBcIi4vcHJlc2VudGF0aW9uLmh0bWxcIjtcbmltcG9ydCBcIi4vcHJlc2VudGF0aW9uLnNjc3NcIjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoaWRkZXktaGVhZGVyIGNvbnRhaW5lci1mbHVpZCBiZy1saWdodCBweC14bC01XFxcIj5cXG4gIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgaDNcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2hhYmV1ay5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvbWVkaXVtL3B1YmxpYy8yMDIyLTA3L3VudGl0bGVkLTQyXzR4LXYyLnBuZ1xcXCIgYWx0PVxcXCJsb2dvXFxcIi8+PC9hPlxcbiAgICA8YnV0dG9uXFxuICAgICAgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVyXFxcIlxcbiAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxuICAgICAgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XFxcIlxcbiAgICAgIGFyaWEtY29udHJvbHM9XFxcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcXFwiXFxuICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiXFxuICAgID5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXItaWNvblxcXCI+PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIj5cXG4gICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbWwtYXV0b1xcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtIGFjdGl2ZVxcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+IFdvcmsgPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPiBBYm91dCA8L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbiAgPC9uYXY+XFxuPC9kaXY+XFxuPCEtLSBcXG5RdWVsIGVzdCBsYSBwb2xpY2UgcGFyIGRlZmF1dCA/XFxuXFxuIC0tPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoaWRkZXktcHJlc2VudGF0aW9uIGNvbnRhaW5lci1mbHVpZCBteC1hdXRvXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByZXNlbnRhdGlvbi1sZWZ0IGNvbC1tZC00IG14LWF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInByZXNlbnRhdGlvbi1pbWFnZVxcXCIgc3JjPVxcXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2MwYmJjNV8wMWMxYzM2YmVhYTE0MWE0OWM4NzU3NjZiNGNkYzUzY35tdjJfZF8xNTA4XzEyMDBfc18yLnBuZy92MS9maXQvd182MTMsaF80ODcscV85MC9jMGJiYzVfMDFjMWMzNmJlYWExNDFhNDljODc1NzY2YjRjZGM1M2N+bXYyX2RfMTUwOF8xMjAwX3NfMi5wbmdcXFwiICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmVuc2VudGF0aW9uLXJpZ2h0IGNvbC1tZC02IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG14LWF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByZXNlbnRhdGlvbi10aXRsZSBoMlxcXCI+TCdBTkFMWVNFIEZBQ0lBTEUgQVUgU0VSVklDRSBEVSBNQVJRVUVUSU5HITwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByZXNlbnRhdGlvbi1kZXNjcmlwdGlvbiBmb250LXdlaWdodC1ib2xkXFxcIj5cXG4gICAgICAgICAgICAgICAgTm91cyBtZXR0b25zIGF1eCBzZXJ2aWNlcyBkZXMgZW50cmVwcmlzZXMgTCdpbnRlbGxpZ2VuY2UgYXJ0aWZpY2llbGxlIGFmaW4gZGUgbGV1clxcbiAgICAgICAgICAgICAgICBwZXJtZXR0cmUgZCcnw6lsYWJvcmVyIGxldXJzIHN0cmF0w6lnaWVzIG1hcmtldGluZyBldCBkJ8OpdmFsdWVyIGxlcyByw6lzdWx0YXRzIGRlXFxuICAgICAgICAgICAgICAgIGxldXJzIGNhbXBhZ25lcyBzdXIgbGUgdGVycmFpbiB0b3V0IGF1IGxvbmcgZGUgbCdhbm7DqWUgw6AgdHJhdmVycyBkZXNcXG4gICAgICAgICAgICAgICAgc3RhdGlzdGlxdWVzIGVuIHRlbXBzIHLDqWVsbGVzICFcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxsLXRvLWFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNoaWRkZXktcHJvZHVjdHNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhcmsgcm91bmRlZC1waWxsXFxcIj5TaG93IFByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2hpZGRleS5zY3NzXCI7XG5pbXBvcnQgXCIuL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCBcIi4vcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvblwiO1xuaW1wb3J0IFwiLi9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=