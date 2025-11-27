function countWords(str) {
  // 1. Xóa khoảng trắng đầu và cuối
  str = str.trim();

  // 2. Nếu rỗng thì trả về 0
  if (str === "") return 0;

  // 3. Thay mọi dãy khoảng trắng (space, tab, newline...) thành 1 space
  // \s+ nghĩa là "một hoặc nhiều ký tự khoảng trắng"
  str = str.replace(/\s+/g, " ");

  // 4. Tách theo space và đếm phần tử
  return str.split(" ").length;
}
console.log(countWords("      thu aby  nom nay  acb yy "));
console.log(countWords("   Hôm  nay   trời đẹp quá   "));
// -> 5
