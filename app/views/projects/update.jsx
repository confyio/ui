/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['description'], window.project);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.project.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Project', self));
    });

    window.project.save({
      description: this.refs.description.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        Backbone.history.loadUrl();
        Alert('Successfully updated the project <b>' + window.project.get('name') + '</b>');
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
      <MainView header="Update Project">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Project Name</label>
            <p className="form-control-static">{window.project.get('name')}</p>
          </div>
          <div className={this.state.description.className}>
            <label>Description</label>
            <ValidationView message={this.state.description.message} />
            <input className="form-control" placeholder="Enter project description" ref="description" defaultValue={this.state.description.value} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </MainView>
    );
  }
});
