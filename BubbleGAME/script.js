"use strict";
var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
  var clutter = "";
  for (var i = 1; i < 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = " ";
    }
  }, 1000);
}
runTimer();
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
  // console.log(document.querySelector("#hitVal").textContent);
}
getNewHit();

function increaseScore() {
  score += 10;
  document.querySelector("#ScoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  // console.log(dets.target.textContent);
  if (clickedNum == hitrn) {
    increaseScore();
    getNewHit();
    makeBubble();
    // console.log(clickedNum === hitrn);
  }
});
