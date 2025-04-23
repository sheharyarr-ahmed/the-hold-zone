"use strict";
//specifying variables
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//intialise values
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0; //state variable which holds some sort of information

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
    current0El.textContent = currentScore; //display score of player 1
  } else {
  }
});
