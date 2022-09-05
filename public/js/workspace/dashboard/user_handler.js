function get_user_in_room(){
    
    main = document.querySelectorAll("#team_users_list");
        main.forEach(element => {
            element.innerHTML = "";
        });


    var get_task = function(output){
        JSON.parse(output).forEach(element =>{

        element = element[0];
        main = document.querySelectorAll("#team_users_list");
        main.id= element['id'];
        main.username = element['username'];

        main.forEach(element => {
            element.innerHTML+=`
            <span class='user_func' id_user="${main.id}"">
            <h2>${main.username}</h2>
            <p>ID User : ${main.id}</p>
        </span>
        `;
        });

        });

        var user_actions = document.querySelectorAll('.user_func');

        for (var i = 0; i < user_actions.length; i++) {
            user_actions[i].id_task = user_actions[i].getAttribute('id_task');

            user_actions[i].addEventListener('click', function(evt) {
                
                evt.preventDefault();
                id = evt.currentTarget.id_task

            });
        }

    }

    send_data('/workspace/user_handler','team_id='+id,get_task);

}


function add_user_to_team(team_id = localStorage.getItem('ID_Team'),admin = localStorage.getItem("USER_ID")) {

        dialog_html_base = `
        <div class="add_task">
            <div class="window">
            <div class="title"></div>
                <div class="form">
                    <h1>Add User to Team</h1>
                    <input type="number" placeholder="User id" id="input_dialog">
                </div>
                <button id="button_dialog">Submit</button>
            </div>
        </div>
        `;
        main_dialog = document.getElementById("dialogs");
        var button_do = function (output) {
            if (output[0] == '') {
                add_user_dialog.close_dialog()
            } else {
    
                let notif = new notification(output[0]);
                send_data('/workspace/add_user_to_team', 'items=' + `${team_id},${admin},${output[0]}`, function (output) {
                if(output == 0){
                    alert('you are not admin in this team ...')
                }else{
                    notif.send(`Your added to Team (ID) ${output}`, 'Team Request');
                }
                get_user_in_room();


            });
            add_user_dialog.close_dialog()
        }
    }

    let add_user_dialog = new display_dialog(main_dialog, dialog_html_base, "input_dialog", "button_dialog")
    add_user_dialog.show_dialog(button_do);
}