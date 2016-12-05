$('document').ready(function() {
    
    getLocalCoord();
    
    $("#map").click(function() {
        updateBbox();
    })
    
    $('#compute_distance').click( function(e) {
        e.preventDefault();
        console.log('przycisk oblicz działa');
        var latLngA = new google.maps.LatLng({lat: 52.259, lng: 21.02}); 
        var latLngB = new google.maps.LatLng({lat: 50.060, lng: 19.959}); 
        var distance = google.maps.geometry.spherical.computeDistanceBetween (latLngA, latLngB);
        
        console.log(distance);
    })
    


});

// zmienna coursorCoordinates przechowuje współrzędne 
// pobrane za pomocą metody positionEventHandler
var coursorCoordinates = [];

// zmienna boubleClickCounter odróżnia klikniecia parzyste od nieparzystych
// przy kliknięciach nieparzystych dodawać się bedą współrzędne do pierwszego punktu
// przy kliknieciach parzystych dodawać sie będą współrzędne do drugiego punktu

function initMap(center) {
    map = $("#map").geomap({
        center: center || [51.0597732, 22.3584308],
        zoom: 14,
        move: positionEventHandler,
        dblclick: positionEventHandler
    });
    updateBbox();
}

    // pozyskuje przybliżone współrzędne hosta użytkownika
    // i dla otrzymanych współrzędnych inicjuję mapę
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
    
    //  !!!!
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
        $("#y1").val(geodetic[0].toFixed( 4 ));
        $("#x1").val(geodetic[1].toFixed( 4 ));
    }
 
  }