const reservation = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function (user) {
  user = user.toLowerCase();
  user = user.charAt(0).toUpperCase() + user.substring(1, user.length);
  console.log(user);
  let userName = user;
  if (reservation[user]) {
    user = reservation[user];
    if (user.claimed) {
      console.log("welcome Mr " + userName);
    } else {
      console.log("Sorry Mr " + userName + " this not claimed");
    }
  } else {
    console.log(
      "Sorry Mr " + userName + " there is no reservation and we will add you"
    );
    user = {
      claimed: true,
    };
    reservation[user] = user;
    console.log(
      "we added " + userName + " and sit claimed to " + user["claimed"]
    );
  }
};

const ball = document.getElementById("ball");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
leftArrow.onclick = function () {
  let value = parseInt(ball.style.right) || 0;
  ball.style.right = value + 15 + "px";
};
rightArrow.onclick = function () {
  let value = parseInt(ball.style.left) || 0;
  ball.style.left = value + 15 + "px";
};
upArrow.onclick = function () {
  let value = parseInt(ball.style.bottom) || 0;
  ball.style.bottom = value + 15 + "px";
};
downArrow.onclick = function () {
  let value = parseInt(ball.style.top) || 0;
  ball.style.top = value + 15 + "px";
};
//////////////////////////////

document.getElementById("btm").onclick = function () {
  checkReservation(document.getElementById("input").value);
};
