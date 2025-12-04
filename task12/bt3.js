function findMinMaxAverage(arr) {
  const obj = {
    max: null,
    maxIndex: null,
    min: null,
    minIndex: null,
    primeAverage: null,
  };
  if (arr.length === 0) return obj;
  obj.max = arr[0];
  obj.maxIndex = 0;
  obj.min = arr[0];
  obj.maxIndex = 0;

  let sum = 0;
  let count = 0;

  function isPrime(n) {
    if (n <= 1) return false;
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    //max
    if (value > obj.max) {
      obj.max = value;
      obj.maxIndex = i;
    }
    // min
    if (value < obj.min) {
      obj.min = value;
      obj.minIndex = i;
    }
    // TBSNT
    if (isPrime(value)) {
      sum += value;
      count++;
    }
  }
  // tbc
  if (count > 0) {
    obj.primeAverage = sum / count;
  } else {
    obj.primeAverage = null;
  }
  return obj;
}
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(findMinMaxAverage([5, 5, 2, 2, 1]));
console.log(findMinMaxAverage([-3, 7, -8, 11, 0]));
