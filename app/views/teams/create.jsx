/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import TeamsListView from 'confy/views/teams/list';
import Team from 'confy/models/team';
import ValidationHelper from 'confy/helpers/validation';
import ValidationView from 'confy/views/elements/validation';

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
      self.setState(ValidationHelper(self.state, model, errs, 'Team', self));
    });

    team.save({}, {
      success: function (model, response) {
        window.teams.add(model);

        window.App.navigate(model.get('link'), {
          trigger: true
        });
      },
      error: function (model, response) {
        if (response.status == 422) {
          self.setState(ValidationHelper(self.state, model, response.responseJSON.errors, 'Team', self));
        }
      }
    });
  },
  render: function () {
    return (
      <MainView header="Create Team">
        <form role="form" onSubmit={this.handleSubmit}>
          <div className={this.state.name.className}>
            <label>Team Name</label>
            <ValidationView message={this.state.name.message} />
            <input className="form-control" placeholder="Enter team name" ref="name" defaultValue={this.state.name.value} />
          </div>
          <div className={this.state.description.className}>
            <label>Description</label>
            <ValidationView message={this.state.description.message} />
            <input className="form-control" placeholder="Enter team description" ref="description" defaultValue={this.state.description.value} />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </MainView>
    );
  }
});
