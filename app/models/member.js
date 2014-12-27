import SyncHelper from 'confy/helpers/sync';
import User from 'confy/models/user';

export default User.extend({
  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/teams/' + window.team.get('id') + '/member';

    if (method === 'delete') {
      options.contentType = 'application/json; charset=UTF-8';
      options.data = JSON.stringify({
        user: model.get('id')
      });
    }

    return SyncHelper.call(this, method, model, options);
  }
});
