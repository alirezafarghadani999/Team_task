<?php
class Controller
{
    public $modelDd ;
    public function __construct()
    { 
    }

    public function Footer($urlfooter,$data=[])
    {
        require 'view/'.$urlfooter.'.php';
    }


    public function Header($urlheader,$data=[])
    {
        require 'view/'.$urlheader.'.php';
    }

    public function View($urlview,$data=[])
    {
        require 'view/'.$urlview.'.php';
    }

    public function Model($urlmodel){
        require 'model/Model_'.$urlmodel.'.php';
        $classname = 'Model_'.$urlmodel;
        $this->modelDd=new $classname();

    }
}