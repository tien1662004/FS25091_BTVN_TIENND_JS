function countWords(str) {

  str = str.trim();
  if (str === "") return 0;
  str = str.replace(/\s+/g, " ");

  return str.split(" ").length;
}
console.log(countWords("      thu aby  nom nay  acb yy "));
console.log(countWords("   Hôm  nay   trời đẹp quá   "));

