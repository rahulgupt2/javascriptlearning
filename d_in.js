// The in operator returns true if the specified property is in the specified object.
var trees = ["redwood", "bay", "cedar", "oak", "maple"];

console.log(0 in trees);// true
console.log(5 in trees);// true
console.log(10 in trees);// false

"bay" in trees    // returns false (you must specify the 
                  // index number, not the value at that index)
"length" in trees // returns true (length is an Array property)
Symbol.iterator in trees // returns true (arrays are iterable, works only in ES6+)

// Predefined objects
"PI" in Math          // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // returns true
"model" in mycar // returns true

/*
You must specify an object on the right side of the in operator. 
For example, you can specify a string created with the String constructor, 
but you cannot specify a string literal.
*/

var color1 = new String("green");
"length" in color1 // returns true

var color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2


// Using in with deleted or undefined properties
// If you delete a property with the delete operator, the in operator returns false for that property.
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // returns false


var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // returns false


//If you set a property to undefined but do not delete it, the in operator returns true for that property.
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // returns true
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // returns true



