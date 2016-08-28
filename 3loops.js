/*
3 Types of Loops

1. for loop
2. map
3. generator

*/

//For Loop with ES6 let

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn("I've waited " + i + " seconds!");
  }, 1000 * i);
}

// map method aka functional programming

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var results = numbers.map( function (arrayCell) {
    return console.log(arrayCell);
  }
);

//Generators

  function* haiku(){
    console.log('I kill an ant');
    yield null; // the yield keyword requires a value, so I put null
    console.log('and realize my three children');
    yield null;
    console.log('have been watching.');
    yield null;
    console.log('- Kato Shuson');
  }

  var g = haiku();
  function next() {
    if (g.next().done) return;
      setTimeout(next, 1000);
    }
    next();
