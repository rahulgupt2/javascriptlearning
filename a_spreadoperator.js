/*
Spread_operator
*/
function myFunction(x, y, z) { console.log(x+''+y+''+z); }
var args = [0, 1, 2];
myFunction(...args);

/*
output : 012
*/

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);