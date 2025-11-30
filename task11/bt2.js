const products = [
  { id: 1, title: "product A", price: 200 },
  { id: 2, title: "product B", price: 300 },
  { id: 3, title: "product C", price: 400 },
  { id: 4, title: "product D", price: 500 },
];

const card = [];
function addToCard(card, product) {
  for (let i = 0; i < card.length; i++) {
    if (card[i].id === product.id) {
      card[i].quantity++;
      return card;
    }
  }
  card.push({
    ...product,
    quantity: 1,
  });
  return card;
}
function removeFromCart(card, id) {
  for (let i = 0; i < card.length; i++) {
    if (card[i].id === id) {
      if (card[i].quantity > 1) {
        card[i].quantity--;
      } else {
        card.splice(i, 1);
      }
      return card;
    }
  }
  return card;
}
function getTotal(card) {
  let total = 0;
  for (let i = 0; i < card.length; i++) {
    total += card[i].price * card[i].quantity;
  }
  return total;
}
//
addToCard(card, products[0]);
addToCard(card, products[2]);
addToCard(card, products[2]);
addToCard(card, products[3]);
addToCard(card, products[3]);
console.log(card);
//
removeFromCart(card, 1);
removeFromCart(card, 3);
console.log(card);
//
const price = getTotal(card);
console.log(price);
