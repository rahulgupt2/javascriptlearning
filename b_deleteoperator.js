

//"use strict";
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}
console.log(delete Employee.name)   // returns true
console.log(delete Employee.age)    // returns true
// When trying to delete a property that does 
// not exist, true is returned 
console.log(delete Employee.salary) // returns true

// Non-configurable properties

var EmployeeOne = {};
// to make property nonconfigurable.
Object.defineProperty(EmployeeOne, 'name', {configurable: false})
console.log(delete EmployeeOne.name);  // returns false

/*
var, let and const create non-configurable properties that cannot be deleted with the delete operator:
when using strict mode it throws error 
Delete of an unqualified identifier in strict mode.
*/
var a = {
    b: 'adsdsa'
}
console.log(delete a);
console.log(a)

/*
deleting array element 
*/
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
console.log(trees);
if (3 in trees) {
    // this does not get executed
}
// output : [ 'redwood', 'bay', 'cedar', , 'maple' ]


var a ={
    l : 'cdscsd',
    k: 'dsdfsdf'
};

if(a.l) {
    delete a.l;
}

console.log(a);