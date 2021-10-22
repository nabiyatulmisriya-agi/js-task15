//concat
let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];
let num = num1.concat(num2);
console.log(num);

//foreach without using arrow
let abc = [3, 4, 5, 6];
let combine = abc.forEach(function (item) {
  return console.log(`${item * 2}`);
});
//using arrow
var output1 = abc.forEach((item) => {
  console.log(`${item * 2}`);
});

//index
let index = [1, 2, 3, 4, 5];
console.log(index.indexOf(4, 3));

//map without arrow
let val = [5, 3, 6, 8, 1];
let out = val.map(function (item) {
  return ++item;
});
console.log(out);

//map with arrow
var out1 = val.map((item) => {
  return ++item;
});
console.log(out1);

//filter using arrow
let filt = [2, 4, 6, 8, 9];
let filtout = filt.filter((item) => item % 2 == 0);
console.log(filtout);

//filter without using arrow
var filtout1 = filt.filter(function (item) {
  return item % 2 == 0;
});
console.log(filtout1);

//string
let str = ["gud", ",mrng", "hav", "a", "gud", "day"];
let strout = str.toString();
console.log(strout);

//array
let arr = [1, 2, 3, 4, 5, 5];
let arrout = Array.isArray(arr);
console.log(arrout);
