
@classDecorator
class Boat {
    color: string = 'red';

    get formattedColor (): string {
        return `This boat color is ${this.color}`;
    }

    @logError('Oops boat was sunk!')
    pilot (@parameterDecorator speed: string): void {
        // throw new Error();
        // console.log('swish');
        if (speed === 'fast') {
            console.log('swish')
        } else {
            console.log('nothing')
        }
    }

    // @logError
    // pilot (): void {
    //     throw new Error();
    //     console.log('swish');
    // }
}



// // third arg is property descriptor
// function logError (target: any, key: string, desc: PropertyDescriptor): void {
//     // calling existing reference to that method
//     // desc.value is a reference to that func value
//     const method = desc.value;
//
//     // catching that error in try and catch
//     try {
//         method()
//     } catch (e) {
//         console.log('Oops boat was sunk!');
//     }
// }

function classDecorator (constructor: typeof Boat) {
    console.log(constructor)
}

function parameterDecorator (target: any, key: string, index: number) {
    console.log(key, index)
}

function testDecorator (target: any, key: string) {
     console.log(target);
     console.log(key)
}


function logError (errorMessage: string) {
    return function logError(target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        try {
            method()
        } catch (e) {
            console.log(errorMessage);
        }
    }
}


// function testDecorator (target: any, key: string): void {
//     console.log("Target:", target);
//     console.log("Key:", key);
// }

// testDecorator(Boat.prototype, 'pilot');

// new Boat().pilot();