var arr = [1, 2];
Array.prototype.toString.call(arr); //(1)
Object.prototype.toString.call(arr); //(2)
arr.toString(); //1,2

arr.toString = function () {
  return this.join("_");
};

arr.toString(); //1_2
