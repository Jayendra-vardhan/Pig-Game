'use strict';

//selecting elements
/*********************************************************/
const diceEl= document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const btnNew= document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const score0El= document.querySelector('#score--0');
const current0El= document.getElementById('current--0');
const player0= document.querySelector('.player--0');
const score1El= document.getElementById('score--1');
const current1El= document.getElementById('current--1');
const player1= document.querySelector('.player--1');
let score=[0,0];
let currrentScore=0;
let activePlayer=0;
/*****************************************************/


//Functions
/*****************************************************/
function winner(){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    btnRoll.removeEventListener('click',rollDice);
    btnHold.removeEventListener('click',setScore);
}
//checkwinner
function checkwinner(){
    if(score[activePlayer]>=100){
        winner();
    }
    else{
        switchPlayer(); 
    }
}
//active player
function switchPlayer(){
    currrentScore=0;
    if(activePlayer===0){
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        current0El.textContent=0;
        activePlayer=1;
    }
    else{
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
        current1El.textContent=0;
        activePlayer=0;
    }
};

//Counting Scores
function currentScoreCount(earnedScored) {
    currrentScore+=earnedScored;
    document.getElementById(`current--${activePlayer}`).textContent=currrentScore;
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
        switchPlayer();
    }
    else{
        currentScoreCount(diceNum);
    }
    //console.log(`score:${currrentScore}`,activePlayer+1);
};

//setting current score
function setScore(){
    score[activePlayer]+=currrentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    checkwinner();
}

//new game function
function newGame(){
    current0El.textContent=0;
    current1El.textContent=0;
    score0El.textContent=0;
    score1El.textContent=0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    activePlayer=0;
    currrentScore=0;
    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    //when new game button is hit
    btnNew.addEventListener('click',newGame);

    //when the dice is rolled
    btnRoll.addEventListener('click',rollDice);

    //when hold button is clicked
    btnHold.addEventListener('click',setScore);
}newGame();