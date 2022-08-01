activeClick = function () {
  data = $("#in").val();
  $.get(`/detailed/${data}`, function (res) {
    $("body").append(`<div>${res}</div>`);
  });
};
