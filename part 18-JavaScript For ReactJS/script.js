//Var = We can declare same Variable again with var. like firstname with var we can use another times.
var firstName = "Biswajit";
console.log(firstName);
firstName = "Shuvo";
console.log(firstName);
var firstName = "Srijon";
console.log(firstName);

// Let =  We can not declare same Variable again with let. like firstname with let we can not use it again.
let lastName = "Adhikary";
console.log(lastName);
lastName = "Saha";
console.log(lastName);

//Const = In this method we cant change the vairable like var or let. Which information will not reassign on there we can use const
const goodName = "Sneha";
console.log(goodName);

//Arrow Function = >
//Example 1: way to write function
function showText(text) {
  console.log(text);
}
showText("JavaScript Text");

//Example 2: another way to write function
const showTheText = (text) => {
  console.log(text);
};
showTheText("Arrow Function Text");

//Example 3: another way to write same function, if we dont need to pass any parameter & the condtion will direct showing in console.
const showTheText2 = () => {
  console.log("Normal Text");
};
showTheText2();

//Example 4: another way to write same function in one line
const showResult = (number) => {
  return number * 2;
};
// showResult(2);
console.log(showResult(2));
//Example 5: same function in short way
const showNumber = (number) => number * 3;
console.log(showNumber(3));

//*Spread Operator: It wil use to copy an Array object into another Array
//Aray Example
const num1 = [1, 2, 3, 4];
console.log(num1);

//How to copy num1 into num2 (...)
const num2 = [...num1, 5, 6];
console.log(num2);

//Copy Object
const user1 = {
  fName: "Snehashish",
  lName: "Ghosh",
};
console.log(user1);

const user2 = {
  ...user1,
  age: 34,
};
console.log(user2);

//another example where we dont know how many number wil be input, so we will use ...number, But its not spread operator.
const getNumbers = (...number) => {
  console.log(number);
  console.log(number[1]); //show with index number
};
getNumbers(2, 4, 6);

//Destructuring: To receive data from object or Array in new variable
//Aray Example to save data in new varaiblew
const digit = [1, 2, 3, 4];
console.log(digit);
console.log(digit[0]);

const d1 = digit[0]; //to save data in new vairable or const
console.log(d1);

const d2 = digit[2]; //to save data in new vairable or const
console.log(d2);

//another example by using Destructuring method
const number1 = [10, 20, 30, 40];
const [n1, n2, n3] = number1;
console.log(n1);
console.log(n2);

const [a1, , , a4] = number1; //way to select last numebr
console.log(a4);

//Object Destructuring

const user3 = {
  fName: "shuvo",
  lName: "Ghosh",
  age: 32,
};
const NewName = user3.fName;
console.log(NewName);
const NName = user3.lName;
console.log(NName);
//Another example to write in short way: remeber here index number is not needed, key is fact
const { age, lName } = user3;
console.log(age);
console.log(lName);

//Array Map: if need to see every tem or need to work with every number

const nDigit = [100, 200, 3, 4, 5, 600];
nDigit.map((num) => {
  //   console.log(num);
  console.log(num * 2);
});

//Filter & reduce also need for react

//* JavaScript Classes: Its a template, its help us to create object. class fristname should be capital letter
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar = new Car("BMW", 2022);
console.log(myCar);
const yourCar = new Car("Ford", 2023);
console.log(yourCar);

//We can write also function on there
class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    return 2023 - this.year;
  }
}
const myVehicle = new Vehicle("BMW", 2000);
console.log(myVehicle);
const yourVehicle = new Vehicle("Ford", 2022);
console.log(yourVehicle);

console.log(myVehicle.age());
console.log(yourVehicle.age());
