const square = function (x) {
    return x * x;
};

// console.log(square(5))

// Non parameter Function...
const makeNoise = function () {
    return ("Pling!!");
};

// makeNoise();

/*
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base; 
    }

    return result;
};
// console.log(power(2, 10));
*/

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's'
        }

        console.log(`${ingredientAmount}  ${unit}  ${name}`);
    }

    ingredient(1, 'can', 'chickpeas')
    ingredient(1, 'cup', 'tahini')
    ingredient(1, 'cup', 'juice')
    ingredient(1, 'tablespoon', 'olive oil')
    ingredient(1, 'teaspoon', 'cumin')
};
// console.log(hummus(2))

// Function Declaration 
/*
console.log("There will be no", future())

function future() {
    return "no Flying cars"
}
*/

// Arrow function...
/*
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
*/

// Blowing Up the stack...

/*
function chicken() {
    return egg();
}

function egg() {
    return chicken()
}

console.log(chicken(), "Returned First")
*/

// Optional Arguments...
/*
function minus (a, b) {
    if (b === undefined) return -a
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));
*/

// Closure
/*
function wrapValue (n) {
    let local = n;
    return () => local;
}
let warp1 = wrapValue(1);
let warp2 = wrapValue(2);
// console.log(warp1);
// console.log(warp2);

function mutiplier (factor) {
    // returns a function which also is stored
    return number => number * factor;
}

// the function value stored in twice, will remember its environment...
let twice = mutiplier(2);
console.log(mutiplier(2))
console.log(twice(5));
*/

// Recursive...
function power (base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        return base * power(base, exponent -1);
    }
}
console.log(power(2, 3));



/*
* Defining Functions
* Function can have many parameter {e.g-->>(x)} or no parameter at all...
* Return keyword without expression before returns undefined...
* Local and Global Binding function...
* Blocks and Function
* Lexical Scooping is approach to binding visibility...
* When function keyword is used at beginning, it works differently
* It is called function declaration doesn't require semicolon at the end, and are not part of regular top-to-bottom flow of control...
* Arrow function: talks like this.input (params) produces this.result(body). Used to write small function expression in less verbose way...
* Call stack is the place the computer stores how programmes run and jump into eachother..
* Local Binding are created anew on every function call
* Closure is being able to reference a specific instance of a local binding in an enclosing scope.
* function that calls itself is called Recursive...
**/

// current address: http://127.0.0.1:5500/index.html