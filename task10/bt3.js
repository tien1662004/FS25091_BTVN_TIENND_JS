function shortNumber(num) {
  if (isNaN(num)) return "";
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }
  return num.toString();
}
console.log(shortNumber(1500000));
console.log(shortNumber(999999));
console.log(shortNumber(12000));
console.log(shortNumber(999));
console.log(shortNumber(12));
