// We need to show a button and a list
// This component should know when to show the list based on user
var React = require('react'),
    Button = require('./button'),
    ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function () {
    this.setState({open: !this.state.open})
    
  },
  getInitialState: function () {
    return { open: false }
  },
  render: function() {

    var list = this.props.items.map(function (item) {
      return <ListItem item={item} />
    });

    return <div className='dropdown'>
      <Button
        whenClicked={this.handleClick}
        title={this.props.title}
        className="btn-success"
        subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
      <Button
        whenClicked={this.handleClick}
        title={this.props.title}
        className="btn-warning"
        subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
      <Button
        whenClicked={this.handleClick}
        title={this.props.title}
        className="btn-danger"
        subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});
