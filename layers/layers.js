var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KDMCBoundry_1 = new ol.format.GeoJSON();
var features_KDMCBoundry_1 = format_KDMCBoundry_1.readFeatures(json_KDMCBoundry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCBoundry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCBoundry_1.addFeatures(features_KDMCBoundry_1);
var lyr_KDMCBoundry_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCBoundry_1, 
                style: style_KDMCBoundry_1,
                popuplayertitle: "KDMC Boundry",
                interactive: true,
                title: '<img src="styles/legend/KDMCBoundry_1.png" /> KDMC Boundry'
            });
var format_Ambernath_2 = new ol.format.GeoJSON();
var features_Ambernath_2 = format_Ambernath_2.readFeatures(json_Ambernath_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambernath_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ambernath_2.addFeatures(features_Ambernath_2);
var lyr_Ambernath_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ambernath_2, 
                style: style_Ambernath_2,
                popuplayertitle: "Ambernath",
                interactive: true,
                title: '<img src="styles/legend/Ambernath_2.png" /> Ambernath'
            });
var format_BadlapurBoundary_3 = new ol.format.GeoJSON();
var features_BadlapurBoundary_3 = format_BadlapurBoundary_3.readFeatures(json_BadlapurBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadlapurBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadlapurBoundary_3.addFeatures(features_BadlapurBoundary_3);
var lyr_BadlapurBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BadlapurBoundary_3, 
                style: style_BadlapurBoundary_3,
                popuplayertitle: "Badlapur Boundary",
                interactive: true,
                title: '<img src="styles/legend/BadlapurBoundary_3.png" /> Badlapur Boundary'
            });
var format_BhiwandiBoundary_4 = new ol.format.GeoJSON();
var features_BhiwandiBoundary_4 = format_BhiwandiBoundary_4.readFeatures(json_BhiwandiBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiBoundary_4.addFeatures(features_BhiwandiBoundary_4);
var lyr_BhiwandiBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiBoundary_4, 
                style: style_BhiwandiBoundary_4,
                popuplayertitle: "Bhiwandi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiBoundary_4.png" /> Bhiwandi Boundary'
            });
var format_UlhasnagarBoundry_5 = new ol.format.GeoJSON();
var features_UlhasnagarBoundry_5 = format_UlhasnagarBoundry_5.readFeatures(json_UlhasnagarBoundry_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UlhasnagarBoundry_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlhasnagarBoundry_5.addFeatures(features_UlhasnagarBoundry_5);
var lyr_UlhasnagarBoundry_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UlhasnagarBoundry_5, 
                style: style_UlhasnagarBoundry_5,
                popuplayertitle: "Ulhasnagar Boundry",
                interactive: true,
                title: '<img src="styles/legend/UlhasnagarBoundry_5.png" /> Ulhasnagar Boundry'
            });
var format_TemplesMgrd_6 = new ol.format.GeoJSON();
var features_TemplesMgrd_6 = format_TemplesMgrd_6.readFeatures(json_TemplesMgrd_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemplesMgrd_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemplesMgrd_6.addFeatures(features_TemplesMgrd_6);
var lyr_TemplesMgrd_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TemplesMgrd_6, 
                style: style_TemplesMgrd_6,
                popuplayertitle: "Temples Mgrd",
                interactive: true,
                title: '<img src="styles/legend/TemplesMgrd_6.png" /> Temples Mgrd'
            });
var format_PublicBuildings_7 = new ol.format.GeoJSON();
var features_PublicBuildings_7 = format_PublicBuildings_7.readFeatures(json_PublicBuildings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_7.addFeatures(features_PublicBuildings_7);
var lyr_PublicBuildings_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_7, 
                style: style_PublicBuildings_7,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_7.png" /> Public Buildings'
            });
var format_Mall_8 = new ol.format.GeoJSON();
var features_Mall_8 = format_Mall_8.readFeatures(json_Mall_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_8.addFeatures(features_Mall_8);
var lyr_Mall_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mall_8, 
                style: style_Mall_8,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_8.png" /> Mall'
            });
var format_PrivateOffice_9 = new ol.format.GeoJSON();
var features_PrivateOffice_9 = format_PrivateOffice_9.readFeatures(json_PrivateOffice_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffice_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffice_9.addFeatures(features_PrivateOffice_9);
var lyr_PrivateOffice_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffice_9, 
                style: style_PrivateOffice_9,
                popuplayertitle: "Private Office",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffice_9.png" /> Private Office'
            });
var format_office_government_10 = new ol.format.GeoJSON();
var features_office_government_10 = format_office_government_10.readFeatures(json_office_government_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_office_government_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_office_government_10.addFeatures(features_office_government_10);
var lyr_office_government_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_office_government_10, 
                style: style_office_government_10,
                popuplayertitle: "office_government",
                interactive: true,
                title: '<img src="styles/legend/office_government_10.png" /> office_government'
            });
var format_Medical_11 = new ol.format.GeoJSON();
var features_Medical_11 = format_Medical_11.readFeatures(json_Medical_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medical_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medical_11.addFeatures(features_Medical_11);
var lyr_Medical_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medical_11, 
                style: style_Medical_11,
                popuplayertitle: "Medical",
                interactive: true,
                title: '<img src="styles/legend/Medical_11.png" /> Medical'
            });
var format_Industrial_12 = new ol.format.GeoJSON();
var features_Industrial_12 = format_Industrial_12.readFeatures(json_Industrial_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_12.addFeatures(features_Industrial_12);
var lyr_Industrial_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industrial_12, 
                style: style_Industrial_12,
                popuplayertitle: "Industrial",
                interactive: true,
                title: '<img src="styles/legend/Industrial_12.png" /> Industrial'
            });
var format_Education_13 = new ol.format.GeoJSON();
var features_Education_13 = format_Education_13.readFeatures(json_Education_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_13.addFeatures(features_Education_13);
var lyr_Education_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_13, 
                style: style_Education_13,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_13.png" /> Education'
            });
var format_BhiwandiPop_14 = new ol.format.GeoJSON();
var features_BhiwandiPop_14 = format_BhiwandiPop_14.readFeatures(json_BhiwandiPop_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiPop_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiPop_14.addFeatures(features_BhiwandiPop_14);
var lyr_BhiwandiPop_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiPop_14, 
                style: style_BhiwandiPop_14,
                popuplayertitle: "Bhiwandi Pop",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiPop_14.png" /> Bhiwandi Pop'
            });
var format_BhiwandiDemographics_15 = new ol.format.GeoJSON();
var features_BhiwandiDemographics_15 = format_BhiwandiDemographics_15.readFeatures(json_BhiwandiDemographics_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiDemographics_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiDemographics_15.addFeatures(features_BhiwandiDemographics_15);
var lyr_BhiwandiDemographics_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiDemographics_15, 
                style: style_BhiwandiDemographics_15,
                popuplayertitle: "Bhiwandi Demographics",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiDemographics_15.png" /> Bhiwandi Demographics'
            });
var format_APSCStopPop_16 = new ol.format.GeoJSON();
var features_APSCStopPop_16 = format_APSCStopPop_16.readFeatures(json_APSCStopPop_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCStopPop_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCStopPop_16.addFeatures(features_APSCStopPop_16);
var lyr_APSCStopPop_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCStopPop_16, 
                style: style_APSCStopPop_16,
                popuplayertitle: "APSC Stop Pop",
                interactive: true,
    title: 'APSC Stop Pop<br />\
    <img src="styles/legend/APSCStopPop_16_0.png" /> 10 min<br />'
        });
var format_APSCRtPop1000Mtrs_17 = new ol.format.GeoJSON();
var features_APSCRtPop1000Mtrs_17 = format_APSCRtPop1000Mtrs_17.readFeatures(json_APSCRtPop1000Mtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop1000Mtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop1000Mtrs_17.addFeatures(features_APSCRtPop1000Mtrs_17);
var lyr_APSCRtPop1000Mtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop1000Mtrs_17, 
                style: style_APSCRtPop1000Mtrs_17,
                popuplayertitle: "APSC Rt Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop1000Mtrs_17.png" /> APSC Rt Pop 1000 Mtrs'
            });
var format_APSCRtPop500Mtrs_18 = new ol.format.GeoJSON();
var features_APSCRtPop500Mtrs_18 = format_APSCRtPop500Mtrs_18.readFeatures(json_APSCRtPop500Mtrs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop500Mtrs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop500Mtrs_18.addFeatures(features_APSCRtPop500Mtrs_18);
var lyr_APSCRtPop500Mtrs_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop500Mtrs_18, 
                style: style_APSCRtPop500Mtrs_18,
                popuplayertitle: "APSC Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop500Mtrs_18.png" /> APSC Rt Pop 500 Mtrs'
            });
var format_APSCRtPop250Mtrs_19 = new ol.format.GeoJSON();
var features_APSCRtPop250Mtrs_19 = format_APSCRtPop250Mtrs_19.readFeatures(json_APSCRtPop250Mtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop250Mtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop250Mtrs_19.addFeatures(features_APSCRtPop250Mtrs_19);
var lyr_APSCRtPop250Mtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop250Mtrs_19, 
                style: style_APSCRtPop250Mtrs_19,
                popuplayertitle: "APSC Rt Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop250Mtrs_19.png" /> APSC Rt Pop 250 Mtrs'
            });
var format_APSCRtPop100Mtrs_20 = new ol.format.GeoJSON();
var features_APSCRtPop100Mtrs_20 = format_APSCRtPop100Mtrs_20.readFeatures(json_APSCRtPop100Mtrs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop100Mtrs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop100Mtrs_20.addFeatures(features_APSCRtPop100Mtrs_20);
var lyr_APSCRtPop100Mtrs_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop100Mtrs_20, 
                style: style_APSCRtPop100Mtrs_20,
                popuplayertitle: "APSC Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop100Mtrs_20.png" /> APSC Rt Pop 100 Mtrs'
            });
var format_APSCTerminals_21 = new ol.format.GeoJSON();
var features_APSCTerminals_21 = format_APSCTerminals_21.readFeatures(json_APSCTerminals_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCTerminals_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCTerminals_21.addFeatures(features_APSCTerminals_21);
var lyr_APSCTerminals_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCTerminals_21, 
                style: style_APSCTerminals_21,
                popuplayertitle: "APSC Terminals",
                interactive: true,
    title: 'APSC Terminals<br />\
    <img src="styles/legend/APSCTerminals_21_0.png" /> Anjur Phata<br />\
    <img src="styles/legend/APSCTerminals_21_1.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/APSCTerminals_21_2.png" /> <br />'
        });
