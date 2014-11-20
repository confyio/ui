/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';

export default React.createClass({
  handleSubmit: function () {
    return;
  },
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView type="Team" header="Create Team">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Enter team name" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input className="form-control" placeholder="Enter team description" />
            </div>
            <button type="submit" className="btn btn-default">Create Team</button>
          </form>
        </MainView>
      </div>
    );
  }
});
