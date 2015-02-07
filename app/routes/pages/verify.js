import UserHelper from 'confy/helpers/user';
import NavbarView from 'confy/views/elements/navbar';

export default function (user, token) {
  var self = this;

  UserHelper.load(true, function () {
    if (window.user) {
      return self.navigate('#orgs', {
        trigger: true, replace: true
      });
    }

    $.ajax({
      url: window.ENV.BASE_URL + '/users/' + user + '/verify/' + token,
      dataType: 'json',
      success: function (data, status) {
        $.cookie('access_token', data.token, {
          expires: 14,
          secure: window.ENV.COOKIE_SECURE
        });

        notif({
          msg: 'Successfully verified your email and logged you in'
        });

        delete window.user;

        window.App.navigate('#orgs', {
          trigger: true, replace: true
        });
      },
      error: function (response, error, status) {
        notif({
          type: 'error',
          msg: 'Unable to verify your email. Please check and try again'
        });
      }
    });

    React.render(NavbarView({type: 'Verify'}), $('#right-nav')[0]);
  });
};
