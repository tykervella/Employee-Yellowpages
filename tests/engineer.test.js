// Class Engineer is imported
const Intern = require('../lib/engineer');

// A testing suite for Engineer is created.
describe('Engineer', () => {
  // A test is created to check that Engineer class does in fact return the parameters as properties of newIntern object
  describe('valid', () => {
    it('Must have an employeeName, employeeId, email, and github', () => {
      const newEngineer = new Intern("Name","Id","Email","Github");
      expect([newEngineer.getName(), newEngineer.getId(), newEngineer.getEmail(), newEngineer.getGithub(), newEngineer.getRole()]).toEqual(["Name","Id","Email","Github","Engineer"]);
    });
  });
});
