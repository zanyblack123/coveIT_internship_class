let name = "tomiwa";

if (name === "tomiwa") {
  let num = 2 * 3;
  console.log("num", num);
  console.log("name", name);
}

console.log("outside", name);
console.log("outside", num);

function checkName() {
  if (name === "tomiwa") {
    return name;
  }
}

let result = checkname();
//console.log("checkname()", checkName());

//function addnum(a = 3, b = 7) {
//   return a + b;
//}
//let addResult = addnum();
//console.log("addResult", addResult);

const addNum = (a, b) => a + b;

console.log("addNum(2,4)", addNum);
