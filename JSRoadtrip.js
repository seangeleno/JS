var sweetAnnouncement = function () {
  alert("ATTENTION!\n CUPCAKES. \n\n...THAT IS ALL.")
}();

var fruits = ["Apple", "Orange","Pineapple","Cranberry","Pomegranate"];
var fruitJuice = fruits.map(function (fruit) {
  return "\n" + fruit + " juice";
});
alert(fruitJuice);
