/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var link;

    if (this.props.avatar) {
      if (window.user) {
        var avatar = {
          background: 'url(' + window.user.get('avatar') +') #ffffff 0 0/40px 40px'
        };

        link = (
          <div className="dropdown" id="user-menu">
            <div className="dropdown-toggle" id="profile-dropdown" data-toggle="dropdown">
              <div id="avatar" style={avatar}></div>
            </div>
            <ul className="dropdown-menu" role="menu" aria-labelledby="profile-dropdown">
              <li role="presentation">
                <a role="menuitem" tabIndex="-1" href="#settings">
                  <div>Settings</div>
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabIndex="-1" href="#logout">
                  <div>Logout</div>
                </a>
              </li>
            </ul>
          </div>
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
