var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_asi_0211_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "asi_0211",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/asi_0211_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4901536.328991, 2882874.692641, 7049406.147230, 4832911.604877]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_asi_0211_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_asi_0211_1];
