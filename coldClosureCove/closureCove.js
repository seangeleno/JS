function testClosure () {
  var x = 4;
  return x;
}

testClosure();

// if you try to display x you get undefined because of scope

  function testClosure2 () {

      var x = 4;
      function closeX (){
        return x;
      }
      return closeX;

  }

  var checkLocalX = testClosure2();
  checkLocalX();
