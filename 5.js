webpackJsonp([5],{DpkD:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"online-register"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"property-item col-md-3"},t._l(t.randoms,function(e,s){return i("div",{key:s,staticClass:"property-inner"},[i("div",{staticClass:"image"},[i("span",{staticClass:"main-type"},[t._v(t._s(e.type_title))]),t._v(" "),i("div",{staticClass:"property-item-box"},[i("router-link",{staticClass:"img-box",attrs:{to:"/system/searchResult/"+e.id}},[i("img",{attrs:{src:e.image,alt:""}})])],1)]),t._v(" "),i("h3",{staticClass:"title"},[i("router-link",{attrs:{to:"/system/downtown/"+e.id}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("div",{staticClass:"type-wrap"},[i("p",{staticClass:"rooms"},[t._v(t._s(e.rooms)+" өрөө "),i("span",[t._v(t._s(e.square)+" m²")])]),t._v(" "),i("span",{staticClass:"price"},[t._v("₮"+t._s(t.numberRe(e.price_mk))),i("span",[t._v("m²")])])])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"type-wrap"},[i("span",{staticClass:"location"},[i("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(t._s(e.sumname))]),t._v(" "),"1"==e.une_tohir?i("span",{staticClass:"search-type"},[i("s-word",{attrs:{word:"Price_negotiable"}})],1):t._e()])])])])})),t._v(" "),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"Khuselt-page-register",staticStyle:{"max-height":"190px",overflow:"hidden"}},[i("img",{attrs:{src:s("nP0s"),alt:""}}),t._v(" "),i("div",{staticClass:"online-register-box",staticStyle:{background:"rgba(25, 130, 232, 0.78)"}},[i("h2",[i("img",{attrs:{src:s("6sfh"),alt:""}}),i("s-word",{attrs:{word:"Request_for_housing"}})],1),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.propertieBuyAnket=!0}}},[i("i",{staticClass:"fa fa-id-card-o",attrs:{"aria-hidden":"true"}}),t._v("\n                    ОРОН СУУЦ ХУДАЛДАН АВАХ ХҮСЭЛТ НЭМЭХ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.propertieRentAnket=!0}}},[i("i",{staticClass:"fa fa-id-card-o",attrs:{"aria-hidden":"true"}}),t._v("\n                    ОРОН СУУЦ ТҮРЭЭСЛЭХ ХҮСЭЛТ НЭМЭХ")])])])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"400px"}},[i("div",{staticClass:"user-grid"},[t.userLogged?i("datagrid",{ref:"grid",attrs:{schemaID:352,paginate:10,fnEdit:t.edit,permissions:{r:!0,u:!0,d:!0},user_condition:[{grid_field:"user_id",user_field:"id"}]}}):t._e()],1)])])])])]),t._v(" "),i("Modal",{attrs:{width:"80%",title:" ОРОН СУУЦ ХУДАЛДАН АВАХ ХҮСЭЛТ"},model:{value:t.propertieBuyAnket,callback:function(e){t.propertieBuyAnket=e},expression:"propertieBuyAnket"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"col-md-12 data-form-modal"},[t.userLogged?i("dataform",{ref:"form",attrs:{schemaID:325,editMode:t.editMode,onSuccess:t.onSuccess,do_render:t.propertieBuyAnket,permissions:null,user_condition:[{form_field:"user_id",user_field:"id"}],onError:t.onError}}):t._e()],1)])])]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),i("Modal",{attrs:{width:"80%",title:" ОРОН СУУЦ ТҮРЭЭСЛЭХ ХҮСЭЛТ"},model:{value:t.propertieRentAnket,callback:function(e){t.propertieRentAnket=e},expression:"propertieRentAnket"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"col-md-12 data-form-modal"},[t.userLogged?i("dataform",{ref:"form",attrs:{schemaID:493,editMode:t.editMode,onSuccess:t.onSuccess,do_render:t.propertieRentAnket,permissions:null,user_condition:[{form_field:"user_id",user_field:"id"}],onError:t.onError}}):t._e()],1)])])]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"})])],1)},staticRenderFns:[]}},"YN/y":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),r=s.n(i),a=s("hFpr"),o=(s.n(a),s("NYxO")),n=s("ViqS"),d=s.n(n);e.default={data:function(){return{randoms:[],propertieBuyAnket:!1,propertieRentAnket:!1,editMode:!1}},components:{},methods:{numberRe:function(t){return d()(t).format("0,0")},methodToRunOnSelect:function(t){this.object=t},onSuccess:function(t){this.propertieBuyAnket=!1},onError:function(t){},edit:function(t){this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},templateEdit:function(){this.propertieBuyAnket=!0},callData:function(){var t=this;this.$Loading.start(),this.$http.get("/api/random").then(function(e){var s=e.data;t.randoms=s,t.$Loading.finish()}).catch(function(){console.log("error"),t.$Loading.error()})}},computed:r()({},Object(o.mapGetters)({userLogged:"userLogged",userProfile:"userProfile"})),watch:{propertieBuyAnket:function(t){t||(this.editMode=!1,document.body.style.overflow="auto")}},mounted:function(){this.callData()}}},x1Uw:function(t,e,s){var i=s("VU/8")(s("YN/y"),s("DpkD"),!1,null,null,null);t.exports=i.exports}});