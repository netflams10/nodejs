import { NumbersCollection } from './NumbersCollection';




// interface Sortable {
//    length: number;
//    compare (leftIndex: number, rightIndex: number): boolean; 
//    swap(leftIndex: number, rightIndex: number): void;
// }


export abstract class Sorter 
{
    // abstract is used to mark that something is existing in the future
    // Or will be implemented by some child class

    abstract compare (leftIndex: number, rightIndex: number): boolean;
    abstract swap (leftIndex: number, rightIndex: number): void;

    // because length is getter we treat differently
    abstract length:number;

    sort (): void {
        // destructure length
        const { length } = this;

        for(let i = 0;i < length; i++) {
            for (let j = 0; j < length -i -1; j++) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1);                    
                }
            }
        }
    }
    // Array of numbers: number[]
    // collection: number [];

    // constructor (collection: number[]) {
    //     this.collection = collection;
    // }

    // Same as above constructor
    // constructor (public collection: Sortable /* TODO: Annotationnumber [] | string */) {}

    // sort (): void {
    //     // destructure length
    //     const { length } = this;

    //     for(let i = 0;i < length; i++) {
    //         for (let j = 0; j < length -i -1; j++) {
    //             if (this.compare(j, j+1)) {
    //                 this.swap(j, j+1);                    
    //             }
    //         }
    //     }
    // }

    // sort (): void {
    //     // destructure length
    //     const { length } = this.collection;

    //     // Only works on number of Array
    //     // "X".charCodeAt(0) -->> Used to know the character code of a string...
    //     for(let i = 0;i < length; i++) {
    //         for (let j = 0; j < length -i -1; j++) {
    //             // Using type guard to restore access 
    //             // to the type of instance we dealing with
    //             // type guard is used for anything not [number. string, boolean]
    //             if (this.collection instanceof Array) {
    //                 // type of collection is an array of number
    //                 // collection === number[]
    //                 if (this.collection[j] > this.collection[j + 1]) {
    //                     const leftHand = this.collection[j];
    //                     this.collection[j] = this.collection[j + 1]
    //                     this.collection[j+1] = leftHand;
    //                     // console.log(this.collection);
    //                 }
    //             }

    //             // this only works if the collection is a string
    //             // If collection is a string do this logic
    //             // logic compared to swap character in a string
    //             if (typeof this.collection === 'string') {

    //             }

    //             // console.log(this.collection);
    //         }
    //     }
    // }
}