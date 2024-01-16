'use strict';

//selecting elements
/****************************************/
const diceEl= document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const btnNew= document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const score0El= document.querySelector('#score--0');
const currentScore0= document.getElementById('current--0');
const score1El= document.getElementById('score--1');
const currentScore1= document.getElementById('current--1');
let score=0;
let activePlayer=0;
/*****************************************/

//Functions
//active player
function changeActivePlayer(){

}

//new game function
function newGame(){
    score0El.textContent='0';
    score1El.textContent='0';
    diceEl.classList.add('hidden');
}

//Counting Scores
function scoreCount(earnedScored) {
    score+=earnedScored;

}

//dice roll function
function rollDice(){
//  1.Generating a random dice roll
    const diceNum = Math.trunc(Math.random()*6)+1;
    console.log(diceNum);

//  2.Displaying dice
    diceEl.src=`Pictures/dice-${diceNum}.png`;
    diceEl.classList.remove('hidden');

//  3. checking for 1(for player change)
    if(diceEl===1){
        score=0;
        changeActivePlayer();
    }
    else{
        scoreCount(earnedScored)
    }

}

/***************************************/

//Event listeners
/**************************************/
//at starting
newGame();

//when the dice is rolled
btnRoll.addEventListener('click',rollDice());

//when the new game is hit
btnNew.addEventListener('click',newGame());

//when hold button is clicked
btnHold.addEventListener('click',scoreCount());