(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[588],{2381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var l=n(7294),a=n(591);function r(e,t,n,a,r){return[{title:"Descriptions",description:"date_object"},{title:"Current Moment",description:l.createElement("div",null,l.createElement(r,{title:"gregorian_1"},"const date = new DateObject()\n\nconsole.log(date.year) //2021\nconsole.log(date.month.number) //3\nconsole.log(date.day) //2\nconsole.log(date.calendar) //gregorian\nconsole.log(date.locale) //en"),l.createElement(r,{title:"gregorian_2"},"console.log(date.format()) //2021/03/02"),l.createElement(r,{title:"gregorian_3"},'console.log(date.format("dddd DD MMMM YYYY")) //Tuesday 02 March 2021'),l.createElement(r,{title:"gregorian_4"},'console.log(\n  date.format(\n    "Date: YYYY/MM/DD Time: HH:mm:ss",\n    ["Date", "Time"]\n  )\n) //Date: 2021/03/02 Time: 10:53:00'),l.createElement(r,{title:"gregorian_5"},"const {year, month, day, hour, minute} = date"),l.createElement(r,{title:"gregorian_6"},"const {name, shortName, number, index} = date.month\n\nconsole.log(name, shortName, number, index); //March Mar 3 2"),l.createElement(r,null,"const {name, shortName, number, index} = date.weekDay\n\nconsole.log(name, shortName, number, index); //Tuesday Tue 3 2"),l.createElement(r,{title:"gregorian_7"},"date.toFirstOfMonth()\n\nconsole.log(date.format()); //2021/03/01\n\ndate.toLastOfMonth()\n\nconsole.log(date.format()); //2021/03/31"))},{title:"Persian Calendar (Solar Hijri)",description:e("persian_1"),code:'const date = new DateObject({ calendar: "persian" })\n\nconsole.log(date.format()) //1399/12/12'},{title:"Arabic Calendar (islamic hijri)",code:'const date = new DateObject({ calendar: "arabic" })\n\nconsole.log(date.format()) //1442/07/18'},{title:"Indian Calendar",code:'const date = new DateObject({ calendar: "indian" })\n\nconsole.log(date.format()) //1942/12/11'},{title:"Table of most used properties",jsx:l.createElement(l.Fragment,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{colSpan:"2"},e("Property")),l.createElement("th",{rowSpan:"2"},e("Type")),l.createElement("th",{rowSpan:"2"},e("Example"))),l.createElement("tr",null,l.createElement("th",null,e("DateObject")),l.createElement("th",null,e("Javascript Date")))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"year"),l.createElement("td",{style:{direction:"ltr"}},"getFullYear()"),l.createElement("td",null,"Number"),l.createElement("td",null,"2021")),l.createElement("tr",null,l.createElement("td",null,"month"),l.createElement("td",null,"-"),l.createElement("td",null,"Object"),l.createElement("td",null,"{ length: 31, name: 'March', shortName: 'Mar', index: 2, number: 3, toString: [Function (anonymous)], valueOf: [Function (anonymous)] }")),l.createElement("tr",null,l.createElement("td",null,"month.index"),l.createElement("td",{style:{direction:"ltr"}},"getMonth()"),l.createElement("td",null,"Number"),l.createElement("td",null,"2")),l.createElement("tr",null,l.createElement("td",null,"day"),l.createElement("td",{style:{direction:"ltr"}},"getDate()"),l.createElement("td",null,"Number"),l.createElement("td",null,"2")),l.createElement("tr",null,l.createElement("td",null,"weekDay"),l.createElement("td",null,"-"),l.createElement("td",null,"Object"),l.createElement("td",null,"{ index: 2, number: 3, toString: [Function: toString], valueOf: [Function: valueOf], name: 'Tuesday', shortName: 'Tue' }")),l.createElement("tr",null,l.createElement("td",null,"weekDay.index"),l.createElement("td",{style:{direction:"ltr"}},"getDay()"),l.createElement("td",null,"Number"),l.createElement("td",null,"2")),l.createElement("tr",null,l.createElement("td",null,"hour"),l.createElement("td",{style:{direction:"ltr"}},"getHours()"),l.createElement("td",null,"Number"),l.createElement("td",null,"10")),l.createElement("tr",null,l.createElement("td",null,"minute"),l.createElement("td",{style:{direction:"ltr"}},"getMinutes()"),l.createElement("td",null,"Number"),l.createElement("td",null,"53")),l.createElement("tr",null,l.createElement("td",null,"second"),l.createElement("td",{style:{direction:"ltr"}},"getSeconds()"),l.createElement("td",null,"Number"),l.createElement("td",null,"24")),l.createElement("tr",null,l.createElement("td",null,"millisecond"),l.createElement("td",{style:{direction:"ltr"}},"getMilliseconds()"),l.createElement("td",null,"Number"),l.createElement("td",null,"458")),l.createElement("tr",null,l.createElement("td",{style:{direction:"ltr"}},"valueOf()"),l.createElement("td",{style:{direction:"ltr"}},"valueOf()"),l.createElement("td",null,"Number"),l.createElement("td",null,"1614672704244")),l.createElement("tr",null,l.createElement("td",null,"-"),l.createElement("td",{style:{direction:"ltr"}},"getTimezoneOffset()"),l.createElement("td",null,"Number"),l.createElement("td",null,"-210")),l.createElement("tr",null,l.createElement("td",{style:{direction:"ltr"}},"toUTC()"),l.createElement("td",{style:{direction:"ltr"}},"getUTCDate()"),l.createElement("td",null),l.createElement("td",null)),l.createElement("tr",null,l.createElement("td",{style:{direction:"ltr"}},"setYear()"),l.createElement("td",{style:{direction:"ltr"}},"setFullYear()"),l.createElement("td",null),l.createElement("td",null,"setYear(2021)")),l.createElement("tr",null,l.createElement("td",{style:{direction:"ltr"}},"setMonth()"),l.createElement("td",{style:{direction:"ltr"}},"setMonth()"),l.createElement("td",null),l.createElement("td",{style:{color:"red"}},"setMonth(10)*")),l.createElement("tr",null,l.createElement("td",{style:{direction:"ltr"}},"setDay()"),l.createElement("td",{style:{direction:"ltr"}},"setDate()"),l.createElement("td",null),l.createElement("td",null,"setDay(7)")))),l.createElement("p",{style:{color:"red"}},"*",e("table_1")),l.createElement(r,{title:"table_2"},'const date = new DateObject()\n\ndate.year = 2020\ndate.month = 3\ndate.day = 4\n\nconsole.log(date.format()) //2020/03/04\n\ndate.set({ year: 2010, month: 4, day: 7 })\n\nconsole.log(date.format()) //2010/04/07\n\nconsole.log(\n  date\n    .setYear(2000)\n    .setMonth(1)\n    .setDay(1)\n    .format()\n) //2000/01/01\n\nconsole.log(\n  date\n    .set("year", 1907)\n    .set("month", 7)\n    .set("day", 7)\n    .format()\n) //1907/07/07'))},{title:"New DateObject From String",description:l.createElement("div",null,l.createElement("p",null,e("string_1")),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,e("string_2")),l.createElement("ol",null,l.createElement("li",null,l.createElement("p",null,e("string_3"))),l.createElement("li",null,l.createElement("div",{dangerouslySetInnerHTML:{__html:"<p>"+e("string_4")+"</p>"}}))),l.createElement(r,null,'var date = new DateObject("2020 8 21 11 55 36 100 am");\n\ndate.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/21 11:55:36.100 am\n\ndate = new DateObject("2020/08/01");\n\ndate.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/01 12:00:00.000 am')),l.createElement("li",null,l.createElement(r,{title:"string_5"},'const date = new DateObject({\n  date: "September 04 2021, 12:42 am",\n  format: "MMMM DD YYYY, HH:mm a"\n})\n\nconsole.log(date.format()); //September 04 2021, 12:42 pm'),l.createElement(r,{title:"string_6"},'const date = new DateObject({\n  date: "1400/05/14 18:35:44",\n  format: "YYYY/MM/DD HH:mm:ss",\n  calendar: "persian",\n  locale: "fa"\n})\n\nconsole.log(\n  date.format("DD MMMM سال YYYY, ساعت HH و mm دقیقه")\n); //۱۴ مرداد سال ۱۴۰۰, ساعت ۱۸ و ۳۵ دقیقه'))))},{title:"New DateObject from javascript Date",code:"const date = new DateObject(new Date(2020, 1, 15))\n\nconsole.log(date.format()) //2020/01/15"},{title:"Persian DateObject from javascript Date",code:'const date = new DateObject({\n  date: new Date(2020, 1, 15),\n  calendar: "persian"\n})\n\nconsole.log(date.format()) //1399/10/26'},{title:"New DateObject From Numbers",code:"const date = new DateObject({\n  year:"+("en"===t?"2021":"1400")+",\n  month:10,\n  day:22,\n"+("en"===t?"})":'  calendar:"persian"\n  locale:"fa"\n})')+'\n\nconsole.log(date.format("dddd DD MMMM'+("en"===t?"":" سال")+' YYYY")) //'+("en"===t?"Friday 22 October 2021":"چهارشنبه ۲۲ دی سال ۱۴۰۰")},{title:"New DateObject from Unix Timestamp",description:l.createElement("div",null,l.createElement("div",{dangerouslySetInnerHTML:{__html:"<p>"+e("unix_1")+"</p>"}}),l.createElement("p",null,e("unix_2")),l.createElement("p",null,e("unix_3")),l.createElement(r,null,'const date = new DateObject({\n  date: 1614678083 * 1000,\n  calendar: "'+("en"===t?"gregorian":"persian")+'"\n})\n\nconsole.log(date.format()) //'+("en"===t?"2021/03/02":"1399/12/12")),l.createElement(r,{title:"unix_4"},"const date = new DateObject(1614678083 * 1000)"),l.createElement(r,{title:"unix_5"},"console.log(date.toUnix()) //1614678083"))},{title:"Persian Calendar to Arabic Calendar",description:"convert_1",code:'const date = new DateObject({calendar:"persian", date:"1399/12/24"})\n        \ndate.convert("arabic")\n\nconsole.log(date.format()) //1442/07/30'},{title:"Arabic Calendar to Persian Calendar",code:'const date = new DateObject({ calendar: "arabic", date: "1442/05/10" })\n\ndate.convert("persian")\n\nconsole.log(date.format()) //1399/10/05'},{title:"Gregorian Calendar to Indian Calendar",code:'console.log(new DateObject().convert("indian").format()) //1942/12/11'}]}function c(e){var t=e.pageContext.language||"en";return l.createElement(a.Z,{language:t,doc:r})}}}]);
//# sourceMappingURL=component---src-pages-date-object-js-58bba7031ee1213ba904.js.map