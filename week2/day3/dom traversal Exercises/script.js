let cmp_id = [];
$(".generator").on("click", function () {
  const TheprocessorID = $(this).closest("div").attr("id");
  console.log("The processor ID" + TheprocessorID);
  const TheComputerId = $(this).parent().parent().data().id;
  cmp_id.push({ cmp_id: TheComputerId });
  console.log("The computer ID" + TheComputerId);
  const TheBUSNumber = $(this).parent().parent().find(".BUS").text();
  console.log("The BUS Number " + TheBUSNumber);
});
$(".validator").on("click", function () {
  const TheGeneratorText = $(this)
    .closest(".computer")
    .find("div")
    .find(".generator")
    .text();
  console.log("The Generator Text " + TheGeneratorText);
  const MB = $(this).closest("computer").find(".MB").text();
  console.log("MB " + MB);
  const BothQRs1 = $(this)
    .closest(".computer")
    .find(".processor")
    .find("span:nth-child(1)")
    .text();
  const BothQRs2 = $(this)
    .closest(".computer")
    .find(".processor")
    .find("span:nth-child(2)")
    .text();
  console.log("Both QRs " + BothQRs1 + " " + BothQRs2);
});
