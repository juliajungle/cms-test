(this["webpackJsonpcms-test"]=this["webpackJsonpcms-test"]||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(4),i=n.n(r),a=n(51),s=n.n(a),d=n(8),j=n(60),l=(n(69),n(70),n(52)),u=n(53),o=n(62),h=n(61),b=n(154),m=n(54),v=n(28);function O(){var e=Object(m.a)(["\n  query {\n    interviews {\n      id\n      title\n      intro\n      createdAt\n    }\n  }\n"]);return O=function(){return e},e}var f=n.n(v)()(O()),x=n(55),p=n.n(x),g=function(e){return Object(c.jsx)("div",{className:"col-m-4",children:Object(c.jsx)("div",{className:"card",style:{width:"18rem"},children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:e.item.title}),Object(c.jsx)(p.a,{children:e.item.intro})]})})})},w=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)(b.a,{query:f,children:function(e){var t=e.loading,n=e.error,r=e.data;if(t)return Object(c.jsx)("div",{children:"Fetching interviews....."});if(n)return Object(c.jsx)("div",{children:"Error fetching data"});var i=r.interviews;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container mt-4",children:Object(c.jsx)("div",{className:"row",children:i.map((function(e){return Object(c.jsx)(g,{item:e},e.id)}))})})})}})}}]),n}(r.Component);var N=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:"Interview test"}),Object(c.jsx)(w,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},k=new j.a({uri:"https://api-eu-central-1.graphcms.com/v2/ckhsabetgzaj301zb5ka5b2w0/master"});s.a.render(Object(c.jsx)(d.a,{client:k,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),y()},69:function(e,t,n){},70:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.f2b2fd6f.chunk.js.map