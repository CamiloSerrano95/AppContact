webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/ContactProvider.js":
/*!**********************************!*\
  !*** ./utils/ContactProvider.js ***!
  \**********************************/
/*! exports provided: ContactContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactContext", function() { return ContactContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service */ "./utils/Service.js");
var _jsxFileName = "/home/camilo/Desktop/contact-app/utils/ContactProvider.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Contact = new _Service__WEBPACK_IMPORTED_MODULE_2__["default"]('informationPerson');
var ContactContext = new react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

var ContactProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactProvider, _Component);

  function ContactProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContactProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      contacts: [],
      message: null,
      success: false
    });

    return _this;
  }

  _createClass(ContactProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Contact.getAll().then(function (contacts) {
        return _this2.setState({
          contacts: contacts
        });
      });
    }
  }, {
    key: "save",
    value: function save(e) {
      e.preventDefault();
      console.log('save');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          contacts = _this$state.contacts,
          message = _this$state.message,
          success = _this$state.success;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactContext.Provider, {
        value: {
          contacts: contacts,
          message: message,
          success: success,
          save: rhis.save.bind(this)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return ContactProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.875326ed553a50179e27.hot-update.js.map