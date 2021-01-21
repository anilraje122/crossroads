var read = require("readline-sync");

var n1 = read.question("Enter a number : ");
var n2 = read.question("Enter another number : ");

if (n1 > n2) {
  console.log(`${n1} is greater than ${n2}`);
} else if (n2 > n1) {
  console.log(`${n2} is greater than ${n1}`);
} else {
  console.log(`${n1} is equal to ${n2}`);
}
