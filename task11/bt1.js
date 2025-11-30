const numbers = [2, 15, 30, 55, 60, 77, 90];
function findNearest(arr, x) {
  if (arr.length === 0) return null;
  let nearest = arr[0];
  let min = Math.abs(arr[0] - x);

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - x);
    if (diff < min) {
      min = diff;
      nearest = arr[i];
    }
  }
  return nearest;
}
console.log(findNearest(numbers, 58));
console.log(findNearest(numbers, 5));
console.log(findNearest(numbers, 62));
console.log(findNearest(numbers, 57));
