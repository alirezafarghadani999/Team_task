function load_teams() {

        main = document.querySelectorAll("#teams_list");
        main.forEach(element => {
            element.innerHTML = " ";
        });
    var set_teams = function (output) {
        const obj = JSON.parse(output);
        obj.forEach(element => {
            element = element[0];
            num_persone = element['users_id'].replace('[', '').replace(']', '').split(',').length;

            main = document.querySelectorAll("#teams_list");
            main.name = element['name'];
            main.id = element['id'];
            main.num_persone = num_persone;
            main.innerHTML = '';

            main.forEach(element => {
                element.innerHTML += `
            <span class='team_func'>
                <h2>${main.name}</h2>
                <p>ID ${main.id}</p>
                <p>${main.num_persone} Person in this team</p>
            </span>
        `;
            });

        });


        var teams_actions = document.querySelectorAll('.team_func');

        for (var i = 0; i < teams_actions.length; i++) {
            teams_actions[i].html = teams_actions[i].innerHTML.split("<p>ID ")[1].split("</p>")[0]
            teams_actions[i].addEventListener('click', function (evt) {

                evt.preventDefault();
                id = evt.currentTarget.html
                get_task_in_room(id)
                get_user_in_room();

            });
        }

    }
    send_data('/workspace/teams_handler', 'user_id=' + localStorage.getItem("USER_ID"), set_teams);
}

load_teams();


function add_team(maker = localStorage.getItem("USER_ID")) {

    dialog_html_base = `
    <div class="add_task">
        <div class="window">
        <div class="title"></div>
            <div class="form">
                <h1>Add Team</h1>
                <input type="text" placeholder="Team name" id="input_dialog">
            </div>
            <button id="button_dialog">Submit</button>
        </div>
    </div>
    `;
    main_dialog = document.getElementById("dialogs");
    var button_do = function (output) {
        if (output[0] == '') {
            add_team_dialog.close_dialog()
        } else {

            let notif = new notification(maker);
            send_data('/workspace/add_team', 'items=' + `${output[0]},${maker}`, function (output) {
            notif.send(`Your Team (${output}) added :)`, 'New Team');
            load_teams();


            });
            add_team_dialog.close_dialog()
        }
    }

    let add_team_dialog = new display_dialog(main_dialog, dialog_html_base, "input_dialog", "button_dialog")
    add_team_dialog.show_dialog(button_do);
}