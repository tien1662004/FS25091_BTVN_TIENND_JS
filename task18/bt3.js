const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "samsung", price: 200000 },
  { id: 3, name: "nokia", price: 500000 },
];

let cart = [];

const productTable = document.querySelector("#product_table tbody");
products.forEach((product, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML = /*html*/ `
  <td>${index + 1}</td>
  <td>${product.name}</td>
  <td>${product.price.toLocaleString()}</td>
  <td>
  <div class="add-to-cart-container">
    <input type="number" value="1" min="1" class="quantity-input">
    <button class="add-to-cart">Thêm</button>
  </div>
</td>
  `;
  tr.querySelector(".add-to-cart").onclick = function () {
    const quantity = parseInt(tr.querySelector(".quantity-input").value);
    addToCart(product, quantity);
  };

  productTable.appendChild(tr);
});

function addToCart(product, quantity) {
  const item = cart.find((i) => i.id === product.id);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }

  renderCart();
}
function renderCart() {
  const cartDiv = document.getElementById("cart_data");

  if (cart.length === 0) {
    cartDiv.innerHTML = "";
    return;
  }

  let total = 0;

  let html = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
  `;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    html += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()} đ</td>
        <td>
          <button class="quantity-btn" onclick="changeQty(${index}, -1)">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQty(${index}, 1)">+</button>
        </td>
        <td>${itemTotal.toLocaleString()} đ</td>
        <td>
          <button class="remove-from-cart" onclick="removeItem(${index})">
            Xóa
          </button>
        </td>
      </tr>
    `;
  });
  html += `
  </tbody>
</table>
<div class="cart-total">
  Tổng tiền: ${total.toLocaleString()} đ
</div>
`;
  cartDiv.innerHTML = html;
}
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
