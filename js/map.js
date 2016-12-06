// zmienna coursorCoordinates przechowuje współrzędne 
// pobrane za pomocą metody positionEventHandler
var coursorCoordinates = [];

// zmienna doubleClickCounter odróżnia klikniecia parzyste od nieparzystych
// przy kliknięciach nieparzystych dodawać się bedą współrzędne do pierwszego punktu
// przy kliknieciach parzystych dodawać sie będą współrzędne do drugiego punktu
var doubleClickCounter = 1;

$('document').ready(function() {
    
    getLocalCoord();
    
    $("#map").click(function() {
        updateBbox();
    })
    
    // walidacja, czy pola formularza są wypełnione
    $('#insert_coordinates').click( function(e) {
        if ( ($.trim($("#x1").val()).length < 1 )
          || ($.trim($("#y1").val()).length < 1)   
          || ($.trim($("#x2").val()).length < 1)             
          || ($.trim($("#y2").val()).length < 1)             
        ){
            e.preventDefault();
            $('#form_validation').empty();
            $('#form_validation').append("<span>*Wprowadź wszystkie współrzędne</span>");    
        } 
    })
    
    
//    zdarzenie - przycisk oblicz odległość
    $('#compute_distance').click( function(e) {
        e.preventDefault();
        console.log();
        
        $.ajax({
            url: 'http://localhost:1337/LoJack/src/getJson.php',
            
            type: 'GET',
            dataType: 'json'
        })
            .done(function(data) {
            
            var jsonData = data;
            var lat1 = parseFloat(jsonData[0]['lat']);
            var lng1 = parseFloat(jsonData[0]['lng']);
            var lat2 = parseFloat(jsonData[1]['lat']);
            var lng2 = parseFloat(jsonData[1]['lng']);
            var latLngA = new google.maps.LatLng({lat: lat1, lng: lng1}); 
            var latLngB = new google.maps.LatLng({lat: lat2, lng: lng2}); 
            var distance = google.maps.geometry.spherical.computeDistanceBetween (latLngA, latLngB);
            
            $('#resultt').append('<h2>Odległość pomiedzy punktami wynosi:</h2>' + (distance / 1000).toFixed(0) + 'kilometrów, a dokładniej ' + distance.toFixed(0) + 'metrów');
//            Oprócz metody empty() podczas rządania URL w pliku getJson.php wywołane zostaje unset ($_SESSION['yourPointsOfInterest'])
            $('#your_point_message').empty();
        })
    
        
    })
});

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
    $( spans[ 0 ] ).text( coord[ 1 ].toFixed( 2 ) );
    $( spans[ 1 ] ).text( coord[ 0 ].toFixed( 2 ) );
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
        if( (doubleClickCounter % 2) == 0 ){
            doubleClickCounter++;
            $("#y2").val(geodetic[0].toFixed( 4 ));
            $("#x2").val(geodetic[1].toFixed( 4 ));
        } else {
            doubleClickCounter++;
            $("#y1").val(geodetic[0].toFixed( 4 ));
            $("#x1").val(geodetic[1].toFixed( 4 ));
        }
    }
 }