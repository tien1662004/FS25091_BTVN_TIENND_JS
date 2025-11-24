function printPrimeNumber(n) {
  let result = "";

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result += i + " ";
  }
  console.log(result.trim());
}
let n = Number(prompt("Nhập số n:"));
printPrimeNumber(n);
