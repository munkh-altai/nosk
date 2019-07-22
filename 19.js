webpackJsonp([19],{

/***/ "./apps/Nosk/front-end/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            showDownTown: false,
            showProperties: false,
            deditMode: false,
            peditMode: false
        };
    },


    components: {},

    methods: {
        methodToRunOnSelect: function methodToRunOnSelect(payload) {
            this.object = payload;
        },
        onSuccessd: function onSuccessd(val) {
            this.$refs.gridd.refresh();
            this.showDownTown = false;
        },
        onSuccessp: function onSuccessp(val) {
            this.$refs.gridp.refresh();
            this.showProperties = false;
        },
        onError: function onError(val) {},
        view_downtown: function view_downtown(id) {
            console.log('view', id);
        },
        edit_downtown: function edit_downtown(id) {
            this.deditMode = true;
            this.$refs.form_downtown.editModel(id);
            //From template
            if (this.templateEdit) {
                this.templateEdit();
            }
        },
        view_properties: function view_properties(id) {
            console.log('view', id);
        },
        edit_properties: function edit_properties(id) {
            this.peditMode = true;
            this.$refs.form_properties.editModel(id);
            //From template
            if (this.templateEditProperties) {
                this.templateEditProperties();
            }
        },
        quickEdit: function quickEdit(id) {
            console.log(id);
        },
        templateEdit: function templateEdit() {

            this.showDownTown = true;
        },
        templateEditProperties: function templateEditProperties() {

            this.showProperties = true;
        }
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])({
        userLogged: "userLogged",
        userProfile: "userProfile"

    })),
    watch: {
        showDownTown: function showDownTown(value) {
            if (!value) {
                this.deditMode = false;
                this.peditMode = false;
            }
        },
        showProperties: function showProperties(value) {
            if (!value) {
                this.deditMode = false;
                this.peditMode = false;
            }
        }
    }
});

/***/ }),

/***/ "./apps/Nosk/front-end/src/assets/images/elizabeth.png":
/***/ (function(module, exports) {

module.exports = "/images/elizabeth.png?0c6443ea403768fa44d6bb20b826d1a6";

/***/ }),

