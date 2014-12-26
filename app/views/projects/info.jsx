/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';
import ProjectAccessView from 'confy/views/projects/access';

export default React.createClass({
  render: function () {
    var notOwner = (window.user.get('username') != window.org.get('owner'));

    return (
      <div>
        <ProjectsListView />
        <MainView type="Project" header={window.project.get('name')}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Team Name</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {window.access.map(function (team) {
                return (
                  <ProjectAccessView team={team} notOwner={notOwner} />
                );
              })}
              <tr>
                <td>
                  <input id="grant-access" placeholder="Enter team name"/>
                </td>
                <td>
                  <button className="btn btn-success" disabled={notOwner ? 'disabled' : ''}>Grant Access</button>
                </td>
              </tr>
            </tbody>
          </table>
        </MainView>
      </div>
    );
  }
});
