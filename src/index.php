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
      <dl>
          <dt>geodezyjny</dt><dd class="geodetic">[ <span class="lon"></span>, <span class="lat"></span> ] <span>deg</span></dd>
        <dt>geograficzny</dt><dd class="projected">[ <span class="x"></span>, <span class="y"></span> ] <span>metry</span></dd>
      </dl>
    </div>
  </div>
  
</body>
</html>
  