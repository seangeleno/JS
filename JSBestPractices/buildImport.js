/*
Inside the LEXICALLAKE immediately-invoked function expression, you'll find a global variable named explorerAnswer that appears nowhere else in the file. It could belong to cavesofclarity.js or explorerentries.js… who knows? Each time the variable is used, the entire scope chain is checked. You can help us achieve better performance with your knowledge of global usage in modules!

First, import the explorerAnswer global by passing it as a parameter at the very bottom. Then, pass answer as the parameter to the function keyword at the top. Lastly, replace explorerAnswer with answer inside the local function scope.
*/
var LEXICALLAKE = (function(answer) {

  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;

  return {
    getFish: function() { return fish; },
    getDepth: function() { return depth; },
    getSleepers: function() {return unknownSleepers; },
    awakenSleeper: function() {
      alert('Far below, in the deep, something awakens. Row faster.');
    },
    summonBoat: function() {
      if (answer === 'agnostic') {
        alert('The boat fades into view.');
      }
      else {
        alert('...the lake is silent.');
      }
    }
  };
})(explorerAnswer);

/*Your import ensures clarity of *scope* within a *module. by using a *parameter*, you protect the *global* that might have been *overwritten*. All imported data becomes *locally* scoped to the *anonymous function*. Thus, when compared with *closure* the entire *searching*, *scope chain*, *imports* are both clearer and faster*/

/*
Adding a new public method named stopSleeper() to the module. We'll need to import a second global variable named madeItAcross, and establish it as a new closure parameter called foundShore.
*/

var LEXICALLAKE123 = (function(answer, foundShore) {

  var depth = 400;
  var fish = 1200;
  var unknownSleepers = 3;

  return {
    getFish: function() { return fish; },
    getDepth: function() { return depth; },
    getSleepers: function() { return unknownSleepers; },
    awakenSleeper: function() {
      alert('Far below, in the deep, something awakens. Row faster.');
    },
    summonBoat: function() {
      if (answer === 'agnostic') {
        alert('The boat fades into view.');
      }
      else {
        alert('...the lake is silent.');
      }
    },
    stopSleeper: function(){
      if (foundShore) {
        alert('That which has awoken shall now return to slumber.');
      }
      if (!foundShore){
        alert('A Sleeper cometh. Abandon hope.');
      }
    }

  };
})(explorerAnswer, madeItAcross);
