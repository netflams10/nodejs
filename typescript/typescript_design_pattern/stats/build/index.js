"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// Do not export anything out of your index.ts file
// video: 105 watched;
var manUnitedWins = 0;
var reader = new CsvFileReader_1.CsvFileReader('football2.csv');
reader.read();
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Matches won by " + manUnitedWins + " games");
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
