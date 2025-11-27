function isPalindrome(str) {
  let cleanStr = str.replace(/\s+/g, "");
  cleanStr = cleanStr.toLowerCase();
  let reversed = cleanStr.split("").reverse().join("");
  return cleanStr === reversed;
}
console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A lo alo"));
console.log(isPalindrome("hhhh"));
