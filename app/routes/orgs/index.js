import LoadingHelper from 'confy/helpers/loading';
import OrgsHelper from 'confy/helpers/orgs';

var OrgsRoute = {
  index: function () {
    var self = this;

    LoadingHelper();

    OrgsHelper.list(function () {
      $('body').attr('class', 'console');

      self.navigate(window.orgs.at(0).get('link'), {
        trigger: true, replace: true
      });
    });
  }
};

export default OrgsRoute;
