/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['fullname', 'email'], window.user);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.user.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'User', self));
    });

    window.user.save({
      fullname: this.refs.fullname.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
        Alert('Successfully updated your user profile');
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'User', self));
        }
      }
    });
  },
  render: function () {
    return (
      <MainView noActions="true" noAdmin="true" header="Update Profile">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Userame</label>
            <p className="form-control-static">{window.user.get('username')}</p>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input className="form-control" placeholder="Enter your full name here" ref="fullname" defaultValue={this.state.fullname.value} />
          </div>
          <div className={this.state.email.className}>
            <label>Email Address</label>
            <ValidationView message={this.state.email.message} />
            <input className="form-control tooltipper" placeholder="Enter your email adress here" ref="email" defaultValue={this.state.email.value} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </MainView>
    );
  }
});
