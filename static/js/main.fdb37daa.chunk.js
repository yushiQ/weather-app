(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{23:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(17),r=t.n(l),i=t(4),s=t.n(i),o=t(22),m=t(5),u=t(3),d=t(18),v=t.n(d),E="e974a4265f5b48ab9b760dfab6614854";function p(e){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://free-api.heweather.net/s6/weather",{params:{location:a,key:E}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(46);var f=t(20),b=t(19),N=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"];var g=function(e){var a=e.location,t=e.set,l=e.loading,r=e.setLoading,i=new Date,s=Object(n.useState)(""),o=Object(u.a)(s,2),m=o[0],d=o[1],v=Object(n.useState)(!1),E=Object(u.a)(v,2),p=E[0],h=E[1],g=function(){""!==m.trim()&&(t(m),r(!0),d(""),h(!1))};return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-location"},c.a.createElement("div",{className:"location"},a,c.a.createElement("span",null,a?"\u5e02":"")),l?c.a.createElement("div",{className:"fresh"},c.a.createElement(b.a,null)):c.a.createElement("div",{className:"change-btn",onClick:function(){h(!p)},style:{transform:p?"rotate(180deg)":"rotate(0deg"}},c.a.createElement(f.a,null))),c.a.createElement("div",{className:"location-input",style:{height:p?"35px":"0px"}},c.a.createElement("input",{value:m,onChange:function(e){return d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&g()},placeholder:"\u8bf7\u8f93\u5165\u5730\u5740(\u4e2d\u6587\u3001\u62fc\u97f3)"}),c.a.createElement("button",{onClick:g},"\u786e\u5b9a\uff01")),c.a.createElement("div",{className:"header-time"},c.a.createElement("div",{className:"month-day"},c.a.createElement("div",{className:"month"},i.getMonth()+1,"\u6708"),c.a.createElement("div",{className:"day"},i.getDate(),"\u65e5")),c.a.createElement("div",{className:"week"},N[i.getDay()])))},w=t(7),y=t(21),j=t(6);var O=function(e){var a=e.data,t=Object(n.useState)(!1),l=Object(u.a)(t,2),r=l[0],i=l[1],s=a.cloud,o=a.cond_code,m=a.cond_txt,d=a.fl,v=a.hum,E=a.pcpn,p=a.pres,h=a.tmp,f=a.wind_dir,b=a.wind_sc,N=[{icon:c.a.createElement(j.b,null),title:"\u4f53\u8868\u6e29\u5ea6",value:d+"\u5ea6"},{icon:c.a.createElement(j.a,null),title:f,value:b+"\u7ea7"},{icon:c.a.createElement(j.c,null),title:"\u6e7f\u5ea6",value:v+"\u5ea6"},{icon:c.a.createElement(y.a,null),title:"\u964d\u6c34\u91cf",value:E+"mm"},{icon:c.a.createElement(w.b,null),title:"\u6c14\u538b",value:p+"Pa"},{icon:c.a.createElement(w.a,null),title:"\u4e91\u91cf",value:s+"%"}];return c.a.createElement("div",{className:"weather-info",style:{height:r?"380px":"242.5px"}},c.a.createElement("div",{className:"cond"},c.a.createElement("div",{className:"cond-logo"},c.a.createElement("img",{src:"/cond-icon-heweather/".concat(o,".png"),alt:""})),c.a.createElement("div",{className:"cond-txt"},m)),c.a.createElement("div",{className:"tmp"},c.a.createElement("div",{className:"now-tmp"},h,c.a.createElement("sup",null,"\xb0C"))),c.a.createElement("div",{className:"more",style:{transform:r?"rotate(90deg)":"rotate(-90deg"}},c.a.createElement(w.c,{onClick:function(){i(!r)}})),c.a.createElement("div",{className:"details"},N.map((function(e,a){return c.a.createElement("div",{key:a,className:"detail"},c.a.createElement("div",{className:"icon"},e.icon),c.a.createElement("div",{className:"txt"},c.a.createElement("div",{className:"detail-title"},e.title),c.a.createElement("div",{className:"detail-value"},e.value)))}))))},_=["\u4eca\u5929","\u660e\u5929",["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"][(new Date).getDay()+2]];var k=function(e){var a=e.data.map((function(e){return{cond_code_d:e.cond_code_d,tmp_max:e.tmp_max,tmp_min:e.tmp_min}}));return c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:"forecast-list"},a.map((function(e,a){return c.a.createElement("div",{className:"daily",key:a},c.a.createElement("div",{className:"date"},_[a]),c.a.createElement("div",{className:"daily-icon"},c.a.createElement("img",{src:"/cond-icon-heweather/".concat(e.cond_code_d,".png"),alt:""})),c.a.createElement("div",{className:"temp"},c.a.createElement("span",{className:"min"},e.tmp_min),"/",c.a.createElement("span",{className:"max"},e.tmp_max)))}))))};var x=function(){var e=Object(n.useState)("none"),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){setTimeout((function(){l("block")}),6e3)}),[]),c.a.createElement("div",{className:"loading"},c.a.createElement("span",null,"Loading"),c.a.createElement("div",{className:"tip",style:{display:"".concat(t)}},"\u5982\u679c\u957f\u65f6\u95f4\u672a\u54cd\u5e94\u8bf7\u68c0\u67e5\u7f51\u7edc\u6216\u8005\u8f93\u5165\u662f\u5426\u6709\u8bef\uff01"))};var S=function(){return c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"github"},c.a.createElement("a",{href:"https://github.com/Ton0703/weather-app"},"Github")),c.a.createElement("div",{className:"Api"},c.a.createElement("a",{href:"https://dev.heweather.com/docs/api/weather"},"API")))};var W=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),d=i[0],v=i[1],E=Object(n.useState)(!1),h=Object(u.a)(E,2),f=h[0],b=h[1];Object(n.useEffect)((function(){var e=localStorage.getItem("WeatherLocation");l(e||"\u5317\u4eac")}),[]),Object(n.useEffect)((function(){setTimeout((function(){return N()}),100)}),[t]);var N=Object(n.useCallback)(Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:a=e.sent,v(Object(o.a)({},a.HeWeather6[0])),b(!1),a.HeWeather6[0].basic&&localStorage.setItem("WeatherLocation",a.HeWeather6[0].basic.location);case 6:case"end":return e.stop()}}),e)}))),[t]);return c.a.createElement("div",{className:"App"},c.a.createElement(g,{location:d.basic?d.basic.location:t,set:l,loading:f,setLoading:b}),d.now?c.a.createElement(O,{data:d.now}):c.a.createElement(x,null),d.daily_forecast&&c.a.createElement(k,{data:d.daily_forecast}),c.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.fdb37daa.chunk.js.map