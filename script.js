console.log("js");
$(readyNow);

let employees = [];

function deleteRow() {
  console.log("in deleteRow");
  $(this).parent().parent().remove();
  console.log("this is", this);
  console.log("$(this).parent().parent() is", $(this).parent().parent());
  //$(this).remove();
}

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
      <td><button id="${employees[i].idNumber}" class="deleteButton">Delete</td>
      </tr>`;
      $("#employeesTableBody").append(employeeData);
      console.log("appending employeeData", employeeData);

      //click handler must be added after button exists
      //this approach might be garbage
      console.log(`button id should be #${employees[i].idNumber}`);

      // let rowSelector = `#${employees[i].idNumber}`;
      // $(".deleteButton").on("click", console.log("delete button clicked"));
      // $(rowSelector).on("hover", console.log("delete button clicked"));
      // $(".deleteButton").on("click", deleteRow());

      //'this' below is the window object
      //$(".deleteButton").on("click", console.log("this is", this));
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

  //let rowSelector = `#${employees[i].idNumber}`;
  $(".deleteButton").on("click", console.log("delete button clicked"));
  //$(rowSelector).on("hover", console.log("delete button clicked"));
  $(".deleteButton").on("click", deleteRow);

  //for remove
  //table.last().val("")... or something
}

function readyNow() {
  console.log("JQ");
  $("#submitButton").on("click", submitClicked);
}
