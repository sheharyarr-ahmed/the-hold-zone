"use strict";
//specifying variables
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //change the currentScore of player 0 to zero after geeting a dice 1
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //switch the player to 1
  player0El.classList.toggle("player--active"); //adding the darker shade to active player
  player1El.classList.toggle("player--active");
};

//intialise values
let scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0; //state variable which holds some sort of information
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  //functionality of rolling dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  // appearing of dice after rolling
  diceEl.classList.remove("hidden");
  diceEl.src = `imgs/dice-${dice}.png`;
  console.log(dice);

  //   if dice is not rolled 1
  if (dice !== 1) {
    currentScore += dice; //add score to player 1 score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // adding score to active player 0
  } else {
    //the whole switch to nextPlayer logic
    //if dice comes 1
    //     document.getElementById(`current--${activePlayer}`).textContent = 0; //change the currentScore of player 0 to zero after geeting a dice 1
    //     currentScore = 0;
    //     activePlayer = activePlayer === 0 ? 1 : 0; //switch the player to 1
    //     player0El.classList.toggle("player--active"); //adding the darker shade to active player
    //     player1El.classList.toggle("player--active");
    //   }
    // });
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  //add current score to active players scores
  scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore; this is what is happenig  in the above line there
  //setting scores based on activePlayer
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //when score is >100

  //switch to next player
  switchPlayer();
});
