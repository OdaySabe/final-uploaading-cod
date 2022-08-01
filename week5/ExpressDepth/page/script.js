const src = $("#tamplete").html();
const temp = Handlebars.compile(src);

function render() {
  $(".container").empty();
  const src = $("#tamplete").html();
  const temp = Handlebars.compile(src);
  $.get("/wonder", function (res) {
    const newHTML = temp({ wonder: res });
    $(".container").append(newHTML);
  });
}
$("#clk").on("click", function () {
  $.post(
    "/wonder",
    {
      name: "new wonder",
      location: "philippinse",
      visited: false,
    },
    function (res) {
      console.log("POST Done");
      render();
    }
  );
});
$("#up").on("click", function () {
  $.ajax({
    method: "PUT",
    url: `/wonder/${$("#ipdate").val()}`,
    data: { name: $("#ipdate").val(), newName: "ohh!" },
    success: (res) => {
      console.log(res);
      render();
    },
  });
});
render();
