  var React = require('react'),
      Dropdown = require('./dropdown');

  var options = {
    title: "Choose a dessert", //what should show up on teh button to open/close
    items: [ //list of items to show in the dropdown
      'Apple Pie',
      'Peach Cobbler',
      'Cocunut Cream Pie'
    ]
  };

  var element = React.createElement(Dropdown, options);
  React.render(element, document.querySelector('.container'));
