import UserSettingsView from 'confy/views/user/settings';
import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsSwitchView from 'confy/views/orgs/switch';
import ProjectsListView from 'confy/views/projects/list';
import NavbarView from 'confy/views/elements/navbar';
import ProjectsHelper from 'confy/helpers/projects';

export default function () {
  OrgsListRoute(function () {
    if (!window.org) {
      window.org = window.orgs.first();
    }

    ProjectsHelper.list(function () {
      React.render(OrgsSwitchView(), $('#org-switch')[0]);
      React.render(NavbarView({type: 'Settings'}), $('#right-nav')[0]);
      React.render(ProjectsListView({noActive: true}), $('.sidebar')[0]);
      React.render(UserSettingsView(), $('#wrap')[0]);
    });
  });
};
