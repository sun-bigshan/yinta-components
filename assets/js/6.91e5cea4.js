(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{365:function(t,l,e){"use strict";e.r(l);var n={props:{tableData:{type:Array,default:()=>[]},tableColumn:{type:Array,default:()=>[]},tableHeight:{type:Number,default:null},rowStyle:{type:Function,default:()=>""}},methods:{}},o=e(16),a=Object(o.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"table-box"},[l("el-table",{attrs:{border:"",data:t.tableData,height:t.tableHeight,"row-style":t.rowStyle},on:{"selection-change":t.changeSelection,"sort-change":t.sortTable}},[t._t("expand"),t._v(" "),t._l(t.tableColumn,(function(e,n){return["index"==e.prop?l("el-table-column",{key:"%"+n,attrs:{type:"index",label:e.label,width:e.width,align:e.align}}):"selection"==e.prop?l("el-table-column",{key:"selection_"+n,attrs:{type:"selection",width:e.width,align:e.align}}):e.slot?l("el-table-column",{key:"slot_"+n,attrs:{prop:e.prop,label:e.label,width:e.width,align:e.align,sortable:e.sortable},scopedSlots:t._u([{key:"default",fn:function({row:l}){return[t._t(e.slot,null,{row:l})]}}],null,!0)}):l("el-table-column",{key:"normal_"+n,attrs:{"show-overflow-tooltip":e.showTooltip,prop:e.prop,label:e.label,width:e.width,align:e.align,sortable:e.sortable},scopedSlots:t._u([{key:"default",fn:function({row:n}){return[e.btnButton?t._l(e.btnButton,(function(e,o){return l("el-button",{key:"$"+o,attrs:{type:e.type,icon:e.icon},on:{click:function(t){return e.callback(n)}}},[t._v("\n              "+t._s(e.text)+"\n            ")])})):[t._v("\n            "+t._s(n[e.prop])+"\n          ")]]}}],null,!0)})]}))],2)],1)}),[],!1,null,null,null);l.default=a.exports}}]);