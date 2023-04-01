// requiring node packages 
const inquirer = require('inquirer');
const fs = require('fs');

// importing classes we created in lib directory
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// import html and css files to write files
const htmlStart = require('./src/htmlStart');
const htmlEnd = require('./src/htmlEnd');
const style = require('./src/style')

// empty array and string to be filled with user input data
let employeeData = [];
let employeeHTML = "";

// seed data to test writeFile() function 
let employeeTestData = [
  new Manager('Tyler', '1', 'email@example.com', 'A103'),
  new Engineer('Emily', '2', 'email@example.com', 'github'),
  new Engineer('Colleen', '3', 'email@example.com', 'github'),
  new Intern('Oskar', '4', 'email@example.com', 'UW'),
  new Intern('River', '5', 'email@example.com', 'UW')
];
// writeFile(employeeTestData)

// initialize function to run immediately upon user running "node index.js"
function init () {
  // inquirer prompt about the manager of a specific team. collects their name, id, email and office number
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
      // takes the data and runs it through the imported Manager class 
      .then((data) => {
        const newManager = new Manager (
            data.employeeName,
            data.employeeId,
            data.email,
            data.officeNumber
        )
        // pushes manager data to employeeData array to hold it until we write file 
        employeeData.push(newManager);
        // prompts user to add an engineer or intern or to finish setting up their team. 
        addAnotherRole();
      })
  }

  // controller function that is called through the program to choose the next command the program takes. 
  function addAnotherRole () {
    // inquirer prompt to ask the user whether they want to add another engineer/intern or finish building their team
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
      // chose to add an engineer
      case 1:
        console.log('Adding an Engineer...');
        // calls addEngineer() function to collect new engineer data 
        addEngineer();
        break;
      case 2:
        console.log('Adding an Intern...');
        // calls addIntern() function to collect new intern data 
        addIntern();
        break;
      case 3:
        writeFile(employeeData);
        break;
      }
    });
  }

  // function that is called to get user input about engineer when adding this role to the team 
  function addEngineer () {
    // inquirer prompt about new engineer. collects their name, id, email and github
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
        // takes user input data and runs it through imported Engineer class 
        const newEngineer = new Engineer (
            data.employeeName,
            data.employeeId,
            data.email,
            data.github
        )
        // pushes new engineer data to employeeData array to hold until we write file 
        employeeData.push(newEngineer);
        // prompts user to add an engineer or intern or to finish setting up their team. 
        addAnotherRole();
      })
  }

  // function that runs when user chooses to add an intern
  function addIntern () {
    // inquirer prompt about new intern. collects their name, id, email and school
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
        // takes user input data and runs it through imported Intern class 
        const newIntern = new Intern (
            data.employeeName,
            data.employeeId,
            data.email,
            data.school
        )
        // pushes new intern data to employeeData array to hold until we write file 
        employeeData.push(newIntern);
        // prompts user to add an engineer or intern or to finish setting up their team. 
        addAnotherRole();
      })
  }


  // function that takes in an array and iterates through each index to generate an html content box 
  function writeFile(data) {
    for (var i=0; i<data.length; i++) {
      // calling functions we defined in Employee class to get the name, role, email, and ID of 
      const name = data[i].getName();
      const role = data[i].getRole();
      const email = data[i].getEmail();
      const id = data[i].getId();
      // html template that data is placed into
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
        // checks instanceof each index in the parameter array and runs specific code if instanceof matches Engineer, Intern or Manager
        if (data[i] instanceof Engineer) {
          // calling function defined in Engineer class to get github information
          const github = data[i].getGithub()
          // html template that data is placed into
          const htmlTempEnd = `Github: <a href="https://github.com/${github}" target="_blank">${github}</a>`
          // combine all html for content box of the current index into a global string to store until we write file
          employeeHTML = employeeHTML + htmlTempBeg + htmlTempEnd + `</section>`;
        } else if (data[i] instanceof Manager) {
          // calling function defined in Manager class to get office number information
          const officeNumber = data[i].getOfficeNumber()
          // html template that data is placed into
          const htmlTempEnd = `Office Number: ${officeNumber}`
          // combine all html for content box of the current index into a global string to store until we write file
          employeeHTML = employeeHTML + htmlTempBeg + htmlTempEnd + `</section>`;
        } else if (data[i] instanceof Intern) {
          // calling function defined in Engineer class to get github information
          const school = data[i].getSchool()
          // html template that data is placed into
          const htmlTempEnd = `Currently Attending: ${school}`
          // combine all html for content box of the current index into a global string to store until we write file
          employeeHTML = employeeHTML + htmlTempBeg + htmlTempEnd + `</section>`;
        } 
    }
    // write file with our two imported html templates and the user input generated content boxes 
    fs.writeFile(`./public/index.html`, htmlStart+employeeHTML+htmlEnd, (err) => {
      //checks to see if the console throws an error
      if (err) {
        console.log('Could not generate index.html');
      } else {
        console.log("New index.html generated.")
      }
    });
    fs.writeFile(`./public/assets/style.css`, style, (err) => {
      //checks to see if the console throws an error
      if (err) {
        console.log('Could not generate style.css');
      } else {
        console.log("New style.css generated.")
      }
    });
  }

  // calling init function to start running program
  init();