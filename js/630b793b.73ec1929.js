(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["630b793b"],{"3e83":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"primary"}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("img",{staticClass:"logo",attrs:{src:"statics/logo.png"}}),a("q-toolbar-title",[t._v("\n        Spectrum\n        "),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Painel Administrativo")])])],1)],1),a("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-grey-2":null},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list-header",[t._v("Menu")]),a("q-item",{nativeOn:{click:function(e){t.$router.push("/event/"+t.id+"/list")}}},[a("q-item-side",{attrs:{icon:"list"}}),a("q-item-main",{attrs:{label:"Gerenciar Chamadas"}})],1),a("q-item",{nativeOn:{click:function(e){t.$router.push("/event/"+t.id+"/frequency")}}},[a("q-item-side",{attrs:{icon:"contacts"}}),a("q-item-main",{attrs:{label:"Ver frequência"}})],1),a("q-item",{nativeOn:{click:function(e){t.$router.push("/event")}}},[a("q-item-side",{attrs:{icon:"arrow back"}}),a("q-item-main",{attrs:{label:"Voltar"}})],1)],1)],1),a("q-page-container",{staticClass:"view"},[a("router-view")],1)],1)},i=[];n._withStripped=!0;var r={name:"event",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},computed:{id:function(){return this.$route.params.id}},methods:{}},s=r,l=(a("958d"),a("2877")),o=Object(l["a"])(s,n,i,!1,null,"6111ecf2",null);o.options.__file="index.vue";e["default"]=o.exports},"958d":function(t,e,a){"use strict";var n=a("a3ab"),i=a.n(n);i.a},a3ab:function(t,e,a){}}]);