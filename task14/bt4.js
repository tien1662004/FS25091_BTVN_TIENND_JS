function sortArrNumber(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
}
const number = [4, 2, 7, 6, 5, 8, 2, 1];
const result = sortArrNumber(number);

console.log(result);
