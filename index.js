
function addition() {
    // declare variables
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first + second;
    //if result is negative change text to red
    if (result < 0) {
        output.style.color = 'red';

    }
    //reset to black
    else{
        output.style.color = 'black';
    }
    document.getElementById("output").innerHTML = String(result);// print out
}
function subtract(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result = first - second;
    if (result < 0) {
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
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
    else{
        output.style.color = 'black';
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
    else{
        output.style.color = 'black';
    }
    document.getElementById("output").innerHTML = String(result);

}
function exp(){
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let temp = 1; // make temp to hold value
    if(second<0){ //check if second is neg
        let neg = 1/first //if neg, you multiply by flipping the number
        let count = second *- 1; // make a dummy second so that the for loop will work
        for (let i = 0; i < count; i++) {
            temp *= neg;//multiply

        }

    }
    else {
        for (let i = 0; i < second; i++) { // multiply first by itself secon times
            temp *= first;
        }

    }
    if (temp < 0) {
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    document.getElementById("output").innerHTML = String(temp);

}

function clearfields(){

    document.getElementById("first").value = ""; // make the value in first nothing
    document.getElementById("second").value = "";//make value in second nothing

    // Clear output content and reset color
    let output = document.getElementById("output");
    output.innerHTML = ""; //set output to empty
    


    }
