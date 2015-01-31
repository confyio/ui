/** @jsx React.DOM */

import User from 'confy/models/user';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['username', 'email', 'password']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var user = new User({
      username: this.refs.username.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim(),
      password: this.refs.password.getDOMNode().value.trim()
    });

    user.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'User'));
    });

    user.save({}, {
      noLogout: true,
      success: function (model, response) {
        notif({
          msg: 'Successfully registered. Please verify your email to login'
        });

        window.App.navigate('#login', {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'User'));
        }
      }
    });
  },
  render: function () {
    return (
      <div id="register-form">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.username.className}>
            <label>Username</label>
            <input className="form-control" placeholder="Enter your username" ref="username" defaultValue={this.state.username.value} />
            <ValidationView message={this.state.username.message} />
          </div>
          <div className={this.state.email.className}>
            <label>Email</label>
            <input className="form-control" placeholder="Enter your email" ref="email" defaultValue={this.state.email.value} />
            <ValidationView message={this.state.email.message} />
          </div>
          <div className={this.state.password.className}>
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Enter your password" ref="password" />
            <ValidationView message={this.state.password.message} />
          </div>
          <button type="submit" className="btn btn-default">Register</button>
        </form>
      </div>
    );
  }
});