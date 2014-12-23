/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';
import Team from 'confy/models/team';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/validation';

export default React.createClass({
  getInitialState: function () {
    return ValidationHelper(['name', 'description']);
  },
  handleSubmit: function (e) {
    var self = this;
    e.preventDefault();

    var team = new Team({
      name: this.refs.name.getDOMNode().value.trim(),
      description: this.refs.description.getDOMNode().value.trim()
    });

    team.on('invalid', function (model, errs) {
      self.setState(ValidationHelper(self.state, errs, model, 'Team'));
    });

    team.save({}, {
      success: function (model, response) {
        delete window.teams;

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, response.responseJSON.errors, model, 'Team'));
        }
      }
    });

    return;
  },
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView header="Create Team">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className={this.state.name.className}>
              <label>Name</label>
              <input className="form-control" placeholder="Enter team name" ref="name" defaultValue={this.state.name.value} />
              <ValidationView message={this.state.name.message} />
            </div>
            <div className={this.state.description.className}>
              <label>Description</label>
              <input className="form-control" placeholder="Enter team description" ref="description" defaultValue={this.state.description.value} />
              <ValidationView message={this.state.description.message} />
            </div>
            <button type="submit" className="btn btn-default">Create Team</button>
          </form>
        </MainView>
      </div>
    );
  }
});
