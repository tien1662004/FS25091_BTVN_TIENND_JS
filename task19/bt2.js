const form = document.getElementById("bill-form");
const resultEl = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = Object.fromEntries(new FormData(form));
  const { totalBill, people, tip } = payload;
  if (!totalBill || Number(totalBill) <= 0) {
    alert("tiền bull phải lớn hơn 0");
    return;
  }
  if (!people || Number(people) <= 0 || !Number.isInteger(Number(people))) {
    alert("số người chia bill phải lớn hơn 0 và là số nguyên");
    return;
  }
  if (Number(tip) < 0) {
    alert("tiền tip phải nhỏ hơn hoặc bằng tổng bill");
    return;
  }

  if (Number(tip) > Number(totalBill)) {
    alert("Tiền tip không được lớn hơn  bill");
    return;
  }

  const totalPay = Number(totalBill) + Number(tip);
  const perPerson = totalPay / Number(people);

  resultEl.innerText = `
  Mỗi người trả: ${perPerson.toFixed(2)} VNĐ
  Tổng tiền cần trả: ${totalPay.toFixed(2)} VNĐ
  
  `;
});
