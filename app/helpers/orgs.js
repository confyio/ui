import Org from 'confy/models/org';
import OrgCollection from 'confy/collections/org';
import UserHelper from 'confy/helpers/user';

var OrgsHelper = {};

OrgsHelper.list = function (callback) {
  UserHelper.load(false, function () {
    if (window.orgs) return callback();

    new Org().fetch({
      success: function (child, data) {
        window.orgs = new OrgCollection(data);
        return callback();
      }
    });
  });
}

export default OrgsHelper;
