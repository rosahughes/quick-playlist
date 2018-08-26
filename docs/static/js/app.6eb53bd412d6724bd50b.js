webpackJsonp([1],{"922G":function(t,e){},F7T6:function(t,e){},IiyH:function(t,e,a){t.exports=a.p+"static/img/music.038ad91.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Quick Playlist")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[n("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"Search"}}},[t._v("Search")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"About"}}},[t._v("About")])],1)])])]),t._v(" "),n("img",{attrs:{src:a("IiyH")}}),t._v(" "),n("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("922G")},null,null).exports,i=a("/ocq"),o=(a("mtWM"),{name:"Search",data:function(){return{prediction:null,errors:[],results:[],term:""}},methods:{Search:function(){var t=this.term,e=this;$.ajax({url:"https://itunes.apple.com/search",dataType:"jsonp",data:{term:t,limit:20},error:function(t,e,a){console.log(a)},success:function(t,a,n){console.log(t),e.results=t.results}})}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v("QuickPlaylist: instant tunes")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Generate a random playlist by entering a keyword:")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.Search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],attrs:{type:"text",placeholder:"Keyword"},domProps:{value:t.term},on:{input:function(e){e.target.composing||(t.term=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Submit")])]),t._v(" "),t.results?a("div",{staticClass:"results"},[a("ul",{attrs:{id:"results"}},t._l(t.results,function(e){return a("li",[a("a",{attrs:{target:"_blank",href:e.trackViewUrl}},[t._v(t._s(e.trackName))]),t._v(", by artist "),a("a",{attrs:{target:"_blank",href:e.artistViewUrl}},[t._v(t._s(e.artistName))])])}))]):t.errors.length>0?a("ul",{staticClass:"errors"},t._l(t.errors,function(e){return a("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("ZH6k")},"data-v-4e71588c",null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component"},[a("h2",[t._v("About the Quick Playlist App")]),t._v(" "),a("p",[t._v("Have you ever been heading out the door to a holiday party, social event, day at the beach, afternoon at a friend's, or just a drive across town, and realized that you don't have a playlist ready to go? This Quick Playlist app is a fast way to randomly search the huge iTunes database using a keyword. The app will instantly return 20 randomly selected songs, that match up with title, artist, album name, description, etc. You may not love every song on the results list, and that's okay! It's meant to be a jumping off point, an inspiration to download a few new songs and maybe combine them with some others that pop into your mind. Alternatively, each result is hyperlinked to its iTunes page, so you can navigate to the song page and check out their related recommendations. This app is intended to be a versatile, useful utility for when you need some ideas on the go.")]),t._v(" "),a("p",[t._v("I built this app with Vue.js 2, and it is deployed to a public server using Github Pages. You can find my code in my "),a("a",{attrs:{href:"https://github.com/rosahughes/quick-playlist",target:"_blank"}},[t._v("GitHub repo.")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("This app was built by "),a("a",{attrs:{href:"http://www.rosalhughes.com",target:"_blank"}},[t._v("Rosa Hughes")]),t._v(" in 2018 as a capstone project for the "),a("a",{attrs:{href:"https://ncs.seattleu.edu/programs-courses/web-development/",target:"_blank"}},[t._v("Web Development Certificate program")]),t._v(" at Seattle University"),t._v(".")])])}]};var p=a("VU/8")(null,c,!1,function(t){a("F7T6")},"data-v-39185a7d",null).exports;n.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"Search",component:u},{path:"/about",name:"About",component:p}]}),d=a("AYPi"),h=a.n(d);n.a.use(h.a,{id:"UA-124629724-1",autoTracking:{exception:!0},router:v,debug:{enabled:!0}}),n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:s},template:"<App/>"})},ZH6k:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6eb53bd412d6724bd50b.js.map