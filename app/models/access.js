import SyncHelper from 'confy/helpers/sync';
import Team from 'confy/models/team';

export default Team.extend({
  validate: function () {
    return;
  },
  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/access';

    if (method === 'delete' || method === 'create') {
      options.contentType = 'application/json; charset=UTF-8';
      options.data = JSON.stringify({
        team: model.get('id')
      });
    }

    return SyncHelper.call(this, method, model, options);
  }
});
