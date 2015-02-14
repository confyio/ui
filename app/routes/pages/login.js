import NavbarView from 'confy/views/elements/navbar';
import PagesLandingView from 'confy/views/pages/landing';
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
    React.render(PagesLandingView({loginError: window.loginError}), $('#wrap')[0]);

    delete window.loginError;
    jQuery('#login-modal').modal('show');
  });
};
