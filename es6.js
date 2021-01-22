// let and const

// var
var num = 10;
var num = 30;

console.log(num);

// let
let num2 = 200;
// let num2 = 300;

console.log(num2);

// const
const num3 = 500;
// const num3 = 600;

console.log(num3);

// functional scope - let, var, const
let a = 10;
const b = 20;
var c = 40;

function hello() {
  a = 100;
  // b = 200;
  c = 400;
}

hello();

console.log(a);
console.log(b);
console.log(c);

// default parameter

function print_hello(fname = "firstname", lname = "lastname") {
  console.log(`${fname} ${lname}`);
}

print_hello();

// class

class Parent {
  hello_from_parent() {
    console.log("hello from parent");
  }
}

class Math extends Parent {
  constructor(num1, num2) {
    super();
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    console.log("Sum is " + (this.num1 + this.num2));
  }
}

const new_obj = new Math(1, 2);
new_obj.sum();
new_obj.hello_from_parent();

// arrow function

const myfunction = () => {
  console.log("this is an arrow function");
};

myfunction();

const prod = (a, b) => {
  console.log("Product is " + a * b);
};

prod(10, 2);

const addNumbers = (a, b) => a + b;
console.log(addNumbers(1, 2));
