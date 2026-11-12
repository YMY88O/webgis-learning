function sumAll() {
  let total = 0;
  for (let i = 0; i <= arguments.length - 1; i++) {
    total = total + arguments[i];
  }
  return total;
}
console.log(sumAll(2, 5, 8));
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("[2] var:", i);
  }, 0);
}
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("[3] let:", i);
  }, 0);
}
{
  let x = 1;
  console.log("[3]隔间里：", x);
}
{
  let y = 2;
}
// console.log("[3]隔间外：", y);
console.log("[4]赋值前；", v);
var v = 7;
console.log("[4]赋值后：", v);
let score3 = 59;
let verdict = score3 >= 60 ? "及格" : "不及格";
console.log("[1] 三元：", verdict);
let day2 = 3;
switch (day2) {
  case 3:
    console.log("[1] switch: 周三有晚间主学");
    break;
  default:
    console.log("[1]无对应");
}
let n1 = 1;
while (n1 <= 10) {
  if (n1 === 5) {
    n1++;
    continue;
  }
  console.log("[2] while:", n1);
  n1++;
}
let total2 = 0;
for (let i = 1; i <= 20; i++) {
  total2 = total2 + i;
  if (total2 >= 20) {
    console.log("[2] for:", total2);
    console.log("[2] for:", i);
    break;
  }
}
function makeLabel2(a, b) {
  return a + b;
}
console.log("[3] makeLabel2==", makeLabel2(1, 2));
const addArrow2 = function (x, y) {
  return x + y;
};
console.log("[3] addArrow2==", addArrow2(2, 2));
const addArrow3 = (a, b) => a + b;
console.log("[3] addArrow3==", addArrow3(3, 3));
function makeLabel3(text = "未命名", num = 1) {
  return text + "-" + num;
}
console.log("[3] makeLabel3==", makeLabel3("成都", 3));
function sumAll2() {
  let total = 0;
  for ( let i = 0; i <= arguments.length - 1; i++) {
    total = total + arguments[i];
  }
  return total;
}
console.log("[4] arguments:", sumAll(2, 5, 8));
let outer = 1;
{
  let inner = 2;
  console.log("[4] 花括号里:", outer, inner);
  console.log("[4] 提升前:", v);
  var v = 7;
  console.log("[4] 提升后:", v);
}
