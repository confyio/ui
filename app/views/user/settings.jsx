/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import ModalView from 'confy/views/elements/modal';
import Alert from 'confy/helpers/alert';
import User from 'confy/models/user';
import UserHelper from 'confy/helpers/user';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['fullname', 'email', 'newPassword'], window.user);
  },
  handleSubmit: function () {
    var self = this;

    window.user.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'User', self));
      $('#confirm-password').modal('toggle');
    });

    var password = this.refs.confirm.getDOMNode().value.trim();

    window.user.save({
      fullname: this.refs.fullname.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim(),
      newPassword: this.refs.newPassword.getDOMNode().value.trim()
    }, {
      noLogout: true,
      patch: true,
      headers: {
        'Authorization': 'Basic ' + btoa(window.user.get('username') + ':' + password)
      },
      success: function (model, response) {
        $.removeCookie('access_token');
        delete window.user;

        if (!response.verified) {
          window.loginError = "Please verify your updated email before continuing";

          return window.App.navigate('#login', {
            trigger: true
          });
        }

        if (!response.token) {
          return Alert('There is some strange error. Please reload the page');
        }

        $.cookie('access_token', response.token, {
          expires: 1,
          secure: window.ENV.COOKIE_SECURE
        });

        delete response.token;
        window.user = new User(response);

        UserHelper.identify();

        Backbone.history.loadUrl();
        Alert('Successfully updated your user profile');
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'User', self));
        } else if (response.status == 401 && response.responseJSON.message == 'Bad credentials') {
          Alert('Wrong password. Unable to update the user profile', 'danger');
        } else {
          Alert('Unable to update profile. Please reload the page and try again');
        }

        $('#confirm-password').modal('toggle');
      }
    });
  },
  render: function () {
    return (
      <MainView noActions="true" noAdmin="true" header="Update Profile">
        <form role="form">
          <div className="form-group">
            <label>Full Name</label>
            <input className="form-control" placeholder="Enter your full name here" ref="fullname" defaultValue={this.state.fullname.value} />
          </div>
          <div className={this.state.email.className}>
            <label>Email Address</label>
            <ValidationView message={this.state.email.message} />
            <input className="form-control tooltipper" placeholder="Enter your email adress here" ref="email" defaultValue={this.state.email.value} />
          </div>
          <div className={this.state.newPassword.className}>
            <label>New Password</label>
            <ValidationView message={this.state.newPassword.message} />
            <input className="form-control tooltipper" placeholder="Enter your new password here" ref="newPassword" type="password" defaultValue={this.state.newPassword.value} />
          </div>
          <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#confirm-password">Save</button>
        </form>
        <ModalView id="confirm-password" title="Confirm Password">
          <p>Your password is needed to update your profile. Please fill in your password and confirm updating your profile.</p>
          <input type="password" className="form-control" ref="confirm" placeholder="Enter password" />
          <button type="button" className="btn btn-danger" onClick={this.handleSubmit}>Confirm</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </ModalView>
      </MainView>
    );
  }
});
