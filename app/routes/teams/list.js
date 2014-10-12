import OrgsViewRoute from 'confy/routes/orgs/view';
import TeamsHelper from 'confy/helpers/teams';
import NavbarView from 'confy/views/navbar';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {
    React.renderComponent(NavbarView({type: 'Teams'}), $('.navbar-collapse')[0]);

    TeamsHelper.list(function () {
      if (callback) return callback();

      self.navigate(window.teams.at(0).get('link'), {
        trigger: true, replace: true
      });
    });
  });
};
