(this.webpackJsonpaccounting=this.webpackJsonpaccounting||[]).push([[0],{57:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(49),c=a(15),l=a(16),r=a(40),o=a(39),u=a(0),s=a.n(u),i=a(7),h=a.n(i),m=(a(62),a(110)),p=a(116),f=a(115),E=a(118),b=a(119),d=a(113),y=a(102),v=a(106),j=a(107),O=a(108),g=a(109),B=a(114),C=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e,n,l){var r;return Object(c.a)(this,a),(r=t.call(this)).id=null,r.amount=0,r.type=null,r.id=e,r.amount=n,r.type=l,r}return Object(l.a)(a,null,[{key:"setObject",value:function(e){var t=new a;return t.patch(e),t}}]),a}(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"patch",value:function(e){var t=this;Object.keys(e).forEach((function(a){a in t&&(t[a]=e[a])}))}}]),e}()),T=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"get",value:function(t){return fetch("".concat(e.BASE_URL,"/api/").concat(t)).then((function(e){return e.json()}))}},{key:"post",value:function(t,a){return fetch("".concat(e.BASE_URL,"/api/").concat(t),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()}))}}]),e}();T.BASE_URL="http://localhost:8080";var k=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={transactions:[],balance:0,type:"",accountBalance:0},e.setBalance=function(){T.get("balance").then((function(t){return e.setState({accountBalance:t})}),console.error)},e.handleBalanceChange=function(t){e.setState({balance:t.target.value})},e.handleTypeChange=function(t){e.setState({type:t.target.value})},e.handleAddTransaction=function(){var t=e.state,a=t.balance,c=t.type,l=new C(null,a,c);T.post("transactions",l).then((function(t){e.setState({transactions:[].concat(Object(n.a)(e.state.transactions),[C.setObject(t)])})}),console.error).then(e.setBalance)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.get("transactions").then((function(t){return e.setState({transactions:t.map((function(e){return C.setObject(e)}))})}),console.error).then(this.setBalance)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Your balance is: ",this.state.accountBalance),s.a.createElement(y.a,null,s.a.createElement(v.a,{"aria-label":"simple table"},s.a.createElement(j.a,null,s.a.createElement(O.a,null,s.a.createElement(g.a,null,"Type"),s.a.createElement(g.a,null,"Amount"),s.a.createElement(g.a,null,"Action")),s.a.createElement(O.a,null,s.a.createElement(g.a,null,s.a.createElement(m.a,{className:"select"},s.a.createElement(p.a,{id:"demo-simple-select-label"},"Age"),s.a.createElement(f.a,{value:this.state.type,onChange:this.handleTypeChange},s.a.createElement(E.a,{value:"DEBIT"},"DEBIT"),s.a.createElement(E.a,{value:"CREDIT"},"CREDIT")))),s.a.createElement(g.a,null,s.a.createElement(b.a,{value:this.state.balance,onChange:this.handleBalanceChange,fullWidth:!0,type:"number",label:"Next transaction"})),s.a.createElement(g.a,null,s.a.createElement(d.a,{size:"small",onClick:this.handleAddTransaction},"Add")))),s.a.createElement(B.a,null,this.state.transactions.map((function(e){return s.a.createElement(O.a,{key:e.id,className:"CREDIT"===e.type?"credit":"debit"},s.a.createElement(g.a,{component:"th",scope:"row"},e.type),s.a.createElement(g.a,null,e.amount),s.a.createElement(g.a,null))}))))))}}]),a}(s.a.Component);h.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8915cd58.chunk.js.map