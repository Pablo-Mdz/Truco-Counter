

let sumOne = document.getElementById("sum-1")
let sumTwo = document.getElementById("sum-2")

let num1 = 0
let num2 = 0


// increment button
function increment1() {
    num1 += 1
    sumOne.textContent = num1;
    buenasMalas(num1)
    
}

let point2 = document.getElementById("sum-2")
function increment2() {
    num2 += 1
    sumTwo.textContent = num2;
    buenasMalas2(num2)
}
// delete button

function delete1() {
    num1 -= 1
    sumOne.textContent = num1;
    buenasMalas(num1)
}


function delete2() {
    num2 -= 1
    sumTwo.textContent = num2;
    buenasMalas2(num2)
}

// reset Button
function reset1() {
    num1 = 0
    sumOne.textContent = num1;
    buenasMalas(num1)
}

function reset2() {
    num2 = 0
    sumTwo.textContent = num2;
    buenasMalas2(num2)
}
// option 2 funtion clean Code

// function updateResult1(value) {
//     num1 = num1 + value;
//     sumOne.textContent = num1;
//     buenasMalas(num1);
// }
// function updateResult2(value) {
//     num2 = num2 + value;
//     sumTwo.textContent = num2;
//     buenasMalas(num2);
// }



// buenas o Malas team 1 conditionals
let marcador = document.getElementById("buenasOMalas1");

function buenasMalas(result) {

    if (result === 0) {
        marcador.textContent = "--";
    }
    else if ((result > 0) && (result <= 15)) {
        marcador.textContent = "Malas";
    }
    else if ((result > 15) && (result < 30)) {
        marcador.textContent = "Buenas";
    }
    else if (result >= 30) {
        marcador.textContent = "Ganaste!!!";
    }
    // else if (result < 0) {
    //     marcador.textContent = "Error";
    // }
    else {
        marcador.textContent = "Aprende a contar...";
    }
}
// buenas o Malas team 2 conditionals
let marcador2 = document.getElementById("buenasOMalas2");

function buenasMalas2(result) {

    if (result === 0) {
        marcador2.textContent = "--";
    }
    else if ((result > 0) && (result <= 15)) {
        marcador2.textContent = "Malas";
    }
    else if ((result > 15) && (result < 30)) {
        marcador2.textContent = "Buenas";
    }
    else if (result >= 30) {
        marcador2.textContent = "Ganaste!!!";
    }
    // else if (result < 0) {
    //     marcador2.textContent = "Error";
    // }
    else {
        marcador2.textContent = "Aprende a contar...";
    }
}
