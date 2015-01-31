import SyncHelper from 'confy/helpers/sync';

export default Backbone.Model.extend({
  initialize: function () {
    this.computedFields = new Backbone.ComputedFields(this);
  },

  idAttribute: "_id",

  computed: {
    id: {
      depends: ['username'],
      get: function (fields) {
        return fields.username.toLowerCase();
      }
    },
    link: {
      depends: ['_id'],
      get: function (fields) {
        return '#' + fields._id;
      }
    },
    avatar: {
      depends: ['email'],
      get: function (fields) {
        var hash;

        if (fields.email) {
          hash = md5(fields.email.trim().toLowerCase());
        } else {
          hash = window.ENV.GRAVATAR;
        }

        return 'https://gravatar.com/avatar/' + hash + '.png?s=60';
      }
    }
  },

  validate: function (attrs, options) {
    var username = attrs.username, errs = [];

    if (username === undefined || username === '') {
      errs.push({ field: 'username', code: 'missing'});
    }

    if (attrs.email === undefined || attrs.email === '') {
      errs.push({ field: 'email', code: 'missing'});
    }

    if (typeof username != 'string' || username.match(/[a-z0-9]*/i)[0] != username) {
      errs.push({ field: 'username', code: 'invalid'});
    }

    if (errs.length > 0) {
      return errs;
    }
  },

  sync: function (method, model, options) {
    options = options || {};
    options.url = window.ENV.BASE_URL + '/user';

    return SyncHelper.call(this, method, model, options);
  }
});
