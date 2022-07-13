const Family = function () {
  let members = [];
  const birth = function (name) {
    members.push(name);
    for (i in members) {
      console.log(members[i]);
    }
    console.log("============");
  };
  return birth;
};
const test = Family();
test("oday");
test("omar");
test("saeed");
//////////////////
const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
const ss = mathOperations();
console.log(ss.add(10, 10));
