<?php
session_start();

if( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
    header('Content-type: application/json');
    echo ( $_SESSION['json'] );
    
    session_destroy();
    session_abort();
}