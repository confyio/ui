var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  validate: function (attrs, options) {
    var name = attrs.name;

    if (name === undefined || attrs.email === undefined) {
      return "Name and/or billing email is empty";
    }

    if (typeof name != 'string' || name.match(/[a-z0-9]*/i)[0] != name) {
      return "Name should be alphanumeric";
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs' + (this.id !== undefined ? '/' + this.id : '');
    return _sync.call(this, method, model, options);
  }
});
