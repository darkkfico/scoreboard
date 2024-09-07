let scoreHomeEl = document.getElementById('scoreHome-el');
let scoreGuestEl = document.getElementById('scoreGuest-el');

let num1 = 0;
let num2 = 0;


let sum2;

scoreHomeEl.textContent = num1;
scoreGuestEl.textContent = num1;


function incrementHome1(){
    num1 += 1
    scoreHomeEl.textContent = num1;
}

function incrementHome2(){
    num1 += 2
    scoreHomeEl.textContent = num1;
}

function incrementHome3(){
    num1 += 3
    scoreHomeEl.textContent = num1;
}

let sum1 = scoreHomeEl.textContent;


function incrementGuest1(){
    num2 += 1
    scoreGuestEl.textContent = num2;
}

function incrementGuest2(){
    num2 += 2
    scoreGuestEl.textContent = num2
}

function incrementGuest3(){
    num2 += 3
    scoreGuestEl.textContent = num2;
}

console.log(sum1)
