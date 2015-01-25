/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectsListView from 'confy/views/projects/list';
import ProjectAccessView from 'confy/views/projects/access';
import Access from 'confy/models/access';

export default React.createClass({
  handleClick: function (e) {
    var message, team = this.refs.name.getDOMNode().value.trim();
    e.preventDefault();

    var access = new Access({
      name: team
    });

    access.save({}, {
      success: function (model, response) {
        notif({
          msg: 'Successfully granted access to the team <b>' + team + '</b>'
        });

        delete window.access;
        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        if (response.status == 422) {
          message = 'We are unable to find a team with the name <b>' + model.get('name') + '</b>';
        } else {
          message = 'Unable to grant access. Please reload the page and try again.';
        }

        notif({
          type: 'error',
          msg: message
        });
      }
    });
  },
  render: function () {
    var notOwner = (window.user.get('username') != window.org.get('owner'));

    return (
      <div>
        <ProjectsListView noEnvActive="true" />
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
                  <input placeholder="Enter team name" ref="name" />
                </td>
                <td>
                  <button className="btn btn-success" disabled={notOwner ? 'disabled' : ''} onClick={this.handleClick}>Grant Access</button>
                </td>
              </tr>
            </tbody>
          </table>
        </MainView>
      </div>
    );
  }
});
