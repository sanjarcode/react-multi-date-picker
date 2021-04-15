(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[104],{7275:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var a=t(7294),r=t(316),l=t(7821);function o(e,n,t){var r=(0,a.useRef)(),o=(0,a.useRef)(),i=(0,a.useRef)(),c=(0,a.useState)(!1),s=c[0],u=c[1],d=(0,a.useState)(!1),f=d[0],p=d[1],h=(0,a.useState)(!1),m=h[0],C=h[1],k=(0,a.useState)(!1),b=k[0],v=k[1],E=(0,a.useState)(new l.NT({calendar:"en"===n?"gregorian":"persian",locale:n})),y=E[0],R=E[1],x=(0,a.useRef)();function g(e,n){var t=x.current.date;x.current.set(e,t[e]+n),R(new l.NT(t))}var S={display:"inline-block",width:"90px",fontSize:"16px"};return[{title:"Descriptions",description:"forward_ref_description",code:'import React, { useRef } from "react"\nimport { Calendar } from "react-multi-date-picker"\n\nexport default function Example() {\n  const calendarRef = useRef()\n\n  return (\n    <Calendar ref={calendarRef} />\n  )\n}'},{title:"Opene & Close Calendar By DatePicker Ref",description:"date_picker_ref",code:"const datePickerRef = useRef()\n.\n.\n.\n<div>\n  <button\n    onClick={() => datePickerRef.current.openCalendar()}\n  >\n    "+e("open")+"\n  </button>\n  <DatePicker \n    ref={datePickerRef} \n"+("en"===n?"  >":'    calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  >')+'\n    <button\n      style={{ margin: "5px" }}\n      onClick={() => datePickerRef.current.closeCalendar()}\n    >\n      '+e("close")+"\n    </button>\n  </DatePicker>\n</div>",jsx:a.createElement("div",null,a.createElement("button",{onClick:function(){return r.current.openCalendar()}},e("open")),a.createElement(l.ZP,Object.assign({ref:r},t),a.createElement("button",{style:{margin:"5px"},onClick:function(){return r.current.closeCalendar()}},e("close"))))},{title:"Refresh Position",description:"refresh_position",code:"const ref = useRef()\nconst ref2 = useRef()\nconst [visible, setVisible] = useState(false)\nconst [visible2, setVisible2] = useState(false)\nconst [shouldCloseCalendar, setShouldCloseCalendar] = useState(false)\nconst [shouldCloseCalendar2, setShouldCloseCalendar2] = useState(false)\n.\n.\n.\n<div>\n  <h2>"+e("Example 1 (without using refresh position)")+" :</h2>\n  {visible && <span>"+e("a demo text to force the datepicker to move forward!")+'</span>}\n  <DatePicker\n    value={{}}\n    placeholder="'+e("first click here")+'"\n    ref={ref}\n    onOpen={() => setShouldCloseCalendar(false)}\n    onClose={() => shouldCloseCalendar}\n  '+("en"===n?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <button\n    onClick={() => {\n      if (!visible) {\n        setVisible(true)\n      } else {\n        setVisible(false)\n        setShouldCloseCalendar(true)\n        setTimeout(() => {\n          ref.current.closeCalendar()\n        }, 20);\n      }\n    }}\n  >\n    {visible ? "'+e("refresh and close calendar")+'" : "'+e("then click here")+'"}\n  </button>\n  <h2>'+e("Example 2 (with using refresh position)")+" :</h2>\n  {visible2 && <span>"+e("a demo text to force the datepicker to move forward!")+'</span>}\n  <DatePicker\n    value={{}}\n    placeholder="'+e("first click here")+'"\n    ref={ref2}\n    onOpen={() => setShouldCloseCalendar2(false)}\n    onClose={() => shouldCloseCalendar2}\n  '+("en"===n?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <button\n    onClick={() => {\n      if (!visible2) {\n        setVisible2(true)\n        setTimeout(() => {\n          ref2.current.refreshPosition()\n        }, 20);\n      } else {\n        setVisible2(false)\n        setShouldCloseCalendar2(true)\n        setTimeout(() => {\n          ref2.current.closeCalendar()\n        }, 20);\n      }\n    }}\n  >\n    {visible2 ? "'+e("refresh and close calendar")+'" : "'+e("then click here")+'"}      \n  </button>\n</div>',jsx:a.createElement("div",null,a.createElement("h2",null,e("Example 1 (without using refresh position)")," :"),s&&a.createElement("span",null,e("a demo text to force the datepicker to move forward!")),a.createElement(l.ZP,Object.assign({value:{},placeholder:e("first click here"),ref:o,onOpen:function(){return C(!1)},onClose:function(){return m}},t)),a.createElement("button",{onClick:function(){s?(u(!1),C(!0),setTimeout((function(){o.current.closeCalendar()}),20)):u(!0)}},e(s?"refresh and close calendar":"then click here")),a.createElement("h2",null,e("Example 2 (with using refresh position)")," :"),f&&a.createElement("span",null,e("a demo text to force the datepicker to move forward!")),a.createElement(l.ZP,Object.assign({value:{},placeholder:e("first click here"),ref:i,onOpen:function(){return v(!1)},onClose:function(){return b}},t)),a.createElement("button",{onClick:function(){f?(p(!1),v(!0),setTimeout((function(){i.current.closeCalendar()}),20)):(p(!0),setTimeout((function(){i.current.refreshPosition()}),20))}},e(f?"refresh and close calendar":"then click here")," "))},{title:"Manually Set Year And Month In Calendar",description:"year_month_ref",code:'import React, { useRef, useState } from "react";\nimport { Calendar, DateObject } from "react-multi-date-picker";\n\nexport default function Example() {\n  const [date, setDate] = useState(new DateObject('+("en"===n?"":'{ calendar: "persian", locale: "fa" }')+'));\n\n  const calendarRef = useRef();\n\n  function update(key, value) {\n    let date = calendarRef.current.date;\n\n    calendarRef.current.set(key, date[key] + value);\n\n    setDate(new DateObject(date));\n  }\n\n  const style = {\n    display: "inline-block",\n    width: "90px",\n    fontSize: "16px",\n  };\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <div>\n        <button onClick={() => update("month", 1)}>+</button>\n        <span style={style}>{date.month.name}</span>\n        <button onClick={() => update("month", -1)}>-</button>\n      </div>\n      <div>\n        <button onClick={() => update("year", 1)}>+</button>\n        <span style={style}>{date.year}</span>\n        <button onClick={() => update("year", -1)}>-</button>\n      </div>\n      <Calendar \n        ref={calendarRef}\n      '+("en"===n?"/>":'  calendar="persian" \n        locale="fa" \n      />')+"\n    </div>\n  )\n}  ",jsx:a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",null,a.createElement("button",{onClick:function(){return g("month",1)}},"+"),a.createElement("span",{style:S},y.month.name),a.createElement("button",{onClick:function(){return g("month",-1)}},"-")),a.createElement("div",null,a.createElement("button",{onClick:function(){return g("year",1)}},"+"),a.createElement("span",{style:S},y.year),a.createElement("button",{onClick:function(){return g("year",-1)}},"-")),a.createElement(l.f,Object.assign({ref:x},t,{className:"inline-block"})))}]}function i(e){var n=e.pageContext.language||"en";return a.createElement(r.Z,{language:n,doc:o})}}}]);
//# sourceMappingURL=component---src-pages-ref-js-19bd075cceeab8502aee.js.map