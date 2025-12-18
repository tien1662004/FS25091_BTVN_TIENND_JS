const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((acc, item) => {
    const stringSplit = item.split(":");
    // console.log(stringSplit);
    const key = stringSplit[0];
    const value = stringSplit[1];
    // console.log(value);
    acc[key] = value;
    // console.log(key);
    return acc;
  }, {});
}

console.log(convertArrayToObject(arrayString));
