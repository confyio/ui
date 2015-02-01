import TeamsListRoute from 'confy/routes/teams/list';
import TeamsInfoView from 'confy/views/teams/info';
import TeamsHelper from 'confy/helpers/teams';

export default function (org, team, callback) {
  var self = this;

  TeamsListRoute(org, function () {
    if (window.team && window.team.get('id') == team) {
      if (callback) return callback();
    } else {
      window.team = window.teams.findWhere({ id: team });

      if (!window.team) {
        return window.App.navigate(window.org.get('link') + '/teams', {
          trigger: true, replace: true
        });
      }

      delete window.members;
      delete window.team_projects;
    }

    if (callback) return callback();

    TeamsHelper.users(function () {
      React.render(TeamsInfoView({}), $('#wrap')[0]);
    });
  });
};
