
////////////////////////////
// 
function addSHPtoMap(shpFile, map, color, opacity){
    fetch(shpFile).then(text => text.arrayBuffer()).then((myshape) => shp(myshape)).then((data)    => {
        L.geoJSON(data.features, {
            onEachFeature: function(feature, layer){},
            style:{
                fillOpacity: opacity,
                weight:      0,
                //color:     color,
                fillColor:   color,
            }
        }).addTo(map);
    });
}

////////////////////////////
//
function addLegendToMap(map, positionLegend, categories, colors){
    var legend = L.control({position: positionLegend});
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
        labels = ['Categories']
        for (var i = 0; i < categories.length; i++) {
            div.innerHTML += labels.push('<i class="circle" style="background:' + colors[i] + '"></i> ' +(categories[i] ? categories[i] : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
    };
    legend.addTo(map);
}

////////////////////////////
// Creates the map
let defaultLat = 40.543700
let defaultLon = -4.011880
// Sets the imagery
var Spain_PNOA_Ortoimagen = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
    layers: 'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>',
    maxZoom: 22,
});
// Adds the map
var map = L.map('map', {
    layers: [Spain_PNOA_Ortoimagen] // Solo añade una capa inicialmente
}).setView([defaultLat, defaultLon], 20);
// Read a SHP file (on a ZIP) and extract the geometry. Then add that polygon to the map
addSHPtoMap("../../assets/projects/soco22/shp/rec_sculpture.zip", map, '#3274A3', 0.4)
addSHPtoMap("../../assets/projects/soco22/shp/rec_building.zip",  map, '#6B6B6B', 0.4)
addSHPtoMap("../../assets/projects/soco22/shp/rec_car.zip",       map, '#982E40', 0.4)
addSHPtoMap("../../assets/projects/soco22/shp/og_sculpture.zip",  map, '#2A81CB', 0.4)
addSHPtoMap("../../assets/projects/soco22/shp/og_building.zip",   map, '#3D3D3D', 0.4)
addSHPtoMap("../../assets/projects/soco22/shp/og_car.zip",        map, '#CB2B3E', 0.4)
// Add the legend to the map
categories = ['Original sculpture', 'Original building', 'Original car', 'Reconstructed sculpture', 'Reconstructed building', 'Reconstructed car'];
colors     = ['#2A81CB',            '#3D3D3D',           '#CB2B3E',      '#3274A3',                 '#6B6B6B',                '#982E40'          ];
addLegendToMap(map, 'bottomleft', categories, colors)