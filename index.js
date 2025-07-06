
function addition() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first + second;
    if (result < 0) {
        output.style.color = 'red';

    }
    document.getElementById("output").innerHTML = String(result);
}
function subtract(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first - second;
    if (result < 0) {
        output.style.color = 'red';

    }
    document.getElementById("output").innerHTML = String(result);
}
function multiply(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first * second;
    if (result < 0) {
        output.style.color = 'red';

    }
    document.getElementById("output").innerHTML = String(result);
}
function divide(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first / second;
    if (result < 0) {
        output.style.color = 'red';

    }
    document.getElementById("output").innerHTML = String(result);

}
function exp(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let temp = 1;
    for (let i = 0; i < second; i++) {
        temp *= first;
    }
    if (temp < 0) {
        output.style.color = 'red';

    }
    document.getElementById("output").innerHTML = String(temp);

}

function clearfields(){

    document.getElementById("first").value = "";
    document.getElementById("second").value = "";

    // Clear output content and reset color
    let output = document.getElementById("output");
    output.innerHTML = "";


    }
