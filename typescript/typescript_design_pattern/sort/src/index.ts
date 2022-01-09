import { Sorter } from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedLists } from './LinkedLists';



// const numberCollection = new NumbersCollection([10, 5, 7, -5, 0]);
// numberCollection.sort();
// console.log(numberCollection.data);

// const characterCollection = new CharactersCollection('XaabnMMY');
// characterCollection.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedLists();
linkedList.add(30);
linkedList.add(20);
linkedList.add(10);
linkedList.add(5);
linkedList.sort();
linkedList.print();

// const linkedList = new LinkedLists();
// linkedList.add(30);
// linkedList.add(20);
// linkedList.add(10);
// linkedList.add(5);
// linkedList.add(9);
// linkedList.add(-10);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();


// const charactersCollection = new CharactersCollection('Xaaync');
// const sortC = new Sorter(charactersCollection);
// sortC.sort();
// console.log(charactersCollection.data);

// const numbersCollection = new NumbersCollection([10, 5, 7, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const sorter = new Sorter([10, 5, 7, -5, 0]);
// sorter.sort()
// console.log(sorter.collection);