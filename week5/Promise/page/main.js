let promis = $.get("/randomWord", function (res) {});
promis.then((res) => {
  const bookPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${res}`
  );
  const gifPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${res}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`
  );
  Promise.all([gifPromise, bookPromise]).then(function (results) {
    printing(results[0].data[0].embed_url, results[1]);
  });
});
function printing(gif, book) {
  $("#book").text(book);
  $("#img").attr("src", gif);
}
//////////////
// const fetch = function (input) {
//   $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`, function (gifs) {
//       //console.log(gifs.data[0].embed_url)
//       $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
//   })
// }
// $("#submit").on("click", function () {
//   let input = $("#yourgif").val()
//   console.log(input)
//   fetch(input)
// })
