const loadDepartments = require('./departments');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log (data);
};

const errorFunction = function () {
  console.error('something is wrong!');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

module.exports = {
  initializer,
};
