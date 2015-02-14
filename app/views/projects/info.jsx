/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectAccessView from 'confy/views/projects/access';
import Access from 'confy/models/access';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  handleChange: function (e) {
    var team = this.refs.name.getDOMNode().value.trim();

    if (team) {
      this.refs.button.getDOMNode().className = 'btn btn-success';
    } else {
      this.refs.button.getDOMNode().className = 'btn btn-success disabled';
    }
  },
  handleClick: function (e) {
    var message, team = this.refs.name.getDOMNode().value.trim();
    e.preventDefault();

    var access = new Access({
      name: team
    });

    access.save({}, {
      success: function (model, response) {
        delete window.access;
        Backbone.history.loadUrl();
        Alert('Successfully granted access to the team <b>' + team + '</b>');
      },
      error: function (model, response) {
        if (response.status == 422) {
          message = 'We are unable to find a team with the name <b>' + model.get('name') + '</b>';
        } else {
          message = 'Unable to grant access. Please reload the page and try again.';
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
                <input className="form-control grant" placeholder="Enter team name" ref="name" onChange={this.handleChange} />
              </td>
              <td>
                <button className="btn btn-success disabled" ref="button" onClick={this.handleClick}>Grant Access</button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <MainView type="Project" header={window.project.get('name')}>
        <table className="table">
          <thead>
            <tr>
              <td colSpan="2">Team Name</td>
            </tr>
          </thead>
          <tbody>
            {window.access.map(function (team) {
              return (
                <ProjectAccessView team={team} notOwner={notOwner} />
              );
            })}
          </tbody>
        </table>
        {grant}
      </MainView>
    );
  }
});
