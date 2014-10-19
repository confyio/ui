/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView header="Update Team">
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" disabled="disabled" defaultValue={window.team.get('name')} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" placeholder="Enter team description" defaultValue={window.team.get('description')} />
          </div>
          <button className="btn btn-default">Update Team</button>
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
