function reduceTime() {
  setTimeout(function () {
    TimeLeft--;
    renderTime();
  }, 1000);
  return time;
}
function renderTime() {
  Render().renderTimeOut(TimeLeft + " Seconds Left");
  if (TimeLeft != 0) reduceTime();
  if (TimeLeft <= 3) {
    Render().flashTimerForTime(true);
  } else {
    Render().flashTimerForTime(false);
  }
  if (TimeLeft == 0) {
    Render().renderTimeOut(TimeLeft + " Seconds Left");
    Render().pausTheGame();
  }
}
////////RANDOM POSITION/////////
function randomPosition(id) {
  $(`#${id}`).css(`left`, `${getRandom(1400)}px`);
  $(`#${id}`).css(`top`, `${i * 57 + 90}px`);
}

///////////RANDOME COLORS//////////
const docRandomColor = function (doc) {
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += convertHexa(getRandom(16));
  }
  $(doc).css("color", "#" + color);
};
function getRandom(maxValue, minValue = 0) {
  return Math.floor(Math.random() * maxValue) + minValue;
}
function convertHexa(number) {
  if (number == 0) {
    return 0;
  }
  let arr = [];
  let result = "";
  while (number >= 1) {
    arr.push(number % 16);
    number = Math.floor(number / 16);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 10) {
      arr[i] = "A";
    } else if (arr[i] == 11) {
      arr[i] = "B";
    } else if (arr[i] == 12) {
      arr[i] = "C";
    } else if (arr[i] == 13) {
      arr[i] = "D";
    } else if (arr[i] == 14) {
      arr[i] = "E";
    } else if (arr[i] == 15) {
      arr[i] = "F";
    }
    result += arr[i];
  }
  return result;
}
function levelFuntion() {
  clockLefts -= 1;
  if (clockLefts == 0) {
    level += 1;
    clockLefts = level;
    TimeLeft = TimeLeft + 2;
    Render().flashTimerForLevel(true);
    return true;
  }
  return false;
}
//////////RANDOM COLORS////////
