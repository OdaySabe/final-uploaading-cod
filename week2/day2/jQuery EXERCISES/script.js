$("#click").on("click", function () {
  $("#list").append(`<li class='listElement'>${$("#input").val()}</li>`);
});
$("#list").on("click", ".listElement", function () {
  $(this).remove();
});
const element = `<div class="box"></div>`;
$("body").append($(element));
$("body").append($(element));
$(".box").css({
  width: "70px",
  height: "70px",
  margin: "10px",
  "background-color": "#8e44ad",
  display: "inline-block",
});

$("body").on("mouseover", ".box", function () {
  $(this).css("background-color", "blue");
});
$("body").on("mouseleave", ".box", function () {
  $(this).css("background-color", "#8e44ad");
});
$("#items").on("click", ".item", function () {
  if ($(this).data().instock) $("#cart").append(`<li>${$(this).text()}</li>`);
});
const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];
for (frute of fruits) {
  $("#basket").append(`<div class='${frute.color}'>${frute.name}</div>`);
}
