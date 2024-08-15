"use strict";
var userscore = 0;
var compscore = 0;
var choices = document.querySelectorAll(".choice");
var compChoice;
var innerText;
var userchoice;

var uScore = document.getElementById("user-value");
var cScore = document.getElementById("comp-value");
//targeting all choices of user
choices.forEach(choice => {
  console.log(choice);
  choice.addEventListener("click", () => {
    userchoice = choice.getAttribute("id");
    console.log("user choice is " + userchoice);
    computerChoice(compChoice, userchoice);
    showResult();
  });
});
//random choice for computer
function computerChoice() {
  innerText = ["rock", "papper", "scissor"];
  compChoice = innerText[Math.floor(Math.random() * 3)];
  console.log("computer choice is " + compChoice);
}

let trigger = 0;

var msg = document.getElementById("msg");
var msgcont = document.getElementById("msg-container");
//function for comparing and showing result both;
function showResult() {
  if (compChoice == userchoice) {
    msg.innerText = "Draw! play again😊";
    msgcont.style.backgroundColor = "#000";
  } else {
    if (userchoice == "rock") {
      if (compChoice == "scissor") {
        trigger = 1;
      } else {
        trigger = 0;
      }
      if (trigger == 1) {
        msg.innerText = `You Won!🏅 your ${userchoice} beats ${compChoice}`;
        msgcont.style.backgroundColor = "green";
        uScore.innerText = ++userscore;
        // console.log(userscore);
      } else {
        msg.innerText = `You lose!😰${compChoice} beats your ${userchoice}`;
        msgcont.style.backgroundColor = "red";
        cScore.innerText = ++compscore;
        // console.log(compscore);
      }
    } else if (userchoice == "papper") {
      if (compChoice == "rock") {
        trigger = 1;
      } else {
        trigger = 0;
      }
      if (trigger == 1) {
        msg.innerText = `You Won!🏅 your ${userchoice} beats ${compChoice}`;
        msgcont.style.backgroundColor = "green";
        uScore.innerText = ++userscore;
        // console.log(userscore);
      } else {
        msg.innerText = `You lose!😰  ${compChoice} beats your ${userchoice}`;
        msgcont.style.backgroundColor = "red";
        cScore.innerText = ++compscore;
        // console.log(compscore);
      }
    } else if (userchoice == "scissor") {
      if (compChoice == "papper") {
        trigger = 1;
      } else {
        trigger = 0;
      }
      if (trigger == 1) {
        msg.innerText = `You Won!🏅 your ${userchoice} beats ${compChoice}`;
        msgcont.style.backgroundColor = "green";
        uScore.innerText = ++userscore;
        // console.log(userscore);
      } else {
        msg.innerText = `You lose!😰  ${compChoice} beats your ${userchoice}`;
        msgcont.style.backgroundColor = "red";
        cScore.innerText = ++compscore;
        // console.log(compscore);
      }
    }
  }
}
