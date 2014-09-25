var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  validate: function (attrs, options) {
    var user = attrs.user;

    if (user === undefined) {
      return "Please fill all the fields";
    }

    if (typeof user != 'string' || user.match(/[a-z0-9]*/i)[0] != user) {
      return "Name should be alphanumeric";
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/teams/' + window.team.get('id') + '/member';

    if (method === 'destroy') {
      options.data = JSON.stringify(model.toJSON());
    }

    return _sync.call(this, method, model, options);
  }
});
