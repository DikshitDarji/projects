"use strict";
var score = 0;
var bubbles = "";
var rn = 0;
var hitrn = 0;
var timer = 60;
var guess = "";
var clickedNum;
function bubbleMaker() {
  for (let i = 1; i <= 25; i++) {
    rn = Math.floor(Math.random() * 6);
    bubbles += `<div class="bubble">${rn}</div>`;
    document.querySelector("#pbtm").innerHTML = bubbles;
  }
}
bubbleMaker();
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerBox").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = " ";
    }
  }, 1000);
}
runTimer();

function increaseScore() {
  score += 10;
  document.querySelector("#scoreBox").textContent = score;
}
function decreaseScore() {
  score -= 5;
  document.querySelector("#scoreBox").textContent = score;
}
function getNewGuess() {
  hitrn = Math.floor(Math.random() * 6);
  //   console.log(hitrn);
  guess = document.querySelector("#guessBox").textContent = hitrn;
}
getNewGuess();

document
  .querySelector("#pbtm")
  .addEventListener("click", function (Bubbletouch) {
    clickedNum = Number(Bubbletouch.target.textContent);
    if (clickedNum === hitrn) {
      increaseScore();
      getNewGuess();
    } else {
      decreaseScore();
      if (score < 0) {
        score = 0;

        document.querySelector("#scoreBox").textContent = score;
      }
    }
    Bubbletouch.target.style.color = "rgb(57, 74, 57)";
    Bubbletouch.target.style.backgroundColor = "transparent";
    Bubbletouch.target.style.transitionDuration = "0.7";
  });
