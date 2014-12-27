/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';
import DeleteConfirmationView from 'confy/views/delete';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['description'], window.env);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.env.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Environment'));
    });

    window.env.save({
      description: this.refs.description.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Environment'));
        }
      }
    });
  },
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView header="Update Environment">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <p className="form-control-static">{window.env.get('name')}</p>
            </div>
            <div className={this.state.description.className}>
              <label>Description</label>
              <input className="form-control" placeholder="Enter environment description" ref="description" defaultValue={this.state.description.value} />
              <ValidationView message={this.state.description.message} />
            </div>
            <button type="submit" className="btn btn-default">Update Environment</button>
          </form>
          <DeleteConfirmationView type="environment" model={window.env}>
          </DeleteConfirmationView>
        </MainView>
      </div>
    );
  }
});
