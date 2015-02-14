/** @jsx React.DOM */

import ModalView from 'confy/views/elements/modal';

export default React.createClass({
  getInitialState: function () {
    return { message: this.props.message };
  },
  handleSubmit: function (e) {
    var self = this
      , username = this.refs.username.getDOMNode().value.trim()
      , password = this.refs.password.getDOMNode().value.trim();

    e.preventDefault();

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
          self.setState({message: 'Unable to log in. Incorrect credentials or unverified user.'});
        } else if (status == 'Unauthorized' && response.responseJSON.message == 'Unverified email') {
          self.setState({message: 'Please verify your email to be able to login.'});
        } else {
          self.setState({message: 'Unable to log in. Please reload the page and try again.'});
        }
      }
    });
  },
  render: function () {
    var error, footer = (
      <div>
        Dont have an account?
        <a href="#register-modal" data-dismiss="modal" data-toggle="modal">Sign up</a>
      </div>
    );

    if (this.state.message) {
      error = (
        <div className="modal-error">{this.state.message}</div>
      );
    }

    return (
      <ModalView id="login-modal" title="Confy Login" footer={footer}>
        {error}
        <form role="form" onSubmit={this.handleSubmit}>
          <input className="form-control" placeholder="Username" ref="username" />
          <input className="form-control" placeholder="Password" ref="password" type="password" />
          <div className="after-inputs">
            <input type="checkbox" ref="remember" defaultChecked />
            <span>Remember me</span>
            <a href="#">Forgot password?</a>
          </div>
          <div className="cleared"></div>
          <button type="submit" className="btn btn-danger">Login</button>
        </form>
      </ModalView>
    );
  }
});
