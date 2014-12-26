/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    if (window.user) {
      var avatar = {
        background: 'url(' + window.user.get('avatar') +') #ffffff'
      };

      return (
        <li><a id="avatar" href="#settings" style={avatar}></a></li>
      );
    } else {
      return (
        <li className={this.props.type == 'Login' ? 'active' : ''}>
          <a href="#login" className="link">Login</a>
        </li>
      );
    }
  }
});
