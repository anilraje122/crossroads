var read = require("readline-sync");

console.log("Press 1 for malayalam or 2 for english!");
var input = read.question("Enter your choice : ");

switch (input) {
  case "1":
    console.log("You have selected malayalama");
    break;
  case "2":
    console.log("You have selected english");
    break;
  default:
    console.log("Wrong choice!");
    break;
}
