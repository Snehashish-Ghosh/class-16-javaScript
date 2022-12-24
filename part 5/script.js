// 1. Ternary operator : it is a conditional operator. its make if else condition more easier. Normally we will use if else. for single condition we can use Ternary operator
// if else example
let age = 15;
if (age >= 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}

// 1. Ternary operator example
let years = 18;
years >= 18 ? console.log("You are adult") : console.log("You are not adult");

// 1. Ternary operator example

let food;

if (age > 12) {
  food = "chicken";
} else {
  food = "Ice-Cream";
}
console.log(food);
console.log(`He like to eat ${food}`);

console.log(`He like to eat ${age > 12 ? "chicken" : "Ice-Cream"}`);

//2. JavaScriptFunction: Its a block of code its use to solve  Specific work. here is two part. One part use to write function & another part is to call that function
// Example one: 1, function, 2 function name, 3, like if else

function readMore() {
  console.log("Read More");
}
readMore();
// -----------------------------------------
function showText() {
  console.log("some text");
}
showText();

// Example two: () in this braket we can put a data or argument, parameter
function showName(name) {
  console.log(name);
}
showName("Adrita");
showName("Biswajit");
showName("Shuvo");

// Example three:
function calculateNumber(n1, n2) {
  console.log(n1 * n2);
}
calculateNumber(5, 3);
calculateNumber(1000, 500565);

// Example four:
function averageMark(s1, s2, s3, s4, s5) {
  console.log((s1 + s2 + s3 + s4 + s5) / 5);
}
averageMark(90, 88, 75, 92, 86);
averageMark(100, 100, 100, 100, 80);

// Example four: for real project

function meanMark(b1, b2, b3, b4, b5) {
  const mean = (b1 + b2 + b3 + b4 + b5) / 5;
  return mean;
}
// console.log(meanMark(50, 40, 60, 80, 55));
// meanMark(50, 40, 60, 80, 55);
const shuvoMeanMark = meanMark(50, 40, 60, 80, 55);
console.log(shuvoMeanMark);

// Sneha average mark
const snehaMeanMark = meanMark(98, 99, 98.5, 99, 100);
console.log(snehaMeanMark);

// Smrity average mark
const smrityMeanMark = meanMark(98.5, 97, 98, 92, 100);
console.log(smrityMeanMark);

console.log(shuvoMeanMark, snehaMeanMark, smrityMeanMark);
