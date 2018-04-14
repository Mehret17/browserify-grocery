const events = require('./events');
const outPutDiv = document.getElementById ('departments');

const domString = (departments) => {
  let strang = '';
  departments.forEach((department) => {
    strang += `<div class = "col-md-3 department">`;
    strang += `<h3 class = " department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    strang += `<img class="department-img" src ="${department.img}">`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (departments) => {
  outPutDiv.innerHTML = domString(departments);
  events.addDepartmentEvents();
};

module.exports = printToDom;
