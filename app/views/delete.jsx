/** @jsx React.DOM */

export default React.createClass({
  handleClick: function () {
    return;
  },
  render: function () {
    return (
      <div className="panel panel-danger">
        <div className="panel-body">
          <p>
            <h4>Delete this {this.props.type}</h4>
            <button className="btn btn-danger pull-right" onClick={this.handleClick}>Delete</button>
          </p>
          {this.props.children}
        </div>
      </div>
    );
  }
});
