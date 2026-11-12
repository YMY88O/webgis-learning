let score2 = 59;
let result = score2 >= 60 ? '及格' : '不及格';
console.log(result);
let day = 6;
switch (day) {
  case 1:
    console.log('周一');
    break;
  case 2:
    console.log('周二');
    break;
  case 3:
    console.log('周三');
    break;
  case 4:
    console.log('周四');
    break;
  case 5:
    console.log('周五');
    break;
  case 6:
    console.log('周六');
    break;
  case 7:
    console.log('周日');
    break;
  default:
    console.log('输入错误');
    break;
}
let n = 1;
while (n <= 10) {
  if (n === 3) {
    n++;
    continue;
  } else if (n > 7) {
    break;
  }
  console.log(n);
  n++;
}
