function insertNumber(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

const arr = [1, 2, null, NaN, undefined, "Hoang", 0, 1000];
console.log(insertNumber(arr));
