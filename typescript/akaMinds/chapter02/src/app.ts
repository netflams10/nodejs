




// Let and Constants...
// let is block scope and constant doesn't change

const userName = "Max";
// userName = "Mac"

let age = 30;
age = 35;

// function add (a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }


// Arrow Function
//  you can omit the curly braces when you only have to return one express
const add = (a: number, b: number) => {
    return a + b;
}

// const add = (a:number, b:number) => a + b;

// const printOutput = (output: string | number) => console.log(output);
const printOutput: (a:number | string) => void = (output: string | number) => console.log(output);

const button = document.querySelector("button");

if (button) {
    // if no params in the callback add ()
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5,2));

console.log(add(2, 5));

// Default Function Parameters
// Default arguments are not skipped when you call a function...set Default from right

const addUp = (a: number, b: number =1) => a + b

printOutput(addUp(5));
/*
const addUp = (a: number = 1, b: number) => a + b
printOutput(addUp(5));
*/


// Spread Operators
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// push takes values and comma seperated argument...
// activeHobbies.push(hobbies)/

// spread operator is useful for pulling out element of an array
// Spread also exists on Object

activeHobbies.push(...hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);

const person = {
    first_name: "Max",
    real_age: 30
}

// We are ot really copying the Object
// const copiedPerson = person;
const copiedPerson = { ...person };


console.log(hobbies[0]);
console.log(copiedPerson);


// Rest Parameters
// Not restricted to parameters REST
// It can support tuples also
// const addRest = (...numbers: [number, number, number]) => {
const addRest = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    })
}

const addedNumbers = addRest(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array and Object Destructuring

const [hobby1, hobby2, ...remainingHobies] = hobbies

console.log(hobbies, hobby1, hobby2);

// Object: Element can't be pulled out by position but by keyName...
// It has to be property name;
// to overwrite const {first_name: userName, real_age} = person
const {first_name, real_age} = person;