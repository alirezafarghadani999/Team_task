<?php

class Model_workspace extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_notifications($user_id){

        $sql = 'SELECT `notifications` FROM `user` WHERE `id`='.$user_id;
        $notif = $this->doSelect($sql,["null"]);
        return $notif[0]['notifications'];
    }

    public function remove_notifications($msg,$user_id){
        $sql = 'SELECT `notifications` FROM `user`';
        $notif = $this->doSelect($sql,["null"]);
        $notif = $notif[0]['notifications'];
        $list_notif = json_decode($notif );

        foreach ($list_notif as $key => $value) {
            if ($msg == $value->msg){
            unset($list_notif[$key]);
            }
        }
        $sql = 'UPDATE `user` SET `notifications`=? WHERE `id`=?';
        return $this->doQuery($sql,[json_encode($list_notif),$user_id]);

    }

    public function send_notification($title,$msg,$user_id){
        $sql = 'SELECT `notifications` FROM `user`';
        $notif = $this->doSelect($sql,["null"]);
        $notif = $notif[0]['notifications'];
        $list_notif = json_decode($notif );
        $list_notif[] = ["msg" => $msg,"title"=>$title];
        $sql = 'UPDATE `user` SET `notifications`=? WHERE `id`=?';
        $this->doQuery($sql,[json_encode($list_notif),(int)$user_id]);
        return $user_id;

    }

    public function teams_handler($user_id)
    {
        $sql = 'SELECT `teams_id` FROM `user` WHERE `id`='.$user_id;

        $teams = $this->doSelect($sql,['null']);
        $teams = json_decode($teams[0]['teams_id']);

        $list = '[]';
        $list = json_decode($list);

        foreach ($teams as $key => $value) {
            $teams_sql = 'SELECT * FROM `teams` WHERE `id`='.$value;
            $team = $this->doSelect($teams_sql,['null']);
            $list_user = json_decode($team[0]['users_id']);
            foreach ($list_user as $key => $value) {
                if ($value==$user_id) {
                    $list[] = [$this->doSelect($teams_sql,['null'])[0]];
                }
            }
        }
        
        $list = json_encode($list);
        return $list;


    }

    public function task_handler($team_id){
        $sql = 'SELECT * FROM `teams_tasks` WHERE `teams_id`='.$team_id;
        $task = $this->doSelect($sql,['null']);

        return json_encode($task);
    }

    public function user_handler($team_id){
        $sql = 'SELECT * FROM `teams` WHERE `id`='.$team_id;
        $user=[];
        $team = $this->doSelect($sql,['null']);
        $list_user = json_decode($team[0]['users_id']);

        foreach ($list_user as $key => $value) {
            $teams_sql = 'SELECT * FROM `user` WHERE `id`='.$value;
            $user[] = [$this->doSelect($teams_sql,['null'])[0]];
        }

        return json_encode($user);
    }

    public function add_user_to_team($user_id,$team_id){

        $sql = 'SELECT `teams_id` FROM `user` WHERE `id`='.$user_id;
        $user = $this->doSelect($sql,["null"]);
        $list_team = json_decode($user[0]['teams_id']);
        array_push($list_team,$team_id);
        $sql = 'UPDATE `user` SET `teams_id`=? WHERE `id`=?';
        $this->doQuery($sql,[json_encode($list_team),(int)$user_id]);

        $sql = 'SELECT `users_id` FROM `teams` WHERE `id`='.$team_id;
        $team = $this->doSelect($sql,["null"]);
        $list_user = json_decode($team[0]['users_id']);
        array_push($list_user,$user_id);
        $sql = 'UPDATE `teams` SET `users_id`=? WHERE `id`=?';
        $this->doQuery($sql,[json_encode($list_user),(int)$team_id]);
    }

    public function add_user_to_team_Protocol($admin,$user_id,$team_id){
        $sql = 'SELECT `admin_id` FROM `teams` WHERE `id`='.$team_id;
        $team_check = $this->doSelect($sql,['null']);
        if ($team_check[0]['admin_id'] == $admin){
            $this->add_user_to_team($user_id,$team_id);
            return $team_id;
        }else{
            return 0;
        }

    }

    public function add_task($id_team,$task_name,$descriptions,$maker_id,$functor_id,$time,$status=0)
    {
        $sql = 'INSERT INTO `teams_tasks`(`teams_id`, `task_name`, `description`, `maker_id`, `functor_id`, `time`, `status`) VALUES (?,?,?,?,?,?,?)';
        $this->doQuery($sql,[(int)$id_team,$task_name,$descriptions,$maker_id,$functor_id,$time,(int)$status]);
    }

    public function add_team($team_name,$maker_id)
    {
        $sql = 'INSERT INTO `teams`(`admin_id`, `name`, `users_id`) VALUES ('.$maker_id.',?,"[]")';
        $this->doQuery($sql,[$team_name]);
        $sql = 'SELECT * FROM teams ORDER BY ID DESC LIMIT 1';
        $team = $this->doSelect($sql,['null']);
        $this->add_user_to_team($maker_id,$team[0]['id']);
        return $team_name;
    }



    public function get_task_deta($task_id)
    {
        $sql = 'SELECT * FROM `teams_tasks` WHERE `id`='.$task_id;
        $deta = $this->doSelect($sql,['null']);
        return $deta;

    }
    

    public function dodb($sql){
        return json_encode($this->doSelect($sql,['null']));
     }
}