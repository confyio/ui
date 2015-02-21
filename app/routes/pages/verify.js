import UserHelper from 'confy/helpers/user';
import NavbarView from 'confy/views/elements/navbar';
import User from 'confy/models/user';
import Alert from 'confy/helpers/alert';

export default function (user, token) {
  var self = this;

  UserHelper.load(true, function () {
    $.ajax({
      url: window.ENV.BASE_URL + '/users/' + user + '/verify/' + token,
      dataType: 'json',
      success: function (data, status) {
        $.cookie('access_token', data.token, {
          expires: 14,
          secure: window.ENV.COOKIE_SECURE
        });

        Alert('Successfully verified your email and logged you in', null, true);

        delete data.token;
        window.user = new User(data);

        UserHelper.identify();

        window.App.navigate('#orgs', {
          trigger: true, replace: true
        });
      },
      error: function (response, error, status) {
        window.loginError = 'Unable to verify your email. Please check and try again';

        window.App.navigate('#logout', {
          trigger: true
        });
      }
    });

    React.render(NavbarView({type: 'Verify'}), $('#right-nav')[0]);
  });
};
