webpackJsonp([16],{

/***/ "./lambda/template/paper/assets/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_vue__ = __webpack_require__("./lambda/template/paper/assets/components/navbar/navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navbar_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_header_subheader_vue__ = __webpack_require__("./lambda/template/paper/assets/components/sub-header/subheader.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_header_subheader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sub_header_subheader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sub_sidebar_index_vue__ = __webpack_require__("./lambda/template/paper/assets/components/sub-sidebar/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sub_sidebar_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sub_sidebar_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_vue__ = __webpack_require__("./lambda/template/paper/assets/components/sidebar/sidebar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ribbon_ribbon_vue__ = __webpack_require__("./lambda/template/paper/assets/components/ribbon/ribbon.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ribbon_ribbon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ribbon_ribbon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offcanvas_off_canvas__ = __webpack_require__("./lambda/template/paper/assets/components/offcanvas/off-canvas.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offcanvas_off_canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__offcanvas_off_canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infopanel_info_panel__ = __webpack_require__("./lambda/template/paper/assets/components/infopanel/info-panel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infopanel_info_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__infopanel_info_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__queryBuilder_QueryBuilder__ = __webpack_require__("./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__queryBuilder_QueryBuilder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__queryBuilder_QueryBuilder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paper_header_PaperHeader__ = __webpack_require__("./lambda/template/paper/assets/components/paper-header/PaperHeader.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paper_header_PaperHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__paper_header_PaperHeader__);
/**
 * Created by n0m4dz on 2/6/17.
 */











window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

var components = {
    navbar: __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_vue___default.a,
    subheader: __WEBPACK_IMPORTED_MODULE_2__sub_header_subheader_vue___default.a,
    subsidebar: __WEBPACK_IMPORTED_MODULE_3__sub_sidebar_index_vue___default.a,
    sidebar: __WEBPACK_IMPORTED_MODULE_4__sidebar_sidebar_vue___default.a,
    ribbon: __WEBPACK_IMPORTED_MODULE_5__ribbon_ribbon_vue___default.a,
    offCanvas: __WEBPACK_IMPORTED_MODULE_6__offcanvas_off_canvas___default.a,
    infoPanel: __WEBPACK_IMPORTED_MODULE_7__infopanel_info_panel___default.a,
    queryBuilder: __WEBPACK_IMPORTED_MODULE_8__queryBuilder_QueryBuilder___default.a,
    PaperHeader: __WEBPACK_IMPORTED_MODULE_9__paper_header_PaperHeader___default.a
};

var install = function install(Vue, options) {
    if (install.installed) return;
    Object.keys(components).forEach(function (key) {
        return Vue.component(key, components[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

/* unused harmony default export */ var _unused_webpack_default_export = (install);

/***/ }),

/***/ "./lambda/template/paper/assets/components/infopanel/info-panel.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/infopanel/info-panel.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./info-panel.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./info-panel.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/infopanel/info-panel.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/infopanel/info-panel.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d05bea9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/infopanel/info-panel.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/infopanel/info-panel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d05bea9", Component.options)
  } else {
    hotAPI.reload("data-v-3d05bea9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/navbar/navbar.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./navbar.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./navbar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/navbar/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/navbar/navbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-959c27d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/navbar/navbar.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/navbar/navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-959c27d8", Component.options)
  } else {
    hotAPI.reload("data-v-959c27d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/offcanvas/off-canvas.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/offcanvas/off-canvas.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./off-canvas.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./off-canvas.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/offcanvas/off-canvas.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/offcanvas/off-canvas.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b370be9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/offcanvas/off-canvas.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/offcanvas/off-canvas.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b370be9", Component.options)
  } else {
    hotAPI.reload("data-v-5b370be9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/paper-header/PaperHeader.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/paper-header/PaperHeader.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./PaperHeader.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./PaperHeader.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/paper-header/PaperHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/paper-header/PaperHeader.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-131f023a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/paper-header/PaperHeader.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/paper-header/PaperHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-131f023a", Component.options)
  } else {
    hotAPI.reload("data-v-131f023a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b13d254\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b13d254", Component.options)
  } else {
    hotAPI.reload("data-v-0b13d254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/queryBuilder/style/queryBuilder.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/queryBuilder/style/queryBuilder.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./queryBuilder.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./queryBuilder.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/queryBuilder/utils/queryBuilder.i18.mn.js":
/***/ (function(module, exports) {

/*!
 * jQuery QueryBuilder 2.5.2
 * Locale: English (en)
 * Author: Damien "Mistic" Sorel, http://www.strangeplanet.fr
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */

(function (root, factory) {

    factory(root.jQuery);
})(this, function ($) {
    "use strict";

    var QueryBuilder = jQuery.fn.queryBuilder;

    QueryBuilder.regional['mn'] = {
        "__locale": "Mongolia (mn)",
        "__author": "Munkh-Altai Chuluunbaatar, munkaltai@gmail.com",
        "add_rule": "Дүрэм",
        "add_group": "Бүлэг",
        "delete_rule": "Устгах",
        "delete_group": "Устгах",
        "conditions": {
            "AND": "AND",
            "OR": "OR"
        },
        "operators": {
            "equal": "=",
            "not_equal": "!=",
            "in": "in",
            "not_in": "not in",
            "less": "<",
            "less_or_equal": "<=",
            "greater": ">",
            "greater_or_equal": ">=",
            "between": "between",
            "not_between": "not between",
            "begins_with": "begins with",
            "not_begins_with": "doesn't begin with",
            "contains": "contains",
            "not_contains": "doesn't contain",
            "ends_with": "ends with",
            "not_ends_with": "doesn't end with",
            "is_empty": "is empty",
            "is_not_empty": "is not empty",
            "is_null": "is null",
            "is_not_null": "is not null"
        },
        "errors": {
            "no_filter": "No filter selected",
            "empty_group": "The group is empty",
            "radio_empty": "No value selected",
            "checkbox_empty": "No value selected",
            "select_empty": "No value selected",
            "string_empty": "Empty value",
            "string_exceed_min_length": "Must contain at least {0} characters",
            "string_exceed_max_length": "Must not contain more than {0} characters",
            "string_invalid_format": "Invalid format ({0})",
            "number_nan": "Not a number",
            "number_not_integer": "Not an integer",
            "number_not_double": "Not a real number",
            "number_exceed_min": "Must be greater than {0}",
            "number_exceed_max": "Must be lower than {0}",
            "number_wrong_step": "Must be a multiple of {0}",
            "number_between_invalid": "Invalid values, {0} is greater than {1}",
            "datetime_empty": "Empty value",
            "datetime_invalid": "Invalid date format ({0})",
            "datetime_exceed_min": "Must be after {0}",
            "datetime_exceed_max": "Must be before {0}",
            "datetime_between_invalid": "Invalid values, {0} is greater than {1}",
            "boolean_not_valid": "Not a boolean",
            "operator_not_multiple": "Operator \"{1}\" cannot accept multiple values"
        },
        "invert": "Invert",
        "NOT": "NOT"
    };

    QueryBuilder.defaults({ lang_code: 'mn' });
});

/***/ }),

/***/ "./lambda/template/paper/assets/components/queryBuilder/utils/queryGenerator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getQuery */
/* unused harmony export getFields */
function getQuery(model, filters) {

    if (model.nodes.length >= 1) {
        var selects = getSelects(model);

        var joins = getJoins(model);
        var orders = getOrders(model);
        var groups = getGroup(model);
        var order = "";
        var group = "";

        var mainTable = model.nodes[0].title;

        var order_ = '';
        if (orders) {
            order_ = 'ORDER BY ' + orders;
        }
        var groups_ = '';
        if (groups) {
            groups_ = 'GROUP BY ' + groups;
        }

        if (filters !== null) {
            filters = 'WHERE ' + filters.sql;
        } else {
            filters = '';
        }

        return "SELECT " + selects + " FROM " + mainTable + " " + joins + " " + filters + " " + groups_ + " " + order_;
    } else {
        return 'Хүснэгт сонгогдоогүй байна';
    }
}

function getSelects(model) {
    var selects = [];

    model.nodes.map(function (table) {
        table.ports.map(function (field) {
            if (field.field.output && field.type == 'in') {
                var select_field = field.field.table + '.' + field.field.name + " as " + field.field.alias;
                var field_full_name = field.field.table + '.' + field.field.name;

                if (field.field.aggregate != 'none') {
                    switch (field.field.aggregate) {
                        case 'count':

                            selects.push("COUNT(" + field_full_name + ") as " + field.field.alias + "_count");

                            break;
                        case 'max':

                            selects.push("MAX(" + field_full_name + ") as " + field.field.alias + "_max");

                            break;
                        case 'min':

                            selects.push("MIN(" + field_full_name + ") as " + field.field.alias + "_min");

                            break;
                        case 'avg':

                            selects.push("AVG(" + field_full_name + ") as " + field.field.alias + "_avg");

                            break;
                        case 'sum':

                            selects.push("SUM(" + field_full_name + ") as " + field.field.alias + "_sum");

                            break;
                        case 'countDistinct':

                            selects.push("COUNT(DISTINCT " + field_full_name + ") as " + field.field.alias + "_count_distinct");

                            break;
                        case 'avgDistinct':

                            selects.push("AVG(DISTINCT " + field_full_name + ") as " + field.field.alias + "_avg_distinct");

                            break;
                        case 'sumDistinct':

                            selects.push("SUM(DISTINCT " + field_full_name + ") as " + field.field.alias + "_sum_distinct");

                            break;
                        default:
                            selects.push(select_field);
                    }
                } else {
                    selects.push(select_field);
                }
            }
        });
    });

    return selects.join(', ');
}

function getOrders(model) {
    var orders = [];

    model.nodes.map(function (table) {
        table.ports.map(function (field) {
            if (field.field.output && field.field.sortType != 'none' && field.type == 'in') {

                orders.push({
                    sortOrder: field.field.sortOrder,
                    sql: field.field.alias + " " + field.field.sortType
                });
            }
        });
    });
    orders = _.orderBy(orders, 'sortOrder', 'asc');

    orders = orders.map(function (order) {
        return order.sql;
    });
    return orders.join(', ');
}
function getGroup(model) {
    var groups = [];

    model.nodes.map(function (table) {
        table.ports.map(function (field) {
            if (field.field.output && field.field.groupBy && field.type == 'in') {
                groups.push({
                    groupOrder: field.field.groupOrder,
                    sql: "" + field.field.alias
                });
            }
        });
    });

    groups = _.orderBy(groups, 'groupOrder', 'asc');

    groups = groups.map(function (group) {
        return group.sql;
    });
    return groups.join(', ');
}

function getFields(model) {
    var fields = [];

    model.nodes.map(function (table) {
        table.ports.map(function (field) {

            if (field.field.output && field.type == 'in') {
                fields.push(field.field);
            }
        });
    });

    return fields;
}

function getJoins(model) {
    var joins = '';

    model.links.map(function (link, index) {

        var from = getFieldByLinkId(model, link.from);
        var to = getFieldByLinkId(model, link.to);

        var in_ = null;
        var out_ = null;
        if (from.type == 'out') {
            in_ = to;
            out_ = from;
        } else {
            in_ = from;
            out_ = to;
        }

        var join = '';

        join = "LEFT JOIN " + in_.table + " on " + out_.table + "." + out_.name + " = " + in_.table + "." + in_.name;

        if (index >= 1) joins = joins + ' ' + join;else joins = joins + join;
    });

    return joins;
}

function getFieldByLinkId(model, portId) {

    var field_ = {};

    model.nodes.map(function (table) {
        table.ports.map(function (field) {
            if (portId === field.id) {
                field_ = field.field;

                field_.type = field.type;
            }
        });
    });

    return field_;
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/ribbon/ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/ribbon/ribbon.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./ribbon.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./ribbon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/ribbon/ribbon.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/ribbon/ribbon.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59050154\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/ribbon/ribbon.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/ribbon/ribbon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59050154", Component.options)
  } else {
    hotAPI.reload("data-v-59050154", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/sidebar/sidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sidebar/sidebar.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./sidebar.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./sidebar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/sidebar/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sidebar/sidebar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1474b88e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sidebar/sidebar.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/sidebar/sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1474b88e", Component.options)
  } else {
    hotAPI.reload("data-v-1474b88e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/sub-header/subheader.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sub-header/subheader.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./subheader.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./subheader.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/components/sub-header/subheader.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sub-header/subheader.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07501fa3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sub-header/subheader.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/sub-header/subheader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07501fa3", Component.options)
  } else {
    hotAPI.reload("data-v-07501fa3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/sub-sidebar/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sub-sidebar/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f91dae92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sub-sidebar/index.vue")
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
Component.options.__file = "lambda/template/paper/assets/components/sub-sidebar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f91dae92", Component.options)
  } else {
    hotAPI.reload("data-v-f91dae92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./lambda/template/paper/assets/components/sub-sidebar/style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sub-sidebar/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./lambda/template/paper/assets/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview__ = __webpack_require__("./node_modules/iview/dist/iview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_locale_mn_MN__ = __webpack_require__("./node_modules/iview/dist/locale/mn-MN.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview_dist_locale_mn_MN___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview_dist_locale_mn_MN__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("./lambda/template/paper/assets/components/index.js");
/**
 * Created by n0m4dz on 2/6/17.
 */






__WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.request.use(function (config) {
  config.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  return config;
});

window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window._ = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.silent = true;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_iview___default.a, { locale: __WEBPACK_IMPORTED_MODULE_4_iview_dist_locale_mn_MN___default.a });

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/infopanel/info-panel.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_panel_scss__ = __webpack_require__("./lambda/template/paper/assets/components/infopanel/info-panel.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_panel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__info_panel_scss__);
//
//
//
//
//
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
  props: ["active", "toggleFn"],
  watch: {
    active: function active(newVal, oldVal) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/navbar/navbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_scss__ = __webpack_require__("./lambda/template/paper/assets/components/navbar/navbar.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__navbar_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/offcanvas/off-canvas.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__off_canvas_scss__ = __webpack_require__("./lambda/template/paper/assets/components/offcanvas/off-canvas.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__off_canvas_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__off_canvas_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/paper-header/PaperHeader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PaperHeader_scss__ = __webpack_require__("./lambda/template/paper/assets/components/paper-header/PaperHeader.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PaperHeader_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PaperHeader_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_queryGenerator__ = __webpack_require__("./lambda/template/paper/assets/components/queryBuilder/utils/queryGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sql_formatter__ = __webpack_require__("./node_modules/sql-formatter/lib/sqlFormatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sql_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sql_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_queryBuilder_scss__ = __webpack_require__("./lambda/template/paper/assets/components/queryBuilder/style/queryBuilder.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_queryBuilder_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_queryBuilder_scss__);
//
//
//
//





window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
__webpack_require__("./node_modules/dot/doT.js");
__webpack_require__("./node_modules/jQuery-QueryBuilder/dist/js/query-builder.js");
window.SQLParser = __webpack_require__("./node_modules/sql-parser/index.js");
__webpack_require__("./lambda/template/paper/assets/components/queryBuilder/utils/queryBuilder.i18.mn.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["fields", "query"],
    mounted: function mounted() {
        this.doFilter();
    },

    watch: {
        fields: function fields() {
            this.doFilter();
        }
    },
    methods: {
        getFilterType: function getFilterType(type) {
            // console.log(type, type.toString().indexOf('date'))

            if (type.indexOf("int") >= 0) {
                return "integer";
            }
            if (type.indexOf("float") >= 0 || type.indexOf("doable") >= 0) {
                return "double";
            }
            if (type.indexOf("date") >= 0) {
                return "date";
            }
            if (type.indexOf("datetime") >= 0) {
                return "datetime";
            }
            if (type.indexOf("time") >= 0) {
                return "time";
            }
            return "string";
        },
        doFilter: function doFilter() {
            var _this = this;

            var filters = this.$props.fields.map(function (field) {
                return {
                    id: field.model,
                    label: field.model,
                    type: _this.getFilterType(field.dbType)
                };
            });

            if (filters.length >= 1) {
                jQuery(this.$el).queryBuilder({
                    filters: filters,
                    icons: {
                        add_rule: "ivu-icon ivu-icon-plus",
                        add_group: "ivu-icon ivu-icon-plus-circled",
                        remove_group: "ivu-icon ivu-icon-trash-b",
                        remove_rule: "ivu-icon ivu-icon-trash-b",
                        error: "ivu-icon ivu-icon-trash-b"
                    }
                });

                if (this.$props.query) {
                    var rules = jQuery(this.$el).queryBuilder("getRulesFromSQL", this.$props.query);
                    if (rules != null) {
                        jQuery(this.$el).queryBuilder("setRules", rules);
                    }
                }

                jQuery(this.$el).on("rulesChanged.queryBuilder", function (e) {
                    _this.$emit("change", jQuery(_this.$el).queryBuilder("getSQL", false));
                });
            }
        }
    },
    data: function data() {
        return {};
    },

    computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/ribbon/ribbon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ribbon_scss__ = __webpack_require__("./lambda/template/paper/assets/components/ribbon/ribbon.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ribbon_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ribbon_scss__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sidebar/sidebar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_scss__ = __webpack_require__("./lambda/template/paper/assets/components/sidebar/sidebar.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sidebar_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sub-header/subheader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subheader_scss__ = __webpack_require__("./lambda/template/paper/assets/components/sub-header/subheader.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subheader_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__subheader_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./lambda/template/paper/assets/components/sub-sidebar/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__("./lambda/template/paper/assets/components/sub-sidebar/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/infopanel/info-panel.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".off-canvas-info {\n  z-index: 1000;\n  width: 900px;\n  height: 180px;\n  position: fixed;\n  bottom: -180px;\n  right: 0;\n  transform: translateY(-100%);\n  background: #ffffff;\n  transition: 0.15s;\n  border-top: 1px solid #d9d9d9;\n  border-left: 1px solid #d9d9d9;\n  border-top-left-radius: 6px; }\n  .off-canvas-info .info-toggle {\n    position: absolute;\n    right: 100px;\n    top: -25px;\n    padding: 6px 20px 6px 20px;\n    background: inherit;\n    color: #007AE5;\n    cursor: pointer;\n    line-height: 1;\n    border-top-right-radius: 2px;\n    border-top-left-radius: 2px; }\n    .off-canvas-info .info-toggle i {\n      font-size: 18px;\n      transform: rotate(180deg); }\n    .off-canvas-info .info-toggle:hover {\n      background: #f4f5f6; }\n\n[id='info-toggle'] {\n  position: absolute;\n  clip: rect(0 0 0 0);\n  opacity: 0; }\n\n[id='info-toggle']:checked ~ .off-canvas-info {\n  transform: translateY(0); }\n\n[id='info-toggle']:checked ~ .off-canvas-info > .info-toggle {\n  padding: 6px 20px 8px 20px;\n  top: -27px;\n  box-shadow: 0 -3px 7px rgba(0, 0, 0, 0.175);\n  box-shadow: none; }\n  [id='info-toggle']:checked ~ .off-canvas-info > .info-toggle i {\n    transform: rotate(0deg); }\n\nbody {\n  -webkit-animation: bugfix infinite 1s; }\n\n@-webkit-keyframes bugfix {\n  to {\n    padding: 0; } }\n\n@media (max-width: 350px) {\n  .nav {\n    width: 100%; }\n  [id='info-toggle']:checked ~ .off-canvas-info > .info-toggle {\n    left: auto;\n    right: 0;\n    top: 0; } }\n\n.no-csstransforms .off-canvas-info {\n  left: -350px; }\n\n.no-csstransforms [id='info-toggle']:checked ~ .off-canvas-info {\n  left: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  width: 100%;\n  height: 42px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #007AE5;\n  border-bottom: solid 1px #006ccc;\n  display: flex; }\n  header .logo {\n    display: flex;\n    height: 100%;\n    position: relative;\n    border-right: solid 1px #0088ff;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);\n    padding-right: 15px;\n    align-items: center; }\n    header .logo img {\n      width: 30px;\n      height: 30px;\n      position: relative;\n      margin-left: 15px;\n      margin-right: 10px; }\n    header .logo .logo-title {\n      color: #ffffff;\n      margin-top: 6px; }\n      header .logo .logo-title h3 {\n        font-size: 13px;\n        margin: 0;\n        padding: 0 !important;\n        line-height: 10px; }\n      header .logo .logo-title h4 {\n        font-size: 11px;\n        font-weight: 400;\n        opacity: .8; }\n  header nav {\n    margin-left: 5px; }\n    header nav ul {\n      list-style: none; }\n      header nav ul li {\n        float: left; }\n        header nav ul li.divider {\n          height: 3px;\n          width: 3px;\n          border-radius: 50%;\n          background: #4cabff;\n          margin-top: 21px;\n          opacity: 0.4; }\n        header nav ul li a {\n          display: inline-block;\n          position: relative;\n          height: 42px;\n          line-height: 46px;\n          padding: 0 15px;\n          font-size: 12px;\n          cursor: pointer;\n          color: #e5f3ff;\n          font-weight: 500;\n          transition: all .2s ease-in-out; }\n          header nav ul li a:hover {\n            color: #e5f3ff; }\n          header nav ul li a.active {\n            color: #ffffff; }\n            header nav ul li a.active::after {\n              content: \"\";\n              display: block;\n              position: absolute;\n              bottom: -1px;\n              left: 50%;\n              margin-left: -5px;\n              width: 6px;\n              height: 3px;\n              border-bottom: solid 4px #ffffff;\n              border-left: solid 6px transparent;\n              border-right: solid 6px transparent; }\n            header nav ul li a.active.no-active::after {\n              display: none; }\n            header nav ul li a.active.ribbon::after {\n              border-bottom: solid 4px #ecf0f1; }\n          header nav ul li a i {\n            float: left;\n            font-size: 18px;\n            margin-right: 5px;\n            margin-top: 12px; }\n  header .header-aside {\n    position: relative;\n    height: 42px;\n    font-size: 14px;\n    margin-left: auto; }\n    header .header-aside > ul {\n      list-style: none; }\n      header .header-aside > ul > li {\n        float: left;\n        min-width: 40px;\n        border-right: solid 1px #0088ff; }\n        header .header-aside > ul > li a {\n          height: 100%;\n          width: 100%;\n          display: block;\n          display: flex;\n          align-items: center;\n          justify-content: center; }\n          header .header-aside > ul > li a i {\n            color: #e5f3ff;\n            line-height: 42px;\n            font-size: 19px; }\n          header .header-aside > ul > li a:hover i {\n            color: #ffffff; }\n          header .header-aside > ul > li a.avatar {\n            padding: 0 15px 0 10px; }\n            header .header-aside > ul > li a.avatar img {\n              max-height: 28px;\n              margin-right: 5px;\n              border-radius: 2px; }\n            header .header-aside > ul > li a.avatar span {\n              color: #e5f3ff;\n              font-size: 12px;\n              font-weight: 500; }\n        header .header-aside > ul > li:last-child {\n          border-right: 0; }\n        header .header-aside > ul > li .ivu-badge a {\n          display: inline-block;\n          position: relative;\n          height: 42px;\n          padding: 0 15px;\n          font-size: 11px;\n          cursor: pointer;\n          font-weight: 500;\n          transition: all .2s ease-in-out;\n          text-transform: uppercase; }\n          header .header-aside > ul > li .ivu-badge a i,\n          header .header-aside > ul > li .ivu-badge a span {\n            color: #e5f3ff;\n            line-height: 42px; }\n          header .header-aside > ul > li .ivu-badge a .avatar {\n            max-height: 36px; }\n          header .header-aside > ul > li .ivu-badge a .ivu-avatar {\n            margin-right: 5px; }\n        header .header-aside > ul > li .ivu-badge sup {\n          top: 10px;\n          right: 10px;\n          box-shadow: none; }\n        header .header-aside > ul > li .ivu-dropdown-menu li a {\n          color: #444444;\n          font-size: 13px; }\n          header .header-aside > ul > li .ivu-dropdown-menu li a:hover {\n            color: #007AE5; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/offcanvas/off-canvas.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".off-canvas {\n  z-index: 1000;\n  width: 300px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  transform: translateX(-100%);\n  background: #ffffff;\n  transition: 0.15s;\n  border-right: 1px solid #d9d9d9; }\n  @media (max-width: 768px) {\n    .off-canvas {\n      width: 250px; } }\n  .off-canvas .nav-toggle {\n    position: absolute;\n    left: 100%;\n    top: 10%;\n    padding: 12px 10px;\n    background: inherit;\n    color: #007AE5;\n    cursor: pointer;\n    line-height: 1;\n    box-shadow: 3px 0 7px rgba(0, 0, 0, 0.175);\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px; }\n    .off-canvas .nav-toggle i {\n      font-size: 20px; }\n    .off-canvas .nav-toggle .open {\n      display: block; }\n    .off-canvas .nav-toggle .closed {\n      display: none; }\n    .off-canvas .nav-toggle:hover {\n      background: #f4f5f6; }\n\n[id='nav-toggle'] {\n  position: absolute;\n  clip: rect(0 0 0 0);\n  opacity: 0; }\n\n[id='nav-toggle']:checked ~ .off-canvas {\n  transform: translateX(0); }\n\n[id='nav-toggle']:checked ~ .off-canvas > .nav-toggle {\n  padding: 12px 10px;\n  box-shadow: none; }\n  [id='nav-toggle']:checked ~ .off-canvas > .nav-toggle i {\n    transform: rotate(90deg); }\n  [id='nav-toggle']:checked ~ .off-canvas > .nav-toggle .open {\n    display: none; }\n  [id='nav-toggle']:checked ~ .off-canvas > .nav-toggle .closed {\n    display: block; }\n\nbody {\n  -webkit-animation: bugfix infinite 1s; }\n\n@-webkit-keyframes bugfix {\n  to {\n    padding: 0; } }\n\n@media (max-width: 350px) {\n  .nav {\n    width: 100%; }\n  [id='nav-toggle']:checked ~ .off-canvas > .nav-toggle {\n    left: auto;\n    right: 0;\n    top: 0; } }\n\n.no-csstransforms .off-canvas {\n  left: -350px; }\n\n.no-csstransforms [id='nav-toggle']:checked ~ .off-canvas {\n  left: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/paper-header/PaperHeader.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paper-header {\n  position: relative;\n  height: 120px;\n  z-index: 1000;\n  background: #ffffff;\n  box-shadow: #dddddd 0 5px 6px -5px;\n  display: flex;\n  flex-direction: column; }\n  .paper-header.mini {\n    height: 50px;\n    flex-direction: row; }\n    .paper-header.mini .paper-header-top {\n      margin-left: auto; }\n      .paper-header.mini .paper-header-top .header-left {\n        display: none !important; }\n      .paper-header.mini .paper-header-top .header-right {\n        display: flex;\n        align-items: center;\n        height: 50px; }\n        .paper-header.mini .paper-header-top .header-right .user-control {\n          height: 50px;\n          margin-top: -5px; }\n    .paper-header.mini .paper-header-nav {\n      position: absolute;\n      left: 0;\n      top: 0; }\n      .paper-header.mini .paper-header-nav a {\n        height: 50px;\n        font-size: 11px;\n        font-weight: 500;\n        padding-top: 3px; }\n        .paper-header.mini .paper-header-nav a i {\n          font-size: 14px; }\n        .paper-header.mini .paper-header-nav a.active {\n          margin-bottom: -1px; }\n  .paper-header-top {\n    display: flex; }\n    .paper-header-top .header-left {\n      width: auto;\n      padding-left: 20px; }\n      .paper-header-top .header-left h3.title {\n        font-weight: 400;\n        text-transform: uppercase;\n        color: #2779FF;\n        padding-top: 20px;\n        font-size: 15px;\n        display: flex;\n        align-items: center; }\n        .paper-header-top .header-left h3.title i {\n          font-size: 20px;\n          margin-right: 10px; }\n      .paper-header-top .header-left h3 > a {\n        color: #2779FF;\n        margin-left: 10px; }\n      .paper-header-top .header-left h3 .ivu-btn {\n        margin-left: 10px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center; }\n        .paper-header-top .header-left h3 .ivu-btn i {\n          margin: 0 !important;\n          padding: 0 !important;\n          line-height: 0 !important; }\n    .paper-header-top .header-right {\n      position: relative;\n      font-size: 14px;\n      margin-left: auto;\n      padding-top: 15px;\n      padding-right: 20px; }\n  .paper-header-nav {\n    display: flex;\n    margin-top: auto;\n    padding-left: 20px; }\n    .paper-header-nav .nav {\n      width: auto; }\n      .paper-header-nav .nav ul {\n        list-style: none; }\n        .paper-header-nav .nav ul li {\n          float: left;\n          margin-right: 18px; }\n          .paper-header-nav .nav ul li a {\n            text-transform: uppercase;\n            font-weight: 500;\n            font-size: 12px;\n            height: 36px;\n            color: #535c68;\n            display: flex;\n            align-items: center;\n            border-bottom: solid 2px transparent;\n            margin-left: 7px;\n            margin-right: 7px;\n            margin-bottom: -1px; }\n            .paper-header-nav .nav ul li a i {\n              font-size: 18px;\n              margin-right: 7px; }\n            .paper-header-nav .nav ul li a span {\n              margin-top: 1px; }\n            .paper-header-nav .nav ul li a:hover {\n              color: #2779FF; }\n            .paper-header-nav .nav ul li a.active {\n              color: #2779FF;\n              border-bottom: solid 2px #2779FF; }\n    .paper-header-nav .tool {\n      padding-right: 20px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/queryBuilder/style/queryBuilder.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".query-builder .rules-group-container, .query-builder .rule-container {\n  position: relative;\n  margin: 4px 0;\n  border-radius: 0px;\n  padding: 5px;\n  border: 1px solid #EEE;\n  background: rgba(255, 255, 255, 0.9); }\n\n.query-builder .rule-container .rule-filter-container,\n.query-builder .rule-container .rule-operator-container,\n.query-builder .rule-container .rule-value-container, .query-builder .error-container {\n  display: inline-block;\n  margin: 0 5px 0 0;\n  vertical-align: middle; }\n\n.query-builder {\n  width: 100%; }\n  .query-builder .rules-group-container {\n    padding: 10px;\n    padding-bottom: 6px;\n    border: 1px solid #4c9ee6;\n    background: rgba(250, 240, 210, 0); }\n  .query-builder .rules-group-header {\n    margin-bottom: 10px; }\n    .query-builder .rules-group-header .group-conditions .btn.readonly:not(.active),\n    .query-builder .rules-group-header .group-conditions input[name$='_cond'] {\n      border: 0;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n      white-space: nowrap; }\n    .query-builder .rules-group-header .group-conditions .btn.readonly {\n      border-radius: 3px; }\n  .query-builder .rules-list {\n    list-style: none;\n    padding: 0 0 0 15px;\n    margin: 0; }\n  .query-builder .rule-value-container {\n    border-left: 1px solid #DDD;\n    padding-left: 5px; }\n    .query-builder .rule-value-container .form-control {\n      max-width: 85px; }\n    .query-builder .rule-value-container label {\n      margin-bottom: 0;\n      font-weight: normal; }\n      .query-builder .rule-value-container label.block {\n        display: block; }\n    .query-builder .rule-value-container select,\n    .query-builder .rule-value-container input[type='text'],\n    .query-builder .rule-value-container input[type='number'] {\n      padding: 1px; }\n  .query-builder .error-container {\n    display: none;\n    cursor: help;\n    color: #F00; }\n  .query-builder .has-error {\n    background-color: #FDD;\n    border-color: #F99; }\n    .query-builder .has-error .error-container {\n      display: inline-block !important; }\n  .query-builder .rules-list > *::before, .query-builder .rules-list > *::after {\n    content: '';\n    position: absolute;\n    left: -10px;\n    width: 10px;\n    height: calc(50% + 4px);\n    border-color: #CCC;\n    border-style: solid; }\n  .query-builder .rules-list > *::before {\n    top: -4px;\n    border-width: 0 0 2px 2px; }\n  .query-builder .rules-list > *::after {\n    top: 50%;\n    border-width: 0 0 0 2px; }\n  .query-builder .rules-list > *:first-child::before {\n    top: -12px;\n    height: calc(50% + 14px); }\n  .query-builder .rules-list > *:last-child::before {\n    border-radius: 0 0 0 4px; }\n  .query-builder .rules-list > *:last-child::after {\n    display: none; }\n\n.query-builder,\n.query-builder * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.query-builder {\n  font-family: sans-serif; }\n\n.query-builder .hide {\n  display: none; }\n\n.query-builder .pull-right {\n  float: right !important; }\n\n.query-builder .btn {\n  text-transform: none;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\n.query-builder .btn.focus,\n.query-builder .btn:focus,\n.query-builder .btn:hover {\n  color: #333;\n  text-decoration: none; }\n\n.query-builder .btn.active,\n.query-builder .btn:active {\n  background-image: none;\n  outline: 0px none;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.125) inset; }\n\n.query-builder .btn-success {\n  color: #FFF;\n  background-color: #5CB85C;\n  border-color: #4CAE4C; }\n\n.query-builder .btn-primary {\n  color: #FFF;\n  background-color: #4c9ee6;\n  border-color: #4c9ee6; }\n\n.query-builder .btn-danger {\n  color: #FFF;\n  background-color: #D9534F;\n  border-color: #D43F3A; }\n\n.query-builder .btn-success.active,\n.query-builder .btn-success.focus,\n.query-builder .btn-success:active,\n.query-builder .btn-success:focus,\n.query-builder .btn-success:hover {\n  color: #FFF;\n  background-color: #449D44;\n  border-color: #398439; }\n\n.query-builder .btn-primary.active,\n.query-builder .btn-primary.focus,\n.query-builder .btn-primary:active,\n.query-builder .btn-primary:focus,\n.query-builder .btn-primary:hover {\n  color: #FFF;\n  background-color: #007AE5;\n  border-color: #007AE5; }\n\n.query-builder .btn-danger.active,\n.query-builder .btn-danger.focus,\n.query-builder .btn-danger:active,\n.query-builder .btn-danger:focus,\n.query-builder .btn-danger:hover {\n  color: #FFF;\n  background-color: #C9302C;\n  border-color: #AC2925; }\n\n.query-builder .btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n\n.query-builder .btn-group > .btn {\n  position: relative;\n  float: left;\n  top: -2.5px; }\n\n.query-builder .btn-group > .btn:first-child {\n  margin-left: 0px; }\n\n.query-builder .btn-group > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.query-builder .btn-group > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n.query-builder .btn-group .btn + .btn,\n.query-builder .btn-group .btn + .btn-group,\n.query-builder .btn-group .btn-group + .btn,\n.query-builder .btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.query-builder .btn-xs,\n.query-builder .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/ribbon/ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.ribbon {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  border-bottom: solid 1px #dedede;\n  background: #F0F1F4;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); }\n  ul.ribbon li {\n    padding: 5px 10px; }\n    ul.ribbon li a {\n      width: 100px;\n      height: 80px;\n      border-radius: 3px;\n      display: flex;\n      padding: 0 10px;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      text-align: center;\n      color: #616a84;\n      transition: all .2s ease-in-out; }\n      ul.ribbon li a.active {\n        color: #0C78E6;\n        background: #e1e3e9;\n        font-weight: 500; }\n      ul.ribbon li a i {\n        display: block;\n        font-size: 24px;\n        height: 28px; }\n      ul.ribbon li a span {\n        display: block;\n        height: 16px;\n        font-size: 11px;\n        line-height: 14px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sidebar/sidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  width: 60px;\n  background: #007AE5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .sidebar .logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    height: 60px; }\n    .sidebar .logo img {\n      width: 35px;\n      height: auto; }\n  .sidebar nav {\n    height: auto;\n    width: 100%;\n    display: flex;\n    padding-top: 10px; }\n    .sidebar nav ul {\n      display: block;\n      width: 100%; }\n      .sidebar nav ul li {\n        display: block;\n        padding: 8px 0; }\n        .sidebar nav ul li a {\n          display: block;\n          text-align: center;\n          padding: 8px 0;\n          border-left: solid 2px transparent; }\n          .sidebar nav ul li a i {\n            color: #b2dbff;\n            font-size: 22px; }\n            .sidebar nav ul li a i:before {\n              line-height: inherit; }\n          .sidebar nav ul li a span:not(.ivu-badge) {\n            display: none; }\n          .sidebar nav ul li a [class^=\"ti-\"],\n          .sidebar nav ul li a [class*=\" ti-\"] {\n            font-size: 19px !important; }\n          .sidebar nav ul li a:hover i {\n            color: #ffffff; }\n          .sidebar nav ul li a.active {\n            border-left: solid 2px white; }\n            .sidebar nav ul li a.active i {\n              color: #ffffff;\n              font-weight: 500; }\n  .sidebar .aside-bottom {\n    display: block;\n    margin-top: auto; }\n    .sidebar .aside-bottom ul {\n      display: block;\n      width: 100%; }\n      .sidebar .aside-bottom ul li {\n        display: block; }\n        .sidebar .aside-bottom ul li a {\n          display: block;\n          text-align: center;\n          padding: 16px 0;\n          border-top: solid 1px #0072d6;\n          cursor: pointer; }\n          .sidebar .aside-bottom ul li a.active i, .sidebar .aside-bottom ul li a:hover i {\n            color: #ffffff; }\n          .sidebar .aside-bottom ul li a i {\n            color: #b2dbff;\n            font-size: 20px; }\n  .sidebar.with-text {\n    width: 90px; }\n    .sidebar.with-text nav ul li {\n      padding: 0 0 1px 0; }\n      .sidebar.with-text nav ul li a {\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 14px 0;\n        color: #007AE5;\n        transition: all .3s; }\n        .sidebar.with-text nav ul li a i {\n          color: #b2dbff;\n          display: block;\n          font-size: 22px;\n          margin-bottom: 6px;\n          transition: all .3s; }\n        .sidebar.with-text nav ul li a span:not(.ivu-badge) {\n          color: #b2dbff;\n          font-size: 11px;\n          font-weight: 500;\n          line-height: 12px;\n          padding-left: 5px;\n          padding-right: 5px;\n          display: block;\n          transition: all .3s; }\n        .sidebar.with-text nav ul li a .ivu-badge {\n          position: absolute;\n          top: 3px;\n          right: 10px; }\n        .sidebar.with-text nav ul li a:hover {\n          background: #0088ff; }\n          .sidebar.with-text nav ul li a:hover i {\n            color: #ffffff; }\n        .sidebar.with-text nav ul li a.active {\n          background: #0088ff; }\n          .sidebar.with-text nav ul li a.active span, .sidebar.with-text nav ul li a.active i {\n            color: #ffffff; }\n  .sidebar.wide {\n    width: 200px; }\n    .sidebar.wide nav ul li {\n      padding: 0 0 1px 0; }\n      .sidebar.wide nav ul li.divider {\n        height: 1px;\n        background: #0088ff;\n        margin-top: 10px; }\n      .sidebar.wide nav ul li.sub-title {\n        font-size: 10px;\n        color: #b2dbff;\n        margin-top: 10px; }\n        .sidebar.wide nav ul li.sub-title span {\n          padding-left: 10px; }\n      .sidebar.wide nav ul li a {\n        position: relative;\n        overflow-y: hidden;\n        display: flex;\n        padding: 8px 15px;\n        color: #007AE5;\n        transition: all .3s;\n        align-items: center;\n        border-left: 0;\n        border-top-right-radius: 15px;\n        border-bottom-right-radius: 15px;\n        width: 190px;\n        margin: 5px 10px 0 0; }\n        .sidebar.wide nav ul li a i {\n          color: #b2dbff;\n          display: block;\n          font-size: 22px;\n          transition: all .3s;\n          margin-right: 6px; }\n        .sidebar.wide nav ul li a span:not(.ivu-badge) {\n          color: #b2dbff;\n          font-size: 11px;\n          line-height: 12px;\n          padding-left: 5px;\n          padding-right: 5px;\n          display: block;\n          transition: all .3s; }\n        .sidebar.wide nav ul li a .ivu-badge {\n          position: absolute;\n          top: 3px;\n          right: 10px; }\n        .sidebar.wide nav ul li a:hover {\n          background: #4cabff; }\n          .sidebar.wide nav ul li a:hover i {\n            color: #ffffff; }\n        .sidebar.wide nav ul li a.active {\n          background: #0088ff; }\n          .sidebar.wide nav ul li a.active span, .sidebar.wide nav ul li a.active i {\n            color: #ffffff; }\n  .sidebar.hover {\n    width: 70px !important; }\n    .sidebar.hover nav ul li {\n      padding: 0 0 1px 0; }\n      .sidebar.hover nav ul li a {\n        position: relative;\n        display: block;\n        text-align: center;\n        height: 52px;\n        overflow-y: hidden;\n        padding: 0; }\n        .sidebar.hover nav ul li a i {\n          color: #b2dbff;\n          display: inline-block;\n          line-height: 52px;\n          height: 52px;\n          width: 100%;\n          font-size: 22px;\n          -webkit-transition: margin-top 0.2s;\n          transition: margin-top 0.2s;\n          margin: 0; }\n        .sidebar.hover nav ul li a .ivu-badge {\n          position: absolute;\n          top: 3px;\n          right: 10px; }\n        .sidebar.hover nav ul li a span:not(.ivu-badge) {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: #b2dbff;\n          height: 52px;\n          font-size: 11px;\n          font-weight: 500;\n          line-height: 12px;\n          padding-left: 5px;\n          padding-right: 5px; }\n        .sidebar.hover nav ul li a:hover {\n          background: #0088ff; }\n          .sidebar.hover nav ul li a:hover i {\n            color: #ffffff;\n            margin-top: -52px; }\n        .sidebar.hover nav ul li a.active {\n          background: #0088ff; }\n          .sidebar.hover nav ul li a.active i {\n            margin-top: -52px; }\n          .sidebar.hover nav ul li a.active span {\n            color: #ffffff; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sub-header/subheader.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sub-header {\n  position: relative;\n  height: 60px;\n  display: flex;\n  z-index: 1000; }\n  .sub-header-left {\n    width: auto; }\n    .sub-header-left h3.title {\n      border-top: solid 3px #1994ff;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: #001E35;\n      padding-top: 20px;\n      font-size: 15px; }\n  .sub-header nav ul {\n    list-style: none; }\n    .sub-header nav ul li {\n      float: left; }\n  .sub-header-right {\n    position: relative;\n    font-size: 14px;\n    margin-left: auto;\n    padding-top: 15px; }\n    .sub-header-right ul {\n      list-style: none; }\n      .sub-header-right ul.transparent {\n        margin-right: 4px; }\n        .sub-header-right ul.transparent li {\n          margin-right: 6px; }\n          .sub-header-right ul.transparent li a {\n            background-color: rgba(255, 255, 255, 0.7) !important;\n            max-height: 32px;\n            min-width: 32px;\n            border-radius: 3px;\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3); }\n            .sub-header-right ul.transparent li a:hover {\n              background: #ffffff;\n              color: #007AE5; }\n            .sub-header-right ul.transparent li a.avatar {\n              padding-right: 6px;\n              padding-left: 2px;\n              background: transparent; }\n              .sub-header-right ul.transparent li a.avatar img {\n                height: 28px;\n                width: auto;\n                margin-right: 5px; }\n              .sub-header-right ul.transparent li a.avatar span {\n                color: #001E35;\n                font-size: 10px;\n                font-weight: 500;\n                text-transform: uppercase; }\n            .sub-header-right ul.transparent li a i {\n              font-size: 18px; }\n          .sub-header-right ul.transparent li .ivu-badge {\n            position: relative; }\n            .sub-header-right ul.transparent li .ivu-badge a {\n              display: block;\n              max-height: 32px;\n              width: 32px;\n              font-size: 11px;\n              cursor: pointer;\n              font-weight: 500;\n              transition: all .2s ease-in-out;\n              text-align: center;\n              padding: 0; }\n              .sub-header-right ul.transparent li .ivu-badge a i,\n              .sub-header-right ul.transparent li .ivu-badge a span {\n                color: #001E35;\n                line-height: 32px; }\n              .sub-header-right ul.transparent li .ivu-badge a:hover i {\n                color: #007AE5; }\n            .sub-header-right ul.transparent li .ivu-badge sup {\n              top: 5px;\n              right: 5px;\n              box-shadow: none; }\n      .sub-header-right ul > li {\n        position: relative;\n        float: left; }\n        .sub-header-right ul > li > a,\n        .sub-header-right ul > li .ivu-poptip-rel > a,\n        .sub-header-right ul > li .ivu-badge > a {\n          height: 42px;\n          min-width: 42px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          text-align: center; }\n          .sub-header-right ul > li > a.transparent,\n          .sub-header-right ul > li .ivu-poptip-rel > a.transparent,\n          .sub-header-right ul > li .ivu-badge > a.transparent {\n            background: rgba(255, 255, 255, 0.7);\n            margin-right: 5px !important; }\n          .sub-header-right ul > li > a i,\n          .sub-header-right ul > li .ivu-poptip-rel > a i,\n          .sub-header-right ul > li .ivu-badge > a i {\n            color: #001E35;\n            line-height: 42px;\n            font-size: 22px; }\n          .sub-header-right ul > li > a:hover i,\n          .sub-header-right ul > li > a:hover span,\n          .sub-header-right ul > li .ivu-poptip-rel > a:hover i,\n          .sub-header-right ul > li .ivu-poptip-rel > a:hover span,\n          .sub-header-right ul > li .ivu-badge > a:hover i,\n          .sub-header-right ul > li .ivu-badge > a:hover span {\n            color: #007AE5; }\n          .sub-header-right ul > li > a.avatar,\n          .sub-header-right ul > li .ivu-poptip-rel > a.avatar,\n          .sub-header-right ul > li .ivu-badge > a.avatar {\n            padding: 0; }\n            .sub-header-right ul > li > a.avatar img,\n            .sub-header-right ul > li .ivu-poptip-rel > a.avatar img,\n            .sub-header-right ul > li .ivu-badge > a.avatar img {\n              max-height: 40px;\n              max-width: 40px;\n              border-radius: 50%;\n              margin: 0 auto; }\n            .sub-header-right ul > li > a.avatar span,\n            .sub-header-right ul > li .ivu-poptip-rel > a.avatar span,\n            .sub-header-right ul > li .ivu-badge > a.avatar span {\n              color: #001E35;\n              font-size: 12px;\n              font-weight: 500; }\n        .sub-header-right ul > li:last-child {\n          border-right: 0; }\n        .sub-header-right ul > li .ivu-badge a {\n          display: inline-block;\n          position: relative;\n          height: 42px;\n          min-width: 32px;\n          font-size: 14px;\n          cursor: pointer;\n          font-weight: 500;\n          transition: all .2s ease-in-out;\n          text-transform: uppercase; }\n          .sub-header-right ul > li .ivu-badge a i,\n          .sub-header-right ul > li .ivu-badge a span {\n            color: #001E35;\n            line-height: 42px; }\n          .sub-header-right ul > li .ivu-badge a:hover i {\n            color: #007AE5; }\n        .sub-header-right ul > li .ivu-badge sup {\n          top: 10px;\n          right: 10px;\n          box-shadow: none; }\n        .sub-header-right ul > li .header-apps {\n          width: 230px;\n          padding: 0 0 10px 0; }\n          .sub-header-right ul > li .header-apps .ivu-col {\n            padding: 10px 0; }\n            .sub-header-right ul > li .header-apps .ivu-col a {\n              display: flex;\n              flex-direction: column;\n              border-radius: 3px;\n              height: 90px;\n              width: 75px;\n              color: #737373;\n              align-items: center;\n              justify-content: center;\n              border: 1px solid transparent; }\n              .sub-header-right ul > li .header-apps .ivu-col a:hover {\n                border: 1px solid #eeeeee; }\n              .sub-header-right ul > li .header-apps .ivu-col a img {\n                height: 35px;\n                max-height: 35px;\n                max-width: 35px;\n                margin-bottom: 8px; }\n              .sub-header-right ul > li .header-apps .ivu-col a span {\n                display: block;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                font-size: 12px;\n                color: #555555; }\n        .sub-header-right ul > li.avatar-item .ivu-poptip-content {\n          padding: 0; }\n          .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-arrow {\n            border-bottom-color: #007AE5; }\n            .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-arrow:after {\n              border-bottom-color: #007AE5; }\n          .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body {\n            padding: 0 !important;\n            width: 200px; }\n            .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile {\n              padding: 0 0 5px; }\n              .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile-info {\n                background: #007AE5;\n                padding: 8px 16px;\n                border-top-left-radius: 3px;\n                border-top-right-radius: 3px;\n                color: #ffffff;\n                margin-bottom: 10px; }\n                .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile-info h3 {\n                  font-size: 18px; }\n                .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile-info small {\n                  font-size: 11px; }\n              .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile ul li a {\n                display: flex;\n                align-items: center;\n                padding: 0 16px;\n                color: #555555;\n                width: 200px;\n                justify-content: left;\n                cursor: pointer; }\n                .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile ul li a i {\n                  width: 20px;\n                  margin-right: 8px; }\n                .sub-header-right ul > li.avatar-item .ivu-poptip-content .ivu-poptip-body .header-profile ul li a:hover {\n                  background: #f4f5f6; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./lambda/template/paper/assets/components/sub-sidebar/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sub-sidebar {\n  width: 200px;\n  height: 100vh;\n  background: #F2F3F6; }\n  .sub-sidebar.tabbed .ivu-tabs-bar {\n    height: 51px; }\n  .sub-sidebar.tabbed .ivu-tabs-nav {\n    width: 100%;\n    display: flex;\n    flex-basis: auto; }\n  .sub-sidebar.tabbed .ivu-tabs-tab {\n    height: 52px;\n    flex: 1;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin: 0;\n    font-weight: 500;\n    font-size: 13px;\n    color: #767676;\n    cursor: pointer; }\n    .sub-sidebar.tabbed .ivu-tabs-tab .ivu-icon {\n      margin-right: 5px;\n      font-size: 16px; }\n    .sub-sidebar.tabbed .ivu-tabs-tab-active {\n      color: #007AE5; }\n  .sub-sidebar.tabbed .sub-sidebar-top {\n    display: none; }\n  .sub-sidebar-top {\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: row; }\n    .sub-sidebar-top i {\n      font-size: 20px; }\n    .sub-sidebar-top h2 {\n      font-size: 14px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 10px;\n      color: #42526e; }\n  .sub-sidebar nav ul {\n    padding: 0 15px 10px 15px;\n    list-style: none; }\n    .sub-sidebar nav ul li a {\n      display: flex;\n      padding: 10px 6px;\n      margin: 3px 0;\n      color: #42526e;\n      border-radius: 3px;\n      cursor: pointer;\n      transition: color 0.2s ease;\n      font-size: 13px;\n      line-height: 14px; }\n      .sub-sidebar nav ul li a i {\n        font-size: 18px;\n        margin-right: 10px;\n        width: 20px;\n        font-weight: 500;\n        text-align: center;\n        opacity: .7;\n        line-height: 14px; }\n        .sub-sidebar nav ul li a i.ivu-icon-ios-circle-outline {\n          font-size: 10px;\n          margin-right: 5px;\n          opacity: 1; }\n        .sub-sidebar nav ul li a i.ivu-icon-ios-circle-filled {\n          font-size: 10px;\n          margin-right: 5px;\n          display: none;\n          color: #007AE5; }\n        .sub-sidebar nav ul li a i.ivu-icon-ios-arrow-dropright {\n          font-size: 10px;\n          margin-right: 5px;\n          opacity: 1; }\n        .sub-sidebar nav ul li a i.ivu-icon-ios-arrow-dropdown-circle {\n          font-size: 10px;\n          margin-right: 5px;\n          display: none;\n          color: #007AE5; }\n      .sub-sidebar nav ul li a:hover {\n        color: #007AE5; }\n      .sub-sidebar nav ul li a.active {\n        font-weight: 500;\n        color: #007AE5;\n        background: #e6e8ee; }\n        .sub-sidebar nav ul li a.active i {\n          opacity: 1; }\n          .sub-sidebar nav ul li a.active i.ivu-icon-ios-circle-outline {\n            color: #007AE5;\n            display: none; }\n          .sub-sidebar nav ul li a.active i.ivu-icon-ios-circle-filled {\n            display: block; }\n          .sub-sidebar nav ul li a.active i.ivu-icon-ios-arrow-dropright {\n            color: #007AE5;\n            display: none; }\n          .sub-sidebar nav ul li a.active i.ivu-icon-ios-arrow-dropdown-circle {\n            display: block; }\n", ""]);

// exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07501fa3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sub-header/subheader.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sub-header" }, [
    _c("div", { staticClass: "sub-header-left" }, [_vm._t("left")], 2),
    _vm._v(" "),
    _c("nav", [_vm._t("nav")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "sub-header-right" }, [_vm._t("right")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07501fa3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b13d254\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/queryBuilder/QueryBuilder.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b13d254", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-131f023a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/paper-header/PaperHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "paper-header" }, [
    _c("div", { staticClass: "paper-header-top" }, [
      _c("div", { staticClass: "header-left" }, [_vm._t("left")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "header-right" }, [_vm._t("right")], 2)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "paper-header-nav" }, [
      _c("div", { staticClass: "nav" }, [_vm._t("nav")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "tool" }, [_vm._t("tool")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-131f023a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1474b88e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sidebar/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "sidebar" },
    [
      _vm._t("brand"),
      _vm._v(" "),
      _c("nav", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "aside-bottom" }, [_vm._t("aside-bottom")], 2)
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
    require("vue-hot-reload-api")      .rerender("data-v-1474b88e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d05bea9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/infopanel/info-panel.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      ref: "toggleInfo",
      attrs: { type: "checkbox", id: "info-toggle", "aria-hidden": "true" },
      domProps: { checked: _vm.active },
      on: { click: _vm.toggleFn }
    }),
    _vm._v(" "),
    _c("nav", { staticClass: "off-canvas-info" }, [
      _c("div", [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "info-toggle",
          attrs: { for: "info-toggle", onclick: "" }
        },
        [_c("Icon", { attrs: { type: "ios-arrow-up" } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d05bea9", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59050154\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/ribbon/ribbon.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59050154", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b370be9\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/offcanvas/off-canvas.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      attrs: {
        type: "checkbox",
        id: "nav-toggle",
        checked: "",
        "aria-hidden": "true"
      }
    }),
    _vm._v(" "),
    _c("nav", { staticClass: "off-canvas" }, [
      _c("div", [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "nav-toggle", attrs: { for: "nav-toggle" } },
        [_c("Icon", { attrs: { type: "md-menu" } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b370be9", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-959c27d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/navbar/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    [
      _vm._t("brand"),
      _vm._v(" "),
      _c("nav", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "header-aside" }, [_vm._t("header-aside")], 2)
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
    require("vue-hot-reload-api")      .rerender("data-v-959c27d8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f91dae92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./lambda/template/paper/assets/components/sub-sidebar/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sub-sidebar" }, [
    _c("div", { staticClass: "sub-sidebar-top" }, [_vm._t("top")], 2),
    _vm._v(" "),
    _c("nav", [_vm._t("nav")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "sub-sidebar-bottom" }, [_vm._t("bottom")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f91dae92", module.exports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./lambda/template/paper/assets/index.js");


/***/ })

},[3]);