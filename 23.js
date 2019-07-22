webpackJsonp([23],{

/***/ "./apps/Nosk/front-end/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Nosk/front-end/src/pages/System/Profile_.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_dropdowns__ = __webpack_require__("./node_modules/vue-dropdowns/Dropdown.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_dropdowns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_dropdowns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

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
    data: function data() {
        return {
            editMode: true,
            loading: true
        };
    },
    mounted: function mounted() {

        // this.callProfile();
    },

    methods: {
        methodToRunOnSelect: function methodToRunOnSelect(payload) {
            this.object = payload;
        },
        callProfile: function callProfile() {
            var _this = this;

            if (this.userLogged) {
                setTimeout(function () {
                    _this.loading = false;
                    _this.$refs.form.editModel(_this.userProfile.profile_id);
                }, 1000);
            }
        },
        onSuccess: function onSuccess(val) {
            var _this2 = this;

            // this.$Message.success('Амжилттай хадгалагдлаа');
            this.$http.get('/api/account').then(function (_ref) {
                var data = _ref.data;

                _this2.$cookies.set('user', data);
                _this2.$store.commit("setUser", data);
            });
        },
        onError: function onError(val) {}
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])({
        userLogged: "userLogged",
        userProfile: "userProfile"

    })),
    watch: {
        userLogged: function userLogged(value, old) {
            if (value && !old) {
                // this.callProfile();
            }
        }
    }
});

/***/ }),

/***/ "./apps/Nosk/front-end/src/pages/System/Profile_.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./apps/Nosk/front-end/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Nosk/front-end/src/pages/System/Profile_.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00d1da71\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Nosk/front-end/src/pages/System/Profile_.vue")
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
Component.options.__file = "apps/Nosk/front-end/src/pages/System/Profile_.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00d1da71", Component.options)
  } else {
    hotAPI.reload("data-v-00d1da71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00d1da71\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Nosk/front-end/src/pages/System/Profile_.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.loading
      ? _c(
          "div",
          {
            staticStyle: {
              margin: "50px auto",
              "text-align": "center",
              width: "50px"
            }
          },
          [_c("Spin", { attrs: { size: "large" } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00d1da71", module.exports)
  }
}

/***/ })

});