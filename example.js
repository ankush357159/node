// In object method, this refers to an object
// const fun = {
//   name: "Alice",
//   func: function () {
//     console.log(`Name is ${this.name}`); //this here refers to an object
//     console.log(this); //this here refers to an object
//   },
// };
// fun.func();
//Output 
//Name is Alice
//{ name: 'Alice', func: [Function: func] }

// In a function this refers to global object
// const func = function () {
//     names = "Aniket"
//     console.log(names)
//     // console.log(this); //this here is global object
//     const add =   function() {
//         console.log(this)        
//     };
//     add()
// };
// func()
// Output
// Object [global]

// 'use strict';
// const new_func = function () {
//   console.log(this);
// };
// new_func();
// Output
// undefined

// const another_func = () => {
//     name: "Manven",

//     console.log(this)
// };
// another_func();


// function User() {
//     this.sname = "John Doe",
//     this.score = 20,
//     this.sayUser = function() {
//         console.log(this.sname);

//         let innerFunction = () => {
//             console.log(this.sname)
//         };
//        function  anotherInnerFunction() {
//             console.log(this.sname);
//         };
//         innerFunction()
//         anotherInnerFunction()
//     }
// }

// let fname = new User()
// fname.sayUser()

// const myObject = {
//     myArrowFunction: null,
//     myMethod: function () {
//       this.myArrowFunction = () => { return console.log("Value of this: ",this) };
//     }
//   };

// function add(x, y) {
//   return x+y
// }
// let result = add.call(this, 10, 20)
// console.log(result)

// console.log(add(2,3))
// console.log(add.prototype)
// console.log(add.length)
  // myObject.myMethod("hi")
  // console.log("Prototype is: ",myObject.prototype)
  // console.log("Object length is: ",myObject.length)

  // var greeting = 'Hi';

  // var messenger = {
  //     greeting: 'Hello'
  // }
  
  // function say(name) {
  //     console.log(greeting + ' ' + name)
  //     console.log(this.greeting + ' ' + name);
  //     console.log(this)
  // }
  // say.call(messenger,'John');
  // Output
  //   Hi John
  // Hello John
  // { greeting: 'Hello' }

  // function Box(height, width) {
  //   this.height = height;
  //   this.width = width;
  // }  
  // function Widget(height, width, color) {
  //   Box.call(this, height, width);
  //   this.color = color;
  // }  
  // let widget = new Widget('red', 100, 200);  
  // console.log(widget);
  // Output
  // Widget { height: 'red', width: 100, color: 200 }

//   const car = {
//     name: 'car',
//     start() {
//       console.log('Start the ' + this.name);
//     },
//     speedUp() {
//       console.log('Speed up the ' + this.name);
//     },
//     stop() {
//       console.log('Stop the ' + this.name);
//     },
//   };
  
//   const aircraft = {
//     name: 'aircraft',
//     fly() {
//       console.log('Fly');
//     },
//   };
  
// car.start.call(aircraft); //Calling car.start method with name property from aircraft
// car.speedUp.call(aircraft); //Calling car.speedUp method with name property from aircraft
// aircraft.fly(); // Normal function
// Output
// Start the aircraft
// Speed up the aircraft
// Fly
// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// }
// function greet(greeting, message) {
//   return `${greeting} ${this.firstName}. ${message}`;
// }
// let result = greet.apply(person, ['Hello', 'How are you?']);
// // Call the greet method with properties of person object
// console.log(result);
// // Output
// // Hello John. How are you?

let person = {
  name: 'John Doe',
  getName: function() {
      console.log(this.name);
  }
};
let display = person.getName.bind(person)
setTimeout(display, 1000);
// Output
// John Doe





// setTimeout(person.getName, 1000)
// Output
// undefined









