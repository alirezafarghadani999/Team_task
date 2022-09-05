function send_login_data(){
    const user = document.getElementById('usernames').value;
    const pass = document.getElementById('passwords').value;

    var run = function(output){
        const split_output = output.split("{[]}");
        show_notif('notification','title_notif','text_notif',"time_line",split_output[0], split_output[1]);

    };
    output = send_data("/home/register_prosses","user="+user+"&pass="+pass,run);

}