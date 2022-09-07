let output ;

function send_data(url,datas,run_after=function(output){}){
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        output = this.responseText;
        run_after(output);
    };

    xhr.open("POST",URL+url);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(datas);


  }

