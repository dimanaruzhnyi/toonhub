/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Element.prototype.matches
 *
 * @author Ryan Hefner <hi@ryanhefner.com>
 */



module.exports = (function() {
    if (Element && !Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector
            || Element.prototype.webkitMatchesSelector
            || Element.prototype.mozMatchesSelector
            || Element.prototype.msMatchesSelector
            || Element.prototype.oMatchesSelector;
    }
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

document.addEventListener("DOMContentLoaded", function () {

  // // AUTHENTIFICATION MODAL
  // const openAccount = document.querySelector('.auth');
  // const authModal = document.querySelector("#authentification");
  //
  // if (openAccount) {
  //     openAccount.addEventListener("click", () => {
  //         if (authModal) {
  //             authModal.classList.add("open");
  //         }
  //     });
  //
  //     if (authModal) {
  //         const authModalOverlay = authModal.querySelector(".modal__overlay");
  //
  //         authModalOverlay.addEventListener("click", () => {
  //             authModal.classList.remove("open");
  //         });
  //     }
  // }
  //
  // // AUTHENTIFICATION FORM
  // const form = document.querySelector("#authentification-form");
  // const forgotPasswordButton = document.querySelector("#forgot-password");
  //
  // if (form) {
  //     form.addEventListener("submit", handleAuthFormSubmit);
  // }
  //
  // if (forgotPasswordButton) {
  //     forgotPasswordButton.addEventListener("click", handleForgotPasswordClick);
  // }
  //
  // // ADULT SWITCHER
  // const adultSwitcher = document.querySelector(".adult-switcher");
  //
  // if (adultSwitcher) {
  //     adultSwitcher.addEventListener("click", function() {
  //         const adultCookie = getCookie("adult");
  //
  //         (!adultCookie || adultCookie === 0)
  //             ? setCookie("adult", 1, 365)
  //             : eraseCookie("adult");
  //
  //         this.classList.toggle("active");
  //     });
  // }
  //
  // // SWIPER
  // const sliders = document.querySelectorAll(".swiper-container");
  //
  // if (sliders.length > 0) {
  //     sliders.forEach((slider) => {
  //         if (slider.querySelector(".swiper-wrapper")) { // Validate structure
  //             const swiper = new Swiper(slider, {
  //                 loop: false,
  //                 slidesPerView: 1,
  //                 pagination: {
  //                     el: slider.querySelector(".swiper-pagination"), // Relative selector
  //                     clickable: true,
  //                 }
  //             });
  //         } else {
  //             console.warn("Invalid swiper-container structure:", slider);
  //         }
  //     });
  // }
  //
  // // REUSABLE FUNCTIONS
  // function setCookie(name, value, days) {
  //     let expires = "";
  //
  //     if (days) {
  //         var date = new Date();
  //         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  //         expires = "; expires=" + date.toUTCString();
  //     }
  //
  //     document.cookie = name + "=" + (value || "") + expires + "; path=/";
  // }
  //
  // function getCookie(name) {
  //     let nameEQ = name + "=";
  //     let ca = document.cookie.split(';');
  //
  //     for (var i = 0; i < ca.length; i++) {
  //         var c = ca[i];
  //         while (c.charAt(0) == " ") c = c.substring(1, c.length);
  //         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  //     }
  //
  //     return null;
  // }
  //
  // function eraseCookie(name) {
  //     document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  // }
  //
  // function displayError(message) {
  //     const errorDiv = document.querySelector(".error");
  //     if (errorDiv) {
  //         errorDiv.textContent = message;
  //         errorDiv.style.display = "block";
  //     }
  // }
  //
  // function generateRandomPassword(length) {
  //     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  //     let password = "";
  //     for (let i = 0; i < length; i++) {
  //         password += charset.charAt(Math.floor(Math.random() * charset.length));
  //     }
  //     return password;
  // }
  //
  // async function makeApiRequest(url, data) {
  //     try {
  //         const response = await fetch(url, {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(data),
  //         });
  //
  //         const responseData = await response.json();
  //         return responseData;
  //     } catch (error) {
  //         console.error("Error:", error);
  //         displayError("Something went wrong. Please try again.");
  //         return null;
  //     }
  // }
  //
  // async function handleAuthFormSubmit(e) {
  //     e.preventDefault();
  //
  //     const input = document.querySelector('#username').value.trim();
  //     const password = document.querySelector('#password').value.trim();
  //
  //     if (!input || !password) {
  //         displayError('Both username/email and password are required.');
  //         return;
  //     }
  //
  //     const data = { action: "login", input, password };
  //     console.log('Sending data:', data);
  //
  //     try {
  //         const responseData = await makeApiRequest('/wp-json/traffband/v1/auth', data);
  //         console.log('Received response:', responseData);
  //
  //         // Заменили оператор ?. на обычные проверки
  //         if (responseData && responseData.message === 'Login successful') {
  //             window.location.reload();
  //         } else {
  //             displayError(`Error: ${responseData && responseData.message || 'Unknown error'}`);
  //         }
  //     } catch (error) {
  //         console.error('Request error:', error);
  //     }
  // }
  //
  // async function handleForgotPasswordClick() {
  //     const input = document.querySelector('#username').value.trim();
  //
  //     if (!input) {
  //         displayError('Please enter your username/email to recover the password.');
  //         return;
  //     }
  //
  //     const newPassword = generateRandomPassword(16);
  //     const data = { action: "forgot", input, newPassword };
  //
  //     const responseData = await makeApiRequest('/wp-json/traffband/v1/forgot-password', data);
  //
  //     // Заменили оператор ?. на обычные проверки
  //     if (responseData && responseData.message) {
  //         displayError(responseData.message);
  //     } else {
  //         displayError(`Error: ${responseData && responseData.message || 'Unknown error'}`);
  //     }
  // }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _files = __webpack_require__(6);

var _files2 = _interopRequireDefault(_files);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var nav = document.createElement("div");
  var style = document.createElement("style");
  var button = document.createElement("button");
  var wrapper = document.createElement("div");
  wrapper.appendChild(button);
  wrapper.appendChild(nav);
  wrapper.className = "helper-nav-wrapper";
  button.innerHTML = "Open pages list";
  button.className = "helper-nav-button";
  nav.className = "helper-nav";
  style.innerHTML = ".helper-nav a:hover {\n      color:#fff;\n      background-color:#000;\n    }\n    .helper-nav a {\n      display:block;\n      color: #000;\n      padding: 3px;\n      margin:0\n    }\n    .helper-nav-button {\n      background: #000;\n      color: #fff;\n      padding: 5px;\n      font-weight: 300;\n      font-size: 12px;\n      border: none;\n      border-radius: 3px 0 0 0;\n      cursor: pointer;\n    }\n    .helper-nav-wrapper {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      font-family: monospace;\n      z-index: 9999;\n      text-align: right;\n      font-size: 14px;\n    }\n    .helper-nav {\n      text-align: left;\n      background-color: #fff;\n      border: 1px solid #000;\n      padding: 3px;\n      boxShadow: 0 0 40px 0 rgba(0,0,0,.2);\n      max-height: 300px;\n      overflow-y: auto;\n    }\n    @media all and (max-width:1024px) {\n      .helper-nav {\n        height: 160px;\n        overflow-y: scroll;\n      }\n    }";
  document.head.appendChild(style);
  if (_files2.default.length <= 2) {
    return;
  }

  for (var i = 1; i < _files2.default.length; i++) {
    nav.innerHTML += "<a href=\"/toonhub/" + _files2.default[i] + "\">" + i + "-" + _files2.default[i] + "</a>";
    // nav.innerHTML += `<a href="/${files[i]}">${i}-${files[i]}</a>`;
  }
  document.body.appendChild(wrapper);
  var flag = localStorage.getItem("flag") ? JSON.parse(localStorage.getItem("flag")) : false;
  var display = flag ? "block" : "none";
  var btnText = flag ? "Close pages list" : "Open pages list";
  nav.style.display = display;
  button.innerHTML = btnText;

  function toggleNav() {
    if (flag) {
      nav.style.display = "none";
      button.innerHTML = "Open pages list";
    } else {
      nav.style.display = "block";
      button.innerHTML = "Close pages list";
    }
    flag = !flag;
    localStorage.setItem("flag", flag);
  }
  document.addEventListener("keyup", function (e) {
    if (e.type === "keyup" && e.ctrlKey && e.keyCode === 88) {
      toggleNav();
    }
  });
  button.addEventListener("click", toggleNav);
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["dev", "account.html", "category.html", "comics-view.html", "contacts.html", "faq.html", "forgot.html", "home.html", "index.html", "payment-page.html", "popup-2.html", "popup-3.html", "popup-4.html", "popup-5.html", "popup-6.html", "popup.html", "privacy.html", "terms.html"];

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map