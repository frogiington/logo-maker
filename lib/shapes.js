const fs = require('node:fs');
var inquirer = require("inquirer");
var jest = require("jest");


class Shape{
    constructor(){
        this.colorString = "green";
        this.shapeColor = "";
    }
    
    setColor(inputColor){
        this.shapeColor = inputColor;
    }

    render(){
    }
    
}

class Text {
    constructor(){
        this.textColor;
        this.logoText;
    }

    setColor(textColor){
        this.textColor = textColor;
    }

    setText(logoText){
        this.logoText = logoText;
    }
    render(){
       var output =  `<text x="5" y="15" fill="${this.textColor}">${this.logoText}</text>`;

    }
}
class triangle extends Shape{
   /* setColor(){
        console.log('triangle set color was called');
    this.colorString = "blue";
    this.test = "test"
    console.log(this.colorString);
    console.log(this.test);
    }*/

    render(){
        var shapeSVGText = `<polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};"/>`;
        return shapeSVGText;
    }
}

class circle extends Shape{
    setColor(){
    }

    render(){

    }
}

class square extends Shape{
    setColor(){
        
    }

    render(){

    }
}

exports.Shape = Shape;
exports.triangle = triangle;
exports.circle = circle;
exports.square = square;
exports.Text = Text;