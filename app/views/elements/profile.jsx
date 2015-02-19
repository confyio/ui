/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var link;

    if (this.props.avatar) {
      if (window.user) {
        var avatar = {
          background: 'url(' + window.user.get('avatar') +') #ffffff'
        };

        link = (
          <a id="avatar" href="#settings" style={avatar}></a>
        );
      } else {
        link = (
          <button href="#register-modal" className="btn btn-danger" data-dismiss="modal" data-toggle="modal">Signup</button>
        );
      }
    } else {
      if (window.user) {
        link = (
          <a href="#orgs">Dashboard</a>
        );
      } else {
        if (this.props.type == 'Login') {
          link = (
            <a href="#login-modal" data-dismiss="modal" data-toggle="modal">Login</a>
          );
        } else {
          link = (
            <a href="#login">Login</a>
          );
        }
      }
    }

    return (
      <li>
        {link}
      </li>
    );
  }
});
