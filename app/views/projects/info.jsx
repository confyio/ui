/** @jsx React.DOM */

import MainView from 'confy/views/main';
import ProjectsListView from 'confy/views/projects/list';

export default React.createClass({
  render: function () {
    var notOwner = window.user.get('username') != window.org.get('owner');

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
                  <tr>
                    <td>
                      <a href={team.get('link')}>{team.get('name')}</a>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger" disabled={team.get('id') == 'owners' || notOwner ? 'disabled' : ''}>Revoke Access</button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <input id="grant-access" placeholder="Enter team name"/>
                </td>
                <td>
                  <button type="button" className="btn btn-success" disabled={notOwner ? 'disabled' : ''}>Grant Access</button>
                </td>
              </tr>
            </tbody>
          </table>
        </MainView>
      </div>
    );
  }
});
