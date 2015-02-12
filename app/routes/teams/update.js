import TeamsViewRoute from 'confy/routes/teams/view';
import TeamsUpdateView from 'confy/views/teams/update';
import TeamsListView from 'confy/views/teams/list';
import TeamsDeleteView from 'confy/views/teams/delete';

export default function (org, team, callback) {
  var self = this;

  TeamsViewRoute(org, team, function () {
    if (window.user.get('username') != window.org.get('owner') || window.team.get('id') == 'owners') {
      self.navigate(window.team.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(TeamsListView({}), $('.sidebar')[0]);
      React.render(TeamsUpdateView({}), $('#wrap')[0]);
      React.render(TeamsDeleteView({}), $('#delete-wrap')[0]);
    }
  });
};
