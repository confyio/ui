/** @jsx React.DOM */

import Project from 'confy/models/project';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['name', 'description']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var project = new Project({
      name: this.refs.name.getDOMNode().value.trim(),
      description: this.refs.description.getDOMNode().value.trim()
    });

    project.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Project', self));
    });

    project.save({}, {
      success: function (model, response) {
        window.projects.add(model);

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Project', self));
        }
      }
    });
  },
  render: function () {
    return (
      <form role="form" onSubmit={this.handleSubmit}>
        <div className={this.state.name.className}>
          <label>Project Name</label>
          <ValidationView message={this.state.name.message} />
          <input className="form-control" placeholder="Enter project name" ref="name" defaultValue={this.state.name.value} />
        </div>
        <div className={this.state.description.className}>
          <label>Description</label>
          <ValidationView message={this.state.description.message} />
          <input className="form-control" placeholder="Enter project description" ref="description" defaultValue={this.state.description.value} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
});
