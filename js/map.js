$('document').ready(function() {
    
    getLocalCoord();
    
    $("#map").click(function() {
        updateBbox();
    })
    
//    Obsługa checkboxa do wyboru formatu współrzędnych

    $('input[type=radio][name=data_format]').change(function() {
        if (this.value == 'Deg_Min_Sec') {
            $('#deg_decimal').slideDown(5);
            $('#deg_min_sec').slideUp(5);
        }
        else if (this.value == 'Deg_decimal') {
            $('#deg_min_sec').slideDown(5);
            $('#deg_decimal').slideUp(5);
        }
    });

});

// zmienna coursorCoordinates przechowuje współrzędne 
// pobrane za pomocą metody positionEventHandler
var coursorCoordinates = [];

function initMap(center) {
    map = $("#map").geomap({
        center: center || [-71.0597732, 42.3584308],
        zoom: 14,
        move: positionEventHandler,
        dblclick: positionEventHandler
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
  // pobieram współrzędne kursora i przekazuje je 
  // do globalnej zmiennej tablicowej
    coursorCoordinates = geo.coordinates;
    var geodetic = $.geo.proj.toGeodetic( coursorCoordinates );
    var projected = $.geo.proj.fromGeodetic( coursorCoordinates );
    if(e.type == 'geomapmove'){
        displayCoord('.geodetic_coursor', geodetic);
        displayCoord('.projected_coursor', projected);
    };
    // jeżeli zdarzeniem jest podwójne kliknięcie do formularza (index.php)
    // przekazane zostają współrzędne zdarzenia
    if(e.type == 'geomapdblclick') {
        $("#x").val(projected[0]);
        $("#y").val(projected[1]);
    }
 
  }