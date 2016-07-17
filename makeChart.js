/**
 * Created by rudy on 7/14/2016.
 */
/*AmCharts.makeChart( "mapdiv", {
    /!**
     * this tells amCharts it's a map
     *!/
    "type": "map",

    /!**
     * create data provider object
     * map property is usually the same as the name of the map file.
     * getAreasFromMap indicates that amMap should read all the areas available
     * in the map data and treat them as they are included in your data provider.
     * in case you don't set it to true, all the areas except listed in data
     * provider will be treated as unlisted.
     *!/
    "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
    },

    /!**
     * create areas settings
     * autoZoom set to true means that the map will zoom-in when clicked on the area
     * selectedColor indicates color of the clicked area.
     *!/
    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
    },

    /!**
     * let's say we want a small map to be displayed, so let's create it
     *!/
    "smallMap": {}
} );*/

var map;
var icon= "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";

AmCharts.ready(function() {
    map = new AmCharts.AmMap();


    map.balloon.color = "#000000";

    var dataProvider = {
        mapVar: AmCharts.maps.japanLow,
        getAreasFromMap:true,
        images : [ {
            "latitude": 35.011636,
            "longitude": 135.768029,
            "svgPath": icon,
            "color": "#CC0000",
            "scale": 0.5,
            "label": "kyoto",
            "labelShiftY": 2,
            "zoomLevel": 5,
            "title": "kyoto",
            "description": "kyoto is the most populous city in japan  and the  http:\\home.nl center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
        } ]
    };

    map.dataProvider = dataProvider;

    map.areasSettings = {
        autoZoom: true,
        selectedColor: "#CC0000"
    };



    map.smallMap = new AmCharts.SmallMap();

    map.write("mapdiv");

});