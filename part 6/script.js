// function Decleration : here if we want  we can call const before function decleration
function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const age = calculateAge(1987);
console.log(age);

// Practice 1:  Working Period
// function calculateJobYear(joiningDate) {
//   const JoinDate = 2022 - joiningDate;
//   return JoinDate;
// }
// const JoinDate = calculateJobYear(2000);
// console.log(JoinDate);

// function calculateJobYear(joiningDate) {
//   return 2022 - joiningDate;
// }
// const JoinDate = calculateJobYear(2000);
// console.log(JoinDate);

// Practice 2: Average

// function Decleration another way to return  without vairable
function calculateAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calculateAge1(1988);
console.log(age1);

// function Expression: here we have to call const after function decleration
const calculateAgeNew = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calculateAgeNew(1975);
console.log(age2);

// Arrow function : > here dont need fundtion decleration also dont need return
// Example 1: its little simmiler with function expression
const calculateAgeAnother = (birthYear) => 2022 - birthYear;
const age3 = calculateAgeAnother(2002);
console.log(age3);

// Example 2: for big size function just need to add {} after this must be use return
const calculateAgeAnother1 = (birthYear) => {
  return 2022 - birthYear;
};
const age4 = calculateAgeAnother1(2002);
console.log(age4);

// Example 3: for real life(here 62 is approximate job life)
const jobLeft = (birthYear) => {
  const age = 2022 - birthYear;
  return 62 - age;
};
const RahimAgeLeft = jobLeft(1972);
console.log(RahimAgeLeft);
console.log(`Rahim job time left is ${RahimAgeLeft} years! `);

// Array: its data structure & object for store multiple vatiable & array is non primitive data type

// Example 1:normal variable store
const student1 = "Asif";
const student2 = "Rakib";
const student3 = "Rahim";

console.log(student2);
console.log(student3);

// Example 2: Array []
const students = ["Asif", "Rakib", "Rahim"];
console.log(students);
// console with index number: 0, 1, 2, 3...........
console.log(students[0]);
console.log(students[2]);
console.log(students[1]);

// Example 3:  Different way of Array its not most useable
const players = new Array("Sakib", "Tamim", "Miraz", "Liton");
console.log(players[0]);
console.log(players[3]);

// How to change one specific vairable. const data can be change only for non primitive data type. Here we can change variable data only bb single transform, cant change all together.
const std = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(std);
std[0] = "d";
console.log(std);

// how To check how much item or data in a long Array
console.log(std.length);
console.log(std[std.length - 1]);

// Example 4: We can store all type of data both number & string
const user = ["Biswajit", "Adhikary", 1988, 2022 - 1988, "Web Developer"];
console.log(user);
console.log(user[0]);
console.log(user[user.length - 1]);

// Array Method: different types of Array method. its most useable
const users = ["User1", "User2", "User3"];
console.log(users);
// 1...Push methods of Array to add another data at last
users.push("User4");
console.log(users);
// to add user at first Array
users.unshift("First users");
console.log(users);
// to remove last item () for remove last item dont need to put anything in between ()
users.pop();
console.log(users);
// to remove first item for adde item first dont need to put anything in between ()
users.shift();
console.log(users);
// to remove last item & show which one was removed

const item = ["1", "2", "3", "4"];
console.log(item);
const removeItem = item.pop();
console.log(removeItem);
console.log(item);

// to remove first item & show which one was removed
const deleteItem = item.shift();
console.log(deleteItem);
console.log(item);
