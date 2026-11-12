let score1 = 95;
if (score1 >= 90) {
  console.log("优秀");
} else if (score1 >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
function double(n) {
  return n * 2;
}
console.log(double(10));
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7), isPrime(9));
