import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import {MatchResult} from './MatchResult';

// Do not export anything out of your index.ts file
// video: 105 watched;

let manUnitedWins = 0;

const reader = new CsvFileReader('football2.csv');
reader.read();

for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Matches won by ${manUnitedWins} games`);


// const matches = fs.readFileSync('football2.csv', {
//     encoding: 'utf-8'
// }).split("\n")
// .map((row: string): string[] => {
//     return row.split(",");
// });

// changing to enum - from onject
// stores related value: either int or string
// referenced like an object
// enum MatchResult {
//     HomeWin = "H",
//     AwayWin = "A",
//     Draw = "D"
// }

// const printMatchResult = () => {
//     if (match[5] === 'H') {
//         return MatchResult.HomeWin;
//     }
//     return MatchResult.AwayWin
// }


// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";

// let manUnitedWins = 0;

// for (let match of matches) {
//     if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++;
//     }
// }

// console.log(`Matches won by ${manUnitedWins} games`);