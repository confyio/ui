import OrgsViewRoute from 'confy/routes/orgs/view';
import TeamsHelper from 'confy/helpers/teams';
import NavbarView from 'confy/views/elements/navbar';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {
    React.render(NavbarView({type: 'Team'}), $('#right-nav')[0]);

    TeamsHelper.list(function () {
      if (callback) return callback();

      self.navigate(window.teams.at(0).get('link'), {
        trigger: true, replace: true
      });
    });
  });
};
