/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['description'], window.project);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.project.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Project'));
    });

    window.project.save({
      description: this.refs.description.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        delete window.project;

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
      <div>
        <ProjectsListView />
        <MainView header="Update Project">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <p className="form-control-static">{window.project.get('name')}</p>
            </div>
            <div className={this.state.description.className}>
              <label>Description</label>
              <input className="form-control" placeholder="Enter project description" ref="description" defaultValue={this.state.description.value} />
              <ValidationView message={this.state.description.message} />
            </div>
            <button type="submit" className="btn btn-default">Update Project</button>
          </form>
          <div className="panel panel-danger">
            <div className="panel-body">
              <p>
                <h4>Delete this project</h4>
                <button className="btn btn-danger pull-right">Delete</button>
              </p>
              <p>Once you delete a project, there is no going back. Please be certain.</p>
              <p>All the environments under this project will be deleted.</p>
            </div>
          </div>
        </MainView>
      </div>
    );
  }
});
