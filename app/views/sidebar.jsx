/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="head">{this.props.head}</li>
          {this.props.children}
        </ul>
        <a className="btn btn-new" href="#"><i className="fa fa-plus-square-o"></i> Add new projects</a>
      </div>
    );
  }
});
