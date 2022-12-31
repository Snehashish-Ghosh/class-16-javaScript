// Function Calling Another function
const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};
const aAge = calculateAge(1975);
console.log(aAge);

const jobLeft = function (birthYear) {
  const age = calculateAge(birthYear);
  return 65 - age;
};

const aJobLeft = jobLeft(1975);
console.log(aJobLeft);

//JavaScript Events: jS & html interact between them with the help of Events Like window close, resize, popup etc

function displayText() {
  console.log("This is Console Text");
}

function alertText() {
  alert("This is alert text");
}

//JavaScript Strings: string can write both single or double qutation. But we should use any one
const firstName = "Asif";
const lastName = "Akbor";
console.log(firstName, lastName);
//Example when need to use "Bangladesh"
const text = 'I Love "Bangladesh"';
console.log(text);
//example : to single qutation '', in this way we cant use '' in outside
const text2 = "I 'Love' 'Bangladesh'";
console.log(text2);
// escape character: example: when need to start dobule qutation & same in between the line
// const text3 = "I \"Love\" me and \"Bangladesh\"";
// console.log(text3);

// example: wheen need \. we have to use double \\
const text3 = "I Love \\ Bangladesh";
console.log(text3);

//String Method:
//length : here result is 17, so 17 = 0...17 here space is also countable
const x = "Biswajit Adhikary";
console.log(x.length);

const text9 = "Snehashish Ghosh";
console.log(text9.length);

//String Slice by positive: it is use to cut from string then show. but slice need to parameter from where to cut & start, here start count from index 0(from cursor like Apple = 5)..... slice(0...)
const fruits = "Apple, Banana, Mango";
console.log(fruits);

const fruit1 = fruits.slice(0, 5);
console.log(fruit1);

const fruit2 = fruits.slice(7, 13);
console.log(fruit2);

const fruit3 = fruits.slice(15, 20);
console.log(fruit3);
//Now if we want to see seperate string then the result in below & here have no (,)comma
console.log(fruit1, fruit2, fruit3);

//String Slice by Negative:
const fruit = "Orange, Grapes, Cherry";
console.log(fruit);

const fruits1 = fruit.slice(-6);
console.log(fruits1);

const fruits2 = fruit.slice(-14, -8);
console.log(fruits2);

const fruits3 = fruit.slice(-22, -16);
console.log(fruits3);

//substring: its & slice are same & substr also
const river = "Padma, Shurma, Meghna";
console.log(river);

const river1 = river.substring(0, 5);
console.log(river1);

//Replace string : variable.replace(previous.replace)
const write = "I love Khulna";
console.log(write);

const write2 = write.replace("Khulna", "Dhaka");
console.log(write2);

//To uppercase
const write3 = "Hello World";
console.log(write3);
console.log(write3.toUpperCase());

//To Lowercase
const write4 = "Hello Bangladesh";
console.log(write4);
console.log(write4.toLowerCase());

//Trim: like removing sapce
const value = "          Hello Bangladesh     ";
console.log(value);
console.log(value.trim());

//String Search: for find specific string: to know sakib is where? here index start from 1, so here R is 0....If dont find then value will be negative
const index = "Rahim Karim Sakib";
console.log(index.indexOf("Sakib"));
console.log(index.indexOf("Karim"));

//if there is two name with same then how to find
const index1 = "Rahim Karim Sakib Karim";
console.log(index1.lastIndexOf("Karim"));

//indexof & search almost same, but there have little differences
console.log(index1.search("Rahim"));
console.log(index1.search("Karim"));
