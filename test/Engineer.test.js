const Engineer = require('../lib/Engineer');

test("THIS IS TEST FOR ENGINEER CLAS", () => {
    const eng = new Engineer();
    expect(typeof (eng)).toBe("object");
})

test("Should return the github property when getGithub method is invoked", () => {
    const gittest = "GitHubName";
    const g = new Engineer("role", "name", "id", "email", gittest);
    expect(g.github).toBe(gittest);
})