---
layout: post
title: Data for Good; Vehicle Routing Problem with Google OR Tools
categories: [Optimization, API, Data Visualization]
tags: [Python]
leafletmap: true
description: How can we best allocate volunteers to home visits?
---

When I attended the Spatial Data Science Conference 2019, I was very inspired by [DataKind's](https://www.datakind.org/) presentation, where they shared how they used optimization to help a non-profit optimize their operations. The project allowed real-time updates and was using completely open-source tools, which was amazing. Among those, they mentioned using [Google OR tools](https://developers.google.com/optimization) as a solver for the optimization problem. 

I thought it would be cool to create a mini-project that similarly solves a problem for social good. I also made use of the chance to practice my Python skills and querying data from APIs. The question I worked with is: **For a given voluntary welfare organisation and a set of addresses for home visits, how can we best assign the routes of volunteers?**

In this case, I chose Beyond Social Services, a VWO that I've worked with before; its location was scraped using the [OneMap API](https://docs.onemap.sg/). I also decided to use the 15 blocks in the area with the highest amount of rental housing (low-income subsidised flats); the data was queried from the [Data.gov.sg API](https://data.gov.sg/developer). The output of this program will best assign routes to volunteers.

The output of the program first asks users for some input parameters.

```shell
>>> How many volunteers:
>>> 5
>>> Max distance(m) for each volunteer:
>>> 8000
```

If all is set up successfully, the program will produce a map like this (made using Folium):

<style>
  #map_89d9655134c54491a09772239bcfbbc0 {
    position: relative;
    width: 100.0%;
    height: 100.0%;
    left: 0.0%;
    top: 0.0%;
  }
