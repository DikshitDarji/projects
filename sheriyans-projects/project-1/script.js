"use strict";

let add = document.querySelector("#add");
let remove = document.querySelector("#rmv");
let text = document.querySelector("h2");
add.addEventListener("click", function () {
  text.style.color = "green";
  text.textContent = "Friend";
});
rmv.addEventListener("click", function () {
  text.style.color = "red";
  text.textContent = "stranger";
});
