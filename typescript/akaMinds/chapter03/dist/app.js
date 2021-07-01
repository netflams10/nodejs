"use strict";
// Interfaces
// interface Person {
//     name: string;
//     age: number;
// can implements multiple interface
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user2;
user2 = new Person("Maxwell");
user2.greet(`Hi there I am- `);
console.log(user2);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
