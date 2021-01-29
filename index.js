const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

let Bob = new Employee ("Bob", 123, "email.test");
console.log(Bob);

// questions passed into the inquirer
const managerQuestions = [
      {type: 'input', message: `Enter Manager's Name`, name: 'name'}, 
      {type: 'input', message: `Enter Manager's Employee ID`, name: 'id'},
      {type: 'input', message: `Enter Manager's Email Address`, name: 'email'},
      {type: 'input', message: 'Usage - how the app is used', name: 'usage'},
      {type: 'input', message: "Contributors", name: 'contributors'},
      {type: 'input', message: "Testing Instructions", name: 'testing'},
      {type: 'input', message: "GitHub Username", name: 'github'},
      {type: 'input', message: "Email Address", name: 'email'},
      {type: 'list', message: "License Type", name: 'license', choices: ['MIT', 'Apache', 'GPL', 'BSD_2_Clause', 'BSD_3_Clause', 'BSD_4_Clause']}
];

function init() {
// inquirer loop 
      inquirer.prompt(managerQuestions)
      .then ((response) => {

      })
}
