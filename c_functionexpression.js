notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
   console.log("bar");
};

// Named function expression

var math = {
      factorial: function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
};
console.log(math.factorial(3));
