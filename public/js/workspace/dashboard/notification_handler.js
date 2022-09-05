function get_notif(){
document.getElementById("notifications").innerHTML='';

var set_notif = function(output){
list_notifs = output.split('{[[]]}');
for (let index = 0; index < list_notifs.length -1; index++) {
    list_notifs_items = list_notifs[index].split('{[]}');
    document.getElementById("notifications").innerHTML+=`
    <span class='notif_body'>
        <h2>${list_notifs_items[0]}</h2>
        <p>${list_notifs_items[1]}</p>
    </span>
`;
}

var remove_notifications = document.querySelectorAll('.notif_body');

for (var i = 0; i < remove_notifications.length; i++) {
    remove_notifications[i].msg = remove_notifications[i].innerHTML.split('<p>')[1].split('</p>')[0]
    remove_notifications[i].addEventListener('click', function(evt) {
        if (confirm("sure you want to delete " + this.title)) {
            console.log();
            send_data('/workspace/notification_remover','msg='+evt.currentTarget.msg+"&user_id="+localStorage.getItem("USER_ID"),function(output){
                get_notif()
            })

        }
    });
}

}
send_data('/workspace/notification_handler','user_id='+localStorage.getItem("USER_ID"),set_notif)
}
get_notif()
setInterval(get_notif,10000);