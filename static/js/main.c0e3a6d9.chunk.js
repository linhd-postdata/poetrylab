(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,a){e.exports=a(345)},211:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),o=(a(211),a(136)),s=a(18),c=a(19),m=a(21),u=a(20),p=a(43),d=a(22),h=a(29),b=a(95),f=a(5),E=a.n(f),g=a(15),y=a(64),O=a.n(y),j=a(63),v=a.n(j),w=a(39),k=a.n(w),C=a(40),x=a.n(C),S=a(28),T=a.n(S),P=a(25),N=a.n(P),B=a(51),_=a.n(B),A=a(23),I=a.n(A),D=a(128),L=a.n(D),q=a(131),z=a.n(q),R=a(129),M=a.n(R),U=a(130),H=a.n(U),W=a(26),$=a.n(W),G=a(41),J=a.n(G),X=a(42),F=a.n(X),Y=a(132),K=a.n(Y),Q=a(133),V=a.n(Q),Z=a(127),ee=a.n(Z),te=a(126),ae=a.n(te),ne=a(96),re=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.symbol,i=t.syllables,l=r.a.createElement(I.a,{color:"inherit","aria-label":"Synalepha",className:a.synalepha},r.a.createElement(ae.a,null));return e=i?i.map(function(e,t){return[r.a.createElement(ne.a,{key:"$".concat(e).concat(t),color:e.is_stressed?"primary":"default",label:e.syllable}),e.has_synalepha?l:""]}):r.a.createElement(ne.a,{variant:"outlined",label:n}),r.a.createElement("div",{className:a.token},[e,r.a.createElement("span",{style:{marginRight:"0.75em"}})])}}]),t}(r.a.Component),ie=Object(g.withStyles)(function(e){return{token:{display:"inline-block"},stressed:{backgroundColor:"red"},synalepha:{padding:0}}})(re),le=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.tokens,n=e.annotations,i=a.map(function(e,t){return e.symbol?r.a.createElement(ie,{key:"$".concat(e.symbol||e.word).concat(t),symbol:e.symbol}):r.a.createElement(ie,{syllables:e.word})}),l=n.enjambment&&0!==n.enjambment.length?r.a.createElement(I.a,{color:"inherit","aria-label":"Enjambment",className:t.enjambment},r.a.createElement(ee.a,null)):"";return r.a.createElement("div",{className:t.line},r.a.createElement("span",null,i),r.a.createElement("span",null,l))}}]),t}(r.a.Component),oe=Object(g.withStyles)(function(e){return{line:{display:"inline-block",width:"100%",margin:"0.25em"},enjambment:{padding:0}}})(le),se={API_ROOT:"http://62.204.199.36:5000/",POEM_TITLE:"El Pr\xedncipe constante",POEM_TEXT:"\xc9stas que fueron pompa y alegr\xeda\ndespertando al albor de la ma\xf1a-\nna, a la tarde ser\xe1n l\xe1stima vana\ndurmiendo en brazos de la noche fr\xeda.\n\nEste matiz que al cielo desaf\xeda,\nIris listado de oro, nieve y grana,\nser\xe1 escarmiento de la vida humana:\n\xa1tanto se emprende en t\xe9rmino de un d\xeda!\n\nA florecer las rosas madrugaron,\ny para envejecerse florecieron:\ncuna y sepulcro en un bot\xf3n hallaron.\n\nTales los hombres sus fortunas vieron:\nen un d\xeda nacieron y espiraron;\nque pasados los siglos horas fueron."},ce=function(e){return 0===Object.entries(e).length&&e.constructor===Object},me=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props.poem;return e=ce(t.analysis)?t.text.split(/[\n]+/).map(function(e,t){return r.a.createElement(N.a,{key:t,paragraph:!0},e)}):t.analysis.scansion.map(function(e,a){return r.a.createElement(oe,{tokens:e.tokens,annotations:{enjambment:t.analysis.enjambment[a]||[]}})}),r.a.createElement("div",null,e)}}]),t}(r.a.Component),ue=Object(g.withStyles)(function(e){return{textarea:{width:"50em"}}})(me),pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.state={open:!1,operations:["scansion","enjambment"]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props,a=t.current,n=t.poems[a],r=n?n.text:null,i=n?n.analysis:{};ce(i)&&0!==r.length&&function(e,t,a){var n=t.map(function(e){return"operations=".concat(e)}).join("&");fetch(se.API_ROOT+"analysis?".concat(n),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:e}).then(function(e){return e.json()}).catch(function(e){return console.warn("Fetch failed for analysis"),{}}).then(function(e){ce(e)||a(e)})}(r,this.state.operations,function(t){return e.props.updatePoem(Object(b.a)({},n,{analysis:t}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,i=t.current,l=t.poems,o=this.state.open,s=l[i],c=s?s.title:"",m=s?s.text:"",u=s?r.a.createElement(ue,{poem:s}):"To start, add a poem";return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,null),r.a.createElement(k.a,{position:"fixed",className:E()(a.appBar,Object(h.a)({},a.appBarShift,o))},r.a.createElement(x.a,{disableGutters:!o},r.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:E()(a.menuButton,o&&a.hide)},r.a.createElement(L.a,null)),r.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},"PoetryLab: ",c))),r.a.createElement(O.a,{className:a.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(I.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?r.a.createElement(M.a,null):r.a.createElement(H.a,null))),r.a.createElement(_.a,null),r.a.createElement(T.a,null,this.props.poems.map(function(t,a){var n=t.title;t._;return r.a.createElement($.a,{button:!0,key:n,onClick:function(){return e.props.changeCurrent(a)}},r.a.createElement(J.a,null,r.a.createElement(z.a,null)),r.a.createElement(F.a,{primary:n}))})),r.a.createElement(_.a,null),r.a.createElement(T.a,null,r.a.createElement($.a,{button:!0,key:"Upload a zip"},r.a.createElement(J.a,null,r.a.createElement(K.a,null)),r.a.createElement(F.a,{primary:"Upload a zip"})),r.a.createElement($.a,{button:!0,key:"Download all"},r.a.createElement(J.a,null,r.a.createElement(V.a,null)),r.a.createElement(F.a,{primary:"Download all"})))),r.a.createElement("main",{className:E()(a.content,Object(h.a)({},a.contentShift,o))},r.a.createElement("div",{className:a.drawerHeader}),u,s&&ce(s.analysis)&&0!==m.length?"Analyzing...":""))}}]),t}(r.a.Component),de=Object(g.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(b.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(pe),he=a(67),be=a.n(he),fe=a(65),Ee=a.n(fe),ge=a(134),ye=a.n(ge),Oe=a(66),je=a.n(Oe),ve=a(135),we=a.n(ve),ke=a(50),Ce=a.n(ke),xe=a(52),Se=a.n(xe);function Te(e){return r.a.createElement(Ce.a,Object.assign({direction:"up"},e))}var Pe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,poemTitle:se.POEM_TITLE,poemText:se.POEM_TEXT},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleSubmit=function(){a.props.onSubmit(a.state.poemTitle,a.state.poemText),a.handleClose()},a.handleTextChange=function(e,t){a.setState(Object(h.a)({},[t],e.target.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Ee.a,{color:"primary",variant:"extended","aria-label":"Add",className:t.fab,onClick:this.handleClickOpen},r.a.createElement(ye.a,null),"Add Poem"),r.a.createElement(je.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Te},r.a.createElement(k.a,{className:t.appBar},r.a.createElement(x.a,null,r.a.createElement(I.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},r.a.createElement(we.a,null)),r.a.createElement(N.a,{variant:"h6",color:"inherit",className:t.flex},"Add Poem"),r.a.createElement(be.a,{color:"inherit",onClick:this.handleSubmit},"Submit"))),r.a.createElement(T.a,null,r.a.createElement($.a,{button:!0},r.a.createElement(Se.a,{required:!0,label:"Title",margin:"normal",value:this.state.poemTitle,onChange:function(t){return e.handleTextChange(t,"poemTitle")}})),r.a.createElement($.a,{button:!0},r.a.createElement(Se.a,{required:!0,className:t.textarea,label:"Enter your poem text",multiline:!0,margin:"normal",variant:"filled",helperText:"You can use multiline",value:this.state.poemText,onChange:function(t){return e.handleTextChange(t,"poemText")}})))))}}]),t}(r.a.Component),Ne=Object(g.withStyles)(function(e){return{appBar:{position:"relative"},flex:{flex:1},fab:{margin:e.spacing.unit,position:"absolute",float:"right",bottom:e.spacing.unit,right:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit},textarea:{width:"50em"}}})(Pe),Be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={poems:[],current:-1},a.addPoem=a.addPoem.bind(Object(p.a)(a)),a.changeCurrentPoem=a.changeCurrentPoem.bind(Object(p.a)(a)),a.updatePoem=a.updatePoem.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"addPoem",value:function(e,t){this.setState({poems:[].concat(Object(o.a)(this.state.poems),[{title:e,text:t,analysis:{}}]),current:this.state.poems.length})}},{key:"updatePoem",value:function(e){var t=this.state,a=t.poems;a[t.current]=e,this.setState({poems:a}),this.forceUpdate()}},{key:"changeCurrentPoem",value:function(e){this.setState({current:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(de,Object.assign({},this.state,{changeCurrent:this.changeCurrentPoem,updatePoem:this.updatePoem})),r.a.createElement(Ne,{onSubmit:this.addPoem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[206,1,2]]]);
//# sourceMappingURL=main.c0e3a6d9.chunk.js.map