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
let bands: string[] = [];
bands.push("Ban Halen");

// Tuple

let myTup: [string, number, boolean] = ["Deep", 23, true];

let mix = ["John", 1, false];

mix = myTup;

myTup[1] = 42;

// /Objest

let myObj: object;

myObj = [];

console.log(typeof myObj);

myObj = bands;

myObj = {};

const exampleObj = {
  prop1: "Deepak",
  prop2: true,
};

exampleObj.prop1 = "lse";

interface Guitarist {
  name?: string;
  active: boolean;
  album: (string | number)[];
}

let evh: Guitarist = {
  name: "Deve",
  active: false,
  album: [1984, 5150, "OU812"],
};
let JP: Guitarist = {
  // name: "Jimmy",
  active: false,
  album: ["I", "II", "IV"],
};

// evh.years = 40;

evh = JP;

const greetGuitarists = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarists(JP));

// ENUMS

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
