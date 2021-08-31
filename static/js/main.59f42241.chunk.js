(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(8),n=c.n(r),o=c(2),l=c(4),i=c(7),j=c(0),u=Object(a.forwardRef)((function(e,t){for(var c=e.status,s=(e.stopTimer,e.updateScore),r=Object(j.jsxs)("div",{className:"game-instruction",children:[Object(j.jsx)("h3",{className:"game-instruction__header",children:"Instruction"}),Object(j.jsxs)("p",{className:"game-instruction__content",children:["- Click on the card to view the back face of the card. ",Object(j.jsx)("br",{}),"- Get two exact same card to score.",Object(j.jsx)("br",{}),"- Score are based on the time and level. ",Object(j.jsx)("br",{}),"- You only have 60s for each level. ",Object(j.jsx)("br",{}),"- There are three levels, '2x2', '4x4' and '6x6'. ",Object(j.jsx)("br",{}),"- Press 'Start Game' button when you are ready."]})]}),n=[],u=0;u<4;u++)n.push({id:u,name:"",flip:!1,lock:!1});var d=Object(a.useState)(r),b=Object(o.a)(d,2),f=b[0],m=b[1],O=Object(a.useState)(""),v=Object(o.a)(O,2),h=v[0],g=v[1],p=Object(a.useState)(n),x=Object(o.a)(p,2),_=x[0],N=x[1],k=Object(a.useState)([]),S=Object(o.a)(k,2),w=S[0],y=S[1];function G(e){var t=Object(i.a)(_);if(e.length>1)for(var c=0;c<e.length;c++){var a=Object(l.a)({},t[e[c]]);a.flip=!_[e[c]].flip,t[e[c]].flip=a.flip}else{var s=Object(l.a)({},t[e]);s.flip=!_[e].flip,t[e].flip=s.flip,console.log("one card flip")}N(t),m(I(_))}function C(e){if(w.length>0){var t=w;if(_[e].flip){var c=t.pop(1);_[e].name!==_[c].name?(t.push(e),G(c)):(!function(e){for(var t=Object(i.a)(_),c=0;c<2;c++){var a=Object(l.a)({},t[e[c]]);a.lock=!0,t[e[c]].lock=a.lock}N(t),m(I(_))}([e,c]),s())}else t.pop(1);y(t)}else{console.log("record is 0");var a=w;a.push(e),y(a),console.log(w)}console.log("update record"),console.log(w)}var M=function(e,t){var c=e.flip?"card--flipped":"",a=e.lock?"card--locked":"";return Object(j.jsxs)("div",{className:"card ".concat(e.name," ").concat(c," ").concat(a),onClick:function(){!function(e){_[e].lock||(G(e),console.log("flip card"+e),C(e))}(t)},children:[Object(j.jsx)("div",{className:"card__face card__face--front"}),Object(j.jsx)("div",{className:"card__face card__face--back"})]},t)};function I(e){for(var t=[],c=0;c<e.length;c++)t.push(M(e[c],c));return t}function T(){for(var e=function(e){var t,c=[];t=["html5","css3","js","sass","nodejs","react","linkedin","heroku","github","aws"].sort((function(){return.5-Math.random()})).slice(0,e);for(var a=0;a<t.length;a++)for(var s=0;s<2;s++)c.push(t[a]);return c.sort((function(){return.5-Math.random()}))}(2),t=n,c=[],a=0;a<4;a++){var s=Object(l.a)({},t[a]);s.name=e[a],c.push(s)}N(c),console.log("reset cards")}return Object(a.useEffect)((function(){c||T()}),[c]),Object(a.useImperativeHandle)(t,(function(){return{renderBoard:function(){c||function(e){g("game-board-"+e+"-row"),console.log(_);var t=I(_);m(t)}(2)}}})),Object(j.jsx)("div",{className:"game-board ".concat(h),children:f})})),d=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("New Game"),n=Object(o.a)(r,2),l=n[0],i=n[1],d=Object(a.useState)(0),b=Object(o.a)(d,2),f=b[0],m=b[1],O=Object(a.useState)(60),v=Object(o.a)(O,2),h=v[0],g=v[1],p=Object(a.useRef)(null),x=Object(a.useRef)(),_="Congratulations, your score is "+f;function N(){console.log("Game over"),clearInterval(p.current),s(!1),alert(_),i("Start Game")}Object(a.useEffect)((function(){g(60),m(0)}),[c]);var k=Math.round(h/60*1e4)/100+"%",S={width:"".concat(k)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"game-stats",children:[Object(j.jsxs)("div",{className:"game-stats__level",children:[Object(j.jsx)("div",{className:"game-stats__level--label",children:"Current Level:"}),Object(j.jsx)("div",{className:"game-stats__level--value",children:"1"})]}),Object(j.jsxs)("div",{className:"game-stats__score",children:[Object(j.jsx)("div",{className:"game-stats__score--label",children:"Score:"}),Object(j.jsx)("div",{className:"game-stats__score--value",children:f})]}),Object(j.jsx)("button",{onClick:function(){console.log("click: "+c),x.current.renderBoard(),c?N():(!function(){console.log("Timer start");var e=60;p.current=setInterval((function(){(e-=1)<=0?N():g(e)}),1e3)}(),i("End Game")),s(!c)},className:"game-stats__button",type:"button",children:l})]}),Object(j.jsx)("div",{className:"game-timer",children:Object(j.jsxs)("div",{className:"game-timer__bar",style:S,children:[h,"s"]})}),Object(j.jsx)(u,{status:c,ref:x,stopTimer:N,updateScore:function(){m(f+56),console.log("score:"+f)}})]})};c(14);var b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"game-title",children:"The Classic MeMmmm Game"}),Object(j.jsx)(d,{})]})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.59f42241.chunk.js.map