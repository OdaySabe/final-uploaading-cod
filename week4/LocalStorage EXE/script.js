let wisdom = JSON.parse(localStorage.localStorageWisdom || "[]");
const deleteClickedItem = function (item) {
  $(`#${item}`).on("click", function () {
    wisdom.splice($(this).attr("id"), 1);
    $(this).next().remove();
    $(this).remove();
    localStorage.localStorageWisdom = JSON.stringify(wisdom);
  });
};
window.onload = function () {
  wisdom.forEach((a) => {
    $("body").append(
      `<a class="element" id=${wisdom.indexOf(a)}>X</a> <a> ${a.text}</a> <br>`
    );
    deleteClickedItem(wisdom.indexOf(a));
  });
};
$("#btn").on("click", function () {
  $("body").append(
    `<a class="element" id=${wisdom.length}>X</a> <a> ${$(
      "#txt"
    ).val()}</a> <br>`
  );
  deleteClickedItem(wisdom.length);
  wisdom.push({ text: $("#txt").val() });
  if (wisdom.length != 0 && wisdom.length % 2 == 0) {
    localStorage.localStorageWisdom = JSON.stringify(wisdom);
  }
});
$("#CR").on("click", function () {
  localStorage.clear();
});