/***/ "./apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./apps/Nosk/front-end/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"stage-3\"]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38b9cd2c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue")
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
Component.options.__file = "apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38b9cd2c", Component.options)
  } else {
    hotAPI.reload("data-v-38b9cd2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38b9cd2c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./apps/Nosk/front-end/src/pages/System/Oronsuuts_.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "online-register" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "property-item col-md-3" }, [
              _c("div", { staticClass: "property-inner" }, [
                _c(
                  "div",
                  { staticClass: "image" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "image-a",
                        attrs: { to: "/system/searchResult" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/elizabeth.png"),
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "left" }, [
                    _c(
                      "h3",
                      { staticClass: "title" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/system/downtown" } },
                          [
                            _vm._v(
                              "\n                    Гэрэг вилла\n                  "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "property-inner" }, [
                _c(
                  "div",
                  { staticClass: "image" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "image-a",
                        attrs: { to: "/system/searchResult" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/elizabeth.png"),
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(3)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "left" }, [
                    _c(
                      "h3",
                      { staticClass: "title" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/system/downtown" } },
                          [
                            _vm._v(
                              "\n                    Гэрэг вилла\n                  "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(4)
                  ]),
                  _vm._v(" "),
                  _vm._m(5)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "property-inner" }, [
                _c(
                  "div",
                  { staticClass: "image" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "image-a",
                        attrs: { to: "/system/searchResult" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/elizabeth.png"),
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(6)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "left" }, [
                    _c(
                      "h3",
                      { staticClass: "title" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/system/downtown" } },
                          [
                            _vm._v(
                              "\n                    Гэрэг вилла\n                  "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(7)
                  ]),
                  _vm._v(" "),
                  _vm._m(8)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "property-inner" }, [
                _c(
                  "div",
                  { staticClass: "image" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "image-a",
                        attrs: { to: "/system/searchResult" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/elizabeth.png"),
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(9)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "left" }, [
                    _c(
                      "h3",
                      { staticClass: "title" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/system/downtown" } },
                          [
                            _vm._v(
                              "\n                    Гэрэг вилла\n                  "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(10)
                  ]),
                  _vm._v(" "),
                  _vm._m(11)
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-9" },
              [
                _c(
                  "div",
                  {
                    staticClass: "Oronsuuts-relative",
                    staticStyle: { "max-height": "196px", overflow: "hidden" }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/sliderImage.png"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "online-register-box",
                        staticStyle: { background: "rgba(25, 130, 232, 0.78)" }
                      },
                      [
                        _vm._m(12),
                        _vm._v(" "),
                        _c("ul", [
                          _c("li", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    _vm.showDownTown = true
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-building-o",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v("ХОТХОН\n                    НЭМЭХ ")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    _vm.showProperties = true
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-building",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v("\n                    ОРОН СУУЦ НЭМЭХ ")
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "Tabs",
                  { attrs: { value: "downtown" } },
                  [
                    _c(
                      "TabPane",
                      { attrs: { label: "ХОТХОН", name: "downtown" } },
                      [
                        _c(
                          "div",
                          { staticClass: "user-grid" },
                          [
                            _vm.userLogged
                              ? _c("datagrid", {
                                  ref: "gridd",
                                  attrs: {
                                    schemaID: 303,
                                    paginate: 10,
                                    fnEdit: _vm.edit_downtown,
                                    fnView: _vm.view_downtown,
                                    permissions: { r: true, u: true, d: true },
                                    user_condition: [
                                      {
                                        grid_field: "user_id",
                                        user_field: "id"
                                      }
                                    ]
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "TabPane",
                      { attrs: { label: "ОРОН СУУЦ", name: "propertes" } },
                      [
                        _c(
                          "div",
                          { staticClass: "user-grid" },
                          [
                            _vm.userLogged
                              ? _c("datagrid", {
                                  ref: "gridp",
                                  attrs: {
                                    schemaID: 306,
                                    paginate: 10,
                                    fnEdit: _vm.edit_properties,
                                    fnView: _vm.view_properties,
                                    permissions: { r: true, u: true, d: true },
                                    user_condition: [
                                      {
                                        grid_field: "user_id",
                                        user_field: "id"
                                      }
                                    ]
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { width: "80%", title: "ХОТХОН " },
          model: {
            value: _vm.showDownTown,
            callback: function($$v) {
              _vm.showDownTown = $$v
            },
            expression: "showDownTown"
          }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12 data-form-modal" },
                [
                  _vm.userLogged
                    ? _c("dataform", {
                        ref: "form_downtown",
                        attrs: {
                          schemaID: 302,
                          editMode: _vm.deditMode,
                          onSuccess: _vm.onSuccessd,
                          do_render: _vm.showDownTown,
                          permissions: null,
                          user_condition: [
                            { form_field: "user_id", user_field: "id" }
                          ],
                          onError: _vm.onError
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { width: "80%", title: "ОРОН СУУЦ" },
          model: {
            value: _vm.showProperties,
            callback: function($$v) {
              _vm.showProperties = $$v
            },
            expression: "showProperties"
          }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12 data-form-modal" },
                [
                  _vm.userLogged
                    ? _c("dataform", {
                        ref: "form_properties",
                        attrs: {
                          schemaID: 305,
                          editMode: _vm.peditMode,
                          onSuccess: _vm.onSuccessp,
                          do_render: _vm.showProperties,
                          permissions: null,
                          user_condition: [
                            { form_field: "user_id", user_field: "id" }
                          ],
                          onError: _vm.onError
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "property-feature" }, [
      _c("li", [
        _c("span", { staticClass: "area" }, [
          _c("i", {
            staticClass: "fa fa-building",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("550 m2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bed" }, [
          _c("i", {
            staticClass: "fa fa-bed",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-bath",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("1")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-car",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("0")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "location" }, [
      _c("i", {
        staticClass: "fa fa-map-marker",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("Баянгол дүүрэг")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("div", { staticClass: "type-wrap" }, [
        _c("span", { staticClass: "price" }, [
          _vm._v("₮550"),
          _c("span", [_vm._v("M")])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "type" }, [_vm._v("Text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "property-feature" }, [
      _c("li", [
        _c("span", { staticClass: "area" }, [
          _c("i", {
            staticClass: "fa fa-building",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("550 m2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bed" }, [
          _c("i", {
            staticClass: "fa fa-bed",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-bath",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("1")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-car",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("0")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "location" }, [
      _c("i", {
        staticClass: "fa fa-map-marker",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("Баянгол дүүрэг")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("div", { staticClass: "type-wrap" }, [
        _c("span", { staticClass: "price" }, [
          _vm._v("₮550"),
          _c("span", [_vm._v("M")])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "type" }, [_vm._v("Text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "property-feature" }, [
      _c("li", [
        _c("span", { staticClass: "area" }, [
          _c("i", {
            staticClass: "fa fa-building",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("550 m2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bed" }, [
          _c("i", {
            staticClass: "fa fa-bed",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-bath",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("1")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-car",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("0")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "location" }, [
      _c("i", {
        staticClass: "fa fa-map-marker",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("Баянгол дүүрэг")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("div", { staticClass: "type-wrap" }, [
        _c("span", { staticClass: "price" }, [
          _vm._v("₮550"),
          _c("span", [_vm._v("M")])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "type" }, [_vm._v("Text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "property-feature" }, [
      _c("li", [
        _c("span", { staticClass: "area" }, [
          _c("i", {
            staticClass: "fa fa-building",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("550 m2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bed" }, [
          _c("i", {
            staticClass: "fa fa-bed",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("2")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-bath",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("1")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("span", { staticClass: "bath" }, [
          _c("i", {
            staticClass: "fa fa-car",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v("0")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "location" }, [
      _c("i", {
        staticClass: "fa fa-map-marker",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("Баянгол дүүрэг")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("div", { staticClass: "type-wrap" }, [
        _c("span", { staticClass: "price" }, [
          _vm._v("₮550"),
          _c("span", [_vm._v("M")])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "type" }, [_vm._v("Text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _c("img", {
        attrs: { src: __webpack_require__("./apps/Nosk/front-end/src/assets/images/anket_2.png"), alt: "" }
      }),
      _vm._v(" Орон сууц нийлүүлэгчдийн бүртгэл\n              ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38b9cd2c", module.exports)
  }
}

/***/ })

});