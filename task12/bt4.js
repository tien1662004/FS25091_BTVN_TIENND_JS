function removeDuplicates(arr) {
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// ["a", "b", "c"]

console.log(removeDuplicates([]));
// []
