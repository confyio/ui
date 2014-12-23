/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';
import Env from 'confy/models/env';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/validation';

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
      self.setState(ValidationHelper(self.state, model, errs, 'Environment'));
    });

    env.save({}, {
      success: function (model, response) {
        delete window.envs;

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Environment'));
        }
      }
    });

    return;
  },
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView header="Create Environment">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className={this.state.name.className}>
              <label>Name</label>
              <input className="form-control" placeholder="Enter environment name" ref="name" defaultValue={this.state.name.value} />
              <ValidationView message={this.state.name.message} />
            </div>
            <div className={this.state.description.className}>
              <label>Description</label>
              <input className="form-control" placeholder="Enter environment description" ref="description" defaultValue={this.state.description.value} />
              <ValidationView message={this.state.description.message} />
            </div>
            <button type="submit" className="btn btn-default">Create Environment</button>
          </form>
        </MainView>
      </div>
    );
  }
});
