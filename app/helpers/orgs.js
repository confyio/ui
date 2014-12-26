import User from 'confy/models/user';
import Org from 'confy/models/org';
import OrgCollection from 'confy/collections/org';
import LoadingHelper from 'confy/helpers/loading';

var OrgsHelper = {};

OrgsHelper.load = function (callback) {
  if (window.orgs) return callback();

  new Org().fetch({
    success: function (child, data) {
      window.orgs = new OrgCollection(data);
      return callback();
    }
  });
}

OrgsHelper.list = function (callback) {
  LoadingHelper();

  // Check for auth user
  if (!window.user) {
    window.user = new User();

    window.user.fetch({
      noLogout: true,
      complete: function (response) {
        if (window.user.isNew()) {
          window.App.navigate('#logout', {
            trigger: true
          });
        } else {
          OrgsHelper.load(callback);
        }
      }
    });
  } else {
    OrgsHelper.load(callback);
  }
};

export default OrgsHelper;
