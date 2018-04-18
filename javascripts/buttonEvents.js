const dataGateKeeper = require('./dataGateKeeper');

const goToDepartments = document.getElementById('go-to-departments');
const goToCart = document.getElementById('go-to-cart');
const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');

const cartButton = () => {
  goToCart.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
  });
};

const departmentButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGateKeeper.initializer();
  });
};

module.exports = {
  departmentButton,
  cartButton,
};
