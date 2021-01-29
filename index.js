const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require("./lib/Employee.js");
const manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// let Bob = new Manager ("Bob", 123, "email.test");
// console.log(Bob);

console.log(manager);
console.log(manager.managerQuestions);

// questions passed into the inquirer
// const managerQuestions = [
//       {type: 'input', message: `Enter Manager's Name`, name: 'name'}, 
//       {type: 'input', message: `Enter Manager's Employee ID`, name: 'id'},
//       {type: 'input', message: `Enter Manager's Email Address`, name: 'email'},
//       {type: 'input', message: `Enter Manager's Office Number`, name: 'officeNumber'},
//       {type: 'input', message: `Would would like to add a team member?`, name: 'newTeamMember'},
// ];

function init() {
// inquirer loop 
      inquirer.prompt(manager.managerQuestions)
      .then (({ name, id, email, officeNumber, newTeamMember }) => {
            console.log(manager);
            let employee = new manager.Manager (name, id, email, officeNumber);
            console.log(employee);
      //       if (newTeamMember === "yes")
            
      // })
      // inquirer.prompt(managerQuestions)
      // .then (({name, id, email, officeNumber }) => {
      //       let employee = new Manager (name, id, email, officeNumber);
            
      })
}

init();

