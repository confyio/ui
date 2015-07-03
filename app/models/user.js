import SyncHelper from 'confy/helpers/sync';
import MD5Helper from 'confy/helpers/md5';

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
          hash = MD5Helper(fields.email.trim().toLowerCase());
        } else {
          hash = window.ENV.GRAVATAR;
        }

        return 'https://gravatar.com/avatar/' + hash + '.png?s=80';
      }
    }
  },

  validate: function (attrs, options) {
    var username = attrs.username, errs = [];

    if (username === undefined || username === '') {
      errs.push({ field: 'username', code: 'missing' });
    }

    if (attrs.email === undefined || attrs.email === '') {
      errs.push({ field: 'email', code: 'missing' });
    }

    if (!options.patch && (attrs.password === undefined || attrs.password === '')) {
      errs.push({ field: 'password', code: 'missing' });
    }

    if (typeof username != 'string' || username.length < 3 || username.length > 15 || username.match(/[a-z0-9]*/i)[0] != username) {
      errs.push({ field: 'username', code: 'invalid' });
    }

    if (!options.patch && (typeof attrs.password != 'string' || attrs.password.length < 6)) {
      errs.push({ field: 'password', code: 'insecure' });
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