var format_APSCRWI_22 = new ol.format.GeoJSON();
var features_APSCRWI_22 = format_APSCRWI_22.readFeatures(json_APSCRWI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRWI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRWI_22.addFeatures(features_APSCRWI_22);
var lyr_APSCRWI_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRWI_22, 
                style: style_APSCRWI_22,
                popuplayertitle: "APSC RWI",
                interactive: true,
    title: 'APSC RWI<br />\
    <img src="styles/legend/APSCRWI_22_0.png" /> 0.583 - 0.647<br />\
    <img src="styles/legend/APSCRWI_22_1.png" /> 0.647 - 0.71<br />\
    <img src="styles/legend/APSCRWI_22_2.png" /> 0.71 - 0.774<br />\
    <img src="styles/legend/APSCRWI_22_3.png" /> 0.774 - 0.81<br />\
    <img src="styles/legend/APSCRWI_22_4.png" /> 0.81 - 0.846<br />\
    <img src="styles/legend/APSCRWI_22_5.png" /> 0.846 - 0.882<br />\
    <img src="styles/legend/APSCRWI_22_6.png" /> 0.882 - 0.899<br />\
    <img src="styles/legend/APSCRWI_22_7.png" /> 0.899 - 0.917<br />\
    <img src="styles/legend/APSCRWI_22_8.png" /> 0.917 - 0.934<br />\
    <img src="styles/legend/APSCRWI_22_9.png" /> 0.934 - 0.947<br />\
    <img src="styles/legend/APSCRWI_22_10.png" /> 0.947 - 0.959<br />\
    <img src="styles/legend/APSCRWI_22_11.png" /> 0.959 - 0.972<br />\
    <img src="styles/legend/APSCRWI_22_12.png" /> 0.972 - 1.004<br />\
    <img src="styles/legend/APSCRWI_22_13.png" /> 1.004 - 1.036<br />\
    <img src="styles/legend/APSCRWI_22_14.png" /> 1.036 - 1.068<br />'
        });
var format_StopsAnjurPhatatoShivajiChowkBhiwandi_23 = new ol.format.GeoJSON();
var features_StopsAnjurPhatatoShivajiChowkBhiwandi_23 = format_StopsAnjurPhatatoShivajiChowkBhiwandi_23.readFeatures(json_StopsAnjurPhatatoShivajiChowkBhiwandi_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsAnjurPhatatoShivajiChowkBhiwandi_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsAnjurPhatatoShivajiChowkBhiwandi_23.addFeatures(features_StopsAnjurPhatatoShivajiChowkBhiwandi_23);
var lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsAnjurPhatatoShivajiChowkBhiwandi_23, 
                style: style_StopsAnjurPhatatoShivajiChowkBhiwandi_23,
                popuplayertitle: "Stops Anjur Phata to Shivaji Chowk Bhiwandi",
                interactive: true,
                title: 'Stops Anjur Phata to Shivaji Chowk Bhiwandi'
            });
var format_APSCRouteMtrs_24 = new ol.format.GeoJSON();
var features_APSCRouteMtrs_24 = format_APSCRouteMtrs_24.readFeatures(json_APSCRouteMtrs_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRouteMtrs_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRouteMtrs_24.addFeatures(features_APSCRouteMtrs_24);
var lyr_APSCRouteMtrs_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRouteMtrs_24, 
                style: style_APSCRouteMtrs_24,
                popuplayertitle: "APSC Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRouteMtrs_24.png" /> APSC Route Mtrs'
            });
var format_APSCStops_25 = new ol.format.GeoJSON();
var features_APSCStops_25 = format_APSCStops_25.readFeatures(json_APSCStops_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCStops_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCStops_25.addFeatures(features_APSCStops_25);
var lyr_APSCStops_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCStops_25, 
                style: style_APSCStops_25,
                popuplayertitle: "APSC Stops",
                interactive: true,
    title: 'APSC Stops<br />\
    <img src="styles/legend/APSCStops_25_0.png" /> 0<br />\
    <img src="styles/legend/APSCStops_25_1.png" /> 1<br />\
    <img src="styles/legend/APSCStops_25_2.png" /> 2<br />\
    <img src="styles/legend/APSCStops_25_3.png" /> 3<br />\
    <img src="styles/legend/APSCStops_25_4.png" /> 4<br />\
    <img src="styles/legend/APSCStops_25_5.png" /> 5<br />\
    <img src="styles/legend/APSCStops_25_6.png" /> 6<br />\
    <img src="styles/legend/APSCStops_25_7.png" /> 7<br />\
    <img src="styles/legend/APSCStops_25_8.png" /> 8<br />\
    <img src="styles/legend/APSCStops_25_9.png" /> 9<br />\
    <img src="styles/legend/APSCStops_25_10.png" /> 10<br />\
    <img src="styles/legend/APSCStops_25_11.png" /> 11<br />\
    <img src="styles/legend/APSCStops_25_12.png" /> 12<br />\
    <img src="styles/legend/APSCStops_25_13.png" /> 13<br />\
    <img src="styles/legend/APSCStops_25_14.png" /> 14<br />\
    <img src="styles/legend/APSCStops_25_15.png" /> 15<br />\
    <img src="styles/legend/APSCStops_25_16.png" /> 16<br />\
    <img src="styles/legend/APSCStops_25_17.png" /> 17<br />\
    <img src="styles/legend/APSCStops_25_18.png" /> 18<br />\
    <img src="styles/legend/APSCStops_25_19.png" /> 19<br />\
    <img src="styles/legend/APSCStops_25_20.png" /> 20<br />\
    <img src="styles/legend/APSCStops_25_21.png" /> 21<br />\
    <img src="styles/legend/APSCStops_25_22.png" /> 22<br />\
    <img src="styles/legend/APSCStops_25_23.png" /> <br />'
        });
var format_RouteAnjurPhataRingRoad_26 = new ol.format.GeoJSON();
var features_RouteAnjurPhataRingRoad_26 = format_RouteAnjurPhataRingRoad_26.readFeatures(json_RouteAnjurPhataRingRoad_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteAnjurPhataRingRoad_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteAnjurPhataRingRoad_26.addFeatures(features_RouteAnjurPhataRingRoad_26);
var lyr_RouteAnjurPhataRingRoad_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteAnjurPhataRingRoad_26, 
                style: style_RouteAnjurPhataRingRoad_26,
                popuplayertitle: "Route Anjur Phata Ring Road",
                interactive: true,
                title: '<img src="styles/legend/RouteAnjurPhataRingRoad_26.png" /> Route Anjur Phata Ring Road'
            });
var format_RtAjurPhataRingRoadStats_27 = new ol.format.GeoJSON();
var features_RtAjurPhataRingRoadStats_27 = format_RtAjurPhataRingRoadStats_27.readFeatures(json_RtAjurPhataRingRoadStats_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtAjurPhataRingRoadStats_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtAjurPhataRingRoadStats_27.addFeatures(features_RtAjurPhataRingRoadStats_27);
var lyr_RtAjurPhataRingRoadStats_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtAjurPhataRingRoadStats_27, 
                style: style_RtAjurPhataRingRoadStats_27,
                popuplayertitle: "Rt Ajur Phata Ring Road Stats",
                interactive: true,
                title: '<img src="styles/legend/RtAjurPhataRingRoadStats_27.png" /> Rt Ajur Phata Ring Road Stats'
            });
var format_StopsAnjurPhataRingRoad_28 = new ol.format.GeoJSON();
var features_StopsAnjurPhataRingRoad_28 = format_StopsAnjurPhataRingRoad_28.readFeatures(json_StopsAnjurPhataRingRoad_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsAnjurPhataRingRoad_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsAnjurPhataRingRoad_28.addFeatures(features_StopsAnjurPhataRingRoad_28);
var lyr_StopsAnjurPhataRingRoad_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsAnjurPhataRingRoad_28, 
                style: style_StopsAnjurPhataRingRoad_28,
                popuplayertitle: "Stops Anjur Phata Ring Road",
                interactive: true,
    title: 'Stops Anjur Phata Ring Road<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_0.png" /> Anjur Phata<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_1.png" /> Bhiwandi Railway Stn<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_2.png" /> Dhamankar Naka<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_3.png" /> Directions from Anjur Phata to Anjur Phata<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_4.png" /> Kalyan Bypass<br />\
    <img src="styles/legend/StopsAnjurPhataRingRoad_28_5.png" /> <br />'
        });
var format_RtAnjurphatatoYewaichkstats_29 = new ol.format.GeoJSON();
var features_RtAnjurphatatoYewaichkstats_29 = format_RtAnjurphatatoYewaichkstats_29.readFeatures(json_RtAnjurphatatoYewaichkstats_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtAnjurphatatoYewaichkstats_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtAnjurphatatoYewaichkstats_29.addFeatures(features_RtAnjurphatatoYewaichkstats_29);
var lyr_RtAnjurphatatoYewaichkstats_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtAnjurphatatoYewaichkstats_29, 
                style: style_RtAnjurphatatoYewaichkstats_29,
                popuplayertitle: "Rt Anjur phata to Yewai chk stats",
                interactive: true,
                title: '<img src="styles/legend/RtAnjurphatatoYewaichkstats_29.png" /> Rt Anjur phata to Yewai chk stats'
            });
var format_RtAnjurPhatatoGovanastats_30 = new ol.format.GeoJSON();
var features_RtAnjurPhatatoGovanastats_30 = format_RtAnjurPhatatoGovanastats_30.readFeatures(json_RtAnjurPhatatoGovanastats_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtAnjurPhatatoGovanastats_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtAnjurPhatatoGovanastats_30.addFeatures(features_RtAnjurPhatatoGovanastats_30);
var lyr_RtAnjurPhatatoGovanastats_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtAnjurPhatatoGovanastats_30, 
                style: style_RtAnjurPhatatoGovanastats_30,
                popuplayertitle: "Rt Anjur Phata to Govana stats",
                interactive: true,
                title: '<img src="styles/legend/RtAnjurPhatatoGovanastats_30.png" /> Rt Anjur Phata to Govana stats'
            });
