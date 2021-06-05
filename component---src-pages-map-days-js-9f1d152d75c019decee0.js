(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[806],{7768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7378),l=n(316),r=n(7821),i=n(5444);function d(e,t,n,l,d){return[{title:"Descriptions",jsx:a.createElement("div",null,a.createElement("p",null,e("map_days_description_1")),a.createElement("p",null,e("map_days_description_2")),a.createElement(d,null,"<DatePicker\n  mapDays={object => {\n    return { props }\n  }}\n/>"),a.createElement("p",null,e("map_days_description_3")),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,e("Property")),a.createElement("th",null,e("Type")),a.createElement("th",null,e("Descriptions")))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"date"),a.createElement("td",null,"DateObject"),a.createElement("td",null,a.createElement("p",null,e("map_days_description_4")))),a.createElement("tr",null,a.createElement("td",null,"today"),a.createElement("td",null,"DateObject"),a.createElement("td",null)),a.createElement("tr",null,a.createElement("td",null,"selectedDate"),a.createElement("td",null,e("DateObject or Array")),a.createElement("td",null,a.createElement("p",null,e("map_days_description_5")))),a.createElement("tr",null,a.createElement("td",null,"currentMonth"),a.createElement("td",null,"Object"),a.createElement("td",null,a.createElement("div",{dangerouslySetInnerHTML:{__html:"<p>"+e("map_days_description_6")+"</p>"}}))),a.createElement("tr",null,a.createElement("td",null,"isSameDate"),a.createElement("td",null,"Function"),a.createElement("td",null,a.createElement("p",null,e("map_days_description_7")))))),a.createElement(d,{title:"map_days_description_8"},"{ date, today, selectedDate, currentMonth, isSameDate }"),a.createElement("p",{style:{color:"red"}},e("map_days_description_9")),a.createElement(d,{title:"map_days_description_10"},"<Calendar\n  mapDays={({ date, today }) => {\n    date.day = today.day\n  }}\n"+("en"===t?"/>":'  calendar="persian"\n  locale="fa"\n/>')),a.createElement(r.f,Object.assign({mapDays:function(e){var t=e.date,n=e.today;t.day=n.day}},n)),a.createElement("p",null,e("map_days_description_11")),a.createElement("ul",null,a.createElement("li",null,"disabled"),a.createElement("li",null,"hidden")),a.createElement("p",null,e("map_days_description_12")))},{title:"Styling Days",code:'<DatePicker\n  mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {\n    let props = {}\n    \n    props.style = {\n      borderRadius: "3px",\n      backgroundColor: date.month.index === currentMonth.index ? "#ccc" : ""\n    }\n\n    if (isSameDate(date, today)) props.style.color = "green"\n    if (isSameDate(date, selectedDate)) props.style = {\n      ...props.style,\n      color: "#0074d9",\n      backgroundColor: "#a5a5a5",\n      fontWeight: "bold",\n      border: "1px solid #777"\n    }\n\n    return props\n  }}\n/>',jsx:a.createElement(r.ZP,Object.assign({mapDays:function(e){var t=e.date,n=e.today,a=e.selectedDate,l=e.currentMonth,r=e.isSameDate,i={};return i.style={borderRadius:"3px",backgroundColor:t.month.index===l.index?"#ccc":""},r(t,n)&&(i.style.color="green"),r(t,a)&&(i.style=Object.assign({},i.style,{color:"#0074d9",backgroundColor:"#a5a5a5",fontWeight:"bold",border:"1px solid #777"})),i}},n))},{title:"Styling Weekends",description:"map_days_weekends",code:"<DatePicker\n  mapDays={({ date }) => {\n    let props = {}\n    let isWeekend = "+("en"===t?"[0, 6].includes(date.weekDay.index)":"date.weekDay.index === 6")+'\n    \n    if (isWeekend) props.className = "highlight highlight-red"\n    \n    return props\n  }}\n/>',jsx:a.createElement(a.Fragment,null,a.createElement(r.ZP,Object.assign({mapDays:function(e){var n=e.date,a={};return("en"===t?[0,6]:[6]).includes(n.weekDay.index)&&(a.className="highlight highlight-red"),a}},n)),a.createElement("h4",null,e("See Also"),":"),a.createElement(i.Link,{to:"en"===t?"/plugins/weekends/#weekends:-gregorian":"../plugins/weekends/#%D8%A2%D8%AE%D8%B1-%D9%87%D9%81%D8%AA%D9%87-%D8%B4%D9%85%D8%B3%DB%8C"},"en"===t?"plugins #weekends:-gregorian":"پلاگین ها #آخر هفته شمسی"))},{title:"Custom Highlight",code:'<DatePicker\n  mapDays={({ date }) => {\n    let color\n    \n    if ([4, 5, 6, 7].includes(date.day)) color = "green"\n    if ([11, 12, 13, 14].includes(date.day)) color = "red"\n    \n    if (color) return { className: "highlight highlight-" + color }\n  }}\n/>',jsx:a.createElement(r.ZP,Object.assign({mapDays:function(e){var t,n=e.date;if([4,5,6,7].includes(n.day)&&(t="green"),[11,12,13,14].includes(n.day)&&(t="red"),t)return{className:"highlight highlight-"+t}}},n))},{title:"Disabling Days",code:'<DatePicker\n  mapDays={({ date }) => {\n    let isWeekend = [0, 6].includes(date.weekDay.index)\n    \n    if (isWeekend) return {\n      disabled: true,\n      style: { color: "#ccc" },\n      onClick: () => alert("'+e("weekends are disabled")+'")\n    }\n  }}\n/>',jsx:a.createElement(r.ZP,Object.assign({mapDays:function(t){var n=t.date;if([0,6].includes(n.weekDay.index))return{disabled:!0,style:{color:"#ccc"},onClick:function(){return alert(e("weekends are disabled"))}}}},n))},{title:"Hiding Days",code:"<DatePicker\n  mapDays={({ date }) => {\n    let props = {}\n    \n    if ([5, 10, 15, 20, 25].includes(date.day)) props.hidden = true\n    \n    return props\n  }}\n/>",jsx:a.createElement(r.ZP,Object.assign({mapDays:function(e){var t=e.date,n={};return[5,10,15,20,25].includes(t.day)&&(n.hidden=!0),n}},n))},{title:"Adding Tiltle to Days",description:"map_days_title",code:'<DatePicker\n  mapDays={({ date, today }) => {\n    let props = {}\n    let result = date.dayOfBeginning - today.dayOfBeginning\n    \n    if (result === -1) props.title = "'+e("Yesterday")+'"\n    if (result === 0) props.title = "'+e("Today")+'"\n    if (result === 1) props.title = "'+e("Tomorrow")+'"\n    \n    return props\n  }}\n/>',jsx:a.createElement(r.ZP,Object.assign({mapDays:function(t){var n=t.date,a=t.today,l={},r=n.dayOfBeginning-a.dayOfBeginning;return-1===r&&(l.title=e("Yesterday")),0===r&&(l.title=e("Today")),1===r&&(l.title=e("Tomorrow")),l}},n))},{title:"Custom Tooltip",description:"tooltip",code:'import React, { useState, useRef } from "react";\nimport DatePicker from "react-multi-date-picker";\n\nexport default function Example(){\n  return <DatePickerWithTooltip />\n}\n\nfunction DatePickerWithTooltip() {\n  const [data, setData] = useState({});\n  const ref = useRef();\n\n  return (\n    <>\n      <DatePicker\n        ref={ref}\n        containerStyle={{ position: "relative" }}\n        mapDays={({ date, today }) => {\n          let result = date.dayOfBeginning - today.dayOfBeginning;\n          let title;\n\n          if (result === -1) title = "Yesterday";\n          if (result === 0) title = "Today";\n          if (result === 1) title = "Tomorrow";\n\n          return {\n            onMouseOver: (e) => {\n              let spanRect = e.target.getBoundingClientRect();\n              let calendarRect = ref.current\n                .querySelector(".rmdp-wrapper")\n                .getBoundingClientRect();\n\n              setData({\n                ...data,\n                visible: true,\n                left: spanRect.left - calendarRect.left,\n                top: spanRect.top - calendarRect.top,\n                visible: title ? true : false,\n                title,\n              });\n            },\n            onMouseLeave: () => {\n              setData({\n                ...data,\n                visible: false,\n                title,\n              });\n            },\n          };\n        }}\n      '+("en"===t?">":'  calendar="persian"\n        locale="fa"\n        calendarPosition="bottom-right"\n      >')+'\n        <span\n          style={{\n            position: "absolute",\n            left: 0,\n            top: 0,\n            backgroundColor: "white",\n            border: "1px solid #ccc",\n            boxShadow: "0 0 5px #ccc",\n            borderRadius: "5px",\n            padding: "3px 5px",\n            fontSize: "14px",\n            transform: `translate(${data.left}px, ${data.top + 30}px)`,\n            visibility: data.visible ? "visible" : "hidden",\n          }}\n        >\n          {data.title}\n        </span>\n      </DatePicker>\n    </>\n  );\n}',jsx:a.createElement(s,n)}]}function s(e){var t=(0,a.useState)({}),n=t[0],l=t[1],i=(0,a.useRef)();return a.createElement(a.Fragment,null,a.createElement(r.ZP,Object.assign({ref:i,containerStyle:{position:"relative"},mapDays:function(e){var t,a=e.date,r=e.today,d=a.dayOfBeginning-r.dayOfBeginning;return-1===d&&(t="Yesterday"),0===d&&(t="Today"),1===d&&(t="Tomorrow"),{onMouseOver:function(e){var a,r=e.target.getBoundingClientRect(),d=i.current.querySelector(".rmdp-wrapper").getBoundingClientRect();l(Object.assign({},n,((a={visible:!0,left:r.left-d.left,top:r.top-d.top}).visible=!!t,a.title=t,a)))},onMouseLeave:function(){l(Object.assign({},n,{visible:!1,title:t}))}}}},e),a.createElement("span",{style:{position:"absolute",left:0,top:0,backgroundColor:"white",border:"1px solid #ccc",boxShadow:"0 0 5px #ccc",borderRadius:"5px",padding:"3px 5px",fontSize:"14px",transform:"translate("+n.left+"px, "+(n.top+30)+"px)",visibility:n.visible?"visible":"hidden"}},n.title)))}function o(e){var t=e.pageContext.language||"en";return a.createElement(l.Z,{language:t,doc:d})}}}]);
//# sourceMappingURL=component---src-pages-map-days-js-9f1d152d75c019decee0.js.map