"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{854:function(n,e,t){t.d(e,{a:function(){return c}});t(791);var r=t(184),c=function(){return(0,r.jsx)("p",{children:"Loading..."})}},871:function(n,e,t){t.r(e);var r=t(861),c=t(885),a=t(757),u=t.n(a),s=t(464),i=t(791),o=t(739),p=t(854),f=t(184);e.default=function(){var n=(0,i.useState)(null),e=(0,c.Z)(n,2),t=e[0],a=e[1],v=(0,i.useState)(!1),h=(0,c.Z)(v,2),l=h[0],d=h[1],x=(0,o.UO)().movieId;return(0,i.useEffect)((function(){d(!0);var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.sv)(x);case 3:e=n.sent,a(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error :>> ",n.t0);case 10:return n.prev=10,d(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),(0,f.jsxs)(f.Fragment,{children:[l&&(0,f.jsx)(p.a,{}),null!==t&&void 0!==t&&t.length?(0,f.jsx)("section",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews about the film"}),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.author_details.avatar_path,r=n.author,c=n.content,a=t?"".concat(t.slice(1,-1)):"https://via.placeholder.com/395x574";return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:a,alt:r}),(0,f.jsxs)("h3",{children:["Author: ",r]}),(0,f.jsx)("p",{children:c})]},e)}))})})]})}):(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"Unfortunately there are no rewiews yet"})})]})}},464:function(n,e,t){t.d(e,{$5:function(){return p},I2:function(){return o},sv:function(){return v},wr:function(){return i},xc:function(){return f}});var r=t(861),c=t(757),a=t.n(c),u="631075854851454119cb09d20165cf60",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/trending/all/day?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(s,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("\n".concat(s,"/movie/").concat(e,"/credits?&api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var s=n[a](u),i=s.value}catch(o){return void t(o)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function s(n){r(u,c,a,s,i,"next",n)}function i(n){r(u,c,a,s,i,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=871.2e86878e.chunk.js.map