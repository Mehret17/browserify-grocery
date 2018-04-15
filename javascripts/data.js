let departments = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentArray) => {
  departments = departmentArray;
};

module.exports = {
  getDepartments,
  setDepartments,
};
