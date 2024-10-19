ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5234").setExtent([138742.738314, 111978.746816, 185105.238443, 137768.926099]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NeluwaPradeshiyaSabhaBoundary_4 = new ol.format.GeoJSON();
var features_NeluwaPradeshiyaSabhaBoundary_4 = format_NeluwaPradeshiyaSabhaBoundary_4.readFeatures(json_NeluwaPradeshiyaSabhaBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_NeluwaPradeshiyaSabhaBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeluwaPradeshiyaSabhaBoundary_4.addFeatures(features_NeluwaPradeshiyaSabhaBoundary_4);
var lyr_NeluwaPradeshiyaSabhaBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeluwaPradeshiyaSabhaBoundary_4, 
                style: style_NeluwaPradeshiyaSabhaBoundary_4,
                popuplayertitle: "Neluwa Pradeshiya Sabha Boundary",
                interactive: true,
    title: 'Neluwa Pradeshiya Sabha Boundary<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_0.png" /> Batuwangala<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_1.png" /> Batuwangala West<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_2.png" /> Danawala<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_3.png" /> Dellawa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_4.png" /> Dewalegama East<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_5.png" /> Dewalegama West<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_6.png" /> Ebalagedara North<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_7.png" /> Ehelapitiya<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_8.png" /> Embalegedara South<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_9.png" /> Happitiya<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_10.png" /> Ihala Gigummaduwa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_11.png" /> Ihala Lelwala<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_12.png" /> Ihala Maddegama<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_13.png" /> Ihala Millawa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_14.png" /> Kosmulla<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_15.png" /> Koswatta<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_16.png" /> Lankagama<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_17.png" /> Lelwala<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_18.png" /> Maddegama East<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_19.png" /> Madugeta<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_20.png" /> Mavita East<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_21.png" /> Mavita West<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_22.png" /> Mawanana<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_23.png" /> Medagama<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_24.png" /> Millawa West<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_25.png" /> Miyanawathura<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_26.png" /> Neluwa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_27.png" /> Pahala Gigummaduwa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_28.png" /> Pahala Maddegama<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_29.png" /> Pahala Millawa<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_30.png" /> Panagoda<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_31.png" /> Pannimulla<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_32.png" /> Thambalagama<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_33.png" /> Warukandeniya<br />\
    <img src="styles/legend/NeluwaPradeshiyaSabhaBoundary_4_34.png" /> <br />'
        });
var format_Boundary_5 = new ol.format.GeoJSON();
var features_Boundary_5 = format_Boundary_5.readFeatures(json_Boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_5.addFeatures(features_Boundary_5);
var lyr_Boundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_5, 
                style: style_Boundary_5,
                popuplayertitle: "Boundary",
                interactive: false,
                title: '<img src="styles/legend/Boundary_5.png" /> Boundary'
            });
var format_RoadsNeluwa_6 = new ol.format.GeoJSON();
var features_RoadsNeluwa_6 = format_RoadsNeluwa_6.readFeatures(json_RoadsNeluwa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_RoadsNeluwa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsNeluwa_6.addFeatures(features_RoadsNeluwa_6);
var lyr_RoadsNeluwa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsNeluwa_6, 
                style: style_RoadsNeluwa_6,
                popuplayertitle: "Roads(Neluwa)",
                interactive: false,
                title: '<img src="styles/legend/RoadsNeluwa_6.png" /> Roads(Neluwa)'
            });
var format_Streams_7 = new ol.format.GeoJSON();
var features_Streams_7 = format_Streams_7.readFeatures(json_Streams_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Streams_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_7.addFeatures(features_Streams_7);
var lyr_Streams_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_7, 
                style: style_Streams_7,
                popuplayertitle: "Streams",
                interactive: false,
                title: '<img src="styles/legend/Streams_7.png" /> Streams'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_NeluwaPradeshiyaSabhaBoundary_4.setVisible(true);lyr_Boundary_5.setVisible(true);lyr_RoadsNeluwa_6.setVisible(true);lyr_Streams_7.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_ESRIGraylight_1,lyr_GoogleSatelliteHybrid_2,lyr_OSMStandard_3,lyr_NeluwaPradeshiyaSabhaBoundary_4,lyr_Boundary_5,lyr_RoadsNeluwa_6,lyr_Streams_7];
lyr_NeluwaPradeshiyaSabhaBoundary_4.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', 'Tea_Cult': 'Tea_Cult', });
lyr_Boundary_5.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', 'Tea_Cult': 'Tea_Cult', });
lyr_RoadsNeluwa_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Streams_7.set('fieldAliases', {'FID_': 'FID_', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STNET_': 'STNET_', 'STNET_ID': 'STNET_ID', 'ST_NET2_': 'ST_NET2_', 'ST_NET2_ID': 'ST_NET2_ID', 'CODE': 'CODE', 'NAME': 'NAME', });
lyr_NeluwaPradeshiyaSabhaBoundary_4.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', 'Tea_Cult': 'TextEdit', });
lyr_Boundary_5.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', 'Tea_Cult': 'TextEdit', });
lyr_RoadsNeluwa_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_Streams_7.set('fieldImages', {'FID_': 'Range', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'STNET_': 'TextEdit', 'STNET_ID': 'TextEdit', 'ST_NET2_': 'TextEdit', 'ST_NET2_ID': 'TextEdit', 'CODE': 'Range', 'NAME': 'TextEdit', });
lyr_NeluwaPradeshiyaSabhaBoundary_4.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'inline label - visible with data', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'inline label - visible with data', 'GND_C': 'hidden field', 'PROVINCE_C': 'inline label - always visible', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'inline label - always visible', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'inline label - visible with data', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'inline label - visible with data', 'HINDU': 'inline label - visible with data', 'ISLAM': 'inline label - visible with data', 'ROMANCATHO': 'inline label - visible with data', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'inline label - visible with data', 'SRILANKATA': 'inline label - visible with data', 'INDIANTAMI': 'inline label - visible with data', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'inline label - visible with data', 'Tea_Cult': 'hidden field', });
lyr_Boundary_5.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'RANK_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', 'Tea_Cult': 'no label', });
lyr_RoadsNeluwa_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Streams_7.set('fieldLabels', {'FID_': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STNET_': 'no label', 'STNET_ID': 'no label', 'ST_NET2_': 'no label', 'ST_NET2_ID': 'no label', 'CODE': 'no label', 'NAME': 'no label', });
lyr_Streams_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});