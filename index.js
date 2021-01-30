const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const functions = require("./lib/Functions.js");
const employeeArr = [];

// let Bob = new Manager ("Bob", 123, "email.test");
// console.log(Bob);



function init() {
      functions.buildManagerObj();
}


// // inquirer loop 
//       inquirer.prompt(questions.managerQuestions)
//       .then (({ name, id, email, officeNumber, addTeamMemberChoice }) => {
//             let employee = new Manager.Manager (name, id, email, officeNumber);
//             let newTeamMember = addTeamMemberChoice;
//             console.log(newTeamMember);
//             for (newTeamMember === 'Yes') {
//                   inquirer.prompt([{
//                         type: 'list', 
//                         message: `Would you like to add an engineer or an intern?`, 
//                         name: 'internOrEngineerChoice', 
//                         choices: ['Intern', 'Engineer']
//                   }])
//                   .then (({internOrEngineerChoice}) => {
//                         let internOrEngineer = internOrEngineerChoice
//                         if (internOrEngineer === 'Engineer') {
//                               inquirer.prompt(engineer.engineerQuestions)
//                               .then (({ name, id, email, github, addTeamMemberChoice }) => {
//                                     let employee = new Engineer.Engineer (name, id, email, github);
//                                     newTeamMember = addTeamMemberChoice;
//                               })
//                         } else {
//                                     inquirer.prompt(intern.internQuestions)
//                               .then (({ name, id, email, school, addTeamMemberChoice }) => {
//                                     let employee = new Intern.Intern (name, id, email, school);
//                                     newTeamMember = addTeamMemberChoice;
//                               })
//                         }
//                   })
//             }
//       })


init();

