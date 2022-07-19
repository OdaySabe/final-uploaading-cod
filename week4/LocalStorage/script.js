localStorage["PhoneNumber"] = "0597469309";
localStorage.personalData = JSON.stringify({
  averageTimeOnSite: { unit: "hr", amt: 9 },
  probabilityOfFriends: 0.02,
  commonKeywords: ["salsa for one", "1 vs. none Chess"],
});
let userStorage = {
  darkMode: true,
  showSideNav: false,
  defaultResultCount: 9,
  latestMarks: {
    sectionA: 92,
    sectionB: 11,
  },
  cart: [
    { id: 3112, count: 2 },
    { id: 812, count: 16 },
  ],
};
localStorage.userStorage = JSON.stringify(userStorage);
console.log(
  JSON.parse(localStorage.userStorage).cart[
    JSON.parse(localStorage.userStorage).cart.length - 1
  ].count
);
