webpackJsonp([20],{

/***/ "./apps/Control/assets/moqup_view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__("./node_modules/iview/dist/iview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_mn_MN__ = __webpack_require__("./node_modules/iview/dist/locale/mn-MN.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_mn_MN___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_mn_MN__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_moqup_moqup__ = __webpack_require__("./apps/Control/assets/pages/moqup/moqup.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_moqup_moqup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_moqup_moqup__);







window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_iview___default.a, { locale: __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_mn_MN___default.a });

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#moqup',
    extends: __WEBPACK_IMPORTED_MODULE_4__pages_moqup_moqup___default.a
});

/***/ }),

/***/ "./apps/Control/assets/pages/moqup/moqup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Control/assets/pages/moqup/moqup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ded5d9f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Control/assets/pages/moqup/moqup.vue")
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
Component.options.__file = "apps/Control/assets/pages/moqup/moqup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ded5d9f", Component.options)
  } else {
    hotAPI.reload("data-v-6ded5d9f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Control/assets/pages/moqup/moqup.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {

        return {
            url: ''
        };
    },

    methods: {},
    mounted: function mounted() {

        this.url = window.init.url;
    }
});

/***/ }),

/***/ "./node_modules/iview/dist/locale/mn-MN.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__("./node_modules/vue/dist/vue.common.js")):"function"==typeof define&&define.amd?define("iview/locale",["vue"],t):"object"==typeof exports?exports["iview/locale"]=t(require("vue")):e["iview/locale"]=t(e.Vue)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/locale/",o(o.s=15)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){i||void 0!==window.iview&&("langs"in iview||(iview.langs={}),iview.langs[e.i.locale]=e)};var n,r=o(1);var i=((n=r)&&n.__esModule?n:{default:n}).default.prototype.$isServer},1:function(t,o){t.exports=e},15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=o(0);var i={i:{locale:"mn-MN",select:{placeholder:"Сонгох",noMatch:"Таарах өгөгдөл байхгүй байна",loading:"Ачааллаж байна"},table:{noDataText:"Өгөгдөл алга",noFilteredDataText:"No filter data",confirmFilter:"Батлах",resetFilter:"Шинээр тохируулах",clearFilter:"Бүгд"},datepicker:{selectDate:"Огноо сонгох",selectTime:"Цаг сонгох",startTime:"Эхлэх Цаг",endTime:"Дуусах Цаг",clear:"Цэвэрлэх",ok:"OK",datePanelLabel:"[mmmm] [yyyy]",month:"Сар",month1:"1-р сар",month2:"2-р сар",month3:"3-р сар",month4:"4-р сар",month5:"5-р сар",month6:"6-р сар",month7:"7-р сар",month8:"8-р сар",month9:"9-р сар",month10:"10-р сар",month11:"11-р сар",month12:"12-р сар",year:"Жил",weekStartDay:"0",weeks:{sun:"Ням",mon:"Дав",tue:"Мяг",wed:"Лха",thu:"Пүр",fri:"Баа",sat:"Бяа"},months:{m1:"1-р сар",m2:"2-р сар",m3:"3-р сар",m4:"4-р сар",m5:"5-р сар",m6:"6-р сар",m7:"7-р сар",m8:"8-р сар",m9:"9-р сар",m10:"10-р сар",m11:"11-р сар",m12:"12-р сар"}},transfer:{titles:{source:"Эх сурвалж",target:"Оноох бай"},filterPlaceholder:"Эндээс хайх",notFoundText:"Олдсонгүй"},modal:{okText:"OK",cancelText:"Болих"},poptip:{okText:"OK",cancelText:"Болих"},page:{prev:"Өмнөх хуудас",next:"Дараах хуудас",total:"Нийт",item:"зүйл",items:"зүйлүүд",prev5:"Өмнөх 5 хуудас",next5:"Дараагийн 5 хуудас",page:"/хуудсанд",goto:"Очих хуудас",p:""},rate:{star:"Од",stars:"Одууд"},tree:{emptyText:"Өгөгдөл алга"}}};(0,((n=r)&&n.__esModule?n:{default:n}).default)(i),t.default=i}})});
//# sourceMappingURL=mn-MN.js.map

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ded5d9f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Control/assets/pages/moqup/moqup.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("moqup", { attrs: { src: _vm.url, disable_preview: true } })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ded5d9f", module.exports)
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./apps/Control/assets/moqup_view.js");


/***/ })

},[2]);