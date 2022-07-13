let people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];
const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)}`;
  summary += " " + sentanceWrapped(person.profession);
  summary += "from " + countryWrapped(person.city, person.country) + ". ";
  summary +=
    capitalize(person.name) +
    " loves to say " +
    catchphraseWrapped(person.catchphrase);
  return summary;
};
const capitalize = function (str) {
  let result = "";
  result += str.charAt(0).toUpperCase();
  result += str.slice(1);
  return result;
};
const getAge = function (number) {
  let result = "";
  if (number <= 21) {
    return (result = "Underage");
  } else if (number >= 55) {
    return (result = "55+");
  } else return (result += number);
};
const countryWrapped = function (city, country) {
  let result = "";
  return (result += capitalize(city) + "," + capitalize(country));
};
const catchphraseWrapped = function (str) {
  let result = "";
  return (result += '"' + capitalize(str) + '"');
};
const sentanceWrapped = function (str) {
  let result = "";
  arry = str.split(" ");
  for (let i = 0; i < arry.length; i++) {
    result += capitalize(arry[i]) + " ";
  }
  return result;
};
console.log(getSummary(people_info[0]));
console.log(getSummary(people_info[1]));
console.log(getSummary(people_info[2]));
