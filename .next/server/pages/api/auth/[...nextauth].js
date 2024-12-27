"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/backend/callbacks/next-auth/customAuthorize.js":
/*!************************************************************!*\
  !*** ./src/backend/callbacks/next-auth/customAuthorize.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/prisma */ \"(api)/./src/utils/prisma.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst customAuthorize = async (credentials)=>{\n    const { email , password  } = credentials;\n    try {\n        const user = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (!user) {\n            throw new Error(\"Invalid credentials\");\n        }\n        const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n        if (!passwordMatch) {\n            throw new Error(\"Invalid credentials\");\n        }\n        const session = {\n            ...credentials,\n            name: user.name,\n            user: {\n                userId: user.id\n            }\n        };\n        return session;\n    } catch (error) {\n        console.log(error);\n        throw new Error(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customAuthorize);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYmFja2VuZC9jYWxsYmFja3MvbmV4dC1hdXRoL2N1c3RvbUF1dGhvcml6ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBQ1I7QUFFNUIsTUFBTUUsa0JBQWtCLE9BQU9DLGNBQWdCO0lBQzdDLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR0Y7SUFDNUIsSUFBSTtRQUNGLE1BQU1HLE9BQU8sTUFBTU4scUVBQXNCLENBQUM7WUFDeENRLE9BQU87Z0JBQUVKO1lBQU07UUFDakI7UUFFQSxJQUFJLENBQUNFLE1BQU07WUFDVCxNQUFNLElBQUlHLE1BQU0sdUJBQXVCO1FBQ3pDLENBQUM7UUFFRCxNQUFNQyxnQkFBZ0IsTUFBTVQscURBQWMsQ0FBQ0ksVUFBVUMsS0FBS0QsUUFBUTtRQUVsRSxJQUFJLENBQUNLLGVBQWU7WUFDbEIsTUFBTSxJQUFJRCxNQUFNLHVCQUF1QjtRQUN6QyxDQUFDO1FBRUQsTUFBTUcsVUFBVTtZQUNkLEdBQUdULFdBQVc7WUFDZFUsTUFBTVAsS0FBS08sSUFBSTtZQUNmUCxNQUFNO2dCQUNKUSxRQUFRUixLQUFLUyxFQUFFO1lBQ2pCO1FBQ0Y7UUFFQSxPQUFPSDtJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTSxJQUFJUCxNQUFNTyxNQUFNRyxPQUFPLEVBQUU7SUFDakM7QUFDRjtBQUVBLGlFQUFlakIsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtYm9pbGVyLXBsYXRlLy4vc3JjL2JhY2tlbmQvY2FsbGJhY2tzL25leHQtYXV0aC9jdXN0b21BdXRob3JpemUuanM/M2E0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL3V0aWxzL3ByaXNtYVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5jb25zdCBjdXN0b21BdXRob3JpemUgPSBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkTWF0Y2gpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHtcclxuICAgICAgLi4uY3JlZGVudGlhbHMsXHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb247XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUF1dGhvcml6ZTsiXSwibmFtZXMiOlsicHJpc21hIiwiYmNyeXB0IiwiY3VzdG9tQXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkVycm9yIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJzZXNzaW9uIiwibmFtZSIsInVzZXJJZCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/backend/callbacks/next-auth/customAuthorize.js\n");

/***/ }),

