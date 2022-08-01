itsAdmin = "false";
$("#sub").on("click", function () {
  $.ajax({
    method: "GET",
    url: `/priceCheck/${$("#in").val()}`,
    success: (data) => {
      $("body").append(`<h1>${data.price}</h1>`);
    },
  });
});
$("#buy").on("click", function (admin) {
  console.log(itsAdmin);
  $.ajax({
    method: "GET",
    url: `/buy/${$("#in").val()}`,
    success: (data) => {
      if (itsAdmin === "false") {
        $("body").append(
          `<h1>Congratulations, you’ve just bought ${data.name} for ${data.price}There are ${data.inventory} left now in the store. </h1>`
        );
      } else {
        $("body").append(
          `<h1>Hellow admin, you’ve just bought ${data.name} for ${
            data.price / 2
          } (special price for you admin) There are ${
            data.inventory
          } left now in the store. </h1> <p>admin disabled now</p>`
        );
        itsAdmin = "false";
      }
    },
  });
});
$("#makeADmin").on("click", function () {
  $.ajax({
    method: "GET",
    url: `/sale/?admin=${true}`,
    success: (a) => {
      itsAdmin = a;
      $("body").append("<h1>admin mode now</h1>");
    },
  });
});
