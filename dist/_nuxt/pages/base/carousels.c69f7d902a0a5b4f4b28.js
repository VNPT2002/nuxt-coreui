webpackJsonp([33],{"3ijW":function(t,s,e){"use strict";s.a={name:"carousels",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}}},Xl0h:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("3ijW"),a=e("wrRr"),l=e("VU/8")(i.a,a.a,!1,null,null,null);l.options.__file="pages/base/carousels.vue",s.default=l.exports},wrRr:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"animated fadeIn"},[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[t._v("Bootstrap Carousel")]),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/carousel",target:"_blank"}},[e("small",{staticClass:"text-muted"},[t._v("docs")])])])]),e("div",[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},[e("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://lorempixel.com/1024/480/technics/2/"}}),e("b-carousel-slide",{attrs:{"img-src":"https://lorempixel.com/1024/480/technics/4/"}},[e("h1",[t._v("Hello world!")])]),e("b-carousel-slide",{attrs:{"img-src":"https://lorempixel.com/1024/480/technics/8/"}}),e("b-carousel-slide",[e("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://lorempixel.com/1024/480/technics/5/",alt:"image slot"},slot:"img"})]),e("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[e("p",[t._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n                  eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n                  ut lacus vel interdum.\n                ")])])],1),e("p",{staticClass:"mt-4"},[t._v("\n              Slide #: "+t._s(t.slide)),e("br"),t._v("\n              Sliding: "+t._s(t.sliding)+"\n            ")])],1)])],1)],1)],1)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a}});