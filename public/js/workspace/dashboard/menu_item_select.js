full_url =URL+'workspace/dashboard'; 
function do_select(items,item_number){

    for (let index = 0; index < items.length; index++) {
        if (index == item_number-1)
        {items[index].style.color = "#ffffff";}else{items[index].style.color = "#9ea8bf";}
    }
}

function item_click(item_number,id_items,id_selctor){
    const selector = document.getElementById(id_selctor);
    const items = document.querySelectorAll("#"+id_items);

    if (item_number == 1){
        selector.style.top = '7%';
        do_select(items,item_number)
        location.href = full_url+"#dashboard";
    }else if (item_number == 2){
        selector.style.top = '31%';
        do_select(items,item_number)
        location.href = full_url+"#list_task";
    }else if (item_number == 3){
        selector.style.top = '56%';
        do_select(items,item_number)
        location.href = full_url+"#team";

    }else if (item_number == 4){
        selector.style.top = '81%';
        do_select(items,item_number)
        location.href = full_url+"#setting";

    }
}
