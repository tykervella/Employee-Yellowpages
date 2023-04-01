// Class Employee is imported
const Employee = require('../lib/employee');

// A testing suite for Employee is created.
describe('Employee', () => {
  // A test is created to check that Employee class does in fact return the parameters as properties of newEmployee object
  describe('valid', () => {
    it('Must have an employeeName, employeeId, email', () => {
      const newEmployee = new Employee("Name","Id","Email");
      expect([newEmployee.getName(), newEmployee.getId(), newEmployee.getEmail(), newEmployee.getRole()]).toEqual(["Name","Id","Email","Employee"]);
    });
  });
});
