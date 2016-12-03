$('document').ready(function() {
    
    var map;

function initMap(center) {
  map = $("#map").geomap({
    center: center || [-71.0597732, 42.3584308],
    zoom: 14
  });
}

// centruje indywidualnie dla użytkownika
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (p) {
    initMap([p.coords.longitude, p.coords.latitude]);
  }, function (error) {
    initMap();
  });
} else {
  initMap();
}

$("#map").geomap( { center: [ 0, 0 ] } );
$('#map').click(function() {
    var center = $("#map").geomap( "option", "center" );
    console.log(center);})	

})

