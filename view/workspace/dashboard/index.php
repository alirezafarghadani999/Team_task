<div id="dialogs">

</div>

<div class="body">
    <div>
    <div class="menu_side">
        
        <ul>
        <div class="selector_menu" id="selector"></div>
        <i class="fa fa-pie-chart fa-2x" aria-hidden="true" id="items" onclick="item_click(1,'items','selector')" ></i>
        <i class="fa fa-table fa-2x" aria-hidden="true" id="items" onclick="item_click(2,'items','selector')"></i>
        <i class="fa fa-american-sign-language-interpreting fa-2x" onclick="item_click(3,'items','selector')" id="items"  aria-hidden="true" style="margin-right: -5px;"></i>
        <i class="fa fa-cog fa-2x" aria-hidden="true" id="items" onclick="item_click(4,'items','selector')"></i>
        </ul>

    </div>
    </div>

    <div class="pages">
        <div id="dashboard">
            <div id="task_list"></div>
            <div id="notifications"></div>
            <div id="teams_list"></div>
        </div>
        <div id="list_task">
            <div id="teams_list"></div>
            <div id="task_list"></div>
            <samp id="add_btn" onclick=" add_task_to_team()">⨯</samp>
        </div>
        <div id="team">
            <div id="teams_list"></div>
            <div id="team_users_list">

            </div>

            <samp id="add_btn" onclick="add_team()">⨯</samp>
            <samp id="add_btn" onclick="add_user_to_team()">⨯</samp>
        </div>
        <div id="setting">
            <div>
                <button class="sign_out" onclick="deleteAllCookies()">Sign out</button>
            </div>
        </div>


    </div>

    <div>    
    <div class="info">
        <p class="title_card"> User Card </p>
        <p id="id_card">ID : </p>
        <p id="name_card">Name : </p>

    </div>
    <div class="frature">
        <div id="team_users_list">
            
        </div>
    </div>
    </div>
</div>