// This is my first javascript code
console.log("Hello world");

// Declare variable


// Cannot be a reserved keyword
// Should be meaningfull
// Cannot start with a Number (1name)
// Cannot contain a space or hyphen(-)
// Are case-sensitive

let name = 'aarthi';
console.log(name);

//Constant

// If we need to ressign the variable need to use let

// let intersetRate = 0.3
// intersetRate = 1
// console.log(intersetRate);

// o/p - 1

// const intersetRate = 0.3
// intersetRate = 1
// console.log(intersetRate);

// o/p - error on line 19

// If we don't want to ressign the variable need to use const

const intersetRate = 0.3
console.log(intersetRate);

// o/p -0.3


// Primitive / value type

let myName ='aarthi'; // String
let age = 30; //number
let isApproved = true; //boolean
let firstname; //undefined
let selectedColor = null; //null


//Declare objects

let person= {
    name:'aarthi',
    age:'30'
}

console.log(person) 

// Dot Notation
person.name='aar'

console.log(person.name)

// Bracket Notation
person['name']='mani'

console.log(person.name)


//Array

let selectedColors = ['red', 'blue'];
selectedColors[2] ='green';
console.log(selectedColors.length)

//functions
function greet(name,lastName){
console.log('hello ' + name + ' ' + lastName )
}
greet('aarthi','manikandan');

//typesw of functions
function square(number){
    return number * number;
}
console.log(square(2));