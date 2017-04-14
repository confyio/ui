/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import TeamsListView from 'confy/views/teams/list';
import TeamsMemberView from 'confy/views/teams/member';
import Member from 'confy/models/member';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  handleChange: function (e) {
    var user = this.refs.name.getDOMNode().value.trim();

    if (user) {
      this.refs.button.getDOMNode().className = 'btn btn-success';
    } else {
      this.refs.button.getDOMNode().className = 'btn btn-success disabled';
    }
  },
  handleClick: function (e) {
    var message, user = this.refs.name.getDOMNode().value.trim();
    e.preventDefault();

    var member = new Member({
      username: user
    });

    member.save({}, {
      success: function (model, response) {
        delete window.members;
        Backbone.history.loadUrl();
        Alert('Successfully added member <b>' + user + '</b> to the team', null, true);
      },
      error: function (model, response) {
        if (response.status == 422) {
          message = 'We are unable to find a user with the name <b>' + model.get('username') + '</b>';
        } else {
          message = 'Unable to add member. Please reload the page and try again.';
        }

        Alert(message, 'danger');
      }
    });
  },
  render: function () {
    var grant, notOwner = (window.user.get('username') != window.org.get('owner'));

    if (!notOwner) {
      grant = (
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input className="form-control grant" placeholder="Enter username or email" ref="name" onChange={this.handleChange} />
              </td>
              <td>
                <button className="btn btn-success disabled" ref="button" onClick={this.handleClick}>Add Member</button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <MainView type="Team" header={window.team.get('name')}>
        <table className="table">
          <thead>
            <tr>
              <td colSpan="2">User Name</td>
            </tr>
          </thead>
          <tbody>
            {window.members.map(function (user) {
              return (
                <TeamsMemberView user={user} notOwner={notOwner} />
              );
            })}
          </tbody>
        </table>
        {grant}
      </MainView>
    );
  }
});
