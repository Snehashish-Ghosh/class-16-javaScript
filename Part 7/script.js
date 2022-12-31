// JS Object

//Array Example:  we will use [], It will show based on index number.
const UserArray = ["Adrita", "Adhikary", 2017, "one"];
console.log(UserArray);
console.log(UserArray[0]);

// Example of Object: it will be under key & value & we will use {}, It will be show in browser Alphabetically
const UserObject = {
  firstName: "Adrita",
  lastName: "Adhikary",
  birthYear: 2017,
  className: "one",
};
console.log(UserObject);

//How to show object in bracket notation: [" "] or [' ']. in bracket we can do more job
console.log(UserObject["firstName"]);

//How to show object in dot notation: . it is easy to write & most usable
console.log(UserObject.birthYear);

// How to add another item in object with dot:
UserObject.hobby = "Drawing";
console.log(UserObject);
console.log(UserObject.hobby);

// How to add another item in object with bracket:
UserObject["birthPlace"] = "Khulna";
console.log(UserObject["birthPlace"]);

// Object Example: 2 - we can write boolean & function also.
const UserObjectTwo = {
  firstName: "Biswajit",
  lastName: "Adhikary",
  isJob: true,
  calculateAge: function (birthyear) {
    return 2022 - birthyear;
  },
};
console.log(UserObjectTwo.isJob);
console.log(UserObjectTwo.calculateAge(1988));

// Example with bracket
console.log(UserObjectTwo["calculateAge"](1989));

// Object Example: 3
const userDetails = {
  Name: "Snehashish",
  endName: "Ghosh",
  education: "MBA",
  profession: "Business",
  calculateAge: function (birthYear) {
    return 2022 - birthYear;
  },
};
console.log(userDetails);
console.log(userDetails.calculateAge(1987));

//This: we can use it to avoid resuing of vairable by type this. here UserObjectThree we can replace by this. but for console we cant use this.
const UserObjectThree = {
  firstName: "Biswajit",
  lastName: "Adhikary",
  birthyears: 1988,
  isJob: true,
  calculateAge: function () {
    // console.log(this.birthyears); for checking is there birthyear working in console
    return 2022 - this.birthyears;
  },
  userDetail: function () {
    return `This is user ${this.firstName} ${this.lastName}, born in ${this.birthyears}!`; // To see all obeject details ( this is biswajit adhikary, born in 1988!)
  },
};
console.log(UserObjectThree.calculateAge());
console.log(UserObjectThree.userDetail()); // To see all obeject details ( this is biswajit adhikary, born in 1988!)

//Loop: depent on a condition we can repeat same work & its mostly useable there are various types of loops are folloings:
// 1 for loop: when we need task 300 for example
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");
console.log("Task 6");
console.log("Task 7");
console.log("Task 8");
// for(from where to start) then which depend on which condition we will start like : task will be continue untill equal to <=8. then task will increase step one by one so task ++
for (let task = 1; task <= 8; task++) {
  // console.log("Task 1");  here same task running 8 times
  console.log(`Task ${task}`);
}
// Same thing we will write in below start when will do programing
for (let i = 0; i <= 8; i++) {
  console.log(`Student ${i}`);
}

// 2. while Loop
console.log("job 10");
console.log("job 11");
console.log("job 12");
console.log("job 13");
console.log("job 14");
console.log("job 15");
console.log("job 16");
console.log("job 17");
// we have to mention the variable while, then task will run how many times. he will not check anything more
let i = 10;
while (i <= 17) {
  console.log(`job ${i}`);
  i++;
}

//Array : When array data we want to see as single data & array index start from 0.
const newArray = [
  "Data 1",
  "Data 2",
  "Data 3",
  "Data 4",
  "Data 5",
  "Data 6",
  "Data 7",
  "Data 8",
];
console.log(newArray);
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);
console.log(newArray[4]);

for (let i = 0; i <= 4; i++) {
  console.log(newArray[i]);
}

console.log(newArray.length); //to add new "data 6", we can check the data length then i less then newArray.length
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
console.log(newArray);

// When we need to run a loop from backward like data 8,....data 1
for (let i = newArray.length - 1; i >= 0; i--) {
  console.log(newArray[i]);
}

console.log(newArray);
//Loop Break: When we need to brake the Loop: like from Data 8, we will take untill data 4: i == 4

for (let i = 0; i < newArray.length; i++) {
  if (i == 4) break;
  console.log(newArray[i]);
}
console.log(newArray);

//Loop Continue: But it will work like skip, so data 5 skipped
for (let i = 0; i < newArray.length; i++) {
  if (i == 4) continue;
  console.log(newArray[i]);
}

// IndexOf: To know data position in below Array
const anotherArray = [
  "Man 1",
  "Man 2",
  "Man 3",
  "Man 4",
  "Man 5",
  "Man 6",
  "Man 7",
  "Man 8",
];
console.log(anotherArray);
console.log(anotherArray.indexOf("Man 7"));
console.log(anotherArray.indexOf("Man 2"));
console.log(anotherArray.indexOf("Man 9")); //When data is not available in this Array then indexOf will show negative value

// Includes:  to know boolean value. Like a data is having in this Array or not
console.log(anotherArray.includes("Man 8"));
console.log(anotherArray.includes("Man 19"));