</style>
<div class="folium-map" id="map_89d9655134c54491a09772239bcfbbc0" ></div>
<script>    
    
            var map_89d9655134c54491a09772239bcfbbc0 = L.map(
                "map_89d9655134c54491a09772239bcfbbc0",
                {
                    center: [1.278261, 103.82337360000001],
                    crs: L.CRS.EPSG3857,
                    zoom: 15,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_2d305dbb321f4d5fab9951b66eaccc39 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            var circle_marker_06ac7343f87848c494c09fa1bef2f974 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_06ac7343f87848c494c09fa1bef2f974.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_576590c7dd9c4a8692e628f5906e8a74 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "red", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_576590c7dd9c4a8692e628f5906e8a74.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_304d17d9b036477689dee62040c88e14 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_304d17d9b036477689dee62040c88e14.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_25c95cc87fd64f909aaca8bc84fb4431 = L.circleMarker(
                [1.2875293, 103.8284641],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_25c95cc87fd64f909aaca8bc84fb4431.bindTooltip(
                `<div>
                     <b>Node</b>: 6<br><b>Address:</b> 32, Jln Bt Ho Swee, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_69692b65d79b40bf88e739d045c05a70 = L.circleMarker(
                [1.2841611, 103.8160563],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_69692b65d79b40bf88e739d045c05a70.bindTooltip(
                `<div>
                     <b>Node</b>: 2<br><b>Address:</b> 161, Bt Merah Ctrl, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_219f4b035e034d7bbfc3f0664b4312d6 = L.circleMarker(
                [1.2859148, 103.8030157],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_219f4b035e034d7bbfc3f0664b4312d6.bindTooltip(
                `<div>
                     <b>Node</b>: 11<br><b>Address:</b> 125, Bt Merah Lane 1, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_f7cb7532b5f44a3f98f2982a0c7e0c6c = L.circleMarker(
                [1.2861242, 103.8048268],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_f7cb7532b5f44a3f98f2982a0c7e0c6c.bindTooltip(
                `<div>
                     <b>Node</b>: 10<br><b>Address:</b> 119, Bt Merah Lane 1, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_86bb8d7cc00d4746be416040e9e63bbf = L.circleMarker(
                [1.2864623, 103.8098075],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_86bb8d7cc00d4746be416040e9e63bbf.bindTooltip(
                `<div>
                     <b>Node</b>: 3<br><b>Address:</b> 28, Hoy Fatt Rd, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_4a71b53e1fa54d34a9e02b2ed8874927 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "red", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_4a71b53e1fa54d34a9e02b2ed8874927.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var poly_line_336954756f5e450cb34ba86280be2155 = L.polyline(
                [[1.288261, 103.8283736], [1.2875293, 103.8284641], [1.2841611, 103.8160563], [1.2859148, 103.8030157], [1.2861242, 103.8048268], [1.2864623, 103.8098075], [1.288261, 103.8283736]],
                {"bubblingMouseEvents": true, "color": "blue", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "blue", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            poly_line_336954756f5e450cb34ba86280be2155.bindTooltip(
                `<div>
                     <b>Person ID</b>: 1<br><b>Distance Travelled</b>: 7929m<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_9686c65ac76844d5a91b8bc9272fd1d7 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_9686c65ac76844d5a91b8bc9272fd1d7.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_f55441a90af24826a85566cb8d2c1b1c = L.circleMarker(
                [1.2803001, 103.8263877],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_f55441a90af24826a85566cb8d2c1b1c.bindTooltip(
                `<div>
                     <b>Node</b>: 1<br><b>Address:</b> 111, Jln Bt Merah, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_06dfd1035c3a43689f0cfa730612a187 = L.circleMarker(
                [1.270435, 103.8232283],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_06dfd1035c3a43689f0cfa730612a187.bindTooltip(
                `<div>
                     <b>Node</b>: 7<br><b>Address:</b> 43, Telok Blangah Rise, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_2e02557fa41540789329de1475607d4b = L.circleMarker(
                [1.2724325, 103.8209836],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_2e02557fa41540789329de1475607d4b.bindTooltip(
                `<div>
                     <b>Node</b>: 9<br><b>Address:</b> 31, Telok Blangah Rise, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_af65a8d61f94453abaab21930d34d0cf = L.circleMarker(
                [1.2784398, 103.8194072],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_af65a8d61f94453abaab21930d34d0cf.bindTooltip(
                `<div>
                     <b>Node</b>: 14<br><b>Address:</b> 7, Telok Blangah Cres, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_2f33ebe834b345e09a85737e0616f549 = L.circleMarker(
                [1.2784398, 103.8194072],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_2f33ebe834b345e09a85737e0616f549.bindTooltip(
                `<div>
                     <b>Node</b>: 15<br><b>Address:</b> 7, Telok Blangah Cres, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_0d9224db834b49079da498d0a8b939c7 = L.circleMarker(
                [1.2879695, 103.8281924],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_0d9224db834b49079da498d0a8b939c7.bindTooltip(
                `<div>
                     <b>Node</b>: 4<br><b>Address:</b> 28, Jln Klinik, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_5cd905d49f614b71a809040ca1f75061 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "red", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_5cd905d49f614b71a809040ca1f75061.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var poly_line_4fe0fecc50c444c581ee0fdf48653c55 = L.polyline(
                [[1.288261, 103.8283736], [1.2803001, 103.8263877], [1.270435, 103.8232283], [1.2724325, 103.8209836], [1.2784398, 103.8194072], [1.2784398, 103.8194072], [1.2879695, 103.8281924], [1.288261, 103.8283736]],
                {"bubblingMouseEvents": true, "color": "green", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "green", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            poly_line_4fe0fecc50c444c581ee0fdf48653c55.bindTooltip(
                `<div>
                     <b>Person ID</b>: 2<br><b>Distance Travelled</b>: 7271m<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_bb7a5f6984134266a61ceee1b1d7e950 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_bb7a5f6984134266a61ceee1b1d7e950.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_4a8d4ac57e68450286de497aab701231 = L.circleMarker(
                [1.2869202, 103.8328117],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_4a8d4ac57e68450286de497aab701231.bindTooltip(
                `<div>
                     <b>Node</b>: 8<br><b>Address:</b> 2C, Boon Tiong Rd, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_2d1e7fcf52ea4c0895f655890a817d5b = L.circleMarker(
                [1.287945, 103.8187603],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_2d1e7fcf52ea4c0895f655890a817d5b.bindTooltip(
                `<div>
                     <b>Node</b>: 13<br><b>Address:</b> 80, Redhill Lane, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_677523a073a641a496252ab5c67a9ef1 = L.circleMarker(
                [1.287945, 103.8187603],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_677523a073a641a496252ab5c67a9ef1.bindTooltip(
                `<div>
                     <b>Node</b>: 12<br><b>Address:</b> 80, Redhill Lane, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_2663523c5fbe4ed19710647e3adc73d8 = L.circleMarker(
                [1.286411, 103.8098657],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_2663523c5fbe4ed19710647e3adc73d8.bindTooltip(
                `<div>
                     <b>Node</b>: 5<br><b>Address:</b> 28, Jln Bt Merah, Singapore<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_086a5895d090458ebd9e7acbf6b25703 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "red", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_086a5895d090458ebd9e7acbf6b25703.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var poly_line_f1918756935e4c1391eb0c9cde5b8485 = L.polyline(
                [[1.288261, 103.8283736], [1.2869202, 103.8328117], [1.287945, 103.8187603], [1.287945, 103.8187603], [1.286411, 103.8098657], [1.288261, 103.8283736]],
                {"bubblingMouseEvents": true, "color": "purple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "purple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            poly_line_f1918756935e4c1391eb0c9cde5b8485.bindTooltip(
                `<div>
                     <b>Person ID</b>: 3<br><b>Distance Travelled</b>: 7486m<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_f31fa2195e1343f39bff4edf00e27430 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "cadetblue", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "cadetblue", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_f31fa2195e1343f39bff4edf00e27430.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
    
            var circle_marker_91da1b95bad04038a641a4eb308d56a1 = L.circleMarker(
                [1.288261, 103.8283736],
                {"bubblingMouseEvents": true, "color": "red", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "red", "fillOpacity": 0.7, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3}
            ).addTo(map_89d9655134c54491a09772239bcfbbc0);
        
    
            circle_marker_91da1b95bad04038a641a4eb308d56a1.bindTooltip(
                `<div>
                     <b>Node</b>: 0<br><b>Address:</b> 26, Jalan Klinik, Singapore 160026<br>
                 </div>`,
                {"sticky": true}
            );
        
</script>


In this case, as the max distance is greater than 7000, the program instead suggests having less volunteers but each doing a significant amount of work. This can be better tuned by adding in waiting time constraints, which I hope to add into the module. 

If no solution is found, the program will print:

```shell
>>> No solution found :( Try adjusting parameters
```

This project was also coded in a way which allows users to input their own origin and destination locations; the `visualization.py` and `main.py` scripts can run independently of the `data_import.py` script, so long as the users input data in a similar format. I referenced the [Google OR Tools VRP Guide](https://developers.google.com/optimization/routing/vrp) a lot and give the awesome guide full credit for the optimization side of things!

In the future, I would like to build this into a proper web app that can handle more constraints and am excited to further work with OR tools :-)

**If anyone is interested in how to build a similar module, the links to my code can be found [here](https://github.com/jolene-lim/personal_projects/tree/master/google-OR)**
