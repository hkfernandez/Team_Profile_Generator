
const manager = [
      {type: 'input', message: `Enter Manager's Name`, name: 'name'}, 
      {type: 'input', message: `Enter Manager's Employee ID`, name: 'id'},
      {type: 'input', message: `Enter Manager's Email Address`, name: 'email'},
      {type: 'input', message: `Enter Manager's Office Number`, name: 'officeNumber'},
      {type: 'list', message: `Would would like to add a team member?`, name: 'addTeamMemberChoice', choices: ['Yes', 'No']},
];


const engineer = [
      {type: 'input', message: `Enter Engineer's Name`, name: 'name'}, 
      {type: 'input', message: `Enter Engineer's Employee ID`, name: 'id'},
      {type: 'input', message: `Enter Engineer's Email Address`, name: 'email'},
      {type: 'input', message: `Enter Engineer's GitHub User Name`, name: 'github'},
      {type: 'list', message: `Would would like to add a team member?`, name: 'addTeamMemberChoice', choices: ['Yes', 'No']},
];


const intern = [
      {type: 'input', message: `Enter Intern's Name`, name: 'name'}, 
      {type: 'input', message: `Enter Intern's Employee ID`, name: 'id'},
      {type: 'input', message: `Enter Intern's Email Address`, name: 'email'},
      {type: 'input', message: `Enter Intern's School They Attend`, name: 'school'},
      {type: 'list', message: `Would would like to add a team member?`, name: 'addTeamMemberChoice', choices: ['Yes', 'No']},
];

const employeeType =[
      {type: 'list', message: `Choose Type of Team Member`, name: 'employeeTypeChoice', choices: ['Engineer', 'Intern']},
]

module.exports = {manager, engineer, intern, employeeType}