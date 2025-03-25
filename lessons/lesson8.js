// Declarative function -> can be used before declaration
function helloOne() {
    console.log('Hello one!')
}

helloOne()

// Anonymous function
var helloTwo = function() {
    console.log('Hello two!')
}

helloOne()
helloTwo()

// ES6 function syntax of arrow function
var helloThree = () => {
    console.log('Hello three!')
}

helloThree()

// function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}

printName('John', 'Smith')

// function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

// import function -> make "type" in package.json "module"
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(15)