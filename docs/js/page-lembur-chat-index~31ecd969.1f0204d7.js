(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-chat-index~31ecd969"],{"03a0":function(t,e,n){var a=n("25bb"),r=n("d309");t.exports={distanceInWords:a(),format:r()}},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,a){var r;return a=a||{},r="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),a.addSuffix?a.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:e}}t.exports=n},"359b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"p-1 shadow-lg",staticStyle:{background:"#0099FF"}},[n("button",{staticClass:"btn btn-sm font-bold text-uppercase underline",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/lembur")}}},[n("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),t._m(0)]),n("div",{staticClass:"p-1"},[n("div",{staticClass:"shadow-lg rounded-lg p-2 text-sm",class:{"bg-green-300":1==t.idku},staticStyle:{border:"1px solid grey"}},[n("span",{staticClass:"font-bold font-times"},[t._v("Taufik Akbar Maliki")]),n("p",{},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus perferendis vel distinctio, adipisci, non tenetur accusamus, sed quasi iure ipsa provident eaque officia consequatur molestiae. Sunt quo fuga veniam.")]),n("p",{staticClass:"text-right"},[t._v(t._s(t.distanceToNow())+" Yang lalu")])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-center float-right mr-3 mt-1 font-times font-bold"},[n("span",{staticClass:"typcn typcn-flow-switch"}),t._v(" CHAT ROOM ")])}],o=(n("0d03"),n("bc3a"),n("8aa5")),u=n.n(o),i=n("03a0"),s=(u.a.firestore(),{data:function(){return{idku:1}},methods:{format:function(){return this.$datefns.format(new Date(2014,6,2),"dddd MMMM YYYY",{locale:i})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:i,includeSeconds:!0})}},layout:"lembur",mounted:function(){}}),c=s,d=n("2877"),l=Object(d["a"])(c,a,r,!1,null,null,null);e["default"]=l.exports},d309:function(t,e,n){var a=n("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],u=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach((function(t){d[t+"o"]=function(e,n){return o(n[t](e))}})),{formatters:d,formattingTokensRegExp:a(d)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r}}]);
//# sourceMappingURL=page-lembur-chat-index~31ecd969.1f0204d7.js.map