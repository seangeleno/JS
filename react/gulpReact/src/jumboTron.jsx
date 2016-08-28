  const React = require('react');
  module.exports = React.createClass({
    render: function () {
      return <div className="jumbotron">
    <h1>{this.props.header}</h1>
    <p>{this.props.description}</p>
    <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more</a></p>
  </div>
    }
  });
