webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/Service.js":
/*!**************************!*\
  !*** ./utils/Service.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactService; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();

var url = 'https://md-contact.now.sh';

var ContactService =
/*#__PURE__*/
function () {
  function ContactService(domain) {
    _classCallCheck(this, ContactService);

    this.domain = "".concat(url, "/").concat(domain);
  }

  _createClass(ContactService, [{
    key: "getAll",
    value: function getAll() {
      return this.call(this.domain, 'GET').then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "single",
    value: function single(id) {
      return this.call("".concat(this.domain, "/").concat(id), 'GET').then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "save",
    value: function save(data) {
      return this.call(this.domain, 'POST', {
        'content-type': 'application/json'
      }, data).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "update",
    value: function update(id, data) {
      console.log(data);
      return this.call("".concat(this.domain, "/").concat(id), 'PUT', {
        'content-type': 'application/json'
      }, data).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "call",
    value: function call(api, type, options, data) {
      var init = {
        method: type,
        headers: options,
        mode: 'cors',
        body: JSON.stringify(data)
      };
      var request = new Request(api, init);
      return new Promise(function (resolve, reject) {
        fetch(request).then(function (res) {
          return res.json();
        }).then(function (response) {
          console.log(response);
          resolve(response);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }]);

  return ContactService;
}();



/***/ })

})
//# sourceMappingURL=index.js.ecc0e7af03d2a9034c8f.hot-update.js.map