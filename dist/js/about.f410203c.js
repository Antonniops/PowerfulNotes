(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0841":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container fill-height"},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-card",{directives:[{name:"click-outside",rawName:"v-click-outside"}]},[a("v-card-title",[t._v(" Powerful Notes "),a("v-btn",{staticClass:"ma-2 ml-auto icon-clickable",attrs:{text:"",icon:"",color:"red"}},[a("v-icon",[t._v("delete")])],1)],1),a("v-card-text",[t._v("Powerful Notes is a new notes app")]),a("v-card-subtitle",[a("v-chip",t._g({staticClass:"ma-2",attrs:{color:"orange","text-color":"white",close:"",to:"/notes"}},t.on),[a("v-icon",{attrs:{right:""}},[t._v("mdi-star")]),a("span",{staticClass:"ml-5"},[t._v("Premium")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{directives:[{name:"click-outside",rawName:"v-click-outside"}]},[a("v-card-title",[t._v(" Powerful Notes "),a("v-btn",{staticClass:"ma-2 ml-auto icon-clickable",attrs:{text:"",icon:"",color:"red"}},[a("v-icon",[t._v("delete")])],1)],1),a("v-card-text",[t._v("Powerful Notes is a new notes app")]),a("v-card-subtitle",[a("v-chip",t._g({staticClass:"ma-2",attrs:{color:"orange","text-color":"white",close:"",to:"/notes"}},t.on),[a("v-icon",{attrs:{right:""}},[t._v("mdi-star")]),a("span",{staticClass:"ml-5"},[t._v("Premium")])],1)],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"ma-2",attrs:{fab:"",color:"purple",dark:""}},[a("v-icon",{staticClass:"ma-0",attrs:{right:""}},[t._v("add")])],1)],1)],1)},s=[],o={},c=o,l=a("2877"),r=a("6544"),n=a.n(r),d=a("8336"),u=(a("0481"),a("4069"),a("a9e3"),a("5530")),h=(a("615b"),a("10d2")),v=a("297c"),p=a("1c87"),b=a("58df"),f=Object(b["a"])(v["a"],p["a"],h["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},h["a"].options.computed.classes.call(this))},styles:function(){var t=Object(u["a"])({},h["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=v["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}}),g=a("80d2"),m=(Object(g["g"])("v-card__actions"),Object(g["g"])("v-card__subtitle")),C=Object(g["g"])("v-card__text"),_=Object(g["g"])("v-card__title"),k=(a("4de4"),a("4160"),a("3835")),x=(a("8adc"),a("0789")),O=a("9d26"),j=a("a9ad"),w=a("4e82"),y=a("7560"),B=a("f2e7"),$=a("af2b"),P=a("d9bd"),V=Object(b["a"])(j["a"],$["a"],p["a"],y["a"],Object(w["a"])("chipGroup"),Object(B["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({"v-chip":!0},p["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(k["a"])(e,2),i=a[0],s=a[1];t.$attrs.hasOwnProperty(i)&&Object(P["a"])(i,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(O["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(x["b"],t)},genClose:function(){var t=this;return this.$createElement(O["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,s=a.data;s.attrs=Object(u["a"])(Object(u["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var o=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(o,s),e)}}),E=a("62ad"),S=a("132d"),N=a("0fd9"),G=a("269a"),I=a.n(G),T=a("a293"),L=Object(l["a"])(c,i,s,!1,null,null,null);e["default"]=L.exports;n()(L,{VBtn:d["a"],VCard:f,VCardSubtitle:m,VCardText:C,VCardTitle:_,VChip:V,VCol:E["a"],VIcon:S["a"],VRow:N["a"]}),I()(L,{ClickOutside:T["a"]})},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[i]=a.directives[i]||e[i]}},"615b":function(t,e,a){},"8adc":function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],o=a("2877"),c={},l=Object(o["a"])(c,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=about.f410203c.js.map