// ALIAS TYPE
// Are really Useful 
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';




// Union Type
// To tell typescript we are okay with either any different type (string, number)

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') result = +input1 + +input2
    else result = input1.toString() + input2.toString();
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
const combinedNames = combine("Max", "Anna", 'as-text');
const combinedStringAges = combine("30", "26", 'as-number');

console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);

// Literal Types ==>> Exact and clear about exact types
// Force conversion