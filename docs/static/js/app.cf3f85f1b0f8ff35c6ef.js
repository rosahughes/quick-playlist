webpackJsonp([1],{IiyH:function(e,t,r){e.exports=r.p+"static/img/music.038ad91.png"},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:r("IiyH")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},a,!1,function(e){r("bPyO")},null,null).exports,l=r("/ocq"),o=(r("mtWM"),{name:"Search",data:function(){return{prediction:null,errors:[],results:[],term:""}},methods:{Search:function(){var e=this.term,t=this;$.ajax({url:"https://itunes.apple.com/search",dataType:"jsonp",data:{term:e},error:function(e,t,r){console.log(r)},success:function(e,r,n){console.log(e),t.results=e.results}})}}}),i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("ul",{staticClass:"nav"},[r("li",[r("router-link",{attrs:{to:{name:"Search"}}},[e._v("Search")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:{name:"Results"}}},[e._v("Results")])],1)]),e._v(" "),r("h1",[e._v("QuickPlaylist: for an instant set of tunes")]),e._v(" "),r("h3",[e._v("Generate a random playlist by entering a keyword:")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.Search(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],attrs:{type:"text",placeholder:"Keyword"},domProps:{value:e.term},on:{input:function(t){t.target.composing||(e.term=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Submit")])]),e._v(" "),e.results?r("div",{staticClass:"results"},[r("ul",{attrs:{id:"results"}},e._l(e.results,function(t){return r("li",[e._v("\n        "+e._s(t.trackName)+"\n      ")])}))]):e.errors.length>0?r("ul",{staticClass:"errors"},e._l(e.errors,function(t){return r("li",[e._v("\n      "+e._s(t.message)+"\n    ")])})):e._e()])},staticRenderFns:[]};var c=r("VU/8")(o,i,!1,function(e){r("yPyt")},"data-v-2a7e6ce5",null).exports,u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component"},[r("ul",{staticClass:"nav"},[r("li",[r("router-link",{attrs:{to:{name:"Search"}}},[e._v("Search")])],1),e._v(" "),r("li",[r("router-link-active",{attrs:{to:{name:"Results"}}},[e._v("Results")])],1)]),e._v(" "),r("h2",[e._v("Playlist for keyword "+e._s(e.message))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")]),e._v(" "),r("li",[e._v("placeholder")])])}]};var v=r("VU/8")({data:function(){return{message:"term"}}},u,!1,function(e){r("Ye79")},"data-v-c0296f98",null).exports;n.a.use(l.a);var _=new l.a({routes:[{path:"/",name:"Search",component:c},{path:"/Results",name:"Results",component:v}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},Ye79:function(e,t){},bPyO:function(e,t){},yPyt:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.cf3f85f1b0f8ff35c6ef.js.map