/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (this.props.type) {
      var avatar = {
        background: 'url(' + window.user.get('avatar') +') #ffffff'
      };

      return (
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.type == 'Projects' ? 'active' : ''}>
            <a className="link" href={window.org.get('link') + '/projects'}>Projects</a>
          </li>
          <li className={this.props.type == 'Teams' ? 'active' : ''}>
            <a className="link" href={window.org.get('link') + '/teams'}>Teams</a>
          </li>
          <li><a id="avatar" href="#settings" style={avatar}></a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" className="link">Benefits</a></li>
          <li><a href="#" className="link">Login</a></li>
          <li><a href="#" className="link">Signup</a></li>
        </ul>
      );
    };
  }
});
