const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// let Bob = new Employee ("Bob", 123, "email.test");
// console.log(Bob);

// questions passed into the inquirer
const managerQuestions = [
      {type: 'input', message: `Enter Manager's Name`, name: 'name'}, 
      {type: 'input', message: `Enter Manager's Employee ID`, name: 'id'},
      {type: 'input', message: `Enter Manager's Email Address`, name: 'email'},
      {type: 'input', message: `Enter Manager's Office Number`, name: 'officeNumber'},
];

function init() {
// inquirer loop 
      inquirer.prompt(managerQuestions)
      .then (({name, id, email, officeNumber }) => {
            let employee = new Manager (name, id, email, officeNumber);
            console.log(employee);
      })
}

init();

