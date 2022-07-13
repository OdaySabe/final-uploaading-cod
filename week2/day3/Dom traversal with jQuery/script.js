$(".remove").on("click", function () {
  const postData = $(this).closest(".post").data().id;
  if (postData) alert(postData);
});
////////////////////////////////////
$("button").on("click", function () {
  let relevantInputValue = $(this).closest("div").find("input").val();
  if (relevantInputValue) alert(relevantInputValue);
});
$("button").on("click", function () {
  const spanBrotherElwmwnt = $(this).closest("div").find("span");
  if (spanBrotherElwmwnt) alert(spanBrotherElwmwnt.text());
});
$("button").on("click", function () {
  const findParagraph = $(".container").find("p").text();
  if (findParagraph) alert(findParagraph);
});
