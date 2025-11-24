function printSquareNumber(n) {
  let result = "";

  for (let i = 2; i * i <= n; i++) {
    result += i * i + " ";
  }

  console.log(result.trim());
}
let n = Number(prompt("Nhập số n:"));
printSquareNumber(n);
printSquareNumber(20);
