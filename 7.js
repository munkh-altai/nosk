webpackJsonp([7],{

/***/ "./lambda/modules/agent/assets/views/theme/aside/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28a55680\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "lambda/modules/agent/assets/views/theme/aside/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28a55680", Component.options)
  } else {
    hotAPI.reload("data-v-28a55680", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['selectedLang'],
    name: "aside-login",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            credentials: {
                login: null,
                password: null
            },
            lambda: window.lambda
        };
    },

    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },
    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.isSuccess = false;
            this.isError = false;
            if (!this.loading) {
                this.loading = true;
                axios.post('/auth/login', this.credentials).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            _this.isSuccess = true;
                            setTimeout(function () {
                                window.location = data.path;
                            }, 600);
                        } else {
                            _this.isError = true;
                        }
                    }, 1000);
                }).catch(function (e) {
                    setTimeout(function () {
                        _this.loading = false;
                        _this.isError = true;
                    }, 1000);
                });
            }
        },
        switchLanguage: function switchLanguage(val) {
            this.selectedLang = val;
            localStorage.setItem("lang", val);
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28a55680\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-content" }, [
    _vm.lambda.logoText != ""
      ? _c("div", { staticClass: "logo with-text" }, [
          _c("img", { attrs: { src: _vm.lambda.logo, alt: "" } }),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.lambda.logoText))])
        ])
      : _c("div", { staticClass: "logo" }, [
          _c("img", { attrs: { src: _vm.lambda.logo, alt: "" } })
        ]),
    _vm._v(" "),
    _c("h2", [_vm._v(_vm._s(_vm.lang.loginTitle))]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "login-form",
        attrs: { id: "authForm", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-element input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.credentials.login,
                expression: "credentials.login"
              }
            ],
            attrs: {
              type: "text",
              disabled: _vm.loading,
              placeholder: _vm.lang.username
            },
            domProps: { value: _vm.credentials.login },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.credentials, "login", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "icon user" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-element input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.credentials.password,
                expression: "credentials.password"
              }
            ],
            attrs: {
              type: "password",
              disabled: _vm.loading,
              placeholder: _vm.lang.password
            },
            domProps: { value: _vm.credentials.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.credentials, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "icon pass" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-element" }, [
          _c("input", {
            staticClass: "checkbox",
            attrs: { type: "checkbox", id: "remember_me" }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "remember_me" } }, [
            _vm._v(_vm._s(_vm.lang.remember))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-element action" }, [
          _c(
            "button",
            {
              staticClass: "button",
              attrs: { id: "submit", disabled: _vm.loading }
            },
            [
              _c("span", { attrs: { id: "submitTxt" } }, [
                _vm._v(_vm._s(_vm.lang.login))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "loader" }, [
                _vm.loading
                  ? _c("div", { staticClass: "sk-fading-circle" }, [
                      _c("div", { staticClass: "sk-circle1 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle2 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle3 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle4 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle5 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle6 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle7 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle8 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle9 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle10 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle11 sk-circle" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "sk-circle12 sk-circle" })
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _c(
                "router-link",
                { staticClass: "forgot", attrs: { to: "/forgot" } },
                [_vm._v(_vm._s(_vm.lang.forgot))]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "msg" } }, [
      _vm.isSuccess
        ? _c("span", { staticClass: "success" }, [
            _vm._v(_vm._s(_vm.lang.loginSuccess))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isError
        ? _c("span", { staticClass: "error" }, [
            _vm._v(_vm._s(_vm.lang.loginError))
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28a55680", module.exports)
  }
}

/***/ })

});