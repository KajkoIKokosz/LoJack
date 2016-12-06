<?php

class distanceRequest implements JsonSerializable{
    private $lat1;
    private $long1;
    private $lat2;
    private $long2;
    
    public function __construct($long1, $lat1, $long2, $lat2) {
        $this->setLat1($lat1)
             ->setLong1($long1)
             ->setLat2($lat2)
             ->setLong2($long2);
    }
    
    public function setLat1($lat1){  
      if ( is_numeric($lat1) && $lat1 <= 180 && $lat1 >= -180) {
          $this->lat1 = $lat1;
          return $this;
      }
    }
    
    public function setLat2($lat2){  
      if ( is_numeric($lat2) && $lat2 <= 180 && $lat2 >= -180) {
          $this->lat2 = $lat2;
          return $this;
      }
    }
    
    public function setLong1($long1){
      if ( is_numeric($long1) && $long1 <= 90 && $long1 >= -90) {
          $this->long1 = $long1;
          return $this;
      } 
    }
    
    public function setLong2($long2){
      if ( is_numeric($long2) && $long2 <= 90 && $long2 >= -90) {
          $this->long2 = $long2;
          return $this;
      }  
    }
    
    public function getLat1() {
        return $this->lat1;
    }
    
    public function getLat2() {
        return $this->lat2;
    }
    
    public function getLong1() {
        return $this->long1;
    }
    
    public function getLong2() {
        return $this->long2;
    }

    public function jsonSerialize() {
        $coorditnates = array(
                array('lat' => $this->getLat1(), 'lng' => $this->getLong1() ),
                array('lat' => $this->getLat2(), 'lng' => $this->getLong2() )
        );
        return $coorditnates; 
    }
    

}
