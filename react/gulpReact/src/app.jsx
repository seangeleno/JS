  var React = require('react'),
      JumboTron = require('./jumbotron');

  var options = {
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    };


  var element = React.createElement(JumboTron, options);
  ReactDOM.render(element, document.querySelector('.container'));
