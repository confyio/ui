import TeamsListRoute from 'confy/routes/teams/list';
import TeamsInfoView from 'confy/views/teams/info';
import TeamsHelper from 'confy/helpers/teams';

export default function (org, team, callback) {
  var self = this;

  TeamsListRoute(org, function () {
    if (window.team && window.team.get('id') == team) {
      if (callback) return callback();
    }

    window.team = window.teams.findWhere({ id: team });

    delete window.members;
    delete window.team_projects;

    if (callback) return callback();

    TeamsHelper.users(function () {
      React.renderComponent(TeamsInfoView({}), $('#wrap')[0]);
    });
  });
};
