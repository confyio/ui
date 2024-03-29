/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import Org from 'confy/models/org';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['name', 'email']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var org = new Org({
      name: this.refs.name.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim()
    });

    org.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Org', self));
    });

    org.save({}, {
      success: function (model, response) {
        window.orgs.add(model);

        window.App.navigate(model.get('link'), {
          trigger: true
        });
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
      <MainView noActions="true" noAdmin="true" header="Create Organization">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.name.className}>
            <label>Organization Name</label>
            <ValidationView message={this.state.name.message} />
            <input className="form-control" placeholder="Enter organization name" ref="name" defaultValue={this.state.name.value} />
          </div>
          <div className={this.state.email.className}>
            <label>Billing Email</label>
            <ValidationView message={this.state.email.message} />
            <input className="form-control" placeholder="Enter organization's billing email" ref="email" defaultValue={this.state.email.value} />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </MainView>
    );
  }
});
