// objects {age: 30}


// const person: {
//     name: string,
//     age: number
// } = {
//     name: "Opeyemi",
//     age: 29
// }

// just follow this process
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // this marks a tuple ==>> (fixed length)
//     role: [number, string]
// } = {
//     name: "Opeyemi",
//     age: 30,
//     hobbies: [ 'Sport', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Opeyemi",
    age: 30,
    hobbies: [ 'Sport', 'Cooking'],
    role: Role.ADMIN
}

console.log(person);
console.log(person.name);

// Rejected by typescript
// console.log(person.nickname);


// Arrays [number, string, boolean]
let favoriteActivity: string[];
//Back in javascript world
let favouriteActivity: any[];

// results in error
// favoriteActivity = "Sport"
favoriteActivity = ["Sport"];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

// Tuple [1,2] ==>> fixed length array

// push is exception typscript can't catch it
// person.role.push('admin');

// Results in error for typescript
// person.role[1] = 10;
// person,role = [0, 'admin', "user"]

// Enum enum{new, old} ==>> enumerated global list
// Custom Keyword ==>> Camel case as convention

enum EnumTest {ADMIN = 5, READ_ONLY, AUTHOR = "AUTHOR"};

if (person.role === Role.AUTHOR) {
    console.log('is author');
}

// Any ===>>> any type of assignment
// Dont fall Back to any...

// any type of Array
let favish: any[];
