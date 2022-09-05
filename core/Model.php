<?php

class Model {

    protected static $db;
    public function __construct()
    {
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = 'teamtask';
        self::$db = new PDO('mysql:host='.$server.';dbname='.$dbname,$username,$password);
        self::$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        self::$db->exec(('set names utf8'));
    }

    public function doQuery($sql,$data=[]){
        $query=self::$db->prepare($sql);
        foreach ($data as $key => $item) {
            $query->bindValue($key+1,$item);
        }
        $query->execute();
    }

    public function doSelect($sql,$data=[]){
        $query=self::$db->prepare($sql);
        if ($data != [] and $data != ["null"]){
            foreach ( $sql as $key=>$item)
            {
                $query->bindValue($key+1,$item);
                
            }
        }
        $query->execute();
        if ($data==[]){
            return $query->fetch();
        }else if ($data==["null"]){
            return $query->fetchAll();
        }else{
            return $query->fetchAll();
        }
    }
}