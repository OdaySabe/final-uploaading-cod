var validator = require("validator");
console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("786-329-9958", ["en-US"]));
console.log(
  validator.blacklist("I'M SO EXCITED!!!~!", [
    "!",
    "?",
    ".",
    "@",
    "~",
    ",",
    "'",
  ])
);
const faker = require("@faker-js/faker");
const randomName = faker.name.findName();
