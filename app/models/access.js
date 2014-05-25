var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  validate: function (attrs, options) {
    var team = attrs.team;

    if (team === undefined) {
      return "Please fill all the fields";
    }

    if (typeof team != 'string' || team.match(/[a-z0-9]*/i)[0] != team) {
      return "Name should be alphanumeric";
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.ENV.ORG + '/projects/' + this.get('name').toLowerCase() + '/access';

    if (method === 'destroy') {
      options.data = JSON.stringify(model.toJSON());
    }

    return _sync.call(this, method, model, options);
  }
});
