/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';

export default React.createClass({
  render: function () {
    var notOwner = window.user.get('username') != window.org.get('owner');

    return (
      <div>
        <TeamsListView />
        <MainView type="Team" header={window.team.get('name')}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>User Name</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {window.members.map(function (user) {
                return (
                  <tr>
                    <td>
                      <a href={user.get('link')}>{user.get('username')}</a>
                    </td>
                    <td>
                      <button className="btn btn-danger" disabled={user.get('username') == window.org.get('owner') || notOwner ? 'disabled' : ''}>Remove Member</button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <input id="add-member" placeholder="Enter user name" />
                </td>
                <td>
                  <button className="btn btn-success" disabled={notOwner ? 'disabled' : ''}>Add Member</button>
                </td>
              </tr>
            </tbody>
          </table>
        </MainView>
      </div>
    );
  }
});
