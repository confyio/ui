var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  validate: function (attrs, options) {
    var username = attrs.username;

    if (username === undefined || attrs.email === undefined || attrs.password === undefined) {
      return "Please fill the fields";
    }

    if (typeof username != 'string' || username.match(/[a-z0-9]*/i)[0] != username) {
      return "Name should be alphanumeric";
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/user';
    return _sync.call(this, method, model, options);
  }
});
