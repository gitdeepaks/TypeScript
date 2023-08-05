"use strict";
let strArr = ["one", "hey", "Deepak"];
let guitars = ["start", "leies", 5150];
let mixedDat = ["EVH", 1984, true];
strArr[0] = "jonny";
strArr.push("hey");
guitars[0] = 1984;
guitars.unshift("jim");
guitars = strArr;
mixedDat = guitars;
mixedDat = strArr;
// guitars = mixedDat;
let test = [];
let bands = [];
bands.push("Ban Halen");
// Tuple
let myTup = ["Deep", 23, true];
let mix = ["John", 1, false];
mix = myTup;
myTup[1] = 42;
// /Objest
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Deepak",
    prop2: true,
};
exampleObj.prop1 = "lse";
let evh = {
    name: "Deve",
    active: false,
    album: [1984, 5150, "OU812"],
};
let JP = {
    // name: "Jimmy",
    active: false,
    album: ["I", "II", "IV"],
};
// evh.years = 40;
evh = JP;
const greetGuitarists = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarists(JP));
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
