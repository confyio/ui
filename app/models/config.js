var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org + '/projects/' + window.project + '/envs/' + this.get('name').toLowerCase() + '/config';

    return _sync.call(this, method, model, options);
  }
});