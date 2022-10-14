"use strict";
(self["webpackChunkrestaurant_page_v2"] = self["webpackChunkrestaurant_page_v2"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _food_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpeg */ "./src/food.jpeg");


function loadHome() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Welcome to my Restaurant!");
    header.appendChild(headerNode);

    const image = document.createElement('img');
    image.setAttribute("src", _food_jpeg__WEBPACK_IMPORTED_MODULE_0__);

    const text = document.createElement('p');
    const copyNode = document.createTextNode('Lorem Ipsum. Sic Transit Gloria.');
    text.appendChild(copyNode);


    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(text);
}


/***/ }),

/***/ "./src/food.jpeg":
/*!***********************!*\
  !*** ./src/food.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a24d44f35cb3273a1cc6.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRWhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix1Q0FBSTs7QUFFbEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZV92Mi8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb29kIGZyb20gJy4vZm9vZC5qcGVnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoZWFkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXZWxjb21lIHRvIG15IFJlc3RhdXJhbnQhXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOb2RlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZvb2QpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjb3B5Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMb3JlbSBJcHN1bS4gU2ljIFRyYW5zaXQgR2xvcmlhLicpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoY29weU5vZGUpO1xuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==