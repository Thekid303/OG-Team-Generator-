const Intern = require('../lib/Intern');

test("THIS IS TEST FOR INTERN CLASS", () => {
    const int = new Intern();
    expect(typeof (int)).toBe("object");
})

test("Should return the school property when getschool method is invoked", () => {
    const schooltest = "University";
    const s = new Intern("role", "name", "id", "email", schooltest);
    expect(s.school).toBe(schooltest);
})