let us say, we have 10 file read functions in nodejs program.

like this :

fileread.js

fs = require('fs')

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

so when node starts with 1st line. so node come to know there is a event which is file read with a call back. the event will be registred with the event loop.

node got to know this is i/o blocking event. then it is assigned to a worker thread which is not accessible by us as it comes under libuv. 

so nodejs is single threaded.it just have an event loop. in this case event loop assigned i/o task to libuv which creates saperate worker thread for i/o operation. 

when that operation finishes callback function is executed. 


================18-01==============

My understanding of the technology is that it is compiled on the fly into assembly. 
On the speed spectrum it is slower than Java but faster than Ruby and Python. 
On the client side an interpreter makes sense but on the server side my first thought
is that compilation prior to running, or at least having the option to do so, is an optimal architecture. 
If the JavaScript was pre compiled in this way would it run faster than Java? Or is it something to do with 
weakly typed languages which means that JavaScript will always be slower than Java?

cross platform code for nodejs.
https://shapeshed.com/writing-cross-platform-node/


open source means software is free of charge any one can modify it and improve it.






