(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(13),n(2)),o=n(3),l=n(5),u=n(4),j=(n(14),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={showMore:!1},e}return Object(o.a)(n,[{key:"showMore",value:function(){!1===this.state.showMore?this.setState({showMore:!0}):this.setState({showMore:!1})}},{key:"desc",value:function(e){return!1===this.state.showMore?"":e.description}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"event",children:[Object(j.jsx)("h2",{children:t.summary}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Creator:"})," ",t.creator.email]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Start Time:"})," ",t.start.dateTime]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Location:"})," ",t.location]}),Object(j.jsx)("p",{className:"description",children:this.desc(t)}),Object(j.jsx)("button",{className:"details-btn",onClick:function(){e.showMore(t)},children:"Show More"})]})})}}]),n}(r.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(h,{event:e})},e.id)}))})}}]),n}(r.Component),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:r})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(j.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(e){return Object(j.jsx)("li",{children:e},e)})),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),O=n(8);var p=function(e){var t=Object(r.useState)(e.eventsToShow),n=Object(O.a)(t,2),c=n[0],s=n[1];return Object(j.jsxs)("div",{className:"numberOfEvents",children:[Object(j.jsx)("label",{htmlFor:"number",children:"Events per page: "}),Object(j.jsx)("input",{type:"text",id:"number",value:c,placeholder:"Type a number",onChange:function(t){t.target.value,s(t.target.value),e.updateEventNum(t.target.value)}})]})},v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b,{}),Object(j.jsx)(p,{})]})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.5517ed61.chunk.js.map