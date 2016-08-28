  /* Function Expressions  - invoking functions by passing as parameters*/
  function functionExpresions () {
  var myName = "Sean",
      myAge = 26,
      currentLocation = "XRY Airport",
      firstAnswer,
      secondAnswer;

  function sayHello () {
    alert("Hello " + myName + " welcome to " + currentLocation);

    }

  function getInput () {
    var firstAnswer = prompt("What is your name?");
    console.warn(firstAnswer);
    var secondAnswer = prompt("How old are you?");
    console.warn(secondAnswer);
    }

  function statusCheck () {
    if (myName === firstAnswer && myAge === secondAnswer) {
        alert('Hard Coded Name Variable Matches')
      }

    else {
      alert("Variables do not match");
      }

    }

  function passParameters ( invokeFirst, invokeSecond, invokeThird ){
    invokeFirst();
    invokeSecond();
    invokeThird();

    }

  passParameters(sayHello, getInput, statusCheck);

};

functionExpresions();
