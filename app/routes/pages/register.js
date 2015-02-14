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

    React.render(NavbarView({type: 'Register'}), $('#right-nav')[0]);
    React.render(PagesLandingView(), $('#wrap')[0]);

    jQuery('#register-modal').modal('show');
  });
};
