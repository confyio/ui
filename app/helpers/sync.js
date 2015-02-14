var sync = Backbone.Model.prototype.sync;

export default function (method, model, options) {
  var callback = options.error;

  if ($.cookie('access_token')) {
    options.url += '?access_token=' + $.cookie('access_token');
  }

  if (!options.noLogout) {
    options.error = function (response, error, status) {
      if (status == 'Unauthorized' && response.responseJSON.message == 'Bad credentials') {
        window.loginError = 'Session timed out. Please login again.';

        delete window.orgs;
        delete window.org;

        window.App.navigate('#logout', {
          trigger: true
        });
      }

      return callback(response, error, status);
    }
  }

  return sync.call(this, method, model, options);
}
