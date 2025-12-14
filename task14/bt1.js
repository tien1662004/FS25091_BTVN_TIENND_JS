Array.prototype.map2 = function (callback) {
  const result = [];
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1);
console.log(result1.length);

const arr2 = [1, , , , 5];
const result2 = arr2.map2((value) => value * 2);

console.log(result2);
console.log(result2.length);
