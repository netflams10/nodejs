import "reflect-metadata";




@printMetaData
class Plane 
{
    color: string = 'red';

    @markFunction('hi there')
    fly (): void {
        console.log('vrrrrrrrr');
    }
}


//This is not a factory decorator
// Reminder==>> factory decorator is the one that returns a function
// function markFunction (target: Plane, key: string) {
//     Reflect.defineMetadata('secret', 123, target, key);
// }


// making markFunction into a factory decorator
function markFunction (secretInfo: string)
{
    return function  (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}

// for the class constructor functin type should be (target: typeof Class)
function printMetaData (target: typeof Plane)
{
    console.log(target.prototype);
    // loops through all keys in Plane class
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}



// To get this secret metadat

//need to react inside this plane object 
// Prototype is the constructor function
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);




// this import has a single global variable to the scope which name is Reflect

// const plane = {
//     color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane)

// console.log(plane)

// const note = Reflect.getMetadata('note', plane);
// console.log(note)

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);