var format_RtShivajiChowktoKasheliStats_31 = new ol.format.GeoJSON();
var features_RtShivajiChowktoKasheliStats_31 = format_RtShivajiChowktoKasheliStats_31.readFeatures(json_RtShivajiChowktoKasheliStats_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajiChowktoKasheliStats_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajiChowktoKasheliStats_31.addFeatures(features_RtShivajiChowktoKasheliStats_31);
var lyr_RtShivajiChowktoKasheliStats_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajiChowktoKasheliStats_31, 
                style: style_RtShivajiChowktoKasheliStats_31,
                popuplayertitle: "Rt Shivaji Chowk to Kasheli Stats",
                interactive: true,
                title: '<img src="styles/legend/RtShivajiChowktoKasheliStats_31.png" /> Rt Shivaji Chowk to Kasheli Stats'
            });
var format_BhiwandiIntracityRoutesmerged_32 = new ol.format.GeoJSON();
var features_BhiwandiIntracityRoutesmerged_32 = format_BhiwandiIntracityRoutesmerged_32.readFeatures(json_BhiwandiIntracityRoutesmerged_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiIntracityRoutesmerged_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiIntracityRoutesmerged_32.addFeatures(features_BhiwandiIntracityRoutesmerged_32);
var lyr_BhiwandiIntracityRoutesmerged_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiIntracityRoutesmerged_32, 
                style: style_BhiwandiIntracityRoutesmerged_32,
                popuplayertitle: "Bhiwandi Intracity Routes merged",
                interactive: true,
    title: 'Bhiwandi Intracity Routes merged<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_0.png" /> APSC Route Mtrs<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_1.png" /> Rt Ajur Phata Ring Road Stats<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_2.png" /> Rt Anjur Phata to Govana stats<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_3.png" /> Rt Anjur phata to Yewai chk stats<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_4.png" /> Rt Shivaji Chowk to Kasheli Stats<br />\
    <img src="styles/legend/BhiwandiIntracityRoutesmerged_32_5.png" /> <br />'
        });
var format_BhiwandiTerminalsIntracity_33 = new ol.format.GeoJSON();
var features_BhiwandiTerminalsIntracity_33 = format_BhiwandiTerminalsIntracity_33.readFeatures(json_BhiwandiTerminalsIntracity_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiTerminalsIntracity_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiTerminalsIntracity_33.addFeatures(features_BhiwandiTerminalsIntracity_33);
var lyr_BhiwandiTerminalsIntracity_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiTerminalsIntracity_33, 
                style: style_BhiwandiTerminalsIntracity_33,
                popuplayertitle: "Bhiwandi Terminals Intracity",
                interactive: true,
    title: 'Bhiwandi Terminals Intracity<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_0.png" /> 19.240183128764233, 73.04149930842456<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_1.png" /> Anjur Phata<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_2.png" /> Bhadwad Saskiya<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_3.png" /> Govana<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_4.png" /> Kasheli<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_5.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_6.png" /> Yewai Chowk<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_33_7.png" /> <br />'
        });
var format_SCVREducation_34 = new ol.format.GeoJSON();
var features_SCVREducation_34 = format_SCVREducation_34.readFeatures(json_SCVREducation_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVREducation_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVREducation_34.addFeatures(features_SCVREducation_34);
var lyr_SCVREducation_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVREducation_34, 
                style: style_SCVREducation_34,
                popuplayertitle: "SCVR Education",
                interactive: true,
                title: '<img src="styles/legend/SCVREducation_34.png" /> SCVR Education'
            });
var format_SCVRTemples_35 = new ol.format.GeoJSON();
var features_SCVRTemples_35 = format_SCVRTemples_35.readFeatures(json_SCVRTemples_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRTemples_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRTemples_35.addFeatures(features_SCVRTemples_35);
var lyr_SCVRTemples_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRTemples_35, 
                style: style_SCVRTemples_35,
                popuplayertitle: "SCVR Temples",
                interactive: true,
                title: '<img src="styles/legend/SCVRTemples_35.png" /> SCVR Temples'
            });
var format_SCVRPSU_36 = new ol.format.GeoJSON();
var features_SCVRPSU_36 = format_SCVRPSU_36.readFeatures(json_SCVRPSU_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRPSU_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRPSU_36.addFeatures(features_SCVRPSU_36);
var lyr_SCVRPSU_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRPSU_36, 
                style: style_SCVRPSU_36,
                popuplayertitle: "SCVR PSU",
                interactive: true,
                title: '<img src="styles/legend/SCVRPSU_36.png" /> SCVR PSU'
            });
var format_SCVRIndustries_37 = new ol.format.GeoJSON();
var features_SCVRIndustries_37 = format_SCVRIndustries_37.readFeatures(json_SCVRIndustries_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRIndustries_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRIndustries_37.addFeatures(features_SCVRIndustries_37);
var lyr_SCVRIndustries_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRIndustries_37, 
                style: style_SCVRIndustries_37,
                popuplayertitle: "SCVR Industries",
                interactive: true,
                title: '<img src="styles/legend/SCVRIndustries_37.png" /> SCVR Industries'
            });
var format_SCVROffices_38 = new ol.format.GeoJSON();
var features_SCVROffices_38 = format_SCVROffices_38.readFeatures(json_SCVROffices_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVROffices_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVROffices_38.addFeatures(features_SCVROffices_38);
var lyr_SCVROffices_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVROffices_38, 
                style: style_SCVROffices_38,
                popuplayertitle: "SCVR Offices",
                interactive: true,
                title: '<img src="styles/legend/SCVROffices_38.png" /> SCVR Offices'
            });
var format_SCVRHospitals_39 = new ol.format.GeoJSON();
var features_SCVRHospitals_39 = format_SCVRHospitals_39.readFeatures(json_SCVRHospitals_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRHospitals_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRHospitals_39.addFeatures(features_SCVRHospitals_39);
var lyr_SCVRHospitals_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRHospitals_39, 
                style: style_SCVRHospitals_39,
                popuplayertitle: "SCVR Hospitals",
                interactive: true,
                title: '<img src="styles/legend/SCVRHospitals_39.png" /> SCVR Hospitals'
            });
var format_SCVRStopPopulation_40 = new ol.format.GeoJSON();
var features_SCVRStopPopulation_40 = format_SCVRStopPopulation_40.readFeatures(json_SCVRStopPopulation_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRStopPopulation_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRStopPopulation_40.addFeatures(features_SCVRStopPopulation_40);
var lyr_SCVRStopPopulation_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRStopPopulation_40, 
                style: style_SCVRStopPopulation_40,
                popuplayertitle: "SCVR Stop Population",
                interactive: true,
    title: 'SCVR Stop Population<br />\
    <img src="styles/legend/SCVRStopPopulation_40_0.png" /> 10 min<br />'
        });
var format_SCVRRoutePop1000Mtrs_41 = new ol.format.GeoJSON();
var features_SCVRRoutePop1000Mtrs_41 = format_SCVRRoutePop1000Mtrs_41.readFeatures(json_SCVRRoutePop1000Mtrs_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRoutePop1000Mtrs_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRoutePop1000Mtrs_41.addFeatures(features_SCVRRoutePop1000Mtrs_41);
var lyr_SCVRRoutePop1000Mtrs_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRoutePop1000Mtrs_41, 
                style: style_SCVRRoutePop1000Mtrs_41,
                popuplayertitle: "SCVR Route Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRoutePop1000Mtrs_41.png" /> SCVR Route Pop 1000 Mtrs'
            });
var format_SCVRRtPop500Mtrs_42 = new ol.format.GeoJSON();
var features_SCVRRtPop500Mtrs_42 = format_SCVRRtPop500Mtrs_42.readFeatures(json_SCVRRtPop500Mtrs_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop500Mtrs_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop500Mtrs_42.addFeatures(features_SCVRRtPop500Mtrs_42);
var lyr_SCVRRtPop500Mtrs_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop500Mtrs_42, 
                style: style_SCVRRtPop500Mtrs_42,
                popuplayertitle: "SCVR Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop500Mtrs_42.png" /> SCVR Rt Pop 500 Mtrs'
            });
var format_SCVRRtPop250mtrs_43 = new ol.format.GeoJSON();
var features_SCVRRtPop250mtrs_43 = format_SCVRRtPop250mtrs_43.readFeatures(json_SCVRRtPop250mtrs_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop250mtrs_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop250mtrs_43.addFeatures(features_SCVRRtPop250mtrs_43);
var lyr_SCVRRtPop250mtrs_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop250mtrs_43, 
                style: style_SCVRRtPop250mtrs_43,
                popuplayertitle: "SCVR Rt Pop 250 mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop250mtrs_43.png" /> SCVR Rt Pop 250 mtrs'
            });
var format_SCVRRtPop100Mtrs_44 = new ol.format.GeoJSON();
var features_SCVRRtPop100Mtrs_44 = format_SCVRRtPop100Mtrs_44.readFeatures(json_SCVRRtPop100Mtrs_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop100Mtrs_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop100Mtrs_44.addFeatures(features_SCVRRtPop100Mtrs_44);
var lyr_SCVRRtPop100Mtrs_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop100Mtrs_44, 
                style: style_SCVRRtPop100Mtrs_44,
                popuplayertitle: "SCVR Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop100Mtrs_44.png" /> SCVR Rt Pop 100 Mtrs'
            });
var format_RouteAnjurPhatatoVashiRailwaystationRoute_45 = new ol.format.GeoJSON();
var features_RouteAnjurPhatatoVashiRailwaystationRoute_45 = format_RouteAnjurPhatatoVashiRailwaystationRoute_45.readFeatures(json_RouteAnjurPhatatoVashiRailwaystationRoute_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteAnjurPhatatoVashiRailwaystationRoute_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteAnjurPhatatoVashiRailwaystationRoute_45.addFeatures(features_RouteAnjurPhatatoVashiRailwaystationRoute_45);
var lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteAnjurPhatatoVashiRailwaystationRoute_45, 
                style: style_RouteAnjurPhatatoVashiRailwaystationRoute_45,
                popuplayertitle: "Route Anjur Phata to Vashi Railway station Route",
                interactive: true,
                title: 'Route Anjur Phata to Vashi Railway station Route'
            });
var format_RtShivajiChowktoVirar_46 = new ol.format.GeoJSON();
var features_RtShivajiChowktoVirar_46 = format_RtShivajiChowktoVirar_46.readFeatures(json_RtShivajiChowktoVirar_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajiChowktoVirar_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajiChowktoVirar_46.addFeatures(features_RtShivajiChowktoVirar_46);
var lyr_RtShivajiChowktoVirar_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajiChowktoVirar_46, 
                style: style_RtShivajiChowktoVirar_46,
                popuplayertitle: "Rt Shivaji Chowk to Virar",
                interactive: true,
                title: '<img src="styles/legend/RtShivajiChowktoVirar_46.png" /> Rt Shivaji Chowk to Virar'
            });
