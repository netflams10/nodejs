// Unknown Types
// values can be stored without error... Different from any

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// Unknown is better than Any

if (typeof userInput === 'string') {
    userName = userInput;
}

// Never Type
// It does not just return void

function generateError (message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);

// const result = generateError("An error occured!", 500);
// console.log(result);