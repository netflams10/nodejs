



// Interfaces
// interface Person {
//     name: string;
//     age: number;

//     greet (phrase: string): void;
// }



// let user1: Person;

// user1 = {
//     name: "Max",
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + this.name);
//     }
// }

// user1.greet(`Hi there I am - `);



interface Named {
    readonly name: string;

    // Don't want to force optional
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

// can implements multiple interface
class Person implements Greetable {
    name: string;
    age = 30;

    constructor (n: string) {
        this.name = n
    }

    greet (phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let user2: Greetable;

user2 = new Person("Maxwell");
user2.greet(`Hi there I am- `);
console.log(user2);

// Interface for function...

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a:number, b:number) : number
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}
