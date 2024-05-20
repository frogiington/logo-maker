const fs = require('node:fs');
var inquirer = require("inquirer");
var jest = require("jest");

async function makeLogoText(){
var logoText = 'aaaaa';
await inquirer
    .prompt([
        {
            name: 'logoText',
            message: 'Input text inside logo'
        },
    ])
    .then (answers => {
        console.info ('Answer:', answers.logoText)
        logoText = answers.logoText;
    });

    while (logoText.length >= 4){
       await  inquirer
            .prompt([
                {
                    name: 'Error',
                    message: 'Yo, this is wrong fix it. (Max 3 Characters)'
                }
            ])
            .then(answers=>{
                logoText = answers.Error
            })
    }
    console.log (logoText + " Wow you actually fixed it look at you.")
}

makeLogoText();
function makeLogoColor(){

}