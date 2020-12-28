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

// ************Inherit Behaviors from a Supertype
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line
// let dog = new Animal()

// **********Set the Child's Prototype to an Instance of the Parent
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Dog(name) {
//   this.name = name
// }
// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype)

// let beagle = new Dog();
// beagle.eat()

// ************Reset an Inherited Constructor Property
// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line
// // Bird.prototype.constructor = Bird
// Dog.prototype.constructor = Dog

// let duck = new Bird();
// let beagle = new Dog();

// ********Add Methods After Inheritance
// function Animal() {}
// Animal.prototype.eat = function () {
//   console.log("nom nom nom");
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.bark = function () {
//   console.log("Woof!")
// }
// Dog.prototype.constructor = Dog;

// let beagle = new Dog();

// ********Override Inherited Methods
// function Bird() {}

// Bird.prototype.fly = function () {
//   return "I am flying!";
// };

// function Penguin() {}
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird."
// }
// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());
