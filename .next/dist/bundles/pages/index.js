module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1210px;\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: 1210px;\n  margin: 0 auto;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./components/DefaultButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 9px 18px;\n  border-radius: 4px;\n  background-color: #D3D5E4;\n  text-decoration: none;\n  cusor: pointer;\n  font-size: 16px;\n"], ["\n  display: inline-block;\n  padding: 9px 18px;\n  border-radius: 4px;\n  background-color: #D3D5E4;\n  text-decoration: none;\n  cusor: pointer;\n  font-size: 16px;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var DefaultButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (DefaultButton);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/liyaganeyeva/Documents/apptrade/components/Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'footer',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                'hohohohohohohoho'
            );
        }
    }]);

    return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__("./components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = '/Users/liyaganeyeva/Documents/apptrade/components/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 56px;\n  z-index: 99;\n  background-color: #D3D5E4;\n  display: flex;\n  color: #535456;\n'], ['\n  width: 100%;\n  height: 56px;\n  z-index: 99;\n  background-color: #D3D5E4;\n  display: flex;\n  color: #535456;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 13px 15px;\n  float: left;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  display: inline-block;\n'], ['\n  padding: 13px 15px;\n  float: left;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-size: 16px;  \n  text-decoration: none;\n  color: #535456;\n  padding: 16px 20px;\n  float: right;\n'], ['\n  display: inline-block;\n  font-size: 16px;  \n  text-decoration: none;\n  color: #535456;\n  padding: 16px 20px;\n  float: right;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    float: left;\n'], ['\n    float: left;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var HeaderWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.header(_templateObject);

var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);

var MenuLink = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a(_templateObject3);

var LeftMenuLink = MenuLink.extend(_templateObject4);
/*const Button = styled.button`
  font-size: ${({ big }) => (big ? 3 : 1)}em;
`;

// it is bad because big prop will be passed to dom
const ButtonLink = Button.withComponent('a').extend`
    //style
`;
const ButtonLinkBig = Button.withComponent(({ big, ...props }) => <a {...props} />).extend`
    //style
`;

//use only in emergency case
const StyledButtonLink = styled(({ color, big, ...props }) => <ButtonLink {...props} />)`
    color: ${({ color }) => color};
`;*/

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                HeaderWrapper,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__Container__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Logo,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        'Logotype'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                        { prefetch: true, href: '#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            LeftMenuLink,
                            { href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 61
                                }
                            },
                            'Buy Apps'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                        { prefetch: true, href: '#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            MenuLink,
                            { href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            'Log In'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                        { prefetch: true, href: '#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            MenuLink,
                            { href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            },
                            'Sign Up'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                        { prefetch: true, href: '#', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            MenuLink,
                            { href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            },
                            'FAQ'
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = '/Users/liyaganeyeva/Documents/apptrade/components/Layout.js';





var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'title',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                'Title'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compitable', content: 'IE-edge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }),
        props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/MainPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__("./components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DefaultButton__ = __webpack_require__("./components/DefaultButton.js");
var _jsxFileName = '/Users/liyaganeyeva/Documents/apptrade/components/MainPage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n       background-color: #F6F7FA;\n       height: 360px;\n       padding: 80px 15px;\n       color: #373A3C;\n       font-size: 16px;\n       line-height: 1.5;\n    '], ['\n       background-color: #F6F7FA;\n       height: 360px;\n       padding: 80px 15px;\n       color: #373A3C;\n       font-size: 16px;\n       line-height: 1.5;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      font-size: 40px;\n      font-weight: 600;\n      margin-bottom: 8px;\n    '], ['\n      font-size: 40px;\n      font-weight: 600;\n      margin-bottom: 8px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin-top: 30px;\n'], ['\n    margin-top: 30px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Banner = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div(_templateObject);

var Heading = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.h1(_templateObject2);

var MainPageButton = __WEBPACK_IMPORTED_MODULE_5__DefaultButton__["a" /* default */].extend(_templateObject3);

var MainPage = function (_Component) {
    _inherits(MainPage, _Component);

    function MainPage() {
        _classCallCheck(this, MainPage);

        return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
    }

    _createClass(MainPage, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Banner,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__Container__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            Heading,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                }
                            },
                            'The easiest way to buy & sell Apps securely'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                }
                            },
                            'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content.'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                MainPageButton,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 39
                                    }
                                },
                                'Get started'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                MainPageButton,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                'How it works'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MainPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MainPage);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_MainPage__ = __webpack_require__("./components/MainPage.js");
var _jsxFileName = '/Users/liyaganeyeva/Documents/apptrade/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    body{\n        margin: 0;\n        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n        font-size: 14px;\n        font-weight: normal;\n        position: relative;\n        line-height: 1.4;\n    }\n   \n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    \n    img{\n        max-width: 100%;\n    }\n'], ['\n    body{\n        margin: 0;\n        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n        font-size: 14px;\n        font-weight: normal;\n        position: relative;\n        line-height: 1.4;\n    }\n   \n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    \n    img{\n        max-width: 100%;\n    }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








Object(__WEBPACK_IMPORTED_MODULE_4_styled_components__["injectGlobal"])(_templateObject);

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.timer = this.props.startClock();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_MainPage__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            });
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var store = _ref.store,
                isServer = _ref.isServer;

            store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store__["c" /* serverRenderClock */])(isServer));
            store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* addCount */])());

            return { isServer: isServer };
        }
    }]);

    return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addCount: Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* addCount */], dispatch),
        startClock: Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__store__["d" /* startClock */], dispatch)
    };
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_2__store__["b" /* initStore */], null, mapDispatchToProps)(Counter));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);




var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'

  // REDUCERS
};var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 1000);
  };
};

var addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map