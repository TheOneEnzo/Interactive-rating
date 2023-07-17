let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
console.log(btn1)
console.log(btn2)
console.log(btn3)
console.log(btn4)
console.log(btn5)

function clicked1() {
    btn1.setAttribute('id', 'clicked')
}

function clicked2() {
    btn2.setAttribute('id', 'clicked')
}
function clicked3() {
    btn3.setAttribute('id', 'clicked')
}
function clicked4() {
    btn4.setAttribute('id', 'clicked')
}
function clicked5() {
    btn5.setAttribute('id', 'clicked')
}


btn1.addEventListener('click', clicked1)
btn2.addEventListener('click', clicked2)
btn3.addEventListener('click', clicked3)
btn4.addEventListener('click', clicked4)
btn5.addEventListener('click', clicked5)



console.log(btn1.id|btn2.id|btn3.id|btn4.id|btn5.id === 'clicked')