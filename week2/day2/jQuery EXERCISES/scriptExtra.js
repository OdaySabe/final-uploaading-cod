$("span").addClass("picker");

$("#colors").on("mouseover", ".picker", function () {
  $(this).css("background-color", `${$(this).data().color}`);
  $(".box").css("background-color", `${$(this).data().color}`);
});
const children = $("#colors").children();
for (child of children) {
  console.log(child);
  $(child).css("background-color", `${$(child).data().color}`);
}
window.x = 100;

const koo = function () {
  const moo = {
    x: 9,
    printX: () => {
      console.log("x is: ", this.x);
    },
  };
  moo.printX();
};

let obj = {
  x: 7,
};
obj.koo = koo;
obj.koo();
koo();
