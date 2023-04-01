// Class Intern is imported
const Intern = require('../lib/intern');

// A testing suite for Intern is created.
describe('Intern', () => {
  // A test is created to check that Intern class does in fact return the parameters as properties of newIntern object
  describe('valid', () => {
    it('Must have an employeeName, employeeId, email, and school ', () => {
      const newIntern = new Intern("Name","Id","Email","School");
      expect([newIntern.employeeName, newIntern.employeeId, newIntern.email, newIntern.school]).toEqual(["Name","Id","Email","School"]);
    });
  });
});
