<?php

class Model_Home extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function check_user($username,$password){
        $sql = 'select * from user';
        $users = $this->doSelect($sql,["null"]);

    foreach ($users as $key => $value) {

        if ($username == $value['username'] and $password == $value['password']){
            return [true,$value['id']];
        }
    }
    return false;
    }

    public function add_user($username,$password){
        $sql = 'INSERT INTO `user`(`id`, `username`, `password`,`notifications`,`teams_id`) VALUES (null,?,?,?,?)';
        $sql2 = 'SELECT `username` FROM `user`';
        $users = $this->doSelect($sql2,["null"]);

        foreach ($users as $key => $value) {

            if ($username == $value['username']){
                return true;
            }
        }

        $notif = '[{"msg":"welcome to team task i hope you have good time in this platform","title":"Welcome"}]';
        $teams_set = '[]';
        $this->doQuery($sql,[$username,$password, $notif,$teams_set]);

    }
    
}