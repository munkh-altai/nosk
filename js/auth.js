webpackJsonp([13],{

/***/ "./lambda/modules/agent/assets/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_router__ = __webpack_require__("./lambda/modules/agent/assets/auth_router.js");



window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__auth_router__["a" /* default */],
    render: function render(h) {
        return h(__webpack_require__("./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*\\/index$")("./" + window.lambda.theme + '/index'));
    }
});

/***/ }),

/***/ "./lambda/modules/agent/assets/auth_router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);


__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]);

function load(component) {
    return __webpack_require__("./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*$")("./" + window.lambda.theme + '/' + component);
}
var routes = [{ path: '/', redirect: '/login' }, { path: '/login', component: load("auth/login.vue") }, { path: '/forgot', component: load("auth/password/forgot.vue") }, { path: '/password-reset', component: load("auth/password/password_reset.vue") }];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
    mode: 'history', //hash,
    base: '/auth/',
    routes: routes
}));

/***/ }),

/***/ "./lambda/modules/agent/assets/images/blur-bg.jpg":
/***/ (function(module, exports) {

module.exports = "/images/blur-bg.jpg?8f64565f1c2c1d30dd6048036e844647";

/***/ }),

/***/ "./lambda/modules/agent/assets/images/dots.png":
/***/ (function(module, exports) {

module.exports = "/images/dots.png?d3ec37a2163ae4654c47383191c2b912";

/***/ }),

/***/ "./lambda/modules/agent/assets/images/gears.png":
/***/ (function(module, exports) {

module.exports = "/images/gears.png?0ce137c4c41bcd231124f1783fa544e9";

/***/ }),

/***/ "./lambda/modules/agent/assets/images/icon.png":
/***/ (function(module, exports) {

module.exports = "/images/icon.png?c3b338387ff8cfdb02686ccd869e7872";

/***/ }),

/***/ "./lambda/modules/agent/assets/images/login-bg.jpg":
/***/ (function(module, exports) {

module.exports = "/images/login-bg.jpg?2a51638b97e942f006df69fc59799b18";

/***/ }),

/***/ "./lambda/modules/agent/assets/images/splat.png":
/***/ (function(module, exports) {

module.exports = "/images/splat.png?edf3a9f81713d5061970787c5db782bc";

/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aside": "./lambda/modules/agent/assets/views/theme/aside/index.vue",
	"./aside/": "./lambda/modules/agent/assets/views/theme/aside/index.vue",
	"./aside/auth/login": "./lambda/modules/agent/assets/views/theme/aside/auth/login.vue",
	"./aside/auth/login.vue": "./lambda/modules/agent/assets/views/theme/aside/auth/login.vue",
	"./aside/auth/password/forgot": "./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue",
	"./aside/auth/password/forgot.vue": "./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue",
	"./aside/auth/password/password_reset": "./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue",
	"./aside/auth/password/password_reset.vue": "./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue",
	"./aside/index": "./lambda/modules/agent/assets/views/theme/aside/index.vue",
	"./aside/index.vue": "./lambda/modules/agent/assets/views/theme/aside/index.vue",
	"./default": "./lambda/modules/agent/assets/views/theme/default/index.vue",
	"./default/": "./lambda/modules/agent/assets/views/theme/default/index.vue",
	"./default/auth/login": "./lambda/modules/agent/assets/views/theme/default/auth/login.vue",
	"./default/auth/login.vue": "./lambda/modules/agent/assets/views/theme/default/auth/login.vue",
	"./default/auth/password/forgot": "./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue",
	"./default/auth/password/forgot.vue": "./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue",
	"./default/auth/password/password_reset": "./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue",
	"./default/auth/password/password_reset.vue": "./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue",
	"./default/index": "./lambda/modules/agent/assets/views/theme/default/index.vue",
	"./default/index.vue": "./lambda/modules/agent/assets/views/theme/default/index.vue"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*$";

/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*\\/index$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aside/index": "./lambda/modules/agent/assets/views/theme/aside/index.vue",
	"./default/index": "./lambda/modules/agent/assets/views/theme/default/index.vue"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./lambda/modules/agent/assets/views/theme recursive ^\\.\\/.*\\/index$";

/***/ }),

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

