// Class Manager is imported
const Manager = require('../lib/manager');

// A testing suite for Nanager is created.
describe('Manager', () => {
  // A test is created to check that Manager class does in fact return the parameters as properties of newManager object
  describe('valid', () => {
    it('Must have an employeeName, employeeId, email, and officeNumber ', () => {
      const newManager = new Manager("Name","Id","Email","Office Number");
      expect([newManager.employeeName, newManager.employeeId, newManager.email, newManager.officeNumber]).toEqual(["Name","Id","Email","Office Number"]);
    });
  });
});
