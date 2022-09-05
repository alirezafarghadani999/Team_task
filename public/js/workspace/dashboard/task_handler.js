function get_task_in_room(id){
    localStorage.setItem('ID_Team', id);
    
    function get_status(number){
        switch (number) {
            case "0":
                return 'in queue';

            case "1":
                return 'doing';
                
            case "2":
                return 'done';
        
            default:
                break;
        }
    }

    function get_color_status(number){
        switch (number) {
            case "0":
                return '#2b2b2b';

            case "1":
                return '#d7a444';
                
            case "2":
                return '#44d788';
        
            default:
                break;
        }   
    }
    main = document.querySelectorAll("#task_list");
        main.forEach(element => {
            element.innerHTML = "";
        });


    var get_task = function(output){

        JSON.parse(output).forEach(element =>{

        main = document.querySelectorAll("#task_list");
        main.id_task = element["id"];
        main.task_name = element['task_name'];
        main.task_maker = element['maker_id'];
        main.functor_id = element['functor_id'];
        main.status = get_status(element['status']);
        main.status_color = get_color_status(element['status'])

        main.forEach(element => {
            element.innerHTML+=`
            <span class='task_func' id_task="${main.id_task}" id_functor="${main.functor_id}">
                <h2>${main.task_name}</h2>
                <p>ID Task maker : ${main.task_maker}</p>
                <p>ID who performs the task : ${main.functor_id}</p>
                <p style="background-color: ${main.status_color};">${main.status}</p>
            </span>
        `;
        });

        });

        var task_actions = document.querySelectorAll('.task_func');

        for (var i = 0; i < task_actions.length; i++) {
            task_actions[i].id_task = task_actions[i].getAttribute('id_task');
            task_actions[i].id_functor = task_actions[i].getAttribute('id_functor');

            task_actions[i].addEventListener('click', function(evt) {
                
                evt.preventDefault();
                id = evt.currentTarget.id_task
                id_functor = evt.currentTarget.id_functor
                display_Task(id_task = id,id_functor = id_functor)
                
            });
        }

    }

    send_data('/workspace/tasks_handler','team_id='+id,get_task);



}

function add_task_to_team(id_team = localStorage.getItem('ID_Team')){

    dialog_html_base = `
    <div class="add_task">
        <div class="window">
            <div class="title"></div>
            <div class="form">
                <h1>Add Task</h1>
                <input type="text" placeholder="Task name" id="input_dialog">
                <textarea type="text" placeholder="Descriptions" id="input_dialog"></textarea>
                <input type="number" placeholder="Task doer (ID)" id="input_dialog">
                <input type="date" placeholder="Time" id="input_dialog">

            </div>
            <button id="button_dialog">Submit</button>
        </div>
    </div>
    `;

    main_dialog = document.getElementById("dialogs");
    var button_do = function(output){
        if (output[0] == '' || output[1]== '' || output[2] =='' || output[4] == '' || id_team == "0"){
            add_task_dialog.close_dialog()
        }else{

            let notif = new notification(output[2]);
            
            send_data('/workspace/add_task','items='+`${output},${id_team},${localStorage.getItem("USER_ID")}`,function(output){
            get_task_in_room(id_team)
            notif.send('You have new task in room (ID) '+id_team,'New Task');


            });
            add_task_dialog.close_dialog()
        }
    }

    let add_task_dialog = new display_dialog(main_dialog,dialog_html_base,"input_dialog","button_dialog")
    add_task_dialog.show_dialog(button_do)
}

function display_Task(id_task,id_functor){

    dialog_html_base = `
    <div class="task">
        <div class="window">
            <div class="title"></div>
            <button id="button_dialog">⨯</button>
            <div class="form">
                <h1>Display Task</h1>
                <label >Task name:</label>
                <input type="text" placeholder="Task name" id="input_dialog">
                <label >Task Descriptions:</label>
                <textarea type="text" placeholder="Descriptions" id="input_dialog"></textarea>
                <label >Who make Task:</label>
                <input type="number" placeholder="Task doer (ID)" id="input_dialog">
                <label >Who shoud do Task:</label>
                <input type="number" placeholder="Task doer (ID)" id="input_dialog">
                <label >Completion Date:</label>
                <input type="date" placeholder="Time" id="input_dialog">
                <label >Status:</label>
                <select id="input_dialog" >
                    <option value="0">in queue</option>
                    <option value="1">doing</option>
                    <option value="2">done</option>
                </select>
            </div>
        </div>
    </div>
    `;

    main_dialog = document.getElementById("dialogs");
    var button_do = function(output){
        extra = Display_task_dialog.get_extra_item();
        if(extra[1] == localStorage.getItem("USER_ID")){
            send_data('/workspace/Dodb','sql='+`UPDATE teams_tasks SET status=${output[5]} WHERE id=${extra[0]}`,function(){
                get_task_in_room(localStorage.getItem('ID_Team'))
            });
        }
            Display_task_dialog.close_dialog()
        }
    
    var onload = function(extra){

        var do_after_get = function(output){
            output = JSON.parse(output);
            inputs = document.querySelectorAll('#input_dialog');
            
            
            for (let index = 0; index < inputs.length ; index++) {
                const element = inputs[index];
                element.value = output[0][index+2];
       
            }
        }

        send_data('/workspace/get_task_deta','task_id='+extra[0],do_after_get);

        if(extra[1] == localStorage.getItem("USER_ID")){
            document.querySelector('.task > .window > .form > select').style['pointer-events'] = 'all';
        }else{
            document.querySelector('.task > .window > .form > select').style['pointer-events'] = 'none';
        }
    }
    

    let Display_task_dialog = new display_dialog(main_dialog,dialog_html_base,"input_dialog","button_dialog",extra=[id_task,id_functor])
    Display_task_dialog.show_dialog(button_do,onload)
}
