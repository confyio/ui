var sync = Backbone.Model.prototype.sync;

export default function (method, model, options) {
  options.url += '?access_token=' + $.cookie('access_token');

  if (!options.noLogout) {
    options.error = function (response, error, status) {
      if (status == 'Unauthorized' && response.responseJSON.message == 'Bad credentials') {
        //TODO: Set notification
        window.App.navigate('#logout', {
          trigger: true
        });
      }
    }
  }

  return sync.call(this, method, model, options);
}