var format_RtSCVRRouteMtrs_47 = new ol.format.GeoJSON();
var features_RtSCVRRouteMtrs_47 = format_RtSCVRRouteMtrs_47.readFeatures(json_RtSCVRRouteMtrs_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtSCVRRouteMtrs_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtSCVRRouteMtrs_47.addFeatures(features_RtSCVRRouteMtrs_47);
var lyr_RtSCVRRouteMtrs_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtSCVRRouteMtrs_47, 
                style: style_RtSCVRRouteMtrs_47,
                popuplayertitle: "Rt SCVR Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/RtSCVRRouteMtrs_47.png" /> Rt SCVR Route Mtrs'
            });
var format_SCVRRWI_48 = new ol.format.GeoJSON();
var features_SCVRRWI_48 = format_SCVRRWI_48.readFeatures(json_SCVRRWI_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRWI_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRWI_48.addFeatures(features_SCVRRWI_48);
var lyr_SCVRRWI_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRWI_48, 
                style: style_SCVRRWI_48,
                popuplayertitle: "SCVR RWI",
                interactive: true,
    title: 'SCVR RWI<br />\
    <img src="styles/legend/SCVRRWI_48_0.png" /> 0.365 - 0.4162<br />\
    <img src="styles/legend/SCVRRWI_48_1.png" /> 0.4162 - 0.5202<br />\
    <img src="styles/legend/SCVRRWI_48_2.png" /> 0.5202 - 0.5902<br />\
    <img src="styles/legend/SCVRRWI_48_3.png" /> 0.5902 - 0.634<br />\
    <img src="styles/legend/SCVRRWI_48_4.png" /> 0.634 - 0.754<br />\
    <img src="styles/legend/SCVRRWI_48_5.png" /> 0.754 - 0.7916<br />\
    <img src="styles/legend/SCVRRWI_48_6.png" /> 0.7916 - 0.8286<br />\
    <img src="styles/legend/SCVRRWI_48_7.png" /> 0.8286 - 0.8502<br />\
    <img src="styles/legend/SCVRRWI_48_8.png" /> 0.8502 - 0.8618<br />\
    <img src="styles/legend/SCVRRWI_48_9.png" /> 0.8618 - 0.889<br />\
    <img src="styles/legend/SCVRRWI_48_10.png" /> 0.889 - 0.8986<br />\
    <img src="styles/legend/SCVRRWI_48_11.png" /> 0.8986 - 0.9148<br />\
    <img src="styles/legend/SCVRRWI_48_12.png" /> 0.9148 - 0.9884<br />\
    <img src="styles/legend/SCVRRWI_48_13.png" /> 0.9884 - 1.1038<br />\
    <img src="styles/legend/SCVRRWI_48_14.png" /> 1.1038 - 1.179<br />'
        });
var format_SCVRStops_49 = new ol.format.GeoJSON();
var features_SCVRStops_49 = format_SCVRStops_49.readFeatures(json_SCVRStops_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRStops_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRStops_49.addFeatures(features_SCVRStops_49);
var lyr_SCVRStops_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRStops_49, 
                style: style_SCVRStops_49,
                popuplayertitle: "SCVR Stops",
                interactive: true,
    title: 'SCVR Stops<br />\
    <img src="styles/legend/SCVRStops_49_0.png" /> 0<br />\
    <img src="styles/legend/SCVRStops_49_1.png" /> 1<br />\
    <img src="styles/legend/SCVRStops_49_2.png" /> 2<br />\
    <img src="styles/legend/SCVRStops_49_3.png" /> 3<br />\
    <img src="styles/legend/SCVRStops_49_4.png" /> 4<br />\
    <img src="styles/legend/SCVRStops_49_5.png" /> 5<br />\
    <img src="styles/legend/SCVRStops_49_6.png" /> 6<br />\
    <img src="styles/legend/SCVRStops_49_7.png" /> 7<br />\
    <img src="styles/legend/SCVRStops_49_8.png" /> 8<br />\
    <img src="styles/legend/SCVRStops_49_9.png" /> 9<br />\
    <img src="styles/legend/SCVRStops_49_10.png" /> 10<br />\
    <img src="styles/legend/SCVRStops_49_11.png" /> 11<br />\
    <img src="styles/legend/SCVRStops_49_12.png" /> 12<br />\
    <img src="styles/legend/SCVRStops_49_13.png" /> 13<br />\
    <img src="styles/legend/SCVRStops_49_14.png" /> 14<br />\
    <img src="styles/legend/SCVRStops_49_15.png" /> 15<br />\
    <img src="styles/legend/SCVRStops_49_16.png" /> 16<br />\
    <img src="styles/legend/SCVRStops_49_17.png" /> 17<br />\
    <img src="styles/legend/SCVRStops_49_18.png" /> 18<br />\
    <img src="styles/legend/SCVRStops_49_19.png" /> 19<br />\
    <img src="styles/legend/SCVRStops_49_20.png" /> 20<br />\
    <img src="styles/legend/SCVRStops_49_21.png" /> 21<br />\
    <img src="styles/legend/SCVRStops_49_22.png" /> 22<br />\
    <img src="styles/legend/SCVRStops_49_23.png" /> 23<br />\
    <img src="styles/legend/SCVRStops_49_24.png" /> 24<br />\
    <img src="styles/legend/SCVRStops_49_25.png" /> 25<br />\
    <img src="styles/legend/SCVRStops_49_26.png" /> 26<br />\
    <img src="styles/legend/SCVRStops_49_27.png" /> 27<br />\
    <img src="styles/legend/SCVRStops_49_28.png" /> 28<br />\
    <img src="styles/legend/SCVRStops_49_29.png" /> 29<br />\
    <img src="styles/legend/SCVRStops_49_30.png" /> 30<br />\
    <img src="styles/legend/SCVRStops_49_31.png" /> 31<br />\
    <img src="styles/legend/SCVRStops_49_32.png" /> 32<br />\
    <img src="styles/legend/SCVRStops_49_33.png" /> 33<br />\
    <img src="styles/legend/SCVRStops_49_34.png" /> 34<br />\
    <img src="styles/legend/SCVRStops_49_35.png" /> 35<br />\
    <img src="styles/legend/SCVRStops_49_36.png" /> 36<br />\
    <img src="styles/legend/SCVRStops_49_37.png" /> 37<br />\
    <img src="styles/legend/SCVRStops_49_38.png" /> 38<br />\
    <img src="styles/legend/SCVRStops_49_39.png" /> 39<br />\
    <img src="styles/legend/SCVRStops_49_40.png" /> 40<br />\
    <img src="styles/legend/SCVRStops_49_41.png" /> 41<br />\
    <img src="styles/legend/SCVRStops_49_42.png" /> 42<br />\
    <img src="styles/legend/SCVRStops_49_43.png" /> 43<br />\
    <img src="styles/legend/SCVRStops_49_44.png" /> 44<br />\
    <img src="styles/legend/SCVRStops_49_45.png" /> 45<br />\
    <img src="styles/legend/SCVRStops_49_46.png" /> 46<br />\
    <img src="styles/legend/SCVRStops_49_47.png" /> 47<br />\
    <img src="styles/legend/SCVRStops_49_48.png" /> 48<br />\
    <img src="styles/legend/SCVRStops_49_49.png" /> 49<br />\
    <img src="styles/legend/SCVRStops_49_50.png" /> 50<br />\
    <img src="styles/legend/SCVRStops_49_51.png" /> 51<br />\
    <img src="styles/legend/SCVRStops_49_52.png" /> <br />'
        });
var format_SCVRTerminals_50 = new ol.format.GeoJSON();
var features_SCVRTerminals_50 = format_SCVRTerminals_50.readFeatures(json_SCVRTerminals_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRTerminals_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRTerminals_50.addFeatures(features_SCVRTerminals_50);
var lyr_SCVRTerminals_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRTerminals_50, 
                style: style_SCVRTerminals_50,
                popuplayertitle: "SCVR Terminals",
                interactive: true,
    title: 'SCVR Terminals<br />\
    <img src="styles/legend/SCVRTerminals_50_0.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/SCVRTerminals_50_1.png" /> Vasai Station<br />\
    <img src="styles/legend/SCVRTerminals_50_2.png" /> <br />'
        });
var format_RtAnjurPhatatoVashistats_51 = new ol.format.GeoJSON();
var features_RtAnjurPhatatoVashistats_51 = format_RtAnjurPhatatoVashistats_51.readFeatures(json_RtAnjurPhatatoVashistats_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtAnjurPhatatoVashistats_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtAnjurPhatatoVashistats_51.addFeatures(features_RtAnjurPhatatoVashistats_51);
var lyr_RtAnjurPhatatoVashistats_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtAnjurPhatatoVashistats_51, 
                style: style_RtAnjurPhatatoVashistats_51,
                popuplayertitle: "Rt Anjur Phata to Vashi stats",
                interactive: true,
                title: '<img src="styles/legend/RtAnjurPhatatoVashistats_51.png" /> Rt Anjur Phata to Vashi stats'
            });
var format_StopsAnjurPhatatoVashiRailwaystation_52 = new ol.format.GeoJSON();
var features_StopsAnjurPhatatoVashiRailwaystation_52 = format_StopsAnjurPhatatoVashiRailwaystation_52.readFeatures(json_StopsAnjurPhatatoVashiRailwaystation_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsAnjurPhatatoVashiRailwaystation_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsAnjurPhatatoVashiRailwaystation_52.addFeatures(features_StopsAnjurPhatatoVashiRailwaystation_52);
var lyr_StopsAnjurPhatatoVashiRailwaystation_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsAnjurPhatatoVashiRailwaystation_52, 
                style: style_StopsAnjurPhatatoVashiRailwaystation_52,
                popuplayertitle: "Stops Anjur Phata to Vashi Railway station",
                interactive: true,
    title: 'Stops Anjur Phata to Vashi Railway station<br />\
    <img src="styles/legend/StopsAnjurPhatatoVashiRailwaystation_52_0.png" /> Anjur Phata<br />\
    <img src="styles/legend/StopsAnjurPhatatoVashiRailwaystation_52_1.png" /> Directions from Anjur Phata to Vashi Railway station<br />\
    <img src="styles/legend/StopsAnjurPhatatoVashiRailwaystation_52_2.png" /> Vashi Railway station<br />\
    <img src="styles/legend/StopsAnjurPhatatoVashiRailwaystation_52_3.png" /> <br />'
        });
