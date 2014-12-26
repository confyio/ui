import SyncHelper from 'confy/helpers/sync';

export default Backbone.Model.extend({
  sync: function (method, model, options) {
    if (method != 'read') {
      return;
    }

    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/teams/' + window.team.get('id') + '/projects';

    return SyncHelper.call(this, method, model, options);
  }
});
