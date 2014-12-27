/** @jsx React.DOM */

export default React.createClass({
  getInitialState: function () {
    return {message: ''};
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var username = this.refs.username.getDOMNode().value.trim()
      , password = this.refs.password.getDOMNode().value.trim();

    $.ajax({
      url: window.ENV.BASE_URL + '/user/login',
      dataType: 'json',
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      },
      success: function (data, status) {
        $.cookie('access_token', data.token, {
          expires: 14,
          secure: window.ENV.COOKIE_SECURE
        });

        window.App.navigate('#orgs', {
          trigger: true
        });
      },
      error: function (response, error, status) {
        if (status == 'Unauthorized' && response.responseJSON.message == 'Bad credentials') {
          //TODO: Set notification
          self.setState(response.responseJSON);
        }
      }
    });
  },
  render: function () {
    return (
      <div id="login-form">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" placeholder="Username" ref="username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Password" ref="password" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
});