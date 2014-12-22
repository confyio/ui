/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';

export default React.createClass({
  getInitialState: function () {
    return { team: window.team };
  },
  handleSubmit: function () {
    return;
  },
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView header="Update Team">
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <p className="form-control-static">{this.state.team.get('name')}</p>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input className="form-control" placeholder="Enter team description" defaultValue={this.state.team.get('description')} />
            </div>
            <button type="submit" className="btn btn-default">Update Team</button>
          </form>
          <div className="panel panel-danger">
            <div className="panel-body">
              <p>
                <h4>Delete this team</h4>
                <button className="btn btn-danger pull-right">Delete</button>
              </p>
              <p>Once you delete a team, there is no going back. Please be certain.</p>
            </div>
          </div>
        </MainView>
      </div>
    );
  }
});
