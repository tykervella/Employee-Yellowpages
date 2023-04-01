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

  class Intern extends Employee {
    constructor (employeeName, employeeId, email, school) {
      super(employeeName, employeeId, email);
      this.school = school;
    }
    getSchool() {

    }
    getRole () {
        const role = "Intern";
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
        addAnotherRole();
      })
  }

  function addEngineer () {
    inquirer
    .prompt ([
        {
          type: 'text',
          name: 'employeeName',
          message: `Please enter this engineer's name`,
        },
        {
            type: 'text',
            name: 'employeeId',
            message: `Please enter this engineer's employee id.`,
        },
        {
            type: 'text',
            name: 'email',
            message: `Please enter this engineer's email.`,
        },
        {
            type: 'text',
            name: 'github',
            message: `Please enter this engineer's github.`,
        }

      ]) 
      .then((data) => {
        const newEngineer = new Engineer (
            data.employeeName,
            data.employeeId,
            data.email,
            data.github
        )
        employeeData.push(newEngineer);
        addAnotherRole();
      })
  }

  function addIntern () {
    inquirer
    .prompt ([
        {
          type: 'text',
          name: 'employeeName',
          message: `Please enter this intern's name`,
        },
        {
            type: 'text',
            name: 'employeeId',
            message: `Please enter this intern's employee id.`,
        },
        {
            type: 'text',
            name: 'email',
            message: `Please enter this intern's email.`,
        },
        {
            type: 'text',
            name: 'school',
            message: `Please enter where this intern goes to school.`,
        }

      ]) 
      .then((data) => {
        const newIntern = new Intern (
            data.employeeName,
            data.employeeId,
            data.email,
            data.school
        )
        employeeData.push(newIntern);
        addAnotherRole();
      })
  }

  function addAnotherRole () {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add another employee?',
        name: 'Main',
        choices: [
          // gives each option a unique value that is returned as a promise
          {name: "Add an engineer.", value: 001},
          {name: "Add an intern.", value: 002},
          {name: "I'm all done.", value: 003}
        ]
      },
    ])
    // based on the value of what the user choose in the Main prompt, runs a switch function to execute the functions for the action the user selected 
    .then((data) => {
      switch (data.Main) {
      case 1:
        console.log('Adding an Engineer...');
        addEngineer();
        break;
      case 2:
        console.log('Adding an Intern...');
        addIntern();
        break;
      case 3:
        for (var i= 0; i<employeeData.length; i++) {
          if (employeeData[i] instanceof Engineer) {
            console.log ("Engineer")
          } else if (employeeData[i] instanceof Manager) {
            console.log ("Manager")
          } else if (employeeData[i] instanceof Intern) {
            console.log ("Intern")
          } 
        }
        break;
      }
    });
  }

  init();