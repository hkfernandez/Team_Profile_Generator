
const inguirer = require ('inquirer');
const questions = require ('./Questions.js');
const Manager = require ('./Manager.js');
const {Engineer} = require ('./Engineer.js');
const {Intern} = require ('./Intern.js');
const inquirer = require('inquirer');

function buildManagerObj () {
      inquirer.prompt (questions.manager)
            .then (({name, id, email, officeNumber, addTeamMemberChoice})=>{
                  let employee = new Manager (name, id, email, officeNumber);
                  console.log(employee);
                  return employee;
            }
            )
}

let newEmployee = buildManagerObj ();
console.log(newEmployee);

module.exports = {buildManagerObj, }