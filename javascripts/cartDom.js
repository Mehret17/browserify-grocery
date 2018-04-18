const data = require('./data');
// const cartOutPutDiv = document.getElementById('cart');

const printCartToDom = () => {
  const cartItems = data.getCart();
  console.log('cartItems', cartItems);

};

module.exports = printCartToDom;
