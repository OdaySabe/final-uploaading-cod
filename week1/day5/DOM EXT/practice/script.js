const box = document.getElementById("bt");
const list = document.getElementById("father");
box.on;
const enter = function () {
  box.style.backgroundColor = "red";
  box.innerHTML = "AHH GO AWAY";
};
const leave = function () {
  box.style.backgroundColor = "aqua";
  box.innerHTML = "hover over here";
};
const clicking = function () {
  box.style.backgroundColor = "green";
  box.innerHTML = "you clicking";
};
const listAdd = function () {
  const newList = document.createElement("li");
  newList.innerHTML = "New Item!";
  list.appendChild(newList);
};
list.onmouseenter = function () {
  list.style.backgroundColor = "yellow";
};
list.onmouseleave = function () {
  list.style.backgroundColor = "white";
};
