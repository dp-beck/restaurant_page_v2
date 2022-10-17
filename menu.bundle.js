"use strict";
(self["webpackChunkrestaurant_page_v2"] = self["webpackChunkrestaurant_page_v2"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _burrito_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burrito.jpeg */ "./src/burrito.jpeg");
/* harmony import */ var _coffee_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee.jpg */ "./src/coffee.jpg");
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");




const menuItems = [
    {
        name: "Kantian Burrito",
        description: "I can categorically state that this burrito is a necessary condition for the possibility of having a delicious eating experience.",
        photo: _burrito_jpeg__WEBPACK_IMPORTED_MODULE_0__
    },

    {
        name: "Aristotelian Java",
        description: "Ponder the nature of virtue with this dark roast.",
        photo: _coffee_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },

    {
        name: "Hegelian Cheeseburger",
        description: "If this deliciuos cheeseburge doesn't embody Absolute Spirit, I don't know what does!.",
        photo: _burger_jpg__WEBPACK_IMPORTED_MODULE_2__,
    },
];

function loadMenu() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Food for Thought");
    header.appendChild(headerNode);
    content.appendChild(header);

    menuItems.forEach(element => {
        addItem(element.name, element.description, element.photo);
    });

}

function addItem(name, description, photo) {
    const title = document.createElement('h2');
    const titleNode = document.createTextNode(name);
    title.appendChild(titleNode);

    const text = document.createElement('p');
    const textNode = document.createTextNode(description);
    text.appendChild(textNode);

    const image = document.createElement('img');
    image.setAttribute('src', photo);

    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(image);
}

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b26d70566532c1bfc590.jpg";

/***/ }),

/***/ "./src/burrito.jpeg":
/*!**************************!*\
  !*** ./src/burrito.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a24d44f35cb3273a1cc6.jpeg";

/***/ }),

/***/ "./src/coffee.jpg":
/*!************************!*\
  !*** ./src/coffee.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27d4fa9851436d1c9db4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNIO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBTztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQU07QUFDckIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdDQUFNO0FBQ3JCLEtBQUs7QUFDTDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2VfdjIvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVycml0byBmcm9tICcuL2J1cnJpdG8uanBlZyc7XG5pbXBvcnQgY29mZmVlIGZyb20gJy4vY29mZmVlLmpwZyc7XG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4vYnVyZ2VyLmpwZyc7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiS2FudGlhbiBCdXJyaXRvXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkkgY2FuIGNhdGVnb3JpY2FsbHkgc3RhdGUgdGhhdCB0aGlzIGJ1cnJpdG8gaXMgYSBuZWNlc3NhcnkgY29uZGl0aW9uIGZvciB0aGUgcG9zc2liaWxpdHkgb2YgaGF2aW5nIGEgZGVsaWNpb3VzIGVhdGluZyBleHBlcmllbmNlLlwiLFxuICAgICAgICBwaG90bzogYnVycml0b1xuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQXJpc3RvdGVsaWFuIEphdmFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUG9uZGVyIHRoZSBuYXR1cmUgb2YgdmlydHVlIHdpdGggdGhpcyBkYXJrIHJvYXN0LlwiLFxuICAgICAgICBwaG90bzogY29mZmVlLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSGVnZWxpYW4gQ2hlZXNlYnVyZ2VyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIklmIHRoaXMgZGVsaWNpdW9zIGNoZWVzZWJ1cmdlIGRvZXNuJ3QgZW1ib2R5IEFic29sdXRlIFNwaXJpdCwgSSBkb24ndCBrbm93IHdoYXQgZG9lcyEuXCIsXG4gICAgICAgIHBob3RvOiBidXJnZXIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVhZGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRm9vZCBmb3IgVGhvdWdodFwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTm9kZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGFkZEl0ZW0oZWxlbWVudC5uYW1lLCBlbGVtZW50LmRlc2NyaXB0aW9uLCBlbGVtZW50LnBob3RvKTtcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBhZGRJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwaG90bykge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyaXB0aW9uKTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKHRleHROb2RlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwaG90byk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==