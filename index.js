const fs = require('fs');
const { prompt } = require ('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = [];
let newMember = {};

function buildTeam() {
    prompt ([
        {
            type: 'input',
            message: 'What is the employee\'s name?',
            name: 'Name'
        },
        {
            type: 'input',
            message: 'What is the employee\'s employee ID?',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the team employee\'s email adddress?',
            name: 'Email'
        },
        {
            type: 'list',
            message: 'What is their position?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'Position'
        },
    ]).then(response => {
        newMember['name']=response.Name;
        newMember['id']=response.ID;
        newMember['email']=response.Email;
        newMember['role']=response.Position;

        let addInfo = '';
        switch(response.Position){
            case 'Manager': 
                addInfo = 'Office number?';
                break;
            case "Engineer": 
                addInfo = 'GitHub username?';
                break;
            case "Intern":
                addInfo = "School?"
                break;
        }

        prompt([
            {type: 'input',
            message: `What is their ${addInfo}?`,
            name: 'Info'
            },
            {type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
            name: "anotherEmployee"
            }
        ]).then(reply => {
            let myMember;
            switch (response.Position) {
                case 'Manager': 
                    myMember = new Manager(newMember.name, newMember.id, newMember.email, reply.Info);
                    break;
                case 'Engineer': 
                    myMember = new Engineer(newMember.name, newMember.id, newMember.email, reply.Info);
                    break;
                case 'Intern': 
                    myMember = new Intern(newMember.name, newMember.id, newMember.email, reply.Info);
                    break;
            }
            if (reply.anotherEmployee === 'Yes') {
                team.push(myMember);
                buildTeam();
            }
            else {
                team.push(myMember);
                closeHTML();
            }
        })

    })
};

function addMember(){
    let managerData=`<div class="row">`;
    let engineerData=`<div class="row">`;
    let internData=`<div clas="row">`;

    for(i=0; i < member.length; i++){
        switch (member[i].getRole()){
        case 'Manager': 
            managerData += `
            <div class='col'>
                <div class='manager1'>
                    <p>${member[i].getName()}</p>
                    <p><i class="fas fa-street-view"></i> manager</p>
                </div>
                <div class='content'>
                    <p>Id: ${member[i].getId()}</p><hr>
                    <p>Email: <a href="mailto:${member[i].getEmail()}">${member[i].getEmail()}</a></p><hr>
                    <p>Office #: ${member[i].getOfficeNumber()}</p>
                </div>
            </div>`

            break;

        case 'Engineer':
             engineerData += 
            `<div class='col-md-2'>
                <div class='engineer1'>
                    <p>${member[i].getName()}</p>
                    <p><i class="fas fa-calculator"></i> engineer</p>
                </div>
                <div class='content'>
                    <p>Id: ${member[i].getId()}</p><hr>
                    <p>Email: <a href="mailto:${member[i].getEmail()}">${member[i].getEmail()}</a></p><hr>
                    <p>Github: <a href="http://github.com/${member[i].getGithub()}">${member[i].getGithub()}</a></p>
                </div>
            </div>`
            break;

        case 'Intern':
            internData += `<div class='col-md-2'>
            <div class='intern1'>
                <p>${member[i].getName()}</p()>
                <p><i class="fas fa-school"></i> intern</p>
            </div>
            <div class='content'>
                <p>Id: ${member[i].getId()}</p><hr>
                <p>Email: <a href="mailto:${member[i].getEmail()}">${member[i].getEmail()}</a></p><hr>
                <p>School : ${member[i].getSchool()}</p>
            </div>
            </div>`
            break;
        };
    
    managerData += `</div>`;
    engineerData += `</div>`;
    internData += `</div>`;
    
    fs.appendFileSync('./dist/TeamProfile.html',managerData);
    fs.appendFileSync('./dist/TeamProfile.html',engineerData);
    fs.appendFileSync('./dist/TeamProfile.html',internData);
    };
    
}

function startHTML() {
    const HTMLdata=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="style.css" />
            <title>Team Profile Generator</title>
            </head>
        <body>
            <div class='header'>
            My Team
        </div>
        <div class='team'>`

    fs.writeFileSync('./dist/TeamProfile.html',HTMLdata);

    buildTeam();
};

function closeHTML() {
    addMember(team);
    const HTMLdata = `</div>
        </div>
        <div class='footer'></div>
        </body>
        </html>`;

    fs.appendFileSync('./dist/TeamProfile.html',HTMLdata);
};

startHTML();
