const Employee = require('../lib/Employee');

test("Should instantiate and create a employee object", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
})

test("Test name input on Employee", () => {
    const nametest = "molly";
    const n = new Employee("role", nametest);
    expect(n.name).toBe(nametest);
})

test("Test ID input on Employee", () => {
    const idtest = "123";
    const i = new Employee("role", "name", idtest);
    expect(i.id).toBe(idtest);
})

test("Test email input on Employee", () => {
    const emailtest = "Hello@world.com";
    const e = new Employee("role", "name", "id", emailtest);
    expect(e.email).toBe(emailtest);
})