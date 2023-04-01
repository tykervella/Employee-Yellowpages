//require Employee class to extend it 
const Employee = require('./employee');

// extends base class Employee. Includes employeeName, employeeId, email, and officeNumber constructor and new getOfficeNumber() function as well as a getRole function  that returns "Manager" instead of "Employee"
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

module.exports = Manager;