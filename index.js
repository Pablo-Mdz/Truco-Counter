
let point1 = document.getElementById("sum-1")
let point2 = document.getElementById("sum-2")

let num1 = 0 
function increment1() {
    num1 += 1
    point1.textContent = num1
}

let num2 = 0
function increment2() {
    num2 += 1
    point2.textContent = num2
}

let correctionTeam1 = document.getElementById("sum-1")
let correctionTeam2 = document.getElementById("sum-2")

function delete1() {
    num1 -= 1
    correctionTeam1.textContent = num1
}
function delete2() {
    num2 -= 1
    correctionTeam2.textContent = num2
}




// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }


