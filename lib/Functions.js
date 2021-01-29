
const inguirer = require ('inquirer');
const questions = require ('./Questions.js');
const Manager = require ('./Manager.js');
const {Engineer} = require ('./Engineer.js');
const {Intern} = require ('./Intern.js');
const inquirer = require('inquirer');
var employeesArr = [];

function buildManagerObj () {
      inquirer.prompt (questions.manager)
            .then (({name, id, email, officeNumber, addTeamMemberChoice})=>{
                  let employee = new Manager (name, id, email, officeNumber);
                  employeesArr.push(employee);
            }
            )
}

buildManagerObj ();

module.exports = {buildManagerObj, }