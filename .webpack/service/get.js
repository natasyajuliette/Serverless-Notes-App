(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./get.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./get.js":
/*!****************!*\
  !*** ./get.js ***!
  \****************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/dynamodb-lib */ "./libs/dynamodb-lib.js");
/* harmony import */ var _libs_response_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/response-lib */ "./libs/response-lib.js");



async function main(event, context, callback) {
	const params = {
		TableName: "notes",
		Key: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: event.pathParameters.id
		}
	};

	try {
		const result = await _libs_dynamodb_lib__WEBPACK_IMPORTED_MODULE_0__["call"]("get", params);
		if (result.Item) {
			callback(null, Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["success"])(result.Item));
		} else {
			callback(null, Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["failure"])({ status: false, error: "Item not found" }));
		}
	} catch (e) {
		callback(null, Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_1__["failure"])({ status: false }));
	}
}

/***/ }),

/***/ "./libs/dynamodb-lib.js":
/*!******************************!*\
  !*** ./libs/dynamodb-lib.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);


aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({ region: "us-west-2" });

function call(action, params) {
	const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();

	return dynamoDb[action](params).promise();
}

/***/ }),

/***/ "./libs/response-lib.js":
/*!******************************!*\
  !*** ./libs/response-lib.js ***!
  \******************************/
/*! exports provided: success, failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
function success(body) {
	return buildResponse(200, body);
}

function failure(body) {
	return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
	return {
		statusCode: statusCode,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": "true"
		},
		body: JSON.stringify(body)
	};
}

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ })

/******/ })));
//# sourceMappingURL=get.js.map