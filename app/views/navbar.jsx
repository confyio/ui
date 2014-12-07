/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (this.props.type) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.type == 'Projects' ? 'active' : ''}><a href={window.org.get('link') + '/projects'}>Projects</a></li>
          <li className={this.props.type == 'Teams' ? 'active' : ''}><a href={window.org.get('link') + '/teams'}>Teams</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      );
    };
  }
});
