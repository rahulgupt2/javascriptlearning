// The new operator creates an instance of a user-defined object type
// or of one of the built-in object types that has a constructor function

/*
Parameters
constructor
A function that specifies the type of the object instance.
arguments
A list of values that the constructor will be called with.
*/


function Car() {}
car1 = new Car();
 
console.log(car1.color);    // undefined
 
Car.prototype.color = null;
console.log(car1.color);    // null
 
car1.color = "black";
console.log(car1.color);   // black


//new.target in function calls

function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"

