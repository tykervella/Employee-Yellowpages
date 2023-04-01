const inquirer = require('inquirer');
const fs = require('fs');
let employeeData = [];

const htmlBeg = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./assets/style.css" />
  <title>Employee Yellow Pages</title>
</head>

<body>
    <header> 
        <h2>Employee Yellow Pages</h2> 
        <b></b>
        <h4> View your entire team at a glance!</h4>
    </header>
      

    <main>
      <section id="content_container">`

let htmlMid = "";

const htmlEnd = `</section>

</main>

<footer>

</footer>

</body>

</html>`

// base class Employee that will be extended to the other roles. Includes a name, id and email and functions to get each of those items. getRole function returns "Employee"
class Employee {
  constructor(employeeName, employeeId, email) {
      this.employeeName = employeeName;
      this.employeeId = employeeId;
      this.email = email;
  }
  
  getName() {
      return this.employeeName;
  }
  
  getId() {
      return this.employeeId;
  }
  
  getEmail() {
      return this.email;
  }
  
  getRole() {
      return "Employee";
  }
}

class Manager extends Employee {
    constructor (employeeName, employeeId, email, officeNumber) {
      super(employeeName, employeeId, email);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
      return this.officeNumber;
    }
    getRole () {
      return "Manager"
    }
  }

  class Engineer extends Employee {
    constructor (employeeName, employeeId, email, github) {
      super(employeeName, employeeId, email);
      this.github = github;
    }
    getGithub() {
      return this.github
    }
    getRole () {
      return "Engineer"
    }
  }

  class Intern extends Employee {
    constructor (employeeName, employeeId, email, school) {
      super(employeeName, employeeId, email);
      this.school = school;
    }
    getSchool() {
      return this.school
    }
    getRole () {
      return "Intern";
    }
  }

  let employeeTestData = [
    new Manager('Tyler', '1', 'email@example.com', 'A103'),
    new Engineer('Emily', '2', 'email@example.com', 'github'),
    new Engineer('Colleen', '3', 'email@example.com', 'github'),
    new Intern('Oskar', '4', 'email@example.com', 'UW'),
    new Intern('River', '5', 'email@example.com', 'UW')
  ];


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

  function writeFile(data) {
    for (var i=0; i<data.length; i++) {
      const name = data[i].getName();
      const role = data[i].getRole();
      const email = data[i].getEmail();
      const id = data[i].getId();
      const htmlTempBeg = `<section class="content">
        <div class="content_head">
          <h2>${name} </h2>
          <h3>${role}</h3>
          <br>
        </div> 
        <u>Employee ID</u>: ${id}
        <br>
        Email: <a href="${email}">${email}</a>
        <br>
        `
        if (data[i] instanceof Engineer) {
          const github = data[i].getGithub()
          const htmlTempEnd = `Github: <a href="https://github.com/${github}" target="_blank">${github}</a>`
          htmlMid = htmlMid + htmlTempBeg + htmlTempEnd + `</section>`;
        } else if (data[i] instanceof Manager) {
          const officeNumber = data[i].getOfficeNumber()
          const htmlTempEnd = `Office Number: ${officeNumber}`
          htmlMid = htmlMid + htmlTempBeg + htmlTempEnd + `</section>`;
        } else if (data[i] instanceof Intern) {
          const school = data[i].getSchool()
          const htmlTempEnd = `Currently Attending: ${school}`
          htmlMid = htmlMid + htmlTempBeg + htmlTempEnd + `</section>`;
        } 
    }
    fs.writeFile(`./public/index.html`, htmlBeg+htmlMid+htmlEnd, (err) => {
      //checks to see if the console throws an error
      if (err) {
        console.log('Could not generate index.html');
      } else {
        console.log("New index.html generated.")
      }
    });
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
          {name: "I'm finished building my team", value: 003}
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
        writeFile(employeeData);
        break;
      }
    });
  }

  // init();

  writeFile(employeeTestData)