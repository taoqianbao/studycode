/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Main = undefined;\n\nvar _notifications = __webpack_require__(1);\n\nvar _child = __webpack_require__(2);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Main = exports.Main = function Main() {\n    _classCallCheck(this, Main);\n\n    _notifications.notifications.add('yolo 1 from main');\n\n    // create new children\n    // (they send messages in constructor)\n    var child1 = new _child.Child('le child 1');\n    var child2 = new _child.Child('le child 2');\n\n    // send second message from main\n    _notifications.notifications.add('yolo 2 from main');\n};\n\n// boostrap\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n    return new Main();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXM2LW1vZHVsZS1zaW5nbGUtaW5zdGFuY2UvbWFpbi5qcz8zMDNjIl0sIm5hbWVzIjpbIk1haW4iLCJhZGQiLCJjaGlsZDEiLCJjaGlsZDIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7Ozs7SUFJYUEsSSxXQUFBQSxJLEdBQ1QsZ0JBQWM7QUFBQTs7QUFDVixpQ0FBY0MsR0FBZCxDQUFrQixrQkFBbEI7O0FBRUE7QUFDQTtBQUNBLFFBQUlDLFNBQVMsaUJBQVUsWUFBVixDQUFiO0FBQ0EsUUFBSUMsU0FBUyxpQkFBVSxZQUFWLENBQWI7O0FBRUE7QUFDQSxpQ0FBY0YsR0FBZCxDQUFrQixrQkFBbEI7QUFDSCxDOztBQUdMOzs7QUFDQUcsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNDLENBQUQ7QUFBQSxXQUFPLElBQUlOLElBQUosRUFBUDtBQUFBLENBQTlDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5vdGlmaWNhdGlvbnMsXG4gICAgbm90aWZpY2F0aW9uc1xufSBmcm9tIFwiLi9ub3RpZmljYXRpb25zLmpzXCI7XG5pbXBvcnQge1xuICAgIENoaWxkXG59IGZyb20gXCIuL2NoaWxkLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbm90aWZpY2F0aW9ucy5hZGQoJ3lvbG8gMSBmcm9tIG1haW4nKTtcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkcmVuXG4gICAgICAgIC8vICh0aGV5IHNlbmQgbWVzc2FnZXMgaW4gY29uc3RydWN0b3IpXG4gICAgICAgIGxldCBjaGlsZDEgPSBuZXcgQ2hpbGQoJ2xlIGNoaWxkIDEnKTtcbiAgICAgICAgbGV0IGNoaWxkMiA9IG5ldyBDaGlsZCgnbGUgY2hpbGQgMicpO1xuXG4gICAgICAgIC8vIHNlbmQgc2Vjb25kIG1lc3NhZ2UgZnJvbSBtYWluXG4gICAgICAgIG5vdGlmaWNhdGlvbnMuYWRkKCd5b2xvIDIgZnJvbSBtYWluJyk7XG4gICAgfVxufVxuXG4vLyBib29zdHJhcFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IG5ldyBNYWluKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi1tb2R1bGUtc2luZ2xlLWluc3RhbmNlL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Notifications = exports.Notifications = function () {\n    function Notifications() {\n        _classCallCheck(this, Notifications);\n\n        this.messages = [];\n    }\n\n    _createClass(Notifications, [{\n        key: 'add',\n        value: function add(message) {\n            this.messages.push(message);\n\n            // debug\n            document.write('<p>' + this.messages.length + ' - ' + message + '</p>');\n            console.log('messages', this.messages);\n        }\n    }]);\n\n    return Notifications;\n}();\n\nvar notifications = exports.notifications = new Notifications();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXM2LW1vZHVsZS1zaW5nbGUtaW5zdGFuY2Uvbm90aWZpY2F0aW9ucy5qcz9mODQ0Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbnMiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJwdXNoIiwiZG9jdW1lbnQiLCJ3cml0ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJub3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLGEsV0FBQUEsYTtBQUVULDZCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVHQyxPLEVBQVM7QUFDVCxpQkFBS0QsUUFBTCxDQUFjRSxJQUFkLENBQW1CRCxPQUFuQjs7QUFFQTtBQUNBRSxxQkFBU0MsS0FBVCxTQUFxQixLQUFLSixRQUFMLENBQWNLLE1BQW5DLFdBQStDSixPQUEvQztBQUNBSyxvQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0IsS0FBS1AsUUFBN0I7QUFDSDs7Ozs7O0FBR0UsSUFBSVEsd0NBQWdCLElBQUlULGFBQUosRUFBcEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgfVxuXG4gICAgYWRkKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXG4gICAgICAgIC8vIGRlYnVnXG4gICAgICAgIGRvY3VtZW50LndyaXRlKGA8cD4ke3RoaXMubWVzc2FnZXMubGVuZ3RofSAtICR7bWVzc2FnZX08L3A+YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlcycsIHRoaXMubWVzc2FnZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYtbW9kdWxlLXNpbmdsZS1pbnN0YW5jZS9ub3RpZmljYXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Child = undefined;\n\nvar _notifications = __webpack_require__(1);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Child = exports.Child = function Child(name) {\n    _classCallCheck(this, Child);\n\n    this.name = name;\n\n    _notifications.notifications.add('yolo from ' + this.name);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXM2LW1vZHVsZS1zaW5nbGUtaW5zdGFuY2UvY2hpbGQuanM/NTUzOCJdLCJuYW1lcyI6WyJDaGlsZCIsIm5hbWUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQUlhQSxLLFdBQUFBLEssR0FFVCxlQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaOztBQUVBLGlDQUFjQyxHQUFkLENBQWtCLGVBQWUsS0FBS0QsSUFBdEM7QUFDSCxDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIG5vdGlmaWNhdGlvbnNcbn0gZnJvbSBcIi4vbm90aWZpY2F0aW9ucy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2hpbGQge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbnMuYWRkKCd5b2xvIGZyb20gJyArIHRoaXMubmFtZSlcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYtbW9kdWxlLXNpbmdsZS1pbnN0YW5jZS9jaGlsZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);