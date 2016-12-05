<?php
    if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
        if ( isset($_POST['long']) && isset($_POST['lat']) ) {
            if (preg_match('/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/', $_POST['long'])) {
                echo 'preg match ok';
            } else {
                echo "preg match differ";
            }
        } else {
            header('Location: ../index.html');
        }
    }
    
?>