/***/ "(api)/./src/backend/callbacks/next-auth/googleAuthorize.js":
/*!************************************************************!*\
  !*** ./src/backend/callbacks/next-auth/googleAuthorize.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ googleAuthorize)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/prisma */ \"(api)/./src/utils/prisma.js\");\n\nasync function googleAuthorize({ session  }) {\n    const { email , name , image  } = session.user;\n    try {\n        const existingUser = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            // Sets userId to the session including default session data\n            session.user = {\n                ...session.user,\n                userId: existingUser.id\n            };\n        } else {\n            const newUser = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    email,\n                    name,\n                    profileImage: image\n                }\n            });\n            // Sets userId to the session including default session data\n            session.user = {\n                ...session.user,\n                userId: newUser.id\n            };\n        }\n    } catch (error) {\n        console.error(\"Error creating or retrieving user:\", error);\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYmFja2VuZC9jYWxsYmFja3MvbmV4dC1hdXRoL2dvb2dsZUF1dGhvcml6ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUVyQixlQUFlQyxnQkFBZ0IsRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFDekQsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdILFFBQVFJLElBQUk7SUFFM0MsSUFBSTtRQUNGLE1BQU1DLGVBQWUsTUFBTVAscUVBQXNCLENBQUM7WUFDaERTLE9BQU87Z0JBQUVOO1lBQU07UUFDakI7UUFFQSxJQUFJSSxjQUFjO1lBQ2hCLDREQUE0RDtZQUM1REwsUUFBUUksSUFBSSxHQUFHO2dCQUFFLEdBQUdKLFFBQVFJLElBQUk7Z0JBQUVJLFFBQVFILGFBQWFJLEVBQUU7WUFBQztRQUM1RCxPQUFPO1lBQ0wsTUFBTUMsVUFBVSxNQUFNWixpRUFBa0IsQ0FBQztnQkFDdkNjLE1BQU07b0JBQ0pYO29CQUNBQztvQkFDQVcsY0FBY1Y7Z0JBQ2hCO1lBQ0Y7WUFFQSw0REFBNEQ7WUFDNURILFFBQVFJLElBQUksR0FBRztnQkFBRSxHQUFHSixRQUFRSSxJQUFJO2dCQUFFSSxRQUFRRSxRQUFRRCxFQUFFO1lBQUM7UUFDdkQsQ0FBQztJQUNILEVBQUUsT0FBT0ssT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsc0NBQXNDQTtJQUN0RDtJQUVBLE9BQU9kO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtYm9pbGVyLXBsYXRlLy4vc3JjL2JhY2tlbmQvY2FsbGJhY2tzL25leHQtYXV0aC9nb29nbGVBdXRob3JpemUuanM/M2EzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJ0AvdXRpbHMvcHJpc21hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdvb2dsZUF1dGhvcml6ZSh7IHNlc3Npb24gfSkge1xyXG4gIGNvbnN0IHsgZW1haWwsIG5hbWUsIGltYWdlIH0gPSBzZXNzaW9uLnVzZXI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgLy8gU2V0cyB1c2VySWQgdG8gdGhlIHNlc3Npb24gaW5jbHVkaW5nIGRlZmF1bHQgc2Vzc2lvbiBkYXRhXHJcbiAgICAgIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCB1c2VySWQ6IGV4aXN0aW5nVXNlci5pZCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgcHJvZmlsZUltYWdlOiBpbWFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFNldHMgdXNlcklkIHRvIHRoZSBzZXNzaW9uIGluY2x1ZGluZyBkZWZhdWx0IHNlc3Npb24gZGF0YVxyXG4gICAgICBzZXNzaW9uLnVzZXIgPSB7IC4uLnNlc3Npb24udXNlciwgdXNlcklkOiBuZXdVc2VyLmlkIH07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIG9yIHJldHJpZXZpbmcgdXNlcjonLCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2Vzc2lvbjtcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ29vZ2xlQXV0aG9yaXplIiwic2Vzc2lvbiIsImVtYWlsIiwibmFtZSIsImltYWdlIiwidXNlciIsImV4aXN0aW5nVXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJwcm9maWxlSW1hZ2UiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/backend/callbacks/next-auth/googleAuthorize.js\n");

/***/ }),

