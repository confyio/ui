import SyncHelper from 'confy/helpers/sync';

export default Backbone.Model.extend({
  idAttribute: "_id",

  getJSON: function () {
    var ret = this.toJSON();
    delete ret._id;

    return ret;
  },

  sync: function (method, model, options) {
    options = options || {};

    var success = options.success
      , self = this;

    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/envs/' + window.env.get('id') + '/config';

    options.success = function (response, status, xhr) {
      if (typeof response == 'string') {
        response = { _encrypted: response };
      } else if (typeof response != 'object') {
        response = {};
      }

      if (success && typeof success == 'function') {
        success.call(self, response, status, xhr);
      }
    };

    return SyncHelper.call(this, method, model, options);
  }
});
