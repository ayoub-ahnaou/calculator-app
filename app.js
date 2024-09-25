const display = document.getElementById("display_input");

function add_digit_to_display(digit){
    display.value += digit;
}

function delete_one_digit(){
    display.value = display.value.toString().slice(0, -1);
}

function clear_display(){
    display.value = "";
}

function calc_operation(e){
    display.value = eval(display.value);
}