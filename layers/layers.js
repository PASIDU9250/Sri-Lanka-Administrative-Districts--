ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.106678, 5.614424, 85.356178, 9.969771]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIGraydark_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SriLankaDistrict_3 = new ol.format.GeoJSON();
var features_SriLankaDistrict_3 = format_SriLankaDistrict_3.readFeatures(json_SriLankaDistrict_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SriLankaDistrict_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaDistrict_3.addFeatures(features_SriLankaDistrict_3);
var lyr_SriLankaDistrict_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaDistrict_3, 
                style: style_SriLankaDistrict_3,
                popuplayertitle: "Sri Lanka District",
                interactive: true,
    title: 'Sri Lanka District<br />\
    <img src="styles/legend/SriLankaDistrict_3_0.png" /> Ampara<br />\
    <img src="styles/legend/SriLankaDistrict_3_1.png" /> Anuradhapura<br />\
    <img src="styles/legend/SriLankaDistrict_3_2.png" /> Badulla<br />\
    <img src="styles/legend/SriLankaDistrict_3_3.png" /> Batticaloa<br />\
    <img src="styles/legend/SriLankaDistrict_3_4.png" /> Colombo<br />\
    <img src="styles/legend/SriLankaDistrict_3_5.png" /> Galle<br />\
    <img src="styles/legend/SriLankaDistrict_3_6.png" /> Gampaha<br />\
    <img src="styles/legend/SriLankaDistrict_3_7.png" /> Hambantota<br />\
    <img src="styles/legend/SriLankaDistrict_3_8.png" /> Jaffna<br />\
    <img src="styles/legend/SriLankaDistrict_3_9.png" /> Kalutara<br />\
    <img src="styles/legend/SriLankaDistrict_3_10.png" /> Kandy<br />\
    <img src="styles/legend/SriLankaDistrict_3_11.png" /> Kegalle<br />\
    <img src="styles/legend/SriLankaDistrict_3_12.png" /> Kilinochchi<br />\
    <img src="styles/legend/SriLankaDistrict_3_13.png" /> Kurunegala<br />\
    <img src="styles/legend/SriLankaDistrict_3_14.png" /> Mannar<br />\
    <img src="styles/legend/SriLankaDistrict_3_15.png" /> Matale<br />\
    <img src="styles/legend/SriLankaDistrict_3_16.png" /> Matara<br />\
    <img src="styles/legend/SriLankaDistrict_3_17.png" /> Moneragala<br />\
    <img src="styles/legend/SriLankaDistrict_3_18.png" /> Mullaitivu<br />\
    <img src="styles/legend/SriLankaDistrict_3_19.png" /> Nuwara Eliya<br />\
    <img src="styles/legend/SriLankaDistrict_3_20.png" /> Polonnaruwa<br />\
    <img src="styles/legend/SriLankaDistrict_3_21.png" /> Puttalam<br />\
    <img src="styles/legend/SriLankaDistrict_3_22.png" /> Ratnapura<br />\
    <img src="styles/legend/SriLankaDistrict_3_23.png" /> Trincomalee<br />\
    <img src="styles/legend/SriLankaDistrict_3_24.png" /> Vavuniya<br />\
    <img src="styles/legend/SriLankaDistrict_3_25.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRIGraydark_2.setVisible(true);lyr_SriLankaDistrict_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_ESRIGraydark_2,lyr_SriLankaDistrict_3];
lyr_SriLankaDistrict_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'Area': 'Area', });
lyr_SriLankaDistrict_3.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'Area': 'TextEdit', });
lyr_SriLankaDistrict_3.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'GND_N': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'Area': 'hidden field', });
lyr_SriLankaDistrict_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});