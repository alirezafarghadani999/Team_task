document.getElementById('id_card').innerHTML += localStorage.getItem("USER_ID");
var set_name = function(name){
    name = JSON.parse(name)[0][0]
    document.getElementById('name_card').innerHTML += name
}
sql = 'SELECT `username` FROM `user` WHERE `id`='+localStorage.getItem("USER_ID");
send_data('/workspace/Dodb','sql='+sql,set_name);
