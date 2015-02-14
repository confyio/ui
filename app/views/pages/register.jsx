/** @jsx React.DOM */

import ModalView from 'confy/views/elements/modal';
import User from 'confy/models/user';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['username', 'fullname', 'email', 'password']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var user = new User({
      username: this.refs.username.getDOMNode().value.trim(),
      fullname: this.refs.fullname.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim(),
      password: this.refs.password.getDOMNode().value.trim()
    });

    user.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'User', self));
    });

    user.save({}, {
      noLogout: true,
      success: function (model, response) {
        //TODO: load it here
        alert('Successfully registered. Please verify your email to login');

        if (Backbone.history.fragment != 'login') {
          window.App.navigate('#login', {
            trigger: true
          });
        } else {
          Backbone.history.loadUrl();
        }
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'User', self));
        }
      }
    });

  },
  render: function () {
    var footer = (
      <div>
        Already a confy user?
        <a href="#login-modal" data-dismiss="modal" data-toggle="modal">Login</a>
      </div>
    );

    return (
      <ModalView id="register-modal" title="Confy Signup" footer={footer}>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.username.className}>
            <input className="form-control tooltipper" placeholder="Username" ref="username" />
            <ValidationView message={this.state.username.message} direction="left" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Full Name" ref="fullname" />
          </div>
          <div className={this.state.email.className}>
            <input className="form-control tooltipper" placeholder="Email Adress" ref="email" />
            <ValidationView message={this.state.email.message} direction="left" />
          </div>
          <div className={this.state.password.className}>
            <input className="form-control tooltipper" placeholder="Password" ref="password" type="password" />
            <ValidationView message={this.state.password.message} direction="left" />
          </div>
          <div className="after-inputs">
            <input type="checkbox" ref="remember" defaultChecked />
            <span>Tell me about confy news</span>
          </div>
          <div className="cleared"></div>
          <div id="read-tos">By signing up, I agree to Confy's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and <a href="#">Refund Policy</a></div>
          <button type="submit" className="btn btn-danger">Signup</button>
        </form>
      </ModalView>
    );
  }
});
