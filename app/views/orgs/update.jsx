/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import Org from 'confy/models/org';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['email'], window.org);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.org.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Org', self));
    });

    window.org.save({
      email: this.refs.email.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
        Alert('Successfully updated the organization <b>' + window.org.get('name') + '</b>');
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Org', self));
        }
      }
    });
  },
  render: function () {
    return (
      <MainView header="Update Organization">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Organization Name</label>
            <p className="form-control-static">{window.org.get('name')}</p>
          </div>
          <div className={this.state.email.className}>
            <label>Billing Email</label>
            <ValidationView message={this.state.email.message} />
            <input className="form-control" placeholder="Enter organization's billing email" ref="email" defaultValue={this.state.email.value} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </MainView>
    );
  }
});
