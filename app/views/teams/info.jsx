/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import TeamsListView from 'confy/views/teams/list';
import TeamsMemberView from 'confy/views/teams/member';
import Member from 'confy/models/member';

export default React.createClass({
  handleClick: function (e) {
    var message, user = this.refs.name.getDOMNode().value.trim();
    e.preventDefault();

    var member = new Member({
      username: user
    });

    member.save({}, {
      success: function (model, response) {
        notif({
          msg: 'Successfully added member <b>' + user + '</b> to the team'
        });

        delete window.members;
        Backbone.history.loadUrl();
      },
      error: function (model, response) {
        if (response.status == 422) {
          message = 'We are unable to find a user with the name <b>' + model.get('username') + '</b>';
        } else {
          message = 'Unable to add member. Please reload the page and try again.';
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
                <TeamsMemberView user={user} notOwner={notOwner} />
              );
            })}
            <tr>
              <td>
                <input placeholder="Enter user name" ref="name" />
              </td>
              <td>
                <button className="btn btn-success" disabled={notOwner ? 'disabled' : ''} onClick={this.handleClick}>Add Member</button>
              </td>
            </tr>
          </tbody>
        </table>
      </MainView>
    );
  }
});
