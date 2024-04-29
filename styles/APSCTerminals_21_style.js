var size = 0;
var placement = 'point';
function categories_APSCTerminals_21(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Anjur Phata':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(220,110,125,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(220,110,125,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shivaji Chowk Bhiwandi':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(98,115,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(98,115,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(75,240,50,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(75,240,50,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_APSCTerminals_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
var style = categories_APSCTerminals_21(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
