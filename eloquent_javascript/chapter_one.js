// console.log(this);


// let theNumber = Number(prompt("Enter a Number: "));

// if (!Number.isNaN(theNumber)) {
//     console.log("Your Number is the square root of: " + theNumber * theNumber)
// }

// let number = 0;

// while (number < 12) {
//     console.log(number);
//     number = number + 2;
// }
/*
let result = 1
let counter = 0

while (counter < 10) {
    result = result * 2
    counter = counter + 1
}

console.log(result);

let yourName;
do {
    yourName = prompt("Please Enter your Name: ");
} while (!yourName) {
    console.log(yourName);
}


if (false != true) {
    console.log("That makes sense!")
    if (1 < 2) {
        console.log("There are no surprise there too!")
    }
}


for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let result = 1
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result *2
}
console.log(result);

// Someties only two statement works...
for (let current = 20; current = current + 1;) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

*/

/*
* Number.isNaN
* Only returns true if Not a Number
* Value of 2 power 10 <<<--->>> 1024
* A do while loop -->> force to enter a Name...
* for a empty var !var == false (terminate loop) and true when not empty...
* Indentation
* for loop
* to 2 power of 10 -->> 1024
* Breaking outta a loop
**/


/*
*  Exercise to answer
*/

// Triangle with 7 lenght and max-width -->> 7

/*
for (let i = 1; i < 8; i++) {
    console.log("#".repeat(i))
}
*/

// FizzBuzz...

/*
for (let i = 1; i < 101; i++) {
    let s = ''
    if (i % 3 === 0) s += 'Fizz';
    if (i % 5 === 0) s += 'Buzz';
    console.log(s || i);
}
*/


// Chess Board 8x8 grid...
/*
let plain = ' # # # #';
let two = '# # # # ';

for (let i = 1; i < 9; i++) {
    if (i % 2 == 0) console.log(plain)
    if (i % 2 != 0) console.log(two)
}

for (let i = 1; i < 9; i++) {
    if (i % 2 !== 0) console.log(' #'.repeat(4))
    else console.log('# '.repeat(4));
}
*/