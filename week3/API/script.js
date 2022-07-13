$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:0439023521",
  function (result) {
    console.log(result.items[0].volumeInfo.title + " no ajax");
  }
);
const ajaxCallBack = function (request) {
  console.log(request.items[0].volumeInfo.title);
};

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=title:0439023521",
  success: ajaxCallBack,
  error: function (xhr, text, error) {
    console.log(text);
  },
});
