import OrgsHelper from 'confy/helpers/orgs';

var OrgsRoute = {
  index: function () {
    OrgsHelper.list(function () {
      $('body').attr('class', 'console');
    });
  }
};

export default OrgsRoute;
