// function add(fn) {
       
//     var result = 4 * 90; 
    
//     fn();
//     //setTimeout(fn, 2000);
    
// }
// add(function call() {
//     console.log(result);
//     //console.log('callme back function executed');
// });

function async(array, fn){
    
    fn();
}

async([1,2,3,4,5,6], function (x) {
    console.log(x);
});


console.log('i am rahul');
console.log('i am rahul');
console.log('i am rahul');
console.log('i am rahul');
