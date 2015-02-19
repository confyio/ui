export default function () {
  $.ajax({
    url: window.ENV.BASE_URL + '/user/logout',
    dataType: 'json',
    complete: function () {
      $.removeCookie('access_token');
      delete window.user;

      window.App.navigate('#login', {
        trigger: true
      });
    }
  });

  this.navigate('#login', {
    trigger: true
  });
};
