import SyncHelper from 'confy/helpers/sync';

export default Backbone.Model.extend({
  idAttribute: "_id",

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/envs/' + window.env.get('id') + '/versions';

    return SyncHelper.call(this, method, model, options);
  }
});
