"use strict";

//  Selecting Elemnets
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [ 0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function (){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
       activePlayer = activePlayer === 0 ? 1 : 0;
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden"); //hides the image dice;

//roling dice functionality
btnRoll.addEventListener('click', function(){
  if(playing){
  //Generating a Random dice
  const dice = Math.floor(Math.random() * 6) + 1;

  //Display the dice
  diceEl.classList.remove('hidden')// displays the dice
  diceEl.src = `dice-${dice}.png`;// displays dice number accord to the dice number, this is a trick
 
  //chck for rolled 1
  if(dice !== 1){
    //Add dice to currnt score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // current0El.textContent = currentScore; // change later
  }else {
    // switch to next player
    switchPlayer()
  }
  }
});

btnHold.addEventListener('click',function(){
  if(playing){
  //Add current score to active players's  score
  scores[activePlayer] += currentScore;
  //scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


  // check if players score is >=100
      if (scores[activePlayer] >= 20){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      }else {
        //switch player
        switchPlayer();
      }

    }
})

btnNew.addEventListener('click', function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

})
