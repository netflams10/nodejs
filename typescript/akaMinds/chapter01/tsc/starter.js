"use strict";
// number, string, boolean,
// console.log("Your code goes here!!!");
// Data Types
function add(n1, n2, showResult, phrase) {
    // console.log(typeof(n1));
    var result = n1 + n2;
    // console.log(phrase, n1+n2) ==>> same old bug becomes a string...
    if (showResult)
        console.log(phrase + result);
    else
        return result;
}
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";
// add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult);
// console.log(result);
// objects {age:30}, 
