import TeamsListRoute from 'confy/routes/teams/list';
import TeamsCreateView from 'confy/views/teams/create';
import TeamsListView from 'confy/views/teams/list';

export default function (org, callback) {
  var self = this;

  TeamsListRoute(org, function () {
    if (window.user.get('username') != window.org.get('owner')) {
      if (!window.team) {
        window.team = window.teams.at(0);
      }

      self.navigate(window.team.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(TeamsListView({noActive: true}), $('.sidebar')[0]);
      React.render(TeamsCreateView({}), $('#wrap')[0]);
    }
  });
};
