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
    options.url = window.ENV.BASE_URL + '/orgs/' + window.org.get('id') + '/projects/' + window.project.get('id') + '/envs/' + window.env.get('id') + '/config';

    return SyncHelper.call(this, method, model, options);
  }
});
