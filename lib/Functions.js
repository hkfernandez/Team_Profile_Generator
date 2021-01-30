
const inguirer = require ('inquirer');
const questions = require ('./Questions.js');
const Manager = require ('./Manager.js');
const {Engineer} = require ('./Engineer.js');
const {Intern} = require ('./Intern.js');
const inquirer = require('inquirer');
const employeesArrQuestions = [];

function buildManagerObj () {
      inquirer.prompt (questions.manager)
            .then (({name, id, email, officeNumber, addTeamMemberChoice})=>{
                  let employee = new Manager (name, id, email, officeNumber);
                  employeesArrQuestions.push(employee);
                  console.log(employeesArrQuestions);
      
            }
            )
}

module.exports = {buildManagerObj, employeesArrQuestions}