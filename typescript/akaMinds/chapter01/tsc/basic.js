"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Opeyemi",
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
console.log(person);
console.log(person.name);
// Rejected by typescript
// console.log(person.nickname);
// Arrays [number, string, boolean]
var favoriteActivity;
//Back in javascript world
var favouriteActivity;
// results in error
// favoriteActivity = "Sport"
favoriteActivity = ["Sport"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var EnumTest;
(function (EnumTest) {
    EnumTest[EnumTest["ADMIN"] = 5] = "ADMIN";
    EnumTest[EnumTest["READ_ONLY"] = 6] = "READ_ONLY";
    EnumTest["AUTHOR"] = "AUTHOR";
})(EnumTest || (EnumTest = {}));
;
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
// Any ===>>> any type of assignment
// Dont fall Back to any...
// any type of Array
var favish;