var format_RouteShivajiChowkBhiwanditoDivastation_53 = new ol.format.GeoJSON();
var features_RouteShivajiChowkBhiwanditoDivastation_53 = format_RouteShivajiChowkBhiwanditoDivastation_53.readFeatures(json_RouteShivajiChowkBhiwanditoDivastation_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteShivajiChowkBhiwanditoDivastation_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteShivajiChowkBhiwanditoDivastation_53.addFeatures(features_RouteShivajiChowkBhiwanditoDivastation_53);
var lyr_RouteShivajiChowkBhiwanditoDivastation_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteShivajiChowkBhiwanditoDivastation_53, 
                style: style_RouteShivajiChowkBhiwanditoDivastation_53,
                popuplayertitle: "Route Shivaji Chowk Bhiwandi to Diva station",
                interactive: true,
                title: '<img src="styles/legend/RouteShivajiChowkBhiwanditoDivastation_53.png" /> Route Shivaji Chowk Bhiwandi to Diva station'
            });
var format_RtShivajichowktoDivaStats_54 = new ol.format.GeoJSON();
var features_RtShivajichowktoDivaStats_54 = format_RtShivajichowktoDivaStats_54.readFeatures(json_RtShivajichowktoDivaStats_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajichowktoDivaStats_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajichowktoDivaStats_54.addFeatures(features_RtShivajichowktoDivaStats_54);
var lyr_RtShivajichowktoDivaStats_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajichowktoDivaStats_54, 
                style: style_RtShivajichowktoDivaStats_54,
                popuplayertitle: "Rt Shivaji chowk to Diva Stats",
                interactive: true,
                title: '<img src="styles/legend/RtShivajichowktoDivaStats_54.png" /> Rt Shivaji chowk to Diva Stats'
            });
var format_StopsShivajiChowkBhiwanditoDivastationStops_55 = new ol.format.GeoJSON();
var features_StopsShivajiChowkBhiwanditoDivastationStops_55 = format_StopsShivajiChowkBhiwanditoDivastationStops_55.readFeatures(json_StopsShivajiChowkBhiwanditoDivastationStops_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsShivajiChowkBhiwanditoDivastationStops_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsShivajiChowkBhiwanditoDivastationStops_55.addFeatures(features_StopsShivajiChowkBhiwanditoDivastationStops_55);
var lyr_StopsShivajiChowkBhiwanditoDivastationStops_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsShivajiChowkBhiwanditoDivastationStops_55, 
                style: style_StopsShivajiChowkBhiwanditoDivastationStops_55,
                popuplayertitle: "Stops Shivaji Chowk Bhiwandi to Diva station Stops",
                interactive: true,
    title: 'Stops Shivaji Chowk Bhiwandi to Diva station Stops<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoDivastationStops_55_0.png" /> Directions from Shivaji Chowk Bhiwandi to Diva station<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoDivastationStops_55_1.png" /> Diva station<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoDivastationStops_55_2.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoDivastationStops_55_3.png" /> <br />'
        });
var format_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56 = new ol.format.GeoJSON();
var features_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56 = format_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.readFeatures(json_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.addFeatures(features_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56);
var lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56, 
                style: style_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56,
                popuplayertitle: "Route Shivaji Chowk Bhiwandi to Kalyan Railway Station",
                interactive: true,
                title: '<img src="styles/legend/RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.png" /> Route Shivaji Chowk Bhiwandi to Kalyan Railway Station'
            });
var format_RtShivajichowktoKalyanVieMankoliStats_57 = new ol.format.GeoJSON();
var features_RtShivajichowktoKalyanVieMankoliStats_57 = format_RtShivajichowktoKalyanVieMankoliStats_57.readFeatures(json_RtShivajichowktoKalyanVieMankoliStats_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajichowktoKalyanVieMankoliStats_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajichowktoKalyanVieMankoliStats_57.addFeatures(features_RtShivajichowktoKalyanVieMankoliStats_57);
var lyr_RtShivajichowktoKalyanVieMankoliStats_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajichowktoKalyanVieMankoliStats_57, 
                style: style_RtShivajichowktoKalyanVieMankoliStats_57,
                popuplayertitle: "Rt Shivaji chowk to Kalyan Vie Mankoli Stats",
                interactive: true,
                title: '<img src="styles/legend/RtShivajichowktoKalyanVieMankoliStats_57.png" /> Rt Shivaji chowk to Kalyan Vie Mankoli Stats'
            });
var format_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58 = new ol.format.GeoJSON();
var features_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58 = format_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.readFeatures(json_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.addFeatures(features_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58);
var lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58, 
                style: style_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58,
                popuplayertitle: "Stops Shivaji Chowk Bhiwandi to Kalyan Railway Station",
                interactive: true,
    title: 'Stops Shivaji Chowk Bhiwandi to Kalyan Railway Station<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoKalyanRailwayStation_58_0.png" /> Directions from Shivaji Chowk Bhiwandi to Kalyan Railway Station<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoKalyanRailwayStation_58_1.png" /> Kalyan Railway Station<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoKalyanRailwayStation_58_2.png" /> Mankoli<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoKalyanRailwayStation_58_3.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoKalyanRailwayStation_58_4.png" /> <br />'
        });
var format_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59 = new ol.format.GeoJSON();
var features_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59 = format_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.readFeatures(json_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.addFeatures(features_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59);
var lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59, 
                style: style_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59,
                popuplayertitle: "Route  Shivaji Chowk Bhiwandi to Majiwada Bus Stop",
                interactive: true,
                title: 'Route  Shivaji Chowk Bhiwandi to Majiwada Bus Stop'
            });
var format_RtShivajiChowktoMajiwadaRtStats_60 = new ol.format.GeoJSON();
var features_RtShivajiChowktoMajiwadaRtStats_60 = format_RtShivajiChowktoMajiwadaRtStats_60.readFeatures(json_RtShivajiChowktoMajiwadaRtStats_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajiChowktoMajiwadaRtStats_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajiChowktoMajiwadaRtStats_60.addFeatures(features_RtShivajiChowktoMajiwadaRtStats_60);
var lyr_RtShivajiChowktoMajiwadaRtStats_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajiChowktoMajiwadaRtStats_60, 
                style: style_RtShivajiChowktoMajiwadaRtStats_60,
                popuplayertitle: "Rt Shivaji Chowk to Majiwada Rt Stats",
                interactive: true,
                title: '<img src="styles/legend/RtShivajiChowktoMajiwadaRtStats_60.png" /> Rt Shivaji Chowk to Majiwada Rt Stats'
            });
var format_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61 = new ol.format.GeoJSON();
var features_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61 = format_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.readFeatures(json_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.addFeatures(features_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61);
var lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61, 
                style: style_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61,
                popuplayertitle: "Stops Shivaji Chowk Bhiwandi to Majiwada Bus Stop",
                interactive: true,
    title: 'Stops Shivaji Chowk Bhiwandi to Majiwada Bus Stop<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoMajiwadaBusStop_61_0.png" /> Directions from Shivaji Chowk Bhiwandi to Majiwada Bus Stop<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoMajiwadaBusStop_61_1.png" /> Majiwada Bus Stop<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoMajiwadaBusStop_61_2.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/StopsShivajiChowkBhiwanditoMajiwadaBusStop_61_3.png" /> <br />'
        });
var format_RtBhiwanditoMiraRoadStats_62 = new ol.format.GeoJSON();
var features_RtBhiwanditoMiraRoadStats_62 = format_RtBhiwanditoMiraRoadStats_62.readFeatures(json_RtBhiwanditoMiraRoadStats_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtBhiwanditoMiraRoadStats_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtBhiwanditoMiraRoadStats_62.addFeatures(features_RtBhiwanditoMiraRoadStats_62);
var lyr_RtBhiwanditoMiraRoadStats_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtBhiwanditoMiraRoadStats_62, 
                style: style_RtBhiwanditoMiraRoadStats_62,
                popuplayertitle: "Rt Bhiwandi to Mira Road Stats",
                interactive: true,
                title: '<img src="styles/legend/RtBhiwanditoMiraRoadStats_62.png" /> Rt Bhiwandi to Mira Road Stats'
            });
var format_RtShivajiChowktoPadhgastats_63 = new ol.format.GeoJSON();
var features_RtShivajiChowktoPadhgastats_63 = format_RtShivajiChowktoPadhgastats_63.readFeatures(json_RtShivajiChowktoPadhgastats_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajiChowktoPadhgastats_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajiChowktoPadhgastats_63.addFeatures(features_RtShivajiChowktoPadhgastats_63);
var lyr_RtShivajiChowktoPadhgastats_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajiChowktoPadhgastats_63, 
                style: style_RtShivajiChowktoPadhgastats_63,
                popuplayertitle: "Rt Shivaji Chowk to Padhga stats",
                interactive: true,
                title: '<img src="styles/legend/RtShivajiChowktoPadhgastats_63.png" /> Rt Shivaji Chowk to Padhga stats'
            });
var format_RtBhiwanditoThaneStnRoute1stats_64 = new ol.format.GeoJSON();
var features_RtBhiwanditoThaneStnRoute1stats_64 = format_RtBhiwanditoThaneStnRoute1stats_64.readFeatures(json_RtBhiwanditoThaneStnRoute1stats_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtBhiwanditoThaneStnRoute1stats_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtBhiwanditoThaneStnRoute1stats_64.addFeatures(features_RtBhiwanditoThaneStnRoute1stats_64);
var lyr_RtBhiwanditoThaneStnRoute1stats_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtBhiwanditoThaneStnRoute1stats_64, 
                style: style_RtBhiwanditoThaneStnRoute1stats_64,
                popuplayertitle: "Rt Bhiwandi to Thane Stn Route 1 stats",
                interactive: true,
                title: '<img src="styles/legend/RtBhiwanditoThaneStnRoute1stats_64.png" /> Rt Bhiwandi to Thane Stn Route 1 stats'
            });
var format_RtAnjarPhatatoKalyanStats_65 = new ol.format.GeoJSON();
var features_RtAnjarPhatatoKalyanStats_65 = format_RtAnjarPhatatoKalyanStats_65.readFeatures(json_RtAnjarPhatatoKalyanStats_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtAnjarPhatatoKalyanStats_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtAnjarPhatatoKalyanStats_65.addFeatures(features_RtAnjarPhatatoKalyanStats_65);
var lyr_RtAnjarPhatatoKalyanStats_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtAnjarPhatatoKalyanStats_65, 
                style: style_RtAnjarPhatatoKalyanStats_65,
                popuplayertitle: "Rt Anjar Phata to Kalyan Stats",
                interactive: true,
                title: '<img src="styles/legend/RtAnjarPhatatoKalyanStats_65.png" /> Rt Anjar Phata to Kalyan Stats'
            });
