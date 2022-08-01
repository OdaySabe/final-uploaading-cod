const express = require("express");
const bodyP = require("body-parser");
const { send } = require("process");
const router = express.Router();

router.use(bodyP.json());
router.use(bodyP.urlencoded({ extended: false }));

module.exports = router;
let wordCounter = [];
router.get("/sanity", function (req, res) {
  res.send("Server up and running");
});
router.get("/word/:word", function (req, res) {
  let obj = {
    text: req.params.word,
    count: 0,
  };
  wordCounter.push(obj);
  console.log(wordCounter);
  res.send(wordCounter);
});
function isExist(str) {
  bool = false;
  wordCounter.forEach((a) => {
    if (a.text === str) {
      bool = true;
      a.count++;
    }
  });
  return bool;
}
function isExistToDelete(str) {
  bool = false;
  wordCounter.forEach((a) => {
    if (a.text === str) {
      bool = true;
    }
  });
  return bool;
}
router.post("/word/:word", function (req, res) {
  let input = req.params.word.toLowerCase().split(" ");
  for (i = 0; i < input.length; i++) {
    if (isExist(input[i])) {
    } else {
      let obj = {
        text: input[i],
        count: 0,
      };
      wordCounter.push(obj);
    }
  }
  res.send(wordCounter);
});
router.delete("/word/:word", function (req, res) {
  if (isExistToDelete(req.params.word.toLowerCase())) {
    wordCounter.splice(wordCounter.indexOf(req.params.word) - 1, 1);
    console.log("found and deleted");
    res.send(wordCounter);
  } else {
    console.log("not found");
    res.send(wordCounter);
  }
});
router.get("/popular", function (req, res) {
  let mostPOP = { text: "", count: -1 };
  wordCounter.forEach((a) => {
    if (a.count > mostPOP.count) {
      mostPOP.text = a.text;
    }
  });
  res.send(mostPOP.text);
});
