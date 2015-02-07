/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
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
      self.setState(ValidationHelper(self.state, model, errs, 'Project'));
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
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Project'));
        }
      }
    });
  },
  render: function () {
    return (
      <MainView header="Create Project">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.name.className}>
            <label>Name</label>
            <input className="form-control" placeholder="Enter project name" ref="name" defaultValue={this.state.name.value} />
            <ValidationView message={this.state.name.message} />
          </div>
          <div className={this.state.description.className}>
            <label>Description</label>
            <input className="form-control" placeholder="Enter project description" ref="description" defaultValue={this.state.description.value} />
            <ValidationView message={this.state.description.message} />
          </div>
          <button type="submit" className="btn btn-default">Create Project</button>
        </form>
      </MainView>
    );
  }
});
