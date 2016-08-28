const React = require('react'),
      Dropdown = require('./drowpdown');

module.exports = React.createClass({
  render: function () {
    this.props.items.map(function (item) {
      return <ListItem item={item} />
    })
    return <ul>
      {list}
    </ul>
  }
})
