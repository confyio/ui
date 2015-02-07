import PagesLoginView from 'confy/views/pages/login';
import NavbarView from 'confy/views/elements/navbar';
import UserHelper from 'confy/helpers/user';

export default function () {
  var self = this;

  UserHelper.load(true, function () {
    if (window.user) {
      return self.navigate('#orgs', {
        trigger: true, replace: true
      });
    }

    React.render(NavbarView({type: 'Login'}), $('#right-nav')[0]);
    React.render(PagesLoginView(), $('#wrap')[0]);
  });
};
