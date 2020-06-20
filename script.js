console.log("js");
$(readyNow);

let employees = [];

function refreshTable() {
  //clear table
  $("#employeesTable tbody > tr").remove();
  console.log("table cleared?");

  //populate table with entire contents of employees array
  populateEmployeesTable();

  function populateEmployeesTable() {
    for (let i = 0; i < employees.length; i++) {
      let employeeData = `<tr>
      <td>${employees[i].firstName}</td>
      <td>${employees[i].lastName}</td>
      <td>${employees[i].idNumber}</td>
      <td>${employees[i].jobTitle}</td>
      <td>$${employees[i].annualSalary}</td>
      </tr>`;
      $("#employeesTableBody").append(employeeData);
      console.log("appending employeeData", employeeData);
    }
  }
}
function submitClicked() {
  console.log("hellow from submitClicked!");
  // A 'Submit' button should collect the form information,
  // store the information to calculate monthly costs,
  // append information to the DOM and clear the input fields.
  let userInput = {
    firstName: $("#firstNameIn").val(),
    lastName: $("#lastNameIn").val(),
    idNumber: $("#idNumberIn").val(),
    jobTitle: $("#jobTitleIn").val(),
    annualSalary: $("#annualSalaryIn").val(),
  };
  employees.push(userInput);

  //clear inputs
  $("#inputDiv input").val("");

  console.log("employees is ", employees);

  //refresh table and repopulate properly
  refreshTable();

  //for remove
  //table.last().val("")... or something
}

function readyNow() {
  console.log("JQ");

  $("#submitButton").on("click", submitClicked);
}
