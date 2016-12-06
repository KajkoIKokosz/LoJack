<?php
session_start();

if( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
    header('Content-type: application/json');
    echo ( $_SESSION['json'] );
    
    if( isset($_SESSION['yourPointsOfInterest'])) {
        unset($_SESSION['yourPointsOfInterest']);
    }
    session_destroy();
    session_abort();
    
}