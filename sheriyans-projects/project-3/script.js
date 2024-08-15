"use strict";
let con = document.querySelector("#container");
let icon = document.querySelector(".ri-heart-3-fill");
con.addEventListener("dblclick", function () {
  console.log("yes");

  icon.style.transform = "translate(-50%,-50%) scale(1)";
  icon.style.opacity = 0.8;
  setTimeout(() => {
    // icon.style.transform = "translate(-50%,-50%) scale(0)";
    icon.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    icon.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
});
