(this.webpackJsonpnumber_base=this.webpackJsonpnumber_base||[]).push([[0],{13:function(e,n,a){},14:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(7),s=a.n(o),l=(a(13),a(2)),i=a(3),c=a(1),u=a(5),h=a(4),p=function(e){Object(u.a)(a,e);var n=Object(h.a)(a);function a(e){var t;return Object(l.a)(this,a),(t=n.call(this,e)).handleChange=t.handleChange.bind(Object(c.a)(t)),t}return Object(i.a)(a,[{key:"handleChange",value:function(e){var n=e.target.value,a=n.split("").slice(-1),t=parseInt(a,this.props.base);isNaN(t)&&0!==n.length||this.props.onChange(parseInt(n,this.props.base))}},{key:"render",value:function(){var e=isNaN(this.props.value)?"":this.props.value;return r.a.createElement("div",null,r.a.createElement("label",null,"Base ",this.props.base," :",r.a.createElement("input",{value:e.toString(this.props.base),onChange:this.handleChange})))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var n=Object(h.a)(a);function a(e){var t;return Object(l.a)(this,a),(t=n.call(this,e)).state={value:0},t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.base=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],t}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){var e=this,n=this.base.map((function(n){return r.a.createElement(p,{base:n,value:e.state.value,onChange:e.handleChange,key:n})}));return r.a.createElement("div",null,n)}}]),a}(r.a.Component),v=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc0618af.chunk.js.map