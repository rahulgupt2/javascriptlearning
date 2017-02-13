function makeAdder(value) {
    var inc = value;
    var sum = 0;
    return function sumu() {
        sum = sum + inc;
        return sum;
    }
}
var MA = makeAdder(10);
var value = MA();
var value = MA();
var value = MA();
var value = MA();
var value = MA();
console.log(value)
/*
so let us discuss what happens here
1. there will be 3 execution scopes will be created 
global, makeAdder, sumu 
2. sumu is pointing to makeAdder, makeAdder is pointing to global.
3. we can see the function returned by makeAdder is pointed by global varibale which is MA.
4. so every time when we do this  "var MA = makeAdder(10);"
5. variable gets allocated with new heap memory.
6. but the varibales (inc, sum) are kept safe.
7.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
8.
*/

// setTimeout(function timeOut() {
//     console.log('wait for a minute')
// }, 0)
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// for(var i =0; i<10000; i++) {
//     console.log(i);
// }
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
// console.log('i am rahul');
