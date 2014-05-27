import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsSwitchView from 'confy/views/orgs/switch';
import OrgsSettingsView from 'confy/views/orgs/settings';

export default function (org, callback) {
  var self = this;

  OrgsListRoute(function () {
    window.org = window.orgs.findWhere({ id: org });

    React.renderComponent(OrgsSwitchView(), $('#org-switch')[0]);
    React.renderComponent(OrgsSettingsView(), $('#org-settings')[0]);

    if (callback) return callback();

    // self.navigate(window.orgs.at(0).get('link'), {
    //   trigger: true, replace: true
    // });
  });
};
