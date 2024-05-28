const fs = require('node:fs');
var inquirer = require("inquirer");
var jest = require("jest");

const shapesLib = require("./lib/shapes.js");

async function getTextInfo(){
    var finalText = new shapesLib.Text();
    await inquirer
    .prompt([
        {
            name: 'logoText',
            message: 'Input text inside logo.'
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
                    message: 'Input text inside logo. (Max 3 Characters)'
                }
            ])
            .then(answers=>{
                logoText = answers.Error
            })
    }
    console.log (logoText)
    finalText.setText(logoText);

    await inquirer
    .prompt([
        {
            name: 'logoColor',
            message: 'Input a color for your logo text.'
        }
    ])
    .then(answers=> {
        finalText.setColor(answers.logoColor);
    })

}

//makeLogoText();


async function getShapeInfo(){
    var shapeChoice;
     await inquirer 
    .prompt([
      {
        type: 'list',
        name: 'Shape',
        message: 'Choose a shape for your logo.',
        choices: ['Square', 'Triangle', 'Circle'],
      }
    ])
    .then(answers => {
      shapeChoice = answers.Shape;
    });

    var shape = chooseShape(shapeChoice);

    await inquirer
    .prompt([
        {
            name: 'shapeColor',
            message: 'Input a color for your shape.'
        },
    ])
    .then (answers => {
        console.info ('Answer:', answers.shapeColor)
        shapeColor = answers.shapeColor;
    });

    var shapeColorFinal = shape.setColor(shapeColor);

}

function chooseShape(shape){
    switch (shape){
        case 'Square':
            shape = new shapesLib.square();
            return shape;

        case 'Triangle':
            shape = new shapesLib.triangle();
            return shape;
        
        case 'Circle':
            shape = new shapesLib.circle();
            return shape;
        
        default:
            return 'Please select a shape' + chooseShape(shape)
    }

}
//chooseShape();
//makeLogoColor()

async function main(){
    await getShapeInfo();
    await getTextInfo();
}

main();

/*makeSVGfile(){
    fs.writeFile("logo.svg", )
}*/