<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta name="description" content="map projection" 
  <!-- BOOTSTRAP -->      
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    
  <meta charset="utf-8" />
  
  <!-- jquerygeo -->
  <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="http://code.jquerygeo.com/jquery.geo-1.0.0-rc1.min.js"></script>
  <script src="js/map.js" type="text/javascript"></script>
  <link href="CSS/map.css" rel="stylesheet" type="text/css"/>
  
  <!-- google.maps.api -->
  <!--wygeneruj własny klucz https://developers.google.com/maps/documentation/javascript/get-api-key-->
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6w9gQkvmwNqJvV4jPrlMt3WPiTcc6BiA&libraries=geometry&callback=initMap"></script>
  
  <title>LoJack map</title>
  <style>
      .jumbotron{
        padding-top: 0px;
        background-color:#6269c4;
        color: white;
      }
      
      .panel-footer{
          background-color: white;
          text-align: center;
          color: lightsteelblue;
          font-size: 1em;
      }
  </style>
</head>
<body>  
<div class="container">
    <div class="page-header" id="resultt"> 
    </div>
    <div class='jumbotron'>
    <div class="row">
        <div class="col-lg-4 col-md-5">
            <div class="row left_up">
                <h5 class="coord_head">WSPÓŁRZĘDNE ŚRODKA EKRANU</h5>
                <dl>
                  <dt></dt><dd class="geodetic">[ <span class="lon"></span>, <span class="lat"></span> ] <span>deg</span></dd>
                  <!--<dt>płaskie</dt><dd class="projected">[ <span class="x"></span>, <span class="y"></span> ] <span>metry</span></dd>-->
                </dl>
                <br><br>
                <h5 class="coord_head">WSPÓŁRZĘDNE KURSORA</h5>
                <dl>
                  <dt></dt><dd class="geodetic_coursor">[ <span class="lon"></span>, <span class="lat"></span> ] <span>deg</span></dd>
                  <!--<dt>płaskie</dt><dd class="projected_coursor">[ <span class="x"></span>, <span class="y"></span> ] <span>metry</span></dd>-->
                </dl>
                <br><hr>
                <div id='request'>
                  <h4>OKREŚL SZUKANE PUNKTY</h4> 
    <!--                      <h4><a href='#instruct' data-toggle='collapse'>Instrukcja</a></h4>
                  <div id="instruct" class='collapse in'>
                      Tutaj treść instrukcji
                  </div>-->
                  <form name="findTheDistance" action="src/start.php" method="POST">
                    <div id="point1">
                      <label>Pierwszy punkt
                          <input type="number" min="-89" max="89" step="0.0001" id='x1' name="lat1" placeholder='Szerokość' class='form_coord'>
                          <input type="number" min="-179" max="179" step="0.0001" id='y1' name="long1" placeholder="długość" class='form_coord'>
                      </label>
                    </div>
                    <div id="point2">
                      <label>Drugi punkt
                      <input type="number" min="-89" max="89" step="0.0001" id='x2' name="lat2" placeholder='Szerokość' class='form_coord'>
                      <input type="number" min="-179" max="179" step="0.0001" id='y2' name="long2" placeholder="długość" class='form_coord'>
                      </label>
                    </div>
                    <div id="form_validation">
                        <!--tutaj pojawiają sie błędy o źle wypełnionym formularzu-->
                    </div>
                    <div class="btn-group">
                      <input type="submit" value="wprowadź punkty" class="btn btn-danger" id='insert_coordinates'>
                      <input type='button' value='oblicz odległość' id='compute_distance' class="btn btn-info">
                    </div>
                  </form>
                </div>
            </div>
            <div class="row left_panel left_down">
                <div id='your_point_message'>
                    <?php
                        if ( isset($_SESSION['yourPointsOfInterest']) ) {
                            echo "<hr> {$_SESSION['yourPointsOfInterest']}";
                        }
                    ?>
                </div>
            </div>
        </div>
        <div id="map" class="col-lg-8 col-md-7"></div>
    </div>
    </div>
    <div class="panel-footer">by Przemysław Gędziorowski</div>
</div>
</body>
</html>