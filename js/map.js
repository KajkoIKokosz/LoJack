$('document').ready(function() {
    localInit();
    
    $('#map').click( function() {
        
    })
});

function initMap(center) {
    map = $("#map").geomap({
        center: center || [-71.0597732, 42.3584308],
        zoom: 14
    });
}

    // pozyskuje przybliżone współrzędne hosta użytkownika
    // zmienna posłuży przy inicjalizacji mapy
function localInit() {
    var tableCoord = ""
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        initMap([data.lon, data.lat]);         
    });
}   