/***/ "(api)/./src/backend/callbacks/next-auth/signInCallback.js":
/*!***********************************************************!*\
  !*** ./src/backend/callbacks/next-auth/signInCallback.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signInCallback)\n/* harmony export */ });\nasync function signInCallback(user) {\n    if (!user) {\n        return false;\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYmFja2VuZC9jYWxsYmFja3MvbmV4dC1hdXRoL3NpZ25JbkNhbGxiYWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxlQUFlQyxJQUFJLEVBQUU7SUFDL0MsSUFBSSxDQUFDQSxNQUFNO1FBQ1QsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQUVELE9BQU8sSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLWJvaWxlci1wbGF0ZS8uL3NyYy9iYWNrZW5kL2NhbGxiYWNrcy9uZXh0LWF1dGgvc2lnbkluQ2FsbGJhY2suanM/ZmFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaWduSW5DYWxsYmFjayh1c2VyKSB7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsic2lnbkluQ2FsbGJhY2siLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/backend/callbacks/next-auth/signInCallback.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backend_callbacks_next_auth_googleAuthorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/backend/callbacks/next-auth/googleAuthorize */ \"(api)/./src/backend/callbacks/next-auth/googleAuthorize.js\");\n/* harmony import */ var _backend_callbacks_next_auth_customAuthorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/backend/callbacks/next-auth/customAuthorize */ \"(api)/./src/backend/callbacks/next-auth/customAuthorize.js\");\n/* harmony import */ var _backend_callbacks_next_auth_signInCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/backend/callbacks/next-auth/signInCallback */ \"(api)/./src/backend/callbacks/next-auth/signInCallback.js\");\n\n\n\n\n\n\nconst options = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: _backend_callbacks_next_auth_customAuthorize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        })\n    ],\n    callbacks: {\n        session: _backend_callbacks_next_auth_googleAuthorize__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        signIn: _backend_callbacks_next_auth_signInCallback__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    database: process.env.DATABASE_URL,\n    secret: process.env.SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBQ0U7QUFFa0I7QUFDQTtBQUNGO0FBRXpFLE1BQU1NLFVBQVU7SUFDZEMsV0FBVztRQUNUTixpRUFBY0EsQ0FBQztZQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7UUFDQVgsc0VBQVdBLENBQUM7WUFDVlksYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDMUNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQUUsV0FBV2Ysb0ZBQWVBO1FBQzVCO0tBQ0Q7SUFDRGdCLFdBQVc7UUFDVEMsU0FBU2xCLG9GQUFlQTtRQUN4Qm1CLFFBQVFqQixtRkFBY0E7SUFDeEI7SUFDQWtCLFVBQVVkLFFBQVFDLEdBQUcsQ0FBQ2MsWUFBWTtJQUNsQ0MsUUFBUWhCLFFBQVFDLEdBQUcsQ0FBQ2dCLE1BQU07QUFDNUI7QUFFQSxpRUFBZTFCLGdEQUFRQSxDQUFDTSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy1ib2lsZXItcGxhdGUvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXHJcblxyXG5pbXBvcnQgZ29vZ2xlQXV0aG9yaXplIGZyb20gJ0AvYmFja2VuZC9jYWxsYmFja3MvbmV4dC1hdXRoL2dvb2dsZUF1dGhvcml6ZSdcclxuaW1wb3J0IGN1c3RvbUF1dGhvcml6ZSBmcm9tICdAL2JhY2tlbmQvY2FsbGJhY2tzL25leHQtYXV0aC9jdXN0b21BdXRob3JpemUnXHJcbmltcG9ydCBzaWduSW5DYWxsYmFjayBmcm9tICdAL2JhY2tlbmQvY2FsbGJhY2tzL25leHQtYXV0aC9zaWduSW5DYWxsYmFjaydcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAgYXV0aG9yaXplOiBjdXN0b21BdXRob3JpemUsXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBzZXNzaW9uOiBnb29nbGVBdXRob3JpemUsXHJcbiAgICBzaWduSW46IHNpZ25JbkNhbGxiYWNrLFxyXG4gIH0sXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChvcHRpb25zKVxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzIiwiZ29vZ2xlQXV0aG9yaXplIiwiY3VzdG9tQXV0aG9yaXplIiwic2lnbkluQ2FsbGJhY2siLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInNpZ25JbiIsImRhdGFiYXNlIiwiREFUQUJBU0VfVVJMIiwic2VjcmV0IiwiU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/utils/prisma.js":
/*!*****************************!*\
  !*** ./src/utils/prisma.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// import { PrismaClient } from '../../node_modules/@prisma/client'\n\nconst prisma = global.prisma || (()=>{\n    const client = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: [\n            \"query\"\n        ]\n    });\n    // Automatically disconnect the Prisma client after each request\n    client.$on(\"beforeExit\", async ()=>{\n        await client.$disconnect();\n    });\n    // Assign the Prisma client to the global object\n    // to prevent duplicate client instances\n    if (true) global.prisma = client;\n    return client;\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1FQUFtRTtBQUN0QjtBQUU3QyxNQUFNQyxTQUNKQyxPQUFPRCxNQUFNLElBQ2IsQ0FBQyxJQUFNO0lBQ0wsTUFBTUUsU0FBUyxJQUFJSCx3REFBWUEsQ0FBQztRQUM5QkksS0FBSztZQUFDO1NBQVE7SUFDaEI7SUFFQSxnRUFBZ0U7SUFDaEVELE9BQU9FLEdBQUcsQ0FBQyxjQUFjLFVBQVk7UUFDbkMsTUFBTUYsT0FBT0csV0FBVztJQUMxQjtJQUVBLGdEQUFnRDtJQUNoRCx3Q0FBd0M7SUFDeEMsSUFBSUMsSUFBeUIsRUFBY0wsT0FBT0QsTUFBTSxHQUFHRTtJQUUzRCxPQUFPQTtBQUNUO0FBRUYsaUVBQWVGLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLWJvaWxlci1wbGF0ZS8uL3NyYy91dGlscy9wcmlzbWEuanM/Mjc5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hID1cclxuICBnbG9iYWwucHJpc21hIHx8XHJcbiAgKCgpID0+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgICBsb2c6IFsncXVlcnknXSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF1dG9tYXRpY2FsbHkgZGlzY29ubmVjdCB0aGUgUHJpc21hIGNsaWVudCBhZnRlciBlYWNoIHJlcXVlc3RcclxuICAgIGNsaWVudC4kb24oJ2JlZm9yZUV4aXQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGNsaWVudC4kZGlzY29ubmVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXNzaWduIHRoZSBQcmlzbWEgY2xpZW50IHRvIHRoZSBnbG9iYWwgb2JqZWN0XHJcbiAgICAvLyB0byBwcmV2ZW50IGR1cGxpY2F0ZSBjbGllbnQgaW5zdGFuY2VzXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IGNsaWVudFxyXG5cclxuICAgIHJldHVybiBjbGllbnQ7XHJcbiAgfSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiY2xpZW50IiwibG9nIiwiJG9uIiwiJGRpc2Nvbm5lY3QiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();