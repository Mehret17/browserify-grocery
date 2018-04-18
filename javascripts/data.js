let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentArray) => {
  departments = departmentArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);// goes through that new array and asks the position it gives it the same position as the previous one
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;// adding a new key value pair
  console.log ('itemPosition', newItem);
  cart.push(newItem);
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
};
