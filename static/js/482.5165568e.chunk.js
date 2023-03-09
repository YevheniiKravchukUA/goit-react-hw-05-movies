"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[482],{482:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(15),s=n(433),a=n(861),c=n(439),i=n(757),u=n.n(i),o=n(791),l=n(87),p=n(477),f="SearchForm_form__v3KKw",m="SearchForm_label__wksvP",h="SearchForm_text__g+siJ",_="SearchForm_input__QFANz",v="SearchForm_button__aYgCJ",d=n(184);function x(e){var t=e.onFormSubmit,n=(0,o.useState)(""),r=(0,c.Z)(n,2),s=r[0],a=r[1];return(0,d.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),""!==s.trim()&&(t(s),a(""))},children:[(0,d.jsxs)("label",{className:m,children:[(0,d.jsx)("span",{className:h,children:"Find movie: "}),(0,d.jsx)("input",{className:_,onChange:function(e){a(e.target.value)},value:s,type:"text"})]}),(0,d.jsx)("button",{className:v,type:"submit",children:"Search"})]})}var g=n(693),b="LoadMore_button__-jWki";function w(e){var t=e.onClick;return(0,d.jsx)("button",{type:"button",className:b,onClick:t,children:"Load more"})}function j(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],i=(0,o.useState)(1),f=(0,c.Z)(i,2),m=f[0],h=f[1],_=(0,o.useRef)(!0),v=(0,l.lr)(),b=(0,c.Z)(v,2),j=b[0],y=b[1],k=j.get("query");return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.pg)(k,m);case 3:t=e.sent,n=t.data,r((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(n.results))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}_.current?_.current=!1:function(){e.apply(this,arguments)}()}),[m,k]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{onFormSubmit:function(e){e!==k&&(y({query:e}),r([]))}}),(0,d.jsx)(g.O,{items:n}),n.length>0&&(0,d.jsx)(w,{onClick:function(){h((function(e){return e+1}))}})]})}function y(){return(0,d.jsx)(r.$,{children:(0,d.jsx)(j,{})})}},477:function(e,t,n){n.d(t,{Hx:function(){return _},Sz:function(){return p},pg:function(){return o},qh:function(){return i},uV:function(){return m}});var r=n(861),s=n(757),a=n.n(s),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"66226a1e6e6df674891504524d512221"}});function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t,page:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},693:function(e,t,n){n.d(t,{O:function(){return h}});var r=n(87),s=n(689),a="MoviesList_list__AFLvD",c="MoviesList_link__-AXHg",i="MoviesList_item__bd9A-",u="MoviesList_image__E8Cyn",o="MoviesList_wrapper__urspN",l="MoviesList_title__Plizf",p="MoviesList_infoWrapper__h80y4",f="MoviesList_info__PJGbd",m=n(184);function h(e){var t=e.items,n=void 0===t?[]:t,h=(0,s.TH)(),_=n.map((function(e){var t=e.id,n=e.original_title,s=e.poster_path,a=e.release_date,_=e.vote_average,v=s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";return(0,m.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:h},className:c,children:(0,m.jsxs)("li",{className:i,children:[(0,m.jsx)("img",{src:v,alt:n,className:u}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("h3",{className:l,children:n}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("span",{className:f,children:a}),(0,m.jsxs)("span",{className:f,children:["Vote: ",_.toFixed(1)]})]})]})]})},t)}));return(0,m.jsx)("ul",{className:a,children:_})}},15:function(e,t,n){n.d(t,{$:function(){return c}});var r="Section_section__iNlTu",s="Section_title__bnPJ6",a=n(184);function c(e){var t=e.title,n=e.children;return(0,a.jsxs)("section",{className:r,children:[t&&(0,a.jsx)("h2",{className:s,children:t}),n]})}}}]);
//# sourceMappingURL=482.5165568e.chunk.js.map