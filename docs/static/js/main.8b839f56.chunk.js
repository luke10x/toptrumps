(this.webpackJsonptoptrumps=this.webpackJsonptoptrumps||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"name":"CR90 corvette","hyperdriveRating":2,"length":150,"costInCredits":3500000,"cargoCapacity":3000000},{"name":"Star Destroyer","hyperdriveRating":2,"length":1600,"costInCredits":150000000,"cargoCapacity":36000000},{"name":"Sentinel-class landing craft","hyperdriveRating":1,"length":38,"costInCredits":240000,"cargoCapacity":180000},{"name":"Death Star","hyperdriveRating":4,"length":120000,"costInCredits":1000000000000,"cargoCapacity":1000000000000},{"name":"Millennium Falcon","hyperdriveRating":0.5,"length":34.37,"costInCredits":100000,"cargoCapacity":100000},{"name":"Y-wing","hyperdriveRating":1,"length":14,"costInCredits":134999,"cargoCapacity":110},{"name":"X-wing","hyperdriveRating":1,"length":12.5,"costInCredits":149999,"cargoCapacity":110},{"name":"TIE Advanced x1","hyperdriveRating":1,"length":9.2,"costInCredits":null,"cargoCapacity":150},{"name":"Executor","hyperdriveRating":2,"length":19000,"costInCredits":1143350000,"cargoCapacity":250000000},{"name":"Rebel transport","hyperdriveRating":4,"length":90,"costInCredits":null,"cargoCapacity":19000000},{"name":"Slave 1","hyperdriveRating":3,"length":21.5,"costInCredits":null,"cargoCapacity":70000},{"name":"Imperial shuttle","hyperdriveRating":1,"length":20,"costInCredits":240000,"cargoCapacity":80000},{"name":"EF76 Nebulon-B escort frigate","hyperdriveRating":2,"length":300,"costInCredits":8500000,"cargoCapacity":6000000},{"name":"Calamari Cruiser","hyperdriveRating":1,"length":1200,"costInCredits":104000000,"cargoCapacity":null},{"name":"A-wing","hyperdriveRating":1,"length":9.6,"costInCredits":175000,"cargoCapacity":40},{"name":"B-wing","hyperdriveRating":2,"length":16.9,"costInCredits":220000,"cargoCapacity":45},{"name":"Republic Cruiser","hyperdriveRating":2,"length":115,"costInCredits":null,"cargoCapacity":null},{"name":"Droid control ship","hyperdriveRating":2,"length":3170,"costInCredits":null,"cargoCapacity":4000000000},{"name":"Naboo fighter","hyperdriveRating":1,"length":11,"costInCredits":200000,"cargoCapacity":65},{"name":"Naboo Royal Starship","hyperdriveRating":1.8,"length":76,"costInCredits":null,"cargoCapacity":null},{"name":"Scimitar","hyperdriveRating":1.5,"length":26.5,"costInCredits":55000000,"cargoCapacity":2500000},{"name":"J-type diplomatic barge","hyperdriveRating":0.7,"length":39,"costInCredits":2000000,"cargoCapacity":null},{"name":"AA-9 Coruscant freighter","hyperdriveRating":null,"length":390,"costInCredits":null,"cargoCapacity":null},{"name":"Jedi starfighter","hyperdriveRating":1,"length":8,"costInCredits":180000,"cargoCapacity":60},{"name":"H-type Nubian yacht","hyperdriveRating":0.9,"length":47.9,"costInCredits":null,"cargoCapacity":null},{"name":"Republic Assault ship","hyperdriveRating":0.6,"length":752,"costInCredits":null,"cargoCapacity":11250000},{"name":"Solar Sailer","hyperdriveRating":1.5,"length":15.2,"costInCredits":35700,"cargoCapacity":240},{"name":"Trade Federation cruiser","hyperdriveRating":1.5,"length":1088,"costInCredits":125000000,"cargoCapacity":50000000},{"name":"Theta-class T-2c shuttle","hyperdriveRating":1,"length":18.5,"costInCredits":1000000,"cargoCapacity":50000},{"name":"Republic attack cruiser","hyperdriveRating":1,"length":1137,"costInCredits":59000000,"cargoCapacity":20000000},{"name":"Naboo star skiff","hyperdriveRating":0.5,"length":29.2,"costInCredits":null,"cargoCapacity":null},{"name":"Jedi Interceptor","hyperdriveRating":1,"length":5.47,"costInCredits":320000,"cargoCapacity":60},{"name":"arc-170","hyperdriveRating":1,"length":14.5,"costInCredits":155000,"cargoCapacity":110},{"name":"Banking clan frigte","hyperdriveRating":1,"length":825,"costInCredits":57000000,"cargoCapacity":40000000},{"name":"Belbullab-22 starfighter","hyperdriveRating":6,"length":6.71,"costInCredits":168000,"cargoCapacity":140},{"name":"V-wing","hyperdriveRating":1,"length":7.9,"costInCredits":102500,"cargoCapacity":60}]')},18:function(e,n,a){e.exports=a(27)},23:function(e,n,a){},24:function(e,n,a){},27:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(12),i=a.n(c),o=(a(23),a(24),a(4)),l=a(2),s=a(3),d=a(13),p=a.n(d),u=a(9),h=a(1),g=function(e){var n=(e.activeIndex+1)%e.players.length,a=e.players[n];return a.hand||0!==a.stack.length?n:(e.activeIndex+2)%e.players.length},m=function(e,n){switch(console.log("State:",e.phase," + ",n.actionType),n.actionType){case"TakeTopCard":var a=e.players.every((function(e){return e.hand||0===e.stack.length}));return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){if(a===e.activeIndex&&void 0===n.hand){var t=n.stack.slice(-1)[0],r=n.stack.slice(0,-1);return Object(h.a)(Object(h.a)({},n),{},{stack:r,hand:t})}return n})),activeIndex:a?e.activeIndex:g(e),phase:a?"closed":"clear"});case"StartLoading":return Object(h.a)(Object(h.a)({},e),{},{phase:"loading"});case"Loaded":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(e,a){return Object(h.a)(Object(h.a)({},e),{},{stack:n.payload[a]})})),phase:"clear"});case"ShowLeaderHand":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){if(a===e.leaderIndex){var t=n.hand;if(!t)throw new Error("Leader has no hand so cannot show it");var r=Object(h.a)(Object(h.a)({},t),{},{open:!0});return Object(h.a)(Object(h.a)({},n),{},{hand:r})}return n})),phase:"one_open"});case"RollSkills":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){if(a===e.leaderIndex){var t=n.hand;if(!t)throw new Error("Leader has no hand so cannot roll it");var r=Object(h.a)(Object(h.a)({},t),{},{rolling:!0});return Object(h.a)(Object(h.a)({},n),{},{hand:r})}return n})),phase:"rolling"});case"LetUserSelect":return Object(h.a)(Object(h.a)({},e),{},{phase:"rolling_stopped"});case"Select":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){if(a===e.leaderIndex){var t=n.hand;if(!t)throw new Error("Leader has no hand so cannot roll it");var r=Object(h.a)(Object(h.a)({},t),{},{rolling:!1});return Object(h.a)(Object(h.a)({},n),{},{hand:r})}return n})),phase:"selected",activeIndex:g(e),selectedSkill:n.skillIndex});case"ShowHand":var t=Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){if(a===e.activeIndex){var t=n.hand;if(!t)throw new Error("Active player has no hand so cannot show it");var r=Object(h.a)(Object(h.a)({},t),{},{open:!0});return Object(h.a)(Object(h.a)({},n),{},{hand:r})}return n})),phase:"selected",activeIndex:g(e)});return t.players.every((function(e){return void 0===e.hand||e.hand.open}))&&(t.phase="all_open"),t;case"StopBeforeShowHand":return Object(h.a)(Object(h.a)({},e),{},{phase:"selected_stopped"});case"FindWinner":var r=e.players.map((function(n){if(!n.hand)return 0;switch(e.selectedSkill){case 0:return n.hand.skills.cargoCapacity;case 1:return n.hand.skills.hyperdriveRating;case 2:return n.hand.skills.costInCredits;case 3:return n.hand.skills.length}return 0})),c=r.indexOf(Math.max.apply(Math,Object(u.a)(r))),i=e.players.filter((function(e){return e.hand||e.stack.length>0})).length<2;return Object(h.a)(Object(h.a)({},e),{},{leaderIndex:c,activeIndex:(c+1)%e.players.length,winnerIndex:c,finalWinnerIndex:i?c:void 0});case"GiveHandToWinnerStack":var o=Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(n,a){return a===e.activeIndex?Object(h.a)(Object(h.a)({},n),{},{ghostHand:n.hand,hand:void 0}):n}))}),l=e.players[e.activeIndex].hand,s=l?Object(h.a)(Object(h.a)({},e),{},{players:o.players.map((function(n,a){return a===e.leaderIndex?Object(h.a)(Object(h.a)({},n),{},{stack:[l].concat(Object(u.a)(n.stack))}):n}))}):e,d=s.players.every((function(e){return void 0===e.hand}));return Object(h.a)(Object(h.a)({},s),{},{phase:d?"finalize":"all_open",activeIndex:g(e)});case"StopBeforeEndGame":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{ghostHand:void 0})})),phase:"finalize_stopped"});case"EndTrick":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{stack:e.stack.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{open:!1})})),ghostHand:void 0,hand:void 0})})),winnerIndex:void 0,activeIndex:e.leaderIndex,phase:"clear",selectedSkill:void 0});case"EndGame":return Object(h.a)(Object(h.a)({},e),{},{players:e.players.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{ghostHand:void 0,hand:void 0,stack:[]})})),winnerIndex:void 0,activeIndex:e.leaderIndex,phase:"clear",selectedSkill:void 0})}return e},y={players:[{name:"gitanas nauseda",stack:[],nature:"bot"},{name:"celofanas",stack:[],nature:"bot"},{name:"luke 10x",stack:[],nature:"human"}],leaderIndex:2,activeIndex:2,phase:"clear"},f=r.a.createContext({choices:[],setChoices:function(){console.error("\ud83d\ude15 Context setter called before it is initialized")},state:y,dispatch:function(){console.error("\ud83d\ude15 Context dispatch called before it is initialized")}}),v=function(e){var n=Object(t.useState)([]),a=Object(o.a)(n,2),c=a[0],i=a[1],l=Object(t.useReducer)(m,y),s=Object(o.a)(l,2),d=s[0],p=s[1];return r.a.createElement(f.Provider,{value:{choices:c,setChoices:i,state:d,dispatch:p}},e.children)},b=function(){return r.a.useContext(f)};function C(){var e=Object(l.a)(["\n  height: 100%;\n  margin: 1px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n  background: #ffeb3b;\n  border: 3px solid #f1b31c;\n  border-radius: 5pt;\n  box-sizing: border-box;\n\n  .name {\n    font-size: 0.75em;\n  }\n  ul.scores {\n    padding-left: 0;\n    margin: 0;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    list-style: none;\n    li.abilityLine {\n      :hover {\n        cursor: pointer;\n      }\n      padding: 10pt;\n      display: flex;\n      &.flash {\n        background: #f1b31c;\n      }\n      &.selected {\n        background: #f1b31c;\n      }\n      .ability {\n        flex: 1;\n        text-align: left;\n      }\n      .value {\n        padding-left: 10pt;\n        text-align: left;\n      }\n    }\n  }\n  @media (max-width: ",") {\n    ul.scores {\n      font-size: 0.75em;\n      display: flex;\n      flex-direction: row;\n      li.abilityLine {\n        flex-direction: column;\n        padding: 5pt;\n        .value {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n"]);return C=function(){return e},e}var j=s.a.div(C(),"620px"),x=function(e){var n=e.card,a=Object(t.useState)(-1),c=Object(o.a)(a,2),i=c[0],l=c[1],s=b(),d=s.state,p=d.selectedSkill,u=d.phase,h=s.choices,g=n.rolling&&void 0===p;Object(t.useEffect)((function(){g?setTimeout((function(){l((i+1)%4)}),200):void 0!==p&&l(-1)}),[i,g,p]);var m="rolling_stopped"===u,y=h.map((function(e){return function(n){null===n||void 0===n||n.preventDefault(),m&&e()}}));return r.a.createElement(j,{className:"card"},r.a.createElement("div",{className:"name"},n.name),r.a.createElement("ul",{className:"scores"},r.a.createElement("li",{className:"abilityLine ".concat(m?"selectable":""," ").concat(0===i?"flash":""," ").concat(0===p?"selected":""),onClick:y[0]},r.a.createElement("span",{className:"ability"},"Cost:"),r.a.createElement("span",{className:"value"},n.skills.costInCredits)),r.a.createElement("li",{className:"abilityLine ".concat(m?"selectable":""," ").concat(1===i?"flash":""," ").concat(1===p?"selected":""),onClick:y[1]},r.a.createElement("span",{className:"ability"},"H-Rating:"),r.a.createElement("span",{className:"value"},n.skills.hyperdriveRating)),r.a.createElement("li",{className:"abilityLine ".concat(m?"selectable":""," ").concat(2===i?"flash":""," ").concat(2===p?"selected":""),onClick:y[2]},r.a.createElement("span",{className:"ability"},"Length:"),r.a.createElement("span",{className:"value"},n.skills.length)),r.a.createElement("li",{className:"abilityLine ".concat(m?"selectable":""," ").concat(3===i?"flash":""," ").concat(3===p?"selected":""),onClick:y[3]},r.a.createElement("span",{className:"ability"},"Cargo:"),r.a.createElement("span",{className:"value"},n.skills.cargoCapacity))))},O=r.a.createContext({isHuman:!0,name:"not set",isWinner:!1,stackLength:0}),k=function(e){return r.a.createElement(O.Provider,{value:e},e.children)};function I(){var e=Object(l.a)(["\n  height: 100%;\n\n  .react-card-flip {\n    height: 100%;\n  }\n\n  .back {\n    animation: "," 0.2s linear;\n    border: 3px solid #61b2e4;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5pt;\n\n    box-sizing: border-box;\n    background: #92d3f5;\n    .text {\n      text-align: center;\n      color: #fff;\n    }\n  }\n  .active.back {\n    border: 3px solid #d22f27;\n    background: #ea5a47;\n    cursor: pointer;\n  }\n"]);return I=function(){return e},e}function E(){var e=Object(l.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return E=function(){return e},e}var w=Object(s.b)(E()),R=s.a.div(I(),w),S=function(e){var n=e.card,a=n,t=b().choices,c=r.a.useContext(O).isHuman,i=1===t.length&&c;return r.a.createElement(R,null,r.a.createElement(p.a,{isFlipped:a.open,flipDirection:"horizontal"},r.a.createElement("div",{className:"back ".concat(i?"active":""),onClick:function(e){(e.preventDefault(),i)&&(0,t[0])()}},i&&r.a.createElement("div",{className:"text"},"Show your card!")),r.a.createElement(x,{card:n})))};function T(){var e=Object(l.a)(["\n  margin-top: 5pt;\n  &:first-child {\n    margin-top: 0;\n  }\n\n  height: 100%;\n  .player {\n    &.out {\n      animation: "," 0.2s linear;\n      opacity: 0.5;\n    }\n    &.winner {\n      cursor: pointer;\n    }\n    text-transform: uppercase;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    .ghost {\n      animation: "," 0.2s linear;\n      opacity: 0;\n    }\n    .winner .card .selected {\n      animation: "," 1s linear;\n      animation-iteration-count: infinite;\n    }\n    & > .title {\n      font-size: 0.75em;\n      padding: 6pt 0;\n\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      span.winner {\n        color: #d22f27;\n      }\n      & > .name {\n        text-align: left;\n      }\n      & > .stack::before {\n        content: '\u2a2f ';\n        color: #999;\n      }\n    }\n    background: white;\n    padding: 5pt;\n\n    width: 240px;\n    .player-content {\n      height: 220px;\n      & > div {\n        height: 100%;\n      }\n    }\n    @media (max-width: ",") {\n      width: auto;\n      min-width: 300px;\n      .player-content {\n        height: 100px;\n        .react-card-flip .react-card-back .card {\n          height: 100%;\n        }\n      }\n    }\n  }\n"]);return T=function(){return e},e}function N(){var e=Object(l.a)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.5;\n  }\n"]);return N=function(){return e},e}function L(){var e=Object(l.a)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]);return L=function(){return e},e}function H(){var e=Object(l.a)(["\n  {\n    0% {\n      background: auto;\n    }\n    50% {\n      background: #ea5a47;\n    }\n    100% {\n      background: auto;\n    }\n  }\n"]);return H=function(){return e},e}var z=Object(s.b)(H()),_=Object(s.b)(L()),B=Object(s.b)(N()),W=s.a.div(T(),B,_,z,"620px"),A=function(e){var n=b(),a=n.state.phase,t=n.choices,c="finalize_stopped"===a&&e.stackLength>0,i=!e.card&&0===e.stackLength;return r.a.createElement(W,null,r.a.createElement("div",{className:"player ".concat(i?"out":""," ").concat(c?"winner":""),onClick:function(e){(e.stopPropagation(),c)&&(0,t[0])()}},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"name"},e.name,c&&r.a.createElement("span",{className:"winner"}," Winner \ud83c\udf89")),r.a.createElement("div",{className:"stack"},e.stackLength)),r.a.createElement("div",{className:"player-content"},e.card&&r.a.createElement("div",{className:"hand ".concat(e.isWinner?"winner":"")},r.a.createElement(S,{card:e.card})),e.ghostCard&&r.a.createElement("div",{className:"ghost"},r.a.createElement(S,{card:e.ghostCard})))))},F=a(17);function G(){var e=Object(l.a)(["\n  font-size: 1em;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  .content {\n    height: 100%;\n\n    flex: 1 1;\n  }\n  div.players {\n    padding: 5pt;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .footer {\n    flex: 0 1;\n  }\n\n  @media (max-width: ",") {\n    div.players {\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: stretch;\n    }\n  }\n"]);return G=function(){return e},e}var D=function(e,n){return{name:e.name,card:e.hand,ghostCard:e.ghostHand,stackLength:e.stack.length,isHuman:"human"===e.nature,isWinner:n}},J=s.a.div(G(),"620px"),M=function(){var e=b(),n=e.state,a=e.dispatch,c=e.setChoices,i=n.players.slice(0,-1),l=n.players.slice(-1)[0],s=Object(t.useState)(0),d=Object(o.a)(s,2),p=d[0],u=d[1];return Object(t.useEffect)((function(){"loading"===n.phase?setTimeout((function(){var e=F.filter((function(e){return e.cargoCapacity&&e.costInCredits&&e.hyperdriveRating&&e.length})).sort((function(){return Math.random()-.5})).map((function(e){return{type:"open",name:e.name,skills:{hyperdriveRating:e.hyperdriveRating,length:e.length,costInCredits:e.costInCredits,cargoCapacity:e.cargoCapacity},open:!1,rolling:!1}})),n=Object(o.a)(e,6),t=n[0],r=n[1],c=n[2],i=n[3],l=n[4],s=n[5];a({actionType:"Loaded",payload:[[t,i],[r,l],[c,s]]}),u(p+1)}),500):"selected_stopped"===n.phase?c([function(){a({actionType:"ShowHand"}),setTimeout((function(){u(p+1)}),600)}]):"rolling_stopped"===n.phase?c([function(){a({actionType:"Select",skillIndex:0}),setTimeout((function(){u(p+1)}),600)},function(){a({actionType:"Select",skillIndex:1}),setTimeout((function(){u(p+1)}),600)},function(){a({actionType:"Select",skillIndex:2}),setTimeout((function(){u(p+1)}),600)},function(){a({actionType:"Select",skillIndex:3}),setTimeout((function(){u(p+1)}),600)}]):"finalize_stopped"===n.phase?c([function(){a({actionType:"EndGame"}),u(p+1)}]):c([])}),[n.phase]),Object(t.useEffect)((function(){var e=function(e){var n=e.players[e.activeIndex];switch(e.phase){case"clear":return e.players.every((function(e){return!e.hand&&0===e.stack.length}))?{actionType:"StartLoading"}:{actionType:"TakeTopCard"};case"closed":return{actionType:"ShowLeaderHand"};case"one_open":return{actionType:"RollSkills"};case"rolling":return"human"===n.nature?{actionType:"LetUserSelect"}:{actionType:"Select",skillIndex:1};case"selected":return"human"===n.nature?{actionType:"StopBeforeShowHand"}:{actionType:"ShowHand"};case"all_open":return void 0===e.winnerIndex?{actionType:"FindWinner"}:{actionType:"GiveHandToWinnerStack"};case"finalize":return e.players.filter((function(e){return e.stack.length>0||e.hand})).length>1?{actionType:"EndTrick"}:{actionType:"StopBeforeEndGame"}}return{actionType:"Noop"}}(n);if(a(e),"StartLoading"!==e.actionType&&"LetUserSelect"!==e.actionType&&"StopBeforeShowHand"!==e.actionType&&"StopBeforeEndGame"!==e.actionType){var t="RollSkills"===e.actionType?2e3:"FindWinner"===e.actionType?4e3:600;setTimeout((function(){u(p+1)}),t)}}),[p]),r.a.createElement(J,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"players them"},i.map((function(e,a){var t=a===n.winnerIndex,c=D(e,t);return r.a.createElement(k,Object.assign({key:a},c),r.a.createElement(A,c))})))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"players us"},r.a.createElement(A,D(l,n.winnerIndex===i.length)))))},P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null,r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8b839f56.chunk.js.map