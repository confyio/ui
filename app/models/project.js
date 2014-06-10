var _sync = Backbone.Model.prototype.sync;

export default Backbone.Model.extend({
  initialize: function () {
    this.computedFields = new Backbone.ComputedFields(this);
  },

  computed: {
    id: {
      depends: ['name'],
      get: function (fields) {
        return fields.name.toLowerCase();
      }
    },
    key: {
      depends: ['id'],
      get: function (fields) {
        return 'project-' + fields.id;
      }
    },
    link: {
      depends: ['_id'],
      get: function (fields) {
        return '#' + fields._id;
      }
    }
  },

  validate: function (attrs, options) {
    var name = attrs.name;

    if (name === undefined || attrs.description === undefined) {
      return "Please fill all the fields";
    }

    if (typeof name != 'string' || name.match(/[a-z0-9]*/i)[0] != name) {
      return "Name should be alphanumeric";
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects';

    if (method != 'create' && this.get('name') !== undefined) {
      options.url += '/' + this.get('id');
    }

    return _sync.call(this, method, model, options);
  }
});
