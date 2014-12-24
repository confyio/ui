/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';
import DeleteConfirmationView from 'confy/views/delete';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['description'], window.team);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    window.team.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, model, errs, 'Team'));
    });

    window.team.save({
      description: this.refs.description.getDOMNode().value.trim()
    }, {
      patch: true,
      success: function (model, response) {
        delete window.team;

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Team'));
        }
      }
    });
  },
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView header="Update Team">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <p className="form-control-static">{window.team.get('name')}</p>
            </div>
            <div className={this.state.description.className}>
              <label>Description</label>
              <input className="form-control" placeholder="Enter team description" ref="description" defaultValue={this.state.description.value} />
              <ValidationView message={this.state.description.message} />
            </div>
            <button type="submit" className="btn btn-default">Update Team</button>
          </form>
          <DeleteConfirmationView type="team" model={window.team}>
          </DeleteConfirmationView>
        </MainView>
      </div>
    );
  }
});
