const outPutDiv = document.getElementById ('departments');

const domString = (departments) => {
  let strang = '';
  departments.forEach((department) => {
    strang += `<div class = "col-md-3 department">`;
    strang += `<h3 class = "hide">${department.name}</h3>`;
    strang += `<img class="department-img" src ="${department.img}">`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (departments) => {
  outPutDiv.innerHTML = domString(departments);
};

module.exports = printToDom;
