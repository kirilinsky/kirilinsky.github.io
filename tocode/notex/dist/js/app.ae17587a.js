(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)a=r[d],o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4868:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"app"}},[n("section",{staticClass:"new",style:t.heightNewBlock},[n("div",{staticClass:"hide",attrs:{title:t.showNewBlock?"hide":"show"},on:{click:function(e){return t.hideOrShowNewBlock()}}}),n("h1",[t._v("add new noteX")]),n("div",{staticClass:"line"}),n("label",{attrs:{for:"title"}},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],attrs:{type:"text",id:"title",autocomplete:"off"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),n("label",{attrs:{for:"text"}},[t._v("Text")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],attrs:{id:"text"},domProps:{value:t.note.text},on:{input:function(e){e.target.composing||t.$set(t.note,"text",e.target.value)}}}),n("span",{staticClass:"emodji"},[t._v(t._s(t.emodjiCheck(t.note.emodji)))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.emodji,expression:"note.emodji"}],attrs:{type:"range",min:"1",max:"3",step:"1"},domProps:{value:t.note.emodji},on:{__r:function(e){return t.$set(t.note,"emodji",e.target.value)}}}),n("label",{attrs:{for:"emodji"}},[t._v("Your mood")]),t.errorsCheck&&t.active?n("alert",{attrs:{notice:t.notice}}):t._e(),n("button",{staticClass:"btn",on:{click:function(e){return t.addNote()}}},[t._v("create new")])],1),n("section",{staticClass:"nav"},[n("h3",[t._v("Search notes")]),t._m(0),n("div",{staticClass:"buttons"},[n("i",{staticClass:"fas fa-table",on:{click:function(e){t.listLayout=!1}}}),n("i",{staticClass:"fas fa-bars",on:{click:function(e){t.listLayout=!0}}})])]),n("section",{staticClass:"notes"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.notes.length,expression:"notes.length == 0"}],staticClass:"alert"},[t._m(1),n("p",[t._v("create first note")])]),t._l(t.notes,function(e,i){return n("div",{key:i,staticClass:"note",class:t.classEmodjiCheck(e.emodji),style:t.listLayout?"width:95%":"width:45%"},[n("div",{staticClass:"note__header"},[t._v(t._s(e.title))]),n("div",{staticClass:"note__body"},[t._v(t._s(e.text))]),n("div",{staticClass:"note__date"},[n("span",[t._v(t._s(t.emodjiCheck(e.emodji)))]),n("span",[t._v(t._s(e.dt))])]),n("div",{staticClass:"note__burn",attrs:{title:"fire"},on:{click:function(e){return t.deleteNote(i)}}},[n("i",{staticClass:"fas fa-fire"})])])})],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"search",attrs:{type:"text"}}),n("span",[n("i",{staticClass:"fas fa-search"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" No notes\n      ")])}],a=n("0a0d"),r=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[t._m(0),n("p",[t._v(t._s(t.notice))])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" alert\n  ")])}],u={props:{notice:{type:String,required:!0}}},d=u,f=n("2877"),h=Object(f["a"])(d,c,l,!1,null,null,null),p=h.exports,v={components:{alert:p},data:function(){return{note:{title:"",text:"",emodji:"2"},showNewBlock:!0,active:!1,notice:"",notes:[{title:"Hello ",text:"Im fuckin best procrastinator",emodji:"1",dt:Date(r()())},{title:"B-b!",text:"See ya later",emodji:"3",dt:Date(r()())}],listLayout:!1}},methods:{hideOrShowNewBlock:function(){this.showNewBlock=!this.showNewBlock},deleteNote:function(t){this.notes.splice(t,1)},addNote:function(){if(this.active=!0,!this.errorsCheck){var t=this.note,e=t.title,n=t.text,i=t.emodji;this.notes.push({title:e,text:n,dt:Date(r()()),emodji:i}),this.note.title="",this.note.text="",this.active=!1,this.note.emodji="2",this.notice=""}},emodjiCheck:function(t){switch(t){case"1":return"😒 - sad";case"2":return"😐 - neutral";case"3":return"😃 - happy"}},classEmodjiCheck:function(t){switch(t){case"1":return"sad";case"2":return"neutral";case"3":return"happy"}}},computed:{heightNewBlock:function(){return this.showNewBlock?"height:700px":"height:65px"},errorsCheck:function(){return""==this.note.title?(this.notice="empty title",!0):""==this.note.text?(this.notice="empty text",!0):(this.notice="",!1)}}},m=v,_=Object(f["a"])(m,o,s,!1,null,null,null),w=_.exports;n("4868");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.ae17587a.js.map