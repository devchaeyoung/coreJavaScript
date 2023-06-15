// const array = [1, 2, 3, 4, 5];

// function printNum(num) {
//   console.log(num);
// }

// array.forEach(printNum);
var arr = [1, 2];
Array.prototype.toString.call(arr); //(1)
Object.proptotype.toString.call(arr); //(2)
arr.toString(); //1,2

arr.toString = function () {
  return this.join("_");
};

arr.toString();
const newArr = arr.toString();
console.log(newArr);
