"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{105:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),i=n(689),o=n(477),p={item:"ReviewsPage_item__2QfcZ",name:"ReviewsPage_name__71Tzq",image:"ReviewsPage_image__X2G1d",textItem:"ReviewsPage_textItem__5mL6N",content:"ReviewsPage_content__mDovb"},f=n(184);function m(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],m=(0,i.UO)().movieId,l=n.map((function(e){var t=e.id,n=e.author_details,r=e.content,a=n.avatar_path?"https://image.tmdb.org/t/p/w500/".concat(n.avatar_path):"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";return(0,f.jsx)("li",{className:p.item,children:(0,f.jsxs)("div",{className:p.author,children:[(0,f.jsxs)("p",{className:p.name,children:[(0,f.jsx)("span",{className:p.textItem,children:"User:"}),n.username]}),(0,f.jsx)("img",{src:a,alt:"",className:p.image}),(0,f.jsx)("p",{className:p.content,children:r})]})},t)}));return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Hx)(m);case 3:t=e.sent,n=t.data,s(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]),(0,f.jsxs)("ul",{className:p.list,children:[n.length>0&&l,0===n.length&&"Sorry, reviews not found!"]})}},477:function(e,t,n){n.d(t,{Hx:function(){return v},Sz:function(){return f},pg:function(){return o},qh:function(){return u},uV:function(){return l}});var r=n(861),a=n(757),s=n.n(a),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"66226a1e6e6df674891504524d512221"}});function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t,page:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=105.7820f13b.chunk.js.map