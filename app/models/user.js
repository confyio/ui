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
    },
    avatar: {
      depends: ['email'],
      get: function (fields) {
        var hash = md5(fields.email.trim().toLowerCase());
        return 'https://gravatar.com/avatar/' + hash + '.png?s=60';
      }
    }
  },

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

    if (method != 'create' && this.get('username') !== undefined) {
      this.set('id', this.get('username'));
      options.url += '/' + this.get('id');
    }

    return _sync.call(this, method, model, options);
  }
});
