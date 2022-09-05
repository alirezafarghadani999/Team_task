<?php 

class workspace extends Controller
{
    public function __construct()
    {
        
    }
    public function dashboard(){

        $this->Header('workspace/dashboard/header');
        $this->View('workspace/dashboard/index');
        $this->Footer('workspace/dashboard/footer');
    }

    public function Dodb(){
        $sql = $_POST['sql'];
        print_r($this->modelDd->dodb($sql));

    }

    public function notification_handler(){
        $user_id = $_POST['user_id'];
        $user_notfi = $this->modelDd->get_notifications($user_id);
        $list_notif = json_decode($user_notfi);
        foreach ( $list_notif as $key => $value) {
           echo $value->title.'{[]}'.$value->msg.'{[[]]}';
        }
    }


    public function notification_remover(){
        $msg_notification = $_POST['msg'];
        $user_id = $_POST['user_id'];
        echo $this->modelDd->remove_notifications($msg_notification,$user_id);
    }

    public function add_task(){
        $list_item = explode(",",$_POST['items']);
        $name  = $list_item[0];
        $description = $list_item[1];
        $task_doer = $list_item[2];
        $date = $list_item[3];
        $id_team = $list_item[4];
        $maker_id = $list_item[5];
        $this->modelDd->add_task($id_team,$name,$description,$maker_id,$task_doer,$date,"0");

    }

    public function add_team(){
        $list_item = explode(",",$_POST['items']);
        $name_team = $list_item[0];
        $admin_team = $list_item[1];
        echo $this->modelDd->add_team($name_team,$admin_team);


    }


    public function add_user_to_team(){
        $list_item = explode(",",$_POST['items']);
        $id_team = $list_item[0];
        $admin_team = $list_item[1];
        $user = $list_item[2];
        print_r($this->modelDd->add_user_to_team_Protocol($admin_team,$user,$id_team));


    }

    public function get_task_deta(){
        $task_id = $_POST['task_id'];
        echo json_encode($this->modelDd->get_task_deta($task_id));
    }
    public function teams_handler(){

        $user_id = $_POST['user_id'];
        echo $this->modelDd->teams_handler($user_id);
    }

    public function tasks_handler(){
        $team_id = $_POST['team_id'];
        print_r($this->modelDd->task_handler($team_id));
    }

    public function send_notification()
    {
        $list_item = explode(",",$_POST['items']);
        print_r($this->modelDd->send_notification($list_item[0],$list_item[1],$list_item[2]));
    }

    public function user_handler(){

        $team_id = $_POST['team_id'];
        echo $this->modelDd->user_handler($team_id);
    }
    

}