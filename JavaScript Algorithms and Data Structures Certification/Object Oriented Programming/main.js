// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0
//   }
//   login() {
//     console.log(`${this.name} has logged in`);
//     return this
//   }
//   logout() {
//     console.log(`${this.name} has logged out`);
//     return this
//   }
//   updateScore() {
//       this.score++
//       console.log(this.email + " score is " + this.score)
//       return this
//   }
// }

// function User(email, name) {
//   this.email = email;
//   this.name = name;
//   this.score = 0;
//   this.login = function () {
//     console.log(`${this.email} has logged in`);
//   };
// }

// User.prototype.logout = function () {
//   console.log(`${this.email} has logged out`);
// };

// let eddi = new User("eddi@hotmaild.de", "Eddi");
// console.log(eddi);
// let dave = new User("dave@hotmaild.de", "Dave");
// console.log(dave);


// Use Inheritance So You Don't Repeat Yourself
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };


// Inherit Behaviors from a Supertype
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};


let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
let dog = new Animal()
