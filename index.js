const inquirer = require('inquirer');
const fs = require('fs');
let teamOg = [];

const Team = require('./src/Team');
const Format = require('./src/Format');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
    .prompt([{
            type: 'input',
            message: "Manager's Name",
            name: 'manager',
        },
        {
            type: 'input',
            message: "Manager's Employee ID",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Manager's Email Address",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Manager's Office Number",
            name: 'managerOffice',
        },
    ])
    .then(answers => {
        const manager = new Manager('Manager', answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice);
        teamOg.push(manager);
        team();
    });

const team = () => {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Choose your team.',
            choices: [
                'Engineer',
                'Intern',
                'None',
            ],
            name: 'addTeam',
        }])
        .then(answers => {
            answers.addTeam === 'Engineer' ? engineer() :
                answers.addTeam === 'Intern' ? intern() :
                fullTeam();
        })
};

const engineer = () => {
    inquirer
        .prompt([{
                type: 'input',
                message: "Engineer's Name",
                name: 'engineer',
            },
            {
                type: 'input',
                message: "Employee ID",
                name: 'engineerID',
            },
            {
                type: 'input',
                message: "Email Address",
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: "GitHub Username",
                name: 'engineerGitHub',
            },
        ])
        .then(answers => {
            const engineer = new Engineer('Engineer', answers.engineer, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
            teamOg.push(engineer);
            team();
        });
};

const intern = () => {
    inquirer
        .prompt([{
                type: 'input',
                message: "Intern's Name",
                name: 'intern',
            },
            {
                type: 'input',
                message: "Employee ID",
                name: 'internID',
            },
            {
                type: 'input',
                message: "Email Address",
                name: 'internEmail',
            },
            {
                type: 'input',
                message: "Intern's School",
                name: 'internSchool',
            },
        ])
        .then(answers => {
            const intern = new Intern('Intern', answers.intern, answers.internID, answers.internEmail, answers.internSchool);
            teamOg.push(intern);
            team();
        });
};

const fullTeam = () => {
    let htmlFinish = Team(teamOg);
    fs.writeFile("./dist/index.html", htmlFinish, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("index.html file written successfully");
        }
    });

    let cssFinish = Format();
    fs.writeFile("./dist/style.css", cssFinish, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("style.css file written successfully");
        }
    });
}