<?php

class Url_handler
{
    public function __construct()
    {
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $base_url = "https://";   
        else  
            $base_url = "http://";   

        $base_url.= $_SERVER['HTTP_HOST'];   
        $base_url.= $_SERVER['REQUEST_URI'];
        if (isset($_GET['url']))
            $base_url = str_replace($_GET['url'] , '', $base_url);    
        define('URL', $base_url);        
    }


}


