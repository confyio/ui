var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  sync: function (method, model, options) {
    if (method != 'read') {
      return;
    }

    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/teams';

    return _sync.call(this, method, model, options);
  }
});
