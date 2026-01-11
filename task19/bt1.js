const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = Object.fromEntries(new FormData(form));
  const { num1, num2, op } = payload;

  if (!num1.trim().length) {
    alert("ô đầu nhất không được để trống");
    return;
  }

  if (!num2.trim().length) {
    alert("ô thứ hai không được để trống");
    return;
  }

  if (!op) {
    alert("Vui lòng chọn phép tính");
    return;
  }

  const a = Number(num1);
  const b = Number(num2);

  if (op === "/" && b === 0) {
    alert("Không thể chia cho 0");
    return;
  }

  let result;
  if (op === "+") result = a + b;
  if (op === "-") result = a - b;
  if (op === "*") result = a * b;
  if (op === "/") result = a / b;

  alert("Kết quả là: " + result);
});
