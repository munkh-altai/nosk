webpackJsonp([3],{P2mE:function(t,a,s){var e=s("VU/8")(s("s68l"),s("UNge"),!1,null,null,null);t.exports=e.exports},UNge:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"head-map"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"main-apartment"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.project,function(a,e){return s("div",{key:e,staticClass:"col-6 col-lg-4 col-md-4"},[s("div",{staticClass:"main-apartment-item"},[s("router-link",{attrs:{to:"/system/searchResult"}},[s("img",{attrs:{src:a.image,alt:""}})]),t._v(" "),s("div",{staticClass:"main-apartment-item-text"},[s("h3",[t._v(t._s(a.price_mk)+" төг")]),t._v(" "),s("div",{staticClass:"main-apartment-item-text-bottom"},[s("router-link",{staticClass:"apartment-garchig",attrs:{to:".price_mk/system/downtown"}},[t._v("\n                  "+t._s(a.title)+"\n                ")]),t._v(" "),s("br"),t._v(" "),s("span",[s("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(t._s(a.address))])],1)])],1)])})),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"pagination-box hidden-mb-45"},[s("Page",{attrs:{"current-page":t.current_page,total:t.total},on:{"current-change":t.changePage}})],1)])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search-area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-area-inner"},[s("div",{staticClass:"search-contents"},[s("form",{attrs:{action:"index.html",method:"GET"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 col-lg-3 col-md-3",staticStyle:{"border-right":"1px solid #e6e6e6"}},[s("div",{staticClass:"form-group"},[s("p",[t._v("Ангилал")]),t._v(" "),s("select",{staticClass:"selectpicker search-fields",attrs:{name:"area"}},[s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")]),t._v(" "),s("option",[t._v("Худалдах")])])])]),t._v(" "),s("div",{staticClass:"col-6 col-lg-3 col-md-3 ",staticStyle:{"border-right":"1px solid #e6e6e6"}},[s("div",{staticClass:"form-group"},[s("p",[t._v("Төрөл")]),t._v(" "),s("select",{staticClass:"selectpicker search-fields",attrs:{name:"property-status"}},[s("option",[t._v("Орон сууц")]),t._v(" "),s("option",[t._v("Орон сууц")]),t._v(" "),s("option",[t._v("Орон сууц")])])])]),t._v(" "),s("div",{staticClass:"col-6 col-lg-3 col-md-3"},[s("div",{staticClass:"form-group"},[s("p",[t._v("Байршил")]),t._v(" "),s("select",{staticClass:"selectpicker search-fields",attrs:{name:"location"}},[s("option",[t._v("Сүхбаатар")]),t._v(" "),s("option",[t._v("Сүхбаатар")]),t._v(" "),s("option",[t._v("Сүхбаатар")]),t._v(" "),s("option",[t._v("Сүхбаатар")]),t._v(" "),s("option",[t._v("Сүхбаатар")]),t._v(" "),s("option",[t._v("Сүхбаатар")])])])]),t._v(" "),s("div",{staticClass:"col-6 col-lg-3 col-md-3 left-border",staticStyle:{width:"100%"}},[s("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-secondary left-but",attrs:{type:"button"}},[s("i",{staticClass:"fa fa-search-plus",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("button",{staticClass:"btn btn-secondary right-but",attrs:{type:"button"}},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),t._v("хайлт\n                  ")])])])])])])])])])}]}},s68l:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("hFpr");s.n(e);a.default={data:function(){return{project:[],arrayOfObjects:[],object:{name:"Object Name"},center:{lat:47.919985,lng:106.9182273},current_page:1,last_page:3,total:9}},components:{},mounted:function(){this.callData()},methods:{changePage:function(t){this.current_page=t,this.callData()},methodToRunOnSelect:function(t){this.object=t},callData:function(){var t=this;this.$http.post("/api/properties_all?page="+this.current_page).then(function(a){var s=a.data;t.project=s.data,t.current_page=s.current_page,t.total=s.total,console.log(t.current_page)}).catch(function(){console.log("error")})}}}}});