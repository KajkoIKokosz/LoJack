<?php


?>
<!DOCTYPE html>
<html>
<head>
  <meta name="description" content="map projection" />
  <meta charset="utf-8" />
  <title>LoJack map</title>
  <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="http://code.jquerygeo.com/jquery.geo-1.0.0-rc1.min.js"></script>
  <script src="../js/map.js" type="text/javascript"></script>
  <link href="../CSS/map.css" rel="stylesheet" type="text/css"/>

 </head>
  
<body>
   <div id="map">
    <div id="info">
      <h4>WSPÓŁRZĘDNE ŚRODKA EKRANU</h4>
      <dl>
          <dt>geodezyjny</dt><dd class="geodetic">[ <span class="lon"></span>, <span class="lat"></span> ] <span>deg</span></dd>
        <dt>geograficzny</dt><dd class="projected">[ <span class="x"></span>, <span class="y"></span> ] <span>metry</span></dd>
      </dl>
      <br><br>
      <h4>WSPÓŁRZĘDNE KURSORA</h4>
      <dl>
          <dt>geodezyjny</dt><dd class="geodetic_coursor">[ <span class="lon"></span>, <span class="lat"></span> ] <span>deg</span></dd>
        <dt>geograficzny</dt><dd class="projected_coursor">[ <span class="x"></span>, <span class="y"></span> ] <span>metry</span></dd>
      </dl>
      <br><br>
      <div id='request'>
        <h4>WPROWADŹ SZUKANE PUNKTY</h4>  
        <form name="findTheDistance" action="" method="GET">
          <input type="text" id='x'>
          <input type='text'id='y'>
        </form>
      </div>
    </div>
        
  </div>
  
</body>
</html>
  