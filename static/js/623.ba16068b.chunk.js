"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{335:function(n,t,e){e.d(t,{O:function(){return x}});var r,a,c,o=e(168),i=e(444),s=e(731),u=i.ZP.ul(r||(r=(0,o.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-left: 10px;\n"]))),l=i.ZP.li(a||(a=(0,o.Z)(["\n"]))),p=(0,i.ZP)(s.rU)(c||(c=(0,o.Z)(["\n  text-decoration: none;\n  display: block;\n  width: 300px;\n  margin-top: 5px;\n  border: 1px grey solid;\n  padding: 5px;\n  color: black;\n\n  :hover,\n  :focus {\n    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.3);\n  }\n"]))),f=e(184),x=function(n){var t=n.movies,e=n.link,r=n.state;return(0,f.jsx)(u,{children:t.map((function(n){var t=n.id,a=n.title;return e?(0,f.jsx)(l,{children:(0,f.jsx)(p,{to:"".concat(e).concat(t),state:r,children:a})},t):(0,f.jsx)(l,{children:(0,f.jsx)(p,{to:"".concat(t),state:r,children:a})},t)}))})}},623:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o=e(861),i=e(885),s=e(757),u=e.n(s),l=e(168),p=e(444),f=p.ZP.form(r||(r=(0,l.Z)(["\n  margin-top: 20px;\n  margin-left: 10px;\n"]))),x=p.ZP.input(a||(a=(0,l.Z)(["\n  width: 200px;\n  margin-right: 10px;\n"]))),h=p.ZP.button(c||(c=(0,l.Z)(["\n  \n"]))),d=e(184),m=function(n){var t=n.onSubmit;return(0,d.jsxs)(f,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value.trim();if(0===e.length)return alert("Please, enter your request");t(e),n.currentTarget.reset()},children:[(0,d.jsx)(x,{type:"text",name:"search"}),(0,d.jsx)(h,{type:"submit",children:"Search"})]})},v=e(791),g=e(731),Z=e(739),b=e(902),j=e(335),k=function(){var n=(0,v.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,g.lr)(),c=(0,i.Z)(a,2),s=c[0],l=c[1],p=(0,Z.TH)(),f=s.get("search");(0,v.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,b.bo)(f).then((function(n){return n})).catch((function(n){return console.log(n)}));case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();f&&n()}),[f]);return(0,d.jsxs)("section",{children:[(0,d.jsx)(m,{onSubmit:function(n){l(""!==n?{search:n}:{})}}),e&&(0,d.jsx)(j.O,{movies:e,state:{from:p}})]})}}}]);
//# sourceMappingURL=623.ba16068b.chunk.js.map