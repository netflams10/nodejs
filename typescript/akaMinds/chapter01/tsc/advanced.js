"use strict";
// Union Type
// To tell typescript we are okay with either any different type (string, number)
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number')
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
var combinedNames = combine("Max", "Anna", 'as-text');
var combinedStringAges = combine("30", "26", 'as-number');
console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);
// Literal Types ==>> Exact and clear about exact types
// Force conversion
