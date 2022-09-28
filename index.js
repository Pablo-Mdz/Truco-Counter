
let point1 = document.getElementById("sum-1")
let point2 = document.getElementById("sum-2")

let num = 0 
function increment1() {
    num += 1
    point1.textContent = num
}
function increment2() {
    num += 1
    point2.textContent = num
}

let correctionTeam1 = document.getElementById("sum-1")
let correctionTeam2 = document.getElementById("sum-2")

function delete1() {
    num -= 1
    correctionTeam1.textContent = num
}
function delete2() {
    num -= 1
    correctionTeam2.textContent = num
}




// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }


