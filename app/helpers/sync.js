var sync = Backbone.Model.prototype.sync;

export default function (method, model, options) {
  options.headers = options.headers || {};

  options.headers['Authorization'] = 'Token ' + $.cookie('access_token');

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
