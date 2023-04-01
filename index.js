const inquirer = require('inquirer');
let employeeData = []

class Employee {
    constructor (employeeName, employeeId, email) {
        this.employeeName = employeeName;
        this.employeeId = employeeId; 
        this.email = email; 
    }  
    getName () {

    }
    getId () {

    }
    getEmail () {

    }
    getRole () {
        const role = "employee";
        return role; 
    }
}

class Manager extends Employee {
    constructor (employeeName, employeeId, email, officeNumber) {
      super(employeeName, employeeId, email);
      this.officeNumber = officeNumber;
    }
    getRole () {
        
    }
  }

  class Engineer extends Employee {
    constructor (employeeName, employeeId, email, github) {
      super(employeeName, employeeId, email);
      this.github = github;
    }
    getGithub() {

    }
    getRole () {
        const role = "Engineer";
        return role; 

    }
  }

function init () {
    inquirer
    .prompt ([
        {
          type: 'text',
          name: 'employeeName',
          message: 'Please enter the manager for this team.',
        },
        {
            type: 'text',
            name: 'employeeId',
            message: `Please enter the manager's employee id.`,
        },
        {
            type: 'text',
            name: 'email',
            message: `Please enter the manager's email.`,
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `Please enter the manager's office number.`,
        }

      ]) 
      .then((data) => {
        const newManager = new Manager (
            data.employeeName,
            data.employeeId,
            data.email,
            data.officeNumber
        )
        employeeData.push(newManager);
        console.log(employeeData);
      })
  }

  init();