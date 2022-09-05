<?php 

class Home extends Controller
{
    public function __construct()
    {
        
    }
    public function login()
    {
        $this->Header('Home/login/header');
        $this->View('Home/login/index');
        $this->Footer('Home/login/footer');

    }

    public function register(){
        $this->Header('Home/register/header');
        $this->View('Home/register/index');
        $this->Footer('Home/register/footer');   
    }

    public function login_prosses(){
        if ($_POST['user'] == "" or $_POST['pass'] == ""){
            echo 'Null Value{[]}You have to complete form';
        }else{

            $data_return = $this->modelDd->check_user($_POST['user'],$_POST['pass']);
            if ($data_return[0]){
                echo 'Your logined{[]}You have successfully logged in{[]}'.$data_return[1];

            }else{
                echo 'something wrong{[]}Your username or password is incorrect';
            }
        }
        
    }

    public function register_prosses(){
        if ($_POST['user'] == "" or $_POST['pass'] == ""){
            echo 'Null Value{[]}You have to complete form';
        }else{

            if ($this->modelDd->add_user($_POST['user'],$_POST['pass'])){
                echo 'Username already exists{[]}The username you selected is already available. Please try another one';
                
            }else{
                echo 'you have registered{[]}Welcome to the task team :)';
            }
        }
        
    }




}