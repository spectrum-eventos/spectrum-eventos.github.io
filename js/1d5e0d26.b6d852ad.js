(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1d5e0d26"],{7212:function(e,t,n){"use strict";var s=n("a512"),r=n.n(s);r.a},a041:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"frequency"},[n("q-table",{staticClass:"table",attrs:{title:"Frequencia","row-key":"id","rows-per-page-label":"Itens por página","no-data-label":"Nenhum presença foi criado ainda",loading:e.loading,data:e.approvedUsers,columns:e.columns},scopedSlots:e._u([{key:"top-right",fn:function(t){return[n("div",{staticClass:"row items-end"},[n("q-field",{staticClass:"q-pa-md field-frequency",attrs:{label:"Mostrar apenas aprovados",orientation:"vertical"}},[n("q-checkbox",{model:{value:e.showApproved,callback:function(t){e.showApproved=t},expression:"showApproved"}})],1),n("q-field",{staticClass:"q-pa-md field-frequency",attrs:{label:"Frequência desejada",orientation:"vertical"}},[n("q-input",{attrs:{inverted:"",suffix:"%",type:"number"},model:{value:e.desiredFrequency,callback:function(t){e.desiredFrequency=t},expression:"desiredFrequency"}})],1),n("q-field",{staticClass:"q-pa-md field-list",attrs:{label:"Chamada",orientation:"vertical"}},[n("q-select",{staticClass:"field-list",attrs:{filter:"",inverted:"",multiple:"","filter-placeholder":"Buscar",options:e.listOptions,disabled:0===e.listOptions.length,readonly:0===e.listOptions.length},model:{value:e.selectedLists,callback:function(t){e.selectedLists=t},expression:"selectedLists"}})],1)],1)]}},{key:"body-cell-certified",fn:function(t){return n("q-td",{staticClass:"animate-background",class:e.certifiedClass(t.row.attendance),attrs:{props:t}})}}])})],1)},r=[];s._withStripped=!0;n("55dd"),n("7f7f");var a=n("3156"),i=n.n(a),c=(n("96cf"),n("c973")),l=n.n(c),o=n("2f62"),u={name:"frequency",components:{},beforeRouteEnter:function(){var e=l()(regeneratorRuntime.mark(function e(t,n,s){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:try{s()}catch(e){this.$log.error(e)}case 1:case"end":return e.stop()}},e,this)}));return function(t,n,s){return e.apply(this,arguments)}}(),props:{},data:function(){var e=this;return{loading:!1,showApproved:!1,columns:[{name:"certified"},{name:"name",label:"Nome",field:"name",align:"left"},{name:"frequency",label:"Frequencia",field:function(t){return e.selectedLists.length>0?"".concat(100*t.attendance/e.selectedLists.length," %"):"?? %"}}],users:[],selectedLists:[],desiredFrequency:75}},computed:i()({},Object(o["c"])("presence",["presences"]),Object(o["c"])("list",["lists"]),{presenceParams:function(){return{"search[list_event_id_eq]":this.$route.params.id,"search[s]":"name"}},listParams:function(){return{"search[event_id_eq]":this.$route.params.id,"search[s]":"name"}},listOptions:function(){return this.lists.map(function(e){var t={label:e.name,value:e.id};return t})},approvedUsers:function(){var e=this;return this.selectedLists.length>0&&this.showApproved?this.users.filter(function(t){var n=100*t.attendance/e.selectedLists.length;return n>=e.desiredFrequency}):this.users}}),methods:i()({},Object(o["b"])("presence",["getAllPresences"]),Object(o["b"])("list",["getAllLists"]),{fetchPresences:function(){var e=l()(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAllPresences(this.presenceParams);case 2:return e.next=4,this.presences.map(function(e){var n=t.users.filter(function(t){return t.name===e.name})[0];return n?n.attendance+=1:t.users.push({name:e.name,attendance:1}),!0});case 4:return e.next=6,this.users.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),certifiedClass:function(e){if(this.selectedLists.length>0){var t=100*e/this.selectedLists.length;return t>=this.desiredFrequency?"approved":"unapproved"}return"unapproved"}}),mounted:function(){var e=l()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.getAllLists(this.listParams);case 3:return e.next=5,this.fetchPresences();case 5:this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},d=u,p=(n("7212"),n("2877")),f=Object(p["a"])(d,s,r,!1,null,"342eb041",null);f.options.__file="frequency.vue";t["default"]=f.exports},a512:function(e,t,n){}}]);