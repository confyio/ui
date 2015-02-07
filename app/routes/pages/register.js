import PagesRegisterView from 'confy/views/pages/register';
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

    React.render(NavbarView({type: 'Register'}), $('#right-nav')[0]);
    React.render(PagesRegisterView(), $('#wrap')[0]);
  });
};
