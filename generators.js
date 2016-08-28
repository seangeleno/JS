  function* haiku(){
      console.log("I kill an ant");
      yield null;
      console.log('and realize my three children');
      yield null;
      console.log('have been weatching.');
      yield null;
      console.log('- Kato Shuson');
  }
  var g = haiku();

  function next () {
    if (g.next().done) return;
      setTimeout(next, 1000);
  }
  next();

  /*
  Consumer Generator
  */

  function* consumer(){
    while (true) {
      var val = yield null;
      console.log('Got value', val);
    }
  }
  var c = consumer();
  c.next(1);
