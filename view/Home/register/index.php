
<div class="head">

    <div class="login">
        <div class="logincard">
        <p>LETS TO DO <br> TASK FASTER</p>

            <form action="/home/login_prosses" method="post" >

                <input type="text" name="username" id="usernames" placeholder="Username" >
                <input type="password" name="password" id="passwords" placeholder="Password">
                <input type="button" value="Register" onclick="send_login_data()">

                <p>Back to <a href="/home/login">login</a> Page</p>

            </form>

        </div>
    </div>
</div>



<div class="side_menu">
    <span class="line"></span>
    <div class="links">
        <ul>
            <a href=""><li><img src="/public/icon/about.png"/></li></a>
            <a href=""><li><img src="/public/icon/whatsapp.png"/></li></a>
            <a href="https://github.com/alirezafarghadani999"><li><img src="/public/icon/github.png"/></li></a>

        </ul>
    </div>
</div>

<div id="notification">
    <p id="title_notif">HI</p>
    <p id="text_notif">Welcome</p>
    <div><img src="/public/icon/notification.png"></div>
    <div id="time_line"></div>

</div>