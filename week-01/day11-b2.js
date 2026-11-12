const square = function (x) {
  return x * x;
};
console.log(square(9));
const addArrow = function (x, y) {
  return x + y;
};
console.log(addArrow(3, 4));
const timesArrow = (x, y) => x * y;
console.log(timesArrow(3, 4));
function makeLabel(text = '未命名', num = 1) {
  return text + '-' + num;
}
console.log(makeLabel('图们', 2));
