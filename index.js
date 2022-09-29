
// increment Button
let point1 = document.getElementById("sum-1")
let num1 = 0
function increment1() {
    num1 += 1
    point1.textContent = num1
}

let point2 = document.getElementById("sum-2")
let num2 = 0
function increment2() {
    num2 += 1
    point2.textContent = num2
}
// delete button
let correctionTeam1 = document.getElementById("sum-1")
function delete1() {
    num1 -= 1
    correctionTeam1.textContent = num1
}

let correctionTeam2 = document.getElementById("sum-2")
function delete2() {
    num2 -= 1
    correctionTeam2.textContent = num2
}

// reset Button
let reset1Config1 = document.getElementById("sum-1")
function reset1() {
    num1 = 0
    reset1Config1.textContent = num1
}
let reset1Config2 = document.getElementById("sum-2")
function reset2() {
    num2 = 0
    reset1Config2.textContent = num2
}




// buenas o Malas team 1 condicionales
let marcador = document.getElementById("buenasOMalas1");

if ("sum-1" === 0) {
    marcador.textContent = "--";
}
else if (("sum-1" >= 1) || ("sum-1" <= 15)) {
    marcador.textContent = "Buenas";
}
else if ("sum-1" > 0) {
    marcador.textContent = "Error";
}
else {
    marcador.textContent = "Test";
}

