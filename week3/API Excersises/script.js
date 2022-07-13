const handleRequest = function (request) {
  console.log(request.items[0].volumeInfo.title);
};
const handleRequestv2 = function (request) {
  for (item of request.items) {
    console.log("title is " + item.volumeInfo.title);
    for (author in item.volumeInfo.authors) {
      console.log("author is " + item.volumeInfo.authors[author]);
    }
    if (item.volumeInfo.industryIdentifiers) {
      for (isbn of item.volumeInfo.industryIdentifiers) {
        console.log("ISBN is " + isbn.identifier);
      }
    }
  }
};
const fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: handleRequest,
  });
};
const fetchv2 = function (type, value) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`,
    success: handleRequestv2,
  });
};
$("body").on("click", function () {
  console.log("===================");
});
$("body").on("click", fetch(9789814561778));

$("body").on(
  "click",
  fetchv2("title", "How to Win Friends and Influence People")
);
$("body").on("click", fetchv2("isbn", "9789814561778"));
const fetching = function (input) {
  $.get(
    `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`,
    function (gifs) {
      //console.log(gifs.data[0].embed_url)
      $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`);
    }
  );
};

$(".submit").on("click", function () {
  let input = $("#yourgif").val();
  console.log(input);
  fetching(input);
});
