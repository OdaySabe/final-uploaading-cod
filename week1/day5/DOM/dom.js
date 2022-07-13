let ballPosition = "";
let newPosition = 0;
console.log(document);
const playing_field = document.getElementById("playing-field");
console.log("playing_field elemnt");
console.log(playing_field);
const down = document.getElementById("down");
down.innerHTML = "down";
document.getElementById("down").style.backgroundColor = "red";
console.log("down.innerHTML");
console.log(down);
console.log("playing_field innerHTML");
console.log(playing_field.innerHTML);
const ball = document.getElementById("ball");
ball.style.backgroundColor = "yellow";
////////////////

const pushBallLeft = function () {
  const balle = document.getElementById("ball");
  if (ballPosition == "") {
    document.getElementById("ball").style.left = "15px";
    ballPosition = 15 + "";
    newPosition = 15;
  } else {
    newPosition = parseInt(ballPosition) + 15;
    ballPosition = newPosition + "";
  }
  document.getElementById("ball").style.left = ballPosition + "px";
};
const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + "px";
};
function addH1() {
  const header = document.createElement("h1");
  header.innerHTML = "new head added";
  header.style.color = "#c0392b";
  header.style.fontFamily = "Helvetica";
  header.style.marginLeft = "50px";
  document.getElementById("container").appendChild(header);
  header.setAttribute("class", "addH");
}
