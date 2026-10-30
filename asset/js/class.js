var number = 10;
console.log(number);
var number = 20;
console.log(number);
let name = "james";
let isStudent = true;
let result = null;
let age1 = 25;
let x;

let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}

let score = Number(prompt("Enter your score:"));
if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 70 && score < 90) {
  console.log("Grade B");
} else if (score >= 50 && score < 70) {
  console.log("Grade C");
} else if (score >= 0 && score < 50) {
  console.log("Grade F");
} else {
  console.log("Invalid score.");
}

let number = Number(prompt("Enter a number:"));
if (number > 0) {
  if (number % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Number is zero");
}
