"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{854:function(n,e,t){t.d(e,{a:function(){return c}});t(791);var r=t(184),c=function(){return(0,r.jsx)("p",{children:"Loading..."})}},871:function(n,e,t){t.r(e);var r=t(861),c=t(885),a=t(757),u=t.n(a),s=t(464),o=t(791),i=t(739),p=t(854),f=t(184);e.default=function(){var n=(0,o.useState)(null),e=(0,c.Z)(n,2),t=e[0],a=e[1],v=(0,o.useState)(!1),h=(0,c.Z)(v,2),l=h[0],d=h[1],x=(0,i.UO)().movieId;return(0,o.useEffect)((function(){d(!0);var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.sv)(x);case 3:e=n.sent,a(e.results),console.log("response :>> ",e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("error :>> ",n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),console.log("reviews :>> ",t),(0,f.jsxs)(f.Fragment,{children:[l&&(0,f.jsx)(p.a,{}),null!==t&&void 0!==t&&t.length?(0,f.jsx)("section",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews about the film"}),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:t.map((function(n){var e,t=n.id,r=n.author_details.avatar_path,c=n.author,a=n.content;return e=r?r.match(/^(\/http|\/https)/)?"".concat(r.slice(1,-1)):"https://www.gravatar.com/avatar/".concat(r):"https://via.placeholder.com/82x82",(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e,alt:c}),(0,f.jsxs)("h3",{children:["Author: ",c]}),(0,f.jsx)("p",{children:a})]},t)}))})})]})}):(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"Unfortunately there are no rewiews yet"})})]})}},464:function(n,e,t){t.d(e,{$5:function(){return p},I2:function(){return i},sv:function(){return v},wr:function(){return o},xc:function(){return f}});var r=t(861),c=t(757),a=t.n(c),u="631075854851454119cb09d20165cf60",s="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/trending/all/day?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(s,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(s,"/movie/").concat(e,"/credits?&api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var s=n[a](u),o=s.value}catch(i){return void t(i)}s.done?e(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function s(n){r(u,c,a,s,o,"next",n)}function o(n){r(u,c,a,s,o,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=871.a4a1054f.chunk.js.map