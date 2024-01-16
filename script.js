'use strict';

//selecting elements
/********************************************************/
const diceEl= document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const btnNew= document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const score0El= document.querySelector('#score--0');
const currentScore0= document.getElementById('current--0');
const player0= document.querySelector('.player--0');
const score1El= document.getElementById('score--1');
const currentScore1= document.getElementById('current--1');
const player1= document.querySelector('.player--1');
let score=0,current0=0,current1=0;
let activePlayer=0;
/*****************************************************/


//Functions
/*****************************************************/
//active player
function changeActivePlayer(){
    if(activePlayer===0){
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        score0El.textContent=0;
        activePlayer=1;
    }
    else{
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        score1El.textContent=0;
        activePlayer=0;
    }
};

//new game function
function newGame(){
    score0El.textContent=0;
    score1El.textContent=0;
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    diceEl.classList.add('hidden');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');activePlayer=0;
    score=0;
    current0=0;
    current1=0;
};

//Counting Scores
function scoreCount(earnedScored) {
    score+=earnedScored;
    if(activePlayer===0){
        score0El.textContent=score;
    }
    else{
        score1El.textContent=score;
    }
};

//dice roll function
function rollDice(){
//  1.Generating a random dice roll
    const diceNum = Math.trunc(Math.random()*6)+1;
    console.log(diceNum);

//  2.Displaying dice
    diceEl.src=`Pictures/dice-${diceNum}.png`;
    diceEl.classList.remove('hidden');
    
//  3. checking for 1(for player change)
    if(diceNum===1){
        score=0;
        changeActivePlayer();
    }
    else{
        scoreCount(diceNum);
    }
    console.log(`score:${score}`,activePlayer+1);
};

//setting current score
function setCurrentScore(){
    if(activePlayer===0){
        current0+=score;
        currentScore0.textContent=current0;
        score=0;
        score0El.textContent=0;
        //checkwinner();
    }
    else{
        current1+=score;
        currentScore1.textContent=current1;
        score=0;
        score1El.textContent=0;
        //checkwinner();
    }
}
/**********************************************************/


//Event listeners
/**********************************************************/
//at starting
newGame();

//when the dice is rolled
btnRoll.addEventListener('click',rollDice);

//when the new game is hit
btnNew.addEventListener('click',newGame);

//when hold button is clicked
btnHold.addEventListener('click',function(){
    setCurrentScore();
    changeActivePlayer();
});
/***************************************************************/