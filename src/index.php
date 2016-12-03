<?php


?>
<!DOCTYPE html>
<html>
<head>
  <meta name="description" content="map projection" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1">
  <title>LoJack map</title>
  <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="http://code.jquerygeo.com/jquery.geo-1.0.0-rc1.min.js"></script>
  <script src="../js/map.js" type="text/javascript"></script>
</head>
  
<body>
  
  <div id="map">
    <div id="info">
      <span>Using $.geo.proj to calculate geodetic &amp; projected coordinates of the center of your current map.</span>
      <dl>
        <dt>geodetic</dt><dd class="geodetic">[ <span class="lon"></span>, <span class="lat"></span> ]</dd>
        <dt>projected</dt><dd class="projected">[ <span class="x"></span>, <span class="y"></span> ]</dd>
      </dl>
    </div>
  </div>
  
  
</body>
</html>
  