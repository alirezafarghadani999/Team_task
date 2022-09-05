class display_dialog {
    constructor(main,dialog_html,id_inputs,button_id,extra){
        this.dialog_html = dialog_html;
        this.main = main;
        this.id_inputs = id_inputs
        this.button_id =button_id;
        this.extra = extra;

    }

    show_dialog(submit_function=function(output){},onload_function=function(extra){}){

        this.main.innerHTML = '';
        this.main.innerHTML = this.dialog_html;

        document.getElementById(this.button_id).addEventListener('click', function(evt) {
            evt.preventDefault();

            const output_lis = [];
            
            document.querySelectorAll('#input_dialog').forEach(element => {
                
                output = element.value;
                output_lis.push(output);

            });

            submit_function(output_lis);
        
        });

        onload_function(this.extra);
    }

    close_dialog(){
        this.main.innerHTML = "";
    }

    get_extra_item(){
        return this.extra
    }

}