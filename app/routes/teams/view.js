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

    TeamsHelper.projects(function () {
      if (callback) return callback();

      React.renderComponent(TeamsInfoView({}), $('#wrap .row')[0]);
    });
  });
};
