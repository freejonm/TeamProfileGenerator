const fs = require('fs');
const { prompt } = require ('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./intern');

let team = [];
let newMember = {};

const buildTeam = ()=>{
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
                //closHTML();
            }
        })

    })
};