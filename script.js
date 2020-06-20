console.log("js");
$(readyNow);

let employees = [];

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
  $("#inputDiv .input").val("");
  console.log("employees is ", employees);
  $("#employeesDiv").append(`<p>${employees}</p>`);
}

function readyNow() {
  console.log("JQ");

  $("#submitButton").on("click", submitClicked);
}
