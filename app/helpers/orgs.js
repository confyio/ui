import User from 'confy/models/user';
import Org from 'confy/models/org';
import OrgCollection from 'confy/collections/org';
import LoadingHelper from 'confy/helpers/loading';

var OrgsHelper = {};

OrgsHelper.list = function (callback) {
  LoadingHelper();

  if (!window.user) {
    window.user = new User();
    window.user.fetch();
  }

  if (window.orgs) return callback();

  new Org().fetch({
    success: function (child, data) {
      window.orgs = new OrgCollection(data);
      return callback();
    }
  });
};

export default OrgsHelper;