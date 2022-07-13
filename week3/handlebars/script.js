var source = $("#testing").html();
var template = Handlebars.compile(source);
var newHTML = template({ test: "testing" });
$("#getIt").append(newHTML);
console.log(template);
classData = {
  classmates: [
    {
      name: "That on gal",
      description: "Always has the ansswer",
      goodStudent: false,
    },
    {
      name: "The weird dude",
      description: "Quick with a smile",
      goodStudent: true,
    },
    { name: "Taylor", description: "Just Taylor", goodStudent: true },
  ],
};
const mySource = $("#studentsTamplete").html();
const newTamp = Handlebars.compile(mySource);
newHTMML = newTamp(classData);
$("#classroom").append(newHTMML);
