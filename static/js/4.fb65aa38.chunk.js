(this["webpackJsonpurl-shortener-app"]=this["webpackJsonpurl-shortener-app"]||[]).push([[4],{24:function(e,n,t){e.exports=t(26)()},26:function(e,n,t){"use strict";var r=t(27);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},27:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},31:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(0),a=t.n(o),i=t(3),c=t(24),s=t.n(c);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=Object(o.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,i=void 0===o?24:o,c=u(e,["color","size"]);return a.a.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),a.a.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));p.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},p.displayName="Copy";var f=p;function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var h=Object(o.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,i=void 0===o?24:o,c=b(e,["color","size"]);return a.a.createElement("svg",d({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),a.a.createElement("polyline",{points:"16 6 12 2 8 6"}),a.a.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"15"}))}));h.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},h.displayName="Share";var v,m,y,g,O=h,w=t(22),j=t.n(w),x=t(23),k=function(){var e=Object(x.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.share({url:n});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error:",e.t0.name);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),T=t(1),E=i.b.div(v||(v=Object(r.a)(["\n\tbackground-color: #15181c;\n\tmargin-top: 4rem;\n\tpadding: 1rem;\n\t/* position: relative; */\n\tdisplay: flex;\n\talign-items: center;\n\t@media (min-width: 37.5em) {\n\t\tpadding: 2rem;\n\t}\n"]))),C=i.b.input(m||(m=Object(r.a)(["\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\tfont: inherit;\n\tflex: 1;\n\tcolor: #42a5f5;\n\tfont-size: 1.6rem;\n\tmargin: 0;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),P=i.b.button(y||(y=Object(r.a)(["\n\tflex: 0 0 5rem;\n\tbackground: none;\n\n\tborder: none;\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tsvg {\n\t\ttransition: stroke 0.3s ease;\n\t}\n\t&:hover svg {\n\t\tstroke: #42a5f5;\n\t}\n"]))),R=i.b.span(g||(g=Object(r.a)(["\n\tbackground-color: #0f2b46;\n\tborder-radius: 0.3rem;\n\tcolor: #fff;\n\tfont-size: 1.4rem;\n\tpadding: 0.4rem 1rem;\n\topacity: 0;\n\ttransform: translateX(-12.5%) translateY(1rem);\n\tposition: absolute;\n\tbottom: calc(100% + 2rem);\n\tleft: 0;\n\tz-index: 100;\n\ttransition: opacity 0.3s ease, transform 0.3s ease;\n\t&.show {\n\t\topacity: 1;\n\t\ttransform: translateX(-12.5%) translateY(0);\n\t}\n"])));n.default=function(e){var n=e.url,t=Object(o.useRef)(null),r=Object(o.useRef)(null),a=function(){t.current.classList.remove("show")},i=function(){t.current.classList.add("show"),setTimeout(a,2e3)};return Object(T.jsxs)(E,{children:[Object(T.jsx)(C,{onClick:function(){window.open(n,"_blank","noopener,noreferrer")},type:"url",ref:r,readOnly:!0,value:n}),Object(T.jsxs)(P,{onClick:function(){return function(e,n){return void 0!==window.navigator.clipboard?window.navigator.clipboard.writeText(e):new Promise((function(e){var t;n.select(),window.document.execCommand("copy"),null===(t=window.getSelection())||void 0===t||t.removeAllRanges(),e()}))}(n,r.current).then(i)},title:"Copy URL",children:[Object(T.jsx)(R,{ref:t,children:"Copied!"}),Object(T.jsx)(f,{size:30,color:"#fff"})]}),void 0!==window.navigator.share&&Object(T.jsx)(P,{onClick:function(){return k(n)},title:"Share URL",children:Object(T.jsx)(O,{size:30,color:"#fff"})})]})}}}]);
//# sourceMappingURL=4.fb65aa38.chunk.js.map