/** @jsx React.DOM */

import ModalView from 'confy/views/elements/modal';
import User from 'confy/models/user';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import LoadingView from 'confy/views/elements/loading';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['username', 'email', 'password']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var userObj = {
      username: this.refs.username.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim(),
      password: this.refs.password.getDOMNode().value.trim()
    };

    if (!window.ENV.ON_PREMISE) {
      userObj.news = this.refs.news.getDOMNode().checked;
    }

    var user = new User(userObj);

    user.on('invalid', function (model, errs) {
      delete self.props.loading;
      self.setState(ValidationHelper(self.state, model, errs, 'User', self));
    });

    this.props.loading = true;
    this.forceUpdate();

    user.save({}, {
      noLogout: true,
      success: function (model, response) {
        if (!window.ENV.ON_PREMISE) {
          alert('Successfully registered. Please verify your email to login');
        } else {
          alert('Successfully registered');
        }

        $.removeCookie('access_token');
        delete window.user;

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
          delete self.props.loading;
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'User', self));
        }
      }
    });
  },
  render: function () {
    var subscribe, footer = (
      <div>
        Already a confy user?
        <a href="#login-modal" data-dismiss="modal" data-toggle="modal">Login</a>
      </div>
    );

    if (!window.ENV.ON_PREMISE) {
      subscribe = (
        <div className="after-inputs">
          <input id="register-news" type="checkbox" ref="news" defaultChecked />
          <label htmlFor="register-news">Tell me about confy news</label>
        </div>
      );
    }

    return (
      <ModalView id="register-modal" title="Confy Signup" footer={footer}>
        <LoadingView noDummy={this.props.loading === true} />
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.username.className}>
            <input className="form-control tooltipper" placeholder="Username" ref="username" />
            <ValidationView message={this.state.username.message} direction="left" />
          </div>
          <div className={this.state.email.className}>
            <input className="form-control tooltipper" placeholder="Email Adress" ref="email" />
            <ValidationView message={this.state.email.message} direction="left" />
          </div>
          <div className={this.state.password.className}>
            <input className="form-control tooltipper" placeholder="Password" ref="password" type="password" />
            <ValidationView message={this.state.password.message} direction="left" />
          </div>
          {subscribe}
          <div className="cleared"></div>
          <div id="read-tos">By signing up, I agree to Confy's <a href="#tos">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></div>
          <button type="submit" className="btn btn-danger">Signup</button>
        </form>
      </ModalView>
    );
  }
});
