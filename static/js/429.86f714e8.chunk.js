"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[429],{429:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),s=n(439),i=n(757),a=n.n(i),u=n(791),o=n(733),c=n(184);var l=function(e){return(0,c.jsxs)("form",{onSubmit:e.handleGetRequest,children:[(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)("span",{children:"Search movies "})}),(0,c.jsx)("input",{onChange:e.handleInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})},p=n(87);var d=function(e){var t=e.querys;return(0,c.jsx)("ul",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(5, 1fr)",gridColumnGap:"20px",gridRowGap:"20px"},children:t.map((function(e){return(0,c.jsx)("li",{style:{listStyle:"none",width:"220px",height:"400px",margin:"10px",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",textAlign:"center",border:"1px solid #ccc",fontSize:"20px"},children:(0,c.jsxs)(p.rU,{to:"/Movies/".concat(e.id),children:[(0,c.jsx)("img",{src:"https://www.themoviedb.org/t/p/w220_and_h330_face"+e.poster_path,alt:e.title}),(0,c.jsx)("p",{children:e.title?e.title:e.name})]})},e.id)}))})};var h=function(){var e=(0,u.useState)([]),t=(0,s.Z)(e,2),n=t[0],i=t[1],p=(0,u.useState)(""),h=(0,s.Z)(p,2),f=h[0],x=h[1],m=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o.h.fetchSearchMovies(f);case 3:n=e.sent,i(n.results),console.log(n.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsxs)("div",{children:[(0,c.jsx)(l,{handleGetRequest:m,handleInput:function(e){e.preventDefault(),x(e.target.value)}}),(0,c.jsx)(d,{querys:n})]})}}}]);
//# sourceMappingURL=429.86f714e8.chunk.js.map