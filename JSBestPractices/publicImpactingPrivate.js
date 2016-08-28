/* What enables the CAVESOFCLARITY variable to immediately contain the object that serves as our module, rather than a function? */
var CAVESOFCLARITY = function() {
  /* private methods */
  var treasureChests = 3,
      bats = 345;

  /* public methods */
  return {
    stalactites: 4235,
    stalagmites: 3924,
    /*bats: 345,*/
    openChest: function() {
      treasureChests--;
      bats--;
      alert('DA DADADA DAAAAAAA!');
    }
  };
}();
/*treasureChests-- when executed, causes an impact to a private property after you have made the property private through closure.*/

//anything you move above return will be private
