//require Employee class to extend it 
const Employee = require('./employee');

// extends base class Employee. Includes employeeName, employeeId, email, and github constructor and new getGithub() function as well as a getRole function  that returns "Engineer" instead of "Employee"
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

module.exports = Engineer;