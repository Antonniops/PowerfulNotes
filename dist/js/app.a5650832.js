(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f410203c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"91313f6b"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e44":function(e,t,n){"use strict";var r=n("e62f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},c=i,s=(n("2e44"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),d=n("f6c4"),f=Object(s["a"])(c,a,o,!1,null,null,null),v=f.exports;u()(f,{VApp:p["a"],VMain:d["a"]});n("d3b7");var h=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"keep"}},[n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"deep-purple accent-4 altura",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-row",{staticClass:"ml-4"},[n("v-col",{staticClass:"app-name",attrs:{cols:"12",sm:"6"}},[n("span",{staticClass:"title mr-5 white--text"},[e._v(" Powerful "),n("span",{staticClass:"font-weight-light"},[e._v("Notes")])])]),n("v-col",{staticClass:"search-bar",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{color:"purple lighten-3",flat:"","hide-details":"",label:"Search","prepend-inner-icon":"search"}})],1)],1),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"grey lighten-4"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[e._l(e.items,(function(t,r){return[t.heading?n("v-row",{key:r,attrs:{align:"center"}},[n("v-col",{attrs:{cols:"6"}},[t.heading?n("v-subheader",[e._v(e._s(t.heading))]):e._e()],1),n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[n("v-btn",{attrs:{small:"",text:""}},[e._v("edit")])],1)],1):t.divider?n("v-divider",{key:r,staticClass:"my-4",attrs:{dark:""}}):n("v-list-item",{key:r,attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"grey--text"},[e._v(e._s(t.text))])],1)],1)]}))],2)],1),n("v-main",[n("v-container",{staticClass:"grey lighten-4 fill-height",attrs:{fluid:""}},[n("router-view")],1)],1)],1)},b=[],g={props:{source:String},data:function(){return{drawer:null,items:[{icon:"lightbulb_outline",text:"Notes"},{icon:"touch_app",text:"Reminders"},{divider:!0},{heading:"Labels"},{icon:"add",text:"Create new label"},{divider:!0},{icon:"archive",text:"Archive"},{icon:"delete",text:"Trash"},{divider:!0},{icon:"settings",text:"Settings"},{icon:"chat_bubble",text:"Trash"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"},{icon:"keyboard",text:"Keyboard shortcuts"}]}}},y=g,w=(n("cccb"),n("40dc")),x=n("5bc1"),_=n("8336"),C=n("62ad"),V=n("a523"),k=n("ce7e"),A=n("132d"),S=n("8860"),O=n("da13"),j=n("1800"),T=n("5d23"),E=n("f774"),L=n("0fd9"),N=n("2fa4"),P=n("e0c7"),I=n("8654"),B=Object(s["a"])(y,m,b,!1,null,null,null),M=B.exports;u()(B,{VApp:p["a"],VAppBar:w["a"],VAppBarNavIcon:x["a"],VBtn:_["a"],VCol:C["a"],VContainer:V["a"],VDivider:k["a"],VIcon:A["a"],VList:S["a"],VListItem:O["a"],VListItemAction:j["a"],VListItemContent:T["a"],VListItemTitle:T["b"],VMain:d["a"],VNavigationDrawer:E["a"],VRow:L["a"],VSpacer:N["a"],VSubheader:P["a"],VTextField:I["a"]}),r["a"].use(h["a"]);var D=[{path:"/",name:"Home",component:M,children:[{path:"/notes",name:"Notes",component:function(){return n.e("about").then(n.bind(null,"0841"))}},{path:"**",name:"Notes",component:function(){return n.e("about").then(n.bind(null,"0841"))}}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=new h["a"]({routes:D}),$=H,q=n("2f62");r["a"].use(q["a"]);var F=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=n("f309");r["a"].use(J["a"]);var K=new J["a"]({});n("d1e78");r["a"].config.productionTip=!1,new r["a"]({router:$,store:F,vuetify:K,render:function(e){return e(v)}}).$mount("#app")},"5ced":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},e62f:function(e,t,n){}});
//# sourceMappingURL=app.a5650832.js.map