<?php
session_start();
include_once 'distanceRequest.php';

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if ( isset($_POST['long1']) && isset($_POST['lat1'])
      && isset($_POST['long2']) && isset($_POST['lat2'])    
    ) {
        $quest = new distanceRequest($_POST['long1'], $_POST['lat1'],
                                     $_POST['long2'], $_POST['lat2']);

        $serializedData = json_encode($quest);
    }
    $_SESSION['json'] = $serializedData;
    $_SESSION['yourPointsOfInterest'] = "Interesujące Cię punkty to: <br>
        {$_POST['long1']}, {$_POST['lat1']} oraz 
        {$_POST['long2']}, {$_POST['lat2']}";
    
    header('Location: ../index.php');
}

?>
