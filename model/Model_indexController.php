<?php

class Model_indexController extends Model{


    public function __construct()
    {
        parent::__construct();
    }
    public function get_product(){
        
        $sql = 'select * from product';
        $query=$this->db->prepare($sql);
        $query->execute();
        $result=$query->fetchAll();
        return $result;

    }
}