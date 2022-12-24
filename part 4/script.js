// 1. Type Conversion: its use to change variable data from one type  to another data type.
const inputNumber = "7500";
console.log(inputNumber + 10);

// addEventListener. Number function
console.log(inputNumber);
console.log(Number(inputNumber));
console.log(Number(inputNumber), inputNumber);
console.log(typeof inputNumber);
console.log(typeof Number(inputNumber));

// number to string conversion
const birthYear = 1988;
console.log(birthYear);
console.log(typeof birthYear);
console.log(String(birthYear));
console.log(typeof String(birthYear));

// text to number conversion is not possible, it is invalid number of data type  it will show naN(not a number)
let firstName = "Adrita";
console.log(Number(firstName));
console.log(typeof Number(firstName));

// boolean conversion
let inputID = "7500";
let middleName = "Sneha";
console.log(Boolean(inputID));
console.log(Boolean(middleName));

// 2. JavaScript type Coercion: its automatic data conversion process, butit will not work for +, remeber it
let bookNumber = 5;
console.log("I have " + bookNumber + "  story Book!");

// for - data type will be string to number
console.log("20" - 5);
console.log("20" - "5");

// for + data  type will be change to string
console.log("20" + 5);

// for * data type will be string to number
console.log("20" * 5);

// for / data type will be string to number
console.log("20" / 5);

// he will + before string & finally it will string value
console.log(5 + 10 + 5 + "5");

// string to number(here last 10 is number sio he added with string)
console.log("100" - "50" + 10);
console.log("15" - "5" - "4" - "3" + 5);

// if last 10 become string then result will be string
console.log("100" - "50" + "10");
console.log("15" - "5" - "4" - "3" + "5");

// 3. JavaScript truthy value: when the value or data is boolean true, except 5 types falsy value rest of all truthy value
console.log(Boolean(1));
console.log(Boolean("1"));
console.log(Boolean("Adrita"));

const pen = 1;
if (pen) {
  console.log("I have a pen!");
} else {
  console.log("I dont have pen!");
}

// JavaScript falsy value: when the value or data is boolean false, there have 5 types falsy value
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const job = 0;
if (job) {
  console.log("I have a good Job!");
} else {
  console.log("I am looking for a good Job!");
}

let salary = 15000;
if (salary) {
  console.log("My salary is set");
} else {
  console.log("My salary is not set");
}

let money;

if (money) {
  console.log("I have money");
} else {
  console.log("I dont have money");
}

// 4. Conditional Statement
let earning = 4000;

if (earning > 35000) {
  console.log("He is earning a good amount");
} else if (earning > 20000) {
  console.log("His earning is not bad");
} else if (earning > 10000) {
  console.log("His earing is average");
} else if (earning < 5000) {
  console.log("His earning is poor");
} else {
  console.log("He is not earning good enough");
}

let today = "friday";

if (today === "Saturday") {
  console.log("Today at 9 Pm we have main class");
} else if (today === "Sunday") {
  console.log("Today at 9 Pm we have Support class");
} else if (today === "Monday") {
  console.log("Today at 9 Pm we have main class");
} else if (today === "Tuesday") {
  console.log("Today at 9 Pm we have Support class");
} else if (today === "Wednesday") {
  console.log("Today at 9 Pm we have main class");
} else if (today === "Thrusday") {
  console.log("Today at 9 Pm we have Support class");
} else {
  console.log("Today is our Holiday");
}

// 5. Nested Conditional Statement: it will read a code block & condition, then he will again read more code block & will be find out final condition under this code block, Basically conditon under condition
const x = 10;
if (x >= 10) {
  if (x == 10) {
    console.log("X is equal to 10");
  } else {
    console.log("X is greater than 10");
  }
} else {
  console.log("X is lower than 10");
}

// 6. Switch Statement : Same like if else just writing method is short

let day = "cc";

switch (day) {
  case "a": // day ==== "a"
    console.log("We have Live class today");
    break;
  case "b": // day ==== "b"
    console.log("We have Support class today");
    break;
  case "c":
    console.log("We have Live class today");
    break;
  case "d":
    console.log("We have Support class today");
    break;
  case "e":
    console.log("we have live class today");
    break;
  case "f":
    console.log("We have Support class today");
    break;
  default:
    console.log("Today is our Holiday");
}
