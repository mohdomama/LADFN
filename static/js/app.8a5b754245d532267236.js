webpackJsonp([1],{127:function(t,e,n){"use strict";e.a={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;n(348),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,n,i,a,r,o,l,s,c,u,d,p,f,v){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:l,distance:c,color:r,opacity:s,width:o},move:{enable:!0,speed:u,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:p},onclick:{enable:f,mode:v},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}},128:function(t,e,n){"use strict";e.a={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"dashboard",title:"Home",action:"home"},{icon:"rss_feed",title:"Blog",action:"blog"},{icon:"file_download",title:"Downloads",action:"downloads"},{icon:"description",title:"Resume",action:"resume"},{icon:"info",title:"About",action:"about"}]}},computed:{title:function(){return this.$route.name}}}},129:function(t,e,n){"use strict";e.a={data:function(){return{logo_url:this.$urls.staticUrls.blog}},head:{title:function(){return{inner:this.$route.name}}}}},130:function(t,e,n){"use strict";e.a={data:function(){return{logo_url:this.$urls.staticUrls.blog}},head:{title:function(){return{inner:this.$route.name}}}}},131:function(t,e,n){"use strict";e.a={data:function(){return{logo_url:this.$urls.staticUrls.blog}},head:{title:function(){return{inner:this.$route.name}}}}},132:function(t,e,n){"use strict";e.a={data:function(){return{logo_url:this.$urls.staticUrls.blog}},head:{title:function(){return{inner:this.$route.name}}}}},133:function(t,e,n){"use strict";e.a={data:function(){return{logo_url:this.$urls.staticUrls.blog}},head:{title:function(){return{inner:this.$route.name}}}}},134:function(t,e,n){n(135),t.exports=n(337)},337:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(92),a=n(341),r=n.n(a),o=n(342),l=(n.n(o),n(344)),s=n.n(l),c=n(345),u=(n.n(c),n(346)),d=n(350),p=n(352),f=n(365),v=n(367);Object(c.sync)(f.a,p.a),i.a.use(r.a),i.a.use(s.a),i.a.use(u.a),i.a.config.productionTip=!1,i.a.prototype.$urls=v.a,new i.a({el:"#app",router:p.a,store:f.a,template:"<App/>",components:{App:d.a}})},342:function(t,e){},347:function(t,e,n){"use strict";var i=n(127),a=n(349),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},349:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},a=[]},350:function(t,e,n){"use strict";var i=n(128),a=n(351),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},351:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-navigation-drawer",{attrs:{fixed:"",dark:"","disable-resize-watcher":"",clipped:t.clipped,light:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-list",[n("v-list-tile",[n("v-list-tile-title",{staticClass:"title"},[t._v("\n          Menu\n        ")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.items,function(e){return n("v-list-tile",{key:e.title,attrs:{router:"",to:e.action}},[n("v-icon",{staticClass:"blue--text"},[t._v(t._s(e.icon))]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("   "+t._s(e.title))])],1)],1)}))],1),t._v(" "),n("v-toolbar",{staticClass:"blue lighten",attrs:{fixed:"",app:"","clipped-left":t.clipped,dark:""}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-content",[n("router-view")],1),t._v(" "),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© Apache License")])])],1)},a=[]},352:function(t,e,n){"use strict";var i=n(92),a=n(353),r=n(354),o=n(357),l=n(359),s=n(361),c=n(363);i.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/about",name:"About",component:o.a},{path:"/blog",name:"Blog",component:l.a},{path:"/downloads",name:"Downloads",component:s.a},{path:"/resume",name:"Resume",component:c.a},{path:"/home",name:"Home",component:r.a}]})},354:function(t,e,n){"use strict";function i(t){n(355)}var a=n(129),r=n(356),o=n(42),l=i,s=Object(o.a)(a.a,r.a,r.b,!1,l,null,null);e.a=s.exports},355:function(t,e){},356:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{src:t.logo_url,alt:"Vuetify.js"}}),t._v(" "),n("blockquote",[t._v("\n        “This is the basic scaffolding of the site”\n        "),n("footer",[n("small",[n("em",[t._v("—Thanks to Areeb Jamal")])])])])])],1),t._v(" "),n("vue-particles",{attrs:{color:"#c1e1de",particleOpacity:.7,particlesNumber:100,shapeType:"circle",particleSize:3,linesColor:"#c1e1de",linesWidth:2,lineLinked:!0,lineOpacity:.3,linesDistance:200,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)},a=[]},357:function(t,e,n){"use strict";var i=n(130),a=n(358),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},358:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{src:t.logo_url,alt:"Vuetify.js"}}),t._v(" "),n("blockquote",[t._v("\n        “This is the about page ”\n        "),n("footer",[n("small",[n("em",[t._v("—Thanks to Areeb Jamal")])])])])])],1)],1)},a=[]},359:function(t,e,n){"use strict";var i=n(131),a=n(360),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},360:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"particle"}},[n("h1",[t._v(" Hello World")])])}]},361:function(t,e,n){"use strict";var i=n(132),a=n(362),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},362:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{src:t.logo_url,alt:"Vuetify.js"}}),t._v(" "),n("blockquote",[t._v("\n        “This is the downloads page ”\n        "),n("footer",[n("small",[n("em",[t._v("—Thanks to Areeb Jamal")])])])])])],1)],1)},a=[]},363:function(t,e,n){"use strict";var i=n(133),a=n(364),r=n(42),o=Object(r.a)(i.a,a.a,a.b,!1,null,null,null);e.a=o.exports},364:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("img",{staticClass:"mb-5",attrs:{id:"logo",src:t.logo_url,alt:"Vuetify.js"}}),t._v(" "),n("blockquote",[t._v("\n        “This is the blog page ”\n        "),n("footer",[n("small",[n("em",[t._v("—Thanks to Areeb Jamal")])])])])])],1)],1)},a=[]},365:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(92),a=n(366);i.a.use(a.a);var r=new a.a.Store({namespaced:!0,modules:{},state:{},getters:{},actions:{},mutations:{}})},367:function(t,e,n){"use strict";e.a={staticUrls:{blog:"https://firebasestorage.googleapis.com/v0/b/amu2ias-firebase.appspot.com/o/static%2Fimg%2Flogo.png?alt=media&token=2f2a0379-fd0e-437e-8d0b-0223c22e82f5"}}}},[134]);
//# sourceMappingURL=app.8a5b754245d532267236.js.map