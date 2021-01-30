const inguirer = require ('inquirer');
const questions = require ('./lib/Questions.js');
const Manager = require ('./lib/Manager.js');
const Engineer = require ('./lib/Engineer.js');
const Intern = require ('./lib/Intern.js');
const inquirer = require('inquirer');
const employeesArrGV = [];
let employeeTypeGV = ''


function buildManagerObj () {
      inquirer.prompt (questions.manager)
            .then (({name, id, email, officeNumber, addTeamMemberChoice})=>{
                  let employee = new Manager (name, id, email, officeNumber);
                  employeesArrGV.push(employee);
                  if(addTeamMemberChoice === "Yes") {
                        askEmployeeType();
                  }
            })
}

function askEmployeeType () {
      inquirer.prompt (questions.employeeType)
            .then (({employeeTypeChoice})=>{
                  employeeTypeGV = employeeTypeChoice
                  if( employeeTypeGV === "Engineer") {
                        buildEngineerObj ();
                  } else {
                        buildInternObj ();
                  }
            })
}

function buildEngineerObj () {
      inquirer.prompt (questions.engineer)
            .then (({name, id, email, github, addTeamMemberChoice})=>{
                  let employee = new Engineer (name, id, email, github);
                  employeesArrGV.push(employee);
                  if(addTeamMemberChoice === "Yes") {
                        askEmployeeType();
                  }
            })
}

function buildInternObj () {
      inquirer.prompt (questions.intern)
            .then (({name, id, email, school, addTeamMemberChoice})=>{
                  let employee = new Intern (name, id, email, school);
                  employeesArrGV.push(employee);
                  if(addTeamMemberChoice === "Yes") {
                        askEmployeeType();
                  }
            })
}

buildManagerObj ();
