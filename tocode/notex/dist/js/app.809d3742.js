(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)o=r[u],a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return s(e)}function i(t){var e=n[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="4678"},4868:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap",attrs:{id:"app"}},[s("newNote",{attrs:{note:t.note,active:t.active},on:{addNote:t.addNote}}),s("navbar",{on:{changeLayout:t.changeLayout}}),s("box",{attrs:{notes:t.notes,listLayout:t.listLayout}})],1)},i=[],o=s("0a0d"),r=s.n(o),c=s("c1df"),l=s.n(c),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"new",style:t.heightNewBlock},[s("div",{staticClass:"hide",attrs:{title:t.showNewBlock?"hide":"show"},on:{click:function(e){return t.hideOrShowNewBlock()}}}),s("h1",[t._v("add new noteX")]),s("div",{staticClass:"line"}),s("label",{attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],attrs:{type:"text",id:"title",autocomplete:"off"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),s("label",{attrs:{for:"text"}},[t._v("Text")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],attrs:{id:"text"},domProps:{value:t.note.text},on:{input:function(e){e.target.composing||t.$set(t.note,"text",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.note.emodji,expression:"note.emodji"}],attrs:{type:"range",min:"1",max:"3",step:"1"},domProps:{value:t.note.emodji},on:{__r:function(e){return t.$set(t.note,"emodji",e.target.value)}}}),s("label",{attrs:{for:"emodji"}},[t._v("Your mood "+t._s(t.emodjiCheck(t.note.emodji,!1)))]),t.active&&t.errorsCheck?s("alert",{attrs:{notice:t.notice}}):t._e(),s("button",{staticClass:"btn",on:{click:function(e){return t.addNote()}}},[t._v("create new")])],1)},u=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert"},[t._m(0),s("p",[t._v(t._s(t.notice))])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" alert\n  ")])}],h={props:{notice:{type:String,required:!0}}},b=h,p=s("2877"),m=Object(p["a"])(b,f,j,!1,null,null,null),v=m.exports,y={components:{alert:v},props:{note:{type:Object,required:!0},active:{type:Boolean,default:!1}},data:function(){return{showNewBlock:!0,notice:""}},methods:{hideOrShowNewBlock:function(){this.showNewBlock=!this.showNewBlock},addNote:function(){this.$emit("addNote",this.note)},emodjiCheck:function(t,e){if(e)switch(t){case"1":return"sad";case"2":return"neutral";case"3":return"happy"}else switch(t){case"1":return"😒 - sad";case"2":return"😐 - neutral";case"3":return"😃 - happy"}}},computed:{errorsCheck:function(){return""==this.note.title?(this.notice="empty title",!0):""==this.note.text?(this.notice="empty text",!0):(this.notice="",!1)},heightNewBlock:function(){return this.showNewBlock?"height:700px":"height:65px"}}},k=y,_=Object(p["a"])(k,d,u,!1,null,null,null),g=_.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"nav"},[s("h3",[t._v("Search notes")]),t._m(0),s("div",{staticClass:"buttons"},[s("i",{staticClass:"fas fa-table",on:{click:function(e){return t.changeLayout(!1)}}}),s("i",{staticClass:"fas fa-bars",on:{click:function(e){return t.changeLayout(!0)}}})])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{staticClass:"search",attrs:{type:"text"}}),s("span",[s("i",{staticClass:"fas fa-search"})])])}],C={methods:{changeLayout:function(t){t?this.$emit("changeLayout",!0):this.$emit("changeLayout",!1)}}},N=C,L=Object(p["a"])(N,w,x,!1,null,null,null),z=L.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"notes"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.notes.length,expression:"notes.length == 0"}],staticClass:"alert"},[t._m(0),s("p",[t._v("create first note")])]),t._l(t.notes,function(e,n){return s("div",{key:n,staticClass:"note",class:t.emodjiCheck(e.emodji,!0),style:t.listLayout?"width:95%":"width:45%"},[e.edit?t._e():s("div",{staticClass:"note__header",on:{dblclick:function(t){e.edit=!0}}},[t._v(t._s(e.title))]),e.edit?s("div",{staticClass:"forHiddenInput"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],staticClass:"hiddenInput",attrs:{type:"text"},domProps:{value:e.title},on:{keyup:function(s){if(!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.edit=!1},input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),e.title.length>=1?s("span",{staticClass:"hiddenButton",on:{click:function(t){e.edit=!1}}},[s("i",{staticClass:"far fa-check-square"})]):t._e()]):t._e(),s("div",{staticClass:"note__body",on:{dblclick:function(e){return t.changeItem(n,"text",e)}}},[t._v(t._s(e.text))]),s("div",{staticClass:"note__date"},[s("span",[t._v(t._s(t.emodjiCheck(e.emodji,!1)))]),s("span",[t._v(t._s(e.dt))])]),s("div",{staticClass:"note__burn",attrs:{title:"fire"},on:{click:function(e){return t.deleteNote(n,e)}}},[s("i",{staticClass:"fas fa-fire"})])])})],2)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" No notes\n    ")])}],B={props:{notes:{type:Array},listLayout:{type:Boolean}},methods:{emodjiCheck:function(t,e){if(e)switch(t){case"1":return"sad";case"2":return"neutral";case"3":return"happy"}else switch(t){case"1":return"😒 - sad";case"2":return"😐 - neutral";case"3":return"😃 - happy"}},deleteNote:function(t,e){var s=this;e.target.parentNode.parentNode.classList.add("fire"),setTimeout(function(){s.notes.splice(t,1)},1e3)}}},S=B,E=Object(p["a"])(S,O,$,!1,null,null,null),P=E.exports,T={components:{newNote:g,navbar:z,box:P},data:function(){return{note:{title:"",text:"",edit:!1,emodji:"2"},notes:[{title:"Hello ",text:"Im fuckin best procrastinator",emodji:"1",edit:!1,dt:l()("2019-04-11 11:07").format("LLL")},{title:"B-b!",text:"See ya later",emodji:"3",edit:!1,dt:l()("2019-04-14 21:23").format("LLL")}],listLayout:!1,active:!1}},methods:{addNote:function(){if(this.active=!0,!this.errorsCheck){var t=this.note,e=t.title,s=t.text,n=t.emodji;this.notes.push({title:e,text:s,dt:l.a.utc(r()()).format("LLL"),emodji:n}),this.note.title="",this.note.text="",this.active=!1,this.note.emodji="2",this.notice=""}},changeLayout:function(t){t&&(this.listLayout=!0),t||(this.listLayout=!1)}},computed:{errorsCheck:function(){return""==this.note.title?(this.notice="empty title",!0):""==this.note.text?(this.notice="empty text",!0):(this.notice="",!1)}}},q=T,M=Object(p["a"])(q,a,i,!1,null,null,null),I=M.exports;s("4868");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.809d3742.js.map