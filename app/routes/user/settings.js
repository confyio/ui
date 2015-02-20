import UserSettingsView from 'confy/views/user/settings';
import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsCreateView from 'confy/views/orgs/create';
import OrgsSwitchView from 'confy/views/orgs/switch';
import NavbarView from 'confy/views/elements/navbar';

export default function () {
  OrgsListRoute(function () {
    React.render(OrgsSwitchView({empty: true}), $('#org-switch')[0]);
    React.render(NavbarView({console: true}), $('#right-nav')[0]);
    React.render(UserSettingsView(), $('#wrap')[0]);
  });
};
