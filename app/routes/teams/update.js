import TeamsViewRoute from 'confy/routes/teams/view';
import TeamsUpdateView from 'confy/views/teams/update';

export default function (org, team, callback) {
  var self = this;

  TeamsViewRoute(org, team, function () {
    if (window.user.get('username') != window.org.get('owner') || window.team.get('id') == 'owners') {
      self.navigate(window.team.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.renderComponent(TeamsUpdateView({}), $('#wrap .row')[0]);
    }
  });
};
