const container = document.getElementById("container");
const docRandomColor = function (doc) {
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += convertHexa(getRandom(16));
  }
  doc.style.backgroundColor = "#" + color;
};
function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
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

container.onmouseover = function () {
  docRandomColor(this);
};
for (let i = 0; i < 9; i++) {
  let box = container.cloneNode(true);
  box.setAttribute("id", "box" + i);
  box.setAttribute("class", "boxS");
  document.getElementById("body").appendChild(box);
  box.onmouseover = function () {
    docRandomColor(this);
  };
}
container.onclick = function () {
  let count = 0;
  while (document.getElementById("box" + count) != undefined) {
    docRandomColor(document.getElementById("box" + count));
    count += 1;
  }
};
container.lastElementChild.onclick = function () {
  let finalMessage = container.children[container.children.length - 2];
  finalMessage.innerHTML = "";
  if (container.children[1].value.length < 2) {
    finalMessage.innerHTML = "name is missing ";
    return;
  } else if (
    !(
      container.children[3].value >= 10000 &&
      container.children[3].value <= 16000
    )
  ) {
    finalMessage.innerHTML = "salary must be between 10000 to 16000 ";
    return;
  } else if (container.children[5].value == "") {
    finalMessage.innerHTML = "plase enter your birthday ";
    return;
  } else if (container.children[7].value.length != 10) {
    finalMessage.innerHTML = "enter a write phone number ";
    return;
  }
  finalMessage.innerHTML = "all values are correct ";
};
