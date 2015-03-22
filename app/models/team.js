import SyncHelper from 'confy/helpers/sync';

export default Backbone.Model.extend({
  initialize: function () {
    this.computedFields = new Backbone.ComputedFields(this);
  },

  idAttribute: "_id",

  computed: {
    id: {
      depends: ['name'],
      get: function (fields) {
        return fields.name.toLowerCase().replace(/\ /g, '-');
      }
    },
    key: {
      depends: ['id'],
      get: function (fields) {
        return 'team-' + fields.id;
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
    var name = attrs.name, errs = [];

    if (name === undefined || name === '') {
      errs.push({ field: 'name', code: 'missing' });
    }

    if (attrs.description === undefined || attrs.description === '') {
      errs.push({ field: 'description', code: 'missing' });
    }

    if (typeof name != 'string' || name.length < 3 || name.length > 15 || name.match(/[a-z0-9][a-z0-9\ ]*[a-z0-9]/i)[0] != name) {
      errs.push({ field: 'name', code: 'invalid' });
    }

    if (errs.length > 0) {
      return errs;
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/teams';

    if (method != 'create' && this.get('name') !== undefined) {
      options.url += '/' + this.get('id');
    }

    return SyncHelper.call(this, method, model, options);
  }
});
