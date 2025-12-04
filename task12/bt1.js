function filterEvenNumbers(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const check = arr[i];
    if (typeof check === "number" && check % 2 === 0) {
      newArr.push(check);
    }
  }
  return newArr;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
console.log(filterEvenNumbers([1, 3, 5, 7, 9]));
console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers([-2, -3, -5, -6, 0, 1, 2, 3, 4]));
