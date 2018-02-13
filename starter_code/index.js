const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();
let person1 = new Person('Julia',2,4);
let person2 = new Person('Jul',1,3);
let person3 = new Person('Juli',2,6);
let person4 = new Person('Juls',10,1);
// myElevator.update();
// myElevator.start();
// myElevator.floorUp();
// myElevator.floorDown();
myElevator.call(person1);
myElevator.call(person2);
myElevator.call(person3);
myElevator.call(person4);
myElevator.start();