/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (this.props.type == 'Projects' || this.props.type == 'Teams') {
      var avatar = {
        background: 'url(' + window.user.get('avatar') +') #ffffff'
      };

      $('body').attr('class', 'console');

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
      $('body').attr('class', 'landing');

      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" className="link">Benefits</a></li>
          <li><a href="#" className="link">Pricing</a></li>
          <li className={this.props.type == 'Login' ? 'active' : ''}>
            <a href="#login" className="link">Login</a>
          </li>
        </ul>
      );
    };
  }
});
