(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test-index~f3fc50c7"],{"2d8b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"#app"}},[o("MglMap",{staticStyle:{height:"600px"},attrs:{accessToken:t.accessToken,mapStyle:t.mapStyle},on:{"update:mapStyle":function(e){t.mapStyle=e},"update:map-style":function(e){t.mapStyle=e},load:t.onMapLoaded}},[o("MglGeojsonLayer",{attrs:{sourceId:t.geoJsonSource.data.id,source:t.geoJsonSource,layerId:"somethingSomething",layer:t.geoJsonLayer}}),o("MglNavigationControl",{attrs:{position:"top-right"}}),o("MglGeolocateControl",{attrs:{position:"top-right"}}),o("MglMarker",{attrs:{coordinates:t.pointGPS}},[o("MglPopup",[o("div",[t._v("GPS")])])],1),o("MglMarker",{attrs:{coordinates:t.pointTempat}},[o("MglPopup",[o("div",[t._v("Lokasi")])])],1)],1)],1)},a=[],r=o("1da1"),i=(o("96cf"),o("d81d"),o("4795"),o("e192"),o("3f3d")),s={components:{MglMap:i["c"],MglPopup:i["f"],MglNavigationControl:i["e"],MglGeolocateControl:i["b"],MglGeojsonLayer:i["a"],MglMarker:i["d"]},data:function(){return{pointTempat:[115.46969742626823,-2.3614227630765185],pointGPS:[115.46969742626823,-2.3654827630765185],radius:.5,accessToken:"pk.eyJ1IjoicnVkeXNrYSIsImEiOiJja3B1cGY0OGwxOTlxMm5xdnJ6dTU3dXZiIn0.vqqfQlT3-d3KF9KNzemANg",mapStyle:"mapbox://styles/mapbox/streets-v11",geoJsonSource:{type:"geojson",data:{id:"thisIsMySource",type:"Feature",geometry:{type:"Polygon",coordinates:[]}}},geoJsonLayer:{type:"fill",source:"thisIsMySource",layout:{},paint:{"fill-color":"#0080ff","fill-opacity":.5}}}},methods:{onMapLoaded:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(t),t.map.on("click",(function(t){console.log(t)})),n=t.component.actions,o.next=5,n.flyTo({center:e.pointTempat,zoom:15,speed:1});case 5:a=o.sent,console.log(a);case 7:case"end":return o.stop()}}),o)})))()},cekPosisi:function(t,e,o){function n(t,e,o){var n=4e4/360,a=Math.cos(Math.PI*e.lat/180)*n,r=Math.abs(e.lng-t.lng)*a,i=Math.abs(e.lat-t.lat)*n;return Math.sqrt(r*r+i*i)<=o}var a={lat:t[1],lng:t[0]},r=(e={lat:e[1],lng:e[0]},n(a,e,this.radius));console.log("apakah di dalam lingkaran ",r)},drawCircle:function(){var t=this.pointTempat,e=this.radius,o={steps:50,units:"kilometers",properties:{foo:"bar"}},n=turf.circle(t,e,o);this.geoJsonSource.data.geometry.coordinates=n.geometry.coordinates,this.cekPosisi(this.pointGPS,this.pointTempat)}},mounted:function(){this.drawCircle(),setTimeout((function(){document.querySelector("button.mapboxgl-ctrl-zoom-in>span").innerHTML="+",document.querySelector("button.mapboxgl-ctrl-zoom-out>span").innerHTML="-",document.querySelector("button.mapboxgl-ctrl-geolocate>span").innerHTML="o"}),3e3)}},l=s,c=o("2877"),p=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=page-test-index~f3fc50c7.c1bc3330.js.map