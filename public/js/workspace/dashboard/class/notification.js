class notification{
    constructor(user_id){
        this.user_id = user_id

    }
    
    send(msg,title){
        send_data('/workspace/send_notification','items='+`${title},${msg},${this.user_id}`)
    }
}