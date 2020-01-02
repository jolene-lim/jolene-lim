!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){L.TileLayer.addInitHook(function(){if(!this.options.useCache)return this._db=null,void(this._canvas=null);this.options.dbOptions?this._db=new PouchDB("offline-tiles",this.options.dbOptions):this._db=new PouchDB("offline-tiles"),this._canvas=document.createElement("canvas"),this._canvas.getContext&&this._canvas.getContext("2d")||(this._canvas=null)}),L.TileLayer.prototype.options.useCache=!1,L.TileLayer.prototype.options.saveToCache=!0,L.TileLayer.prototype.options.useOnlyCache=!1,L.TileLayer.prototype.options.cacheFormat="image/png",L.TileLayer.prototype.options.cacheMaxAge=864e5,L.TileLayer.include({createTile:function(t,e){var i=document.createElement("img");i.onerror=L.bind(this._tileOnError,this,e,i),this.options.crossOrigin&&(i.crossOrigin=""),i.alt="";var o=this.getTileUrl(t);return this.options.useCache&&this._canvas?this._db.get(o,{revs_info:!0},this._onCacheLookup(i,o,e)):i.onload=L.bind(this._tileOnLoad,this,e,i),i.src=o,i},_onCacheLookup:function(t,e,i){return function(o,n){n?(this.fire("tilecachehit",{tile:t,url:e}),Date.now()>n.timestamp+this.options.cacheMaxAge&&!this.options.useOnlyCache?(this.options.saveToCache&&(t.onload=L.bind(this._saveTile,this,t,e,n._revs_info[0].rev,i)),t.crossOrigin="Anonymous",t.src=e,t.onerror=function(t){this.src=n.dataUrl}):(t.onload=L.bind(this._tileOnLoad,this,i,t),t.src=n.dataUrl)):(this.fire("tilecachemiss",{tile:t,url:e}),this.options.useOnlyCache?(t.onload=L.Util.falseFn,t.src=L.Util.emptyImageUrl):(this.options.saveToCache?t.onload=L.bind(this._saveTile,this,t,e,null,i):t.onload=L.bind(this._tileOnLoad,this,i,t),t.crossOrigin="Anonymous",t.src=e))}.bind(this)},_saveTile:function(t,e,i,o){if(null!==this._canvas){var n;this._canvas.width=t.naturalWidth||t.width,this._canvas.height=t.naturalHeight||t.height,this._canvas.getContext("2d").drawImage(t,0,0);try{n=this._canvas.toDataURL(this.options.cacheFormat)}catch(e){return this.fire("tilecacheerror",{tile:t,error:e}),o()}var s={_id:e,dataUrl:n,timestamp:Date.now()};i?this._db.get(e).then(function(t){return this._db.put({_id:t._id,_rev:t._rev,dataUrl:n,timestamp:Date.now()})}.bind(this)).then(function(t){}):this._db.put(s).then(function(t){}),o&&o()}},seed:function(t,e,i){if(this.options.useCache&&!(e>i)&&this._map){for(var o=[],n=e;n<=i;n++)for(var s=this._map.project(t.getNorthEast(),n),a=this._map.project(t.getSouthWest(),n),r=this.getTileSize(),h=L.bounds(L.point(Math.floor(s.x/r.x),Math.floor(s.y/r.y)),L.point(Math.floor(a.x/r.x),Math.floor(a.y/r.y))),l=h.min.y;l<=h.max.y;l++)for(var c=h.min.x;c<=h.max.x;c++)point=new L.Point(c,l),point.z=n,o.push(this._getTileUrl(point));var u={bbox:t,minZoom:e,maxZoom:i,queueLength:o.length};this.fire("seedstart",u);var p=this._createTile();return p._layer=this,this._seedOneTile(p,o,u),this}},_createTile:function(){return new Image},_getTileUrl:function(t){var e=t.z;return this.options.zoomReverse&&(e=this.options.maxZoom-e),e+=this.options.zoomOffset,L.Util.template(this._url,L.extend({r:this.options.detectRetina&&L.Browser.retina&&this.options.maxZoom>0?"@2x":"",s:this._getSubdomain(t),x:t.x,y:this.options.tms?this._globalTileRange.max.y-t.y:t.y,z:this.options.maxNativeZoom?Math.min(e,this.options.maxNativeZoom):e},this.options))},_seedOneTile:function(t,e,i){if(e.length){this.fire("seedprogress",{bbox:i.bbox,minZoom:i.minZoom,maxZoom:i.maxZoom,queueLength:i.queueLength,remainingLength:e.length});var o=e.pop();this._db.get(o,function(n,s){s?this._seedOneTile(t,e,i):(t.onload=function(n){this._saveTile(t,o,null),this._seedOneTile(t,e,i)}.bind(this),t.onerror=function(o){this._seedOneTile(t,e,i)}.bind(this),t.crossOrigin="Anonymous",t.src=o)}.bind(this))}else this.fire("seedend",i)}})}]);
//# sourceMappingURL=lfx-tilelayer-prod.js.map
