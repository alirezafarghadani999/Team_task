function send_login_data(){
    const user = document.getElementById('usernames').value;
    const pass = document.getElementById('passwords').value;

    var run = function(output){
        const split_output = output.split("{[]}");
        show_notif('notification','title_notif','text_notif',"time_line",split_output[0], split_output[1]);
        if (split_output[0]=="Your logined"){
            setTimeout(() => {
                window.location.href= '/workspace/dashboard';
                localStorage.setItem('USER_ID',split_output[2]);
            }, 7000);
        }
    };
    output = send_data("/home/login_prosses","user="+user+"&pass="+pass,run);

}


if(localStorage.getItem("()_)KSMNJAIDJsa>>sdj()") == "True"){
    window.location.href= '/workspace/dashboard';
}

