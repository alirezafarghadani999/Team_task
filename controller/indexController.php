<?php
class indexController extends Controller
{
    public function __construct()
    {
    }
    public function index()
    {   
        $db =$this->modelDd->get_product() ;
        print_r($db);
        $this->Header('index/header');
        $this->View('index/index');
        $this->Footer('index/footer');

    }
}