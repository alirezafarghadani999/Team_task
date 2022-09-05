
function show_notif(id_body,id_title,id_text, time_id,title_str, text_str) {

    const Body = document.getElementById(id_body);
    const timr_line = document.getElementById(time_id);

    Body.style.animation = 'notification_animation 7s forwards';
    timr_line.style.animation = 'notification_animation_time 7s forwards';
    const title = document.getElementById(id_title).textContent = title_str;
    const text = document.getElementById(id_text).textContent = text_str;
    setTimeout(() => {
        Body.style.animation = 'none';
        timr_line.style.animation = 'none';
    
    }, 7000);


}