(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,a){t.exports=a.p+"static/media/1-lira-tura.7c42669a.png"},function(t,e,a){t.exports=a.p+"static/media/1-lira-yazi.9b70882e.png"},,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(2),r=a.n(i),s=(a(15),a(16),a(3)),l=a(4),c=a(8),u=a(5),m=a(9),p=(a(17),a(6)),d=a.n(p),h=a(7),f=a.n(h),y=function(t){return o.a.createElement("div",{className:"Coin-container"},o.a.createElement("div",{className:"Coin ".concat(t.donuyor?"Coin-rotate":"")},o.a.createElement("img",{src:d.a,className:"yazi"===t.side?"Coin-back":"Coin-front"}),o.a.createElement("img",{src:f.a,className:"yazi"===t.side?"Coin-front":"Coin-back"})))},E=(a(18),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).atisYap=function(){var t=Math.round(Math.random());0==t?a.setState({turaGelenToplam:a.state.turaGelenToplam+1,side:"tura"}):1==t&&a.setState({yaziGelenToplam:a.state.yaziGelenToplam+1,side:"yazi"}),a.setState({toplamAtis:a.state.toplamAtis+1}),a.setState({donuyor:!0}),setTimeout(function(){return a.setState({donuyor:!1})},1e3)},a.state={side:"tura",donuyor:!1,turaGelenToplam:0,yaziGelenToplam:0,toplamAtis:0},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"CoinFlipper"},o.a.createElement("h1",null,"Yaz\u0131 m\u0131 Tura m\u0131?"),o.a.createElement(y,{side:this.state.side,donuyor:this.state.donuyor}),o.a.createElement("button",{onClick:this.atisYap},"At!"),o.a.createElement("p",null,"Toplam",o.a.createElement("strong",null," ",this.state.toplamAtis," "),"at\u0131\u015ftan",o.a.createElement("strong",null," ",this.state.turaGelenToplam," "),"\xfc tura",o.a.createElement("strong",null," ",this.state.yaziGelenToplam," "),"si yaz\u0131 geldi."))}}]),e}(n.Component));var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.f5f39ec5.chunk.js.map