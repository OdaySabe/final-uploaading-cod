const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!",
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one.",
  },
];

$("#submit").on("click", function () {
  posts.push({
    name: $("#name").val(),
    text: $("#text").val(),
  });
  render();
});
$("#delete").on("click", function () {
  let found = false;
  const val = {
    name: $("#name").val(),
    text: $("#text").val(),
  };
  let count = 0;
  for (i of posts) {
    if (i.name == val.name && i.text == val.text) {
      posts.splice(count, 1);
      found = true;
      break;
    }
    count++;
  }
  if (found) {
    render();
  }
});
function render() {
  for (i of posts) {
    $("body").append(`<div style="margin-top:10px;">${i.name} ${i.text}</div>`);
  }
}
