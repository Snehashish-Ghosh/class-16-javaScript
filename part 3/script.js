// **. comparison operators: it will differentiate between two item & will give us Boolean value
// *types of comparison operators
// 1. == : its define in between two element is this equal or not? or its make comparism between two value. (& single = is assignment operator.)
// == is for checking value only
console.log(9 == 9);
console.log(9 == 8);
console.log(9 == "9");

// === mean value & data type both is equal ot not
console.log(9 === "9");
console.log("9" === "9");

// != not qual for justify the value is not equal
console.log(9 != 9);

// !== to check not equal value or not equal type
console.log(9 !== 9);
console.log(9 === 9);
console.log(9 !== "9");

// > greater then to indicate big or small
console.log(9 > 8);
console.log(9 > 10);

// < Less then to indicate big or small
console.log(9 < 7);
console.log(9 < 10);

// >= greater then equal , it mean left side value is greter then  or qual
console.log(9 >= 7);
console.log(9 >= 9);

// <= less then equal , it mean right side value is greter then  or qual
console.log(9 <= 7);
console.log(9 <= 10);
console.log(9 <= 9);
//  ! (ternary operators): it will be learn in later.

// ** Logical Operators
// 1. && logical and: it will differentiate between two item & will give us Boolean value. like (data && data) Like if you take shower & foods then you can go to school.
let a = 6;
let b = 5;
console.log(a < 9);
console.log(b > 3);
console.log(a < 9 && b > 3);

let x = 6;
let y = 2;
console.log(x < 9);
console.log(y > 3);
console.log(x < 9 && y > 3);

// 2. || : logical or: it check atleast anyone true between two data, then output will be true. Like if you take shower or foods(anyone) then you can go to school
console.log(x < 9 || y > 3);

//  ! logical not: it will shows oposite result
console.log(!(x == y));

// 3. Operator precedence : BODMAS(),powerx^2,/,*,+,-
console.log((36 / 6) * 3 + 2 ** 2 - (3 + 5));
// 6*3+2**2-8
// 6*3+4-8
// 18+4-8
// 22-8
// 14

// 4. Template Literals: problem solving ` backtick
const firstName = "asif";
const lastName = "akbar";
let age = 34;
let job = "web Developer";
const country = "Bangladesh";
console.log(firstName + " " + lastName);
// I'm Shuvo, 34 years old web developer
console.log("I'm Shuvo, 35 years old web developer!");
console.log(
  "I'm" +
    " " +
    firstName +
    " " +
    lastName +
    "," +
    age +
    " " +
    "years old" +
    " " +
    job +
    "!"
);
console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job}!`);
console.log(`I love ${country}!`);
// Template Literals: Using for extra line, so just enter
console.log(`I'm ${firstName} ${lastName},
${age} years old,
${job}!`);

console.log(`Bangladesh win ${2 + 1} Series`);

// If or Else Statement : dor decesion making
// Structure:
// if () {

// } else {

// }

if (5 > 3) {
  console.log("5");
}

if (5 > 6) {
  console.log("5");
} else {
  console.log("Someting else");
}

if (10 < 15) {
  console.log(10);
} else {
  console.log("something else");
}

if (10 < 2) {
  console.log(10);
} else {
  console.log("something else");
}

let adritaAge = 6;

if (adritaAge >= 6) {
  console.log("adrita can start school");
} else {
  console.log("adrita can not start school");
}

let snehaaAge = 5;

if (snehaaAge >= 6) {
  console.log("sneha can start school");
} else {
  console.log("sneha can not start school");
}
