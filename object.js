var person = {
  name: "Anil",
  age: 30,
  gender: "Male",
  place: "Blr",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);

for (key in person) {
  console.log(`${key} : ${person[key]}`);
}

person.greet();

person.displayAge = function () {
  console.log(this.age);
};

console.log(person.displayAge());

function Organization(name, place, est_year) {
  this.name = name;
  this.place = place;
  this.est_year = est_year;
  this.displayDetails = function () {
    console.log(`
    Name : ${this.name} \n
    Place : ${this.place} \n
    EST YEAR : ${this.est_year}
    `);
  };
}

var facebook = new Organization("Facebook", "US", "2001");

facebook.displayDetails();
