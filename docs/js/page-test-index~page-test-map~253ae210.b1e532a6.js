(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test-index~page-test-map~253ae210"],{"07ac":function(e,t,n){var r=n("23e7"),o=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"1d1c":function(e,t,n){var r=n("23e7"),o=n("83ab"),i=n("37e8");r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:i})},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),i=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"3f3d":function(e,t,n){"use strict";n.d(t,"c",(function(){return J})),n.d(t,"e",(function(){return W})),n.d(t,"b",(function(){return X})),n.d(t,"a",(function(){return Y})),n.d(t,"d",(function(){return K})),n.d(t,"f",(function(){return Q}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mgl-map-wrapper"},[e._m(0),e.initialized?e._t("default"):e._e()],2)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",attrs:{id:e.container}})}],i=n("5530"),a=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("b64b"),{methods:{$_emitEvent(e,t={}){this.$emit(e,{map:this.map,component:this,...t})},$_emitMapEvent(e,t={}){this.$_emitEvent(e.type,{mapboxEvent:e,...t})}}}),s={resize:{name:"resize"},webglcontextlost:{name:"webglcontextlost"},webglcontextrestored:{name:"webglcontextrestored"},remove:{name:"remove"},movestart:{name:"movestart"},load:{name:"load"},contextmenu:{name:"contextmenu"},dblclick:{name:"dblclick"},click:{name:"click"},touchcancel:{name:"touchcancel"},touchmove:{name:"touchmove"},touchend:{name:"touchend"},touchstart:{name:"touchstart"},dataloading:{name:"dataloading"},mousemove:{name:"mousemove"},mouseup:{name:"mouseup"},mousedown:{name:"mousedown"},sourcedataloading:{name:"sourcedataloading"},error:{name:"error"},data:{name:"data"},styledata:{name:"styledata"},sourcedata:{name:"sourcedata"},mouseout:{name:"mouseout"},styledataloading:{name:"styledataloading"},moveend:{name:"moveend"},move:{name:"move"},render:{name:"render"},zoom:{name:"zoom"},zoomstart:{name:"zoomstart"},zoomend:{name:"zoomend"},boxzoomstart:{name:"boxzoomstart"},boxzoomcancel:{name:"boxzoomcancel"},boxzoomend:{name:"boxzoomend"},rotate:{name:"rotate"},rotatestart:{name:"rotatestart"},rotateend:{name:"rotateend"},dragend:{name:"dragend"},drag:{name:"drag"},dragstart:{name:"dragstart"},pitch:{name:"pitch"},idle:{name:"idle"}},u={container:{type:[String,HTMLElement],default(){return"map-"+(""+Math.random()).split(".")[1]}},accessToken:{type:String,default:void 0},minZoom:{type:Number,default:0},maxZoom:{type:Number,default:22},mapStyle:{type:[String,Object],required:!0},hash:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},bearingSnap:{type:Number,default:7},pitchWithRotate:{type:Boolean,default:!0},clickTolerance:{type:Number,default:3},attributionControl:{type:Boolean,default:!0},customAttribution:{type:[String,Array],default:null},logoPosition:{type:String,default:"bottom-left",validator:e=>["top-left","top-right","bottom-left","bottom-right"].includes(e)},failIfMajorPerformanceCaveat:{type:Boolean,default:!1},preserveDrawingBuffer:{type:Boolean,default:!1},refreshExpiredTiles:{type:Boolean,default:!0},maxBounds:{type:Array,default(){}},scrollZoom:{type:[Boolean,Object],default(){return!0}},boxZoom:{type:Boolean,default:!0},dragRotate:{type:Boolean,default:!0},dragPan:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},doubleClickZoom:{type:Boolean,default:!0},touchZoomRotate:{type:[Boolean,Object],default(){return!0}},trackResize:{type:Boolean,default:!0},center:{type:[Object,Array],default:void 0},zoom:{type:Number,default:0},bearing:{type:Number,default:0},pitch:{type:Number,default:0},initialBounds:{type:[Object,Array],default:void 0},renderWorldCopies:{type:Boolean,default:!0},RTLTextPluginUrl:{type:String,default:void 0},light:{type:Object,default:void 0},tileBoundaries:{type:Boolean,default:!1},collisionBoxes:{type:Boolean,default:!1},repaint:{type:Boolean,default:!1},transformRequest:{type:Function,default:null},maxTileCacheSize:{type:Number,default:null},localIdeographFontFamily:{type:String,default:null},collectResourceTiming:{type:Boolean,default:!1},fadeDuration:{type:Number,default:300},crossSourceCollisions:{type:Boolean,default:!0}};const c={maxBounds(e){this.map.setMaxBounds(e)},minZoom(e){this.map.setMinZoom(e)},maxZoom(e){this.map.setMaxZoom(e)},mapStyle(e){this.map.setStyle(e)},collisionBoxes(e){this.map.showCollisionBoxes=e},tileBoundaries(e){this.map.showTileBoundaries=e},repaint(e){this.map.repaint=e},zoom(e){this.map.setZoom(e)},center(e){this.map.setCenter(e)},bearing(e){this.map.setBearing(e)},pitch(e){this.map.setPitch(e)},light(e){this.map.setLigh(e)}};function l(e,t,n,r){this.initial||(this.$listeners["update:"+e]?(this.propsIsUpdating[e]?(this._watcher.active=!1,this.$nextTick(()=>{this._watcher.active=!0})):(this._watcher.active=!0,t(n,r)),this.propsIsUpdating[e]=!1):t(n,r))}function p(){const e={};return Object.entries(c).forEach(t=>{e[t[0]]=function(e,n){return l.call(this,t[0],t[1].bind(this),e,n)}}),e}var d={watch:p()},m={methods:{$_updateSyncedPropsFabric(e,t){return()=>{this.propsIsUpdating[e]=!0;let n="function"===typeof t?t():t;return this.$emit("update:"+e,n)}},$_bindPropsUpdateEvents(){const e=[{events:["moveend"],prop:"center",getter:this.map.getCenter.bind(this.map)},{events:["zoomend"],prop:"zoom",getter:this.map.getZoom.bind(this.map)},{events:["rotate"],prop:"bearing",getter:this.map.getBearing.bind(this.map)},{events:["pitch"],prop:"pitch",getter:this.map.getPitch.bind(this.map)}];e.forEach(({events:e,prop:t,getter:n})=>{e.forEach(e=>{this.$listeners["update:"+t]&&this.map.on(e,this.$_updateSyncedPropsFabric(t,n))})})},$_loadMap(){return this.mapboxPromise.then(e=>(this.mapbox=e.default?e.default:e,new Promise(e=>{this.accessToken&&(this.mapbox.accessToken=this.accessToken);const t=new this.mapbox.Map({...this._props,container:this.$refs.container,style:this.mapStyle});t.on("load",()=>e(t))})))},$_RTLTextPluginError(e){this.$emit("rtl-plugin-error",{map:this.map,error:e})},$_bindMapEvents(e){Object.keys(this.$listeners).forEach(t=>{e.includes(t)&&this.map.on(t,this.$_emitMapEvent)})},$_unbindEvents(e){e.forEach(e=>{this.map.off(e,this.$_emitMapEvent)})}}},h=n("7f84"),f=n.n(h),g={created(){this.actions={}},methods:{$_registerAsyncActions(e){this.actions={...f()(e),stop(){this.map.stop();const e={pitch:this.map.getPitch(),zoom:this.map.getZoom(),bearing:this.map.getBearing(),center:this.map.getCenter()};return Object.entries(e).forEach(e=>{this.$_updateSyncedPropsFabric(e[0],e[1])()}),Promise.resolve(e)}}}}},y={name:"GlMap",mixins:[d,g,m,a],props:Object(i["a"])({mapboxGl:{type:Object,default:null}},u),provide:function(){var e=this;return{get mapbox(){return e.mapbox},get map(){return e.map},get actions(){return e.actions}}},data:function(){return{initial:!0,initialized:!1}},computed:{loaded:function(){return!!this.map&&this.map.loaded()},version:function(){return this.map?this.map.version:null},bounds:function(){return this.map?this.map.getBounds():null},isStyleLoaded:function(){return!!this.map&&this.map.isStyleLoaded()},areTilesLoaded:function(){return!!this.map&&this.map.areTilesLoaded()},isMoving:function(){return!!this.map&&this.map.isMoving()},canvas:function(){return this.map?this.map.getCanvas():null},canvasContainer:function(){return this.map?this.map.getCanvasContainer():null},images:function(){return this.map?this.map.listImages():null}},created:function(){this.map=null,this.propsIsUpdating={},this.mapboxPromise=this.mapboxGl?Promise.resolve(this.mapboxGl):Promise.resolve().then(n.t.bind(null,"e192",7))},mounted:function(){var e=this;this.$_loadMap().then((function(t){e.map=t,void 0!==e.RTLTextPluginUrl&&e.mapbox.setRTLTextPlugin(e.RTLTextPluginUrl,e.$_RTLTextPluginError);var n=Object.keys(s);e.$_bindMapEvents(n),e.$_registerAsyncActions(t),e.$_bindPropsUpdateEvents(),e.initial=!1,e.initialized=!0,e.$emit("load",{map:t,component:e})}))},beforeDestroy:function(){var e=this;this.$nextTick((function(){e.map&&e.map.remove()}))}},v=y,b=(n("8460"),n("2877")),$=Object(b["a"])(v,r,o,!1,null,null,null),_=$.exports,x={methods:{$_emitSelfEvent(e,t={}){this.$_emitMapEvent(e,{control:this.control,...t})},$_bindSelfEvents(e,t){Object.keys(this.$listeners).forEach(n=>{e.includes(n)&&t.on(n,this.$_emitSelfEvent)})},$_unbindSelfEvents(e,t){0!==e.length&&t&&e.forEach(e=>{t.off(e,this.$_emitSelfEvent)})}}},E={mixins:[a,x],inject:["mapbox","map","actions"],props:{position:{type:String,default:"top-right"}},beforeDestroy(){this.map&&this.control&&this.map.removeControl(this.control)},methods:{$_addControl(){try{this.map.addControl(this.control,this.position)}catch(e){return void this.$_emitEvent("error",{error:e})}this.$_emitEvent("added",{control:this.control})}},render(){}},S={name:"NavigationControl",mixins:[E],props:{showCompass:{type:Boolean,default:!0},showZoom:{type:Boolean,default:!0}},created(){this.control=new this.mapbox.NavigationControl(this.$props),this.$_addControl()}};const k={trackuserlocationstart:"trackuserlocationstart",trackuserlocationend:"trackuserlocationend",geolocate:"geolocate",error:"error"};var O={name:"GeolocateControl",mixins:[a,x,E],props:{positionOptions:{type:Object,default(){return{enableHighAccuracy:!1,timeout:6e3}}},fitBoundsOptions:{type:Object,default:()=>({maxZoom:15})},trackUserLocation:{type:Boolean,default:!1},showUserLocation:{type:Boolean,default:!0}},created(){const e=this.mapbox.GeolocateControl;this.control=new e(this.$props),this.$_addControl(),this.$_bindSelfEvents(Object.keys(k),this.control)},methods:{trigger(){if(this.control)return this.control.trigger()}}},I=(HTMLElement,Boolean,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"}},[e._t("marker"),e.marker?e._t("default"):e._e()],2)}),w=[],j=(n("4160"),n("159b"),n("caad"),n("2532"),n("07ac"),{drag:"drag",dragstart:"dragstart",dragend:"dragend"}),P={click:"click",mouseenter:"mouseenter",mouseleave:"mouseleave"},B={name:"MapMarker",mixins:[a,x],inject:["mapbox","map"],provide:function(){var e=this;return{get marker(){return e.marker}}},props:{offset:{type:[Object,Array],default:function(){return[0,0]}},coordinates:{type:Array,required:!0},color:{type:String},anchor:{type:String,default:"center"},draggable:{type:Boolean,default:!1}},data:function(){return{initial:!0,marker:void 0}},watch:{coordinates:function(e){this.initial||this.marker.setLngLat(e)},draggable:function(e){this.initial||this.marker.setDraggable(e)}},mounted:function(){var e=this,t=Object(i["a"])({},this.$props);this.$slots.marker&&(t.element=this.$slots.marker[0].elm),this.marker=new this.mapbox.Marker(t),this.$listeners["update:coordinates"]&&this.marker.on("dragend",(function(t){var n;n=e.coordinates instanceof Array?[t.target._lngLat.lng,t.target._lngLat.lat]:t.target._lngLat,e.$emit("update:coordinates",n)}));var n=Object.keys(j);this.$_bindSelfEvents(n,this.marker),this.initial=!1,this.$_addMarker()},beforeDestroy:function(){void 0!==this.map&&void 0!==this.marker&&this.marker.remove()},methods:{$_addMarker:function(){this.marker.setLngLat(this.coordinates).addTo(this.map),this.$_bindMarkerDOMEvents(),this.$_emitEvent("added",{marker:this.marker})},$_emitSelfEvent:function(e){this.$_emitMapEvent(e,{marker:this.marker})},$_bindMarkerDOMEvents:function(){var e=this;Object.keys(this.$listeners).forEach((function(t){Object.values(P).includes(t)&&e.marker._element.addEventListener(t,(function(t){e.$_emitSelfEvent(t)}))}))},remove:function(){this.marker.remove(),this.$_emitEvent("removed")},togglePopup:function(){return this.marker.togglePopup()}}},L=B,M=Object(b["a"])(L,I,w,!1,null,null,null),T=M.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"}},[e._t("default")],2)},z=[],N=(n("a9e3"),{open:"open",close:"close"}),A={name:"Popup",mixins:[a,x],inject:{mapbox:{default:null},map:{default:null},marker:{default:null}},props:{closeButton:{type:Boolean,default:!0},closeOnClick:{type:Boolean,default:!0},anchor:{validator:function(e){var t=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];return"string"===typeof e&&t.includes(e)},default:void 0},offset:{type:[Number,Object,Array],default:function(){return[0,0]}},coordinates:{type:Array},onlyText:{type:Boolean,default:!1},showed:{type:Boolean,default:!1}},data:function(){return{initial:!0,popup:void 0}},computed:{open:{get:function(){return void 0!==this.popup&&this.popup.isOpen()},set:function(e){this.map&&this.popup&&(e?this.popup.remove():this.popup.addTo(this.map))}}},watch:{coordinates:function(e){this.initial||this.popup.setLngLat(e)},showed:function(e,t){e!==t&&(this.open=e,this.marker&&this.marker.togglePopup())}},created:function(){this.popup=new this.mapbox.Popup(this.$props)},mounted:function(){this.$_addPopup(),this.initial=!1},beforeDestroy:function(){this.map&&(this.popup.remove(),this.$_emitEvent("removed"))},methods:{$_addPopup:function(){if(this.popup=new this.mapbox.Popup(this.$props),void 0!==this.coordinates&&this.popup.setLngLat(this.coordinates),void 0!==this.$slots["default"])if(this.onlyText)if(3===this.$slots["default"][0].elm.nodeType){var e=document.createElement("span");e.appendChild(this.$slots["default"][0].elm),this.popup.setText(e.innerText)}else this.popup.setText(this.$slots["default"][0].elm.innerText);else this.popup.setDOMContent(this.$slots["default"][0].elm);this.$_bindSelfEvents(Object.keys(N),this.popup),this.$_emitEvent("added",{popup:this.popup}),this.marker&&this.marker.setPopup(this.popup),this.showed&&(this.open=!0,this.marker&&this.marker.togglePopup())},$_emitSelfEvent:function(e){this.$_emitMapEvent(e,{popup:this.popup})},remove:function(){this.popup.remove(),this.$_emitEvent("remove",{popup:this.popup})}}},Z=A,R=Object(b["a"])(Z,C,z,!1,null,null,null),F=R.exports,D=["mousedown","mouseup","click","dblclick","mousemove","mouseenter","mouseleave","mouseover","mouseout","contextmenu","touchstart","touchend","touchcancel"];const U={sourceId:{type:String,required:!0},source:{type:[Object,String],default:void 0}},G={layerId:{type:String,required:!0},layer:{type:Object,required:!0},before:{type:String,default:void 0}},q={clearSource:{type:Boolean,default:!0},replaceSource:{type:Boolean,default:!1},replace:{type:Boolean,default:!1}};var V={mixins:[a],props:{...U,...G,...q},inject:["mapbox","map"],data(){return{initial:!0}},computed:{sourceLoaded(){return!!this.map&&this.map.isSourceLoaded(this.sourceId)},mapLayer(){return this.map?this.map.getLayer(this.layerId):null},mapSource(){return this.map?this.map.getSource(this.sourceId):null}},created(){this.layer.minzoom&&this.$watch("layer.minzoom",(function(e){this.initial||this.map.setLayerZoomRange(this.layerId,e,this.layer.maxzoom)})),this.layer.maxzoom&&this.$watch("layer.maxzoom",(function(e){this.initial||this.map.setLayerZoomRange(this.layerId,this.layer.minzoom,e)})),this.layer.paint&&this.$watch("layer.paint",(function(e){if(!this.initial&&e)for(let t of Object.keys(e))this.map.setPaintProperty(this.layerId,t,e[t])}),{deep:!0}),this.layer.layout&&this.$watch("layer.layout",(function(e){if(!this.initial&&e)for(let t of Object.keys(e))this.map.setLayoutProperty(this.layerId,t,e[t])}),{deep:!0}),this.layer.filter&&this.$watch("layer.filter",(function(e){this.initial||this.map.setFilter(this.layerId,e)}),{deep:!0})},beforeDestroy(){if(this.map&&this.map.loaded()){try{this.map.removeLayer(this.layerId)}catch(e){this.$_emitEvent("layer-does-not-exist",{layerId:this.sourceId,error:e})}if(this.clearSource)try{this.map.removeSource(this.sourceId)}catch(e){this.$_emitEvent("source-does-not-exist",{sourceId:this.sourceId,error:e})}}},methods:{$_emitLayerMapEvent(e){return this.$_emitMapEvent(e,{layerId:this.layerId})},$_bindLayerEvents(e){Object.keys(this.$listeners).forEach(t=>{e.includes(t)&&this.map.on(t,this.layerId,this.$_emitLayerMapEvent)})},$_unbindEvents(e){this.map&&e.forEach(e=>{this.map.off(e,this.layerId,this.$_emitLayerMapEvent)})},$_watchSourceLoading(e){"source"===e.dataType&&e.sourceId===this.sourceId&&(this.$_emitEvent("layer-source-loading",{sourceId:this.sourceId}),this.map.off("dataloading",this.$_watchSourceLoading))},move(e){this.map.moveLayer(this.layerId,e),this.$_emitEvent("layer-moved",{layerId:this.layerId,beforeId:e})},remove(){this.map.removeLayer(this.layerId),this.map.removeSource(this.sourceId),this.$_emitEvent("layer-removed",{layerId:this.layerId}),this.$destroy()}},render(){}},H={name:"GeojsonLayer",mixins:[V],computed:{getSourceFeatures(){return e=>this.map?this.map.querySourceFeatures(this.sourceId,{filter:e}):null},getRenderedFeatures(){return(e,t)=>this.map?this.map.queryRenderedFeatures(e,{layers:[this.layerId],filter:t}):null},getClusterExpansionZoom(){return e=>new Promise((t,n)=>{if(!this.mapSource)return n(new Error(`Map source with id ${this.sourceId} not found.`));this.mapSource.getClusterExpansionZoom(e,(e,r)=>e?n(e):t(r))})},getClusterChildren(){return e=>new Promise((t,n)=>{const r=this.mapSource;if(!r)return n(new Error(`Map source with id ${this.sourceId} not found.`));r.getClusterChildren(e,(e,r)=>e?n(e):t(r))})},getClusterLeaves(){return(...e)=>new Promise((t,n)=>{if(!this.mapSource)return n(new Error(`Map source with id ${this.sourceId} not found.`));this.mapSource.getClusterLeaves(...e,(e,r)=>e?n(e):t(r))})}},created(){this.source&&this.$watch("source.data",(function(e){this.initial||this.mapSource.setData(e)}),{deep:!0}),this.$_deferredMount()},methods:{$_deferredMount(){if(this.map.on("dataloading",this.$_watchSourceLoading),this.source){const t={type:"geojson",...this.source};try{this.map.addSource(this.sourceId,t)}catch(e){this.replaceSource&&(this.map.removeSource(this.sourceId),this.map.addSource(this.sourceId,t))}}this.$_addLayer(),this.$_bindLayerEvents(D),this.map.off("dataloading",this.$_watchSourceLoading),this.initial=!1},$_addLayer(){let e=this.map.getLayer(this.layerId);if(e){if(!this.replace)return this.$_emitEvent("layer-exists",{layerId:this.layerId}),e;this.map.removeLayer(this.layerId)}const t={id:this.layerId,source:this.sourceId,...this.layer};this.map.addLayer(t,this.before),this.$_emitEvent("added",{layerId:this.layerId})},setFeatureState(e,t){if(this.map){const n={id:e,source:this.source};return this.map.setFeatureState(n,t)}},getFeatureState(e){if(this.map){const t={id:e,source:this.source};return this.map.getFeatureState(t)}},removeFeatureState(e,t,n){if(this.map){const r={id:e,source:this.source,sourceLayer:t};return this.map.removeFeatureState(r,n)}}}};const J=_,W=S,X=O,Y=H,K=T,Q=F},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=i("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("4160"),n("159b"),n("dbb4"),n("1d1c"),n("7a82");var r=n("ade3");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6f53":function(e,t,n){var r=n("83ab"),o=n("df75"),i=n("fc6a"),a=n("d1e7").f,s=function(e){return function(t){var n,s=i(t),u=o(s),c=u.length,l=0,p=[];while(c>l)n=u[l++],r&&!a.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}};e.exports={entries:s(!0),values:s(!1)}},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(e,a),e}},"7f84":function(e,t,n){(function(t,n){e.exports=n()})(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var r=[{name:"moveend",check:function(e,t){return t.center&&e.isMoving()}},{name:"zoomend",check:function(e,t){return void 0!==t.zoom&&null!==t.zoom&&e.isZooming()}},{name:"rotateend",check:function(e,t){return void 0!==t.bearing&&null!==t.bearing&&e.isRotating()}},{name:"pitchend",check:function(e,t){return void 0!==t.pitch&&null!==t.bearing&&e.isMoving()}}],o=function(e){return{center:e.getCenter(),zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch()}},i={events:r,getter:o},a={events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},s={events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},u={events:[{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{bearing:e.getBearing()}}},c={setCenter:a,panBy:a,panTo:a,setZoom:s,zoomTo:s,zoomIn:s,zoomOut:s,setBearing:u,rotateTo:u,resetNorth:u,snapToNorth:u,setPitch:{events:[{name:"pitchend",check:function(e){return!0}}],getter:function(e){return{pitch:e.getPitch()}}},fitBounds:{events:[{name:"zoomend",check:function(e){return e.isZooming()}},{name:"moveend",check:function(e){return e.isMoving()}},{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),center:e.getCenter()}}},fitScreenCoordinates:{events:[{name:"zoomend",check:function(e,t){return e.isZooming()}},{name:"moveend",check:function(e,t){return e.isMoving()}},{name:"rotateend",check:function(e,t){return t.bearing&&e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),center:e.getCenter(),bearing:e.getBearing(),pitch:e.getPitch()}}},jumpTo:i,easeTo:i,flyTo:i};function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return"".concat(e,"-").concat((""+Math.random()).split(".")[1])}function h(e,t,n,r){var o=function o(i){i.type===t&&i.eventId===n&&(e.off(t,o),r(i))};return o}function f(e,t){var n=e[t],r=n.length;return function(){for(var o=[],i={eventId:m(t)},a=c[t].events.map((function(t,n){return{event:t,func:new Promise((function(r,a){o[n]={event:t,func:h(e,t.name,i.eventId,r)},e.on(t.name,o[n].func)}))}})),s=[],u=0;u<r;u++)u===r-1?s.push(p({},i,(u<0||arguments.length<=u?void 0:arguments[u])||{})):s.push((u<0||arguments.length<=u?void 0:arguments[u])||null);var d=[],f=(arguments.length<=0?void 0:arguments[0])||{};try{n.apply(e,s),"fitBounds"===t&&(f={}),"fitScreenCoordinates"===t&&(f={bearing:null},f.bearing=null,"number"===typeof(arguments.length<=2?void 0:arguments[2])&&(f.bearing=arguments.length<=2?void 0:arguments[2]),(arguments.length<=3?void 0:arguments[3])&&"object"===l(arguments.length<=3?void 0:arguments[3])&&(f=p({},f,arguments.length<=3?void 0:arguments[3]))),d=a.map((function(t){var n=t.event,r=t.func;return n.check(e,f)?r:(e.off(n.name,r),Promise.resolve())}))}catch(g){throw o.forEach((function(t){var n=t.event,r=t.func;e.off(n.name,r)})),g}return Promise.all(d).then((function(){return c[t].getter(e)}))}}var g=f,y=function(e){var t=Object.keys(c),n={};return t.forEach((function(r){-1!==t.indexOf(r)&&(n[r]=g(e,r))})),n};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?g(e,t):y(e)}n.d(t,"default",(function(){return v}))}])["default"]}))},8460:function(e,t,n){"use strict";n("bf38")},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),s=n("5135"),u=n("c6b6"),c=n("7156"),l=n("c04e"),p=n("d039"),d=n("7c73"),m=n("241c").f,h=n("06cf").f,f=n("9bf2").f,g=n("58a8").trim,y="Number",v=o[y],b=v.prototype,$=u(d(b))==y,_=function(e){var t,n,r,o,i,a,s,u,c=l(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+c}for(i=c.slice(2),a=i.length,s=0;s<a;s++)if(u=i.charCodeAt(s),u<48||u>o)return NaN;return parseInt(i,r)}return+c};if(i(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&($?p((function(){b.valueOf.call(n)})):u(n)!=y)?c(new v(_(t)),n,E):_(t)},S=r?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;S.length>k;k++)s(v,x=S[k])&&!s(E,x)&&f(E,x,h(v,x));E.prototype=b,b.constructor=E,a(o,y,E)}},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},bf38:function(e,t,n){},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=i("map");r({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),s=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),o=s.f,c=i(r),l={},p=0;while(c.length>p)n=o(r,t=c[p++]),void 0!==n&&u(l,t,n);return l}})},e439:function(e,t,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,s=n("83ab"),u=o((function(){a(1)})),c=!s||u;r({target:"Object",stat:!0,forced:c,sham:!s},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})}}]);
//# sourceMappingURL=page-test-index~page-test-map~253ae210.b1e532a6.js.map