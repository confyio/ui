import OrgsViewRoute from 'confy/routes/orgs/view';
import OrgsUpdateView from 'confy/views/orgs/update';
import NavbarView from 'confy/views/elements/navbar';
import OrgsDeleteView from 'confy/views/orgs/delete';

export default function (org, callback) {
  var self = this;

  OrgsViewRoute(org, function () {
    var username = window.user.get('username');

    if (username != window.org.get('owner') || window.org.get('id') == username) {
      self.navigate(window.org.get('link'), {
        trigger: true, replace: true
      });
    } else {
      React.render(NavbarView({type: 'Org'}), $('#right-nav')[0]);
      React.render(OrgsUpdateView({}), $('#wrap')[0]);
      React.render(OrgsDeleteView({}), $('#delete-wrap')[0]);
    }
  });
};
