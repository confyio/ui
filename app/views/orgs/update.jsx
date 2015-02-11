/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import Org from 'confy/models/org';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import DeleteConfirmationView from 'confy/views/elements/delete';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['email'], window.org);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.org.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Org'));
    });

    window.org.save({
      email: this.refs.email.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        notif({
          msg: 'Successfully updated the organization <b>' + window.org.get('name') + '</b>'
        });

        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Org'));
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
            <input className="form-control" placeholder="Enter organization's billing email" ref="email" defaultValue={this.state.email.value} />
            <ValidationView message={this.state.email.message} />
          </div>
          <button type="submit" className="btn btn-primary">Update Organization</button>
        </form>
        <DeleteConfirmationView type="organization" model={window.org}>
          <p>All the projects and teams under this organization will be deleted.</p>
        </DeleteConfirmationView>
      </MainView>
    );
  }
});
