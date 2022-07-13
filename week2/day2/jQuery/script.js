const test = $("#head");
console.log(test);
const myjQuery = function (selector) {
  if (selector[0] == "#") {
    return document.getElementById(selector.split("#")[1]);
  }
};
console.log(myjQuery("#head"));
$("h4").css("color", "red");
$("h1").css("color", "blue");
$(".red-div").css("color", "red");
$("#brown-div").css("color", "brown");
$("li:first-child").css("color", "green");
$("li:last-child").css("color", "pink");
$("#b1").addClass("box");
$("#b2").addClass("box");
$("#in").val("Terabyte");
console.log($("#b1").data().color);
$("#data").data().barcode = 311192;
$("#data").data().expirationDate = "18-02-2030";
console.log($("#data").data().barcode, $("#data").data().expirationDate);
$("#btn").on("click", function () {
  console.log("you clicked the bottom");
});
$("#btn").hover(function () {
  $("#btn").css("background-color", "red");
});

$("#tt").click(function () {
  alert($("#my-input").val());
});

$(".box").hover(function () {
  $(this).css("background-color", "red");
});
const DyEl = "<h1> hey </h1> <p>how are you</p>";
const el = $(DyEl);
console.log(el);
$("body").append(el);

$(".feedme").on("click", function () {
  let copy = `<div class=feedme> ${$(this).text()} </div>`;
  $(this).append(copy);
});
const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" },
];
for (let name of names) {
  $("body").append(`<div class="toRemove">${name.first} ${name.last}</div>`);
}
$(".feedme").hover(function () {
  $(".toRemove").remove();
});

$("#bb").on("click", function () {
  $("#blogs").append(`<div class=blog>brand new div</div>`);
});
$("#blogs").on("click", ".blog", function () {
  $(this).text("blargh");
});
//////////////////
const makeDiv = function () {
  $("#mainDiv").append(`<div class="Xbox"></div>`);
};
$("#addingDiv").on("click", function () {
  makeDiv();
});
$("#mainDiv").on("click", ".Xbox", function () {
  alert("hi");
});
