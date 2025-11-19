function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(3, 4, 7)); // false
console.log(isTriangle(9, 8, 7));
console.log(isTriangle(3, 5, 9));

let a = parseFloat(window.prompt(" a:"));
let b = parseFloat(window.prompt(" b:"));
let c = parseFloat(window.prompt(" c:"));

if (isTriangle(a, b, c)) {
    alert("true");
} else {
    alert("false");
}