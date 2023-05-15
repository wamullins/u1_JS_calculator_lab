// ---whiteboarding--- writing our ideas and plans in plain english ---
// HTML buttons
// make a screen
// math operators + / - *
// inputs -> we need numbers 0-9
// decimal options
// we need buttons
// ~ 20 buttons with operators and numbers, or on and off
// equals and clear button


//---pseudocoding--- taking our whiteboarded ideas, and translating them into basic code ---
// JS
// addEventListeners to add innerText to the screen
// can we use forEach to through every button
// maybe a for loop maybe a for in

//lets use flex or grid to style our buttons


//---Rubber Ducking--- vocalizing and speaking out your bugs and your issues to an inanimate object to help in problem solving ---

// when I addEventListener to my forExach I'm getting a numebr not a string


const strButs = document.querySelectorAll('.strBtn');
// const numButs = document.querySelectorAll('.numberBtn');
// const opButs = document.querySelectorAll('.operatorBtn');
const equalBut = document.getElementById('equals');
const clearBut = document.getElementById('clearBtn');
const squareBut = document.getElementById('expon');
const squareRootBut = document.getElementById('sqrtbtn');
const viewScreen = document.getElementById('viewScreen');
const offOn = document.getElementById('offOn');


let currentMath = '';
let finalAnswer = null;
let isOn = false;

//start with the buttons disabled initially//
strButs.forEach(function(button) {button.disabled = true});


/// EVENT LISTENERS HERE ///

offOn.addEventListener('click', () => {
    isOn = isOn ? false : true;
    if (isOn) {
        viewScreen.style.backgroundColor = 'lightgray';
        strButs.forEach(function(button) {button.disabled = false});
    } else {
        viewScreen.style.backgroundColor = 'black';
        strButs.forEach(function(button) {button.disabled = true});
    }
})



// for (let i = 0; i<strButs.length; i++) {
//     strButs[i].addEventListener('click', doMath(i));
// }

for (let i = 0; i<strButs.length; i++) {
    strButs[i].addEventListener('click', () => {
        currentMath = `${currentMath}${strButs[i].id}`;
        showCurrentMath()
        return;
    })
}

equalBut.addEventListener('click', equalButton);

// equalBut.addEventListener('click', () => {
//     finalAnswer = eval(currentMath);
//     console.log(finalAnswer);
//     viewScreen.innerText = finalAnswer;
//     return;
// })

clearBut.addEventListener('click', clearButton);

// clearBut.addEventListener('click', () => {
//     currentMath = '';
//     showCurrentMath()
//     return;
// })

squareBut.addEventListener('click', squareIt);
squareRootBut.addEventListener('click', squareRoot);

/// Additional Functions ///

function showCurrentMath() {
    viewScreen.innerText = currentMath;
}

function doMath(button) {
    currentMath = `${currentMath}${strButs[button].id}`;
    showCurrentMath()
    return;
}

function squareIt() {
    currentMath = `${currentMath}*${currentMath}`
    finalAnswer = eval(currentMath);
    viewScreen.innerText = finalAnswer;
    return;
}

function squareRoot() {
    finalAnswer = Math.sqrt(eval(currentMath));
    viewScreen.innerText = finalAnswer;
    return;
}

function equalButton() {
        finalAnswer = eval(currentMath);
        viewScreen.innerText = finalAnswer;
        return;
}

function clearButton() {
    currentMath = '';
    showCurrentMath()
    return;
}
