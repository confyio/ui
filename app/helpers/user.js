import User from 'confy/models/user';
import LoadingHelper from 'confy/helpers/loading';

var UserHelper = {};

UserHelper.load = function (loginPage, callback) {
  LoadingHelper();

  // Check for auth user
  if (!window.user && $.cookie('access_token')) {
    window.user = new User();

    window.user.fetch({
      noLogout: true,
      complete: function () {
        if (window.user.isNew()) {
          if (loginPage) {
            $.removeCookie('access_token');
            delete window.user;

            return callback();
          } else {
            window.App.navigate('#logout', {
              trigger: true
            });
          }
        } else {
          return callback();
        }
      }
    });
  } else {
    return callback();
  }
};

export default UserHelper;
