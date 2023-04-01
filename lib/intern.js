//require Employee class to extend it 
const Employee = require('./employee');

// extends base class Employee. Includes employeeName, employeeId, email, and school constructor and new getSchool() function as well as a getRole function  that returns "Intern" instead of "Employee"
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

module.exports = Intern;