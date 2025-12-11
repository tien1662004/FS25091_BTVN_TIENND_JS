const orders = [
  {
    id: 1,
    items: [
      { product: "A", qty: 2, price: 100 },
      { product: "B", qty: 1, price: 200 },
    ],
  },
  {
    id: 2,
    items: [
      { product: "A", qty: 1, price: 100 },
      { product: "C", qty: 4, price: 50 },
    ],
  },
];

const revenue = orders.reduce((acc, order) => {
  order.items.reduce((acc2, item) => {
    const money = item.qty * item.price;

    if (!acc2[item.product]) {
      acc2[item.product] = money;
    } else {
      acc2[item.product] += money;
    }
    return acc2;
  }, acc);

  return acc;
}, {});

console.log(revenue);
