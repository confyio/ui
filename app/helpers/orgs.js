import Org from 'confy/models/org';
import OrgCollection from 'confy/collections/org';

var OrgsHelper = {};

OrgsHelper.list = function (callback) {
  if (window.orgs) return callback();

  new Org().fetch({
    success: function (child, data) {
      window.orgs = new OrgCollection(data);
      return callback();
    }
  });
};

export default OrgsHelper;
