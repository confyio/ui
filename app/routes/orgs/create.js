import OrgsListRoute from 'confy/routes/orgs/list';
import OrgsCreateView from 'confy/views/orgs/create';
import OrgsSwitchView from 'confy/views/orgs/switch';
import NavbarView from 'confy/views/elements/navbar';

export default function (callback) {
  var self = this;

  OrgsListRoute(function () {
    delete window.org;

    React.render(OrgsSwitchView({empty: true}), $('#org-switch')[0]);
    React.render(NavbarView({console: true}), $('.navbar-collapse')[0]);
    React.render(OrgsCreateView(), $('#wrap')[0]);
  });
};