var format_BhiwandiIntercityRoutesMerged_66 = new ol.format.GeoJSON();
var features_BhiwandiIntercityRoutesMerged_66 = format_BhiwandiIntercityRoutesMerged_66.readFeatures(json_BhiwandiIntercityRoutesMerged_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiIntercityRoutesMerged_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiIntercityRoutesMerged_66.addFeatures(features_BhiwandiIntercityRoutesMerged_66);
var lyr_BhiwandiIntercityRoutesMerged_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiIntercityRoutesMerged_66, 
                style: style_BhiwandiIntercityRoutesMerged_66,
                popuplayertitle: "Bhiwandi Intercity Routes Merged",
                interactive: true,
    title: 'Bhiwandi Intercity Routes Merged<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_0.png" /> Rt Anjur Phata to Vashi stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_1.png" /> Rt Bhiwandi to Mira Road Stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_2.png" /> Rt SCVR Route Mtrs<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_3.png" /> Rt Shivaji chowk to Diva Stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_4.png" /> Rt Shivaji chowk to Kalyan Vie Mankoli Stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_5.png" /> Rt Shivaji Chowk to Majiwada Rt Stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_6.png" /> Rt Shivaji Chowk to Padhga stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_7.png" /> RtvAnjar Phata to Kalyan Stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_8.png" /> RtvBhiwandi to Thane Stn Route 1 stats<br />\
    <img src="styles/legend/BhiwandiIntercityRoutesMerged_66_9.png" /> <br />'
        });
