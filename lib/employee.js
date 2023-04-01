// base class Employee that will be extended to the other roles. Includes employeeName, employeeId and email constructor and getName, getId and getEmail functions and functions as well as a getRole function  that returns "Employee"
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
module.exports = Employee;
