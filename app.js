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
const numButs = document.querySelectorAll('.numberBtn');
const opButs = document.querySelectorAll('.operatorBtn');
const equalBut = document.getElementById('equals');
const clearBut = document.getElementById('clearBtn');
const viewScreen = document.getElementById('viewScreen');



let currentMath = '';
let finalAnswer = null;
/// EVENT LISTENERS HERE ///

for (let i = 0; i<strButs.length; i++) {
    strButs[i].addEventListener('click', () => {
        currentMath = `${currentMath}${strButs[i].id}`;
        console.log(strButs[i].id);
        console.log(currentMath);
        showCurrentMath()
        return;
    })
}

equalBut.addEventListener('click', () => {
    finalAnswer = eval(currentMath);
    console.log(finalAnswer);
    viewScreen.innerText = finalAnswer;
    return;
})

clearBut.addEventListener('click', () => {
    currentMath = '';
    showCurrentMath()
    return;
})

/// FUNCTIONS HERE ///

function showCurrentMath() {
    viewScreen.innerText = currentMath;
}


