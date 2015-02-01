import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsSwitchView from 'confy/views/orgs/switch';

export default function (org, callback) {
  var self = this;

  OrgsListRoute(function () {
    if (window.org && window.org.get('id') == org) {
      if (callback) return callback();
    } else {
      window.org = window.orgs.findWhere({ id: org });

      if (!window.org) {
        return window.App.navigate('#orgs', {
          trigger: true, replace: true
        });
      }

      delete window.projects;
      delete window.project;

      delete window.teams;
      delete window.team;

      delete window.envs;
      delete window.env;
    }

    React.render(OrgsSwitchView(), $('#org-switch')[0]);

    if (callback) return callback();

    self.navigate(Backbone.history.fragment + '/projects', {
      trigger: true, replace: true
    });
  });
};
