(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/github-logo.e8a84775.svg"},12:function(e,t,a){e.exports=a(30)},18:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(6),o=a.n(c),l=a(9),h=a(1),u=a(2),d=a(4),p=a(3),m=a(5),f=a(10),g=function(e){var t=e.type,a=e.info,n="films"!==t?a.name:a.title;return r.a.createElement("div",{className:"tc bg-washed-blue dib br4 pa3 ma2 grow bw2 shadow-5 ba b--green"},r.a.createElement("h1",{className:"navy"},n),r.a.createElement("p",{className:"b blue f5"},"\u2219",t,"\u2219"),Object.entries(a).map(function(e,t){var a=e[0].toUpperCase()+": "+e[1];return a.length>25&&(a=null),r.a.createElement("p",{key:t,className:"b"},a," ")}))},v=function(e){var t=e.data;return t.map(function(e,a){return r.a.createElement(g,{key:a,id:t[a].id,info:t[a][1],type:t[a][0]})})},w=(a(22),a(24),function(e){var t=e.searchChange,a=e.catChange,n=e.responsiveSearch;return r.a.createElement("div",{className:"search-area flex flex-wrap items-center ml4 mt1 z-1",id:"searchbox",style:n},r.a.createElement("select",{className:"tc text-black br2 bw1 b--solid b--gold pv2 mr2",onChange:a},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"people"},"People"),r.a.createElement("option",{value:"planets"},"Planets"),r.a.createElement("option",{value:"starships"},"Starships"),r.a.createElement("option",{value:"species"},"Species"),r.a.createElement("option",{value:"vehicles"},"Vehicles"),r.a.createElement("option",{value:"films"},"Films")),r.a.createElement("div",null,r.a.createElement("input",{className:"tc text-black br2 bw1 b--solid b--gold pv2",style:n,type:"search",placeholder:"search",onChange:t})))}),b=(a(26),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleScroll=function(){a.setState({scroll:window.scrollY})},a.state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("nav");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.querySelector("nav").style.padding="10px":document.querySelector("nav").style.padding="40px"}},{key:"render",value:function(){return r.a.createElement("nav",{className:"header-items flex flex-wrap justify-between shadow-3"},r.a.createElement("img",{alt:"starwars",src:"https://vignette.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237",style:{height:"40px"}}),this.props.winWidth>760?r.a.createElement("div",null,r.a.createElement(w,{searchChange:this.props.searchChange,catChange:this.props.catChange})):null,r.a.createElement("div",null))}}]),t}(n.Component)),y=a(11),x=a.n(y),E={background:"#fff",padding:"1rem",width:"100%",margin:"0",zIndex:"1",borderRadius:"5px"},k={width:"100%",marginBottom:"0.5rem",padding:"0.5rem"},C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).getAll=Object(l.a)(o.a.mark(function t(){var a,n,r,s,i,c,l,h,u,d,p,m,g,v,w,b,y,x;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=(a=["planets","people","starships","species","vehicles","films"]).map(function(e){return fetch("https://swapi.co/api/".concat(e,"/?format=json"))}),s=!0,i=!1,t.prev=5,l=Object(f.a)(r);case 7:return t.next=9,l.next();case 9:return h=t.sent,s=h.done,t.next=13,h.value;case 13:if(u=t.sent,s){t.next=50;break}return d=u,t.next=18,d.json();case 18:p=t.sent,m=0,g=!0,v=!1,w=void 0,t.prev=23,b=p.results[Symbol.iterator]();case 25:if(g=(y=b.next()).done){t.next=33;break}return x=y.value,m=Math.floor(n.length/10),t.next=30,n.push([a[m],x]);case 30:g=!0,t.next=25;break;case 33:t.next=39;break;case 35:t.prev=35,t.t0=t.catch(23),v=!0,w=t.t0;case 39:t.prev=39,t.prev=40,g||null==b.return||b.return();case 42:if(t.prev=42,!v){t.next=45;break}throw w;case 45:return t.finish(42);case 46:return t.finish(39);case 47:s=!0,t.next=7;break;case 50:t.next=56;break;case 52:t.prev=52,t.t1=t.catch(5),i=!0,c=t.t1;case 56:if(t.prev=56,t.prev=57,s||null==l.return){t.next=61;break}return t.next=61,l.return();case 61:if(t.prev=61,!i){t.next=64;break}throw c;case 64:return t.finish(61);case 65:return t.finish(56);case 66:e.setState({data:n,loading:!1}),window.scroll(0,0);case 68:case"end":return t.stop()}},t,this,[[5,52,56,66],[23,35,39,47],[40,,42,46],[57,,61,65]])})),e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onCatChange=function(t){e.setState({category:t.target.value})},e.state={data:[],searchfield:"",category:"all",loading:!0,winWidth:window.innerWidth},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getAll(),window.addEventListener("resize",function(){e.setState({winWidth:window.innerWidth})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.category!==t.category&&"all"===this.state.category)this.setState({loading:!0}),this.getAll();else if(this.state.category!==t.category){this.setState({loading:!0});var n=[];fetch("https://swapi.co/api/".concat(this.state.category,"/?format=json")).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n.push([a.state.category,e])}),a.setState({data:n,loading:!1})}),window.scroll(0,0)}}},{key:"render",value:function(){var e=this,t=this.state.data.filter(function(t){return t[1].hasOwnProperty("title")?t[1].title.toLowerCase().includes(e.state.searchfield.toLowerCase()):t[1].name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return console.log(t.length),r.a.createElement("div",{className:"tc"},r.a.createElement(b,{winWidth:this.state.winWidth,searchChange:this.onSearchChange,catChange:this.onCatChange}),r.a.createElement("div",{className:"flex flex-wrap justify-center mv7"},this.state.winWidth<760?r.a.createElement("div",{style:E},r.a.createElement(w,{searchChange:this.onSearchChange,catChange:this.onCatChange,responsiveSearch:k})):null,this.state.loading||!this.state.data.length?r.a.createElement("h1",{className:"white"},"Loading..."):0===t.length?r.a.createElement("h1",{className:"white"},"No items found"):r.a.createElement("div",null,r.a.createElement(v,{data:t,style:{zIndex:"5",marginTop:"500px"}}))),r.a.createElement("footer",{className:"w-100 h4 flex items-center justify-center white bg-near-black z-2"},r.a.createElement("a",{href:"https://github.com/yonis9/starwarsAPI",title:"Repository"},r.a.createElement("img",{src:x.a,alt:"Github repo",height:"40px",width:"40px"}))))}}]),t}(n.Component);a(28);i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.9eb1f93c.chunk.js.map