var format_BhiwandiTerminalsIntercity_67 = new ol.format.GeoJSON();
var features_BhiwandiTerminalsIntercity_67 = format_BhiwandiTerminalsIntercity_67.readFeatures(json_BhiwandiTerminalsIntercity_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiTerminalsIntercity_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiTerminalsIntercity_67.addFeatures(features_BhiwandiTerminalsIntercity_67);
var lyr_BhiwandiTerminalsIntercity_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiTerminalsIntercity_67, 
                style: style_BhiwandiTerminalsIntercity_67,
                popuplayertitle: "Bhiwandi Terminals Intercity",
                interactive: true,
    title: 'Bhiwandi Terminals Intercity<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_0.png" /> Bhiwandi Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_1.png" /> Kalyan Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_2.png" /> Mira Road Station (E)<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_3.png" /> Mumbai Central S.T Depot<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_4.png" /> Padgha<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_5.png" /> Sanpada Depot/ Sanpada Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_6.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_7.png" /> Thane Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_8.png" /> Vasai Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_67_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_KDMCBoundry_1.setVisible(true);lyr_Ambernath_2.setVisible(true);lyr_BadlapurBoundary_3.setVisible(true);lyr_BhiwandiBoundary_4.setVisible(true);lyr_UlhasnagarBoundry_5.setVisible(true);lyr_TemplesMgrd_6.setVisible(true);lyr_PublicBuildings_7.setVisible(true);lyr_Mall_8.setVisible(true);lyr_PrivateOffice_9.setVisible(true);lyr_office_government_10.setVisible(true);lyr_Medical_11.setVisible(true);lyr_Industrial_12.setVisible(true);lyr_Education_13.setVisible(true);lyr_BhiwandiPop_14.setVisible(true);lyr_BhiwandiDemographics_15.setVisible(true);lyr_APSCStopPop_16.setVisible(true);lyr_APSCRtPop1000Mtrs_17.setVisible(true);lyr_APSCRtPop500Mtrs_18.setVisible(true);lyr_APSCRtPop250Mtrs_19.setVisible(true);lyr_APSCRtPop100Mtrs_20.setVisible(true);lyr_APSCTerminals_21.setVisible(true);lyr_APSCRWI_22.setVisible(true);lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23.setVisible(true);lyr_APSCRouteMtrs_24.setVisible(true);lyr_APSCStops_25.setVisible(true);lyr_RouteAnjurPhataRingRoad_26.setVisible(true);lyr_RtAjurPhataRingRoadStats_27.setVisible(true);lyr_StopsAnjurPhataRingRoad_28.setVisible(true);lyr_RtAnjurphatatoYewaichkstats_29.setVisible(true);lyr_RtAnjurPhatatoGovanastats_30.setVisible(true);lyr_RtShivajiChowktoKasheliStats_31.setVisible(true);lyr_BhiwandiIntracityRoutesmerged_32.setVisible(true);lyr_BhiwandiTerminalsIntracity_33.setVisible(true);lyr_SCVREducation_34.setVisible(true);lyr_SCVRTemples_35.setVisible(true);lyr_SCVRPSU_36.setVisible(true);lyr_SCVRIndustries_37.setVisible(true);lyr_SCVROffices_38.setVisible(true);lyr_SCVRHospitals_39.setVisible(true);lyr_SCVRStopPopulation_40.setVisible(true);lyr_SCVRRoutePop1000Mtrs_41.setVisible(true);lyr_SCVRRtPop500Mtrs_42.setVisible(true);lyr_SCVRRtPop250mtrs_43.setVisible(true);lyr_SCVRRtPop100Mtrs_44.setVisible(true);lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45.setVisible(true);lyr_RtShivajiChowktoVirar_46.setVisible(true);lyr_RtSCVRRouteMtrs_47.setVisible(true);lyr_SCVRRWI_48.setVisible(true);lyr_SCVRStops_49.setVisible(true);lyr_SCVRTerminals_50.setVisible(true);lyr_RtAnjurPhatatoVashistats_51.setVisible(true);lyr_StopsAnjurPhatatoVashiRailwaystation_52.setVisible(true);lyr_RouteShivajiChowkBhiwanditoDivastation_53.setVisible(true);lyr_RtShivajichowktoDivaStats_54.setVisible(true);lyr_StopsShivajiChowkBhiwanditoDivastationStops_55.setVisible(true);lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.setVisible(true);lyr_RtShivajichowktoKalyanVieMankoliStats_57.setVisible(true);lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.setVisible(true);lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.setVisible(true);lyr_RtShivajiChowktoMajiwadaRtStats_60.setVisible(true);lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.setVisible(true);lyr_RtBhiwanditoMiraRoadStats_62.setVisible(true);lyr_RtShivajiChowktoPadhgastats_63.setVisible(true);lyr_RtBhiwanditoThaneStnRoute1stats_64.setVisible(true);lyr_RtAnjarPhatatoKalyanStats_65.setVisible(true);lyr_BhiwandiIntercityRoutesMerged_66.setVisible(true);lyr_BhiwandiTerminalsIntercity_67.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KDMCBoundry_1,lyr_Ambernath_2,lyr_BadlapurBoundary_3,lyr_BhiwandiBoundary_4,lyr_UlhasnagarBoundry_5,lyr_TemplesMgrd_6,lyr_PublicBuildings_7,lyr_Mall_8,lyr_PrivateOffice_9,lyr_office_government_10,lyr_Medical_11,lyr_Industrial_12,lyr_Education_13,lyr_BhiwandiPop_14,lyr_BhiwandiDemographics_15,lyr_APSCStopPop_16,lyr_APSCRtPop1000Mtrs_17,lyr_APSCRtPop500Mtrs_18,lyr_APSCRtPop250Mtrs_19,lyr_APSCRtPop100Mtrs_20,lyr_APSCTerminals_21,lyr_APSCRWI_22,lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23,lyr_APSCRouteMtrs_24,lyr_APSCStops_25,lyr_RouteAnjurPhataRingRoad_26,lyr_RtAjurPhataRingRoadStats_27,lyr_StopsAnjurPhataRingRoad_28,lyr_RtAnjurphatatoYewaichkstats_29,lyr_RtAnjurPhatatoGovanastats_30,lyr_RtShivajiChowktoKasheliStats_31,lyr_BhiwandiIntracityRoutesmerged_32,lyr_BhiwandiTerminalsIntracity_33,lyr_SCVREducation_34,lyr_SCVRTemples_35,lyr_SCVRPSU_36,lyr_SCVRIndustries_37,lyr_SCVROffices_38,lyr_SCVRHospitals_39,lyr_SCVRStopPopulation_40,lyr_SCVRRoutePop1000Mtrs_41,lyr_SCVRRtPop500Mtrs_42,lyr_SCVRRtPop250mtrs_43,lyr_SCVRRtPop100Mtrs_44,lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45,lyr_RtShivajiChowktoVirar_46,lyr_RtSCVRRouteMtrs_47,lyr_SCVRRWI_48,lyr_SCVRStops_49,lyr_SCVRTerminals_50,lyr_RtAnjurPhatatoVashistats_51,lyr_StopsAnjurPhatatoVashiRailwaystation_52,lyr_RouteShivajiChowkBhiwanditoDivastation_53,lyr_RtShivajichowktoDivaStats_54,lyr_StopsShivajiChowkBhiwanditoDivastationStops_55,lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56,lyr_RtShivajichowktoKalyanVieMankoliStats_57,lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58,lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59,lyr_RtShivajiChowktoMajiwadaRtStats_60,lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61,lyr_RtBhiwanditoMiraRoadStats_62,lyr_RtShivajiChowktoPadhgastats_63,lyr_RtBhiwanditoThaneStnRoute1stats_64,lyr_RtAnjarPhatatoKalyanStats_65,lyr_BhiwandiIntercityRoutesMerged_66,lyr_BhiwandiTerminalsIntercity_67];
lyr_KDMCBoundry_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Ambernath_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BadlapurBoundary_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BhiwandiBoundary_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_UlhasnagarBoundry_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_TemplesMgrd_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'path': 'path', });
lyr_PublicBuildings_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator': 'operator', 'tower_type': 'tower_type', 'man_made': 'man_made', 'name_en': 'name_en', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'religion': 'religion', 'name': 'name', });
lyr_Mall_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'building': 'building', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name': 'name', });
lyr_PrivateOffice_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'tourism': 'tourism', 'name_hi': 'name_hi', 'operator': 'operator', 'name_mr': 'name_mr', 'internet_a': 'internet_a', 'name': 'name', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'barrier': 'barrier', 'access': 'access', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', });
lyr_office_government_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'name_mr': 'name_mr', 'name': 'name', 'government': 'government', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', });
lyr_Medical_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_etymo': 'name_etymo', 'health_fac': 'health_fac', 'descriptio': 'descriptio', 'addr_subdi': 'addr_subdi', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'operator': 'operator', 'phone': 'phone', 'website': 'website', 'operator_t': 'operator_t', 'email': 'email', 'contact_ph': 'contact_ph', 'dispensing': 'dispensing', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_en': 'name_en', 'emergency': 'emergency', 'addr_stree': 'addr_stree', 'name': 'name', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industrial_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr_house': 'addr_house', });
lyr_Education_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BhiwandiPop_14.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_BhiwandiDemographics_15.set('fieldAliases', {'shapeName': 'shapeName', 'Pop': 'Pop', 'Area SqKm': 'Area SqKm', 'PeriKM': 'PeriKM', });
lyr_APSCStopPop_16.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_APSCRtPop1000Mtrs_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop500Mtrs_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop250Mtrs_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop100Mtrs_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Tckt Price': 'Tckt Price', 'Revenue': 'Revenue', });
lyr_APSCTerminals_21.set('fieldAliases', {'Name': 'Name', });
lyr_APSCRWI_22.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_APSCRouteMtrs_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_APSCStops_25.set('fieldAliases', {'id': 'id', });
lyr_RouteAnjurPhataRingRoad_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtAjurPhataRingRoadStats_27.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_StopsAnjurPhataRingRoad_28.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtAnjurphatatoYewaichkstats_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_RtAnjurPhatatoGovanastats_30.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_RtShivajiChowktoKasheliStats_31.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_BhiwandiIntracityRoutesmerged_32.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', 'layer': 'layer', });
lyr_BhiwandiTerminalsIntracity_33.set('fieldAliases', {'Name': 'Name', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SCVREducation_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'name_etymo': 'name_etymo', 'capacity': 'capacity', 'preschool': 'preschool', 'barrier': 'barrier', 'access': 'access', 'descriptio': 'descriptio', 'website': 'website', 'email': 'email', 'operator': 'operator', 'internet_a': 'internet_a', 'opening_ho': 'opening_ho', 'phone': 'phone', 'wheelchair': 'wheelchair', 'operator_t': 'operator_t', 'designatio': 'designatio', 'addr_house': 'addr_house', 'name_en': 'name_en', 'wikidata': 'wikidata', 'timing': 'timing', 'religion': 'religion', 'grades': 'grades', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_hou_1': 'addr_hou_1', 'addr_city': 'addr_city', 'name': 'name', 'layer': 'layer', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'short_name': 'short_name', 'level': 'level', 'internet_1': 'internet_1', 'internet_2': 'internet_2', 'isced_leve': 'isced_leve', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'building_l': 'building_l', 'surface': 'surface', 'alt_name': 'alt_name', 'building': 'building', 'path': 'path', });
lyr_SCVRTemples_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'religion': 'religion', 'service_ti': 'service_ti', 'air_condit': 'air_condit', 'addr_distr': 'addr_distr', 'name_mr': 'name_mr', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'timing': 'timing', 'name': 'name', 'grades': 'grades', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_hi': 'name_hi', 'layer': 'layer', 'landuse': 'landuse', 'website': 'website', 'descriptio': 'descriptio', 'building_l': 'building_l', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'alt_name': 'alt_name', 'building': 'building', 'path': 'path', });
lyr_SCVRPSU_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_t': 'operator_t', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'addr_postc': 'addr_postc', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'office': 'office', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'landuse': 'landuse', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_SCVRIndustries_37.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building_m': 'building_m', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'industrial': 'industrial', 'abandoned': 'abandoned', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'building_l': 'building_l', 'website': 'website', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_SCVROffices_38.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'landuse': 'landuse', 'layer': 'layer', 'addr_city': 'addr_city', 'height': 'height', 'building_l': 'building_l', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'operator': 'operator', 'opening_ho': 'opening_ho', 'short_name': 'short_name', 'name': 'name', 'building': 'building', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'branch': 'branch', 'closing_ho': 'closing_ho', 'alt_name': 'alt_name', 'postal_cod': 'postal_cod', 'phone': 'phone', 'address': 'address', 'email': 'email', 'name_en': 'name_en', 'smoking': 'smoking', 'website': 'website', 'addr_postc': 'addr_postc', 'addr_hou_1': 'addr_hou_1', 'path': 'path', });
lyr_SCVRHospitals_39.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'amenity': 'amenity', 'drive_thro': 'drive_thro', 'dispensing': 'dispensing', 'descriptio': 'descriptio', 'name_mr': 'name_mr', 'emergency': 'emergency', 'phone_mobi': 'phone_mobi', 'alt_name': 'alt_name', 'operator': 'operator', 'addr_subdi': 'addr_subdi', 'email': 'email', 'operator_t': 'operator_t', 'wheelchair': 'wheelchair', 'phone': 'phone', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'name_en': 'name_en', 'website': 'website', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'name': 'name', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'building_f': 'building_f', 'building_l': 'building_l', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_SCVRStopPopulation_40.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_SCVRRoutePop1000Mtrs_41.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop500Mtrs_42.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop250mtrs_43.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop100Mtrs_44.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', 'Pax %': 'Pax %', 'Avg Tckt': 'Avg Tckt', 'Revenue': 'Revenue', });
lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtShivajiChowktoVirar_46.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtSCVRRouteMtrs_47.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_SCVRRWI_48.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRStops_49.set('fieldAliases', {'id': 'id', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SCVRTerminals_50.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtAnjurPhatatoVashistats_51.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_StopsAnjurPhatatoVashiRailwaystation_52.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RouteShivajiChowkBhiwanditoDivastation_53.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtShivajichowktoDivaStats_54.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_StopsShivajiChowkBhiwanditoDivastationStops_55.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtShivajichowktoKalyanVieMankoliStats_57.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtShivajiChowktoMajiwadaRtStats_60.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RtBhiwanditoMiraRoadStats_62.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_RtShivajiChowktoPadhgastats_63.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_RtBhiwanditoThaneStnRoute1stats_64.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_RtAnjarPhatatoKalyanStats_65.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'Bus Time': 'Bus Time', 'Buses': 'Buses', });
lyr_BhiwandiIntercityRoutesMerged_66.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'Bus Time': 'Bus Time', 'Buses': 'Buses', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'layer': 'layer', });
lyr_BhiwandiTerminalsIntercity_67.set('fieldAliases', {'Name': 'Name', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zcoord': 'zcoord', });
lyr_KDMCBoundry_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Ambernath_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BadlapurBoundary_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BhiwandiBoundary_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_UlhasnagarBoundry_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_TemplesMgrd_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'descript_1': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'path': 'TextEdit', });
lyr_PublicBuildings_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'tower_type': 'TextEdit', 'man_made': 'TextEdit', 'name_en': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', });
lyr_Mall_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'shop': 'TextEdit', 'building': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffice_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'tourism': 'TextEdit', 'name_hi': 'TextEdit', 'operator': 'TextEdit', 'name_mr': 'TextEdit', 'internet_a': 'TextEdit', 'name': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_office_government_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_Medical_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_etymo': 'TextEdit', 'health_fac': 'TextEdit', 'descriptio': 'TextEdit', 'addr_subdi': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'operator_t': 'TextEdit', 'email': 'TextEdit', 'contact_ph': 'TextEdit', 'dispensing': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'addr_stree': 'TextEdit', 'name': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industrial_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_Education_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BhiwandiPop_14.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', '_count': '', '_sum': '', '_mean': '', });
lyr_BhiwandiDemographics_15.set('fieldImages', {'shapeName': 'TextEdit', 'Pop': '', 'Area SqKm': '', 'PeriKM': '', });
lyr_APSCStopPop_16.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_APSCRtPop1000Mtrs_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop500Mtrs_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop250Mtrs_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop100Mtrs_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', 'Ridership': '', 'Tckt Price': '', 'Revenue': '', });
lyr_APSCTerminals_21.set('fieldImages', {'Name': 'TextEdit', });
lyr_APSCRWI_22.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'TextEdit', });
lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_APSCRouteMtrs_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'Bus Time': '', 'Buses': '', });
lyr_APSCStops_25.set('fieldImages', {'id': 'TextEdit', });
lyr_RouteAnjurPhataRingRoad_26.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RtAjurPhataRingRoadStats_27.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'Bus Time': '', 'Buses': '', });
lyr_StopsAnjurPhataRingRoad_28.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RtAnjurphatatoYewaichkstats_29.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'Bus Time': '', 'Buses': '', });
lyr_RtAnjurPhatatoGovanastats_30.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'Bus Time': '', 'Buses': '', });
lyr_RtShivajiChowktoKasheliStats_31.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'Bus Time': '', 'Buses': '', });
lyr_BhiwandiIntracityRoutesmerged_32.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'Bus Time': 'TextEdit', 'Buses': 'TextEdit', 'layer': 'TextEdit', });
lyr_BhiwandiTerminalsIntracity_33.set('fieldImages', {'Name': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_SCVREducation_34.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator_w': 'TextEdit', 'operator_s': 'TextEdit', 'name_etymo': 'TextEdit', 'capacity': 'TextEdit', 'preschool': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'descriptio': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'operator': 'TextEdit', 'internet_a': 'TextEdit', 'opening_ho': 'TextEdit', 'phone': 'TextEdit', 'wheelchair': 'TextEdit', 'operator_t': 'TextEdit', 'designatio': 'TextEdit', 'addr_house': 'TextEdit', 'name_en': 'TextEdit', 'wikidata': 'TextEdit', 'timing': 'TextEdit', 'religion': 'TextEdit', 'grades': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'short_name': 'TextEdit', 'level': 'TextEdit', 'internet_1': 'TextEdit', 'internet_2': 'TextEdit', 'isced_leve': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'building_l': 'TextEdit', 'surface': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRTemples_35.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'religion': 'TextEdit', 'service_ti': 'TextEdit', 'air_condit': 'TextEdit', 'addr_distr': 'TextEdit', 'name_mr': 'TextEdit', 'operator_w': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'timing': 'TextEdit', 'name': 'TextEdit', 'grades': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name_hi': 'TextEdit', 'layer': 'TextEdit', 'landuse': 'TextEdit', 'website': 'TextEdit', 'descriptio': 'TextEdit', 'building_l': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRPSU_36.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'operator_w': '', 'operator_1': '', 'operator_t': '', 'brand_wiki': '', 'brand_wi_1': '', 'brand': '', 'addr_postc': '', 'name_en': '', 'addr_stree': '', 'ref': '', 'operator': '', 'name': '', 'office': '', 'addr_house': '', 'addr_city': '', 'landuse': '', 'building': '', 'layer': '', 'path': '', });
lyr_SCVRIndustries_37.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'building_m': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'industrial': 'TextEdit', 'abandoned': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'building_l': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVROffices_38.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'addr_city': 'TextEdit', 'height': 'TextEdit', 'building_l': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'short_name': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'branch': 'TextEdit', 'closing_ho': 'TextEdit', 'alt_name': 'TextEdit', 'postal_cod': 'TextEdit', 'phone': 'TextEdit', 'address': 'TextEdit', 'email': 'TextEdit', 'name_en': 'TextEdit', 'smoking': 'TextEdit', 'website': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_hou_1': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRHospitals_39.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'amenity': 'TextEdit', 'drive_thro': 'TextEdit', 'dispensing': 'TextEdit', 'descriptio': 'TextEdit', 'name_mr': 'TextEdit', 'emergency': 'TextEdit', 'phone_mobi': 'TextEdit', 'alt_name': 'TextEdit', 'operator': 'TextEdit', 'addr_subdi': 'TextEdit', 'email': 'TextEdit', 'operator_t': 'TextEdit', 'wheelchair': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'name_en': 'TextEdit', 'website': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'name': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'building_f': 'TextEdit', 'building_l': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRStopPopulation_40.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_SCVRRoutePop1000Mtrs_41.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop500Mtrs_42.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop250mtrs_43.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop100Mtrs_44.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', 'Pax %': '', 'Avg Tckt': '', 'Revenue': '', });
lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RtShivajiChowktoVirar_46.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_RtSCVRRouteMtrs_47.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'Bus Time': '', 'Buses': '', });
lyr_SCVRRWI_48.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_SCVRStops_49.set('fieldImages', {'id': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_SCVRTerminals_50.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_RtAnjurPhatatoVashistats_51.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_StopsAnjurPhatatoVashiRailwaystation_52.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RouteShivajiChowkBhiwanditoDivastation_53.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RtShivajichowktoDivaStats_54.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Bus Time': '', 'Buses': '', });
lyr_StopsShivajiChowkBhiwanditoDivastationStops_55.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RtShivajichowktoKalyanVieMankoliStats_57.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RtShivajiChowktoMajiwadaRtStats_60.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RtBhiwanditoMiraRoadStats_62.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_RtShivajiChowktoPadhgastats_63.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_RtBhiwanditoThaneStnRoute1stats_64.set('fieldImages', {'DIST_KM': '', 'Bus Time': '', 'Buses': '', });
lyr_RtAnjarPhatatoKalyanStats_65.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'Bus Time': '', 'Buses': '', });
lyr_BhiwandiIntercityRoutesMerged_66.set('fieldImages', {'DIST_KM': 'TextEdit', 'Bus Time': 'TextEdit', 'Buses': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'layer': 'TextEdit', });
lyr_BhiwandiTerminalsIntercity_67.set('fieldImages', {'Name': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'zcoord': 'TextEdit', });
lyr_KDMCBoundry_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Ambernath_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BadlapurBoundary_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BhiwandiBoundary_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_UlhasnagarBoundry_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_TemplesMgrd_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descript_1': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', 'path': 'hidden field', });
lyr_PublicBuildings_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'tower_type': 'hidden field', 'man_made': 'hidden field', 'name_en': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'religion': 'hidden field', 'name': 'header label - visible with data', });
lyr_Mall_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'shop': 'hidden field', 'building': 'hidden field', 'addr_stree': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name': 'header label - visible with data', });
lyr_PrivateOffice_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'tourism': 'hidden field', 'name_hi': 'hidden field', 'operator': 'hidden field', 'name_mr': 'hidden field', 'internet_a': 'hidden field', 'name': 'header label - visible with data', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'addr_stree': 'hidden field', 'addr_house': 'hidden field', });
lyr_office_government_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'government': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', });
lyr_Medical_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_etymo': 'hidden field', 'health_fac': 'hidden field', 'descriptio': 'hidden field', 'addr_subdi': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'operator': 'hidden field', 'phone': 'hidden field', 'website': 'hidden field', 'operator_t': 'hidden field', 'email': 'hidden field', 'contact_ph': 'hidden field', 'dispensing': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'addr_stree': 'hidden field', 'name': 'header label - visible with data', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industrial_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'header label - visible with data', 'addr_house': 'inline label - visible with data', });
lyr_Education_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BhiwandiPop_14.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', '_count': 'hidden field', '_sum': 'inline label - visible with data', '_mean': 'hidden field', });
lyr_BhiwandiDemographics_15.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'PeriKM': 'inline label - visible with data', });
lyr_APSCStopPop_16.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_APSCRtPop1000Mtrs_17.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_APSCRtPop500Mtrs_18.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_APSCRtPop250Mtrs_19.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_APSCRtPop100Mtrs_20.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Ridership': 'header label - always visible', 'Tckt Price': 'inline label - visible with data', 'Revenue': 'header label - always visible', });
lyr_APSCTerminals_21.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_APSCRWI_22.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - always visible', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_StopsAnjurPhatatoShivajiChowkBhiwandi_23.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_APSCRouteMtrs_24.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', 'Buses': 'header label - visible with data', });
lyr_APSCStops_25.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_RouteAnjurPhataRingRoad_26.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RtAjurPhataRingRoadStats_27.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_StopsAnjurPhataRingRoad_28.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RtAnjurphatatoYewaichkstats_29.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_RtAnjurPhatatoGovanastats_30.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_RtShivajiChowktoKasheliStats_31.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_BhiwandiIntracityRoutesmerged_32.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', 'layer': 'header label - visible with data', });
lyr_BhiwandiTerminalsIntracity_33.set('fieldLabels', {'Name': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', });
lyr_SCVREducation_34.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'name_etymo': 'hidden field', 'capacity': 'hidden field', 'preschool': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'descriptio': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'operator': 'hidden field', 'internet_a': 'hidden field', 'opening_ho': 'hidden field', 'phone': 'hidden field', 'wheelchair': 'hidden field', 'operator_t': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'name_en': 'hidden field', 'wikidata': 'hidden field', 'timing': 'hidden field', 'religion': 'hidden field', 'grades': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_city': 'hidden field', 'name': 'header label - visible with data', 'layer': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'short_name': 'hidden field', 'level': 'hidden field', 'internet_1': 'hidden field', 'internet_2': 'hidden field', 'isced_leve': 'hidden field', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'building_l': 'hidden field', 'surface': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'path': 'hidden field', });
lyr_SCVRTemples_35.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'religion': 'hidden field', 'service_ti': 'hidden field', 'air_condit': 'hidden field', 'addr_distr': 'hidden field', 'name_mr': 'hidden field', 'operator_w': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'timing': 'hidden field', 'name': 'header label - visible with data', 'grades': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name_hi': 'hidden field', 'layer': 'hidden field', 'landuse': 'hidden field', 'website': 'hidden field', 'descriptio': 'hidden field', 'building_l': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'path': 'hidden field', });
lyr_SCVRPSU_36.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_t': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'addr_postc': 'hidden field', 'name_en': 'hidden field', 'addr_stree': 'hidden field', 'ref': 'hidden field', 'operator': 'hidden field', 'name': 'header label - visible with data', 'office': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'landuse': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVRIndustries_37.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', 'building_m': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'industrial': 'hidden field', 'abandoned': 'hidden field', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'building_l': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVROffices_38.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'addr_city': 'hidden field', 'height': 'hidden field', 'building_l': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'short_name': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'closing_ho': 'hidden field', 'alt_name': 'hidden field', 'postal_cod': 'hidden field', 'phone': 'hidden field', 'address': 'hidden field', 'email': 'hidden field', 'name_en': 'hidden field', 'smoking': 'hidden field', 'website': 'hidden field', 'addr_postc': 'hidden field', 'addr_hou_1': 'hidden field', 'path': 'hidden field', });
lyr_SCVRHospitals_39.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'healthcare': 'hidden field', 'healthca_1': 'hidden field', 'amenity': 'hidden field', 'drive_thro': 'hidden field', 'dispensing': 'hidden field', 'descriptio': 'hidden field', 'name_mr': 'hidden field', 'emergency': 'hidden field', 'phone_mobi': 'hidden field', 'alt_name': 'hidden field', 'operator': 'hidden field', 'addr_subdi': 'hidden field', 'email': 'hidden field', 'operator_t': 'hidden field', 'wheelchair': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'addr_stree': 'hidden field', 'name_en': 'hidden field', 'website': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'name': 'header label - visible with data', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'building_f': 'hidden field', 'building_l': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVRStopPopulation_40.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_SCVRRoutePop1000Mtrs_41.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_SCVRRtPop500Mtrs_42.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_SCVRRtPop250mtrs_43.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_SCVRRtPop100Mtrs_44.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax %': 'header label - always visible', 'Avg Tckt': 'inline label - visible with data', 'Revenue': 'header label - always visible', });
lyr_RouteAnjurPhatatoVashiRailwaystationRoute_45.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RtShivajiChowktoVirar_46.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RtSCVRRouteMtrs_47.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'Bus Time': 'no label', 'Buses': 'no label', });
lyr_SCVRRWI_48.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_SCVRStops_49.set('fieldLabels', {'id': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', });
lyr_SCVRTerminals_50.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RtAnjurPhatatoVashistats_51.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_StopsAnjurPhatatoVashiRailwaystation_52.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RouteShivajiChowkBhiwanditoDivastation_53.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RtShivajichowktoDivaStats_54.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_StopsShivajiChowkBhiwanditoDivastationStops_55.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RouteShivajiChowkBhiwanditoKalyanRailwayStation_56.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RtShivajichowktoKalyanVieMankoliStats_57.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_StopsShivajiChowkBhiwanditoKalyanRailwayStation_58.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RouteShivajiChowkBhiwanditoMajiwadaBusStop_59.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RtShivajiChowktoMajiwadaRtStats_60.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_StopsShivajiChowkBhiwanditoMajiwadaBusStop_61.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RtBhiwanditoMiraRoadStats_62.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_RtShivajiChowktoPadhgastats_63.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_RtBhiwanditoThaneStnRoute1stats_64.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_RtAnjarPhatatoKalyanStats_65.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'header label - visible with data', });
lyr_BhiwandiIntercityRoutesMerged_66.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Buses': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'layer': 'header label - visible with data', });
lyr_BhiwandiTerminalsIntercity_67.set('fieldLabels', {'Name': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', 'zcoord': 'hidden field', });
lyr_BhiwandiTerminalsIntercity_67.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});