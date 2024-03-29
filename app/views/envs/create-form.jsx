/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import Env from 'confy/models/env';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['name', 'description']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var env = new Env({
      name: this.refs.name.getDOMNode().value.trim(),
      description: this.refs.description.getDOMNode().value.trim()
    });

    env.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Stage', self));
    });

    env.save({}, {
      success: function (model, response) {
        window.envs.add(model);

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Stage', self));
        }
      }
    });
  },
  render: function () {
    return (
      <form role="form" onSubmit={this.handleSubmit}>
        <div className={this.state.name.className}>
          <label>Stage Name</label>
          <ValidationView message={this.state.name.message} />
          <input className="form-control" placeholder="Enter stage name" ref="name" defaultValue={this.state.name.value} />
        </div>
        <div className={this.state.description.className}>
          <label>Description</label>
          <ValidationView message={this.state.description.message} />
          <input className="form-control" placeholder="Enter stage description" ref="description" defaultValue={this.state.description.value} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
});
