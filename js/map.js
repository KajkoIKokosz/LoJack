$('document').ready(function() {
    initMap( getLocalCoord() )
    
});

var tableCoord = [];

function initMap(center) {
    map = $("#map").geomap({
        center: center || [-71.0597732, 42.3584308],
        zoom: 14
    });
}

    // pozyskuje przybliżone współrzędne hosta użytkownika
    // zmienna posłuży przy inicjalizacji mapy
function getLocalCoord() {
    
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        tableCoord = [data.lon, data.lat];      
        console.log(tableCoord);
    });
    
    return tableCoord;
}   