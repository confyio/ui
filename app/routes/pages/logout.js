export default function () {
  if ($.cookie('access_token')) {
    return $.ajax({
      url: window.ENV.BASE_URL + '/user/logout?access_token=' + $.cookie('access_token'),
      dataType: 'json',
      complete: function () {
        $.removeCookie('access_token');

        delete window.user;

        delete window.orgs;
        delete window.org;

        delete window.projects;
        delete window.project;

        delete window.teams;
        delete window.team;

        delete window.envs;
        delete window.env;

        window.App.navigate('#login', {
          trigger: true
        });
      }
    });
  }

  window.App.navigate('#login', {
    trigger: true
  });
};
