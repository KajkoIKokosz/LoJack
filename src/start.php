<?php
    if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
        if ( isset($_POST['long1']) && isset($_POST['lat1'])
          && isset($_POST['long2']) && isset($_POST['lat2'])    
        ) {
            // weryfikacja współrzędnych pierwszego punktu
            if ( is_numeric($_POST['long1'] ) 
                    &&  $_POST['long1'] <= 180
                    && $_POST['long1'] >= -180
             ) {
                $longtitude1 = $_POST['long1'];
            } else {
                echo "Podano błędną długość geograficzną";
            }
            
            if ( is_numeric($_POST['lat1'] ) 
                    &&  $_POST['lat1'] <= 90
                    && $_POST['lat1'] >= -90
             ) {
                $lattitude1 = $_POST['lat1'];
            } else {
                echo "Podano błędną długość geograficzną";
            }
            
            // weryfikacja współrzędnych drugiego punktu
            if ( is_numeric($_POST['long2'] ) 
                    &&  $_POST['long2'] <= 180
                    && $_POST['long2'] >= -180
             ) {
                $longtitude2 = $_POST['long2'];
            } else {
                echo "Podano błędną długość geograficzną";
            }
            
            if ( is_numeric($_POST['lat2'] ) 
                    &&  $_POST['lat2'] <= 90
                    && $_POST['lat2'] >= -90
             ) {
                $lattitude2 = $_POST['lat2'];
            } else {
                echo "Podano błędną długość geograficzną";
            }
        } 
        // struktura dla json
        $coorditnates = array(
                array('lat' => $lattitude1, 'lng' => $longtitude1),
                array('lat' => $lattitude2, 'lng' => $longtitude2)
        );
            echo json_encode($coorditnates);
    }else {
        header('Location: ../index.html');
    }
    
?>
