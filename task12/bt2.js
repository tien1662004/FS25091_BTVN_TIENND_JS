function filterLongStrings(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const check = arr[i];
    if (typeof check === "string" && check.length > 5) {
      newArr.push(check);
    }
  }
  return newArr;
}
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"]));
console.log(
  filterLongStrings([
    "hihi",
    "haha",
    "nguyen Dinh Tien",
    "Nguyen Minh Hoang",
    "a",
  ])
);
console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]));
console.log(filterLongStrings(["hi", "bye", "yes"]));
