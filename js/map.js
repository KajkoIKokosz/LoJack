$('document').ready(function() {
    
    getLocalCoord();
    
    $("#map").click(function() {
        updateBbox();
    })
    
});

function initMap(center) {
    map = $("#map").geomap({
        center: center || [-71.0597732, 42.3584308],
        zoom: 14,
        move: positionEventHandler
    });
    updateBbox();
}

    // pozyskuje przybliżone współrzędne hosta użytkownika
    // zmienna posłuży przy inicjalizacji mapy
function getLocalCoord() {
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        initMap([data.lon, data.lat]);      
    });
    
}

function updateBbox( ) {
    // when you move the map, we ask it
    // for the new center in both
    // geodetic (lon, lat) and
    // projected (x, y / Web Mercator meters)
    var center = map.geomap( 'option', 'center' );
    
    // geodetic means the latitude, longitude coordinates      
    var geodetic = $.geo.proj.toGeodetic( center );
    displayCoord( '.geodetic', geodetic );
    
    // projected is x, y coordinates on your projected plane (Web Mercator meters in this case)
    // you would use projected coordinates when proper comparison or math is required such as calculating the distance between points
    var projected = $.geo.proj.fromGeodetic( center );
    displayCoord( '.projected', projected );
  }
  
  function displayCoord( sel, coord ) {
    var spans = $( sel ).children( 'span' );
    $( spans[ 0 ] ).text( coord[ 0 ].toFixed( 2 ) );
    $( spans[ 1 ] ).text( coord[ 1 ].toFixed( 2 ) );
  }
  
  function positionEventHandler( e, geo ) {
    
    // the coordinates property is an array
    var displayCoords = geo.coordinates;
    for(var i = 0; i < displayCoords.length; i++) {
        console.log(displayCoords[i]);
    }


  
  }