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

let scores, currentScore, activePlayer, playing; // this is the method of declarig empty varibales and they are currently called global scoped variables as they can be accessed in the functions as well through out the file.

//intialise values
const init = function () {
  //after declaring this function whatnreally happened is that things stopeed working because all the state variables are now in the function and therefore they can be called outside the function so what do we do is that we declare them outside, as declaring the variable and assigning a variable is different
  scores = [0, 0];
  currentScore = 0; //state variable which holds some sort of information
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
// let scores = [0, 0];
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");
// let currentScore = 0; //state variable which holds some sort of information
// let activePlayer = 0;
// let playing = true;

btnRoll.addEventListener("click", function () {
  if (playing) {
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
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add current score to active players scores
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore; this is what is happenig  in the above line there
    //setting scores based on activePlayer
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //when score is >100
    if (scores[activePlayer] >= 20) {
      //finsh the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("playerActive");
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   player0El.classList.remove("player--winner");
//   player1El.classList.remove("player--winner");
//   player0El.classList.add("player--active");
//   player1El.classList.remove("player--active");
