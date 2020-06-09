(this["webpackJsonpreact-profile"]=this["webpackJsonpreact-profile"]||[]).push([[0],{43:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(40),i=a(23),o=a(14),s=a(15),l=a(16),c=a(17),u=a(22),m=a(41),p=a(1),g=a.n(p),d=a(24),b=a(83),h=a(84),v=a(9),f=a.n(v),E=a(19),O=a.n(E),y={chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1,type:"line"},title:{text:"Github profile activity trend"},subtitle:{text:"Source: github.com"},yAxis:{title:{text:"Number scale"}},xAxis:{accessibility:{rangeDescription:"Range: 2015 to 2020"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2015}},credits:{enabled:!1},series:[{name:"Line of Code",data:[57177,69658,97031,119931,137133,154175]},{name:"Commits",data:[29742,29851,32490,30282,38121,40434]},{name:"Stars",data:[16005,19771,20185,24377,32147,39387]},{name:"Repositories",data:[7988,12169,15112,22452,34400,34227]},{name:"Organizations",data:[8105,11248,8989,11816,18274,18111]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}},j=function(){return g.a.createElement(O.a,{highCharts:f.a,options:y})},k=function(e){var t={chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1,type:"pie"},title:{text:"Commit per Language, 2020"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},credits:{enabled:!1},colors:["#00876c","#6aaa96","#aecdc2","#f1f1f1","#f0b8b8","#e67f83","#d43d51"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,data:Object.keys(e.object).map((function(t){return{name:t,y:e.object[t]}}))}]};return t.title.text=e.title,g.a.createElement(O.a,{highCharts:f.a,options:t})},x=a(35),P=a.n(x),S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"wesbos",languagesPerRepo:{},starsPerRpo:{}},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){this.setState({username:this.props.username})}},{key:"componentDidMount",value:function(){this.reposPerLanguage()}},{key:"reposPerLanguage",value:function(){var e=this;P.a.get("https://api.github.com/users/".concat(this.state.username,"/repos")).then((function(t){var a={},n={};t.data.map((function(e){null!==e.language&&(a[e.language]?++a[e.language]:a[e.language]=1),null!==e.stargazers_count&&null!==e.language&&(n[e.language]?n[e.language]+=e.stargazers_count:n[e.language]=1)})),e.setState({languagesPerRepo:a}),e.setState({starsPerRpo:n})}))}},{key:"render",value:function(){return p.createElement("div",null,p.createElement(b.a,{container:!0,item:!0},p.createElement(b.a,{item:!0,xs:12,sm:12,md:12},p.createElement(h.a,{elevation:0},p.createElement(j,null))),p.createElement(b.a,{container:!0,spacing:3},p.createElement(b.a,{item:!0,xs:4,sm:4,md:4},p.createElement(h.a,{elevation:0},p.createElement(k,{title:"COMMITS PER LANGUAGE",object:this.state.languagesPerRepo}))),p.createElement(b.a,{item:!0,xs:4,sm:4,md:4},p.createElement(h.a,{elevation:0},p.createElement(k,{title:"REPOSITORIES PER LANGUAGE",object:this.state.languagesPerRepo}))),p.createElement(b.a,{item:!0,xs:4,sm:4,md:4},p.createElement(h.a,{elevation:0},p.createElement(k,{title:"STARS PER LANGUAGE",object:this.state.starsPerRpo})))),p.createElement(b.a,{container:!0,spacing:2},p.createElement(b.a,{item:!0,xs:6,sm:6,md:6},p.createElement(h.a,{elevation:0})),p.createElement(b.a,{item:!0,xs:6,sm:6,md:6},p.createElement(h.a,{elevation:0})))))}}]),a}(p.Component),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).username="",e.observer=new MutationObserver((function(){return e.update()})),e.observer.observe(Object(l.a)(e),{attributes:!0}),e}return Object(s.a)(a,[{key:"connectedCallback",value:function(){this._innerHTML=this.innerHTML,this.username=this.getAttribute("username"),this.mount()}},{key:"disconnectedCallback",value:function(){this.unmount(),this.observer.disconnect()}},{key:"update",value:function(){this.unmount(),this.mount()}},{key:"mount",value:function(){var e=S.propTypes?S.propTypes:{},t=Object(i.a)({},this.getProps(this.attributes,e));Object(d.render)(p.createElement(S,t),this)}},{key:"unmount",value:function(){Object(d.unmountComponentAtNode)(this)}},{key:"getProps",value:function(e,t){var a=this;return t=t||{},Object(r.a)(e).filter((function(e){return"style"!==e.name})).map((function(e){return a.convert(t,e.name,e.value)})).reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(n.a)({},t.name,t.value))}),{})}},{key:"convert",value:function(e,t,a){var n=Object.keys(e).find((function(e){return e.toLowerCase()==t})),r=a;return"true"===a||"false"===a?r="true"==a:isNaN(a)||""===a?/^{.*}/.exec(a)&&(r=JSON.parse(a)):r=+a,{name:n||t,value:r}}}]),a}(Object(m.a)(HTMLElement));customElements.define("react-el",R)}},[[43,1,2]]]);
//# sourceMappingURL=main.2fb6fb18.chunk.js.map