/***/ "./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7dcee26e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue")
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dcee26e", Component.options)
  } else {
    hotAPI.reload("data-v-7dcee26e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4032b2f6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue")
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4032b2f6", Component.options)
  } else {
    hotAPI.reload("data-v-4032b2f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/aside/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42fef204\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/aside/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42fef204", Component.options)
  } else {
    hotAPI.reload("data-v-42fef204", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/default/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-51f7f297\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/login.vue")
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/default/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51f7f297", Component.options)
  } else {
    hotAPI.reload("data-v-51f7f297", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-661a8dc5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue")
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-661a8dc5", Component.options)
  } else {
    hotAPI.reload("data-v-661a8dc5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7235d166\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue")
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7235d166", Component.options)
  } else {
    hotAPI.reload("data-v-7235d166", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/modules/agent/assets/views/theme/default/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3542e38d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "lambda/modules/agent/assets/views/theme/default/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3542e38d", Component.options)
  } else {
    hotAPI.reload("data-v-3542e38d", Component.options)
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    props: ["selectedLang"],
    name: "aside-forgot",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            errorMsg: '',
            successMsg: '',
            credentials: {
                email: null
            }
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
                axios.post('/auth/send-forgot-mail', _extends({}, this.credentials, { lang: this.selectedLang })).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            _this.isSuccess = true;
                            _this.successMsg = data.msg;
                            setTimeout(function () {
                                _this.$router.push('password-reset');
                            }, 2100);
                        } else {
                            _this.isError = true;
                            _this.errorMsg = 'И-мэйл илгээх үед алдаа гарлаа';
                        }
                    }, 1000);
                }).catch(function (e) {
                    _this.errorMsg = e.response.data.error;
                    setTimeout(function () {
                        _this.loading = false;
                        _this.isError = true;
                    }, 1000);
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    props: ["selectedLang"],
    name: "aside-password-reset",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            errorMsg: '',
            successMsg: '',
            credentials: {
                code: null,
                email: null,
                password: null,
                password_confirm: null
            }

        };
    },


    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },
    created: function created() {},


    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.isSuccess = false;
            this.isError = false;
            if (!this.loading) {
                this.loading = true;
                axios.post('/auth/password-reset', _extends({}, this.credentials, { lang: this.selectedLang })).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            _this.isSuccess = true;
                            _this.successMsg = data.msg;
                            setTimeout(function () {
                                _this.$router.push('login');
                            }, 2000);
                        } else {
                            _this.isError = true;
                            _this.errorMsg = 'И-мэйл илгээх үед алдаа гарлаа';
                        }
                    }, 1000);
                }).catch(function (e) {

                    _this.errorMsg = e.response.data.error;
                    setTimeout(function () {
                        _this.loading = false;
                        _this.isError = true;
                    }, 1000);
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue":
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "aside",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            credentials: {
                login: null,
                password: null
            },
            selectedLang: localStorage.getItem("lang") == null ? 'mn' : localStorage.getItem("lang"),
            languages: window.lambda.languages,
            copyright: window.lambda.copyright,
            lambda: window.lambda,
            styleObj: {
                backgroundImage: window.lambda.bg + ' !important'
            }
        };
    },


    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },

    methods: {
        switchLanguage: function switchLanguage(val) {
            this.selectedLang = val;
            localStorage.setItem("lang", val);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/login.vue":
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['selectedLang'],
    name: "login",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            credentials: {
                login: null,
                password: null
            }
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

                    console.log('auth', data);

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            console.log('here');
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
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    props: ["selectedLang"],
    name: "forgot",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            errorMsg: '',
            successMsg: '',
            credentials: {
                email: null
            }
        };
    },


    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },

    created: function created() {},


    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.isSuccess = false;
            this.isError = false;
            if (!this.loading) {
                this.loading = true;
                axios.post('/auth/send-forgot-mail', _extends({}, this.credentials, { lang: this.selectedLang })).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            _this.isSuccess = true;
                            _this.successMsg = data.msg;
                            setTimeout(function () {
                                _this.$router.push('password-reset');
                            }, 2100);
                        } else {
                            _this.isError = true;
                            _this.errorMsg = 'И-мэйл илгээх үед алдаа гарлаа';
                        }
                    }, 1000);
                }).catch(function (e) {
                    _this.errorMsg = e.response.data.error;
                    setTimeout(function () {
                        _this.loading = false;
                        _this.isError = true;
                    }, 1000);
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    props: ["selectedLang"],
    name: "password-reset",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            errorMsg: '',
            successMsg: '',
            credentials: {
                code: null,
                email: null,
                password: null,
                password_confirm: null
            }

        };
    },


    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },
    created: function created() {},


    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.isSuccess = false;
            this.isError = false;
            if (!this.loading) {
                this.loading = true;
                axios.post('/auth/password-reset', _extends({}, this.credentials, { lang: this.selectedLang })).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this.loading = false;
                        if (data.status) {
                            _this.isSuccess = true;
                            _this.successMsg = data.msg;
                            setTimeout(function () {
                                _this.$router.push('login');
                            }, 2000);
                        } else {
                            _this.isError = true;
                            _this.errorMsg = 'И-мэйл илгээх үед алдаа гарлаа';
                        }
                    }, 1000);
                }).catch(function (e) {

                    _this.errorMsg = e.response.data.error;
                    setTimeout(function () {
                        _this.loading = false;
                        _this.isError = true;
                    }, 1000);
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "default",
    data: function data() {
        return {
            loading: false,
            isSuccess: false,
            isError: false,
            credentials: {
                login: null,
                password: null
            },
            selectedLang: localStorage.getItem("lang") == null ? 'mn' : localStorage.getItem("lang"),
            languages: window.lambda.languages,
            copyright: window.lambda.copyright,
            lambda: window.lambda
        };
    },


    computed: {
        lang: function lang() {
            return window.lambda.static_words[this.selectedLang];
        }
    },

    created: function created() {},


    methods: {
        switchLanguage: function switchLanguage(val) {
            this.selectedLang = val;
            localStorage.setItem("lang", val);
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n/* BODY */\nbody {\n  position: relative;\n  color: #666;\n  font: 16px/26px \"Roboto\", sans-serif;\n  text-align: center;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/login-bg.jpg")) + ") no-repeat;\n  background-size: cover;\n  background-position: center top;\n}\n\n/* LOGIN */\n.login {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n\n/* WRAP */\n.wrap {\n  position: static;\n  margin: auto;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  -webkit-box-shadow: 0px 6px 15px -4px rgba(34, 34, 34, 0.5);\n          box-shadow: 0px 6px 15px -4px rgba(34, 34, 34, 0.5);\n}\n.wrap:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n/* CONTENT */\n.fill, .content .content-blur, .content .content-color-layer, .auth .auth-blur, .auth .auth-color-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.content {\n  z-index: 1;\n  float: none;\n  margin: 0 auto;\n  width: 100%;\n  height: 40px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  overflow: hidden;\n}\n.content .content-blur {\n    background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/blur-bg.jpg")) + ") no-repeat;\n    background-size: cover;\n    -webkit-filter: blur(30px);\n            filter: blur(30px);\n    height: 500px;\n}\n.content .content-color-layer {\n    background: rgba(0, 122, 229, 0.8);\n}\n\n/* SLIDESHOW */\n#slideshow {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  padding: 10px 0;\n  border-radius: 10px 0 0 10px;\n}\n#slideshow h2 {\n    text-align: center;\n    font-size: 1.4em;\n    color: #f1f1f1;\n    font-weight: 400;\n}\n#slideshow p {\n    color: #f1f1f1;\n    display: none;\n    font-weight: 300;\n    font-size: 14px;\n}\n#slideshow div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 1em 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n#slideshow .one {\n    background-image: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/dots.png")) + ");\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n}\n#slideshow .two {\n    background-image: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/gears.png")) + ");\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n}\n#slideshow .three {\n    background-image: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/splat.png")) + ");\n    background-repeat: no-repeat;\n    background-position: 0% 5%;\n}\n\n/* auth (FORM WRAPPER) */\n.auth {\n  position: relative;\n  z-index: 0;\n  float: none;\n  margin: 0 auto;\n  padding-top: 40px;\n  width: 100%;\n  height: 100vh;\n  overflow: auto;\n  border-radius: 0;\n}\n.auth .lang-switcher {\n    position: absolute;\n    top: 25px;\n    right: 20px;\n}\n.auth .lang-switcher a {\n      text-decoration: none;\n      color: #565656;\n      padding: 6px 12px;\n      font-size: 13px;\n      border: solid 1px transparent;\n      margin-right: 5px;\n      cursor: pointer;\n      border-radius: 18px;\n}\n.auth .lang-switcher a:last-child {\n        border-right: 0;\n}\n.auth .lang-switcher a:hover {\n        background: #f4f5f6;\n}\n.auth .lang-switcher a.active {\n        border: solid 1px #007AE5;\n        color: #007AE5;\n}\n.auth .logo-container {\n    width: 100%;\n    margin-top: -40px;\n    text-align: left;\n    height: 100px;\n    padding-left: 80px;\n}\n.auth .logo-container img {\n      height: 60px;\n}\n.auth .auth-blur {\n    background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/blur-bg.jpg")) + ") no-repeat;\n    background-size: cover;\n    -webkit-filter: blur(30px);\n            filter: blur(30px);\n}\n.auth .auth-color-layer {\n    background: rgba(255, 255, 255, 0.95);\n}\n\n/* FORM ELEMENTS */\ninput {\n  font: 16px/26px \"Raleway\", sans-serif;\n}\n.form-wrap {\n  width: 100%;\n  margin: 2em auto 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.form-wrap .form-content {\n    padding: 1.5em 3em;\n    text-align: left;\n    width: auto;\n}\n.form-wrap .form-content h2 {\n      font-size: 18px;\n      margin: 20px 0 25px;\n      padding: 0;\n      color: #007AE5;\n      text-transform: uppercase;\n      font-weight: 500;\n}\n.form-wrap .form-content #msg {\n      font-size: 12px;\n      text-align: center;\n      margin-top: 20px;\n      -webkit-transition: .25s ease-in-out;\n      transition: .25s ease-in-out;\n}\n.form-wrap .form-content #msg .error {\n        color: #e74c3c;\n}\n.form-wrap .form-content #msg .success {\n        color: #1abc9c;\n}\n.form-wrap .form-content form {\n      min-width: 300px !important;\n}\n.form-wrap .form-content form .input {\n        position: relative;\n        margin: 0 0 .8em 0;\n}\n.form-wrap .form-content form .input .icon {\n          width: 16px;\n          height: 16px;\n          background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/icon.png")) + ") no-repeat -3px -4px;\n          position: absolute;\n          left: 3px;\n          top: 10px;\n          opacity: 0.6;\n          cursor: text;\n          z-index: 10;\n          display: block;\n          -webkit-transition: .25s ease-in-out;\n          transition: .25s ease-in-out;\n}\n.form-wrap .form-content form .input .icon.pass {\n            background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/icon.png")) + ") no-repeat -3px -83px;\n}\n.form-wrap .form-content form .input input {\n          padding: .8em 2em 6px 28px;\n          font-size: 14px;\n          width: 100%;\n          display: inline-block;\n          background: transparent;\n          border: 0;\n          border-bottom: 1px solid #cccccc;\n          outline: 0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          font-family: inherit;\n          color: #666666;\n          -webkit-transition: .25s ease-in-out;\n          transition: .25s ease-in-out;\n}\n.form-wrap .form-content form .input input:disabled {\n            opacity: .5;\n}\n.form-wrap .form-content form .input input:disabled:hover, .form-wrap .form-content form .input input:disabled:active, .form-wrap .form-content form .input input:disabled:focus {\n              border-bottom: 1px solid #cccccc;\n}\n.form-wrap .form-content form .input input:active, .form-wrap .form-content form .input input:focus {\n            border-bottom: 1px solid #007AE5;\n}\n.form-wrap .form-content form .input input:active + span, .form-wrap .form-content form .input input:focus + span {\n              opacity: 1;\n}\n.form-wrap .form-content form .input input::-webkit-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input:-ms-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input::-ms-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input::placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .button {\n        margin: 1em 0;\n        height: 30px;\n        width: 130px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        background-color: #007AE5;\n        border: none;\n        color: #fff;\n        font-size: 13px;\n        border-radius: 30px;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: none;\n        font-weight: 300;\n        -webkit-transition: .25s ease-in-out;\n        transition: .25s ease-in-out;\n        position: relative;\n        cursor: pointer;\n}\n.form-wrap .form-content form .button span.loader {\n          position: absolute;\n          right: 5px;\n}\n.form-wrap .form-content form .button:hover {\n          background-color: #006ccc;\n}\n.form-wrap .form-content form .action {\n        padding: .8em 0 0;\n        font-size: .93em;\n}\n.form-wrap .form-content form .action p {\n          float: right;\n          text-align: left;\n          font-size: 13px;\n          margin-top: 15px;\n}\n.form-wrap .form-content form .action p a {\n            color: #007AE5;\n            text-decoration: underline;\n}\n.form-wrap .form-content form .action p a:hover {\n              color: #006ccc;\n              text-decoration: underline;\n}\n.form-wrap .form-content form .checkbox {\n        margin: 1em 0;\n        padding: 20px 0;\n        visibility: hidden;\n        text-align: left;\n}\n.form-wrap .form-content form .checkbox:checked + label:after {\n          -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n          filter: alpha(opacity=100);\n          opacity: 1;\n}\n.form-wrap .form-content form label[for] {\n        position: relative;\n        padding-top: 2px;\n        padding-left: 10px;\n        cursor: pointer;\n        font-size: 13px;\n}\n.form-wrap .form-content form label[for]:before {\n          position: absolute;\n          width: 17px;\n          height: 17px;\n          top: 0px;\n          left: -14px;\n          content: '';\n          border: 1px solid #5A6374;\n}\n.form-wrap .form-content form label[for]:after {\n          position: absolute;\n          top: 1px;\n          left: -10px;\n          width: 15px;\n          height: 8px;\n          -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n          filter: alpha(opacity=0);\n          opacity: 0;\n          content: '';\n          background-color: transparent;\n          border: solid #007AE5;\n          border-width: 0 0 2px 2px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.form-wrap .copyright {\n    position: absolute;\n    bottom: 14px;\n    margin-left: 80px;\n    font-size: 12px;\n    color: #333333;\n    opacity: .4;\n}\n\n/* MEDIUM VIEWPORT */\n@media only screen and (min-width: 640px) {\n  /* GLOBAL TRANSITION */\n  /* WRAP */\n.wrap {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 600px;\n    height: 500px;\n    margin: auto;\n    border-radius: 4px;\n}\n  /* LOGO */\n.logo {\n    top: 10px;\n    left: 10px;\n    width: 40px;\n    height: 40px;\n    background: none;\n}\n.logo img {\n      width: 100%;\n}\n  /* SLIDESHOW */\n#slideshow h2 {\n    margin: 5em 0 0;\n    font-size: 20px;\n    text-transform: uppercase;\n}\n#slideshow h2 span {\n      padding: 5px 0;\n}\n#slideshow p {\n    display: block;\n    font-size: 12px;\n    padding-left: 20px;\n    padding-right: 20px;\n    line-height: 18px;\n    margin-left: 50px;\n    margin-right: 50px;\n}\n#slideshow div {\n    background-size: auto;\n}\n#slideshow .one {\n    background-position: 50% 130%;\n}\n#slideshow .two {\n    background-position: 50% 200%;\n}\n#slideshow .three {\n    background-position: 50% 300%;\n}\n#slideshow .four {\n    background-position: -40% -80%;\n}\n  /* CONTENT */\n.content,\n  .content.full {\n    position: relative;\n    float: left;\n    width: 40%;\n    height: 500px;\n    border-radius: 3px 0 0 3px;\n}\n.auth {\n    padding-top: 0;\n    float: left;\n    width: 60%;\n    height: 500px;\n    border: 0;\n}\n}\n\n/* LARGE VIEWPORT */\n@media only screen and (min-width: 960px) {\n  /* WRAP */\n.wrap {\n    width: 900px;\n    height: 550px;\n}\n  /* CONTENT */\n.content,\n  .content.full {\n    height: 550px;\n}\n.logo {\n    padding: 10px 0;\n}\n  /* SLIDESHOW */\n#slideshow h2 {\n    margin: 6em 0 1em;\n    font-size: 26px;\n}\n#slideshow .four {\n    background-position: -82% -330%;\n}\n  /* auth (FORM WRAPPER) */\n.auth {\n    height: 550px;\n}\n.form-wrap {\n    margin: 5em auto 0;\n}\n.form-wrap .form-content {\n      padding: 1.5em 4.9em;\n      width: 90%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n/* BODY */\nbody {\n  position: relative;\n  color: #666;\n  font: 16px/26px \"Roboto\", sans-serif !important;\n  text-align: center;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/login-bg.jpg")) + ") no-repeat;\n  background-size: cover;\n  background-position: center top;\n}\n.fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.login {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-size: cover;\n  background-position: center top;\n}\n.login .content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    height: 100vh;\n}\n.login .content:before {\n      position: absolute;\n      background-color: rgba(38, 50, 56, 0.6);\n      height: 100%;\n      width: 100%;\n      display: block;\n      content: \"\";\n}\n.login .content .title {\n      z-index: 10;\n      color: rgba(255, 255, 255, 0.8);\n      margin: 300px 0 0 100px;\n      text-align: left;\n      font-family: 'Roboto Condensed', sans-serif;\n}\n.login .content .title h2 {\n        font-weight: 500;\n        font-size: 36px;\n        margin-bottom: 10px;\n        line-height: 36px;\n}\n.login .content .title p {\n        font-weight: 300;\n        font-size: 14px;\n        font-family: 'Roboto Condensed', sans-serif;\n}\n.login .auth {\n    -webkit-box-shadow: -2px 0px 5px 1px rgba(34, 34, 34, 0.2);\n            box-shadow: -2px 0px 5px 1px rgba(34, 34, 34, 0.2);\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    background: #ffffff;\n    position: relative;\n    z-index: 0;\n    width: 450px;\n    max-width: 450px;\n    height: 100vh;\n    overflow: auto;\n    margin-left: auto;\n}\n.login .auth .lang-switcher {\n      position: absolute;\n      top: 25px;\n      right: 20px;\n      z-index: 1000;\n}\n.login .auth .lang-switcher a {\n        text-decoration: none;\n        color: #565656;\n        padding: 6px 12px;\n        font-size: 13px;\n        border: solid 1px transparent;\n        margin-right: 5px;\n        cursor: pointer;\n        border-radius: 18px;\n}\n.login .auth .lang-switcher a:last-child {\n          border-right: 0;\n}\n.login .auth .lang-switcher a:hover {\n          background: #f4f5f6;\n}\n.login .auth .lang-switcher a.active {\n          border: solid 1px #007AE5;\n          color: #007AE5;\n}\n.login .auth .logo {\n      width: 100%;\n      text-align: left;\n      height: 100px;\n}\n.login .auth .logo img {\n        height: 60px;\n}\n.login .auth .logo.with-text {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n}\n.login .auth .logo.with-text img {\n          height: 60px;\n          width: auto !important;\n          margin-right: 20px;\n}\n.login .auth .logo.with-text span {\n          font-size: 12px;\n          font-weight: 700;\n          line-height: 20px;\n          text-transform: uppercase;\n          max-width: 220px;\n}\n.form-wrap {\n  width: 100%;\n  margin: 2em auto 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.form-wrap .form-content {\n    padding: 1.5em 3em;\n    text-align: left;\n    width: auto;\n}\n.form-wrap .form-content h2 {\n      font-size: 18px;\n      margin: 20px 0 25px;\n      padding: 0;\n      color: #007AE5;\n      text-transform: uppercase;\n      font-weight: 500;\n}\n.form-wrap .form-content #msg {\n      font-size: 12px;\n      text-align: center;\n      margin-top: 20px;\n      -webkit-transition: .25s ease-in-out;\n      transition: .25s ease-in-out;\n}\n.form-wrap .form-content #msg .error {\n        color: #e74c3c;\n}\n.form-wrap .form-content #msg .success {\n        color: #1abc9c;\n}\n.form-wrap .form-content form {\n      min-width: 300px !important;\n}\n.form-wrap .form-content form .input {\n        position: relative;\n        margin: 0 0 .8em 0;\n}\n.form-wrap .form-content form .input .icon {\n          width: 16px;\n          height: 16px;\n          background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/icon.png")) + ") no-repeat -3px -4px;\n          position: absolute;\n          left: 6px;\n          top: 8px;\n          opacity: 0.6;\n          cursor: text;\n          z-index: 10;\n          display: block;\n          -webkit-transition: .25s ease-in-out;\n          transition: .25s ease-in-out;\n}\n.form-wrap .form-content form .input .icon.pass {\n            background: url(" + escape(__webpack_require__("./lambda/modules/agent/assets/images/icon.png")) + ") no-repeat -3px -83px;\n}\n.form-wrap .form-content form .input input {\n          padding: 8px 10px 8px 28px;\n          font-size: 14px;\n          width: 100%;\n          display: inline-block;\n          background: transparent;\n          border: 1px solid #dedede;\n          border-radius: 4px;\n          outline: 0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          font-family: inherit;\n          color: #666666;\n          -webkit-transition: .25s ease-in-out;\n          transition: .25s ease-in-out;\n}\n.form-wrap .form-content form .input input:disabled {\n            opacity: .5;\n}\n.form-wrap .form-content form .input input:disabled:hover, .form-wrap .form-content form .input input:disabled:active, .form-wrap .form-content form .input input:disabled:focus {\n              border-bottom: 1px solid #cccccc;\n}\n.form-wrap .form-content form .input input:active, .form-wrap .form-content form .input input:focus {\n            border: 1px solid #007AE5;\n}\n.form-wrap .form-content form .input input:active + span, .form-wrap .form-content form .input input:focus + span {\n              opacity: 1;\n}\n.form-wrap .form-content form .input input::-webkit-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input:-ms-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input::-ms-input-placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .input input::placeholder {\n            /* Chrome, Firefox, Opera, Safari 10.1+ */\n            color: #999999;\n}\n.form-wrap .form-content form .button {\n        margin: 1em 0;\n        height: 30px;\n        width: 130px;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        background-color: #007AE5;\n        border: none;\n        color: #fff;\n        font-size: 13px;\n        border-radius: 30px;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: none;\n        font-weight: 300;\n        -webkit-transition: .25s ease-in-out;\n        transition: .25s ease-in-out;\n        position: relative;\n        cursor: pointer;\n}\n.form-wrap .form-content form .button span.loader {\n          position: absolute;\n          right: 5px;\n}\n.form-wrap .form-content form .button:hover {\n          background-color: #006ccc;\n}\n.form-wrap .form-content form .action {\n        padding: .8em 0 0;\n        font-size: .93em;\n}\n.form-wrap .form-content form .action p {\n          float: right;\n          text-align: left;\n          font-size: 13px;\n          margin-top: 15px;\n}\n.form-wrap .form-content form .action p a {\n            color: #007AE5;\n            text-decoration: underline;\n}\n.form-wrap .form-content form .action p a:hover {\n              color: #006ccc;\n              text-decoration: underline;\n}\n.form-wrap .form-content form .checkbox {\n        margin: 1em 0;\n        padding: 20px 0;\n        visibility: hidden;\n        text-align: left;\n}\n.form-wrap .form-content form .checkbox:checked + label:after {\n          -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n          filter: alpha(opacity=100);\n          opacity: 1;\n}\n.form-wrap .form-content form label[for] {\n        position: relative;\n        padding-top: 2px;\n        padding-left: 10px;\n        cursor: pointer;\n        font-size: 13px;\n        border-radius: 2px;\n}\n.form-wrap .form-content form label[for]:before {\n          position: absolute;\n          width: 17px;\n          height: 17px;\n          top: 0px;\n          left: -14px;\n          content: '';\n          border: 1px solid #5A6374;\n}\n.form-wrap .form-content form label[for]:after {\n          position: absolute;\n          top: 1px;\n          left: -10px;\n          width: 15px;\n          height: 8px;\n          -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n          filter: alpha(opacity=0);\n          opacity: 0;\n          content: '';\n          background-color: transparent;\n          border: solid #007AE5;\n          border-width: 0 0 2px 2px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.form-wrap .copyright {\n    position: absolute;\n    bottom: 14px;\n    font-size: 12px;\n    color: #666666;\n    width: 100%;\n    text-align: center;\n}\n@media (max-width: 768px) {\n.content {\n    display: none !important;\n}\n.auth {\n    padding-top: 0;\n    float: left;\n    width: 100%;\n    height: 500px;\n    border: 0;\n}\n.auth .logo {\n      top: 10px;\n      left: 10px;\n      width: 40px;\n      height: 40px;\n      background: none;\n}\n.auth .logo img {\n        width: 100%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3542e38d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "login",
      style: {
        backgroundImage: "url(" + _vm.lambda.bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center top"
      }
    },
    [
      _c("div", { staticClass: "wrap" }, [
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "content-blur" }),
          _vm._v(" "),
          _c("div", { staticClass: "content-color-layer" }),
          _vm._v(" "),
          _c("div", { attrs: { id: "slideshow" } }, [
            _c("div", { staticClass: "one" }, [
              _c("h2", [_c("span", [_vm._v(_vm._s(_vm.lang.title))])]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.lang.subtitle) +
                    "\n                    "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "auth" },
          [
            _c("div", { staticClass: "auth-blur" }),
            _vm._v(" "),
            _c("div", { staticClass: "auth-color-layer" }),
            _vm._v(" "),
            _vm.lambda.has_language
              ? _c(
                  "div",
                  { staticClass: "lang-switcher" },
                  _vm._l(_vm.languages, function(item) {
                    return _c(
                      "a",
                      {
                        key: item.index,
                        class: _vm.selectedLang == item.value ? "active" : "",
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            _vm.switchLanguage(item.code)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.label) +
                            "\n                "
                        )
                      ]
                    )
                  })
                )
              : _vm._e(),
            _vm._v(" "),
            _c("router-view", { attrs: { selectedLang: _vm.selectedLang } }, [
              _c(
                "div",
                {
                  staticClass: "copyright",
                  staticStyle: { width: "70%", "text-align": "center" },
                  attrs: { slot: "copyright" },
                  slot: "copyright"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.copyright) +
                      "\n                "
                  )
                ]
              )
            ])
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3542e38d", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4032b2f6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/password_reset.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-wrap" }, [
    _c("div", { staticClass: "form-content" }, [
      _c("h2", [_vm._v(_vm._s(_vm.lang.passwordReset))]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "login-form",
          attrs: { method: "post" },
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
                  value: _vm.credentials.code,
                  expression: "credentials.code"
                }
              ],
              attrs: {
                type: "text",
                id: "code",
                name: "code",
                autocomplete: "off",
                placeholder: _vm.lang.passwordResetCode
              },
              domProps: { value: _vm.credentials.code },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.credentials, "code", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon pass" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-element input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.credentials.email,
                  expression: "credentials.email"
                }
              ],
              attrs: {
                type: "text",
                id: "email",
                name: "email",
                autocomplete: "off",
                placeholder: _vm.lang.email
              },
              domProps: { value: _vm.credentials.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.credentials, "email", $event.target.value)
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
          _c("div", { staticClass: "form-element input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.credentials.password_confirm,
                  expression: "credentials.password_confirm"
                }
              ],
              attrs: {
                type: "password",
                disabled: _vm.loading,
                placeholder: _vm.lang.passwordConfirm
              },
              domProps: { value: _vm.credentials.password_confirm },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.credentials,
                    "password_confirm",
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon pass" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-element " }, [
            _c(
              "button",
              {
                staticClass: "button",
                staticStyle: { width: "100%" },
                attrs: { id: "submit", disabled: _vm.loading }
              },
              [
                _c("span", { attrs: { id: "submitTxt" } }, [
                  _vm._v(_vm._s(_vm.lang.passwordReset))
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
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "msg" } }, [
        _vm.isSuccess
          ? _c("span", { staticClass: "success" }, [
              _vm._v(_vm._s(_vm.successMsg))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isError
          ? _c("span", { staticClass: "error" }, [_vm._v(_vm._s(_vm.errorMsg))])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4032b2f6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42fef204\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "login",
      style: { backgroundImage: "url(" + _vm.lambda.bg + ")" }
    },
    [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "content-layer" }),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _c("h2", { staticStyle: { "max-width": "600px" } }, [
            _vm._v(_vm._s(_vm.lang.title))
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.lang.subtitle))])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "auth" }, [
        _vm.lambda.has_language
          ? _c(
              "div",
              { staticClass: "lang-switcher" },
              _vm._l(_vm.languages, function(item) {
                return _c(
                  "a",
                  {
                    key: item.index,
                    class: _vm.selectedLang == item.code ? "active" : "",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.switchLanguage(item.code)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.label) +
                        "\n            "
                    )
                  ]
                )
              })
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-wrap" },
          [
            _c("router-view", { attrs: { selectedLang: _vm.selectedLang } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "copyright",
                staticStyle: { width: "70%", "text-align": "center" }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.copyright) +
                    "\n            "
                )
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42fef204", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-51f7f297\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-wrap" },
    [
      _c("div", { staticClass: "form-content" }, [
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
      ]),
      _vm._v(" "),
      _vm._t("copyright")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51f7f297", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-661a8dc5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/forgot.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-wrap" },
    [
      _c("div", { staticClass: "form-content" }, [
        _c("h2", [_vm._v(_vm._s(_vm.lang.forgot))]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "login-form",
            attrs: { method: "post" },
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
                    value: _vm.credentials.email,
                    expression: "credentials.email"
                  }
                ],
                attrs: {
                  type: "text",
                  id: "email",
                  name: "email",
                  autocomplete: "off",
                  placeholder: _vm.lang.email
                },
                domProps: { value: _vm.credentials.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.credentials, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon user" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-element" }, [
              _c("label", { staticStyle: { "font-size": "12px" } }, [
                _vm._v(_vm._s(_vm.lang.forgotDescription))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-element " }, [
              _c(
                "button",
                {
                  staticClass: "button",
                  staticStyle: { width: "100%" },
                  attrs: { id: "submit", disabled: _vm.loading }
                },
                [
                  _c("span", { attrs: { id: "submitTxt" } }, [
                    _vm._v(_vm._s(_vm.lang.sendPasswordResetCode))
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
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "msg" } }, [
          _vm.isSuccess
            ? _c("span", { staticClass: "success" }, [
                _vm._v(_vm._s(_vm.successMsg))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isError
            ? _c("span", { staticClass: "error" }, [
                _vm._v(_vm._s(_vm.errorMsg))
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _vm._t("copyright")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-661a8dc5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7235d166\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/default/auth/password/password_reset.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-wrap" },
    [
      _c("div", { staticClass: "form-content" }, [
        _c("h2", [_vm._v(_vm._s(_vm.lang.passwordReset))]),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "login-form",
            attrs: { method: "post" },
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
                    value: _vm.credentials.code,
                    expression: "credentials.code"
                  }
                ],
                attrs: {
                  type: "text",
                  id: "code",
                  name: "code",
                  autocomplete: "off",
                  placeholder: _vm.lang.passwordResetCode
                },
                domProps: { value: _vm.credentials.code },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.credentials, "code", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon pass" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-element input" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.credentials.email,
                    expression: "credentials.email"
                  }
                ],
                attrs: {
                  type: "text",
                  id: "email",
                  name: "email",
                  autocomplete: "off",
                  placeholder: _vm.lang.email
                },
                domProps: { value: _vm.credentials.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.credentials, "email", $event.target.value)
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
            _c("div", { staticClass: "form-element input" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.credentials.password_confirm,
                    expression: "credentials.password_confirm"
                  }
                ],
                attrs: {
                  type: "password",
                  disabled: _vm.loading,
                  placeholder: _vm.lang.passwordConfirm
                },
                domProps: { value: _vm.credentials.password_confirm },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.credentials,
                      "password_confirm",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon pass" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-element " }, [
              _c(
                "button",
                {
                  staticClass: "button",
                  staticStyle: { width: "100%" },
                  attrs: { id: "submit", disabled: _vm.loading }
                },
                [
                  _c("span", { attrs: { id: "submitTxt" } }, [
                    _vm._v(_vm._s(_vm.lang.passwordReset))
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
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "msg" } }, [
          _vm.isSuccess
            ? _c("span", { staticClass: "success" }, [
                _vm._v(_vm._s(_vm.successMsg))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isError
            ? _c("span", { staticClass: "error" }, [
                _vm._v(_vm._s(_vm.errorMsg))
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _vm._t("copyright")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7235d166", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7dcee26e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/modules/agent/assets/views/theme/aside/auth/password/forgot.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-wrap" }, [
    _c("div", { staticClass: "form-content" }, [
      _c("h2", [_vm._v(_vm._s(_vm.lang.forgot))]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "login-form",
          attrs: { method: "post" },
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
                  value: _vm.credentials.email,
                  expression: "credentials.email"
                }
              ],
              attrs: {
                type: "text",
                id: "email",
                name: "email",
                autocomplete: "off",
                placeholder: _vm.lang.email
              },
              domProps: { value: _vm.credentials.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.credentials, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon user" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-element" }, [
            _c("label", { staticStyle: { "font-size": "12px" } }, [
              _vm._v(_vm._s(_vm.lang.forgotDescription))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-element " }, [
            _c(
              "button",
              {
                staticClass: "button",
                staticStyle: { width: "100%" },
                attrs: { id: "submit", disabled: _vm.loading }
              },
              [
                _c("span", { attrs: { id: "submitTxt" } }, [
                  _vm._v(_vm._s(_vm.lang.sendPasswordResetCode))
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
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "msg" } }, [
        _vm.isSuccess
          ? _c("span", { staticClass: "success" }, [
              _vm._v(_vm._s(_vm.successMsg))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isError
          ? _c("span", { staticClass: "error" }, [_vm._v(_vm._s(_vm.errorMsg))])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7dcee26e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/default/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("50ff095c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3542e38d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lambda/modules/agent/assets/views/theme/aside/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("82f53334", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42fef204\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./lambda/modules/agent/assets/auth.js");


/***/ })

},[6]);