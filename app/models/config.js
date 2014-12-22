var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  initialize: function () {
    this.computedFields = new Backbone.ComputedFields(this);
  },

  idAttribute: "_id",

  computed: {
    link: {
      depends: ['_id'],
      get: function (fields) {
        return '#' + fields._id;
      }
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/envs/' + window.env.get('id') + '/config';

    return _sync.call(this, method, model, options);
  }
});
