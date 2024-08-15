const add = document.querySelector("#add");
const text = document.querySelector("h2");
let value = Number(1);
add.addEventListener("click", function () {
  value++;
  console.log(value);
  if (value % 2 !== 0) {
    add.textContent = "add friend";
    add.style.backgroundColor = "rgb(109, 109, 202)";
    // add.style.backgroundColor = grey";
    text.textContent = "stranger";
    text.style.color = "red";
  } else {
    add.textContent = "remove";
    add.style.backgroundColor = "grey";
    text.textContent = "friend";
    text.style.color = "green";
  }
});
